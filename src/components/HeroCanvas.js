"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const PRIMARY_CYAN = "#06B6D4";
const PRIMARY_BLUE = "#2563EB";

function ParticleWave({ mouse }) {
  const pointsRef = useRef();

  const { positions, colors } = useMemo(() => {
    const gridX = 120;
    const gridY = 60;
    const positions = new Float32Array(gridX * gridY * 3);
    const colors = new Float32Array(gridX * gridY * 3);

    const colorA = new THREE.Color(PRIMARY_CYAN);
    const colorB = new THREE.Color(PRIMARY_BLUE);

    let i = 0;
    for (let ix = 0; ix < gridX; ix++) {
      for (let iy = 0; iy < gridY; iy++) {
        const x = (ix / gridX - 0.5) * 10;
        const y = (iy / gridY - 0.5) * 5.5;
        const z = 0;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        const t = iy / gridY;
        const color = colorA.clone().lerp(colorB, t);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;

        i++;
      }
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.6;
    const positions = pointsRef.current.geometry.attributes.position.array;

    let i = 0;
    for (let ix = 0; ix < 120; ix++) {
      for (let iy = 0; iy < 60; iy++) {
        const index = i * 3;
        const x = positions[index];
        const y = positions[index + 1];

        const wave =
          Math.sin(ix * 0.28 + t) * 0.25 +
          Math.cos(iy * 0.32 + t * 1.2) * 0.18;

        const mouseInfluence =
          mouse.current &&
          Math.exp(
            -(
              Math.pow(x - mouse.current.x * 6, 2) +
              Math.pow(y - mouse.current.y * 3, 2)
            ) / 6
          );

        positions[index + 2] = wave + (mouseInfluence || 0) * 0.65;
        i++;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    const baseRotationX = -0.5;
    const baseRotationY = 0.2;
    const targetRotX = baseRotationX + (mouse.current?.y || 0) * 0.12;
    const targetRotY = baseRotationY + (mouse.current?.x || 0) * 0.18;

    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      targetRotX,
      0.05
    );
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(
      pointsRef.current.rotation.y,
      targetRotY,
      0.05
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.95}
        depthWrite={false}
      />
    </points>
  );
}

function WireframeMesh() {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.12;
    meshRef.current.rotation.x = Math.sin(t * 0.4) * 0.1 - 0.4;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -1]}>
      <torusKnotGeometry args={[2.5, 0.18, 220, 36]} />
      <meshBasicMaterial
        color={PRIMARY_BLUE}
        wireframe
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

function HeroScene({ mouse }) {
  return (
    <>
      <color attach="background" args={["transparent"]} />
      <fog attach="fog" args={["#020617", 4, 18]} />
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[3, 4, 4]}
        intensity={1.4}
        color={PRIMARY_BLUE}
      />
      <directionalLight
        position={[-4, -2, -3]}
        intensity={0.9}
        color={PRIMARY_CYAN}
      />
      <ParticleWave mouse={mouse} />
      <WireframeMesh />
    </>
  );
}

export default function HeroCanvas() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { currentTarget, clientX, clientY } = event;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;

    mouse.current = {
      x: (x - 0.5) * 2,
      y: (y - 0.5) * -2,
    };
  };

  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden rounded-none lg:rounded-[2.5rem]"
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.10),transparent_55%),radial-gradient(circle_at_bottom,rgba(37,99,235,0.10),transparent_55%)]" />
      <Canvas
        camera={{ position: [0, 0, 12], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <HeroScene mouse={mouse} />
      </Canvas>
    </div>
  );
}

