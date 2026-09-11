import type { CSSProperties } from "react";
import Link from "next/link";
import type { PpcCase, PpcAccent } from "@/lib/types";
import { PlusIcon } from "@/components/ui/icons";

/**
 * One paid-campaign card on the dark section.
 *
 * THE ACCENT COLOUR TRICK
 * Each card is themed a different colour (green / orange / yellow). Tailwind
 * can't build class names at runtime — `border-${accent}` would silently
 * produce no CSS, because Tailwind scans your source as plain text at build
 * time and only generates classes it literally sees.
 *
 * So instead we set two CSS custom properties on the card element and
 * reference them with `[var(--accent)]`. The variable changes per card; the
 * class name stays a fixed string Tailwind can see. Adding a fourth accent
 * later is then just one new entry in ACCENTS below.
 */
const ACCENTS: Record<PpcAccent, { accent: string; surface: string }> = {
  green: { accent: "var(--color-accent-green)", surface: "#143a24" },
  orange: { accent: "var(--color-accent-orange)", surface: "#3f1e15" },
  yellow: { accent: "var(--color-accent-yellow)", surface: "#3a3215" },
  sky: { accent: "var(--color-accent-sky)", surface: "#0b354c" },
};

export function PpcCaseCard({ item }: { item: PpcCase }) {
  const theme = ACCENTS[item.accent];

  return (
    <article
      style={
        {
          "--accent": theme.accent,
          "--accent-surface": theme.surface,
        } as CSSProperties
      }
      className="flex w-[82%] shrink-0 snap-start flex-col gap-5 rounded-[20px] border border-dashed border-[var(--accent)] bg-night-card p-5 sm:w-[340px] sm:gap-6 sm:p-[26px] lg:w-[378px]"
    >
      {/* --- Header: client name + channel tag --- */}
      <header className="flex items-center justify-between gap-3">
        <h3 className="text-[20px] font-extrabold text-white">{item.client}</h3>
        <span className="shrink-0 rounded-full border border-[var(--accent)] bg-[var(--accent-surface)] px-2.5 py-1 font-mono text-[10px] font-bold text-[var(--accent)]">
          {item.tag}
        </span>
      </header>

      {/* --- The one big number --- */}
      <div className="flex flex-col gap-1.5">
        <p className="text-[36px] font-extrabold leading-none tracking-[-0.02em] text-white sm:text-[44px] lg:text-[52px]">
          {item.headlineValue}
        </p>
        <p className="font-mono text-[12px] font-bold tracking-[0.02em] text-muted">
          {item.headlineLabel}
        </p>
      </div>

      <hr className="border-white/10" />

      {/* --- 2x2 supporting stats --- */}
      <dl className="grid grid-cols-2 gap-x-4 gap-y-4">
        {item.stats.map((stat) => (
          // A <dl> (description list) is the semantically correct element for
          // value/label pairs — better for screen readers than plain divs.
          <div key={stat.label} className="flex flex-col gap-1">
            <dt className="order-2 text-[12px] text-muted">{stat.label}</dt>
            <dd className="order-1 text-[18px] font-bold text-white">{stat.value}</dd>
          </div>
        ))}
      </dl>

      {/* --- Takeaway, with the coloured bar down the left --- */}
      <div className="flex flex-1 gap-3">
        <span aria-hidden="true" className="w-[3px] shrink-0 rounded-sm bg-[var(--accent)]" />
        <p className="text-[13px] leading-[1.4] text-muted">{item.insight}</p>
      </div>

      {/*
        Footer. `mt-auto` pins it to the bottom so cards of different text
        lengths still line up.

        It becomes a real link only when the case study has an `href` in
        content/ppc-work.ts. Until then it renders as plain text — a link that
        goes nowhere is worse than no link, especially for keyboard users who
        would still be able to tab onto it.
      */}
      <footer className="mt-auto flex items-center justify-between pt-2">
        {item.href ? (
          <Link
            href={item.href}
            className="flex w-full items-center justify-between text-[13px] font-bold text-[var(--accent)] hover:underline"
          >
            Full breakdown
            <PlusIcon />
          </Link>
        ) : (
          <>
            <span className="text-[13px] font-bold text-[var(--accent)]">Full breakdown</span>
            <PlusIcon className="text-[var(--accent)]" />
          </>
        )}
      </footer>
    </article>
  );
}
