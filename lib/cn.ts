/**
 * Tiny class-name joiner.
 *
 * Lets you write conditional classes without string-concatenation mess:
 *   cn("p-4", isActive && "bg-brand", className)
 * Falsy values (false, undefined, null, "") are dropped.
 *
 * Bigger projects use `clsx` + `tailwind-merge`; for a site this size a 3-line
 * helper avoids two dependencies.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
