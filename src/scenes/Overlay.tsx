import React from "react";

export function Overlay() {
  return (
    <div
      style={{
        fontFamily: "Space Mono, monospace",
        color: "white",
        textShadow: "1px 1px black",
        position: "absolute",
        top: "10px",
      }}
    >
      <h1
        style={{
          fontStyle: "italic",
        }}
      >
        test text
      </h1>
      <h3>ts / c# / react / next</h3>
      <p>smol text</p>
    </div>
  );
}
