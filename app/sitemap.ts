import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Generates /sitemap.xml at build time.
 *
 * Written as code rather than a static file in /public for two reasons:
 *   1. the URLs come from `site.seo.url`, so changing the domain in one place
 *      updates the canonical tag and the sitemap together;
 *   2. `lastModified` is stamped at build time, so it can't go stale the way a
 *      hand-written <lastmod> does.
 *
 * This is a one-page site, so the list is the homepage plus the resume PDF.
 * Add a route here whenever a new indexable page is added to the site.
 */
/**
 * Required by `output: "export"` in next.config.ts. A sitemap route is a Route
 * Handler, and a static export has no server to run one on request — this tells
 * Next to run it once at build time and write the result to out/sitemap.xml.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: site.seo.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      // `new URL(path, base)` rather than string concatenation — it can't
      // produce a double slash if the base ever loses its trailing one.
      url: new URL("resume.pdf", site.seo.url).href,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
