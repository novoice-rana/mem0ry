"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { hoverLift, tapPress } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  variant?: Variant;
  children: ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-600/25",
  secondary:
    "border border-surface-border bg-surface text-foreground hover:border-purple-500/40 hover:bg-purple-600/10",
  ghost: "text-muted hover:text-foreground hover:bg-surface",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const reduced = useReducedMotion();
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`;
  const motionProps = reduced ? {} : { whileHover: hoverLift, whileTap: tapPress };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
}
