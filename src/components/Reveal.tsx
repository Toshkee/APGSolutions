"use client";

import { motion, type HTMLMotionProps } from "motion/react";

export const easeOut = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

// Fades and lifts its children in once they scroll into view
export function Reveal({ delay = 0, y = 28, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.8, ease: easeOut, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
