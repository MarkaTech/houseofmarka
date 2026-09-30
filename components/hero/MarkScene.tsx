'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Lightformer } from '@react-three/drei';
import { Suspense, useMemo, useRef, type MutableRefObject } from 'react';
import * as THREE from 'three';

/**
 * The hero's 3D mark: a metallic torus knot inside a faint wireframe shell,
 * with a slowly turning field of gold dust behind it.
 *
 * Every value in this file was recovered from the production bundle of the
 * site as deployed in August 2026, so the scene renders exactly as it did
 * before the source was rebuilt. Change them deliberately, not by accident.
 *
 * There is no .hdr file anywhere here. An external environment map would be a
 * multi-megabyte blocking fetch on the most performance-sensitive view on the
 * site; the Environment below is built from emissive Lightformer planes
 * instead, so the whole scene is self-contained in the bundle.
 */

type Pointer = MutableRefObject<{ x: number; y: number }>;

function Knot({ pointer }: { pointer: Pointer }) {
  const knot = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  /* Sit in the right third on wide screens so the mark never fights the
     headline, which occupies the left. */
  const wide = viewport.aspect > 1.15;
  const offsetX = wide ? viewport.width * 0.225 : 0;

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (knot.current) {
      knot.current.rotation.y += delta * 0.15;
      knot.current.rotation.x = Math.sin(t * 0.2) * 0.16;
    }
    if (shell.current) {
      shell.current.rotation.y -= delta * 0.05;
      shell.current.rotation.z += delta * 0.02;
    }
    if (group.current) {
      /* Pointer parallax, eased rather than tracked, so the mark drifts
         instead of snapping to the cursor. */
      group.current.rotation.y += (pointer.current.x * 0.3 - group.current.rotation.y) * 0.04;
      group.current.rotation.x += (-pointer.current.y * 0.2 - group.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={group} position={[offsetX, 0, 0]} scale={wide ? 0.7 : 0.6}>
      <Float speed={1.05} rotationIntensity={0.16} floatIntensity={0.65} floatingRange={[-0.1, 0.1]}>
        <mesh ref={knot}>
          <torusKnotGeometry args={[1.05, 0.31, 420, 56, 2, 3]} />
          <meshPhysicalMaterial
            color="#3b3323"
            metalness={1}
            roughness={0.16}
            clearcoat={1}
            clearcoatRoughness={0.12}
            iridescence={0.45}
            iridescenceIOR={1.6}
            envMapIntensity={2.4}
          />
        </mesh>

        {/* Wireframe shell — barely there, it reads as structure, not a cage. */}
        <mesh ref={shell} scale={1.95}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#d8b66a" wireframe transparent opacity={0.05} />
        </mesh>
      </Float>
    </group>
  );
}

function Dust() {
  const points = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const count = 520;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Biased outward so the space right around the knot stays clear.
      const r = 2.5 + Math.pow(Math.random(), 0.7) * 3.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi) * 0.62;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.026;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.022}
        color="#e6cd96"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** Camera drifts toward the pointer and keeps looking at the origin. */
function CameraRig({ pointer }: { pointer: Pointer }) {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.current.x * 0.42 - camera.position.x) * 0.028;
    camera.position.y += (pointer.current.y * 0.26 - camera.position.y) * 0.028;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function MarkScene() {
  const pointer = useRef({ x: 0, y: 0 });

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.2], fov: 38 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
      onCreated={({ gl }) => {
        gl.toneMappingExposure = 1.15;
      }}
      onPointerMove={(e) => {
        pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.18} />
        <directionalLight position={[5, 6, 4]} intensity={2.2} color="#fff4dd" />
        <directionalLight position={[-6, -2, -3]} intensity={1.1} color="#8b9bff" />

        <Knot pointer={pointer} />
        <Dust />
        <CameraRig pointer={pointer} />

        <Environment resolution={256}>
          <color attach="background" args={['#07070a']} />
          <Lightformer form="rect" intensity={9} position={[0, 4.5, -4]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 6, 1]} color="#fff1d4" />
          <Lightformer form="rect" intensity={7} position={[5, 1, 2]} rotation={[0, -Math.PI / 2, 0]} scale={[8, 5, 1]} color="#f0c877" />
          <Lightformer form="rect" intensity={4} position={[-5, 0, 1]} rotation={[0, Math.PI / 2, 0]} scale={[8, 5, 1]} color="#8ea0ff" />
          <Lightformer form="rect" intensity={2.4} position={[0, -4, 2]} rotation={[-Math.PI / 2, 0, 0]} scale={[10, 6, 1]} color="#ffffff" />
          <Lightformer form="circle" intensity={12} position={[2.5, 3, 3]} scale={2.2} color="#ffffff" />
        </Environment>
      </Suspense>
    </Canvas>
  );
}
