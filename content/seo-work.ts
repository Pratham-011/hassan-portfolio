import type { SeoCase } from "@/lib/types";

/** Heading copy for the SEO Work section. */
export const seoIntro = {
  eyebrow: "SEO WORK",
  title: "Driving organic visibility and top search rankings.",
} as const;

/**
 * SEO case studies.
 *
 * The section renders these as exactly TWO rows, splitting the list down the
 * middle — 17 cases give a row of 9 and a row of 8. Three cards show at a time
 * on desktop and the rest are reached by swipe or arrow, so a row can hold any
 * number of cases without the section growing taller.
 *
 * ORDER MATTERS: the list is split top-to-bottom, so the first half is row one
 * and the second half is row two. Within each row the order is the reading
 * order. Clients are deliberately interleaved rather than grouped, so a viewer
 * swiping a row sees a spread of work instead of one account repeated.
 *
 * TO ADD A CASE: drop the screenshot in /public/images/seo/ and add an object
 * here. It joins a row automatically — the row count stays at two.
 */
export const seoCases: SeoCase[] = [
  // ── Row 1 — cases 1-9 ─────────────────────────────────────────────────────
  {
    id: "greysell-advertising-agency",
    client: "Greysell",
    rank: 2,
    result: "Ranking for Advertising Agency",
    tag: "SEO WORK",
    image: "/images/seo/greysell-advertising-agency.png",
    imageAlt: "Google search results showing Greysell ranking #2 for 'advertising agency'",
  },
  {
    id: "homoeocare-online-consultation",
    client: "HomoeoCare",
    rank: 2,
    result: "Ranking for Online Homeopathic Consultation",
    tag: "SEO WORK",
    image: "/images/seo/homoeocare-online-consultation.png",
    imageAlt:
      "Google search results showing HomoeoCare ranking #2 for 'online homeopathic consultation'",
  },
  {
    id: "wevaad-odr-india",
    client: "WeVaad",
    rank: 2,
    result: "Ranking for ODR Services India",
    tag: "SEO WORK",
    image: "/images/seo/wevaad-odr-india.png",
    imageAlt: "Google search results showing WeVaad ranking #2 for 'ODR services India'",
  },
  {
    id: "greysell-creative-agency",
    client: "Greysell",
    rank: 3,
    result: "Ranking for Creative Agency",
    tag: "SEO WORK",
    image: "/images/seo/greysell-creative-agency.png",
    imageAlt: "Google search results showing Greysell ranking #3 for 'creative agency'",
  },
  {
    id: "eastman-therminol-d12",
    client: "Eastman",
    rank: 1,
    result: "Ranking for Therminol D-12",
    tag: "SEO WORK",
    image: "/images/seo/eastman-therminol-d12.png",
    imageAlt: "Google search results showing Eastman ranking #1 for 'therminol D-12'",
  },
  {
    id: "wevaad-odr-india-rank-4",
    client: "WeVaad",
    rank: 4,
    result: "Ranking for ODR Services India",
    tag: "SEO WORK",
    image: "/images/seo/wevaad-odr-india-rank-4.png",
    imageAlt: "Google search results showing WeVaad ranking #4 for 'ODR services India'",
  },

  // ── Row 2 — cases 10-17 ───────────────────────────────────────────────────
  {
    id: "greysell-fmcg-packaging-design",
    client: "Greysell",
    rank: 1,
    result: "Ranking for FMCG Packaging Design Agency",
    tag: "SEO WORK",
    image: "/images/seo/greysell-fmcg-packaging-design.png",
    imageAlt:
      "Google search results showing Greysell ranking #1 for 'fmcg packaging design agency'",
  },
  {
    id: "homoeocare-online-homeopathy-doctor",
    client: "HomoeoCare",
    rank: 4,
    result: "Ranking for Online Homeopathy Doctor",
    tag: "SEO WORK",
    image: "/images/seo/homoeocare-online-homeopathy-doctor.png",
    imageAlt:
      "Google search results showing HomoeoCare ranking #4 for 'online homeopathy doctor'",
  },
  {
    id: "wevaad-mediation-online-india",
    client: "WeVaad",
    rank: 3,
    result: "Ranking for Mediation Online India",
    tag: "SEO WORK",
    image: "/images/seo/wevaad-mediation-online-india.png",
    imageAlt: "Google search results showing WeVaad ranking #3 for 'mediation online India'",
  },
  
  {
    id: "eastman-therminol-54",
    client: "Eastman",
    rank: 1,
    result: "Ranking for Therminol 54",
    tag: "SEO WORK",
    image: "/images/seo/eastman-therminol-54.png",
    imageAlt: "Google search results showing Eastman ranking #1 for 'therminol 54'",
  },
  {
    id: "greysell-agriculture-marketing",
    client: "Greysell",
    rank: 1,
    result: "Ranking for Agriculture Marketing Agency",
    tag: "SEO WORK",
    image: "/images/seo/greysell-agriculture-marketing.png",
    imageAlt:
      "Google search results showing Greysell ranking #1 for 'agriculture marketing agency'",
  },
  {
    id: "homoeocare-dadar-map-pack",
    client: "HomoeoCare",
    rank: 1,
    result: "Map Pack ranking for Homeopathy Clinic in Dadar",
    tag: "SEO WORK",
    image: "/images/seo/homoeocare-dadar-map-pack.png",
    imageAlt:
      "Google Map Pack showing HomoeoCare ranking #1 for 'homeopathy clinic in dadar'",
  },
  {
    id: "eastman-heat-transfer-fluid",
    client: "Eastman",
    rank: 6,
    result: "Ranking for Heat Transfer Fluid",
    tag: "SEO WORK",
    image: "/images/seo/eastman-heat-transfer-fluid.png",
    imageAlt: "Google search results showing Eastman ranking #6 for 'heat transfer fluid'",
  },
  {
    id: "greysell-navi-mumbai",
    client: "Greysell",
    rank: 2,
    result: "Ranking for Advertising Agency in Navi Mumbai",
    tag: "SEO WORK",
    image: "/images/seo/greysell-navi-mumbai.png",
    imageAlt:
      "Google search results showing Greysell ranking #2 for 'advertising agency in navi mumbai'",
  },
  {
    id: "homoeocare-autism-mumbai",
    client: "HomoeoCare",
    rank: 4,
    result: "Ranking for Autism Homeopathy Doctor Mumbai",
    tag: "SEO WORK",
    image: "/images/seo/homoeocare-autism-mumbai.png",
    imageAlt:
      "Google search results showing HomoeoCare ranking #4 for 'autism homeopathy doctor Mumbai'",
  },

  {
    id: "wevaad-mediation-online-india-2",
    client: "WeVaad",
    rank: 3,
    result: "Ranking for Mediation Online India",
    tag: "SEO WORK",
    image: "/images/seo/wevaad-mediation-online-india-2.png",
    imageAlt: "Google search results showing WeVaad ranking #3 for 'mediation online India'",
  },
  {
    id: "eastman-therminol-55",
    client: "Eastman",
    rank: 2,
    result: "Ranking for Therminol 55",
    tag: "SEO WORK",
    image: "/images/seo/eastman-therminol-55.png",
    imageAlt: "Google search results showing Eastman ranking #2 for 'therminol 55'",
  },
];
