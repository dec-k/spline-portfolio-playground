import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { RootSceneProps } from "../types/SceneTypes";
import { OrbitControls } from "@react-three/drei";

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
        <ambientLight intensity={0.5} />
        <camera position={[50, 0, 0]} />
        {props.children}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
