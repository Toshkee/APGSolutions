"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { team } from "@/content/site";
import { Reveal, easeOut } from "./Reveal";

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export function Team() {
  return (
    <section id="team" className="bg-tint py-[clamp(80px,10vw,128px)]">
      <div className="container-x">
        <Reveal className="mb-12">
          <p className="eyebrow mb-4.5 text-brand">Meet the Team</p>
          <h2 className="font-display text-[clamp(36px,4.6vw,56px)] leading-[1.05] text-ink">Real people. Direct lines.</h2>
        </Reveal>

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="grid grid-cols-2 gap-3.5 sm:gap-6 lg:grid-cols-4"
        >
          {team.map((person, i) => (
            <motion.article
              key={`${person.name}-${i}`}
              variants={item}
              className="group flex flex-col overflow-hidden rounded-xl bg-paper transition-shadow duration-300 hover:shadow-[0_24px_50px_-28px_rgba(7,30,92,.45)]"
            >
              <div className="relative aspect-square overflow-hidden bg-[linear-gradient(160deg,#d9e2f7,#b9c8ee)]">
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid size-full place-items-center font-display text-[40px] text-brand transition-transform duration-700 group-hover:scale-105 sm:text-[56px]"
                  >
                    {initials(person.name)}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-0.5 px-3.5 pt-3.5 pb-4.5 sm:px-5.5 sm:pt-5 sm:pb-6">
                <h3 className="text-[19px] font-semibold text-brand">{person.name}</h3>
                <p className="mb-2.5 text-[15px]">{person.role}</p>
                <p className="text-sm text-muted">{person.office}</p>
                <p className="text-sm text-muted">{person.phone}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
