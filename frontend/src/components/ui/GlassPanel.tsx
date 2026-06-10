"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";
import { hoverLift } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GlassPanelProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  hover?: boolean;
  glow?: boolean;
}

export function GlassPanel({
  children,
  hover = false,
  glow = false,
  className = "",
  ...props
}: GlassPanelProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl
        border border-surface-border bg-glass
        shadow-[inset_0_1px_0_0_var(--glass-highlight)]
        backdrop-blur-2xl
        ${glow ? "shadow-[0_0_48px_-12px_var(--accent-glow)]" : "shadow-[0_8px_32px_rgba(0,0,0,0.35)]"}
        ${className}
      `}
      whileHover={hover && !reduced ? hoverLift : undefined}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.05] via-transparent to-purple-950/20"
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
