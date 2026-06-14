import type { Metadata } from "next";
import { FadeUp, ScrollReveal } from "@/components/Motion";
import { ContactForm } from "@/components/ContactForm";
import { Code, Briefcase, MapPin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lokesh Vodnala. Let's discuss your project or collaboration opportunity.",
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "vodnalalokesh232@gmail.com",
    href: "mailto:vodnalalokesh232@gmail.com",
    description: "Best for detailed inquiries",
  },
  {
    icon: Code,
    label: "GitHub",
    value: "@lokesh686",
    href: "https://github.com/lokesh686",
    description: "Check out my projects",
  },
  {
    icon: Briefcase,
    label: "LinkedIn",
    value: "Lokesh Vodnala",
    href: "https://linkedin.com/in/vodnala-lokesh-a6b367227",
    description: "Connect professionally",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: "#",
    description: "Based in India",
  },
];

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-32 md:py-40">
        <FadeUp delay={0}>
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Let's Connect
          </h1>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
            Have an interesting project in mind? Want to collaborate or just chat about
            tech? I'd love to hear from you. Reach out through any of the channels below.
          </p>
        </FadeUp>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <FadeUp delay={0}>
              <h2 className="text-2xl font-bold text-text-primary mb-8">
                Send me a Message
              </h2>
            </FadeUp>

            <ScrollReveal>
              <div className="bg-bg-secondary border border-border rounded-2xl p-8">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Methods */}
          <div>
            <FadeUp delay={0}>
              <h2 className="text-2xl font-bold text-text-primary mb-8">
                Other Ways to Reach
              </h2>
            </FadeUp>

            <div className="space-y-4">
              {contactMethods.map((method, i) => {
                const Icon = method.icon;
                return (
                  <ScrollReveal key={method.label} delay={i * 0.1}>
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        method.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block bg-bg-secondary border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-bg-tertiary rounded-lg group-hover:bg-accent/10 transition-colors">
                          <Icon
                            size={20}
                            className="text-accent group-hover:text-accent-hover transition-colors"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-text-primary mb-1">
                            {method.label}
                          </h3>
                          <p className="text-sm text-text-secondary break-all">
                            {method.value}
                          </p>
                          <p className="text-xs text-text-muted mt-2">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-3xl p-12 md:p-16">
            <FadeUp delay={0}>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Response Time
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-lg text-text-secondary mb-6">
                I typically respond to messages within 24-48 hours. For urgent matters,
                feel free to reach out on LinkedIn or GitHub.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-text-secondary">
                  Currently available for new projects and collaborations
                </span>
              </div>
            </FadeUp>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
