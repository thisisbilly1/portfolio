import * as THREE from 'three'
import { OBJLoader } from "../utils/OBJLoader";
import { MTLLoader } from '../utils/MTLLoader';
import { bladeVertex, bladeFragment } from '../utils/shaders/blade';

export class Sword {
    constructor() {
        this.ctx = null
        this.mesh = null
        this.bladeUniforms = null;
        this.outlined = true
        this.needsAnimation = true
    }

    async load(ctx, onProgress) {
        this.ctx = ctx

        // create the custom shader material
        const textureLoader = new THREE.TextureLoader()
        this.bladeUniforms = {
            "fogDensity": { value: 0.45 },
            "fogColor": { value: new THREE.Vector3(0, 0, 0) },
            "time": { value: 1.0 },
            "uvScale": { value: new THREE.Vector2(1.0, 1.0) },
            "texture1": { value: textureLoader.load(process.env.PUBLIC_URL + '/models/sword/blade/cloud.png') },
            "texture2": { value: textureLoader.load(process.env.PUBLIC_URL + '/models/sword/blade.png') }
        };

        this.bladeUniforms["texture1"].value.wrapS = this.bladeUniforms["texture1"].value.wrapT = THREE.RepeatWrapping;
        this.bladeUniforms["texture2"].value.wrapS = this.bladeUniforms["texture2"].value.wrapT = THREE.RepeatWrapping;

        this.bladeMaterial = new THREE.ShaderMaterial({
            uniforms: this.bladeUniforms,
            vertexShader: bladeVertex(),
            fragmentShader: bladeFragment(),
        })

        // load obj materials
        const materials = await new MTLLoader()
            .setPath(process.env.PUBLIC_URL + "/models/sword/")
            .loadAsync("blade.mtl", onProgress)
        materials.preload()

        // load model
        this.mesh = await new OBJLoader()
            .setMaterials(materials)
            .setPath(process.env.PUBLIC_URL + "/models/sword/")
            .loadAsync("blade.obj", onProgress)

        this.mesh.traverse((child) => {
            if (child.isMesh) {
                if (child.name === "bigBlade" || child.name === "smallBlade") {
                    //create a new shader material for the blades
                    child.material = this.bladeMaterial
                    child.layers.enable(this.ctx.BLOOM_SCENE)
                }
            }
        });
        this.ctx.scene.add(this.mesh)
        return this;
    }

    render() {
        const delta = 5 * this.ctx.clock.getDelta()
        this.bladeUniforms['time'].value += 0.15 * delta
    }

}