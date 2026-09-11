import { hero, site } from "@/content/site";

/**
 * JSON-LD structured data, rendered into <head> by app/layout.tsx.
 *
 * This is the machine-readable version of the page: it tells Google *who* the
 * site is about rather than leaving it to infer that from the copy. It's what
 * feeds the knowledge panel and the "Hassan Khan, Digital Marketer, Mumbai"
 * style of rich result, and AI search engines read it for the same reason.
 *
 * WHY AN @graph: the three nodes describe the same site from different angles
 * (the person, the site itself, the page), so they're published as one graph
 * with `@id` cross-references instead of three separate scripts. That's how
 * the WebSite and ProfilePage nodes can point at the Person node rather than
 * repeating it.
 *
 * The `@id` values are URL fragments purely as identifiers — they don't have
 * to resolve to anything on the page.
 *
 * Domain, LinkedIn and hero image come from content/site.ts so there's one
 * place to change them. Validate any edit at https://validator.schema.org/.
 */

/** Absolute URL for a path inside /public — schema.org requires absolute. */
const absolute = (path: string) => new URL(path.replace(/^\//, ""), site.seo.url).href;

const PERSON_ID = `${site.seo.url}#person`;

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: site.name,
      url: site.seo.url,
      image: absolute(hero.photo.src),
      jobTitle: "Digital Marketer",
      description:
        "Hassan Khan is a digital marketer with expertise in SEO, PPC, Google Ads, Meta Ads, performance marketing, digital strategy and AI search optimization.",
      // `sameAs` links this Person to their profiles elsewhere — it's how
      // Google confirms the entity is the same across the web.
      sameAs: [site.links.linkedin],
      worksFor: {
        "@type": "Organization",
        name: "Greysell Advertising",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "DY Patil University",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Digital Marketing",
        "Search Engine Optimization",
        "Technical SEO",
        "On-Page SEO",
        "Off-Page SEO",
        "Local SEO",
        "Google Ads",
        "Meta Ads",
        "Performance Marketing",
        "AI Search Optimization",
        "Affiliate Marketing",
        "Content Strategy",
        "Keyword Research",
        "Google Analytics",
        "Google Search Console",
        "Google Tag Manager",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Digital Marketer",
        occupationLocation: {
          "@type": "City",
          name: "Mumbai",
        },
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "k.hassan2791@gmail.com",
        telephone: "+918104112439",
        contactType: "professional",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.seo.url}#website`,
      url: site.seo.url,
      name: "Hassan Khan - Digital Marketer",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.seo.url}#profilepage`,
      url: site.seo.url,
      name: "Hassan Khan - Digital Marketer Portfolio",
      mainEntity: { "@id": PERSON_ID },
    },
  ],
} as const;
