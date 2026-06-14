import Link from "next/link";
import { FadeUp, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Motion";
import { featuredProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { Marquee } from "@/components/Marquee";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { skillCategories } from "@/lib/data/skills";
import { testimonials } from "@/lib/data/testimonials";
import { Code, Briefcase, Mail, ArrowRight } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/lokesh686",
    icon: Code,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/vodnala-lokesh-a6b367227",
    icon: Briefcase,
  },
  {
    label: "Email",
    href: "mailto:vodnalalokesh232@gmail.com",
    icon: Mail,
  },
];

const traits = [
  "AI Systems",
  "Full-Stack",
  "Production-Grade",
  "RAG Pipelines",
  "Autonomous Agents",
  "SaaS",
];

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          <FadeUp delay={0}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
                Available for internships & placements · 2027
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-text-primary mb-6 leading-[1.1]">
              Lokesh Vodnala
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8 max-w-2xl">
              Full-Stack & AI Engineer building{" "}
              <span className="text-text-primary font-semibold">
                autonomous agents
              </span>
              ,{" "}
              <span className="text-text-primary font-semibold">
                RAG pipelines
              </span>
              , and{" "}
              <span className="text-text-primary font-semibold">
                production SaaS
              </span>
              . B.Tech CSE @ CMR Engineering College · Cloud Trainee @ PwC.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/projects"
                className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-colors flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-bg-secondary hover:bg-bg-tertiary border border-border text-text-primary font-medium rounded-xl transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="flex items-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 text-text-secondary hover:text-accent hover:bg-bg-secondary rounded-lg transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Marquee Strip */}
      <section className="border-y border-border py-8 mb-32">
        <Marquee items={traits} duration={40} />
      </section>

      {/* Featured Work Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <FadeUp delay={0}>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-mono text-accent uppercase tracking-wider">
              Selected Work
            </span>
            <div className="flex-1 h-px bg-border" />
            <Link
              href="/projects"
              className="text-xs font-mono text-text-secondary hover:text-accent transition-colors flex items-center gap-2"
            >
              View all projects
              <ArrowRight size={14} />
            </Link>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-16">
            Featured Projects
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <FadeUp delay={0}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-16">
            Tech Stack
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.name} delay={i * 0.1}>
              <div>
                <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">
                  {category.name}
                </h3>
                <StaggerContainer className="space-y-3">
                  {category.skills.map((skill) => (
                    <StaggerItem key={skill.name}>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-bg-secondary border border-border hover:border-accent/50 transition-colors">
                        <span className="text-accent">→</span>
                        <span className="text-sm text-text-secondary">
                          {skill.name}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <FadeUp delay={0}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-16">
            What Others Say
          </h2>
        </FadeUp>

        <ScrollReveal>
          <TestimonialCarousel testimonials={testimonials} />
        </ScrollReveal>
      </section>

      {/* Contact CTA Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <ScrollReveal>
          <div className="bg-bg-secondary border border-border rounded-3xl p-12 md:p-16 text-center">
            <FadeUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Let's Build Something Great
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
                Have an idea or want to collaborate? I'm always interested in
                discussing new projects and opportunities.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-colors flex items-center gap-2"
                >
                  Start a Conversation
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="mailto:vodnalalokesh232@gmail.com"
                  className="px-8 py-4 bg-bg-tertiary hover:bg-border text-text-primary font-medium rounded-xl transition-colors border border-border"
                >
                  vodnalalokesh232@gmail.com
                </a>
              </div>
            </FadeUp>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
