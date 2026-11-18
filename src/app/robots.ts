import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Served at /robots.txt: every page may be indexed, and crawlers are pointed at the sitemap
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
