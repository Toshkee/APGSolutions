import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { lang as rootLang } from "next/root-params";
import { getDictionary } from "@/content";
import { defaultLocale, hasLocale } from "@/i18n";

// Any address that isn't a page ends up here, so it gets the site's 404 page (app/[lang]/not-found.tsx)
// in the right language instead of the plain Next.js one.

// The 404 page's own title doesn't reach the browser tab on this route, so it is set here too
export async function generateMetadata(): Promise<Metadata> {
  const lang = await rootLang();
  return { title: getDictionary(hasLocale(lang) ? lang : defaultLocale).notFound.metaTitle };
}

export default function CatchAll() {
  notFound();
}
