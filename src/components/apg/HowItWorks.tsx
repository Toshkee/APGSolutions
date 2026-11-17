"use client";

import { motion } from "motion/react";
import { howItWorks } from "@/content/apg";
import { Reveal } from "../Reveal";
import { AnimatedIcon, useIconPlay, type IconName } from "./AnimatedIcon";
import { SectionHeading } from "./ui";

// One animated icon per step, in the same order as howItWorks.steps
const stepIcons: IconName[] = ["clipboard", "search", "chat", "dollar"];

// Seconds the amber line takes to draw through all four steps
const DRAW = 1.4;

// A real sequence, so it reads as a timeline: horizontal on desktop, vertical on phones
export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[linear-gradient(147.84deg,#061232_0%,#0b2463_71.43%)] py-16 lg:py-[110px]"
    >
      <div className="container-apg">
        <Reveal>
          <SectionHeading tone="dark" title={howItWorks.title} lead={howItWorks.lead} />
        </Reveal>
        <ol className="relative mt-9 grid gap-9 lg:mt-[68px] lg:grid-cols-4 lg:gap-8">
          {/* connecting line through the icon centers: a faint track, plus an amber line that draws itself
              along the steps (down on phones, across on desktop) as the section scrolls into view */}
          <span
            aria-hidden="true"
            className="absolute top-6 bottom-6 left-[23px] w-px bg-white/15 lg:top-6 lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto"
          />
          <motion.span
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "0px 0px -120px 0px" }}
            transition={{ duration: DRAW, ease: "easeInOut" }}
            className="absolute top-6 bottom-6 left-[23px] w-px origin-top bg-[linear-gradient(180deg,#f5a524,rgba(245,165,36,0.25))] lg:hidden"
          />
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "0px 0px -120px 0px" }}
            transition={{ duration: DRAW, ease: "easeInOut" }}
            className="absolute top-6 right-0 left-0 hidden h-px origin-left bg-[linear-gradient(90deg,#f5a524,rgba(245,165,36,0.25))] lg:block"
          />
          {howItWorks.steps.map((step, i) => (
            <Step key={step.title} index={i} {...step} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function Step({ title, text, index }: { title: string; text: string; index: number }) {
  // play right after this step's icon has popped in on the timeline
  const { ref, controls, play } = useIconPlay((DRAW / howItWorks.steps.length) * index + 0.45, "0px 0px -120px 0px");
  return (
    <li ref={ref} onMouseEnter={play} className="group relative pl-[68px] lg:pt-[76px] lg:pl-0">
      {/* each icon pops in as the line reaches it. The pop-in (outer) and the hover styles (inner) are on
          separate elements, otherwise Safari replays the CSS transition and the icon blinks twice */}
      <motion.span
        aria-hidden="true"
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -120px 0px" }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: (DRAW / howItWorks.steps.length) * index }}
        className="absolute top-0 left-0 z-10 size-12"
      >
        <span className="grid size-full place-items-center rounded-full border border-amber/45 bg-[#0b2463] text-amber shadow-[0_0_0_6px_rgba(245,165,36,0.1)] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-amber group-hover:bg-amber group-hover:text-navy group-hover:shadow-[0_0_0_6px_rgba(245,165,36,0.22)]">
          <AnimatedIcon name={stepIcons[index]} size={22} controls={controls} />
        </span>
      </motion.span>
      <Reveal delay={(DRAW / howItWorks.steps.length) * index + 0.1}>
        <h3 className="pt-2.5 text-[19px] leading-[1.3] font-bold text-white lg:pt-0 lg:text-[21px]">{title}</h3>
        <p className="mt-2 text-[15.5px] leading-[1.6] text-on-dark-muted lg:max-w-[260px]">{text}</p>
      </Reveal>
    </li>
  );
}
