import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { alternates, locales, localePath } from "@/i18n";

const pages: { path: string; changeFrequency: "monthly" | "yearly"; priority: number }[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

const full = (path: string) => (path === "/" ? site.url : `${site.url}${path}`);

// Served at /sitemap.xml. Add new pages to `pages`; each one is listed in English and Spanish, with links between the two.
// No lastModified: a date that changes on every request misleads Google
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, changeFrequency, priority }) =>
    locales.map((lang) => {
      const { languages } = alternates(lang, path);
      return {
        url: full(localePath(lang, path)),
        changeFrequency,
        priority,
        alternates: { languages: Object.fromEntries(Object.entries(languages).map(([code, p]) => [code, full(p)])) },
      };
    }),
  );
}
