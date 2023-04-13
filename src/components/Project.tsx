import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { trans } from "../data/trans";
import { ProjectProps } from "../types/SceneTypes";

export function Project(props: ProjectProps) {
  return (
    <Stack spacing={2}>
      <Text fontSize="lg" style={{ fontFamily: "Major Mono Display" }}>
        {trans.projects.title}
      </Text>
      <Text fontSize="4xl" style={{ fontFamily: "Major Mono Display" }}>
        {props.title}
      </Text>
      <Text style={{ fontFamily: "Fira Code" }}>{props.about}</Text>
    </Stack>
  );
}
