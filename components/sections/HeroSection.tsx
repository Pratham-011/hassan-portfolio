import Image from "next/image";
import { hero, site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

/**
 * Hero: copy on the left, photo on the right.
 *
 * RESPONSIVE APPROACH (used throughout this project): mobile-first. The base
 * classes describe the phone layout, and `lg:` prefixes add the desktop
 * layout on top. So `flex-col lg:flex-row` reads as "stacked by default, side
 * by side on large screens".
 */
export function HeroSection() {
  return (
    <Section id="about">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-14">
        {/* ---------------- Left: copy ---------------- */}
        {/* `@container` makes this column a container-query context, so the
            <h1> below can size itself from the column's own width (cqw) rather
            than the viewport — which is what keeps it on one line in both the
            stacked and side-by-side layouts. */}
        <div className="@container flex w-full flex-col items-start gap-[22px] lg:flex-1">
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          {/*
            The single <h1> on the page. Font size steps up at each breakpoint
            instead of jumping straight from mobile to desktop.
            `text-balance` evens out the line lengths so you don't get a
            heading with one lonely word on the last line.
          */}
          {/*
            The single <h1> on the page, always on one line. The title is about
            15em wide in Inter ExtraBold, so 6.2% of the column width per em
            keeps it inside the column with a little slack, and `min()` caps it
            at the 42px design size once the column is wide enough.
          */}
          <h1 className="whitespace-nowrap text-[min(6.2cqw,42px)] font-extrabold leading-[1.14] text-ink">
            {hero.title}
          </h1>

          <p className="max-w-[480px] text-[16px] leading-[1.5] text-body lg:text-[17px]">
            {hero.description}
          </p>

          {/* `flex-wrap` lets the two buttons drop onto separate lines on a
              very narrow phone instead of overflowing. */}
          <div className="flex flex-wrap gap-3.5">
            <Button href={site.links.resume} variant="outline">
              RESUME
            </Button>
            <Button href={site.links.contact} variant="primary">
              LET&apos;S WORK TOGETHER
            </Button>
          </div>

          {/* Metrics row. The dot separators are generated between items
              rather than typed into the data, so the list stays clean. */}
          <ul className="flex flex-wrap items-center gap-x-3.5 gap-y-2">
            {hero.metrics.map((metric, index) => (
              <li key={metric} className="flex items-center gap-3.5">
                {index > 0 && (
                  <span aria-hidden="true" className="text-[13px] text-line">
                    ·
                  </span>
                )}
                <span className="font-mono text-[11.5px] tracking-[0.02em] text-muted">
                  {metric}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- Right: photo ---------------- */}
        <div className="relative w-full max-w-[460px] shrink-0 lg:w-[460px]">
          {/* aspect-[460/600] keeps the Figma proportions at every width,
              so the frame never distorts as the screen shrinks. */}
          <div className="relative aspect-[460/600] w-full overflow-hidden rounded-3xl border border-line bg-surface shadow-photo">
            <Image
              src={hero.photo.src}
              alt={hero.photo.alt}
              fill
              // `priority` disables lazy-loading for this one image. It's the
              // largest thing on first paint (the "LCP element"), so loading
              // it eagerly measurably improves the perceived load speed.
              priority
              sizes="(max-width: 1024px) 100vw, 460px"
              className="object-cover"
            />
          </div>

          {/* Floating badge, pinned over the top-left corner of the photo. */}
          <span className="absolute -top-4 left-6 rounded-full bg-ink px-4 py-2.5 font-mono text-[10px] tracking-[0.01em] text-white shadow-badge sm:text-[11px]">
            {hero.badge}
          </span>
        </div>
      </div>
    </Section>
  );
}
