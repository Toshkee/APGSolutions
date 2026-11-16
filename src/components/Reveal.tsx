"use client";

import { motion, type HTMLMotionProps } from "motion/react";

export const easeOut = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

// Fades and lifts its children in once they scroll into view. Kept short and small so fast scrolling
// never shows half-faded content; it starts a little before the block is fully on screen.
export function Reveal({ delay = 0, y = 14, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.5, ease: easeOut, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
