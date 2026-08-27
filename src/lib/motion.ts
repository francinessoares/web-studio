"use client";

import { useReducedMotion } from "framer-motion";
import type { Transition, Variants } from "framer-motion";

export const ease = [0.16, 1, 0.3, 1] as const;

export const spring = {
  type: "spring" as const,
  stiffness: 420,
  damping: 32,
};

export function useMotionPrefs() {
  const reducedMotion = useReducedMotion() ?? false;
  return { reducedMotion, ease, spring };
}

export function buildHeroVariants(reducedMotion: boolean) {
  const itemTransition: Transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.22, ease };

  const container: Variants = {
    hidden: {},
    visible: {
      transition: reducedMotion
        ? {}
        : { staggerChildren: 0.06, delayChildren: 0.08 },
    },
  };

  const item: Variants = {
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: itemTransition,
    },
  };

  const headline: Variants = {
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: itemTransition,
    },
  };

  const badgeContainer: Variants = {
    hidden: {},
    visible: {
      transition: reducedMotion
        ? {}
        : { staggerChildren: 0.03, delayChildren: 0.04 },
    },
  };

  const badge: Variants = {
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: itemTransition },
  };

  return { container, item, headline, badgeContainer, badge };
}

const softTransition = (reducedMotion: boolean): Transition =>
  reducedMotion ? { duration: 0 } : { duration: 0.2, ease };

export function revealVariants(reducedMotion: boolean) {
  const transition = softTransition(reducedMotion);

  return {
    fade: {
      hidden: reducedMotion ? { opacity: 1 } : { opacity: 0 },
      visible: { opacity: 1, transition },
    } satisfies Variants,
    slide: {
      hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
      visible: { opacity: 1, y: 0, transition },
    } satisfies Variants,
    reveal: {
      hidden: reducedMotion
        ? { opacity: 1, y: 0, scale: 1 }
        : { opacity: 0, y: 8, scale: 0.98 },
      visible: { opacity: 1, y: 0, scale: 1, transition },
    } satisfies Variants,
  };
}

export const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2, ease },
} as const;
