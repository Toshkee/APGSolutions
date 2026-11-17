"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useAnimationControls, useInView, type Variants } from "motion/react";

type IconControls = ReturnType<typeof useAnimationControls>;

// Line icons that move a little: once when they scroll into view (phones have no hover), and again on hover.
// Paths are the designer's original icons (public/apg/icon-*.svg and the How It Works icons), drawn inline so
// each part can animate. Every animation ends where it started, so the resting icon looks exactly like before.

const ease = [0.22, 1, 0.36, 1] as const;
const draw = (delay = 0): Variants => ({
  play: { pathLength: [0, 1], opacity: [0.2, 1], transition: { duration: 0.7, ease, delay } },
});

type IconDef = { viewBox: string; strokeWidth: number; svg?: Variants; body: ReactNode };

const icons = {
  // Benefits (26px grid, from the Figma export)
  pulse: {
    viewBox: "0 0 26 26",
    strokeWidth: 2.2,
    body: <motion.path variants={draw()} d="M23.8333 13H19.5L16.25 22.75L9.75 3.25L6.5 13H2.16667" />,
  },
  shield: {
    viewBox: "0 0 26 26",
    strokeWidth: 2.2,
    svg: { play: { scale: [1, 1.18, 1], transition: { duration: 0.5, ease } } },
    body: (
      <>
        <path d="M13 23.8333C13 23.8333 21.6667 19.5 21.6667 13V5.41667L13 2.16667L4.33333 5.41667V13C4.33333 19.5 13 23.8333 13 23.8333Z" />
        <motion.path variants={draw(0.15)} d="M9.75 13L11.9167 15.1667L16.25 10.8333" />
      </>
    ),
  },
  repeat: {
    viewBox: "0 0 26 26.0333",
    strokeWidth: 2.2,
    // the two arrows look the same turned upside down, so half a turn ends on the original icon
    svg: { play: { rotate: [0, 180], transition: { duration: 0.8, ease } } },
    body: (
      <>
        <path d="M18.4167 1.1L22.75 5.43333L18.4167 9.76667" />
        <path d="M3.25 11.9333V9.76667C3.25 8.6174 3.70655 7.51519 4.5192 6.70254C5.33186 5.88988 6.43406 5.43333 7.58333 5.43333H22.75M7.58333 24.9333L3.25 20.6L7.58333 16.2667" />
        <path d="M22.75 14.1V16.2667C22.75 17.4159 22.2935 18.5181 21.4808 19.3308C20.6681 20.1435 19.5659 20.6 18.4167 20.6H3.25" />
      </>
    ),
  },
  clock: {
    viewBox: "0 0 26 26",
    strokeWidth: 2.2,
    body: (
      <>
        <path d="M23.8333 13C23.8333 18.9831 18.9831 23.8333 13 23.8333C7.01691 23.8333 2.16667 18.9831 2.16667 13C2.16667 7.01691 7.01691 2.16667 13 2.16667C18.9831 2.16667 23.8333 7.01691 23.8333 13Z" />
        {/* the hands sweep a full turn around the clock's centre (13,13) */}
        <motion.path
          variants={{ play: { rotate: [0, 360], transition: { duration: 0.9, ease } } }}
          style={{ originX: "13px", originY: "13px", transformBox: "view-box" }}
          d="M13 6.5V13L17.3333 15.1667"
        />
      </>
    ),
  },
  lock: {
    viewBox: "0 0 26 26",
    strokeWidth: 2.2,
    body: (
      <>
        <path d="M5.41667 11.9167H20.5833C21.78 11.9167 22.75 12.8867 22.75 14.0833V21.6667C22.75 22.8633 21.78 23.8333 20.5833 23.8333H5.41667C4.22005 23.8333 3.25 22.8633 3.25 21.6667V14.0833C3.25 12.8867 4.22005 11.9167 5.41667 11.9167Z" />
        {/* the open shackle lifts and drops back */}
        <motion.path
          variants={{ play: { y: [0, -4, 0], transition: { duration: 0.6, ease } } }}
          d="M7.58333 11.9167V7.58333C7.58198 6.24005 8.0798 4.94419 8.98015 3.94731C9.8805 2.95042 11.1191 2.32364 12.4556 2.18865C13.7921 2.05365 15.1311 2.42006 16.2126 3.21676C17.2941 4.01345 18.041 5.18358 18.3083 6.5"
        />
      </>
    ),
  },
  users: {
    viewBox: "0 0 26.0333 26",
    strokeWidth: 2.2,
    body: (
      <>
        <motion.g variants={{ play: { y: [0, -2.6, 0], transition: { duration: 0.5, ease } } }}>
          <path d="M18.4333 22.75V20.5833C18.4333 19.4341 17.9768 18.3319 17.1641 17.5192C16.3515 16.7065 15.2493 16.25 14.1 16.25H5.43333C4.28406 16.25 3.18186 16.7065 2.3692 17.5192C1.55655 18.3319 1.1 19.4341 1.1 20.5833V22.75" />
          <path d="M14.1 7.58333C14.1 9.97657 12.1599 11.9167 9.76667 11.9167C7.37343 11.9167 5.43333 9.97657 5.43333 7.58333C5.43333 5.1901 7.37343 3.25 9.76667 3.25C12.1599 3.25 14.1 5.1901 14.1 7.58333Z" />
        </motion.g>
        <motion.path
          variants={{ play: { y: [0, -2.6, 0], transition: { duration: 0.5, ease, delay: 0.12 } } }}
          d="M24.9333 22.75V20.5833C24.9326 19.6232 24.6131 18.6905 24.0248 17.9317C23.4366 17.1728 22.613 16.6309 21.6833 16.3908M17.35 3.39083C18.2821 3.62949 19.1083 4.17159 19.6983 4.93167C20.2883 5.69175 20.6085 6.62657 20.6085 7.58875C20.6085 8.55093 20.2883 9.48575 19.6983 10.2458C19.1083 11.0059 18.2821 11.548 17.35 11.7867"
        />
      </>
    ),
  },

  // How It Works (24px grid)
  clipboard: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    body: (
      <>
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        {/* the checklist writes itself */}
        <motion.path variants={draw(0.1)} d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
      </>
    ),
  },
  search: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    // the magnifier scans in a small loop
    svg: { play: { x: [0, -3, 3, 0], y: [0, -2, 1.5, 0], transition: { duration: 0.8, ease } } },
    body: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
  },
  chat: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    body: (
      <>
        <motion.path
          variants={{ play: { rotate: [0, -10, 6, 0], transition: { duration: 0.6, ease } } }}
          style={{ originX: "2px", originY: "15px", transformBox: "view-box" }}
          d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"
        />
        <motion.path
          variants={{ play: { rotate: [0, 10, -6, 0], transition: { duration: 0.6, ease, delay: 0.15 } } }}
          style={{ originX: "22px", originY: "22px", transformBox: "view-box" }}
          d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
        />
      </>
    ),
  },
  dollar: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    // the coin flips once
    svg: { play: { rotateY: [0, 360], transition: { duration: 0.9, ease } } },
    body: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6" />
      </>
    ),
  },
} satisfies Record<string, IconDef>;

export type IconName = keyof typeof icons;

export function AnimatedIcon({ name, size, controls }: { name: IconName; size: number; controls: IconControls }) {
  const icon: IconDef = icons[name];
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={icon.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="block shrink-0"
      initial={false}
      animate={controls}
      variants={icon.svg}
    >
      {icon.body}
    </motion.svg>
  );
}

// Plays the icon once when its item scrolls into view (after `delay` seconds), and again from `play()` on hover.
// `margin` should match the item's own reveal, so the icon never moves while it is still hidden.
export function useIconPlay(delay = 0, margin: `${number}px ${number}px ${number}px ${number}px` = "0px 0px -40px 0px") {
  const controls = useAnimationControls();
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin });
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => controls.start("play"), delay * 1000);
    return () => clearTimeout(t);
  }, [inView, delay, controls]);
  return { ref, controls, play: () => controls.start("play") };
}
