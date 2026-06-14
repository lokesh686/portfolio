"use client";

import { useState, useMemo } from "react";
import { FadeUp, ScrollReveal } from "@/components/Motion";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { X } from "lucide-react";

// Get all unique tags
const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects;
    return projects.filter((project) =>
      selectedTags.some((tag) => project.tags.includes(tag))
    );
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-32 md:py-40">
        <FadeUp delay={0}>
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Projects
          </h1>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
            A collection of projects I've built, from AI systems and SaaS platforms to
            full-stack applications. Each one taught me something new.
          </p>
        </FadeUp>
      </section>

      {/* Filter Section */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <FadeUp delay={0}>
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-mono text-text-muted uppercase tracking-wider">
                Filter by Tech
              </h2>
              {selectedTags.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs font-mono text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
                >
                  <X size={14} />
                  Clear filters
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${
                    selectedTags.includes(tag)
                      ? "bg-accent text-white border border-accent"
                      : "bg-bg-secondary border border-border text-text-secondary hover:border-accent/50 hover:text-text-primary"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {selectedTags.length > 0 && (
              <p className="text-sm text-text-secondary mt-4">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
            )}
          </div>
        </FadeUp>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.05}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-text-secondary mb-4">
              No projects found with the selected filters.
            </p>
            <button
              onClick={clearFilters}
              className="text-accent hover:text-accent-hover transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
