import { problems } from "@/data/problems";

export function ProblemSection() {
  return (
    <section
      id="problema"
      aria-labelledby="problema-heading"
      className="scroll-mt-[96px] border-y border-border bg-surface"
    >
      <div className="layout-rail mx-auto flex w-full flex-col gap-[16px] px-[20px] py-[20px] sm:px-[32px] lg:flex-row lg:items-center lg:gap-[32px]">
        <h2
          id="problema-heading"
          className="text-caption shrink-0 font-medium tracking-[0.08em] text-muted uppercase"
        >
          {problems.title}
        </h2>
        <ul className="flex flex-wrap items-center gap-x-[20px] gap-y-[8px]">
          {problems.items.map((item) => (
            <li key={item} className="text-body-sm text-muted">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
