import Image from "next/image";

import { SectionHeading } from "@/components/primitives/section-heading";
import { SectionShell } from "@/components/primitives/section-shell";

const team = [
  {
    id: "francine",
    name: "Francine Soares",
    role: "Especialista em Engenharia de Software",
    photo: {
      src: "/images/francine-portrait.jpeg",
      width: 897,
      height: 954,
    },
  },
  {
    id: "rodrigo",
    name: "Rodrigo Ribeiro",
    role: "Especialista em Marketing Digital",
    photo: {
      src: "/images/rodrigo-ribeiro.png",
      width: 1254,
      height: 1254,
    },
  },
] as const;

const highlights = [
  "Marketing e engenharia no mesmo time",
  "Estratégia e execução juntas",
  "Soluções sob medida",
] as const;

export function AboutSection() {
  return (
    <SectionShell id="sobre" labelledBy="sobre-heading">
      <div className="grid gap-[40px] lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Sobre"
            title="Marketing encontra tecnologia."
            description="A Vortexa une marketing digital e engenharia de software para construir soluções que fazem sentido para cada negócio."
            titleId="sobre-heading"
          />
          <ul className="mt-[24px] grid gap-[10px]">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex min-w-0 items-start gap-[10px] text-body-sm text-foreground"
              >
                <span
                  className="mt-[7px] size-[6px] shrink-0 rounded-full bg-primary"
                  aria-hidden
                />
                <span className="min-w-0">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid grid-cols-2 gap-[12px] sm:gap-[16px] lg:col-span-7">
          {team.map((person) => (
            <li
              key={person.id}
              className="overflow-hidden rounded-[16px] border border-border bg-surface"
            >
              <div className="relative aspect-[3/4] bg-secondary sm:aspect-[4/5]">
                {person.photo ? (
                  <Image
                    src={person.photo.src}
                    alt={`${person.name}, ${person.role}`}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 28vw, 45vw"
                  />
                ) : null}
              </div>
              <div className="p-[12px] sm:p-[20px]">
                <p className="text-[15px] font-semibold tracking-[-0.5px] sm:text-[18px]">
                  {person.name}
                </p>
                <p className="text-body-sm mt-[6px] text-muted">{person.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
