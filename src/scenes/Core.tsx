import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import React, { useRef } from "react";
import { Cuboid } from "../entities/Cuboid";

export function Core() {
  const floor = useRef<THREE.Mesh>(null!);

  return (
    <>
      <Cuboid position={[0, 0, 0]} />
      <mesh ref={floor} position={[0, -1, 0]}>
        <boxGeometry args={[2, 2, 4]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}
