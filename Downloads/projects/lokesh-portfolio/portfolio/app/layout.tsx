import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CommandMenu from "@/components/CommandMenu";

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
        <main className="min-h-screen">{children}</main>
        <footer className="border-t border-border py-8 mt-24">
          <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-text-secondary text-sm">
              © {new Date().getFullYear()} Lokesh Vodnala
            </span>
            <span className="text-text-muted text-sm">
              Built with Next.js · Tailwind · Framer Motion
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
