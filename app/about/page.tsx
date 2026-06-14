import type { Metadata } from "next";
import { FadeUp, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Motion";
import { GitHubCalendar } from "@/components/GitHubCalendar";
import { timeline, focuses, certifications } from "@/lib/data/experience";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Lokesh Vodnala — B.Tech CSE student, AI engineer, and full-stack builder building production-grade systems.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-32 md:py-40">
        <FadeUp delay={0}>
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            About Me
          </h1>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
            Builder, learner, and occasionally a night-owl debugger. I'm passionate about
            creating production-grade systems that solve real problems.
          </p>
        </FadeUp>
      </section>

      {/* Bio Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <FadeUp delay={0}>
              <h2 className="text-3xl font-bold text-text-primary mb-8">
                Who I Am
              </h2>
            </FadeUp>

            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <FadeUp delay={0.1}>
                <p>
                  I'm Lokesh — a third-year B.Tech CSE student at CMR Engineering College,
                  Hyderabad, building toward high-impact engineering roles at AI-first companies.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p>
                  My work lives at the intersection of <span className="text-text-primary font-semibold">AI systems</span> and{" "}
                  <span className="text-text-primary font-semibold">full-stack product engineering</span>. I don't just build
                  toy demos — I architect production-grade platforms: multi-agent frameworks with real
                  tool latency budgets, multi-tenant SaaS with proper auth and quota systems, and ML
                  pipelines that actually generalize.
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <p>
                  Currently training as a Cloud Engineering Trainee at <span className="text-text-primary font-semibold">PwC Launchpad</span>,
                  contributing to the <span className="text-text-primary font-semibold">Hexart.in AI Research Cohort</span>, and
                  grinding DSA as an <span className="text-text-primary font-semibold">ElevateBox SWE Fellow</span>.
                  When I'm not shipping, I'm learning — reading papers, breaking things, and building again.
                </p>
              </FadeUp>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <FadeUp delay={0.1}>
              <div className="bg-bg-secondary border border-border rounded-2xl p-6">
                <div className="text-4xl font-bold text-accent mb-2">12+</div>
                <p className="text-sm text-text-secondary">Projects Shipped</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-bg-secondary border border-border rounded-2xl p-6">
                <div className="text-4xl font-bold text-accent mb-2">3+</div>
                <p className="text-sm text-text-secondary">Years of Experience</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="bg-bg-secondary border border-border rounded-2xl p-6">
                <div className="text-4xl font-bold text-accent mb-2">5</div>
                <p className="text-sm text-text-secondary">Certifications Earned</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <FadeUp delay={0}>
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Current Focus
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {focuses.map((focus) => (
            <StaggerItem key={focus}>
              <ScrollReveal>
                <div className="bg-bg-secondary border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="text-accent font-bold text-2xl mt-1">→</span>
                    <p className="text-text-secondary leading-relaxed">{focus}</p>
                  </div>
                </div>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Timeline Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <FadeUp delay={0}>
          <h2 className="text-3xl font-bold text-text-primary mb-12">
            Timeline
          </h2>
        </FadeUp>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`flex gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className="flex-1 md:w-1/2">
                    <div className="bg-bg-secondary border border-border rounded-2xl p-6 relative">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[17px] md:left-auto md:-right-[17px] top-8 w-4 h-4 rounded-full bg-accent border-4 border-bg" />

                      <div className="flex items-start justify-between gap-4 mb-3">
                        <span className="text-sm font-mono text-accent font-bold">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        {item.event}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for odd items */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <FadeUp delay={0}>
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Education
          </h2>
        </FadeUp>

        <ScrollReveal>
          <div className="bg-bg-secondary border border-border rounded-2xl p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  B.Tech, Computer Science & Engineering
                </h3>
                <p className="text-text-secondary mb-2">
                  CMR Engineering College, Hyderabad
                </p>
                <p className="text-sm text-text-muted font-mono">2023 – 2027</p>
              </div>
              <span className="text-sm font-mono text-accent bg-accent-muted px-4 py-2 rounded-full whitespace-nowrap">
                3rd Year
              </span>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-sm text-text-muted font-mono uppercase tracking-wider mb-4">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "DSA",
                  "OOP",
                  "DBMS",
                  "OS",
                  "Computer Networks",
                  "Machine Learning",
                  "Web Development",
                  "Cloud Computing",
                ].map((course) => (
                  <span
                    key={course}
                    className="text-sm font-mono text-text-secondary bg-bg-tertiary border border-border px-3 py-1.5 rounded-lg"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Certifications Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <FadeUp delay={0}>
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Certifications
          </h2>
        </FadeUp>

        <StaggerContainer className="space-y-4">
          {certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <ScrollReveal>
                <div className="bg-bg-secondary border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-text-secondary">{cert.issuer}</p>
                    </div>
                    <span className="text-sm font-mono text-text-muted whitespace-nowrap">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* GitHub Contributions Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <FadeUp delay={0}>
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            GitHub Contributions
          </h2>
        </FadeUp>

        <ScrollReveal>
          <div className="bg-bg-secondary border border-border rounded-2xl p-8">
            <GitHubCalendar username="lokesh686" />
            <p className="text-sm text-text-secondary text-center mt-8">
              Contributions over the last year. View more on{" "}
              <a
                href="https://github.com/lokesh686"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-3xl p-12 md:p-16 text-center">
            <FadeUp delay={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Let's Connect
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
                Interested in collaborating or just want to chat about tech, AI, or
                building products? Reach out!
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <a
                href="mailto:vodnalalokesh232@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-colors"
              >
                Send me an email
                <ArrowRight size={18} />
              </a>
            </FadeUp>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
