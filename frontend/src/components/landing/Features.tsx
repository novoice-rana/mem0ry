"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { GridCard } from "@/components/ui/GridCard";
import { fadeUp, stagger } from "@/lib/motion";

const features = [
  {
    id: "capture",
    span: "md:col-span-1",
    tag: "Ingest",
    title: "Automatic capture",
    description:
      "Meetings, threads, and decisions are ingested automatically — no manual note-taking.",
    glow: "rgba(59, 130, 246, 0.15)",
    visual: (
      <div className="mt-4 flex items-end gap-1 h-10">
        {[40, 65, 45, 80, 55, 70].map((h, i) => (
          <motion.div
            key={i}
            className="w-2 rounded-sm bg-purple-500/30"
            initial={{ height: 4 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "recall",
    span: "md:col-span-2 md:row-span-2",
    tag: "Neural recall",
    title: "Instant recall",
    description:
      "Ask anything about past meetings. Get answers with full context — who said what, when, and why.",
    glow: "rgba(139, 92, 246, 0.2)",
    glowPos: { x: "50%", y: "30%" },
    visual: (
      <div className="mt-5 rounded-xl border border-surface-border bg-[#0a0712]/80 p-4">
        <div className="flex items-center gap-2 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          mem0ry query
        </div>
        <p className="mt-3 text-sm text-foreground/90">
          &ldquo;Who approved the API v2 delay?&rdquo;
        </p>
        <div className="mt-3 space-y-2 border-t border-surface-border pt-3">
          {["Zoom · Mar 12 roadmap", "Slack · #product thread", "Notion · Launch brief"].map(
            (src) => (
              <div
                key={src}
                className="flex items-center gap-2 rounded-lg bg-surface px-3 py-1.5 text-[11px] text-muted"
              >
                <span className="h-1 w-1 rounded-full bg-purple-400" />
                {src}
              </div>
            )
          )}
        </div>
      </div>
    ),
  },
  {
    id: "graph",
    span: "md:col-span-1",
    tag: "Graph",
    title: "Connected context",
    description:
      "Slack → Zoom → Notion → GitHub. Every decision linked across your stack.",
    glow: "rgba(236, 72, 153, 0.12)",
    visual: (
      <svg className="mt-4 h-16 w-full text-purple-500/40" viewBox="0 0 120 60" fill="none">
        <circle cx="20" cy="30" r="6" fill="currentColor" fillOpacity="0.6" />
        <circle cx="60" cy="15" r="6" fill="currentColor" fillOpacity="0.8" />
        <circle cx="60" cy="45" r="6" fill="currentColor" fillOpacity="0.5" />
        <circle cx="100" cy="30" r="6" fill="currentColor" fillOpacity="0.7" />
        <path d="M26 30 H54 M60 21 V39 M66 30 H94" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    id: "secure",
    span: "md:col-span-1",
    tag: "Trust",
    title: "Org-wide & secure",
    description: "RBAC, audit trails, workspace isolation.",
    glow: "rgba(34, 197, 94, 0.12)",
    visual: (
      <div className="mt-4 flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
        <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
        <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400/80">
          SOC2 ready
        </span>
      </div>
    ),
  },
  {
    id: "action",
    span: "md:col-span-1",
    tag: "Track",
    title: "Action items",
    description: "Decisions and follow-ups surfaced automatically.",
    glow: "rgba(251, 191, 36, 0.1)",
    visual: (
      <div className="mt-4 space-y-2">
        {["Update runbook", "Ship API v2"].map((item, i) => (
          <div key={item} className="flex items-center gap-2 text-xs text-muted">
            <span className={`h-3.5 w-3.5 rounded border ${i === 0 ? "border-purple-400 bg-purple-500/30" : "border-muted/30"}`} />
            {item}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "onboard",
    span: "md:col-span-2",
    tag: "Onboard",
    title: "Team onboarding",
    description:
      "New hires get full organizational context on day one — not week three of intro meetings.",
    glow: "rgba(167, 139, 250, 0.15)",
    visual: (
      <div className="mt-4 flex items-center gap-6">
        <div className="text-center">
          <p className="font-mono text-2xl font-bold text-purple-400 line-through opacity-40">3wk</p>
          <p className="text-[10px] text-muted">before</p>
        </div>
        <svg className="h-4 w-8 text-purple-500/50" fill="none" viewBox="0 0 32 16">
          <path d="M2 8h24m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div className="text-center">
          <p className="font-mono text-2xl font-bold text-gradient">2d</p>
          <p className="text-[10px] text-muted">with mem0ry</p>
        </div>
      </div>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-400">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Your organization&apos;s second brain
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Stop losing context between meetings. mem0ry builds a living memory
            of everything your team discusses and decides.
          </p>
        </Reveal>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[minmax(140px,auto)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger(0.07)}
        >
          {features.map((feature, i) => (
            <motion.div key={feature.id} variants={fadeUp} className={feature.span}>
              <GridCard
                index={`0${i + 1}`}
                glow={feature.glow}
                glowPos={feature.glowPos}
                className="flex h-full flex-col p-6"
              >
                <span className="inline-flex w-fit rounded-full border border-purple-500/20 bg-purple-600/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-purple-400">
                  {feature.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{feature.description}</p>
                <div className="mt-auto">{feature.visual}</div>
              </GridCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
