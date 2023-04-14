import { Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { trans } from "../data/trans";
import { ArticleProps } from "../types/SceneTypes";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export function Article(props: ArticleProps) {
  return (
    <Stack spacing={2}>
      <Text fontSize="lg" style={{ fontFamily: "Major Mono Display" }}>
        {trans.articles.title}
      </Text>
      <Link href={props.href}>
        <Text fontSize="4xl" style={{ fontFamily: "Major Mono Display" }}>
          <ExternalLinkIcon style={{ marginRight: "12px" }} />
          {props.title}
        </Text>
      </Link>
      <Text style={{ fontFamily: "Fira Code" }}>{props.about}</Text>
    </Stack>
  );
}
