import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CommandMenu from "@/components/CommandMenu";
import ClientEffects from "@/components/ClientEffects";

export const metadata: Metadata = {
  title: {
    default: "Lokesh Vodnala — Full-Stack & AI Engineer",
    template: "%s | Lokesh Vodnala",
  },
  description:
    "B.Tech CSE student building production-grade AI systems, RAG pipelines, and autonomous agents. Cloud Engineering Trainee at PwC.",
  keywords: [
    "Lokesh Vodnala", "AI Engineer", "Full Stack Developer",
    "Next.js", "FastAPI", "LangChain", "CMR Engineering College",
  ],
  authors: [{ name: "Lokesh Vodnala" }],
  creator: "Lokesh Vodnala",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lokeshvodnala.dev",
    title: "Lokesh Vodnala — Full-Stack & AI Engineer",
    description: "B.Tech CSE student building production-grade AI systems, RAG pipelines, and autonomous agents.",
    siteName: "Lokesh Vodnala",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokesh Vodnala — Full-Stack & AI Engineer",
    description: "B.Tech CSE student building production-grade AI systems, RAG pipelines, and autonomous agents.",
    creator: "@lokesh_vodnala",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-bg text-text-primary font-sans">
        {/* Global animation effects: cursor, glow, scroll bar */}
        <ClientEffects />
        <CommandMenu />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="border-t border-border py-8 mt-8">
          <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-text-secondary text-sm font-mono">
              © {new Date().getFullYear()} <span className="text-accent">Lokesh Vodnala</span>
            </span>
            <div className="flex items-center gap-4 text-xs text-text-muted font-mono">
              <span>Next.js 14</span>
              <span className="text-border">·</span>
              <span>Tailwind</span>
              <span className="text-border">·</span>
              <span>Framer Motion</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
