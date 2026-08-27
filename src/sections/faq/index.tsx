import { ChevronDown } from "lucide-react";

import { SectionHeading } from "@/components/primitives/section-heading";
import { SectionShell } from "@/components/primitives/section-shell";
import { faqs } from "@/data/faq";

export function FaqSection() {
  return (
    <SectionShell id="faq" labelledBy="faq-heading">
      <SectionHeading
        align="center"
        eyebrow="Perguntas"
        title="Dúvidas que aparecem antes de contratar."
        titleId="faq-heading"
      />
      <div className="mx-auto mt-[40px] max-w-[800px] border-t border-border">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="group border-b border-border"
          >
            <summary className="focus-ring flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-[16px] py-[16px] text-left [&::-webkit-details-marker]:hidden">
              <span className="text-[16px] font-medium tracking-[-0.5px]">
                {item.question}
              </span>
              <ChevronDown
                className="size-[18px] shrink-0 text-muted transition-transform duration-[200ms] group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <p className="text-body pb-[20px] text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}
