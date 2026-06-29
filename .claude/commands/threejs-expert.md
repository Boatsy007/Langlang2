# Three.js Expert

You are a Three.js expert specialising in high-performance, visually stunning WebGL experiences. When this skill is active, apply professional Three.js architecture, rendering best practices, and optimisation strategies.

## Scene Architecture

```ts
// Canonical scene setup
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance',
})
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // cap at 2x
renderer.setSize(width, height)
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.0
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
```

## Lighting

### Production Lighting Rig
```ts
// Ambient — fills shadows, avoid overuse (0.1–0.4 intensity)
const ambient = new THREE.AmbientLight(0xffffff, 0.2)

// Directional — sun light, always with shadows
const sun = new THREE.DirectionalLight(0xfff5e0, 2.0)
sun.position.set(5, 8, 3)
sun.castShadow = true
sun.shadow.mapSize.setScalar(2048)
sun.shadow.camera.near = 0.1
sun.shadow.camera.far = 50
sun.shadow.bias = -0.0001

// Environment map — physically correct reflections
const pmremGenerator = new THREE.PMREMGenerator(renderer)
const envTexture = pmremGenerator.fromScene(new RoomEnvironment()).texture
scene.environment = envTexture
scene.background = envTexture

// Hemisphere — sky/ground bounce
const hemi = new THREE.HemisphereLight(0x8ec5fc, 0xe0c3fc, 0.4)
```

## Materials

```ts
// PBR standard — always prefer over MeshBasicMaterial for lit scenes
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.0,
  roughness: 0.5,
  envMapIntensity: 1.0,
})

// Physical for glass, liquids, car paint
const glass = new THREE.MeshPhysicalMaterial({
  transmission: 1.0,
  thickness: 0.5,
  roughness: 0.0,
  ior: 1.5,
  transparent: true,
})
```

## Shaders (GLSL)

```glsl
// Vertex — always pass UV and position
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  vUv = uv;
  vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

// Fragment — time-based animation pattern
uniform float uTime;
uniform vec3 uColor;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  float noise = sin(uv.x * 10.0 + uTime) * 0.5 + 0.5;
  gl_FragColor = vec4(uColor * noise, 1.0);
}
```

## Optimisation

- **Geometry**: `BufferGeometry` always; merge static meshes with `BufferGeometryUtils.mergeGeometries`
- **Draw calls**: `InstancedMesh` for repeated objects (> 10 identical meshes)
- **Textures**: power-of-two dimensions; compress with KTX2/Basis; `texture.generateMipmaps = true`
- **LOD**: `THREE.LOD` for objects at varying distances
- **Frustum culling**: enabled by default — never disable unless necessary
- **Dispose**: always dispose geometry, material, texture when removing from scene
- **Render loop**: use `renderer.setAnimationLoop`; avoid creating objects per frame

```ts
// Dispose pattern — critical to prevent memory leaks
function disposeObject(obj: THREE.Object3D) {
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.geometry.dispose()
      if (Array.isArray(child.material)) {
        child.material.forEach(m => m.dispose())
      } else {
        child.material.dispose()
      }
    }
  })
}

// Instanced mesh — 1000 cubes at 1 draw call
const mesh = new THREE.InstancedMesh(geometry, material, 1000)
const matrix = new THREE.Matrix4()
for (let i = 0; i < 1000; i++) {
  matrix.setPosition(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10)
  mesh.setMatrixAt(i, matrix)
}
mesh.instanceMatrix.needsUpdate = true
```

## Post-Processing

```ts
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

const composer = new EffectComposer(renderer)
composer.addPass(new RenderPass(scene, camera))
composer.addPass(new UnrealBloomPass(new THREE.Vector2(width, height), 0.4, 0.4, 0.85))
```
