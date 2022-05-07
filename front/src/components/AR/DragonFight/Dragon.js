import * as THREE from 'three'
import { OBJLoader } from "../../utils/OBJLoader";
import { MTLLoader } from '../../utils/MTLLoader';

export class Dragon {
    constructor() {
        this.ctx = null
        this.mesh = null
        this.needsAnimation = false
        this.outlined = true
    }

    async load(ctx, onProgress) {
        this.ctx = ctx;
        const materials = await new MTLLoader()
            .setPath(process.env.PUBLIC_URL + "/models/dragon/")
            .loadAsync("dragon.mtl", onProgress)
        materials.preload()

        this.mesh = await new OBJLoader()
            .setMaterials(materials)
            .setPath(process.env.PUBLIC_URL + "/models/dragon/")
            .loadAsync("dragon.obj", onProgress)

        this.mesh.scale.x = 5
        this.mesh.scale.y = 5
        this.mesh.scale.z = 5

        let r = (135) * (Math.PI / 180)
        let l = 10

        this.mesh.position.x = Math.cos(r) * l
        this.mesh.position.z = Math.sin(r) * l
        this.mesh.rotation.y = r


        // create a gradient so that the lighting is a flatter
        const colors = new Uint8Array(4)
        for (let c = 0; c <= colors.length; c++) {
            colors[c] = (c / colors.length) * 256
        }
        const format = (this.ctx.renderer.capabilities.isWebGL2) ? THREE.RedFormat : THREE.LuminanceFormat
        const gradientMap = new THREE.DataTexture(colors, colors.length, 1, format)
        gradientMap.needsUpdate = true

        // update materials
        this.mesh.traverse((child) => {
            child.children.forEach(c => {
                var mats = []
                c.material.forEach(mat => {
                    const newMat = new THREE.MeshToonMaterial({
                        color: mat.color,
                        gradientMap: gradientMap
                    })
                    mats.push(newMat)
                })
                c.material = mats
            })
        })
        this.ctx.scene.add(this.mesh)

        return this
    }

    render() {
    }

}