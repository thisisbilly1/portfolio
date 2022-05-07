import Container3d from "../../Container3d"
import { Dragon } from "./Dragon"
import { ParticleSystem } from "./ParticleSystem"
import { Person } from "./Person";

const DragonFightContainer = () => {
    const dragon = new Dragon()
    const person = new Person()

    const onLoaded = (ctx) => {
        // change camera position to make it look cooler
        ctx.camera.position.set(0, 0, -30)

        // add particles and position camera
        const ps = new ParticleSystem(ctx, dragon.mesh)

        //add render targets
        ctx.objects = [ps]
    }

    return (
        <Container3d objects={[dragon, person]} onLoaded={onLoaded} banner />
    )
}
export default DragonFightContainer;
