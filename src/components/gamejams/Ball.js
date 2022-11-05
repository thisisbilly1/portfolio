import { OBJLoader } from "../utils/OBJLoader";
import { MTLLoader } from '../utils/MTLLoader';

export class Ball {
    constructor() {
        this.ctx = null
        this.mesh = null
        this.needsAnimation = false
        this.outlined = true
    }

    async load(ctx, onProgress) {
        this.ctx = ctx;
        const materials = await new MTLLoader()
            .setPath(process.env.PUBLIC_URL + "/models/ball/")
            .loadAsync("ball.mtl", onProgress)
        materials.preload()

        this.mesh = await new OBJLoader()
            .setMaterials(materials)
            .setPath(process.env.PUBLIC_URL + "/models/ball/")
            .loadAsync("ball.obj", onProgress)

        this.mesh.position.y = -15

        this.mesh.scale.x = 5
        this.mesh.scale.y = 5
        this.mesh.scale.z = 5

        this.mesh.rotation.y = -3 * Math.PI / 4

        this.ctx.scene.add(this.mesh)

        return this
    }
}