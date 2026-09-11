import { cn } from "@/lib/cn";
import { Container } from "./Container";

/**
 * A page section: background colour + vertical padding + the shared Container.
 *
 * `tone` maps to the three backgrounds used in the design:
 *   "white"   — Hero, SEO Work, Clients
 *   "surface" — Skills, Tools (the subtle off-white #f7f8fa)
 *   "night"   — PPC Work (the dark #11131f block)
 *
 * `id` is what the header nav links scroll to (e.g. href="#skills").
 */
export function Section({
  id,
  tone = "white",
  className,
  children,
}: {
  id?: string;
  tone?: "white" | "surface" | "night";
  className?: string;
  children: React.ReactNode;
}) {
  const tones = {
    white: "bg-white",
    surface: "bg-surface",
    night: "bg-night",
  } as const;

  return (
    <section
      id={id}
      // py-24 = 96px, matching Figma. Scales down on smaller screens.
      className={cn("py-16 md:py-20 lg:py-24", tones[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
