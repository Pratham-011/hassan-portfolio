import { skills, skillsIntro } from "@/content/skills";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CheckIcon } from "@/components/ui/icons";

/**
 * Skills: intro copy plus a grid of check-marked pills.
 *
 * The design draws these as four hand-made rows of two. Here it's one CSS
 * grid — `grid-cols-1 md:grid-cols-2` — so the number of rows is decided by
 * how many skills exist in content/skills.ts. Add a ninth and it just works.
 */
export function SkillsSection() {
  return (
    <Section id="skills" tone="surface">
      <div className="flex flex-col gap-7">
        <Eyebrow>{skillsIntro.eyebrow}</Eyebrow>

        <h2 className="max-w-[720px] text-[24px] font-extrabold leading-tight text-balance text-ink sm:text-[28px] lg:text-[32px]">
          {skillsIntro.title}
        </h2>

        <p className="max-w-[620px] text-[15.5px] leading-[1.5] text-body">
          {skillsIntro.description}
        </p>

        <ul className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
          {skills.map((skill) => (
            <li
              key={skill.id}
              className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-[18px] transition-colors hover:border-brand"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                <CheckIcon />
              </span>
              <span className="text-[15px] font-medium text-ink">{skill.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
