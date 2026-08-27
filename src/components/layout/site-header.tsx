"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { BrandLogo } from "@/components/brand/logo";
import { NavLink } from "@/components/layout/site-header-nav-link";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navItems } from "@/config/navigation";
import { useHash } from "@/hooks/use-hash";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const hash = useHash();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && !hash;
    }
    if (href.startsWith("/#")) {
      return pathname === "/" && hash === href.slice(1);
    }
    return pathname.startsWith(href);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-[100] bg-dark pt-[env(safe-area-inset-top,0px)] text-dark-foreground [--ring:var(--dark-foreground)]">
      <Container>
        <div className="grid min-h-[96px] grid-cols-[1fr_auto] items-center gap-[16px] lg:grid-cols-[1fr_auto_1fr]">
          <BrandLogo priority />

          <nav
            className="hidden items-center justify-center lg:flex"
            aria-label="Navegação principal"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                href={item.href}
                label={item.label}
                active={isActive(item.href)}
                tone="dark"
              />
            ))}
          </nav>

          <div className="flex items-center justify-end gap-[8px]">
            <ButtonLink
              href="/#contato"
              size="pill"
              className="hidden sm:inline-flex"
            >
              Quero crescer
              <ArrowUpRight className="size-[14px]" aria-hidden />
            </ButtonLink>

            <button
              type="button"
              className="focus-ring inline-flex size-[44px] items-center justify-center rounded-[10px] text-dark-foreground lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="menu-principal"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X className="size-[22px]" aria-hidden />
              ) : (
                <Menu className="size-[22px]" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </Container>

      <nav
        id="menu-principal"
        className={cn(
          "border-t border-border-dark bg-dark px-[20px] py-[16px] lg:hidden",
          menuOpen ? "flex flex-col gap-[4px]" : "hidden",
        )}
        aria-label="Navegação mobile"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            href={item.href}
            label={item.label}
            active={isActive(item.href)}
            tone="dark"
            onClick={closeMenu}
            className="w-full justify-start"
          />
        ))}
        <ButtonLink
          href="/#contato"
          size="pill"
          onClick={closeMenu}
          className="mt-[8px] w-full"
        >
          Quero crescer
          <ArrowUpRight className="size-[16px]" aria-hidden />
        </ButtonLink>
      </nav>
    </header>
  );
}
