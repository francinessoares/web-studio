"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { revealVariants, useMotionPrefs } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "fade" | "slide" | "reveal";
};

export function Reveal({
  children,
  className,
  variant = "slide",
}: RevealProps) {
  const { reducedMotion } = useMotionPrefs();
  const variants = revealVariants(reducedMotion)[variant];

  return (
    <motion.div
      className={cn(className)}
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
