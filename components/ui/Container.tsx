import { cn } from "@/lib/cn";

/**
 * The horizontal rhythm of the whole site.
 *
 * The Figma frame is 1440px wide with 64px side padding. This reproduces that
 * on large screens (`lg:px-16` = 64px) and tightens the padding as the screen
 * shrinks, so content never touches the edge on a phone.
 *
 * Every section uses this, which is what keeps all the left edges lined up.
 */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-16", className)}>
      {children}
    </div>
  );
}
