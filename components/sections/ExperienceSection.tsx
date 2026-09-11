import { experiences, experienceIntro } from "@/content/experience";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ExperienceCard, accentVars } from "@/components/cards/ExperienceCard";
import { cn } from "@/lib/cn";

/**
 * Work Experience: a vertical timeline of roles.
 *
 * LAYOUT — one markup tree, two shapes:
 *
 *   mobile   the line runs down the left edge, every card sits to its right
 *   md+      the line runs down the centre, cards alternate left / right
 *
 * The alternating is driven purely by the index (`index % 2`), and the numbers
 * come from the array position, so adding a role to content/experience.ts
 * slots into the pattern automatically — no manual left/right bookkeeping.
 *
 * <ol> rather than <div>: this is an ordered sequence, and the numbering is
 * meaningful. Screen readers announce it as a numbered list.
 */
export function ExperienceSection() {
  return (
    <Section id="experience" tone="surface">
      <div className="flex flex-col gap-7">
        {/*
          The heading is centred from md up and left-aligned below it — because
          the timeline underneath does the same thing. At md+ the line runs down
          the middle with cards alternating either side, so a left-aligned
          heading would sit off that axis. On mobile the line hugs the left
          edge, so centring here would float the heading away from the content
          it introduces.

          `md:items-center` works because this is a flex column: it shrinks each
          child to its content width and centres it. That's also what centres
          the Eyebrow's dot-and-label row without touching the component.
        */}
        <header className="flex flex-col gap-4 md:items-center md:text-center">
          <Eyebrow>{experienceIntro.eyebrow}</Eyebrow>

          <div className="flex flex-col gap-3">
            <h2 className="text-[24px] font-extrabold leading-tight text-balance text-ink sm:text-[28px] lg:text-[32px]">
              {experienceIntro.title}
            </h2>
            <p className="max-w-[620px] text-[15px] leading-[1.5] text-body sm:text-[15.5px]">
              {experienceIntro.description}
            </p>
          </div>
        </header>

        <ol className="relative mt-4">
          {/*
            The connecting line. Dashed, echoing the reference design.
            `left-5` puts it under the badges on mobile; from md it moves to
            the centre. aria-hidden — it's decoration, not content.
          */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-5 border-l border-dashed border-line md:left-1/2"
          />

          {experiences.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <li
                key={item.id}
                // The accent vars live here so BOTH the number badge and the
                // card below can read them.
                style={accentVars(item.accent)}
                className="relative pb-8 pl-14 last:pb-0 md:grid md:grid-cols-2 md:gap-x-14 md:pl-0"
              >
                {/* Number badge, centred on the line. */}
                <span
                  className={cn(
                    "absolute top-1 left-5 z-10 flex size-10 -translate-x-1/2 items-center justify-center",
                    "rounded-full border-2 border-[var(--accent)] bg-white",
                    "font-mono text-[13px] font-bold text-[var(--accent)]",
                    "md:left-1/2",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/*
                  `md:col-start-1` / `md:col-start-2` is the alternation. On
                  mobile neither applies, so every card sits in the single
                  column to the right of the line.
                */}
                <div className={cn(isLeft ? "md:col-start-1" : "md:col-start-2")}>
                  <ExperienceCard item={item} />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
