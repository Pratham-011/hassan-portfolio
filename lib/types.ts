/**
 * Shared shapes for every piece of content on the site.
 *
 * Why a types file? Because the content lives in plain data files
 * (`content/*.ts`). These types are the contract between that data and the
 * components. If you add an SEO case study and forget the `image`, TypeScript
 * tells you immediately instead of the page silently rendering a broken card.
 */

/** A link in the top navigation. `href` is a hash that scrolls to a section. */
export type NavLink = {
  label: string;
  href: string;
};

/** One pill in the Skills grid. */
export type Skill = {
  /** Stable id — used as the React `key` so re-orders don't remount the DOM. */
  id: string;
  label: string;
};

/** One card in the "SEO Work" section. */
export type SeoCase = {
  id: string;
  /** Client name, shown in bold under the screenshot. */
  client: string;
  /**
   * The Google position the screenshot proves — 1 means the top result.
   * Rendered as a small "#1" badge immediately before `result`.
   */
  rank: number;
  /** What the site was ranked for. */
  result: string;
  /** Small coloured tag at the top of the card. */
  tag: string;
  /** Path inside /public — e.g. "/images/seo/greysell.png" */
  image: string;
  /** Alt text for accessibility & SEO. Describe what the screenshot proves. */
  imageAlt: string;
};

/**
 * The accent colour for a PPC card. Adding a new one is a two-step job:
 *   1. add the hex to `--color-accent-*` in app/globals.css
 *   2. add the key here and to ACCENTS in components/cards/PpcCaseCard.tsx
 */
export type PpcAccent = "green" | "orange" | "yellow" | "sky";

/** One of the four small stats in the 2x2 grid on a PPC card. */
export type PpcStat = {
  /** The number itself, pre-formatted — e.g. "₹5.09", "2.37M+" */
  value: string;
  /** What the number means — e.g. "cost per subscriber" */
  label: string;
};

/** One card in the dark "PPC Work" section. */
export type PpcCase = {
  id: string;
  client: string;
  /** Channel tag in the card header — e.g. "YOUTUBE GROWTH" */
  tag: string;
  accent: PpcAccent;
  /** The single big number. */
  headlineValue: string;
  /** Caption under the big number — e.g. "NEW SUBSCRIBERS" */
  headlineLabel: string;
  /**
   * Rendered as a 2-column grid. Four entries give a tidy 2x2; three leave the
   * last cell empty, which is how the Figma draws the Meta Ads card.
   */
  stats: PpcStat[];
  /** The quoted takeaway with the coloured bar down its left side. */
  insight: string;
  /** Where "Full breakdown" points. Optional — omit and it renders inert. */
  href?: string;
};

/** One chip in the Tools section. */
export type Tool = {
  id: string;
  name: string;
  /**
   * Category colour for the chip's dot, straight from the design:
   *   "green" = SEO / advertising platforms
   *   "red"   = CRM / outreach / email platforms
   */
  dot: "green" | "red";
  /**
   * Optional path to a logo in /public. When present the chip shows the logo,
   * otherwise it falls back to a small brand-coloured dot.
   */
  logo?: string;
  /**
   * Does the logo image already contain the brand's name?
   *
   * Most of these logos are full lockups, so printing `name` beside them would
   * say the same thing twice. Where the logo is icon-only (Google Search
   * Console), set this false and the chip renders the name as text as well.
   */
  logoHasName?: boolean;
};

/** One cell in the Clients grid. */
export type Client = {
  id: string;
  name: string;
  /** Optional logo path in /public. Falls back to the name as text. */
  logo?: string;
};

/**
 * The accent colour for one entry on the experience timeline. Each is a key
 * into the ACCENTS map in components/cards/ExperienceCard.tsx — add a key
 * there and here together.
 */
export type ExperienceAccent = "orange" | "violet" | "teal" | "blue" | "green";

/** One role on the Work Experience timeline. */
export type Experience = {
  id: string;
  /** Free text, shown above the role — e.g. "Jan 2025 – Sept 2026". */
  period: string;
  /** Job title. */
  role: string;
  /** Where. Rendered in the entry's accent colour. */
  company: string;
  /** Small chips under the title. Any number; they wrap. */
  skills: string[];
  /** One or two lines on what the role achieved. */
  summary: string;
  accent: ExperienceAccent;
};
