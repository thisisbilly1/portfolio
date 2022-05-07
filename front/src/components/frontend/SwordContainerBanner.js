import { Sword } from "./Sword"
import Container3d from "../Container3d"
const SwordContainerBanner = () => {
    const sword = new Sword()

    const onLoaded = (ctx) => {
        ctx.camera.position.set(33, -5, 0)

        ctx.controls.maxPolarAngle = Math.PI / 2
        ctx.controls.minPolarAngle = Math.PI / 2

        sword.mesh.rotation.z = .6
        sword.mesh.rotation.y = - Math.PI / 2 - 0.1
    }

    return (
        <Container3d objects={[sword]} onLoaded={onLoaded} banner bloom />
    )
}

export default SwordContainerBanner;