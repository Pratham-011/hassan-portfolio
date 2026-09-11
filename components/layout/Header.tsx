"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

/**
 * Sticky site header.
 *
 * Client Component because it owns two pieces of browser state:
 *   1. whether the mobile menu is open
 *   2. which section is currently on screen (to highlight the nav link)
 *
 * Both nav lists are generated from `navLinks` in content/site.ts, so adding
 * a link there updates desktop and mobile together.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  /**
   * Scroll-spy: highlight the nav link for whichever section is on screen.
   *
   * IntersectionObserver tells us when a section enters/leaves the viewport.
   * `rootMargin: "-45% 0px -50% 0px"` shrinks the detection zone to a thin
   * band across the middle of the screen, so the active link changes when a
   * section reaches the middle rather than the moment it peeks in at the
   * bottom. This is far cheaper than listening to every scroll event.
   */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /** Stop the page scrolling behind the open mobile menu. */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-sm">
      <Container>
        <div className="flex h-[74px] items-center justify-between">
          <Link
            href="#top"
            className="text-[17px] font-extrabold tracking-[0.01em] text-ink"
          >
            {site.brand}
          </Link>

          {/* ---------- Desktop nav (hidden below md) ---------- */}
          <nav className="hidden items-center gap-5 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={activeId === link.href ? "true" : undefined}
                className={cn(
                  "text-[14px] transition-colors",
                  activeId === link.href
                    ? "font-semibold text-brand"
                    : "font-medium text-body hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button href={site.links.contact} size="sm">
              Let&apos;s Talk
            </Button>
          </nav>

          {/* ---------- Mobile menu trigger (hidden from md up) ---------- */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            // aria-expanded/aria-controls tell screen readers this button
            // toggles the panel below, and what its current state is.
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-full border border-line text-ink md:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {/* ---------- Mobile menu panel ---------- */}
      {menuOpen && (
        <div id="mobile-menu" className="border-t border-line bg-white md:hidden">
          <Container>
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  // Close the menu after tapping, or it covers the section
                  // you just navigated to.
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "border-b border-line py-3.5 text-[15px] font-medium last:border-0",
                    activeId === link.href ? "text-brand" : "text-body",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button href={site.links.contact} size="md" className="mt-4 w-full">
                Let&apos;s Talk
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
