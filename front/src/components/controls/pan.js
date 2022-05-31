class panControls {
    constructor(ctx, sensitivity = 1) {
        this.ctx = ctx
        this.camera = this.ctx.camera
        this.domElement = this.ctx.renderer.domElement

        this.sensitivity = sensitivity

        this.pointer = {
            x: 0,
            y: 0
        }

        this.domElement.addEventListener('pointermove', this.onPointerMove.bind(this))
        this.domElement.addEventListener('touchstart', this.onDocumentTouchMove.bind(this), false)
        this.domElement.addEventListener('touchmove', this.onDocumentTouchMove.bind(this), false)
    }

    update() {
        //this.camera.position.x += (this.pointer.x - this.camera.position.x) * 0.1
        //this.camera.position.y += (this.pointer.y - this.camera.position.y) * 0.1+.15

        this.camera.position.x += (this.pointer.x - this.camera.position.x) * 0.1 * this.sensitivity
        this.camera.position.y += (this.pointer.y - this.camera.position.y) * 0.1 * this.sensitivity


        // clamp the y to never be less than 0
        if (this.camera.position.y < 0.3) {
            this.camera.position.y = 0.3
        }

    }

    onPointerMove(event) {
        this.pointer.x = (event.offsetX / this.domElement.clientWidth) * 2 - 1;
        this.pointer.y = - (event.offsetY / this.domElement.clientHeight) * 2 + 1;
    }

    onDocumentTouchMove(event) {
        if (event.touches.length === 1) {
            this.pointer.x = (event.touches[0].pageX / this.domElement.clientWidth) * 2 - 1;
            this.pointer.y = - (event.touches[0].pageY / this.domElement.clientHeight) * 2 + 1;
        }
    }

}

const addPanControls = (ctx, sensitivity) => {
    ctx.controls = new panControls(ctx, sensitivity)
}

export default addPanControls