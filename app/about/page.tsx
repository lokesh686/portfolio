import type { Metadata } from "next";
import { FadeUp } from "@/components/Motion";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
  title: "About",
  description: "About Lokesh Vodnala — B.Tech CSE student, AI engineer, and full-stack builder.",
};

const timeline = [
  { year: "2023", event: "Started B.Tech CSE at CMR Engineering College, Hyderabad" },
  { year: "2024", event: "Joined ElevateBox SWE Fellowship — 100+ DSA problems, production MERN deployments" },
  { year: "2025", event: "Earned Oracle Cloud AI Foundations & Google Cloud Engineering certifications" },
  { year: "2025", event: "Competitively selected for PwC Launchpad Cloud Engineering track" },
  { year: "2025", event: "Selected for Hexart.in AI Research & Innovation Cohort" },
  { year: "2025", event: "Shipped DevCopilot — MCP-based autonomous developer agent with 15+ tools" },
  { year: "2027", event: "Graduating · Targeting AI-first and product-focused engineering roles" },
];

const focuses = [
  { label: "Autonomous Agent Systems", sub: "MCP · LangGraph · CrewAI" },
  { label: "RAG Pipelines & Vector DBs", sub: "pgvector · Chroma · FAISS" },
  { label: "Full-Stack SaaS", sub: "Next.js · FastAPI · PostgreSQL · Redis" },
  { label: "Cloud Infrastructure", sub: "GCP · AWS · Docker · CI/CD" },
  { label: "ML Systems", sub: "Ensemble classifiers · NLP pipelines" },
];

const certs = [
  { name: "Google Cloud – Cloud Engineering Certificate", issuer: "Google Career Certificates", year: "2025" },
  { name: "Oracle Cloud Infrastructure AI Foundations Associate", issuer: "Oracle", year: "2025" },
  { name: "JPMorgan Chase Software Engineering Job Simulation", issuer: "Forage", year: "2024" },
  { name: "Deloitte Australia Technology Job Simulation", issuer: "Forage", year: "2024" },
  { name: "AI Foundation & Advanced Training", issuer: "Li2 Edu / Hexagon", year: "2025" },
];

const skillMarquee = [
  { label: "Python" }, { label: "TypeScript" }, { label: "Java" },
  { label: "FastAPI" }, { label: "LangChain" }, { label: "Next.js" },
  { label: "PostgreSQL" }, { label: "Redis" }, { label: "Docker" },
  { label: "GCP" }, { label: "AWS" }, { label: "OpenAI API" },
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-10">
        <FadeUp delay={0}>
          <SectionHeader number="00" title="About Me" subtitle="Builder, learner, and occasional night-owl debugger." />
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-text-secondary leading-relaxed mb-4 text-sm">
            I&apos;m Lokesh — a third-year B.Tech CSE student at CMR Engineering College, Hyderabad,
            building toward high-impact engineering roles at AI-first companies.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4 text-sm">
            My work lives at the intersection of{" "}
            <span className="text-text-primary">AI systems</span> and{" "}
            <span className="text-text-primary">full-stack product engineering</span>. I don&apos;t
            build toy demos — I architect production-grade platforms: multi-agent frameworks with real
            tool latency budgets, multi-tenant SaaS with proper auth and quota systems, and ML
            pipelines that actually generalize.
          </p>
          <p className="text-text-secondary leading-relaxed text-sm">
            Currently training as a Cloud Engineering Trainee at{" "}
            <span className="text-text-primary">PwC Launchpad</span>, contributing to the{" "}
            <span className="text-text-primary">Hexart.in AI Research Cohort</span>, and grinding
            DSA as an <span className="text-text-primary">ElevateBox SWE Fellow</span>. When I&apos;m
            not shipping, I&apos;m reading papers, breaking things, and building again.
          </p>
        </FadeUp>
      </div>

      {/* Skills marquee */}
      <div className="py-8 border-y border-border mb-14">
        <Marquee items={skillMarquee} />
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-24 space-y-16">
        {/* Focus areas */}
        <ScrollReveal>
          <SectionHeader number="01" title="Current Focus" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {focuses.map((f, i) => (
              <ScrollReveal key={f.label} delay={i * 0.06}>
                <div className="group flex items-start gap-3 p-4 bg-bg-secondary border border-border rounded-xl hover:border-accent/30 hover:bg-accent/5 transition-all">
                  <span className="text-accent font-mono text-sm mt-0.5 shrink-0">→</span>
                  <div>
                    <p className="text-sm text-text-primary font-medium">{f.label}</p>
                    <p className="text-xs text-text-muted mt-0.5 font-mono">{f.sub}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal>
          <SectionHeader number="02" title="Timeline" />
          <div className="relative">
            <div className="absolute left-[52px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="flex gap-4 pb-7 last:pb-0 group">
                  <span className="text-xs font-mono text-text-muted w-12 shrink-0 pt-0.5 text-right">
                    {item.year}
                  </span>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-bg border-2 border-accent/60 group-hover:border-accent transition-colors" />
                    <p className="text-sm text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors">
                      {item.event}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal>
          <SectionHeader number="03" title="Education" />
          <div className="bg-bg-secondary border border-border rounded-xl p-5 hover:border-border-hover transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-text-primary mb-1">
                  B.Tech, Computer Science &amp; Engineering
                </h3>
                <p className="text-sm text-text-secondary">CMR Engineering College, Hyderabad</p>
                <p className="text-xs text-text-muted mt-1 font-mono">2023 – 2027</p>
              </div>
              <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full shrink-0">
                3rd Year
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-text-muted mb-2">Relevant Coursework</p>
              <div className="flex flex-wrap gap-1.5">
                {["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Machine Learning"].map((c) => (
                  <span key={c} className="text-[11px] font-mono text-text-muted bg-bg-tertiary border border-border px-2 py-0.5 rounded">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Certifications */}
        <ScrollReveal>
          <SectionHeader number="04" title="Certifications" />
          <div className="space-y-0">
            {certs.map((cert, i) => (
              <ScrollReveal key={cert.name} delay={i * 0.06}>
                <div className="flex items-start justify-between gap-4 py-4 border-b border-border last:border-0 group hover:bg-bg-secondary -mx-3 px-3 rounded-lg transition-colors">
                  <div>
                    <p className="text-sm text-text-primary group-hover:text-accent transition-colors">{cert.name}</p>
                    <p className="text-xs text-text-muted mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-xs font-mono text-text-muted shrink-0">{cert.year}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
