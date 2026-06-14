import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CommandMenu from "@/components/CommandMenu";
import { Code, Briefcase, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Lokesh Vodnala — Full-Stack & AI Engineer",
    template: "%s | Lokesh Vodnala",
  },
  description:
    "B.Tech CSE student building production-grade AI systems, RAG pipelines, and autonomous agents. Cloud Engineering Trainee at PwC.",
  keywords: [
    "Lokesh Vodnala",
    "AI Engineer",
    "Full Stack Developer",
    "Next.js",
    "FastAPI",
    "LangChain",
    "CMR Engineering College",
  ],
  authors: [{ name: "Lokesh Vodnala" }],
  creator: "Lokesh Vodnala",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lokeshvodnala.dev",
    title: "Lokesh Vodnala — Full-Stack & AI Engineer",
    description:
      "B.Tech CSE student building production-grade AI systems, RAG pipelines, and autonomous agents.",
    siteName: "Lokesh Vodnala",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokesh Vodnala — Full-Stack & AI Engineer",
    description:
      "B.Tech CSE student building production-grade AI systems, RAG pipelines, and autonomous agents.",
    creator: "@lokesh_vodnala",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg text-text-primary font-sans">
        <CommandMenu />
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <footer className="border-t border-border py-12 mt-24">
          <div className="max-w-6xl mx-auto px-6">
            {/* Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* About Section */}
              <div>
                <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
                  About
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Building production-grade AI systems and full-stack products. Currently a Cloud Engineering Trainee at PwC.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {[
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                    { label: "Projects", href: "/projects" },
                    { label: "Contact", href: "/contact" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-text-secondary hover:text-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
                  Connect
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/lokesh686"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-text-secondary hover:text-accent hover:bg-bg-secondary rounded-lg transition-colors"
                    aria-label="GitHub"
                  >
                    <Code size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/vodnala-lokesh-a6b367227"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-text-secondary hover:text-accent hover:bg-bg-secondary rounded-lg transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Briefcase size={18} />
                  </a>
                  <a
                    href="mailto:vodnalalokesh232@gmail.com"
                    className="p-2 text-text-secondary hover:text-accent hover:bg-bg-secondary rounded-lg transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-text-secondary text-sm">
                © {new Date().getFullYear()} Lokesh Vodnala
              </span>
              <span className="text-text-muted text-sm">
                Built with Next.js · Tailwind · Framer Motion
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
