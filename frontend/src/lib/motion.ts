import type { Transition, Variants } from "framer-motion";

/** Soft ease — feels physical, not snappy */
export const naturalEase = [0.25, 0.1, 0.25, 1] as const;

export const spring: Transition = {
  type: "spring",
  stiffness: 90,
  damping: 22,
  mass: 0.8,
};

export const springGentle: Transition = {
  type: "spring",
  stiffness: 70,
  damping: 24,
  mass: 1,
};

export const tween: Transition = {
  duration: 0.55,
  ease: naturalEase,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: tween,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: naturalEase } },
};

export const stagger = (delay = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: delay, delayChildren: 0.05 },
  },
});

export const hoverLift = {
  y: -2,
  transition: springGentle,
};

export const tapPress = {
  scale: 0.98,
  transition: { duration: 0.1 },
};
