import { Divider, Grid, GridItem, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

export function Overlay() {
  return (
    <Stack direction={"column"} spacing={3}>
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
        <Grid gap={20}>
          <GridItem>
            <Text fontSize="4xl">dec keighley</Text>
            <Text fontSize="lg">typescript // react // c#</Text>
          </GridItem>
          <GridItem>
            <Link href="https://themysteryjuice.com" isExternal>
              🍊 Mystery Juice
            </Link>
            <br />
            <Link
              href="https://www.linkedin.com/in/declan-keighley-b19265a6/"
              isExternal
            >
              🔵 LinkedIn
            </Link>
            <br />
            <Link href="mailto:dec.keighley@gmail.com" isExternal>
              ✉️ Contact Me
            </Link>
            <br />
          </GridItem>
        </Grid>
      </div>
    </Stack>
  );
}
