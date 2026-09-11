import type { CSSProperties } from "react";
import type { Experience, ExperienceAccent } from "@/lib/types";

/**
 * One card on the Work Experience timeline.
 *
 * ACCENT COLOURS work the same way as PpcCaseCard: Tailwind can't build class
 * names at runtime (`text-${accent}` compiles to nothing, because Tailwind
 * scans your source as plain text at build time). So each entry sets two CSS
 * custom properties and the classes reference them with `[var(--accent)]` —
 * the variable changes per card, the class name stays a fixed string.
 *
 * To add a sixth accent: add the key to ExperienceAccent in lib/types.ts and
 * one row here. Nothing else changes.
 */
export const ACCENTS: Record<ExperienceAccent, { accent: string; soft: string }> = {
  orange: { accent: "var(--color-accent-orange)", soft: "#fff1e7" },
  violet: { accent: "var(--color-brand-alt)", soft: "#f3edff" },
  teal: { accent: "var(--color-accent-teal)", soft: "#e6f7f4" },
  blue: { accent: "var(--color-brand)", soft: "#ecf0ff" },
  green: { accent: "var(--color-seo)", soft: "#e0f2e5" },
};

/** Shared by the card and the number badge on the line, so they always match. */
export function accentVars(accent: ExperienceAccent): CSSProperties {
  const theme = ACCENTS[accent];
  return { "--accent": theme.accent, "--accent-soft": theme.soft } as CSSProperties;
}

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="rounded-2xl border border-line bg-white p-5 shadow-card transition-colors hover:border-[var(--accent)] sm:p-6">
      <p className="font-mono text-[11.5px] tracking-[0.06em] text-[var(--accent)]">
        {item.period}
      </p>

      <h3 className="mt-2 text-[17px] font-bold leading-snug text-ink sm:text-[19px]">
        {item.role}
      </h3>
      <p className="mt-0.5 text-[14px] font-semibold text-[var(--accent)] sm:text-[15px]">
        — {item.company}
      </p>

      {/* Skill chips. Any number — they wrap onto as many lines as needed. */}
      <ul className="mt-4 flex flex-wrap gap-2">
        {item.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-line bg-surface px-2.5 py-1 text-[11.5px] font-medium text-body sm:text-[12px]"
          >
            {skill}
          </li>
        ))}
      </ul>

      <hr className="my-4 border-line" />

      <p className="text-[13px] leading-relaxed text-body sm:text-[13.5px]">{item.summary}</p>
    </article>
  );
}
