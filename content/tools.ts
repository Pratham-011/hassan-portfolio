import type { Tool } from "@/lib/types";

/** Heading copy for the Tools section. */
export const toolsIntro = {
  eyebrow: "TOOLS",
} as const;

/**
 * The toolset chips. 4 per row on desktop, 2 on tablet, 1 on mobile.
 *
 * Each chip shows the brand's complete logo exactly as supplied — nothing is
 * cropped or recoloured. Only the empty margin around each image was trimmed,
 * so that every logo fills its box consistently rather than floating in a
 * different amount of whitespace.
 *
 * Because eleven of these logos already contain the brand name, printing
 * `name` next to them would say it twice — so the chip shows the logo alone.
 * Google Search Console's logo is icon-only, so it sets `logoHasName: false`
 * and the chip prints the name alongside the icon.
 *
 * `dot` is the fallback: remove a `logo` (or delete the file) and the chip
 * renders the small category-coloured dot from the Figma instead.
 *
 * The untouched originals are also archived in /design/tool-logos-source/.
 */
export const tools: Tool[] = [
  { dot: "green", id: "semrush", name: "Semrush", logo: "/images/tools/semrush.png" },
  { dot: "green", id: "ahrefs", name: "Ahrefs", logo: "/images/tools/ahrefs.png" },
  { dot: "green", id: "google-trends", name: "Google Trends", logo: "/images/tools/google-trends.png" },
  {
    dot: "green",
    id: "google-search-console",
    name: "Google Search Console",
    logo: "/images/tools/google-search-console.png",
    logoHasName: false,
  },
  { dot: "green", id: "screaming-frog", name: "Screaming Frog", logo: "/images/tools/screaming-frog.png" },
  {
    dot: "green",
    id: "google-analytics",
    name: "Google Analytics",
    logo: "/images/tools/google-analytics.png",
  },
  { dot: "green", id: "google-ads", name: "Google Ads", logo: "/images/tools/google-ads.png" },
  { dot: "green", id: "meta-ads", name: "Meta Ads", logo: "/images/tools/meta-ads.png" },
  { dot: "red", id: "apollo", name: "Apollo", logo: "/images/tools/apollo.png" },
  { dot: "red", id: "hubspot", name: "HubSpot", logo: "/images/tools/hubspot.png" },
  { dot: "red", id: "privyr", name: "Privyr", logo: "/images/tools/privyr.png" },
  { dot: "red", id: "mailerlite", name: "MailerLite", logo: "/images/tools/mailerlite.png" },
];
