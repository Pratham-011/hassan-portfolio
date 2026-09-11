import type { Experience } from "@/lib/types";

/** Heading copy for the Work Experience section. */
export const experienceIntro = {
  eyebrow: "WORK EXPERIENCE",
  title: "4+ years of hands-on experience.",
  description:
    "Across SEO, digital marketing & performance marketing.",
} as const;

/**
 * The experience timeline, newest first.
 *
 * TO ADD A ROLE: add an object to the TOP of this array. The numbering (01,
 * 02, 03…), the left/right alternating layout and the connecting line are all
 * derived from position in this list, so nothing else needs touching.
 *
 * `accent` tints that entry's number badge, date and company name. Valid keys
 * are in lib/types.ts — "orange" | "violet" | "teal" | "blue" | "green".
 * Cycling them down the list is what gives the timeline its gradient feel.
 */
export const experiences: Experience[] = [
  {
    id: "greysell",
    period: "Jan 2025 – September 2026",
    role: "Digital Marketing Executive",
    company: "Greysell",
    skills: ["SEO", "Google Ads", "Meta Ads", "LinkedIn Ads", "Email Marketing"],
    summary: "Driving search visibility, paid campaigns & digital growth.",
    accent: "orange",
  },
  {
    id: "socio-maven-media",
    period: "Nov 2023 – Nov 2024",
    role: "SEO Specialist",
    company: "Socio Maven Media",
    skills: ["SEO Strategy", "PPC", "Reporting", "Client Management"],
    summary:
      "Managed end-to-end SEO projects & paid campaigns across multiple industries.",
    accent: "violet",
  },
  {
    id: "homoeocare-intern-2023",
    period: "Mar 2023 – Oct 2023",
    role: "Digital Marketing Intern",
    company: "HomoeoCARE",
    skills: ["SEO", "Social Media", "Lead Generation"],
    summary:
      "Improved search visibility & contributed to a 40% increase in patient leads.",
    accent: "teal",
  },
  {
    id: "macksofy-tech",
    period: "Feb 2022 – Feb 2023",
    role: "SEO Executive",
    company: "Macksofy Tech",
    skills: ["Local SEO", "Technical SEO", "On-Page SEO"],
    summary:
      "Built stronger local visibility through audits, optimization & content strategies.",
    accent: "blue",
  },
  // {
  //   id: "homoeocare-intern-2021",
  //   period: "Mar 2021 – Jan 2022",
  //   role: "Digital Marketing Intern",
  //   company: "HomoeoCARE",
  //   skills: ["Keyword Research", "Content", "Social Media"],
  //   summary: "Built practical foundations in SEO, content & digital marketing.",
  //   accent: "green",
  // },
];
