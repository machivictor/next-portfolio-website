import React from "react";
import { motion } from "framer-motion";
import { ViewProps } from "react-native-web";

interface SectionRevealProps {
  id: ViewProps["id"];
  children: React.ReactNode;
  delay?: number;
}

export default function SectionReveal(props: SectionRevealProps) {
  return (
    <motion.div
      id={props.id}
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: props.delay }}
    >
      {props.children}
    </motion.div>
  );
}
