import Image from "next/image";
import { tools, toolsIntro } from "@/content/tools";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

/**
 * Tools: a responsive grid of pill-shaped chips, each showing a brand logo.
 *
 * The logos are used whole, exactly as supplied — normalised by SIZE rather
 * than by cropping. Every wordmark logo is fitted into an identical box with
 * `object-contain`, so a 5.8:1 lockup (Screaming Frog) and a 2.2:1 one
 * (Semrush) sit at a consistent optical weight without being stretched or cut.
 */

/**
 * Dot colours for the fallback state. Written as complete class strings rather
 * than built with template literals: Tailwind only generates CSS for class
 * names it can literally find in the source, so `bg-${colour}` produces
 * nothing at all.
 */
const DOT_COLOURS = {
  green: "bg-seo",
  red: "bg-dot-red",
} as const;

export function ToolsSection() {
  return (
    <Section id="tools" tone="surface">
      <div className="flex flex-col gap-7">
        <Eyebrow>{toolsIntro.eyebrow}</Eyebrow>

        {/*
          2 columns on phones, 3 on tablets, 4 on desktop.

          One column on a phone gave each tool a full-width pill with a small
          logo marooned in the middle, and made the section over 1000px tall.
        */}
        <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
          {tools.map((tool) => (
            <li
              key={tool.id}
              className="group flex items-center justify-center gap-2 rounded-full border border-line bg-white px-3 py-2.5 transition-colors hover:border-ink sm:gap-3 sm:px-5 sm:py-3.5"
            >
              {!tool.logo ? (
                // No logo file: fall back to the Figma's coloured dot + name.
                <span className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className={cn("size-2 shrink-0 rounded-full", DOT_COLOURS[tool.dot])}
                  />
                  <span className="text-[12.5px] font-medium text-ink sm:text-[13.5px]">
                    {tool.name}
                  </span>
                </span>
              ) : tool.logoHasName === false ? (
                /*
                  Icon-only logo (Google Search Console): a FIXED square plus
                  the name as text — which is exactly the chip the Figma draws.

                  `shrink-0` on the icon is load-bearing. It previously shared
                  the row with a `shrink-0` text label while itself being
                  `w-full shrink`, so on a narrow chip the un-shrinkable text
                  took the whole row, this box collapsed to zero width, and
                  because the <img> uses `fill` (100% of this box) the logo
                  vanished completely on phones.
                */
                <>
                  <span className="relative size-5 shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      fill
                      sizes="20px"
                      className="object-contain"
                    />
                  </span>
                  {/* Wraps to two lines on a narrow chip rather than overflowing. */}
                  <span className="text-[12.5px] font-medium leading-tight text-ink sm:text-[13.5px]">
                    {tool.name}
                  </span>
                </>
              ) : (
                /*
                  THE SIZE CONTROL for every logo that contains its own brand
                  name. The <img> inside uses `fill`, so it is always 100% of
                  this box — change these numbers and nothing else to resize.

                  Five of these are STACKED lockups (icon above wordmark —
                  Semrush, Google Trends, Google Analytics, Google Ads, Meta).
                  They split the height across two rows, so each half gets half
                  the number. The wide wordmarks stay legible far longer, which
                  makes it easy to shrink this too far without noticing — check
                  those five specifically before going below h-7.
                */
                <span className="relative h-7 w-full max-w-[100px] shrink transition-transform duration-300 group-hover:scale-105 sm:h-9 sm:max-w-[130px] lg:max-w-[150px]">
                  <Image
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    fill
                    sizes="(max-width: 640px) 100px, 150px"
                    className="object-contain"
                  />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
