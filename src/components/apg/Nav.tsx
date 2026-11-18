"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import type { Dictionary } from "@/content";
import { site } from "@/content/site";
import { basePath, htmlLang, localePath, type Locale } from "@/i18n";
import { easeOut } from "../Reveal";
import { Logo } from "./Logo";
import { Button, Svg } from "./ui";

type NavProps = { lang: Locale; links: Dictionary["navLinks"]; t: Dictionary["nav"] };

export function Nav({ lang, links, t }: NavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const to = (path: string) => localePath(lang, path);
  // Only real pages get an active state; "/#section" links don't
  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(to(href));
  // The same page in the other language
  const otherLang: Locale = lang === "en" ? "es" : "en";
  const switchHref = localePath(otherLang, basePath(pathname));
  // Desktop shows the short code ("ES"), phones the full name ("Español"): the desktop bar has no room to spare
  const languageSwitch = (label: string, className: string) => (
    <Link
      href={switchHref}
      hrefLang={htmlLang[otherLang]}
      lang={htmlLang[otherLang]}
      aria-label={t.switchAria}
      onClick={() => setOpen(false)}
      className={`flex items-center gap-1.5 font-semibold whitespace-nowrap transition-colors hover:text-blue ${className}`}
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9.5" />
        <path d="M2.5 12h19M12 2.5c2.6 2.6 4 6 4 9.5s-1.4 6.9-4 9.5c-2.6-2.6-4-6-4-9.5s1.4-6.9 4-9.5z" />
      </svg>
      {label}
    </Link>
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-line-soft bg-white pt-[env(safe-area-inset-top)] text-navy shadow-[0_8px_30px_-18px_rgba(11,27,63,0.35)]"
    >
      <div className="container-apg flex h-(--nav-h) items-center justify-between gap-6">
        <Link href={to("/#top")} aria-label={t.homeLabel} onClick={() => setOpen(false)} className="shrink-0">
          <Logo priority className="w-[110px] lg:w-[150px]" />
        </Link>

        <nav aria-label={t.mainLabel} className="hidden items-center gap-6 text-[15px] font-semibold whitespace-nowrap lg:flex xl:gap-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={to(l.href)}
              aria-current={isActive(l.href) ? "page" : undefined}
              className="group relative transition-colors"
            >
              {l.label}
              <span
                className={`absolute inset-x-0 -bottom-1.5 h-0.5 origin-left rounded-full bg-amber transition-transform duration-300 group-hover:scale-x-100 ${
                  isActive(l.href) ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-[22px] lg:flex">
          {languageSwitch(t.switchShort, "text-[15px]")}
          {/* 1024–1279px: just the phone icon, so the bar fits with the language switch; the number shows from 1280px */}
          <a href={site.phoneHref} className="flex items-center gap-2 text-[15px] font-bold whitespace-nowrap transition-colors hover:text-amber">
            <Svg src="/apg/icon-phone.svg" w={18} h={18} />
            <span className="sr-only xl:not-sr-only">{site.phone}</span>
          </a>
          <Button href={to("/#get-started")} size="sm">
            {t.getStarted}
          </Button>
        </div>

        {/* Phones: the language switch stays in the bar, so nobody has to open the menu to find it */}
        <div className="flex items-center gap-3 lg:hidden">
          {languageSwitch(t.switchLabel, "min-h-11 text-[14px]")}
          <button
            type="button"
            className="-mr-1 grid size-11 place-items-center"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M7 7l14 14M21 7L7 21" stroke="#0B1B3F" strokeWidth="2.56667" strokeLinecap="round" />
              </svg>
            ) : (
              <Svg src="/apg/icon-menu.svg" w={28} h={28} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label={t.mobileLabel}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="overflow-hidden border-t border-line-soft bg-white lg:hidden"
          >
            <div className="container-apg flex flex-col pt-2 pb-6">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={to(l.href)}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`border-b border-line-soft py-4 text-[17px] font-semibold ${isActive(l.href) ? "text-blue" : ""}`}
                >
                  {l.label}
                </Link>
              ))}
              <a href={site.phoneHref} className="mt-5 flex items-center gap-2 text-base font-bold">
                <Svg src="/apg/icon-phone.svg" w={18} h={18} />
                {site.phone}
              </a>
              <Button href={to("/#get-started")} className="mt-5 w-full" onClick={() => setOpen(false)}>
                {t.getStarted}
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
