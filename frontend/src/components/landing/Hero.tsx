"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp, stagger, springGentle } from "@/lib/motion";
import { hoverLift } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const memories = [
  {
    source: "Zoom",
    title: "Q2 Product Roadmap Review",
    snippet: "Decision: prioritize API v2 launch for enterprise clients...",
    time: "2 hours ago",
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    source: "Slack",
    title: "#engineering — deployment thread",
    snippet: "Action item: @sarah to update runbook before Friday deploy",
    time: "Yesterday",
    color: "bg-purple-500/20 text-purple-400",
  },
  {
    source: "Meet",
    title: "Weekly standup — Design team",
    snippet: "Feedback on onboarding flow: reduce steps from 5 to 3",
    time: "2 days ago",
    color: "bg-green-500/20 text-green-400",
  },
  {
    source: "Notion",
    title: "Onboarding PRD v3",
    snippet: "Updated spec after design review — 3 steps, not 5",
    time: "3 days ago",
    color: "bg-neutral-500/20 text-neutral-300",
  },
  {
    source: "GitHub",
    title: "PR #412 — auth middleware",
    snippet: "Merged: unblocks API v2 enterprise launch",
    time: "4 days ago",
    color: "bg-emerald-500/20 text-emerald-400",
  },
];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="glow-orb -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 bg-purple-600/20" />
      <div className="glow-orb top-20 -right-32 h-[300px] w-[300px] bg-purple-700/15" />
      <div className="bg-grid absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger(0.1)}
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-600/10 px-4 py-1.5 text-sm text-purple-400"
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-purple-400"
              animate={reduced ? {} : { opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            Now building — early access open
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-[1.1]"
          >
            Every meeting remembered.{" "}
            <span className="text-gradient">Every decision connected.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
          >
            mem0ry is the organizational memory layer for modern teams. Capture
            context from Meet, Zoom, Slack, Notion, and GitHub — then recall it
            when it matters most.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="primary" className="px-8 py-3 text-base">
              Join the waitlist
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button variant="secondary" href="#how-it-works" className="px-8 py-3 text-base">
              See how it works
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-16 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springGentle, delay: 0.35 }}
        >
          <div className="glass-card overflow-hidden rounded-2xl p-1 shadow-2xl shadow-purple-600/10">
            <div className="rounded-xl bg-[#0d0a18] p-6 md:p-8">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 font-mono text-xs text-muted">mem0ry — org context</span>
              </div>

              <motion.div
                className="space-y-3 text-left"
                initial="hidden"
                animate="visible"
                variants={stagger(0.12)}
              >
                {memories.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    whileHover={reduced ? undefined : hoverLift}
                    className="flex items-start gap-3 rounded-lg border border-surface-border bg-surface p-4 transition-colors hover:border-purple-500/30"
                  >
                    <span className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-medium ${item.color}`}>
                      {item.source}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{item.title}</p>
                      <p className="mt-0.5 truncate text-xs text-muted">{item.snippet}</p>
                    </div>
                    <span className="shrink-0 text-xs text-muted">{item.time}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
