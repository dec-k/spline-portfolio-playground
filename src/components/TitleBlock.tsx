import { Grid, GridItem, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { MotionConstants } from "../data/motionConstants";
import { trans } from "../data/trans";

export function TitleBlock() {
  return (
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
          <Text fontSize="6xl">{trans.head.title}</Text>
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
        <GridItem style={{ fontFamily: "Fira Code", marginTop: "12px" }}>
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
  );
}
