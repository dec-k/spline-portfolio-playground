import React, { Suspense } from "react";
import "./App.css";
import { OverlayRoot } from "./components/OverlayRoot";
import SplineBackdrop from "./scenes/SplineBackdrop";

function App() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          zIndex: -1,
          backgroundColor: "RGB(20, 20, 20)",
        }}
      >
        <Suspense fallback={"Loading..."}>
          <SplineBackdrop />
        </Suspense>
      </div>
      <OverlayRoot />
    </>
  );
}

export default App;
