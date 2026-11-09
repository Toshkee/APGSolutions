"use client";

import { motion, type Variants } from "motion/react";
import { hero } from "@/content/apg";
import { easeOut } from "../Reveal";
import { Button, CheckItem, Svg } from "./ui";

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-deep lg:flex lg:h-[calc(780px+var(--nav-h))] lg:items-center lg:bg-navy">
      {/* Nashville skyline video runs under the transparent nav: a band on phones, full background on desktop */}
      <div aria-hidden="true" className="relative h-[calc(280px+var(--nav-h))] overflow-hidden lg:absolute lg:inset-0 lg:h-auto">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: easeOut }}
        >
          {/* Placeholder footage (Pixabay, free license): downtown Nashville at dusk */}
          <video
            className="size-full object-cover object-[60%_center]"
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,18,50,0.55)_0%,rgba(6,18,50,0.15)_35%,rgba(6,18,50,0.15)_65%,#061232_100%)] lg:hidden" />
        {/* darkens the strip under the nav so the links stay readable */}
        <div className="absolute inset-x-0 top-0 hidden h-40 bg-[linear-gradient(180deg,rgba(6,18,50,0.6)_0%,rgba(6,18,50,0)_100%)] lg:block" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(6,18,50,0)_0%,rgba(6,18,50,0)_75%,rgba(11,27,63,0.95)_100%),linear-gradient(90deg,rgba(6,18,50,0.97)_0%,rgba(10,31,85,0.85)_40%,rgba(11,36,99,0.3)_62%,rgba(11,36,99,0.05)_100%)] lg:block" />
      </div>

      <div className="container-apg relative pt-2 pb-14 lg:pt-[calc(96px+var(--nav-h))] lg:pb-[120px]">
        <motion.div variants={container} initial="hidden" animate="show" className="flex max-w-[660px] flex-col items-start">
          <motion.p
            variants={rise}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-[7px] text-[12.5px] font-semibold text-white backdrop-blur-sm lg:gap-2.5 lg:px-4 lg:py-[9px] lg:text-sm"
          >
            <Svg src="/apg/badge-dot-mobile.svg" w={7} h={7} className="lg:hidden" />
            <Svg src="/apg/badge-dot.svg" w={8} h={8} className="hidden lg:block" />
            <span className="lg:hidden">{hero.badgeShort}</span>
            <span className="hidden lg:inline">{hero.badge}</span>
          </motion.p>

          <motion.h1
            variants={rise}
            className="display mt-[18px] text-[42px] leading-[0.98] text-white [text-wrap:wrap] lg:mt-[26px] lg:text-[76px] lg:tracking-[-0.5px]"
          >
            {hero.title}
            <span className="text-amber">{hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-4 text-base leading-[1.6] text-on-dark lg:mt-6 lg:max-w-[580px] lg:text-xl"
          >
            <span className="lg:hidden">{hero.leadShort}</span>
            <span className="hidden lg:inline">{hero.lead}</span>
          </motion.p>

          <motion.div variants={rise} className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-3.5 lg:mt-[38px]">
            <Button href="#get-started">Find Drivers →</Button>
            <Button href="#apply" variant="outline">
              I&apos;m a Driver — Apply
            </Button>
          </motion.div>

          <motion.div
            variants={rise}
            className="mt-6 flex flex-col gap-2.5 text-on-dark lg:mt-[38px] lg:flex-row lg:gap-[22px]"
          >
            {hero.trust.map((t) => (
              <CheckItem key={t} tone="dark">
                {t}
              </CheckItem>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
