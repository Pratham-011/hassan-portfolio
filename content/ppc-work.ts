import type { PpcCase } from "@/lib/types";

/** Heading copy for the dark PPC Work section. */
export const ppcIntro = {
  eyebrow: "PPC WORK",
  title: "Featured Paid Acquisition Campaigns",
  description:
    "A deep-dive breakdown of direct-response marketing performance across Google Search, Meta Leads Engine, and YouTube Growth systems.",
} as const;

/**
 * Paid-campaign case studies.
 *
 * `accent` picks the card's colour scheme (border, tag, insight bar, link).
 * Allowed values: "green" | "orange" | "yellow" — see lib/types.ts.
 *
 * `stats` should hold exactly 4 entries so it renders as a clean 2x2 grid.
 */
export const ppcCases: PpcCase[] = [
  {
    id: "swal-youtube",
    client: "SWAL Corporation",
    tag: "YOUTUBE ADS",
    accent: "green",
    headlineValue: "33,086",
    headlineLabel: "NEW SUBSCRIBERS",
    stats: [
      { value: "₹5.09", label: "cost per subscriber" },
      { value: "2.37M+", label: "impressions" },
      { value: "408K", label: "video views" },
      { value: "₹53,942.94", label: "total ads spend" },
    ],
    insight:
      "Subscriber & Engagement units took 48% of budget — and returned the majority of new subscribers.",
  },
  {
    id: "greysell-search",
    client: "Greysell",
    tag: "SEARCH · LEAD GEN",
    accent: "orange",
    headlineValue: "19.3K",
    headlineLabel: "CLICKS DRIVEN",
    stats: [
      { value: "₹21.90", label: "avg. CPC" },
      { value: "281K", label: "impressions" },
      { value: "149", label: "conversions" },
      { value: "₹4.77L", label: "total ad spend" },
    ],
    insight:
      'Bidding on generic "hire an agency" search terms to fill Greysell\'s own pipeline — the Ad Agency group alone converted at 4.35% for just ₹3,201 per lead.',
  },
  {
    id: "foam-home-meta",
    client: "Foam Home",
    tag: "FACEBOOK ADS",
    accent: "yellow",
    headlineValue: "20,826",
    headlineLabel: "MESSAGING CONVERSIONS",
    stats: [
      { value: "₹70.23", label: "avg. cost per conversion" },
      { value: "4.8M+", label: "reach" },
      { value: "₹2.38L", label: "total ad spend" },
      { value: "6", label: "campaigns run" },
    ],
    insight:
      "WhatsApp Traffic alone drove 19,595 link clicks at just ₹0.96 per click — the most cost-efficient campaign in the entire account.",
  },
  {
    id: "greysell-google-search",
    client: "Greysell",
    tag: "GOOGLE SEARCH",
    accent: "sky",
    headlineValue: "42,056",
    headlineLabel: "TOTAL IMPRESSIONS",
    stats: [
      { value: "\u20b960.44", label: "avg. CPC" },
      { value: "\u20b91,87,487.41", label: "total cost" },
      { value: "3.17%", label: "conv. rate" },
      { value: "98", label: "conversions" },
    ],
    insight:
      "Phrase Match ad groups across agency-related search terms drove strong conversion rates at competitive CPAs.",
  },
  {
    id: "swal-meta",
    client: "SWAL Corporation",
    tag: "META ADS",
    accent: "green",
    headlineValue: "246,528",
    headlineLabel: "TOTAL IMPRESSIONS",
    // Only three stats — the Figma leaves the fourth cell empty here.
    stats: [
      { value: "\u20b90.47", label: "cost per ThruPlay" },
      { value: "\u20b914,451.93", label: "total spent" },
      { value: "230,319", label: "reach" },
    ],
    insight:
      "Regional language video campaigns across Punjab, Haryana & Rajasthan achieved exceptional ThruPlay rates at under \u20b90.50 per view.",
  },
  {
    id: "global-tourist-centre-meta",
    client: "Global Tourist Centre",
    tag: "FACEBOOK ADS",
    accent: "yellow",
    headlineValue: "72",
    headlineLabel: "TOTAL LEADS",
    stats: [
      { value: "\u20b914.84", label: "avg. CPC" },
      { value: "\u20b911,474.79", label: "amount spent" },
      { value: "59,027", label: "reach" },
      { value: "1,237", label: "link clicks" },
    ],
    insight:
      "Goa travel lead campaigns generated quality leads through targeted age 25+ audiences with strong CTR performance.",
  },
];
