import { Grid, GridItem, Link, Stack, Text } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import React from "react";
import { trans } from "../data/trans";
import "../styles/OverlayRootStyles.css";
import { CentredArticle } from "./CentredArticle";
import { MotionConstants } from "../data/motionConstants";

export function OverlayRoot() {
  // Utils
  const { scrollYProgress } = useScroll();

  // Final render
  return (
    <>
      <motion.div
        className={"progress-bar"}
        style={{ scaleX: scrollYProgress }}
      />
      <Stack direction={"column"} spacing={3}>
        {/* Head container div, height-enforced for scroll-snap related reasons. */}

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
            <div
              style={{
                height: "100vh",
              }}
            >
              {/* Title Block */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: MotionConstants.transition.fast,
                  delay: MotionConstants.delay.normal,
                }}
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
                transition={{
                  duration: MotionConstants.transition.fast,
                  delay: MotionConstants.delay.slow,
                }}
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
            </div>

            {/* About fluff */}
            <CentredArticle>
              <GridItem
                style={{
                  fontFamily: "Fira Code",
                }}
              >
                <Text fontSize="md">{trans.body.about}</Text>
              </GridItem>
            </CentredArticle>
          </Grid>
        </div>
      </Stack>
    </>
  );
}
