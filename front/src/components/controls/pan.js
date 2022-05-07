import {
    Vector3
} from "three"

class panControls{
    constructor(camera, domElement, startV3, lookAtV3){
        this.camera = camera
        this.domElement = domElement

        this.pointer = {
            x: 0,
            y: 0
        }

        this.domElement.addEventListener( 'pointermove', this.onPointerMove.bind(this) );
        this.domElement.addEventListener('touchstart', this.onDocumentTouchStart.bind(this), false );
        this.domElement.addEventListener('touchmove', this.onDocumentTouchMove.bind(this), false );

        if (lookAtV3){
            this.camera.lookAt( new Vector3(lookAtV3.x, lookAtV3.y, lookAtV3.z) );
        }
        this.startV3 = startV3
        this.camera.position.z = this.startV3.z
    }

    update(){
        //this.camera.position.x += (this.pointer.x - this.camera.position.x) * 0.1
        //this.camera.position.y += (this.pointer.y - this.camera.position.y) * 0.1+.15

        this.camera.position.x += (this.pointer.x - this.camera.position.x) * 0.1 + this.startV3.x
        this.camera.position.y += (this.pointer.y - this.camera.position.y) * 0.1 + this.startV3.y
    }

    onPointerMove( event ) {
        this.pointer.x = ( event.offsetX / this.domElement.clientWidth ) * 2 - 1;
        this.pointer.y = - ( event.offsetY / this.domElement.clientHeight ) * 2 + 1;
    }
    onDocumentTouchStart( event ) {
        if ( event.touches.length == 1 ) {
            this.pointer.x = ( event.touches[ 0 ].pageX / this.domElement.clientWidth ) * 2 - 1;
            this.pointer.y = - ( event.touches[ 0 ].pageY / this.domElement.clientHeight ) * 2 + 1;
        }
    }
    onDocumentTouchMove( event ) {
        if ( event.touches.length == 1 ) {
            this.pointer.x = ( event.touches[ 0 ].pageX / this.domElement.clientWidth ) * 2 - 1;
            this.pointer.y = - ( event.touches[ 0 ].pageY / this.domElement.clientHeight ) * 2 + 1;
        }
    }
    
}

const addPanControls = (ctx, startV3, lookAtV3) => {
    ctx.controls = new panControls(ctx.camera, ctx.renderer.domElement, startV3, lookAtV3)
}

export default addPanControls