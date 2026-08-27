import { services } from "@/data/services";

export function Services() {
  return (
    <section
      id="servicos"
      className="scroll-mt-[96px] px-[20px] py-[72px] sm:px-[32px] sm:py-[88px] lg:py-[96px]"
    >
      <div className="layout-rail mx-auto w-full">
        <p className="text-[12px] font-medium tracking-[0.16em] text-eyebrow uppercase">
          O que fazemos
        </p>
        <h2 className="font-heading mt-[12px] max-w-[18ch] text-[28px] leading-[1.1] font-medium tracking-[-0.035em] text-fg-primary sm:text-[36px]">
          Sites pensados para o seu negócio aparecer bem
        </h2>
        <p className="mt-[16px] max-w-[52ch] text-[16px] leading-[28px] text-fg-body">
          Cada projeto começa pela conversa: o que você precisa comunicar, para quem
          e qual resultado espera.
        </p>

        <ul className="mt-[40px] grid gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.id}
              className="rounded-[16px] border border-border-default bg-surface-card p-[24px]"
            >
              <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-fg-primary">
                {service.title}
              </h3>
              <p className="mt-[10px] text-[15px] leading-[24px] text-fg-body">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
