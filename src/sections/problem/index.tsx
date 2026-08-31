import { problems } from "@/data/problems";

export function ProblemSection() {
  return (
    <section
      id="problema"
      aria-labelledby="problema-heading"
      className="scroll-mt-[96px] border-y border-border bg-surface"
    >
      <div className="layout-rail mx-auto grid w-full min-w-0 gap-[20px] px-[20px] py-[32px] sm:px-[32px] lg:grid-cols-[minmax(200px,280px)_minmax(0,1fr)] lg:items-start lg:gap-[40px] lg:py-[32px]">
        <h2
          id="problema-heading"
          className="text-balance text-[16px] font-semibold leading-[1.3] tracking-[-0.3px] text-foreground lg:text-caption lg:font-medium lg:leading-[1.4] lg:tracking-[0.08em] lg:text-muted lg:uppercase"
        >
          {problems.title}
        </h2>
        <ul className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 sm:gap-x-[32px] sm:gap-y-[12px]">
          {problems.items.map((item) => (
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
    </section>
  );
}
