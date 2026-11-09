"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav } from "@/content/site";
import { Logo } from "./Logo";
import { easeOut } from "./Reveal";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] text-white transition-[background-color,box-shadow] duration-300 ${
        solid ? "bg-night shadow-[0_8px_30px_-12px_rgba(7,30,92,.6)]" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-(--nav-h) items-center justify-between gap-6">
        <a href="#top" aria-label="Easy Motion Recruiting home" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {nav.map((item) =>
            item.href === "#contact" ? (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg border border-white/55 px-5 py-2.5 text-[15px] font-medium transition-colors hover:border-white hover:bg-white hover:text-brand"
              >
                {item.label}
              </a>
            ) : (
              <a key={item.href} href={item.href} className="group relative text-[15px] font-medium">
                {item.label}
                <span className="absolute inset-x-0 -bottom-1.5 h-0.5 origin-left scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ),
          )}
        </nav>

        <button
          type="button"
          className="flex size-11 flex-col items-center justify-center gap-[7px] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span animate={open ? { y: 4.5, rotate: 45 } : { y: 0, rotate: 0 }} className="h-0.5 w-6 bg-white" />
          <motion.span animate={open ? { y: -4.5, rotate: -45 } : { y: 0, rotate: 0 }} className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="overflow-hidden bg-night md:hidden"
          >
            <div className="container-x flex flex-col pb-6 pt-2">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                  className={
                    item.href === "#contact"
                      ? "mt-4 rounded-lg border border-white/55 py-3.5 text-center text-[17px] font-medium"
                      : "border-b border-white/12 py-4 text-[17px] font-medium"
                  }
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
