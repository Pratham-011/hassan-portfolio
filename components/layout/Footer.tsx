import { footer, site } from "@/content/site";
import { Container } from "@/components/ui/Container";

/**
 * Dark footer bar. Server Component — it's pure static markup, so it ships
 * zero JavaScript.
 *
 * `flex-col ... sm:flex-row` is the responsive bit: the two pieces stack and
 * centre on a phone, then split to opposite ends on wider screens.
 */
export function Footer() {
  return (
    <footer className="bg-ink py-8">
      <Container>
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[14px] font-extrabold tracking-[0.01em] text-white">
            {site.brand}
          </p>
          <p className="font-mono text-[11px] text-night-muted">{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
