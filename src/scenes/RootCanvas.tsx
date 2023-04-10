import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { RootSceneProps } from "../types/SceneTypes";

export function RootCanvas(props: RootSceneProps) {
  return (
    <Canvas
      shadows={"soft"}
      style={{
        height: "100vh",
        position: props.useFixed ? "fixed" : "relative",
        zIndex: props.useFixed ? -1 : 0,
        background: "black",
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <camera position={[50, 0, 0]} />
        {props.children}
      </Suspense>
    </Canvas>
  );
}
