import { Text } from "@chakra-ui/react";
import React from "react";

export function Overlay() {
  return (
    <div
      style={{
        fontFamily: "Space Mono",
        color: "white",
        textShadow: "1px 1px black",
        position: "absolute",
        top: "12px",
        left: "12px",
      }}
    >
      <Text fontSize="6xl">dec-k</Text>
      <Text fontSize="2xl">ts / c# / react / next</Text>
      <Text fontSize="md">Body text</Text>
    </div>
  );
}
