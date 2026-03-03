"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

function AlignerImage({ rotationSpeed = 1, paused = false }) {
  const meshRef = useRef();
  const texture = useTexture("/images/aligners.png", (tex) => {
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.flipY = true;
  });

  useFrame((state, delta) => {
    if (!meshRef.current || paused) return;
    meshRef.current.rotation.y += delta * rotationSpeed;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
      <planeGeometry args={[3.5, 2.5, 1]} />
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={0.95}
        side={THREE.DoubleSide}
        metalness={0.1}
        roughness={0.3}
      />
    </mesh>
  );
}

function Scene({ paused }) {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-5, 3, -5]} intensity={1.0} />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#ffffff" />
      <pointLight position={[0, -5, 0]} intensity={0.5} color="#e8f4f8" />

      {/* Single centered aligner image */}
      <AlignerImage rotationSpeed={0.4} paused={paused} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.3}
      />
    </>
  );
}

export default function Aligner3D() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="w-full h-full relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative z-10 w-full h-full">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          style={{ width: "100%", height: "100%", background: "transparent" }}
          gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        >
          <Scene paused={paused} />
        </Canvas>
      </div>
    </div>
  );
}
