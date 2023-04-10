import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import React, { useRef } from "react";
import { Cuboid } from "../entities/Cuboid";

export function Core() {
  return (
    <>
      <Cuboid position={[0, 0.5, 0]} />
    </>
  );
}
