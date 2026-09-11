import { seoCases, seoIntro } from "@/content/seo-work";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CardCarousel } from "@/components/ui/CardCarousel";
import { SeoCaseCard } from "@/components/cards/SeoCaseCard";
import { chunk } from "@/lib/chunk";

/** The section is always this many rows tall, however many cases there are. */
const ROW_COUNT = 2;

/**
 * SEO Work: two rows of ranking-screenshot cards.
 *
 * ROW COUNT IS FIXED, CARDS PER ROW IS NOT — the opposite of what you might
 * expect. We divide the case list into exactly two groups and render a
 * carousel for each, so 17 cases become rows of 9 and 8 rather than six rows
 * of three. The section keeps its height no matter how many cases get added.
 *
 * That works because `CardCarousel` scrolls horizontally: a row holds any
 * number of cards, showing three at a time on desktop with the rest reachable
 * by swipe or arrow. Three visible cards per row still matches the design.
 *
 * `Math.ceil` puts the extra card in the FIRST row on an odd count (9 then 8),
 * so the top row is never the short one.
 *
 * This section carries id="work" because that's what the nav links to.
 */
export function SeoWorkSection() {
  const rows = chunk(seoCases, Math.ceil(seoCases.length / ROW_COUNT));

  return (
    <Section id="work">
      <div className="flex flex-col gap-9 lg:gap-14">
        <div className="flex flex-col gap-7">
          <Eyebrow>{seoIntro.eyebrow}</Eyebrow>
          <h2 className="max-w-[900px] text-[24px] font-extrabold leading-[1.2] text-balance text-ink sm:text-[28px] lg:text-[32px]">
            {seoIntro.title}
          </h2>
        </div>

        {rows.map((row, rowIndex) => (
          <CardCarousel
            key={row[0].id}
            label={`SEO case studies, row ${rowIndex + 1} of ${rows.length}`}
          >
            {row.map((item) => (
              <SeoCaseCard key={item.id} item={item} />
            ))}
          </CardCarousel>
        ))}
      </div>
    </Section>
  );
}
