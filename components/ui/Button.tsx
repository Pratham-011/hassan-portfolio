import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * The two pill buttons from the hero, plus the small header CTA.
 *
 * variant:
 *   "primary" — blue→violet gradient, white text  (LET'S WORK TOGETHER)
 *   "outline" — white with a 1.5px dark border    (RESUME)
 * size:
 *   "md" — hero buttons
 *   "sm" — the compact "Let's Talk" pill in the header
 *
 * Renders a Next.js <Link>, which handles both internal routes and external
 * URLs, and prefetches internal ones automatically.
 */
export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: "primary" | "outline";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold " +
    "transition-transform duration-200 hover:-translate-y-0.5 " +
    // Keyboard users need to see where they are — this is not optional.
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

  const variants = {
    primary: "bg-gradient-to-r from-brand to-brand-alt text-white shadow-nav",
    outline: "border-[1.5px] border-ink bg-white text-ink hover:bg-ink hover:text-white",
  } as const;

  const sizes = {
    sm: "px-[18px] py-[9px] text-[13px]",
    md: "px-[26px] py-[14px] text-[14px] tracking-[0.02em]",
  } as const;

  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
}
