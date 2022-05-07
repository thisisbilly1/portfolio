import { OBJLoader } from "../../utils/OBJLoader";
import { MTLLoader } from '../../utils/MTLLoader';

import * as THREE from 'three'
import { bladeVertex, bladeFragment } from '../../utils/shaders/blade';

export class RockMonster {
    constructor() {
        this.ctx = null;
        this.bladeUniforms = null;
        this.mesh = null;
        this.outlined = true
        this.needsAnimation = true
    }

    async load(ctx, onProgress) {
        this.ctx = ctx

        const textureLoader = new THREE.TextureLoader()
        this.bladeUniforms = {
            "fogDensity": { value: 0.3 },
            "fogColor": { value: new THREE.Vector3(0, 165, 255) },
            "time": { value: 1.0 },
            "uvScale": { value: new THREE.Vector2(0.5, 0.5) },
            "texture1": { value: textureLoader.load(process.env.PUBLIC_URL + '/models/sword/blade/cloud.png') },
            "texture2": { value: textureLoader.load(process.env.PUBLIC_URL + '/models/rockmonster/lava.jpg') }
        };

        this.bladeUniforms["texture1"].value.wrapS = this.bladeUniforms["texture1"].value.wrapT = THREE.RepeatWrapping;
        this.bladeUniforms["texture2"].value.wrapS = this.bladeUniforms["texture2"].value.wrapT = THREE.RepeatWrapping;

        const bladeMaterial = new THREE.ShaderMaterial({
            uniforms: this.bladeUniforms,
            vertexShader: bladeVertex(),
            fragmentShader: bladeFragment(),
        })

        const materials = await new MTLLoader()
            .setPath(process.env.PUBLIC_URL + "/models/rockmonster/")
            .loadAsync("rockmonster.mtl", onProgress)
        materials.preload();

        this.mesh = await new OBJLoader()
            .setMaterials(materials)
            .setPath(process.env.PUBLIC_URL + "/models/rockmonster/")
            .loadAsync("rockmonster.obj", onProgress)

        this.mesh.scale.x = 10
        this.mesh.scale.y = 10
        this.mesh.scale.z = 10

        this.mesh.rotation.y = Math.PI + Math.PI / 4

        this.mesh.position.y = -10

        this.mesh.traverse((child) => {
            if (child.isMesh) {
                if (child.material.name === "back") {
                    child.material = bladeMaterial
                }
            }
        });

        this.ctx.scene.add(this.mesh)

        return this
    }

    render() {
        const delta = 3 * this.ctx.clock.getDelta()
        this.bladeUniforms['time'].value += 0.15 * delta
    }

}