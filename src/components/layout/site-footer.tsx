import Link from "next/link";
import { Mail } from "lucide-react";

import { navItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const footerLinkClass = cn(
  "inline-flex min-h-[44px] items-center text-[14px] tracking-[-0.01em] text-fg-muted transition-premium",
  "hover:text-accent-light",
);

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-subtle bg-surface">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
        aria-hidden
      />

      <div className="layout-rail relative mx-auto w-full px-[20px] py-[72px] sm:px-[32px] sm:py-[88px] lg:py-[96px] xl:px-[40px]">
        <div className="grid gap-[48px] sm:grid-cols-2 lg:grid-cols-12 lg:gap-[40px]">
          <div className="sm:col-span-2 lg:col-span-6">
            <Link
              href="/"
              className="focus-ring group inline-flex min-h-[44px] items-center"
            >
              <span className="text-[18px] font-semibold tracking-[-0.02em] text-fg-primary">
                Web Studio
                <span className="text-accent-light">.</span>
              </span>
            </Link>
            <p className="mt-[16px] max-w-[42ch] text-[15px] leading-[26px] text-fg-body">
              Estúdio de Francine Soares para criação de sites profissionais em{" "}
              {siteConfig.location.city}, {siteConfig.location.region}.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold tracking-[0.12em] text-fg-faint uppercase">
              Navegação
            </p>
            <ul className="mt-[16px] flex flex-col gap-[4px]">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className={cn("focus-ring", footerLinkClass)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold tracking-[0.12em] text-fg-faint uppercase">
              Contato
            </p>
            <ul className="mt-[16px] flex flex-col gap-[4px]">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className={cn("focus-ring group gap-[10px]", footerLinkClass)}
                >
                  <Mail className="size-[16px] shrink-0 text-accent-light" aria-hidden />
                  E-mail
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[56px] flex flex-col gap-[12px] border-t border-white/[0.06] pt-[32px] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] leading-[22px] text-fg-muted">
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-[12px] text-fg-faint">
            {siteConfig.location.city} · {siteConfig.location.region}
          </p>
        </div>
      </div>
    </footer>
  );
}
