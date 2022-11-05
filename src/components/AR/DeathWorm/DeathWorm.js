import { GLTFLoader } from "../../utils/GLTFLoader";
import { AnimationMixer } from "three"
export class DeathWorm {
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
            .loadAsync(process.env.PUBLIC_URL + "/models/deathworm/deathworm.gltf", onProgress)

        this.mixer = new AnimationMixer(mesh.scene);
        mesh.animations.forEach((clip) => {
            this.mixer.clipAction(clip).play();
        });

        this.mesh = mesh.scene

        this.ctx.scene.add(mesh.scene)
    }

    render() {
        if (this.mixer) {
            const delta = this.ctx.clock.getDelta()
            this.mixer.update(delta)
        }
    }

}