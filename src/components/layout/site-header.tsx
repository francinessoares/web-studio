"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageSquare, X } from "lucide-react";

import { NavLink } from "@/components/layout/site-header-nav-link";
import { navItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { useHash } from "@/hooks/use-hash";
import { cn } from "@/lib/utils";

function SiteLogo() {
  return (
    <Link
      href="/"
      className="focus-ring group flex min-h-[44px] items-center gap-[8px] sm:gap-[10px]"
      aria-label={siteConfig.name}
    >
      <div className="leading-none">
        <span className="block text-[15px] font-semibold tracking-[-0.02em] text-fg-primary sm:text-[16px]">
          Web Studio
          <span className="text-accent-light">.</span>
        </span>
        <span className="mt-[4px] block text-[10px] font-medium text-fg-muted sm:mt-[5px] sm:text-[11px]">
          {siteConfig.role}
        </span>
      </div>
    </Link>
  );
}

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
    <header className="fixed inset-x-0 top-0 isolate z-[100] px-[16px] pt-[max(14px,env(safe-area-inset-top,0px)+10px)] sm:px-[24px]">
      <div className="glass-nav layout-rail relative z-[2] mx-auto w-full px-[12px] py-[10px] sm:px-[24px] sm:py-[14px]">
        <div className="flex items-center justify-between gap-[12px]">
          <SiteLogo />

          <nav
            className="hidden items-center justify-center md:flex"
            aria-label="Navegação principal"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                href={item.href}
                label={item.label}
                active={isActive(item.href)}
              />
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-[8px]">
            <Link
              href="/#contato"
              className="nav-cta focus-ring hidden min-h-[44px] sm:inline-flex"
            >
              <MessageSquare className="size-[16px] text-accent-light" aria-hidden />
              Fale comigo
            </Link>

            <button
              type="button"
              className="focus-ring inline-flex size-[44px] items-center justify-center rounded-[12px] text-fg-primary md:hidden"
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

        <nav
          id="menu-principal"
          className={cn(
            "mt-[12px] flex-col gap-[4px] md:hidden",
            menuOpen ? "flex" : "hidden",
          )}
          aria-label="Navegação mobile"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              href={item.href}
              label={item.label}
              active={isActive(item.href)}
              onClick={closeMenu}
              className="w-full justify-start"
            />
          ))}
          <Link
            href="/#contato"
            onClick={closeMenu}
            className="nav-cta focus-ring mt-[8px] min-h-[44px] justify-center"
          >
            <MessageSquare className="size-[16px] text-accent-light" aria-hidden />
            Fale comigo
          </Link>
        </nav>
      </div>
    </header>
  );
}
