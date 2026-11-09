"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { site } from "@/content/site";
import { easeOut } from "./Reveal";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOut } },
};

// Headline lines slide up from behind a mask
const line: Variants = {
  hidden: { y: "105%" },
  show: { y: "0%", transition: { duration: 1, ease: easeOut } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[min(100svh,920px)] items-end overflow-hidden bg-night text-white"
    >
      {/* Placeholder footage (Pixabay, free license). Replace with client footage before launch. */}
      <motion.div
        className="absolute inset-0"
        style={{ y: videoY }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: easeOut }}
      >
        <video
          className="size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/nashville-hero-poster.jpg"
        >
          <source src="/media/nashville-hero.webm" type="video/webm" />
          <source src="/media/nashville-hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,30,92,.55)_0%,rgba(7,30,92,.15)_35%,rgba(7,30,92,.88)_100%),linear-gradient(90deg,rgba(11,47,144,.55)_0%,rgba(11,47,144,0)_70%)]"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-x relative pt-[calc(var(--nav-h)+80px)] pb-[calc(var(--overlap)+clamp(48px,8vh,96px))]"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={rise} className="eyebrow mb-5 text-amber">
            {site.city}
          </motion.p>

          <h1 className="font-display text-[clamp(48px,7.4vw,96px)] leading-[1.05] tracking-[-0.01em]">
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span variants={line} className="block">
                Qualified CDL drivers.
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.em variants={line} className="block text-sky">
                Ready to roll.
              </motion.em>
            </span>
          </h1>

          <motion.p variants={rise} className="mt-6 max-w-[46ch] text-[clamp(17px,1.6vw,20px)] text-white/88">
            We connect trucking companies with verified, road-ready drivers, and help drivers find jobs worth staying
            in.
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="inline-flex flex-1 items-center justify-center rounded-lg bg-amber px-6.5 py-3.5 text-[15px] font-semibold text-[#1c1300] transition hover:-translate-y-px hover:bg-amber-hover sm:flex-none"
            >
              Hire Drivers
            </a>
            <a
              href="#contact"
              className="inline-flex flex-1 items-center justify-center rounded-lg border border-white/55 px-6.5 py-3.5 text-[15px] font-semibold transition hover:-translate-y-px hover:border-white hover:bg-white/10 sm:flex-none"
            >
              I&apos;m a Driver
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
