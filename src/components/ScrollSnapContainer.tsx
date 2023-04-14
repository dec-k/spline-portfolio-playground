import { Center, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { CentredArticleProps } from "../types/SceneTypes";
import { MotionConstants } from "../data/motionConstants";

//  Container which generates a new 100vh, scroll-snapped container and then renders child components vertically centered.
export function ScrollSnapContainer(props: CentredArticleProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: MotionConstants.transition.fast,
        delay: MotionConstants.delay.slow,
      }}
      style={{
        scrollSnapAlign: "start",
        fontFamily: "Fira Code",
      }}
    >
      <Flex>
        <Center h={"100vh"}>{props.children}</Center>
      </Flex>
    </motion.div>
  );
}
