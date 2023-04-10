import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { RootSceneProps } from "../types/SceneTypes";
import {
  AccumulativeShadows,
  Environment,
  OrbitControls,
  RandomizedLight,
} from "@react-three/drei";

export function RootCanvas(props: RootSceneProps) {
  return (
    <Canvas
      shadows
      camera={{ position: [2, 3, 4.5], fov: 50 }}
      style={{
        height: "100vh",
        position: props.useFixed ? "fixed" : "relative",
        zIndex: props.useFixed ? -1 : 0,
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <group>
          {props.children}
          <AccumulativeShadows
            temporal
            frames={200}
            color="purple"
            colorBlend={0.5}
            opacity={1}
            scale={10}
            alphaTest={0.85}
          >
            <RandomizedLight
              amount={8}
              radius={5}
              ambient={0.5}
              position={[5, 3, 2]}
              bias={0.001}
            />
          </AccumulativeShadows>
        </group>
        <Environment preset={"apartment"} background blur={1} />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  );
}
