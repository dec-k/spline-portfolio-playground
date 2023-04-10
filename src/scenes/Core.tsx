import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export function Core() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => (ref.current.rotation.x += delta));

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[2, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
}
