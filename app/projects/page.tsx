"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { FadeUp } from "@/components/Motion";
import ScrollReveal from "@/components/ScrollReveal";

const allTags = ["All", "AI/ML", "Full-Stack", "Backend", "Blockchain"];

const tagMap: Record<string, string[]> = {
  "AI/ML": ["LangChain","OpenAI","GPT-4","Scikit-learn","NLP","ML","Groq","Gemini","FAISS","Chroma","MCP","Anthropic API","OpenAI Whisper"],
  "Full-Stack": ["Next.js","React","MERN","Django"],
  "Backend": ["FastAPI","Node.js","PostgreSQL","Redis","Docker","JWT","Async Workers","Celery"],
  "Blockchain": ["Solidity","Ethereum","Web3.js","IPFS"],
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = projects;
    if (activeFilter !== "All") {
      list = list.filter((p) => p.tags.some((t) => tagMap[activeFilter]?.includes(t)));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeFilter, search]);

  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">
      <FadeUp delay={0}>
        <SectionHeader
          number="01"
          title="Projects"
          subtitle={`${projects.length} projects — autonomous agents, SaaS platforms, and ML systems.`}
        />
      </FadeUp>

      {/* Search + filters */}
      <FadeUp delay={0.1}>
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-bg-secondary border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent/50 transition-colors"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-3 py-2 text-xs font-mono rounded-lg transition-colors border ${
                  activeFilter === tag
                    ? "bg-accent/10 border-accent/40 text-accent"
                    : "bg-bg-secondary border-border text-text-secondary hover:text-text-primary hover:border-border-hover"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Count */}
      <FadeUp delay={0.15}>
        <p className="text-xs text-text-muted font-mono mb-6">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          {activeFilter !== "All" && ` in ${activeFilter}`}
          {search && ` matching "${search}"`}
        </p>
      </FadeUp>

      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, delay: i * 0.04, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 border border-dashed border-border rounded-xl"
        >
          <p className="text-text-muted text-sm">No projects found.</p>
          <button
            onClick={() => { setSearch(""); setActiveFilter("All"); }}
            className="mt-3 text-xs text-accent hover:underline"
          >
            Clear filters
          </button>
        </motion.div>
      )}
    </div>
  );
}
