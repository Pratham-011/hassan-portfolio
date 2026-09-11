import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Generates /robots.txt at build time.
 *
 * Same reasoning as app/sitemap.ts: the sitemap URL is derived from
 * `site.seo.url` rather than typed out, so the domain lives in exactly one
 * place. This is how crawlers discover the sitemap without it being submitted
 * to Search Console by hand.
 *
 * The whole site is open to crawlers — there is nothing here to hide.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("sitemap.xml", site.seo.url).href,
  };
}
