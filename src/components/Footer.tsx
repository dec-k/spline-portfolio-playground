import React from "react";
import "../styles/FooterStyles.css";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { AnimatePresence, motion } from "framer-motion";
import { MotionConstants } from "../data/motionConstants";
import { Center, IconButton } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

export function Footer() {
  // Used inverse to Header.tsx in this function app to show down-scroll prompt when scrolling UP.
  const shouldHide = useScrollDirection();

  return (
    <AnimatePresence>
      {!shouldHide && (
        <motion.div
          className={`footer ${!shouldHide ? "show" : "hide"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: MotionConstants.transition.veryfast,
          }}
        >
          <Center className={"footer"}>
            <IconButton
              aria-label="Scroll to first article"
              onClick={() =>
                document.documentElement.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                })
              }
              variant={"unstyled"}
              icon={<ArrowDownIcon />}
            />
          </Center>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
