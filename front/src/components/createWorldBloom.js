import * as THREE from 'three'

import { EffectComposer } from './utils/postprocessing/EffectComposer.js'
import { RenderPass } from './utils/postprocessing/RenderPass.js'
import { UnrealBloomPass } from './utils/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from "./utils/postprocessing/ShaderPass.js"
import { OutlinePass } from './utils/postprocessing/OutlinePass'

export function createWorldBloom(container) {
    var ctx = new Object()

    ctx.init = () => {

        ctx.ENTIRE_SCENE = 0
        ctx.BLOOM_SCENE = 1

        ctx.bloomLayer = new THREE.Layers()
        ctx.bloomLayer.set(ctx.BLOOM_SCENE)

        ctx.darkMaterial = new THREE.MeshBasicMaterial({ color: "black" });
        ctx.materials = {};

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

        ctx.camera = new THREE.PerspectiveCamera(25, ctx.container.clientWidth / ctx.container.clientHeight, 1, 10000)
        //const ratio = ctx.container.clientWidth / ctx.container.clientHeight
        //const ratio2 = ctx.container.clientHeight / ctx.container.clientWidth
        //ctx.camera = new THREE.OrthographicCamera(-5, 5, -5, 5, 1, 1000)
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

        //BLOOM

        ctx.bloomPass = new UnrealBloomPass(new THREE.Vector2(ctx.container.innerWidth, ctx.container.innerHeight), 0.9, 0.0, 0.05);

        ctx.bloomComposer = new EffectComposer(ctx.renderer);
        ctx.bloomComposer.renderToScreen = false;
        ctx.bloomComposer.addPass(ctx.renderScene);
        ctx.bloomComposer.addPass(ctx.bloomPass);


        ctx.finalPass = new ShaderPass(
            new THREE.ShaderMaterial({
                uniforms: {
                    baseTexture: { value: null },
                    bloomTexture: { value: ctx.bloomComposer.renderTarget2.texture }
                },
                vertexShader: vertex(),
                fragmentShader: fragment(),

                defines: {}
            }), "baseTexture"
        );
        ctx.finalPass.needsSwap = true;

        ctx.finalComposer = new EffectComposer(ctx.renderer)
        ctx.finalComposer.addPass(ctx.renderScene)
        ctx.finalComposer.addPass(ctx.finalPass)


        //ctx.finalComposer = new EffectComposer(ctx.renderer)
        //ctx.finalComposer.addPass(ctx.renderScene)

        ctx.outlinePass = new OutlinePass(new THREE.Vector2(ctx.container.innerWidth, ctx.container.innerHeight), ctx.scene, ctx.camera)
        ctx.outlinePass.visibleEdgeColor.set("black")
        ctx.outlinePass.edgeStrength = 10
        ctx.outlinePass.edgeThickness = 1
        ctx.finalComposer.addPass(ctx.outlinePass)

        //add the rendered objects
        ctx.objects = []

        //add stats
        //ctx.stats = new Stats();
        //ctx.container.appendChild( ctx.stats.domElement );

        //create a fail safe for waiting for the page to load
        //setTimeout(onWindowResize, 300)

        return ctx;
    }

    ctx.animate = () => {
        //ctx.stats.update();
        //run render on the objects
        ctx.objects.forEach(obj => {
            obj.render()
        })

        if (ctx.controls) {
            ctx.controls.update()
        }

        //render bloom
        ctx.scene.traverse(darkenNonBloomed);
        ctx.bloomComposer.render();
        ctx.scene.traverse(restoreMaterial);

        //render entire scene
        ctx.finalComposer.render();

        //ctx.renderer.render(ctx.scene, ctx.camera)
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

    function darkenNonBloomed(obj) {

        if (obj.isMesh && ctx.bloomLayer.test(obj.layers) === false) {

            ctx.materials[obj.uuid] = obj.material;
            obj.material = ctx.darkMaterial;

        }

    }

    function restoreMaterial(obj) {

        if (ctx.materials[obj.uuid]) {

            obj.material = ctx.materials[obj.uuid];
            delete ctx.materials[obj.uuid];

        }

    }

    function fragment() {
        return `
            uniform sampler2D baseTexture;
            uniform sampler2D bloomTexture;

            varying vec2 vUv;

            void main() {
                gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );
            }
        `
    }

    function vertex() {
        return `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            }
        `
    }

    return ctx;
}