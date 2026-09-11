"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

/**
 * A horizontally scrollable row of cards with an arrow on each side.
 *
 * WHY "use client": everything else on this site is a Server Component —
 * rendered once on the server, shipped as HTML, zero JavaScript. This file
 * needs useState/useRef/event handlers, so it must run in the browser.
 * Marking ONLY this file means the interactive JS bundle stays tiny.
 *
 * HOW IT WORKS: the track is a flex row with `overflow-x-auto` and CSS scroll
 * snapping — so it's swipeable on touch for free, with no JS. The arrows are
 * a convenience layered on top, and the cue that the row scrolls at all.
 *
 * ARROW PLACEMENT — the one thing that differs by screen size:
 *   desktop (md+): arrows sit OUTSIDE the track, as drawn in the Figma. There
 *                  is plenty of room.
 *   mobile:        arrows OVERLAY the track's left and right edges. Same
 *                  position visually, but out of the layout flow — sitting
 *                  them beside a 320px row would cost 132px of width and
 *                  crush the cards to ~187px.
 *
 * Cards also size themselves as a % of this track, so the next one always
 * peeks in from the right — a second cue that works even before hydration.
 */
export function CardCarousel({
  children,
  label,
  className,
}: {
  children: React.ReactNode;
  /** Screen-reader name for the region, e.g. "SEO case studies, row 1". */
  label: string;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  /**
   * Starts true on purpose. The server can't measure a DOM element, so
   * whatever we initialise here is what ships in the HTML. A row that
   * overflows is the normal case, and the measurement below corrects it.
   */
  const [canScrollRight, setCanScrollRight] = useState(true);

  /** Recalculate whether each arrow should be enabled. */
  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    // The 1px tolerance avoids flicker from sub-pixel scroll positions.
    setCanScrollLeft(track.scrollLeft > 1);
    setCanScrollRight(track.scrollLeft < maxScroll - 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    sync();

    // Re-check when the container resizes (window resize, device rotation, or
    // images finishing loading and changing the layout).
    const observer = new ResizeObserver(sync);
    observer.observe(track);
    return () => observer.disconnect();
  }, [sync]);

  /** Scroll by the width of exactly one card, including the gap. */
  const scrollByOneCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const [first, second] = track.children as unknown as HTMLElement[];

    // Measuring the distance between two cards gives us card width + gap
    // without hardcoding either number in two places.
    const step =
      first && second
        ? second.offsetLeft - first.offsetLeft
        : (first?.offsetWidth ?? track.clientWidth);

    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  /**
   * `absolute ... md:static` is the whole responsive trick: out of the flow
   * and floating over the track on mobile, back into the flex row on desktop.
   */
  const arrowBase =
    "absolute top-1/2 z-10 flex size-9 -translate-y-1/2 shrink-0 items-center " +
    "justify-center rounded-full border border-line bg-white text-ink shadow-nav " +
    "transition hover:border-ink md:static md:size-11 md:translate-y-0 " +
    "disabled:cursor-default disabled:opacity-35 disabled:hover:border-line " +
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

  return (
    <div
      className={cn("relative flex items-center gap-3 md:gap-[22px]", className)}
      role="region"
      aria-label={label}
    >
      <button
        type="button"
        onClick={() => scrollByOneCard(-1)}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
        className={cn(arrowBase, "left-0")}
      >
        <ChevronLeftIcon className="size-4 md:size-[18px]" />
      </button>

      <div
        ref={trackRef}
        onScroll={sync}
        // snap-x + snap-start on children = each swipe lands on a card edge.
        // items-stretch makes every card match the tallest in the row, so
        // their footers line up even with different amounts of text.
        // no-scrollbar is our custom utility from globals.css.
        className="no-scrollbar flex min-w-0 flex-1 snap-x snap-mandatory items-stretch gap-[22px] overflow-x-auto scroll-smooth pb-1"
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => scrollByOneCard(1)}
        disabled={!canScrollRight}
        aria-label="Scroll right"
        className={cn(arrowBase, "right-0")}
      >
        <ChevronRightIcon className="size-4 md:size-[18px]" />
      </button>
    </div>
  );
}
