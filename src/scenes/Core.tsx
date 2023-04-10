import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import React, { useRef } from "react";

export function Core() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => (ref.current.rotation.x += delta));
  useFrame((state, delta) => (ref.current.rotation.y += delta));

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[3, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
}