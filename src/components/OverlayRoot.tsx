import { Grid, GridItem, Link, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { trans } from "../data/trans";

export function OverlayRoot() {
  return (
    <Stack direction={"column"} spacing={3}>
      <div
        style={{
          color: "white",
          textShadow: "1px 1px black",
          position: "absolute",
          top: "0px",
          left: "24px",
        }}
      >
        <Grid gap={12}>
          {/* Title Block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <GridItem style={{ fontFamily: "Major Mono Display" }}>
              <Text fontSize="4xl">{trans.head.title}</Text>
              <Text fontSize="lg">{trans.head.subtitle}</Text>
            </GridItem>
          </motion.div>

          {/* Link Block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            <GridItem style={{ fontFamily: "Fira Code" }}>
              {trans.links.map((l) => (
                <>
                  <Link href={l.href} isExternal>
                    {l.emphasise ? <b>{l.title}</b> : l.title}
                  </Link>
                  <br />
                </>
              ))}
            </GridItem>
          </motion.div>
        </Grid>
      </div>
    </Stack>
  );
}
