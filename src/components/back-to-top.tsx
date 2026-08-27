"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import { InPageHashLink } from "@/components/in-page-hash-link";

const SHOW_AFTER_PX = 480;

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <InPageHashLink
      href="/"
      aria-label="Voltar ao início"
      className="focus-ring inline-flex size-[52px] items-center justify-center rounded-[10px] border border-border-dark bg-dark text-dark-foreground"
    >
      <ArrowUp className="size-[22px]" aria-hidden />
    </InPageHashLink>
  );
}
