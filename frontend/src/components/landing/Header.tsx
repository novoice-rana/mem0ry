"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeIn } from "@/lib/motion";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.9]);

  const backgroundColor = useTransform(
    bgOpacity,
    (v) => `rgba(7, 6, 15, ${v})`
  );

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "How it works", href: "#how-it-works" },
  ];

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

      <div className="relative mx-auto max-w-6xl">
        {/* Header Row */}
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2.5"
            whileHover={{ opacity: 0.85 }}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 shadow-lg shadow-purple-600/30">
              <span className="text-sm font-bold text-white">m0</span>
            </div>

            <span className="text-lg font-semibold tracking-tight">
              mem0ry
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost">Sign in</Button>
            <Button variant="primary">Get early access</Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="rounded-md p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: menuOpen ? "auto" : 0,
            opacity: menuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden md:hidden"
        >
          <div className="border-t border-surface-border bg-background/95 px-6 py-5 backdrop-blur-xl">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-4 flex flex-col gap-3">
                <Button variant="ghost">Sign in</Button>
                <Button variant="primary">Get early access</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}