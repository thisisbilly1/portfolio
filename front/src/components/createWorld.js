import * as THREE from 'three'

import { EffectComposer } from './utils/postprocessing/EffectComposer.js'
import { RenderPass } from './utils/postprocessing/RenderPass.js'
import { OutlinePass } from './utils/postprocessing/OutlinePass'

// import Stats from "stats-js"

export function createWorld(container) {
    var ctx = {}

    ctx.init = () => {
        ctx.animation_id = null;
        ctx.container = container
        ctx.scene = new THREE.Scene()
        //ctx.scene.background = new THREE.Color( "#292929" )

        ctx.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        //ctx.renderer.setClearColor( 0xffffff, 0);
        //ctx.renderer.setClearColor( "#292929", 1 )

        //ctx.renderer.setPixelRatio(window.devicePixelRatio * .75)
        //ctx.renderer.setPixelRatio(.75)
        ctx.renderer.setPixelRatio(.6)
        ctx.renderer.setSize(ctx.container.clientWidth, ctx.container.clientHeight)

        ctx.camera = new THREE.PerspectiveCamera(60, ctx.container.clientWidth / ctx.container.clientHeight, 1, 10000)
        ctx.camera.position.set(0, 0, -55)


        //lighting
        const ambientLight = new THREE.AmbientLight(0xffffff);
        ctx.scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 0.8);
        ctx.camera.add(pointLight);
        ctx.scene.add(ctx.camera);

        ctx.clock = new THREE.Clock();

        ctx.container.appendChild(ctx.renderer.domElement)
        ctx.resizelistener = window.addEventListener('resize', ctx.onWindowResize)

        //add the passes
        ctx.renderScene = new RenderPass(ctx.scene, ctx.camera);

        ctx.finalComposer = new EffectComposer(ctx.renderer)
        ctx.finalComposer.addPass(ctx.renderScene)

        ctx.outlinePass = new OutlinePass(new THREE.Vector2(ctx.container.innerWidth, ctx.container.innerHeight), ctx.scene, ctx.camera)
        ctx.outlinePass.visibleEdgeColor.set("black")
        ctx.outlinePass.edgeStrength = 10
        ctx.outlinePass.edgeThickness = 1
        ctx.finalComposer.addPass(ctx.outlinePass)

        //outline objects
        ctx.outlinePass.selectedObjects = []

        //add the rendered objects
        ctx.objects = []

        //add stats
        //ctx.stats = new Stats();
        //ctx.container.appendChild( ctx.stats.domElement );

        //create a fail safe for waiting for the page to load
        // setTimeout(onWindowResize, 300)
        return ctx;
    }

    ctx.animate = function () {
        //ctx.stats.update();
        //run render on the objects
        ctx.objects.forEach(obj => {
            obj.render()
        })

        if (ctx.controls) {
            ctx.controls.update()
        }

        //render entire scene
        ctx.finalComposer.render();

        ctx.camera.updateMatrixWorld()

        ctx.animation_id = requestAnimationFrame(ctx.animate)
    }

    ctx.stop = () => {
        cancelAnimationFrame(ctx.animation_id)
        window.removeEventListener('resize', ctx.resizeListener)
        window.removeEventListener('mousemove', ctx.mousemovelistener)
        ctx.renderer.forceContextLoss()
        ctx.container.removeChild(ctx.renderer.domElement)
    }

    ctx.onWindowResize = () => {
        ctx.camera.aspect = ctx.container.clientWidth / ctx.container.clientHeight
        ctx.camera.updateProjectionMatrix()
        ctx.renderer.setSize(ctx.container.clientWidth, ctx.container.clientHeight)
        //ctx.bloomComposer.setSize(ctx.container.clientWidth, ctx.container.clientHeight)
        ctx.finalComposer.setSize(ctx.container.clientWidth, ctx.container.clientHeight)
    }

    return ctx;
}