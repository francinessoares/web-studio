"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { SectionHeading } from "@/components/primitives/section-heading";
import { SectionShell } from "@/components/primitives/section-shell";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.question ?? null);

  return (
    <SectionShell id="faq" labelledBy="faq-heading">
      <SectionHeading
        align="center"
        eyebrow="Perguntas"
        title="Dúvidas que aparecem antes de contratar."
        titleId="faq-heading"
      />
      <ul className="mx-auto mt-[40px] max-w-[800px] border-t border-border">
        {faqs.map((item) => {
          const open = openId === item.question;
          return (
            <li key={item.question} className="border-b border-border">
              <button
                type="button"
                aria-expanded={open}
                className="focus-ring flex min-h-[64px] w-full items-center justify-between gap-[16px] py-[16px] text-left"
                onClick={() => setOpenId(open ? null : item.question)}
              >
                <span className="text-[16px] font-medium tracking-[-0.5px]">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "size-[18px] shrink-0 text-muted transition-transform duration-[200ms]",
                    open ? "rotate-180" : "",
                  )}
                  aria-hidden
                />
              </button>
              {open ? (
                <p className="text-body pb-[20px] text-muted">{item.answer}</p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
