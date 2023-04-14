import { Stack } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import React from "react";
import "../styles/OverlayRootStyles.css";
import { ScrollSnapContainer } from "./ScrollSnapContainer";
import { About } from "./About";
import { TitleBlock } from "./TitleBlock";
import { Header } from "./Header";
import { trans } from "../data/trans";
import { Project } from "./Project";
import { Article } from "./Article";
import { Footer } from "./Footer";

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
          <ScrollSnapContainer>
            <About />
          </ScrollSnapContainer>

          {/* Projects */}
          {trans.projects.data.map((p) => (
            <ScrollSnapContainer>
              <Project title={p.title} about={p.about} />
            </ScrollSnapContainer>
          ))}

          {/* Articles */}
          {trans.articles.data.map((a) => (
            <ScrollSnapContainer>
              <Article title={a.title} about={a.about} href={a.href} />
            </ScrollSnapContainer>
          ))}
        </div>
      </Stack>

      {/* Footer temporarily disabled due to consistency issues.*/}
      {/* <Footer /> */}
    </>
  );
}
