"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { GridCard } from "@/components/ui/GridCard";
import { fadeUp, stagger } from "@/lib/motion";

const integrations = [
  {
    id: "meet",
    name: "Google Meet",
    hook: "Calls → context",
    description: "Transcripts and decisions indexed when you hang up.",
    span: "",
    glow: "rgba(34, 197, 94, 0.15)",
    accent: "text-emerald-400 border-emerald-500/25 bg-emerald-500/10",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="14" height="14" rx="2" fill="#00AC47" />
        <path d="M16 8.5l6-3.5v14l-6-3.5V8.5z" fill="#00832D" />
      </svg>
    ),
    visual: (
      <div className="flex items-center gap-1.5 mt-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-1 flex-1 rounded-full bg-emerald-500/30 overflow-hidden">
            <motion.div
              className="h-full bg-emerald-400/60 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: `${30 + i * 25}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
            />
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "zoom",
    name: "Zoom",
    hook: "Recordings → memory",
    description: "Cloud recordings and chat, unified.",
    span: "",
    glow: "rgba(59, 130, 246, 0.15)",
    accent: "text-blue-400 border-blue-500/25 bg-blue-500/10",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#2D8CFF" />
        <path d="M6.5 8.5h5.5c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2H6.5c-.8 0-1.5-.7-1.5-1.5v-4c0-.8.7-1.5 1.5-1.5z" fill="white" />
      </svg>
    ),
    visual: (
      <div className="mt-3 flex gap-0.5 items-end h-8">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="w-1 rounded-full bg-blue-500/40"
            style={{ height: `${20 + Math.sin(i) * 15 + 20}%` }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "slack",
    name: "Slack",
    hook: "Threads → lineage",
    description: "Channel decisions linked to their origin.",
    span: "",
    glow: "rgba(236, 72, 153, 0.12)",
    accent: "text-fuchsia-400 border-fuchsia-500/25 bg-fuchsia-500/10",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
        <path d="M5.5 14.5a2 2 0 100-4 2 2 0 000 4z" fill="#E01E5A" />
        <path d="M7 14.5h7v-2H7v2z" fill="#E01E5A" />
        <path d="M9.5 5.5a2 2 0 100 4 2 2 0 000-4z" fill="#36C5F0" />
        <path d="M18.5 9.5a2 2 0 10-4 0 2 2 0 004 0z" fill="#2EB67D" />
      </svg>
    ),
    visual: (
      <div className="mt-3 space-y-1.5">
        <div className="rounded-lg bg-fuchsia-500/10 px-2.5 py-1.5 text-[10px] text-muted">
          #product · decision made
        </div>
        <div className="ml-3 rounded-lg bg-surface px-2.5 py-1.5 text-[10px] text-muted/70">
          ↳ linked to standup
        </div>
      </div>
    ),
  },
  {
    id: "notion",
    name: "Notion",
    hook: "Docs → living",
    description: "Wikis stay synced with meetings and threads that shaped them.",
    span: "lg:col-span-1",
    glow: "rgba(163, 163, 163, 0.1)",
    accent: "text-neutral-300 border-neutral-500/25 bg-neutral-500/10",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
        <path d="M4.5 3.5h15l-1 16.5L12 22l-6.5-2V3.5z" fill="white" fillOpacity="0.9" />
        <path d="M7 6.5h10v2H7v-2zm0 4h8v1.5H7V10.5zm0 3.5h6v1.5H7V14z" fill="#0d0a18" fillOpacity="0.65" />
      </svg>
    ),
    visual: (
      <div className="mt-3 rounded-lg border border-surface-border bg-white/[0.02] p-2.5">
        <div className="h-1.5 w-3/4 rounded bg-neutral-500/20" />
        <div className="mt-1.5 h-1 w-1/2 rounded bg-neutral-500/10" />
        <div className="mt-2 flex items-center gap-1 text-[9px] text-purple-400">
          <span className="h-1 w-1 rounded-full bg-purple-400" />
          synced from Zoom · Mar 12
        </div>
      </div>
    ),
  },
  {
    id: "github",
    name: "GitHub",
    hook: "Code → narrative",
    description: "PRs connected to the conversations behind them.",
    span: "lg:col-span-1",
    glow: "rgba(52, 211, 153, 0.12)",
    accent: "text-emerald-400 border-emerald-500/25 bg-emerald-500/10",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    visual: (
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-emerald-500/15 bg-emerald-500/5 px-2.5 py-2">
        <span className="font-mono text-[10px] text-emerald-400">PR #412</span>
        <span className="text-[10px] text-muted">merged · linked to Slack</span>
      </div>
    ),
  },
];

export function Integrations() {
  return (
    <section id="integrations" className="relative py-24 md:py-32">
      <div className="glow-orb left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 bg-purple-600/10" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-400">
            Integrations
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Works where your team already is
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Five tools in. One memory graph out. OAuth in minutes — no migration.
          </p>
        </Reveal>

        <motion.div
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger(0.08)}
        >
          {integrations.map((item, i) => (
            <motion.div key={item.id} variants={fadeUp} className={item.span}>
              <GridCard index={`0${i + 1}`} glow={item.glow} className="h-full p-6">
                <div className="flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${item.accent}`}>
                    {item.icon}
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[9px] text-emerald-400/80">synced</span>
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
                <p className="mt-0.5 text-xs font-medium text-purple-400">{item.hook}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                {item.visual}
              </GridCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Hub connector */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative mx-auto mt-12 flex max-w-sm flex-col items-center"
        >
          <div className="h-8 w-px bg-gradient-to-b from-purple-500/40 to-transparent" />
          <div className="grid-card relative rounded-2xl px-8 py-4 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">unified layer</p>
            <p className="mt-1 text-sm font-semibold text-gradient">mem0ry recall graph</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
