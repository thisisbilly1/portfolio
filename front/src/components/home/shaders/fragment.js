export const fragment = () => {
    return `
    varying vec2 vUv;
    varying float vDist;

    void main(){
        gl_FragColor = vec4(1.0, 1.0, 1.0, 0.8 * vDist);
    }`
};