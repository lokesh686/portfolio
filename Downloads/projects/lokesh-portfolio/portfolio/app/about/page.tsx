import type { Metadata } from "next";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Motion";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description: "About Lokesh Vodnala — B.Tech CSE student, AI engineer, and full-stack builder.",
};

const timeline = [
  {
    year: "2023",
    event: "Started B.Tech CSE at CMR Engineering College, Hyderabad",
  },
  {
    year: "2024",
    event: "Joined ElevateBox SWE Fellowship — 100+ DSA problems, production MERN deployments",
  },
  {
    year: "2025",
    event: "Earned Oracle Cloud AI Foundations & Google Cloud Engineering certifications",
  },
  {
    year: "2025",
    event: "Competitively selected for PwC Launchpad Cloud Engineering track",
  },
  {
    year: "2025",
    event: "Selected for Hexart.in AI Research & Innovation Cohort",
  },
  {
    year: "2025",
    event: "Shipped AgentFlow Pro — MCP-based autonomous developer agent with 15+ tools",
  },
  {
    year: "2027",
    event: "Graduating · Targeting AI-first and product-focused engineering roles",
  },
];

const focuses = [
  "Autonomous Agent Systems (MCP, LangGraph, CrewAI)",
  "RAG Pipelines & Vector Databases (pgvector, Chroma, FAISS)",
  "Full-Stack SaaS (Next.js, FastAPI, PostgreSQL, Redis)",
  "Cloud Infrastructure (GCP, AWS, Docker, CI/CD)",
  "ML Systems (ensemble classifiers, NLP pipelines)",
];

const certs = [
  { name: "Google Cloud – Cloud Engineering Certificate", issuer: "Google Career Certificates", year: "2025" },
  { name: "Oracle Cloud Infrastructure AI Foundations Associate", issuer: "Oracle", year: "2025" },
  { name: "JPMorgan Chase Software Engineering Job Simulation", issuer: "Forage", year: "2024" },
  { name: "Deloitte Australia Technology Job Simulation", issuer: "Forage", year: "2024" },
  { name: "AI Foundation & Advanced Training", issuer: "Li2 Edu / Hexagon", year: "2025" },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">
      <FadeUp delay={0}>
        <SectionHeader
          number="00"
          title="About Me"
          subtitle="Builder, learner, and occasionally a night-owl debugger."
        />
      </FadeUp>

      {/* Bio */}
      <FadeUp delay={0.1}>
        <div className="prose prose-sm max-w-none mb-16">
          <p className="text-text-secondary leading-relaxed mb-4">
            I&apos;m Lokesh — a third-year B.Tech CSE student at CMR Engineering College,
            Hyderabad, building toward high-impact engineering roles at AI-first companies.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            My work lives at the intersection of <span className="text-text-primary">AI systems</span> and{" "}
            <span className="text-text-primary">full-stack product engineering</span>. I don&apos;t just build
            toy demos — I architect production-grade platforms: multi-agent frameworks with real
            tool latency budgets, multi-tenant SaaS with proper auth and quota systems, and ML
            pipelines that actually generalize.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Currently training as a Cloud Engineering Trainee at <span className="text-text-primary">PwC Launchpad</span>,
            contributing to the <span className="text-text-primary">Hexart.in AI Research Cohort</span>, and
            grinding DSA as an <span className="text-text-primary">ElevateBox SWE Fellow</span>.
            When I&apos;m not shipping, I&apos;m learning — reading papers, breaking things, and building again.
          </p>
        </div>
      </FadeUp>

      {/* Current Focus */}
      <FadeUp delay={0.2}>
        <div className="mb-16">
          <SectionHeader number="01" title="Current Focus" />
          <StaggerContainer className="space-y-2">
            {focuses.map((f) => (
              <StaggerItem key={f}>
                <div className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
                  <span className="text-accent font-mono text-sm mt-0.5">→</span>
                  <span className="text-sm text-text-secondary">{f}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeUp>

      {/* Timeline */}
      <FadeUp delay={0.3}>
        <div className="mb-16">
          <SectionHeader number="02" title="Timeline" />
          <div className="relative space-y-0">
            <div className="absolute left-[52px] top-2 bottom-2 w-px bg-border" />
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 pb-6 last:pb-0">
                <span className="text-xs font-mono text-text-muted w-12 shrink-0 pt-0.5 text-right">
                  {item.year}
                </span>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-bg border-2 border-accent" />
                  <p className="text-sm text-text-secondary leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Education */}
      <FadeUp delay={0.4}>
        <div className="mb-16">
          <SectionHeader number="03" title="Education" />
          <div className="bg-bg-secondary border border-border rounded-xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-medium text-text-primary mb-1">
                  B.Tech, Computer Science &amp; Engineering
                </h3>
                <p className="text-sm text-text-secondary">CMR Engineering College, Hyderabad</p>
                <p className="text-xs text-text-muted mt-1 font-mono">2023 – 2027</p>
              </div>
              <span className="text-xs font-mono text-accent bg-accent-muted px-2.5 py-1 rounded-full shrink-0">
                3rd Year
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-text-muted mb-2">Relevant Coursework</p>
              <div className="flex flex-wrap gap-1.5">
                {["DSA", "OOP", "DBMS", "OS", "Computer Networks", "Machine Learning"].map((c) => (
                  <span key={c} className="text-[11px] font-mono text-text-muted bg-bg-tertiary border border-border px-2 py-0.5 rounded">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Certifications */}
      <FadeUp delay={0.5}>
        <div>
          <SectionHeader number="04" title="Certifications" />
          <StaggerContainer className="space-y-3">
            {certs.map((cert) => (
              <StaggerItem key={cert.name}>
                <div className="flex items-start justify-between gap-4 py-3 border-b border-border last:border-0">
                  <div>
                    <p className="text-sm text-text-primary">{cert.name}</p>
                    <p className="text-xs text-text-muted mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-xs font-mono text-text-muted shrink-0">{cert.year}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeUp>
    </div>
  );
}
