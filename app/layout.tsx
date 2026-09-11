import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/content/site";
import { jsonLd } from "@/content/schema";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

/**
 * FONTS
 * next/font downloads these at build time and self-hosts them, so the browser
 * never calls Google — faster, and no third-party tracking.
 *
 * `variable` exposes each font as a CSS custom property. We attach both to
 * <html>, and globals.css maps them onto Tailwind's `font-sans` / `font-mono`.
 * That's why `font-mono` in a component renders IBM Plex Mono.
 *
 * Inter is a variable font, so it covers every weight in one file. IBM Plex
 * Mono is not, so its weights have to be listed explicitly.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

/**
 * METADATA
 * Next reads this export and renders the <title>, <meta> and Open Graph tags
 * into <head>. `openGraph` is what controls the preview card when the link is
 * shared on WhatsApp, LinkedIn or X — worth getting right for a portfolio.
 */
export const metadata: Metadata = {
  /**
   * `metadataBase` is the origin Next resolves every relative metadata URL
   * against — without it, `alternates.canonical: "/"` can't be turned into an
   * absolute URL and the canonical tag is dropped.
   */
  metadataBase: new URL(site.seo.url),
  title: site.seo.title,
  description: site.seo.description,
  /**
   * The canonical tag tells Google which URL is the "real" one, so query
   * strings and the non-www host don't get indexed as separate pages.
   */
  // NOTE: no `alternates.canonical` here. Next normalises any URL it resolves
  // and drops the trailing slash, so the canonical <link> is written by hand in
  // the component below to keep the exact URL. Setting it in both places would
  // emit two canonical tags, which Google ignores entirely.
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.seo.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <head>
        {/* Tells Google which URL is the "real" one, so the non-www host and
            any ?utm= variants don't get indexed as separate pages. */}
        <link rel="canonical" href={site.seo.url} />

        {/* Structured data (content/schema.ts). `dangerouslySetInnerHTML` is
            the only way to put raw JSON inside a <script> from JSX — React
            would otherwise escape it into unparseable text. It's safe here
            because the value is a static object from our own source, never
            user input. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Header />
        {/* <main> marks the primary content — it's the landmark screen readers
            and "skip to content" tools jump to. */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
