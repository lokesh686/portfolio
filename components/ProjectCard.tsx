"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

const statusColors = {
  live: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  wip: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  archived: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="bg-bg-secondary border border-border rounded-2xl p-6 h-full flex flex-col hover:border-accent/50 transition-colors cursor-pointer">
          {/* Header with Status */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-text-secondary line-clamp-2">
                {project.description}
              </p>
            </div>
            <span
              className={`ml-2 px-2.5 py-1 rounded-full text-xs font-mono border whitespace-nowrap flex-shrink-0 ${
                statusColors[project.status]
              }`}
            >
              {project.status === "live" && "Live"}
              {project.status === "wip" && "WIP"}
              {project.status === "archived" && "Archived"}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-text-secondary mb-4 flex-grow line-clamp-3">
            {project.longDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono bg-bg-tertiary border border-border text-text-muted px-2.5 py-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-xs font-mono text-text-muted px-2.5 py-1">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-border">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Code size={16} />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
