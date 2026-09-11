import Image from "next/image";
import type { SeoCase } from "@/lib/types";

/**
 * One SEO case study: green tag, ranking screenshot, client name, result.
 *
 * WIDTH: `w-[82%]` is 82% of the CAROUSEL TRACK, not of the screen. That
 * distinction matters — sizing against the viewport (`vw`) ignores the
 * container's own padding, which made the card wider than the track it sits
 * in and pushed the next card completely out of sight on a phone.
 *
 * A percentage of the track guarantees the next card always peeks in from the
 * right, which is the standard cue that a row is swipeable. From `sm:` up we
 * pin fixed widths, reaching the design's 378px on desktop.
 *
 * `shrink-0` stops flexbox from squashing cards to fit — we WANT overflow,
 * because overflow is what makes the carousel scroll.
 */
export function SeoCaseCard({ item }: { item: SeoCase }) {
  return (
    <article className="flex w-[82%] shrink-0 snap-start flex-col gap-4 rounded-[20px] border border-line bg-white px-5 pt-5 pb-6 shadow-card sm:w-[340px] sm:px-[26px] sm:pt-[26px] sm:pb-7 lg:w-[378px]">
      <span className="w-fit rounded-md bg-seo-soft px-2.5 py-[5px] font-mono text-[11px] tracking-[0.03em] text-seo">
        {item.tag}
      </span>

      {/*
        SCREENSHOT FRAME.

        `object-contain`, not `object-cover`. These are proof-of-ranking
        screenshots, so cropping them defeats their purpose — and their shapes
        vary a lot (0.99 to 1.50 aspect against a 1.36 box), so cover was
        slicing 6-9% off the sides of the wide ones and up to 27% off the
        bottom of the near-square ones.

        `contain` scales each one down to fit whole. Five of the six are
        screenshots of white search pages, so the letterbox is invisible
        against the white frame; the one dark-mode SERP simply reads as a
        screenshot sitting in a frame.

        The inner div exists because `fill` positions against the PADDING box —
        padding on the outer element alone would be ignored. This gives the
        image a little breathing room off the border.
      */}
      <div className="h-[190px] w-full overflow-hidden rounded-xl border border-line bg-white p-1.5 sm:h-[220px] lg:h-[240px]">
        <div className="relative h-full w-full">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 640px) 82vw, 340px"
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-[19px] font-bold leading-[1.28] text-ink">{item.client}</h3>
        {/*
          The rank sits INSIDE the same <p> as the result, not in its own
          element above it — it's a rank *for* this keyword, so reading it as
          one line ("#2 Ranking for Advertising Agency") is the point. Keeping
          it inline also means a long keyword wraps around the badge instead of
          leaving a short orphan line beside it.
        */}
        <p className="text-[13.5px] leading-[1.55] text-body">
          <span className="mr-1.5 inline-block rounded-md bg-seo-soft px-1.5 py-px font-mono text-[11px] font-medium align-[1px] text-seo">
            #{item.rank}
          </span>
          {item.result}
        </p>
      </div>
    </article>
  );
}
