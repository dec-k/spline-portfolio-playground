import React, { Suspense } from "react";
import "./App.css";
import { OverlayRoot } from "./components/OverlayRoot";
import SplineBackdrop from "./scenes/SplineBackdrop";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: -1,
          backgroundColor: "RGB(20, 20, 20)",
        }}
      >
        <Suspense fallback={"Loading..."}>
          <motion.div
            style={{ height: "100vh", width: "100vw" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 2.5 }}
          >
            <SplineBackdrop />
          </motion.div>
        </Suspense>
      </div>
      <OverlayRoot />
    </>
  );
}

export default App;
