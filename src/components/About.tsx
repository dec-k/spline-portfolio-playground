import { Stack, Text } from "@chakra-ui/react";
import { trans } from "../data/trans";
import React from "react";

export function About() {
  return (
    <Stack spacing={2}>
      <Text fontSize="4xl" style={{ fontFamily: "Major Mono Display" }}>
        {trans.body.about.title}
      </Text>
      <Text>{trans.body.about.preamble}</Text>
      {trans.body.about.builtWith.map((s) => (
        <Text>{s}</Text>
      ))}
    </Stack>
  );
}
