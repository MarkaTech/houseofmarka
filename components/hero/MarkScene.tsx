'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Lightformer } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

/**
 * The hero's 3D mark: a metallic torus knot inside a wireframe shell, lit
 * entirely by Lightformers.
 *
 * There is deliberately no .hdr file anywhere in this component. An external
 * environment map would be a multi-megabyte blocking fetch on the most
 * performance-sensitive view on the site, and a static export has nowhere
 * sensible to serve it from. The Environment below is built from emissive
 * planes instead, so the whole scene is self-contained in the bundle.
 */

const WIDE_PX = 900;

function Knot() {
  const group = useRef<THREE.Group>(null);
  const knot = useRef<THREE.Mesh>(null);
  const { viewport, size, pointer } = useThree();

  const wide = size.width >= WIDE_PX;
  /* Sit in the right third on wide screens so the mark never fights the
     headline, which occupies the left. */
  const offsetX = wide ? viewport.width * 0.225 : 0;
  const scale = wide ? 0.7 : 0.6;

  useFrame((_, delta) => {
    const g = group.current;
    const k = knot.current;
    if (k) {
      k.rotation.y += delta * 0.18;
      k.rotation.z += delta * 0.06;
    }
    if (g) {
      /* Pointer parallax, eased rather than tracked, so the mark drifts instead
         of snapping to the cursor. */
      g.rotation.y += (pointer.x * 0.22 - g.rotation.y) * Math.min(1, delta * 2.2);
      g.rotation.x += (-pointer.y * 0.16 - g.rotation.x) * Math.min(1, delta * 2.2);
    }
  });

  return (
    <group ref={group} position={[offsetX, 0, 0]} scale={scale}>
      <Float speed={1.1} rotationIntensity={0.28} floatIntensity={0.85}>
        <mesh ref={knot}>
          <torusKnotGeometry args={[1.05, 0.34, 220, 36, 2, 3]} />
          <meshPhysicalMaterial
            color="#3b3323"
            metalness={1}
            roughness={0.16}
            clearcoat={1}
            clearcoatRoughness={0.12}
            iridescence={0.45}
            iridescenceIOR={1.4}
            envMapIntensity={2.4}
          />
        </mesh>

        {/* Wireframe shell around the knot. */}
        <mesh>
          <icosahedronGeometry args={[2.05, 1]} />
          <meshBasicMaterial color="#d8b66a" wireframe transparent opacity={0.12} />
        </mesh>
      </Float>
    </group>
  );
}

function Dust({ count = 420 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.4 + Math.random() * 3.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.cos(phi) * 0.6;
      arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.03;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#f0dcae"
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

/** Lightformer rig standing in for an HDRI. */
function Rig() {
  return (
    <Environment resolution={256}>
      <Lightformer intensity={5} form="rect" position={[3.2, 2.6, 2]} scale={[4, 6, 1]} color="#fff7e2" />
      <Lightformer intensity={2.4} form="rect" position={[-4, 1.2, 1]} scale={[5, 5, 1]} color="#8f9bd8" />
      <Lightformer intensity={3.2} form="circle" position={[0, -3.4, 2]} scale={[5, 5, 1]} color="#d8b66a" />
      <Lightformer intensity={1.6} form="ring" position={[0, 3.8, -3]} scale={[7, 7, 1]} color="#ffffff" />
      <mesh scale={22}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#0a0a0d" side={THREE.BackSide} />
      </mesh>
    </Environment>
  );
}

export default function MarkScene() {
  return (
    <Canvas
      className="h-full w-full"
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 7.4], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 4]} intensity={0.9} color="#f0dcae" />
      <Knot />
      <Dust />
      <Rig />
    </Canvas>
  );
}
