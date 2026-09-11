import { cn } from "@/lib/cn";

/**
 * The little coloured dot + spaced-out monospace label that opens every
 * section ("PORTFOLIO", "SKILLS & MANAGEMENT", "SEO WORK"...).
 *
 * `tone` flips the text colour for the dark PPC section, where the label is
 * white and the dot is orange instead of red.
 */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 shrink-0 rounded-full",
          tone === "light" ? "bg-dot-red" : "bg-accent-orange",
        )}
      />
      <span
        className={cn(
          "font-mono text-[12px] tracking-[0.08em]",
          tone === "light" ? "text-muted" : "text-white",
        )}
      >
        {children}
      </span>
    </div>
  );
}
