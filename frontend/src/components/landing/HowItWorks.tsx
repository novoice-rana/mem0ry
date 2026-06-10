"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { GridCard } from "@/components/ui/GridCard";
import { fadeUp, stagger } from "@/lib/motion";

const steps = [
  {
    step: "01",
    title: "Connect your tools",
    description:
      "Link Meet, Zoom, Slack, Notion, and GitHub in minutes. mem0ry starts capturing context automatically.",
    glow: "rgba(59, 130, 246, 0.12)",
    visual: (
      <div className="mt-4 flex flex-wrap gap-1.5">
        {["Meet", "Zoom", "Slack", "Notion", "GitHub"].map((tool) => (
          <span
            key={tool}
            className="rounded-md border border-surface-border bg-surface px-2 py-1 font-mono text-[10px] text-muted"
          >
            {tool}
          </span>
        ))}
      </div>
    ),
  },
  {
    step: "02",
    title: "Build org memory",
    description:
      "Every meeting, thread, and decision is indexed and connected into a unified knowledge graph.",
    glow: "rgba(139, 92, 246, 0.18)",
    visual: (
      <div className="relative mt-4 h-20 grid-card-pattern rounded-xl border border-surface-border overflow-hidden">
        <svg className="absolute inset-0 h-full w-full p-3" viewBox="0 0 200 60" fill="none">
          {[
            [30, 30], [80, 15], [80, 45], [150, 30], [170, 30],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="5" fill="rgba(167,139,250,0.5)" />
          ))}
          <path
            d="M35 30 H75 M80 20 V40 M85 30 H145 M155 30 H165"
            stroke="rgba(167,139,250,0.3)"
            strokeWidth="1"
          />
        </svg>
        <div className="absolute bottom-2 left-3 font-mono text-[9px] text-purple-400/60">
          knowledge graph building…
        </div>
      </div>
    ),
  },
  {
    step: "03",
    title: "Recall anything",
    description:
      "Ask natural questions and get answers with full context — who, what, when, and why.",
    glow: "rgba(167, 139, 250, 0.15)",
    visual: (
      <div className="mt-4 rounded-xl border border-surface-border bg-[#0a0712]/60 p-3">
        <p className="text-[11px] text-muted">you ask</p>
        <p className="mt-1 text-xs text-foreground/90">&ldquo;Why was the launch delayed?&rdquo;</p>
        <div className="my-2 h-px bg-surface-border" />
        <p className="text-[11px] text-purple-400">mem0ry answers with 3 sources →</p>
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-400">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Three steps to never forget again
          </h2>
        </Reveal>

        <motion.div
          className="mt-16 grid gap-5 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger(0.12)}
        >
          {steps.map((item, index) => (
            <motion.div key={item.step} variants={fadeUp} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-2.5 z-10 hidden h-px w-5 bg-gradient-to-r from-purple-500/50 to-transparent md:block" />
              )}
              <GridCard glow={item.glow} index={item.step} className="h-full p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-600/15 font-mono text-sm font-bold text-purple-400">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                {item.visual}
              </GridCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
