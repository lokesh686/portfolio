"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/lib/projects";

const statusColors = {
  live: "text-emerald-400 bg-emerald-400/10",
  wip: "text-amber-400 bg-amber-400/10",
  archived: "text-text-muted bg-bg-tertiary",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-bg-secondary border border-border rounded-xl p-5 hover:border-border-hover transition-colors"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-accent font-mono text-sm">⬡</span>
          <h3 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </div>
        <span
          className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${statusColors[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono text-text-muted bg-bg-tertiary border border-border px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 5 && (
          <span className="text-[11px] font-mono text-text-muted px-1">
            +{project.tags.length - 5}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-secondary hover:text-accent transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </Link>
        )}
        {project.live && (
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-secondary hover:text-accent transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live
          </Link>
        )}
      </div>
    </motion.div>
  );
}
