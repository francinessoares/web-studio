import { SectionHeading } from "@/components/primitives/section-heading";
import { SectionShell } from "@/components/primitives/section-shell";
import { whyUs } from "@/data/why-us";

export function WhyUsSection() {
  return (
    <SectionShell id="por-que" labelledBy="porque-heading">
      <SectionHeading
        eyebrow="Por que nós"
        title="Profissional desde o primeiro projeto. Sem fingir histórico."
        description="Não usamos clientes, anos de mercado ou métricas que não podemos mostrar. O que oferecemos agora é método, execução e conversa direta."
        titleId="porque-heading"
      />
      <ul className="mt-[48px] grid gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
        {whyUs.map((item) => (
          <li key={item.title} className="border-t border-border pt-[20px]">
            <h3 className="text-[18px] font-medium tracking-[-1px]">{item.title}</h3>
            <p className="text-body-sm mt-[10px] text-muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
