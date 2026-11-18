// Site languages. English lives at the plain addresses ("/", "/about"), Spanish under "/es" ("/es", "/es/about").
// src/proxy.ts serves the plain addresses from the app/[lang] folder as "en".

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

// Language codes for <html lang>, hreflang and Open Graph
export const htmlLang: Record<Locale, string> = { en: "en-US", es: "es-US" };
export const ogLocale: Record<Locale, string> = { en: "en_US", es: "es_US" };

// An English site path ("/", "/about", "/#faq", "/about#team") in the given language
export function localePath(lang: Locale, path: string) {
  if (lang === defaultLocale) return path;
  if (path === "/") return `/${lang}`;
  if (path.startsWith("/#")) return `/${lang}${path.slice(1)}`;
  return `/${lang}${path}`;
}

// The browser path without its language prefix: "/es/about" → "/about", "/es" → "/"
export function basePath(pathname: string) {
  for (const l of locales) {
    if (l === defaultLocale) continue;
    if (pathname === `/${l}`) return "/";
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname;
}

// hreflang links for a page, so Google shows each language to the right people
export function alternates(lang: Locale, path: string) {
  return {
    canonical: localePath(lang, path),
    languages: {
      "en-US": localePath("en", path),
      "es-US": localePath("es", path),
      "x-default": localePath("en", path),
    },
  };
}
