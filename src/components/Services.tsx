"use client";

import { motion, type Variants } from "motion/react";
import { services } from "@/content/site";
import { Icon } from "./icons";
import { easeOut } from "./Reveal";

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOut } },
};

// Service cards that overlap the bottom of the hero
export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative z-10 -mt-(--overlap)">
      <div className="container-x">
        <h2 id="services-title" className="sr-only">
          Our Services
        </h2>
        <motion.div
          variants={list}
          initial="hidden"
          animate="show"
          className="grid gap-3.5 md:grid-cols-3 md:gap-5"
        >
          {services.map((s) => (
            <motion.article
              key={s.title}
              variants={card}
              whileHover={{ y: -6 }}
              className="flex flex-col gap-3 rounded-xl bg-brand px-7.5 pt-8 pb-8.5 text-white shadow-[0_24px_50px_-24px_rgba(7,30,92,.55)] transition-colors hover:bg-brand-hover"
            >
              <span className="mb-1.5 grid size-12 place-items-center rounded-xl bg-white/12">
                <Icon name={s.icon} />
              </span>
              <h3 className="relative pb-3.5 text-[21px] font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-amber">
                {s.title}
              </h3>
              <p className="text-[15.5px] text-white/80">{s.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
