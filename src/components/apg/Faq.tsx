"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faq } from "@/content/apg";
import { Reveal, easeOut } from "../Reveal";
import { Button, SectionHeading } from "./ui";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  // The answer tucks up under its question (8px on phones, 14px from lg). The pull is animated with the
  // height, so nothing below jumps when an answer mounts or unmounts.
  const [pull, setPull] = useState(-8);
  useEffect(() => {
    const mq = window.matchMedia("(width >= 64rem)");
    const update = () => setPull(mq.matches ? -14 : -8);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section id="faq" className="pt-16 pb-12 lg:pt-[110px] lg:pb-20">
      <div className="container-apg flex flex-col gap-7 lg:flex-row lg:items-start lg:gap-20">
        <Reveal className="lg:w-[420px] lg:shrink-0">
          <SectionHeading title={faq.title} lead={faq.lead} leadClassName="lg:max-w-[400px]" leadDesktopOnly />
          <Button href="#get-started" variant="dark" className="mt-7 hidden lg:inline-flex">
            {faq.cta}
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 flex-1">
          <ul>
            {faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 py-[18px] text-left text-base font-bold transition-colors hover:text-blue lg:py-[26px] lg:text-[19px]"
                    >
                      {item.q}
                      {/* plus that turns into a minus: the vertical bar folds away when open */}
                      <span
                        aria-hidden="true"
                        className={`relative grid size-8 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                          isOpen ? "bg-blue text-white" : "bg-pill text-blue group-hover:bg-blue group-hover:text-white"
                        }`}
                      >
                        <span className="absolute h-0.5 w-3 rounded-full bg-current" />
                        <span
                          className={`absolute h-3 w-0.5 rounded-full bg-current transition-transform duration-300 ${isOpen ? "scale-y-0" : ""}`}
                        />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-a-${i}`}
                        role="region"
                        aria-labelledby={`faq-q-${i}`}
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: pull }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: easeOut }}
                        className="overflow-hidden"
                      >
                        <p className="pb-[18px] text-[15px] leading-[1.6] text-muted lg:pb-[26px] lg:text-base">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
