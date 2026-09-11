import type { Client } from "@/lib/types";

/** Heading copy for the Clients section. */
export const clientsIntro = {
  eyebrow: "CLIENTS",
} as const;

/**
 * Client list, rendered as a bordered grid: 6 per row on desktop, 3 on tablet,
 * 2 on mobile. Twelve entries fill two desktop rows exactly — keep the count a
 * multiple of six and the grid never ends on a short row.
 *
 * Every client points at a logo in /public/images/clients/. The section
 * verifies each file exists at build time and falls back to the plain client
 * name when one is missing — so a logo that hasn't been added yet degrades
 * gracefully instead of rendering a broken image.
 */
export const clients: Client[] = [
  { id: "greysell", name: "Greysell", logo: "/images/clients/greysell.png" },
  { id: "global-tourist-centre", name: "Global Tourist Centre", logo: "/images/clients/global-tourist-centre.jpg" },
  { id: "foam-home", name: "Foam Home", logo: "/images/clients/foam-home.png" },
  { id: "upl", name: "UPL", logo: "/images/clients/upl.jpg" },
  { id: "wevaad", name: "WeVaad", logo: "/images/clients/wevaad.jpg" },
  { id: "ups", name: "UPS", logo: "/images/clients/ups.png" },
  { id: "homoeocare", name: "HomoeoCare", logo: "/images/clients/homoeocare.jpg" },
  { id: "nirmal-seeds", name: "Nirmal Seeds", logo: "/images/clients/nirmal-seeds.png" },
  { id: "banzai-hospitality", name: "Banzai Hospitality", logo: "/images/clients/banzai-hospitality.png" },
  { id: "eastman", name: "Eastman", logo: "/images/clients/eastman.jpg" },
  { id: "swal", name: "SWAL", logo: "/images/clients/swal.jpg" },
  { id: "macksofy", name: "Macksofy Technologies", logo: "/images/clients/macksofy.png" },
];
