import { Card } from "react-bootstrap"
import { DeathWorm } from "./DeathWorm"
import Container3d from "../../Container3d"
import addPanControls from "../../controls/pan";

const degrees_to_radians = deg => (deg * Math.PI) / 180.0;

const DeathWormContainer = () => {
    const deathworm = new DeathWorm()

    const onLoaded = (ctx) => {


        ctx.camera.fov = 50

        // ctx.camera.position.set(0, 0.8, 20)
        ctx.camera.position.set(0, 0.8, 25)
        ctx.camera.rotation.x = degrees_to_radians(15)
        ctx.camera.rotation.y = degrees_to_radians(-7)
        ctx.camera.rotation.z = degrees_to_radians(-4)


        ctx.outlinePass.edgeStrength = 3
        ctx.outlinePass.edgeThickness = .5

        // add the pan controls
        addPanControls(ctx, 0.1)

        // ctx.ambientLight.intensity = 1.8


        // ctx.renderer.alpha = false
        // ctx.renderer.setClearColor("#292929", 1)

        // add particles and position camera
        // const ps = new ParticleSystem(ctx, dragon.mesh)

        //add render targets
        // ctx.objects = [ps]
    }

    return (
        <Card className="bg-dark">
            <Container3d objects={[deathworm]} onLoaded={onLoaded} customController />
        </Card>
    )
}

export default DeathWormContainer;