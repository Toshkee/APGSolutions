"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type Props = {
  src: StaticImageData;
  alt?: string;
  sizes: string;
  className?: string;
  // How far the photo drifts while its section scrolls through the screen, in % of the frame height
  strength?: number;
};

// Full-cover photo that drifts slower than the page, for a little depth. Fills its positioned parent.
export function ParallaxImage({ src, alt = "", sizes, className = "", strength = 12 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength / 2}%`, `${strength / 2}%`]);
  // The photo is taller than its frame by `strength`, so the drift never shows an edge
  const bleed = `-${strength / 2}%`;

  return (
    <div ref={ref} aria-hidden={alt ? undefined : true} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={reduce ? { top: 0, bottom: 0 } : { y, top: bleed, bottom: bleed }}
        className="absolute inset-x-0"
      >
        <Image src={src} alt={alt} fill sizes={sizes} placeholder="blur" className={`object-cover ${className}`} />
      </motion.div>
    </div>
  );
}
