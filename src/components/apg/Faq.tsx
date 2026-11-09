"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faq } from "@/content/apg";
import { Reveal, easeOut } from "../Reveal";
import { Button, SectionHeading } from "./ui";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

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
                      className="flex w-full items-center justify-between gap-6 py-[18px] text-left text-base font-bold transition-colors hover:text-blue lg:py-[26px] lg:text-[19px]"
                    >
                      {item.q}
                      <span aria-hidden="true" className="w-4 shrink-0 text-center text-[26px] leading-none font-normal text-blue">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-a-${i}`}
                        role="region"
                        aria-labelledby={`faq-q-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: easeOut }}
                        className="-mt-2 overflow-hidden lg:-mt-3.5"
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
