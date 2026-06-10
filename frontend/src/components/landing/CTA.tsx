"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView || reduced ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/40 via-background to-background p-12 text-center md:p-16"
        >
          <div className="glow-orb -top-20 left-1/2 h-[300px] w-[500px] -translate-x-1/2 bg-purple-600/20" />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Every company needs a memory.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              We&apos;re building it. Join the waitlist and be among the first
              teams to give their organization a lasting memory.
            </p>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -8 }}
                  variants={fadeUp}
                >
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="flex-1 rounded-xl border border-surface-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30"
                  />
                  <Button variant="primary" type="submit" className="shrink-0 px-6 py-3">
                    Join waitlist
                  </Button>
                </motion.form>
              ) : (
                <motion.p
                  key="done"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 text-sm text-purple-400"
                >
                  You&apos;re on the list. We&apos;ll be in touch.
                </motion.p>
              )}
            </AnimatePresence>

            <p className="mt-4 text-xs text-muted">
              No spam. Early access updates only.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
