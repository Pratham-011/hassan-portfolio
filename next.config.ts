import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Build to a plain folder of HTML/CSS/JS ("out/") instead of a Node server,
   * so the site can be hosted on Render as a free Static Site.
   * Every route on this site is already prerendered, so nothing is lost.
   */
  output: "export",

  /**
   * Next's image optimizer needs a running server, which a static host doesn't
   * have. <Image> still works — it renders a plain <img> and serves the file
   * from /public as-is.
   */
  images: { unoptimized: true },
};

export default nextConfig;
