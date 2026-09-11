import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { clients, clientsIntro } from "@/content/clients";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Does this logo file actually exist in /public?
 *
 * This is a Server Component, so it runs on the server at BUILD time — never
 * in the browser. That lets us read the filesystem and decide whether to
 * render a logo or fall back to the client's name.
 *
 * Why bother: a `logo` path pointing at a file nobody has added yet would
 * render as a broken image icon on a live client site. This turns that into a
 * tidy text fallback, and the logo appears automatically on the next build
 * once the file is dropped in.
 */
function logoExists(logo: string | undefined): logo is string {
  if (!logo) return false;
  return existsSync(path.join(process.cwd(), "public", logo));
}

/**
 * Clients: a bordered grid of logos.
 *
 * THE BORDER TRICK: instead of giving each cell its own border (which would
 * double up between neighbours), the wrapper is painted the border colour and
 * each cell is painted white with a 1px gap. The background shows through the
 * gaps as perfectly even hairlines — one line between cells, never two.
 *
 * LOGO TREATMENT: full colour, deliberately. The usual agency move is
 * greyscale-until-hover, but these particular logos rule it out — Banzai is
 * bright yellow on transparent, and desaturating yellow produces a very light
 * grey that all but disappears on a white cell. Eastman and Nirmal Seeds have
 * the same problem to a lesser degree.
 *
 * So the grid is unified by SIZE instead of by colour: every logo is fitted
 * into an identical box, which is what actually makes a logo wall look tidy.
 * Logos differ hugely in shape here — from 1:1 (Nirmal Seeds, HomoeoCare) to
 * 3.3:1 (Banzai) — and a shared box is what stops the wide ones from
 * dominating the square ones.
 */
export function ClientsSection() {
  return (
    <Section id="clients">
      <div className="flex flex-col gap-7">
        <Eyebrow>{clientsIntro.eyebrow}</Eyebrow>

        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => (
            // `group` lets the image react to a hover anywhere in the cell,
            // not just directly on the logo itself.
            <li
              key={client.id}
              className="group flex min-h-[112px] items-center justify-center bg-white px-4 py-6 text-center"
            >
              {logoExists(client.logo) ? (
                // A fixed box + `fill` + `object-contain` is the reliable way
                // to normalise logos of different shapes: the box never
                // changes size (so there's no layout shift, and every cell
                // lines up), and the logo scales down to fit inside it while
                // keeping its own aspect ratio. Nothing is ever stretched or
                // cropped.
                <div className="relative h-14 w-[128px] transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="text-[14px] font-semibold text-body">{client.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
