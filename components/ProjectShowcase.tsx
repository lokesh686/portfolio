"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Project } from "@/lib/projects";

const statusColors = {
  live: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  wip: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  archived: "text-zinc-500 bg-zinc-500/10 border-zinc-500/20",
};

const cardGradients = [
  "from-violet-950/40 to-indigo-950/20",
  "from-indigo-950/40 to-blue-950/20",
  "from-blue-950/40 to-cyan-950/20",
  "from-cyan-950/30 to-teal-950/20",
  "from-teal-950/30 to-emerald-950/20",
];

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <div className="w-full">
      {/* Large featured card */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`relative rounded-2xl border border-border bg-gradient-to-br ${cardGradients[active % cardGradients.length]} p-6 sm:p-8 mb-6 overflow-hidden`}
      >
        {/* Background number */}
        <span className="absolute right-6 top-4 text-[80px] font-bold text-white/[0.03] select-none pointer-events-none leading-none">
          {String(active + 1).padStart(2, "0")}
        </span>

        <div className="relative z-10 flex flex-col sm:flex-row gap-6">
          {/* Left: text */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${statusColors[project.status]}`}>
                {project.status}
              </span>
              <span className="text-xs text-text-muted font-mono">
                {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">{project.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">{project.longDescription}</p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-mono text-text-muted bg-bg/60 border border-border px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 bg-bg/60 border border-border rounded-lg text-sm text-text-secondary hover:text-accent hover:border-accent/40 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  Source
                </Link>
              )}
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg text-sm text-accent hover:bg-accent/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live demo
                </Link>
              )}
            </div>
          </div>

          {/* Right: fake terminal window */}
          <div className="sm:w-64 shrink-0">
            <div className="rounded-xl border border-border bg-bg/80 backdrop-blur overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-border">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-2 text-[10px] font-mono text-text-muted truncate">{project.slug}.log</span>
              </div>
              <div className="p-3 font-mono text-[10px] text-text-muted leading-relaxed space-y-1">
                <p><span className="text-emerald-400">$</span> deploying {project.slug}...</p>
                <p><span className="text-blue-400">→</span> building docker image</p>
                <p><span className="text-blue-400">→</span> running migrations</p>
                <p><span className="text-emerald-400">✓</span> health check passed</p>
                <p><span className="text-accent">✓</span> live at prod</p>
                <p className="text-text-muted/40">─────────────────</p>
                {project.tags.slice(0, 3).map((t) => (
                  <p key={t}><span className="text-violet-400">dep:</span> {t}</p>
                ))}
                <p className="mt-2 text-emerald-400 animate-pulse">● running</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Thumbnail nav */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {projects.map((p, i) => (
          <button
            key={p.slug}
            onClick={() => setActive(i)}
            className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
              i === active
                ? "bg-accent/10 border-accent/40 text-accent"
                : "bg-bg-secondary border-border text-text-muted hover:text-text-secondary hover:border-border-hover"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>
    </div>
  );
}
