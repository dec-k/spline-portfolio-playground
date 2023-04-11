import { Suspense } from "react";
import "./App.css";
import { Overlay } from "./scenes/Overlay";
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
        <SplineBackdrop />
      </div>
      <Overlay />
    </>
  );
}

export default App;
