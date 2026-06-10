"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode, useRef } from "react";
import { useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeUp, tween } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  once?: boolean;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  variants = fadeUp,
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-40px" });
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ ...tween, delay }}
    >
      {children}
    </motion.div>
  );
}
