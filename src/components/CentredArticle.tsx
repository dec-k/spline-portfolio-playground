import { GridItem, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { trans } from "../data/trans";
import { CentredArticleProps } from "../types/SceneTypes";

// Article-like content designed to play correctly with snap points, etc. Use props.children for the actual content
export function CentredArticle(props: CentredArticleProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      style={{
        scrollSnapAlign: "start",
        height: "100vh",
      }}
    >
      <div style={{ marginTop: "40%", marginBottom: "40%" }}>
        {props.children}
      </div>
    </motion.div>
  );
}
