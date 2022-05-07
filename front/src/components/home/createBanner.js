import * as THREE from 'three'
import vertex from "./shaders/vertex.js"
import fragment from "./shaders/fragment.js"

export function createBanner(container){
    var ctx = new Object()

    ctx.init = () => {
        ctx.animation_id = null;

        ctx.container = container
        ctx.scene = new THREE.Scene()
        
        ctx.renderer = new THREE.WebGLRenderer({antialias:true, alpha:true})

        ctx.renderer.setPixelRatio(window.devicePixelRatio)
        ctx.renderer.setSize(ctx.container.clientWidth, ctx.container.clientHeight)

        ctx.camera = new THREE.PerspectiveCamera(60, ctx.container.clientWidth / ctx.container.clientHeight, 1, 10000)
        ctx.camera.position.set(0, 0, 20)
        ctx.camera.lookAt(new THREE.Vector3(0,0,0))

        ctx.container.appendChild(ctx.renderer.domElement)
        ctx.resizelistener=window.addEventListener('resize', onWindowResize)

        addSquares()
        //add raycast
        ctx.raycaster = new THREE.Raycaster()
        ctx.mousePlane = new THREE.Mesh(new THREE.PlaneGeometry(100,100), new THREE.MeshBasicMaterial())
        ctx.mouse = {x:0, y:0}

        ctx.container.addEventListener("mousemove", (event)=>{
            ctx.mouse.x = ( event.offsetX / ctx.container.clientWidth ) * 2 - 1;
            ctx.mouse.y = - ( event.offsetY / ctx.container.clientHeight ) * 2 + 1;
            updateRayCast()
        })

        ctx.container.addEventListener("touchstart", (event)=>{
            if (event.touches.length === 1){
                ctx.mouse.x = ( event.touches[0].pageX / ctx.container.clientWidth ) * 2 - 1;
                ctx.mouse.y = - ( event.touches[0].pageY / ctx.container.clientHeight ) * 2 + 1;
                updateRayCast()
            }
        })
        
        ctx.container.addEventListener("touchmove", (event)=>{
            if (event.touches.length === 1){
                ctx.mouse.x = ( event.touches[0].pageX / ctx.container.clientWidth ) * 2 - 1;
                ctx.mouse.y = - ( event.touches[0].pageY / ctx.container.clientHeight ) * 2 + 1;
                updateRayCast()
            }
        })
        
        ctx.clock = new THREE.Clock()

        //create a fail safe for waiting for the page to load
        setTimeout(onWindowResize, 300)
    }

    function updateRayCast(){
        ctx.raycaster.setFromCamera(ctx.mouse, ctx.camera)
        var intersects = ctx.raycaster.intersectObjects([ctx.mousePlane])
        if(intersects.length > 0){
            ctx.squarematerial.uniforms.mouse.value = intersects[0].point
        }
    }

    ctx.animate = function() {
        //rotate scene
        //ctx.scene.rotation.x = - ctx.mouse.x/10
        //ctx.scene.rotation.y =  ctx.mouse.y/10
        ctx.squarematerial.uniforms.time.value += ctx.clock.getDelta() / 2

        ctx.renderer.render(ctx.scene, ctx.camera)
        ctx.animation_id = requestAnimationFrame(ctx.animate)
    }

    ctx.stop = function(){
        cancelAnimationFrame(ctx.animation_id)
        window.removeEventListener( 'resize', null )
        window.removeEventListener( 'mousemove', null )
        ctx.renderer.forceContextLoss()
		ctx.container.removeChild(ctx.renderer.domElement)
    }

    function onWindowResize() {
        ctx.camera.aspect = ctx.container.clientWidth / ctx.container.clientHeight
        ctx.camera.updateProjectionMatrix()
        ctx.renderer.setSize(ctx.container.clientWidth, ctx.container.clientHeight)
    }

    function addSquares(){
        ctx.squarematerial = new THREE.ShaderMaterial({
            //side: THREE.DoubleSide,
            uniforms: {
                time: { type: "f", value: 0 },
                mouse: {type:"v3", value: new THREE.Vector3()}
            },
            vertexShader: vertex(),
            fragmentShader: fragment(),
            transparent:true
        })

        const geometry = new THREE.PlaneBufferGeometry(1, 1)

        const count = 70
        const squares = new THREE.InstancedMesh(geometry, ctx.squarematerial, count**2)

        ctx.scene.add(squares)
        
        let counter = 0
        const dummy = new THREE.Object3D()
        for (let x = -count/2; x < count/2; x++){
            for (let y = -count/2; y < count/2; y++){
                dummy.position.set( x, y, 0 )
                dummy.updateMatrix()
                squares.setMatrixAt( counter++, dummy.matrix )
            }
        }
        
    }

    return ctx;
}