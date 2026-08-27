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

export function AboutSection() {
  return (
    <SectionShell id="sobre" labelledBy="sobre-heading">
      <div className="grid gap-[40px] lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Sobre"
            title="Quem faz o trabalho."
            description="Somos uma parceria em Florianópolis: marketing digital e engenharia de software no mesmo time, para o negócio crescer no digital."
            titleId="sobre-heading"
          />
        </div>
        <ul className="grid gap-[16px] sm:grid-cols-2 lg:col-span-7">
          {team.map((person) => (
            <li
              key={person.id}
              className="overflow-hidden rounded-[16px] border border-border bg-surface"
            >
              <div className="relative aspect-[4/5] bg-secondary">
                {person.photo ? (
                  <Image
                    src={person.photo.src}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
                  />
                ) : null}
              </div>
              <div className="p-[20px]">
                <p className="text-[18px] font-semibold tracking-[-0.5px]">
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
