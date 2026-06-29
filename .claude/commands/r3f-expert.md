# React Three Fiber Expert

You are a React Three Fiber (R3F) expert. When this skill is active, produce professional R3F architecture with reusable components, performant rendering, and idiomatic React patterns applied to 3D scenes.

## Project Setup

```bash
npm install three @react-three/fiber @react-three/drei @react-three/postprocessing
npm install -D @types/three
```

## Canvas Setup

```tsx
import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr, AdaptiveEvents, Preload } from '@react-three/drei'

export function Scene() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
        stencil: false,
        depth: true,
      }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [0, 2, 8] }}
      shadows
    >
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <Preload all />
      <SceneContent />
    </Canvas>
  )
}
```

## Component Patterns

### Reusable Model Component
```tsx
import { useGLTF, useAnimations } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import type { Group } from 'three'

interface ModelProps {
  url: string
  position?: [number, number, number]
  scale?: number
  animationName?: string
}

export function Model({ url, position = [0, 0, 0], scale = 1, animationName }: ModelProps) {
  const ref = useRef<Group>(null)
  const { scene, animations } = useGLTF(url)
  const { actions } = useAnimations(animations, ref)

  useEffect(() => {
    if (animationName && actions[animationName]) {
      actions[animationName]?.reset().fadeIn(0.5).play()
      return () => { actions[animationName]?.fadeOut(0.5) }
    }
  }, [actions, animationName])

  return <primitive ref={ref} object={scene} position={position} scale={scale} />
}

// Preload for instant display
useGLTF.preload('/models/scene.glb')
```

### useFrame for Animation
```tsx
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Mesh } from 'three'

export function FloatingMesh() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (!meshRef.current) return
    // Use delta for frame-rate independent animation
    meshRef.current.rotation.y += delta * 0.5
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8b5cf6" roughness={0.2} metalness={0.8} />
    </mesh>
  )
}
```

## Drei Essentials

```tsx
import {
  Environment,          // HDRI environment maps
  ContactShadows,       // Fake ground shadows (cheap)
  AccumulativeShadows,  // Beautiful baked shadows
  Float,                // Floating animation
  MeshTransmissionMaterial, // Glass
  Text,                 // 3D text via troika-three-text
  Html,                 // DOM embedded in 3D
  Sparkles,             // Particle sparkles
  useProgress,          // Loading progress
  Loader,               // Default loading screen
  OrbitControls,        // Camera controls
  PerspectiveCamera,    // Declarative camera
  useTexture,           // Texture loading with Suspense
  Instances, Instance,  // Declarative instancing
} from '@react-three/drei'

// Environment — replaces manual PMREMGenerator setup
<Environment preset="city" background blur={0.5} />

// Glass material
<mesh>
  <sphereGeometry />
  <MeshTransmissionMaterial
    transmission={1}
    thickness={0.5}
    roughness={0}
    chromaticAberration={0.02}
    ior={1.5}
  />
</mesh>

// Floating
<Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
  <MyMesh />
</Float>
```

## Performance Patterns

```tsx
// Performance monitor — auto-degrade quality on slow devices
import { PerformanceMonitor } from '@react-three/drei'

function App() {
  const [dpr, setDpr] = useState(1.5)
  return (
    <Canvas dpr={dpr}>
      <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} />
    </Canvas>
  )
}

// Frustum culling — wrap expensive meshes
import { useFrustumCulled } from '@react-three/drei'

// Instances — 1000 objects at minimal cost
function Particles() {
  return (
    <Instances limit={1000} range={1000}>
      <sphereGeometry args={[0.05]} />
      <meshBasicMaterial color="white" />
      {positions.map((pos, i) => (
        <Instance key={i} position={pos} />
      ))}
    </Instances>
  )
}
```

## Suspense & Loading

```tsx
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'

export function App() {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <HeavyScene />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}
```
