import { Canvas } from "@react-three/fiber";
import React from "react";

export function RootScene(props: any) {
  return (
    <Canvas shadows={"soft"} style={{ height: "100vh" }}>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <camera position={[50, 0, 0]} />
      {props.children}
    </Canvas>
  );
}
