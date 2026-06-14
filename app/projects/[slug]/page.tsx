import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { FadeUp, ScrollReveal } from "@/components/Motion";
import { projects } from "@/lib/projects";
import { Code, ArrowLeft, ExternalLink } from "lucide-react";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Get next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="w-full">
      {/* Back Button */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <FadeUp delay={0}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </FadeUp>
      </section>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <FadeUp delay={0}>
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            {project.title}
          </h1>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mb-8">
            {project.description}
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-wrap items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-colors"
              >
                View Live
                <ExternalLink size={18} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bg-secondary hover:bg-bg-tertiary border border-border text-text-primary font-medium rounded-xl transition-colors"
              >
                View Code
                <Code size={18} />
              </a>
            )}
          </div>
        </FadeUp>
      </section>

      {/* Overview Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2">
            <FadeUp delay={0}>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Overview
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {project.longDescription}
              </p>
            </FadeUp>

            {/* Problem & Solution */}
            <div className="space-y-12">
              <ScrollReveal>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    Problem
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    Solution
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Status */}
            <ScrollReveal>
              <div className="bg-bg-secondary border border-border rounded-2xl p-6">
                <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-3">
                  Status
                </h3>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      project.status === "live"
                        ? "bg-emerald-400"
                        : project.status === "wip"
                        ? "bg-yellow-400"
                        : "bg-gray-400"
                    }`}
                  />
                  <span className="text-text-primary font-medium capitalize">
                    {project.status}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Tech Stack */}
            <ScrollReveal>
              <div className="bg-bg-secondary border border-border rounded-2xl p-6">
                <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-bg-tertiary border border-border text-text-secondary px-3 py-1.5 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Links */}
            <ScrollReveal>
              <div className="bg-bg-secondary border border-border rounded-2xl p-6 space-y-3">
                <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
                  Links
                </h3>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
                  >
                    <Code size={16} />
                    <span>GitHub Repository</span>
                  </a>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Next Project Navigation */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t border-border">
        <FadeUp delay={0}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-text-primary">Next Project</h2>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="text-accent hover:text-accent-hover transition-colors"
            >
              View →
            </Link>
          </div>
        </FadeUp>

        <ScrollReveal>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="block bg-bg-secondary border border-border rounded-2xl p-8 hover:border-accent/50 transition-colors group"
          >
            <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors mb-2">
              {nextProject.title}
            </h3>
            <p className="text-text-secondary">{nextProject.description}</p>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
