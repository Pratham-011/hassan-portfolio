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
 * middle. Three cards show at a time on desktop and the rest are reached by
 * swipe or arrow, so a row can hold any number of cases without the section
 * growing taller.
 *
 * ORDER MATTERS: the list is split top-to-bottom, so the first half is row one
 * and the second half is row two. Within each row the order is the reading
 * order. Clients are deliberately interleaved rather than grouped, so a viewer
 * swiping a row sees a spread of work instead of one account repeated.
 *
 * ALT TEXT: every `imageAlt` names the client, the position and the keyword the
 * screenshot proves. That is the text Google reads for image search, so keep
 * the keyword in it verbatim rather than describing the picture generically.
 *
 * TO ADD A CASE: drop the screenshot in /public/images/seo/ and add an object
 * here. It joins a row automatically - the row count stays at two.
 */
export const seoCases: SeoCase[] = [
  // -- Row 1 ----------------------------------------------------------------
  {
    id: "greysell-advertising-agency",
    client: "Greysell",
    rank: 2,
    result: "Ranking for Advertising Agency",
    tag: "SEO WORK",
    image: "/images/seo/greysell-advertising-agency.png",
    imageAlt: "Greysell ranks 2 on Google for the keyword Advertising Agency",
  },
  {
    id: "homoeocare-online-consultation",
    client: "HomoeoCare",
    rank: 2,
    result: "Ranking for Online Homeopathic Consultation",
    tag: "SEO WORK",
    image: "/images/seo/homoeocare-online-consultation.png",
    imageAlt:
      "HomoeoCare ranks 2 on Google for the keyword Online Homeopathic Consultation",
  },
  {
    id: "wevaad-odr-india",
    client: "WeVaad",
    rank: 2,
    result: "Ranking for ODR Services India",
    tag: "SEO WORK",
    image: "/images/seo/wevaad-odr-india.png",
    imageAlt: "WeVaad ranks 2 on Google for the keyword ODR Services India",
  },
  {
    id: "greysell-creative-agency",
    client: "Greysell",
    rank: 3,
    result: "Ranking for Creative Agency",
    tag: "SEO WORK",
    image: "/images/seo/greysell-creative-agency.png",
    imageAlt: "Greysell ranks 3 on Google for the keyword Creative Agency",
  },
  {
    id: "eastman-therminol-d12",
    client: "Eastman",
    rank: 1,
    result: "Ranking for Therminol D-12",
    tag: "SEO WORK",
    image: "/images/seo/eastman-therminol-d12.png",
    imageAlt: "Eastman ranks 1 on Google for the keyword Therminol D-12",
  },
  {
    id: "wevaad-odr-india-rank-4",
    client: "WeVaad",
    rank: 3,
    result: "Ranking for ODR Services India",
    tag: "SEO WORK",
    image: "/images/seo/wevaad-keywords-ranking 3.png",
    imageAlt: "WeVaad ranks 3 on google for the keyword Mediation Online India",
  },

  // -- Row 2 ----------------------------------------------------------------
  {
    id: "greysell-fmcg-packaging-design",
    client: "Greysell",
    rank: 1,
    result: "Ranking for FMCG Packaging Design Agency",
    tag: "SEO WORK",
    image: "/images/seo/greysell-fmcg-packaging-design.png",
    imageAlt:
      "Greysell ranks 1 on Google for the keyword FMCG Packaging Design Agency",
  },
  {
    id: "homoeocare-online-homeopathy-doctor",
    client: "HomoeoCare",
    rank: 4,
    result: "Ranking for Online Homeopathy Doctor",
    tag: "SEO WORK",
    image: "/images/seo/homoeocare-online-homeopathy-doctor.png",
    imageAlt:
      "HomoeoCare ranks 4 on Google for the keyword Online Homeopathy Doctor",
  },
  {
    id: "wevaad-mediation-online-india",
    client: "WeVaad",
    rank: 3,
    result: "Ranking for Mediation Online India",
    tag: "SEO WORK",
    image: "/images/seo/wevaad-mediation-online-india.png",
    imageAlt: "WeVaad ranks 3 on Google for the keyword Mediation Online India",
  },
  {
    id: "eastman-therminol-54",
    client: "Eastman",
    rank: 1,
    result: "Ranking for Therminol 54",
    tag: "SEO WORK",
    image: "/images/seo/eastman-therminol-54.png",
    imageAlt: "Eastman ranks 1 on Google for the keyword Therminol 54",
  },
  {
    id: "greysell-agriculture-marketing",
    client: "Greysell",
    rank: 1,
    result: "AI Overview citation for Agriculture Marketing Agency",
    tag: "SEO WORK",
    image: "/images/seo/greysell-agriculture-marketing.png",
    imageAlt:
      "Greysell citation on Google AI Overview for the keyword Agriculture Marketing Agency",
  },
  {
    id: "homoeocare-dadar-map-pack",
    client: "HomoeoCare",
    rank: 1,
    result: "Map Pack ranking for Homeopathy Clinic in Dadar",
    tag: "SEO WORK",
    image: "/images/seo/homoeocare-dadar-map-pack.png",
    imageAlt:
      "HomoeoCare ranks 1 on Google Maps for the keyword Homeopathy Clinic in Dadar",
  },
  {
    id: "eastman-heat-transfer-fluid",
    client: "Eastman",
    rank: 6,
    result: "Ranking for Heat Transfer Fluid",
    tag: "SEO WORK",
    image: "/images/seo/eastman-heat-transfer-fluid.png",
    imageAlt: "Eastman ranks 6 on Google for the keyword Heat Transfer Fluid",
  },
  {
    id: "greysell-navi-mumbai",
    client: "Greysell",
    rank: 2,
    result: "Ranking for Advertising Agency in Navi Mumbai",
    tag: "SEO WORK",
    image: "/images/seo/greysell-navi-mumbai.png",
    imageAlt:
      "Greysell ranks 2 on Google for the keyword Advertising Agency in Navi Mumbai",
  },
  {
    id: "homoeocare-autism-mumbai",
    client: "HomoeoCare",
    rank: 4,
    result: "Ranking for Autism Homeopathy Doctor Mumbai",
    tag: "SEO WORK",
    image: "/images/seo/homoeocare-autism-mumbai.png",
    imageAlt:
      "HomoeoCare ranks 4 on Google for the keyword Autism Homeopathy Doctor Mumbai",
  },
  {
    id: "wevaad-mediation-online-india-2",
    client: "WeVaad",
    rank: 2,
    result: "Ranking for Mediation Online India",
    tag: "SEO WORK",
    image: "/images/seo/wevaad-mediation-online-india-2.png",
    imageAlt: "WeVaad ranks 2 on Google for the keyword Mediation Online India",
  },
  {
    id: "eastman-therminol-55",
    client: "Eastman",
    rank: 1,
    result: "Ranking for Therminol 55",
    tag: "SEO WORK",
    image: "/images/seo/eastman-therminol-55.png",
    imageAlt: "Eastman ranks 1 on Google for the keyword Therminol 55",
  },
];