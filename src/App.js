import { Suspense } from "react";
import "./App.css";
import { Overlay } from "./scenes/Overlay";
import SplineBackdrop from "./scenes/SplineBackdrop";
import { CircularProgress } from "@chakra-ui/react";

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
      <Overlay />
    </>
  );
}

export default App;
