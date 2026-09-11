import type { NavLink } from "@/lib/types";

/**
 * Global site content: branding, navigation, hero copy, footer.
 * Edit text here — never inside a component.
 */
export const site = {
  name: "Hassan Khan",
  /** Shown in the header and footer, uppercase by design. */
  brand: "HASSAN KHAN",
  role: "Digital Marketer & SEO Specialist",

  /** Used for <title> / <meta description> in app/layout.tsx. */
  seo: {
    title: "Hassan Khan — Digital Marketer & SEO Specialist",
    description:
      "Driving traffic, leads, and growth with 4+ years of expertise in SEO, Google Ads, Facebook Ads, and AI Search Optimization.",
  },

  /** Where the CTAs point. Swap these for the real links when you have them. */
  links: {
    resume: "/resume.pdf",
    contact: "mailto:k.hassan2791@gmail.com",
  },
} as const;

/**
 * Top navigation. Each `href` is an anchor to a section id rendered further
 * down the page — add an entry here and the matching `id` on its <Section>
 * and both desktop nav and mobile menu pick it up automatically.
 */
export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Tools", href: "#tools" },
  { label: "Clients", href: "#clients" },
  { label: "Experience", href: "#experience" },
];

/** Everything inside the hero. */
export const hero = {
  eyebrow: "PORTFOLIO",
  title: "Hassan Khan | Digital Marketer",
  description:
    "Driving Traffic, Leads, and Growth with 4+ Years of Expertise in SEO, Google Ads, Facebook Ads, and AI Search Optimization.",
  /** The dark pill floating over the top-left of the photo. */
  badge: "SEO • PERFORMANCE • AI SEARCH",
  /** The dot-separated line under the buttons. */
  metrics: ["+4 Years Experience", "SEO", "PPC", "AI SEARCH"],
  photo: {
    src: "/images/hero/hassan.png",
    alt: "Hassan Khan, digital marketer and SEO specialist",
  },
} as const;

/** Footer copy. */
export const footer = {
  copyright: "© 2026 — RANKED, TRACKED, AND STILL CLIMBING.",
} as const;
