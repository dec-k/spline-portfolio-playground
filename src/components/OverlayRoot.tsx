import { Stack } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import React from "react";
import "../styles/OverlayRootStyles.css";
import { CentredArticle } from "./CentredArticle";
import { About } from "./About";
import { TitleBlock } from "./TitleBlock";
import { Header } from "./Header";

export function OverlayRoot() {
  // Utils
  const { scrollYProgress } = useScroll();

  // Final render
  return (
    <>
      {/* Progressive Scroll */}
      <motion.div
        className={"progress-bar"}
        style={{ scaleX: scrollYProgress }}
      />

      {/* Anchored Head */}
      <Header />

      <Stack direction={"column"} spacing={3}>
        <div className={"root-container"}>
          {/* NOTE: Each entity inside this container should have some means to size itself to 100vh and enforce a scroll-snap rule. */}

          {/* Title Block, links, etc. */}
          <TitleBlock />

          {/* BuiltWith / About */}
          <CentredArticle>
            <About />
          </CentredArticle>
        </div>
      </Stack>
    </>
  );
}
