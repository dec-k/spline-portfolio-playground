import React from "react";
import "../styles/HeaderStyles.css";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { AnimatePresence, motion } from "framer-motion";
import { MotionConstants } from "../data/motionConstants";
import { IconButton, Text } from "@chakra-ui/react";
import { trans } from "../data/trans";
import { TriangleUpIcon } from "@chakra-ui/icons";

export function Header() {
  const shouldHide = useScrollDirection();

  return (
    <AnimatePresence>
      {shouldHide && (
        <motion.div
          className={`anchored-header ${!shouldHide ? "hide" : "show"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: MotionConstants.transition.veryfast,
          }}
        >
          <Text
            color={"white"}
            style={{
              fontFamily: "Major Mono Display",
              textTransform: "lowercase",
              paddingLeft: "0.5vw",
            }}
            fontSize="3xl"
          >
            <IconButton
              onClick={() =>
                document.documentElement.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              variant={"unstyled"}
              aria-label="Return to top"
              icon={<TriangleUpIcon />}
            />
            {trans.head.title}
          </Text>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
