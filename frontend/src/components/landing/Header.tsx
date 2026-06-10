"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeIn } from "@/lib/motion";

export function Header() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.9]);
  const backgroundColor = useTransform(
    bgOpacity,
    (v) => `rgba(7, 6, 15, ${v})`
  );

  return (
    <motion.header
      className="fixed top-0 z-50 w-full"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.div
        style={{ backgroundColor }}
        className="absolute inset-0 border-b border-surface-border backdrop-blur-xl"
      />

      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <motion.a
          href="#"
          className="flex items-center gap-2.5"
          whileHover={{ opacity: 0.85 }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 shadow-lg shadow-purple-600/30">
            <span className="text-sm font-bold text-white">m0</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">mem0ry</span>
        </motion.a>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            { label: "Features", href: "#features" },
            { label: "Integrations", href: "#integrations" },
            { label: "How it works", href: "#how-it-works" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button variant="primary">Get early access</Button>
        </div>
      </div>
    </motion.header>
  );
}
