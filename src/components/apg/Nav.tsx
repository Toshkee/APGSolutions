"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, site } from "@/content/apg";
import { easeOut } from "../Reveal";
import { Logo } from "./Logo";
import { Button, Svg } from "./ui";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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

  // Transparent over the hero video at the top, solid white once scrolled or when the menu is open
  const solid = scrolled || open;
  const onVideo = "brightness-0 invert";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b pt-[env(safe-area-inset-top)] transition-[background-color,border-color,box-shadow,color] duration-300 ${
        solid
          ? "border-line-soft bg-white text-navy shadow-[0_8px_30px_-18px_rgba(11,27,63,0.35)]"
          : "border-white/10 bg-transparent text-white"
      }`}
    >
      <div className="container-apg flex h-(--nav-h) items-center justify-between gap-6">
        {/* The logo is a raster on white, so it sits on a white plate over the video */}
        <a
          href="#top"
          aria-label="APG Solutions home"
          onClick={() => setOpen(false)}
          className={`rounded-xl bg-white transition-[padding] duration-300 ${solid ? "p-0" : "px-2 py-1"}`}
        >
          <Logo priority className="w-[110px] lg:w-[150px]" />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 text-[15px] font-semibold lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="group relative transition-colors">
              {l.label}
              <span className="absolute inset-x-0 -bottom-1.5 h-0.5 origin-left scale-x-0 rounded-full bg-amber transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-[22px] lg:flex">
          <a href={site.phoneHref} className="flex items-center gap-2 text-[15px] font-bold transition-colors hover:text-amber">
            <Svg src="/apg/icon-phone.svg" w={18} h={18} className={`transition ${solid ? "" : onVideo}`} />
            {site.phone}
          </a>
          <Button href="#get-started" size="sm">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className="-mr-1 grid size-11 place-items-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M7 7l14 14M21 7L7 21" stroke="#0B1B3F" strokeWidth="2.56667" strokeLinecap="round" />
            </svg>
          ) : (
            <Svg src="/apg/icon-menu.svg" w={28} h={28} className={solid ? "" : onVideo} />
          )}
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
            transition={{ duration: 0.3, ease: easeOut }}
            className="overflow-hidden border-t border-line-soft bg-white lg:hidden"
          >
            <div className="container-apg flex flex-col pt-2 pb-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line-soft py-4 text-[17px] font-semibold"
                >
                  {l.label}
                </a>
              ))}
              <a href={site.phoneHref} className="mt-5 flex items-center gap-2 text-base font-bold">
                <Svg src="/apg/icon-phone.svg" w={18} h={18} />
                {site.phone}
              </a>
              <Button href="#get-started" className="mt-5 w-full" onClick={() => setOpen(false)}>
                Get Started
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
