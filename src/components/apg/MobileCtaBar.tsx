"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/apg";
import { Button, MaskIcon } from "./ui";

// Phones only: keeps "Find Drivers" and a call button in reach after the hero,
// and gets out of the way once the final CTA form (home) or the footer (other pages) is on screen
export function MobileCtaBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => {
      const end = document.getElementById("get-started") ?? document.querySelector("footer");
      const endReached = end ? end.getBoundingClientRect().top < window.innerHeight : false;
      setShow(window.scrollY > 560 && !endReached);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      inert={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line-soft bg-white/95 px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] shadow-[0_-10px_30px_-18px_rgba(11,27,63,0.45)] backdrop-blur transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-3">
        <Button href="/#get-started" className="flex-1">
          Find Drivers →
        </Button>
        <a
          href={site.phoneHref}
          aria-label={`Call ${site.phone}`}
          className="grid size-[52px] shrink-0 place-items-center rounded-[10px] border-[1.5px] border-line-input text-blue transition-colors hover:border-blue/50 active:bg-pill"
        >
          <MaskIcon src="/apg/icon-phone.svg" size={20} />
        </a>
      </div>
    </div>
  );
}
