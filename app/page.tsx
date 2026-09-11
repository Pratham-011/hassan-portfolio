import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { SeoWorkSection } from "@/components/sections/SeoWorkSection";
import { PpcWorkSection } from "@/components/sections/PpcWorkSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

/**
 * The landing page.
 *
 * Deliberately thin: it only decides the ORDER of sections. All copy lives in
 * content/, all styling lives in the section components. Reordering the page
 * is a matter of moving one line.
 *
 * This is a Server Component (no "use client"), so all of this renders to HTML
 * on the server. The only JavaScript shipped to the browser is Header.tsx and
 * CardCarousel.tsx — the two files that actually need it.
 */
export default function HomePage() {
  return (
    // The anchor the header's brand logo scrolls back to.
    <div id="top">
      <HeroSection />
      <SkillsSection />
      <SeoWorkSection />
      <PpcWorkSection />
      <ToolsSection />
      <ClientsSection />
      <ExperienceSection />
    </div>
  );
}
