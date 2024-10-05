// public/shaders/vertex.glsl
uniform float uTime;
varying vec2 vUv;

void main() {
    vUv = uv;
    vec3 pos = position;
    pos.z += sin(pos.x * 10.0 + uTime * 2.0) * 0.1;
    pos.x += cos(pos.y * 10.0 + uTime) * 0.1;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}