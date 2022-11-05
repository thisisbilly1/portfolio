import { GLTFLoader } from "../utils/GLTFLoader";
import { AnimationMixer } from "three"
export class Muncher {
    constructor() {
        this.ctx = null
        this.mesh = null
        this.needsAnimation = true
        this.outlined = true
        this.mixer = null
    }

    async load(ctx, onProgress) {
        this.ctx = ctx;
        const mesh = await new GLTFLoader()
            .loadAsync(process.env.PUBLIC_URL + "/models/muncher/muncher.gltf", onProgress)

        this.mixer = new AnimationMixer(mesh.scene);
        mesh.animations.forEach((clip) => {
            this.mixer.clipAction(clip).play();
        });

        this.mesh = mesh.scene

        this.mesh.position.y = -5

        this.mesh.scale.x = 9
        this.mesh.scale.y = 9
        this.mesh.scale.z = 9

        this.mesh.rotation.y = 3 * Math.PI / 4

        this.ctx.scene.add(mesh.scene)
    }

    render() {
        if (this.mixer) {
            const delta = this.ctx.clock.getDelta()
            this.mixer.update(delta)
        }
    }

}