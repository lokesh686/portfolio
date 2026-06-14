import Link from "next/link";
import { FadeUp } from "@/components/Motion";
import { featuredProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Hero3D from "@/components/Hero3D";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/lokesh686",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/vodnala-lokesh-a6b367227",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Peerlist",
    href: "https://peerlist.io",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" opacity="0.2" />
        <text x="12" y="16" textAnchor="middle" fontSize="11" fill="currentColor" fontWeight="bold">P</text>
      </svg>
    ),
  },
  {
    label: "Twitter/X",
    href: "https://twitter.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      {/* Hero */}
      <Hero3D className="mb-24">
        <FadeUp delay={0}>
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-text-secondary">
              available for internships &amp; placements · 2027
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary mb-4 leading-[1.15]">
            Lokesh Vodnala
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
            Full-Stack &amp; AI Engineer building{" "}
            <span className="text-text-primary">autonomous agents</span>,{" "}
            <span className="text-text-primary">RAG pipelines</span>, and{" "}
            <span className="text-text-primary">production SaaS</span>. B.Tech
            CSE @ CMR Engineering College · Cloud Trainee @ PwC.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Link
              href="/projects"
              className="px-4 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-bg-secondary hover:bg-bg-tertiary border border-border text-text-primary text-sm font-medium rounded-lg transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="flex items-center gap-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 text-text-muted hover:text-text-primary transition-colors rounded-md hover:bg-bg-secondary"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </FadeUp>
      </Hero3D>

      {/* Featured Projects */}
      <section>
        <FadeUp delay={0.5}>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-mono text-accent">01</span>
            <div className="h-px flex-1 bg-border" />
            <Link
              href="/projects"
              className="text-xs text-text-muted hover:text-accent transition-colors font-mono"
            >
              all projects →
            </Link>
          </div>
          <h2 className="text-lg font-semibold text-text-primary mb-6">
            Featured Projects
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featuredProjects.map((project, i) => (
            <FadeUp key={project.slug} delay={0.6 + i * 0.07}>
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
