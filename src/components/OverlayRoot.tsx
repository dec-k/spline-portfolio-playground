import { Grid, GridItem, Link, Stack, Text } from "@chakra-ui/react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { trans } from "../data/trans";
import "../styles/OverlayRootStyles.css";
import { CentredArticle } from "./CentredArticle";

export function OverlayRoot() {
  // Refs for scrollpoints
  const ref = useRef(null);

  // Scroll progress trackers
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 300);

  return (
    <>
      <motion.div
        className={"progress-bar"}
        style={{ scaleX: scrollYProgress }}
      />
      <Stack direction={"column"} spacing={3}>
        <div
          style={{
            color: "white",
            textShadow: "1px 1px black",
            position: "absolute",
            top: "0px",
            left: "24px",
            maxWidth: "960px",
            scrollSnapType: "y mandatory",
          }}
        >
          <Grid gap={12}>
            {/* Title Block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              style={{
                scrollSnapAlign: "start",
              }}
            >
              <GridItem
                style={{
                  fontFamily: "Major Mono Display",
                }}
              >
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

            {/* Crappy padder, find a more sustainable solution. */}
            <div style={{ height: "60vh" }} />

            {/* About fluff */}
            <CentredArticle>
              <GridItem
                style={{
                  fontFamily: "Fira Code",
                }}
              >
                {trans.body.about}
              </GridItem>
            </CentredArticle>
          </Grid>
        </div>
      </Stack>
    </>
  );
}
