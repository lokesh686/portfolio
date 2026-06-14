"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/Motion";

const allTags = ["All", "AI/ML", "Full-Stack", "Backend", "Blockchain"];

const tagMap: Record<string, string[]> = {
  "AI/ML": ["LangChain", "OpenAI", "GPT-4", "Scikit-learn", "NLP", "ML", "Groq", "Gemini", "FAISS", "Chroma", "MCP", "Anthropic API"],
  "Full-Stack": ["Next.js", "React", "MERN", "Django"],
  "Backend": ["FastAPI", "Node.js", "PostgreSQL", "Redis", "Docker", "JWT", "Async Workers", "Celery"],
  "Blockchain": ["Solidity", "Ethereum", "Web3.js", "IPFS"],
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) =>
          p.tags.some((t) => tagMap[activeFilter]?.includes(t))
        );

  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">
      <FadeUp delay={0}>
        <SectionHeader
          number="01"
          title="Projects"
          subtitle={`${projects.length} projects — autonomous agents, SaaS platforms, and ML systems.`}
        />
      </FadeUp>

      {/* Filter tabs */}
      <FadeUp delay={0.1}>
        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                activeFilter === tag
                  ? "bg-accent text-white"
                  : "bg-bg-secondary border border-border text-text-secondary hover:text-text-primary hover:border-border-hover"
              }`}
            >
              {tag}
              {tag !== "All" && (
                <span className="ml-1.5 text-[10px] opacity-60">
                  {tag === "All"
                    ? projects.length
                    : projects.filter((p) =>
                        p.tags.some((t) => tagMap[tag]?.includes(t))
                      ).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {filtered.length === 0 && (
        <p className="text-center text-text-muted text-sm py-16">No projects in this category yet.</p>
      )}
    </div>
  );
}
