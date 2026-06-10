"use client";

import { motion } from "framer-motion";
import { type CSSProperties, type ReactNode } from "react";
import { hoverLift } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GridCardProps {
  children: ReactNode;
  className?: string;
  glow?: string;
  glowPos?: { x: string; y: string };
  index?: string;
}

export function GridCard({
  children,
  className = "",
  glow = "rgba(139, 92, 246, 0.14)",
  glowPos = { x: "85%", y: "5%" },
  index,
}: GridCardProps) {
  const reduced = useReducedMotion();

  const style = {
    "--glow": glow,
    "--gx": glowPos.x,
    "--gy": glowPos.y,
  } as CSSProperties;

  return (
    <motion.div
      style={style}
      whileHover={reduced ? undefined : hoverLift}
      className={`group grid-card card-corners relative rounded-2xl transition-colors duration-300 hover:border-purple-500/35 hover:shadow-lg hover:shadow-purple-600/10 ${className}`}
    >
      {index && (
        <span className="absolute right-4 top-4 font-mono text-[10px] tracking-widest text-muted/40">
          {index}
        </span>
      )}
      {children}
    </motion.div>
  );
}
