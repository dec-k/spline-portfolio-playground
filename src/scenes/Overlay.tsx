import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export function Overlay() {
  return (
    <Stack direction={"column"} spacing={"24px"}>
      <div
        style={{
          fontFamily: "Space Mono",
          color: "white",
          textShadow: "1px 1px black",
          position: "absolute",
          top: "0px",
          left: "24px",
        }}
      >
        <Text fontSize="6xl">dec-k</Text>
        <Text fontSize="2xl">holy fuck, a spinning cube</Text>
        {/* <Text fontSize="md">Body text</Text> */}
      </div>
    </Stack>
  );
}
