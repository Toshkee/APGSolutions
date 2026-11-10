import { footer, site } from "@/content/apg";
import Image from "next/image";
import Link from "next/link";
import logoWhite from "../../../public/apg/logo-apg-solutions-white.png";

export function Footer() {
  return (
    <footer className="bg-deep pt-12 pb-8 text-footer-text lg:pt-20 lg:pb-9">
      <div className="container-apg">
        <div className="flex flex-col gap-7 border-white/10 lg:flex-row lg:gap-20 lg:border-b lg:pb-14">
          <div className="flex flex-col gap-7 lg:w-[360px] lg:shrink-0 lg:gap-[22px]">
            <Link href="/#top" className="self-start" aria-label="APG Solutions home">
              {/* White version of the logo, generated from the JPG until the designer sends a vector one */}
              <Image src={logoWhite} alt="APG Solutions Inc." className="h-auto w-[150px] lg:w-[180px]" />
            </Link>
            <p className="text-sm leading-[1.6] lg:text-[15px]">
              <span className="lg:hidden">{footer.blurbShort}</span>
              <span className="hidden lg:inline">{footer.blurb}</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:flex lg:flex-1 lg:gap-20">
            {footer.columns.map((col) => (
              <nav
                key={col.title}
                aria-label={col.title}
                className={`flex flex-col gap-3 lg:flex-1 lg:gap-3.5 ${"desktopOnly" in col && col.desktopOnly ? "hidden lg:flex" : ""}`}
              >
                <p className="text-[13px] font-bold tracking-[1px] text-white uppercase lg:mb-1 lg:text-[15px]">{col.title}</p>
                {col.links.map((l) => (
                  // Hash links stay plain <a> so the form's "hashchange" tab switch still fires
                  l.href.includes("#") ? (
                    <a
                      key={l.label}
                      href={l.href}
                      className={`text-sm transition-colors hover:text-white lg:text-[15px] ${"desktopOnly" in l && l.desktopOnly ? "hidden lg:block" : ""}`}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      key={l.label}
                      href={l.href}
                      className={`text-sm transition-colors hover:text-white lg:text-[15px] ${"desktopOnly" in l && l.desktopOnly ? "hidden lg:block" : ""}`}
                    >
                      {l.label}
                    </Link>
                  )
                ))}
              </nav>
            ))}
            <div className="col-span-2 flex flex-col gap-2 text-sm lg:col-span-1 lg:flex-1 lg:gap-3.5 lg:text-[15px]">
              <p className="text-[13px] font-bold tracking-[1px] text-white uppercase lg:mb-1 lg:text-[15px]">Contact</p>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
              <p>{site.hours}</p>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-7 text-[13px] lg:mt-0 lg:flex-row lg:justify-between lg:border-t-0 lg:text-sm">
          <p>
            © 2026 {site.legalName}
            <span className="hidden lg:inline"> All rights reserved.</span>
            <span className="lg:hidden">
              {" · "}
              <a href="#top" className="hover:text-white">Privacy</a>
              {" · "}
              <a href="#top" className="hover:text-white">Terms</a>
            </span>
          </p>
          <p className="hidden gap-7 lg:flex">
            <a href="#top" className="hover:text-white">Privacy Policy</a>
            <a href="#top" className="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
