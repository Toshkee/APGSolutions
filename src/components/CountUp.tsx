"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { easeOut } from "./Reveal";

// Counts the number inside a stat ("2,500+", "72 hrs", "$0") up from zero the first time it scrolls into view.
// The real value is in the HTML from the start, so it reads correctly without JavaScript and for screen readers.
export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduce = useReducedMotion();
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);

  // Start from zero once hydrated (the stats band is still fading in at that point, so there is no visible jump)
  useEffect(() => {
    const el = ref.current;
    if (!el || !match || reduce || inView) return;
    el.textContent = `${match[1]}0${match[3]}`;
    // only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || !inView || reduce) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ""));
    if (target === 0) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: easeOut,
      onUpdate: (n) => {
        el.textContent = `${prefix}${Math.round(n).toLocaleString("en-US")}${suffix}`;
      },
    });
    return () => controls.stop();
    // match is derived from value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {value}
    </span>
  );
}
