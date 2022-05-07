import { OBJLoader } from "../../utils/OBJLoader";
import { MTLLoader } from '../../utils/MTLLoader';

export class Person {
    constructor() {
        this.mesh = null
        this.needsAnimation = false
        this.outlined = true
    }

    async load(ctx, onProgress) {
        this.ctx = ctx
        const materials = await new MTLLoader()
            .setPath(process.env.PUBLIC_URL + "/models/person/")
            .loadAsync("ARperson.mtl", onProgress)
        materials.preload()

        this.mesh = await new OBJLoader()
            .setMaterials(materials)
            .setPath(process.env.PUBLIC_URL + "/models/person/")
            .loadAsync("ARperson.obj", onProgress)
        this.mesh.scale.x = .45
        this.mesh.scale.y = .45
        this.mesh.scale.z = .45

        let r = (315) * (Math.PI / 180)
        let l = 18

        this.mesh.position.x = Math.cos(r) * l
        this.mesh.position.z = Math.sin(r) * l
        this.mesh.rotation.y = r - Math.PI / 2

        this.ctx.scene.add(this.mesh)

        return this
    }

    render() {
    }

}