import type { Skill } from "@/lib/types";

/**
 * Skills grid. Renders 2 per row on desktop, 1 per row on mobile — in this
 * exact order, reading left to right. Add or remove freely; the grid reflows.
 */
export const skills: Skill[] = [
  { id: "brand-strategy", label: "Brand Strategy" },
  { id: "marketing-research", label: "Marketing Research" },
  { id: "analytics", label: "Analytics" },
  { id: "brand-management", label: "Brand Management" },
  { id: "online-marketing", label: "Online Marketing" },
  { id: "seo", label: "Search Engine Optimization" },
  { id: "brand-building", label: "Brand Building" },
  { id: "performance-marketing", label: "Performance Marketing" },
];

/** Heading copy for the Skills section. */
export const skillsIntro = {
  eyebrow: "SKILLS & MANAGEMENT",
  title: "Marketing skills that drive brand growth.",
  description:
    '"Combining strategy, research, analytics, SEO and performance marketing to build measurable digital growth."',
} as const;
