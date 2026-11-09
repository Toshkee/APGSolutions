import { nav, site } from "@/content/site";
import { Icon } from "./icons";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-night pb-8 text-white/75">
      <div className="container-x">
        <div className="grid grid-cols-2 items-start gap-x-16 gap-y-10 md:grid-cols-[minmax(280px,1fr)_1fr_auto]">
          <a
            href={site.phoneHref}
            className="group col-span-2 -mx-[max(20px,env(safe-area-inset-left))] flex flex-col gap-1.5 bg-white/6 px-[max(20px,env(safe-area-inset-left))] py-9 text-white transition-colors hover:bg-white/10 md:col-span-1 md:mx-0 md:px-10 md:py-11"
          >
            <span className="mb-3.5 size-11 text-amber transition-transform duration-300 group-hover:-rotate-12">
              <Icon name="phone" className="size-full" />
            </span>
            <span className="eyebrow text-white/70">Call Us</span>
            <span className="font-display text-[clamp(36px,4vw,48px)] leading-[1.1]">{site.phone}</span>
            <span className="mt-1 text-sm text-white/70">{site.hours}</span>
          </a>

          <div className="flex flex-col gap-5 text-[15px] leading-[1.8] md:pt-11">
            <a href="#top" className="text-white">
              <Logo />
            </a>
            <p>
              {site.city}
              <br />
              <span className="wrap-anywhere">{site.email}</span>
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3 text-[15px] md:pt-11">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-12 border-t border-white/12 pt-6 text-sm">© 2026 {site.name} · Nashville, TN</p>
      </div>
    </footer>
  );
}
