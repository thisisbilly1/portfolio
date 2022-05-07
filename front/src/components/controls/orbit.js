import { OrbitControls } from "../utils/OrbitControls"

const addOrbitControls = (ctx) => {
    ctx.controls = new OrbitControls(ctx.camera, ctx.renderer.domElement)
    //ctx.controls.autoRotate = true
    //ctx.controls.autoRotateSpeed = 1

    ctx.controls.enableDamping = true
    ctx.controls.dampingFactor = 0.05

    ctx.controls.enablePan = false
    ctx.controls.enableZoom = false
    ctx.controls.maxPolarAngle = Math.PI / 3
    ctx.controls.minPolarAngle = Math.PI / 3
}

export default addOrbitControls