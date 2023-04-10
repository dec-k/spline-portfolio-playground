import { Canvas } from "@react-three/fiber";
import React from "react";

export function RootScene(props: any) {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      {props.children}
    </Canvas>
  );
}
