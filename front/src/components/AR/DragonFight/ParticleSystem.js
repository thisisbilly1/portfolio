import {
    TextureLoader,
    ShaderMaterial,
    AdditiveBlending,
    BufferGeometry,
    Float32BufferAttribute,
    Points,
    Color,
    Vector3,
    PointLight,
} from "three"

class LinearSpline {
    constructor(lerp) {
        this._points = [];
        this._lerp = lerp;
    }

    AddPoint(t, d) {
        this._points.push([t, d]);
    }

    Get(t) {
        let p1 = 0;

        for (let i = 0; i < this._points.length; i++) {
            if (this._points[i][0] >= t) {
                break;
            }
            p1 = i;
        }

        const p2 = Math.min(this._points.length - 1, p1 + 1);

        if (p1 === p2) {
            return this._points[p1][1];
        }

        return this._lerp(
            (t - this._points[p1][0]) / (
                this._points[p2][0] - this._points[p1][0]),
            this._points[p1][1], this._points[p2][1]);
    }
}

export class ParticleSystem {
    constructor(ctx, parent) {
        this.ctx = ctx
        this.parent = parent
        this.needsAnimation = true
        this.outlined = false

        this.position = new Vector3(0, .5, 2.6)

        //add a point light where the flames are coming out
        const pointLight = new PointLight(0xffffff, 10, 25);
        pointLight.position.y = this.position.y
        pointLight.position.z = this.position.z + 1
        this.parent.add(pointLight)

        this.particles = []

        const textureLoader = new TextureLoader()

        const uniforms = {
            diffuseTexture: {
                value: textureLoader.load(process.env.PUBLIC_URL + '/models/fire2.png')
            },
            pointMultiplier: {
                value: 1//this.ctx.container.innerHeight  / (2.0 * Math.tan(0.5 * 60.0 * Math.PI / 180.0))
            }
        }

        this.material = new ShaderMaterial({
            uniforms: uniforms,
            vertexShader: this.vertexShader(),
            fragmentShader: this.fragmentShader(),
            blending: AdditiveBlending,
            depthTest: true,
            depthWrite: false,
            transparent: true,
            vertexColors: true,
        })

        this.geometry = new BufferGeometry()
        this.geometry.setAttribute('position', new Float32BufferAttribute([], 3))
        this.geometry.setAttribute('size', new Float32BufferAttribute([], 1))
        this.geometry.setAttribute('colour', new Float32BufferAttribute([], 4))
        this.geometry.setAttribute('angle', new Float32BufferAttribute([], 1))

        this.points = new Points(this.geometry, this.material)
        this.points.layers.enable(this.ctx.BLOOM_SCENE)
        this.parent.add(this.points)

        this.alphaSpline = new LinearSpline((t, a, b) => {
            return a + t * (b - a)
        })
        this.alphaSpline.AddPoint(0.0, 0.0)
        this.alphaSpline.AddPoint(0.1, 1.0)
        this.alphaSpline.AddPoint(0.6, 1.0)
        this.alphaSpline.AddPoint(1.0, 0.0)

        this.colorSpline = new LinearSpline((t, a, b) => {
            const c = a.clone()
            return c.lerp(b, t)
        });
        this.colorSpline.AddPoint(0.0, new Color(0xFFFF80))
        this.colorSpline.AddPoint(1.0, new Color(0xFF8080))

        this.sizeSpline = new LinearSpline((t, a, b) => {
            return a + t * (b - a);
        });
        this.sizeSpline.AddPoint(0.0, 15.0)
        this.sizeSpline.AddPoint(0.5, 400.0)
        this.sizeSpline.AddPoint(1.0, 15.0)

        this.updateGeometry()

        this.p = 0
    }

    addParticles(timeElapsed) {

        this.p += timeElapsed * 15
        if (this.p >= 4) {
            this.p = 0
            const life = (Math.random() * 0.75 + 0.25) * 30.0;
            this.particles.push({
                position: new Vector3(
                    (Math.random() * 2 - 1) * 0.2,
                    (Math.random() * 2 - 1) * 0.2 + this.position.y,
                    (Math.random() * 2 - 1) * 0.2 + this.position.z),
                size: (Math.random() * 0.5 + 0.5) * 4.0,
                color: new Color(),
                alpha: 1.0,
                life: life,
                maxLife: life,
                rotation: Math.random() * 2.0 * Math.PI,
                velocity: new Vector3(0, 0, .4),
            });
        }
    }
    updateGeometry() {
        const positions = []
        const sizes = []
        const colors = []
        const angles = []

        for (let p of this.particles) {
            positions.push(p.position.x, p.position.y, p.position.z);
            colors.push(p.color.r, p.color.g, p.color.b, p.alpha);
            sizes.push(p.currentSize);
            angles.push(p.rotation);
        }

        this.geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
        this.geometry.setAttribute('size', new Float32BufferAttribute(sizes, 1))
        this.geometry.setAttribute('colour', new Float32BufferAttribute(colors, 4));
        this.geometry.setAttribute('angle', new Float32BufferAttribute(angles, 1));

        this.geometry.attributes.position.needsUpdate = true;
        this.geometry.attributes.size.needsUpdate = true;
        this.geometry.attributes.colour.needsUpdate = true;
        this.geometry.attributes.angle.needsUpdate = true;
    }

    updateParticles(timeElapsed) {
        //let timeElapsed = .1
        for (let p of this.particles) {
            p.life -= timeElapsed
        }

        this.particles = this.particles.filter(p => {
            return p.life > 0.0
        })

        for (let p of this.particles) {
            const t = 1.0 - p.life / p.maxLife

            p.rotation += timeElapsed * 0.5
            p.alpha = this.alphaSpline.Get(t)
            p.currentSize = p.size * this.sizeSpline.Get(t)
            p.color.copy(this.colorSpline.Get(t))

            p.position.add(p.velocity.clone().multiplyScalar(timeElapsed))

            const drag = p.velocity.clone()
            drag.multiplyScalar(timeElapsed * 0.2)
            drag.x = Math.sign(p.velocity.x) * Math.min(Math.abs(drag.x), Math.abs(p.velocity.x))
            drag.y = Math.sign(p.velocity.y) * Math.min(Math.abs(drag.y), Math.abs(p.velocity.y))
            drag.z = Math.sign(p.velocity.z) * Math.min(Math.abs(drag.z), Math.abs(p.velocity.z))
            p.velocity.sub(drag)
        }

        this.particles.sort((a, b) => {
            const d1 = this.ctx.camera.position.distanceTo(a.position)
            const d2 = this.ctx.camera.position.distanceTo(b.position)

            if (d1 > d2) return -1
            if (d1 < d2) return 1
            return 0
        })
    }

    render() {
        const delta = 10 * this.ctx.clock.getDelta()
        this.addParticles(delta)
        this.updateParticles(delta)
        this.updateGeometry()
    }

    vertexShader() {
        return `
            uniform float pointMultiplier;
            attribute float size;
            attribute float angle;
            attribute vec4 colour;
            varying vec4 vColor;
            varying vec2 vAngle;
            void main() {
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_Position = projectionMatrix * mvPosition;
                gl_PointSize = size * pointMultiplier / gl_Position.w;
                vAngle = vec2(cos(angle), sin(angle));
                vColor = colour;
            }`
    }
    fragmentShader() {
        return `
            uniform sampler2D diffuseTexture;
            varying vec4 vColor;
            varying vec2 vAngle;
            void main() {
                vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
                gl_FragColor = texture2D(diffuseTexture, coords) * vColor;
            }`
    }

}