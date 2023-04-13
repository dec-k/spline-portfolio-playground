import React from "react";
import "../styles/HeaderStyles.css";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { motion } from "framer-motion";
import { MotionConstants } from "../data/motionConstants";
import { IconButton, Text } from "@chakra-ui/react";
import { trans } from "../data/trans";
import { TriangleUpIcon } from "@chakra-ui/icons";

export function Header() {
  const shouldHide = useScrollDirection();
  return (
    <motion.div
      className={`anchored-header ${!shouldHide ? "hide" : "show"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: MotionConstants.transition.fast,
        delay: MotionConstants.delay.normal,
      }}
    >
      <Text
        color={"white"}
        style={{
          fontFamily: "Major Mono Display",
          textTransform: "lowercase",
          paddingLeft: "1vw",
        }}
        fontSize="3xl"
      >
        <IconButton
          onClick={() => window.scrollTo(0, 0)}
          variant={"ghost"}
          aria-label="Return to top"
          icon={<TriangleUpIcon />}
        />
        {trans.head.title}
      </Text>
    </motion.div>
  );
}
