import { ppcCases, ppcIntro } from "@/content/ppc-work";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CardCarousel } from "@/components/ui/CardCarousel";
import { PpcCaseCard } from "@/components/cards/PpcCaseCard";

/**
 * PPC Work: the dark section with the paid-campaign metric cards.
 *
 * Reuses the exact same CardCarousel as the SEO section — only the cards
 * inside differ. That's the payoff of keeping the carousel generic: it takes
 * `children`, so it doesn't know or care what kind of card it's scrolling.
 *
 * The carousel already stretches its cards to equal height, which is why the
 * "Full breakdown" footers line up despite different insight lengths.
 */
export function PpcWorkSection() {
  return (
    <Section id="ppc" tone="night">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <Eyebrow tone="dark">{ppcIntro.eyebrow}</Eyebrow>
          <h2 className="text-[26px] font-extrabold leading-tight text-balance text-white sm:text-[30px] lg:text-[36px]">
            {ppcIntro.title}
          </h2>
          <p className="max-w-[760px] text-[15px] leading-relaxed text-white/80 lg:text-[16px]">
            {ppcIntro.description}
          </p>
        </div>

        <CardCarousel label="Paid campaign case studies">
          {ppcCases.map((item) => (
            <PpcCaseCard key={item.id} item={item} />
          ))}
        </CardCarousel>
      </div>
    </Section>
  );
}
