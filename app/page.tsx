import Link from "next/link";
import { FadeUp } from "@/components/Motion";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import TypewriterHero from "@/components/TypewriterHero";
import Marquee from "@/components/Marquee";
import ProjectShowcase from "@/components/ProjectShowcase";
import { projects, featuredProjects } from "@/lib/projects";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/lokesh686",
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/vodnala-lokesh-a6b367227",
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com",
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: "Peerlist",
    href: "https://peerlist.io",
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="9" strokeWidth={1.5}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 8h4a2 2 0 010 4H9V8zM9 12v4"/></svg>,
  },
];

const marqueeRow1 = [
  { label: "FastAPI" }, { label: "LangChain" }, { label: "Next.js" },
  { label: "PostgreSQL" }, { label: "Docker" }, { label: "OpenAI API" },
  { label: "Redis" }, { label: "MCP" }, { label: "React" },
  { label: "TypeScript" }, { label: "Celery" }, { label: "pgvector" },
];
const marqueeRow2 = [
  { label: "Autonomous Agents" }, { label: "RAG Pipelines" }, { label: "Multi-Tenant SaaS" },
  { label: "Ensemble ML" }, { label: "Vector DBs" }, { label: "CI/CD" },
  { label: "WebSockets" }, { label: "JWT Auth" }, { label: "GCP" },
  { label: "AWS" }, { label: "CrewAI" }, { label: "LangGraph" },
];

const stats = [
  { value: "12+", label: "Projects shipped" },
  { value: "100+", label: "DSA problems" },
  { value: "5+", label: "Certifications" },
  { value: "3", label: "Active programs" },
];

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-36 pb-16 relative z-10">
        <FadeUp delay={0}>
          <div className="flex items-center gap-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-mono text-text-secondary tracking-wide">
              available for internships &amp; placements · 2027
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="mb-3 text-xs font-mono text-text-muted uppercase tracking-widest">
            Based in Karimnagar, India
            <span className="mx-2 text-border">·</span>
            B.Tech CSE @ CMR
          </div>
        </FadeUp>

        <FadeUp delay={0.14}>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="hero-gradient block">Lokesh</span>
            <span className="hero-gradient block">Vodnala</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-xl sm:text-2xl text-text-secondary leading-relaxed mb-3 max-w-xl">
            I build&nbsp;
            <TypewriterHero />
          </p>
        </FadeUp>

        <FadeUp delay={0.26}>
          <p className="text-sm text-text-muted max-w-lg leading-relaxed mb-10">
            Full-Stack &amp; AI Engineer with proven experience in production-grade agent frameworks,
            RAG pipelines, and multi-tenant SaaS. Cloud Trainee @ PwC Launchpad.
          </p>
        </FadeUp>

        <FadeUp delay={0.32}>
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <MagneticButton>
              <Link
                href="/projects"
                className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-xl transition-colors"
              >
                View Projects →
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-bg-secondary hover:bg-bg-tertiary border border-border text-text-primary text-sm font-medium rounded-xl transition-colors"
              >
                Contact Me
              </Link>
            </MagneticButton>
            <Link
              href="https://github.com/lokesh686"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-text-muted hover:text-text-primary text-sm transition-colors link-hover"
            >
              GitHub ↗
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={0.38}>
          <div className="flex items-center gap-0.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                data-cursor-hover
                className="p-2.5 text-text-muted hover:text-text-primary transition-colors rounded-lg hover:bg-bg-secondary"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ─── MARQUEE STRIP ─────────────────────────────────── */}
      <section className="py-10 border-y border-border relative z-10">
        <Marquee items={marqueeRow1} className="mb-3" />
        <Marquee items={marqueeRow2} reverse />
      </section>

      {/* ─── STATS ─────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.07}>
              <div className="bg-bg-secondary border border-border rounded-xl p-5 text-center hover:border-border-hover transition-colors">
                <div className="text-2xl font-bold text-text-primary mb-1">{s.value}</div>
                <div className="text-xs text-text-muted">{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── FEATURED PROJECTS (showcase) ──────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pb-24 relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-mono text-accent">01</span>
            <div className="h-px flex-1 bg-border" />
            <Link href="/projects" className="text-xs text-text-muted hover:text-accent transition-colors font-mono">
              all {projects.length} projects →
            </Link>
          </div>
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Featured Projects
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ProjectShowcase projects={featuredProjects} />
        </ScrollReveal>
      </section>

      {/* ─── EXPERIENCE STRIP ──────────────────────────────── */}
      <section className="border-t border-border relative z-10">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono text-accent">02</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-8">Experience</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              {
                company: "PwC Launchpad",
                role: "Cloud Engineering Trainee",
                date: "2025 – Present",
                desc: "Competitively selected for Cloud Engineering track. Trained in GCP/AWS infrastructure, DevOps, containerized deployments, and enterprise-grade CI/CD.",
                tags: ["GCP", "AWS", "Docker", "CI/CD"],
              },
              {
                company: "ElevateBox",
                role: "SWE Fellow",
                date: "Aug 2024 – Present",
                desc: "100+ DSA problems across arrays, trees, graphs, DP on LeetCode/HackerRank/Codeforces. Built and deployed MERN stack apps with JWT auth and OpenAI/Gemini integrations.",
                tags: ["DSA", "MERN", "OpenAI", "LeetCode"],
              },
              {
                company: "Hexart.in — HCIP",
                role: "AI Research & Innovation Cohort",
                date: "Nov 2025 – Present",
                desc: "Selected for AI Innovation Cohort. Built ML projects with supervised classification and NLP pipelines on real-world datasets.",
                tags: ["ML", "NLP", "Scikit-learn", "Research"],
              },
            ].map((exp, i) => (
              <ScrollReveal key={exp.company} delay={i * 0.08}>
                <div className="group flex gap-4 p-5 bg-bg-secondary border border-border rounded-xl hover:border-border-hover transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <span className="text-sm font-semibold text-text-primary">{exp.company}</span>
                      <span className="text-xs font-mono text-text-muted shrink-0">{exp.date}</span>
                    </div>
                    <p className="text-xs text-accent mb-2">{exp.role}</p>
                    <p className="text-xs text-text-secondary leading-relaxed mb-3">{exp.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((t) => (
                        <span key={t} className="text-[10px] font-mono text-text-muted bg-bg-tertiary border border-border px-1.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 to-violet-950/20 p-8 sm:p-10 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)]" />
            <div className="relative z-10">
              <div className="float-badge inline-block mb-4">
                <span className="text-2xl">👋</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
                Open to opportunities
              </h2>
              <p className="text-text-secondary text-sm mb-6 max-w-md mx-auto">
                Targeting high-package campus placements at AI-first and product-focused companies.
                Let&apos;s build something meaningful.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="px-6 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-xl transition-colors"
                  >
                    Get in touch
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    href="/projects"
                    className="px-6 py-2.5 border border-border hover:border-border-hover text-text-primary text-sm font-medium rounded-xl transition-colors"
                  >
                    See my work
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
