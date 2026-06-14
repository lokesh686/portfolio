import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp } from "@/components/Motion";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing by Lokesh Vodnala on AI, engineering, and building.",
};

// Replace these with your actual Hashnode/Dev.to posts later
const posts: {
  title: string;
  date: string;
  description: string;
  href: string;
  tag: string;
}[] = [
  // Example — add your own posts here:
  // {
  //   title: "Building a production MCP agent from scratch",
  //   date: "Dec 2025",
  //   description: "How I architected a 15-tool autonomous developer agent using the Model Context Protocol.",
  //   href: "https://hashnode.com/@lokesh",
  //   tag: "AI",
  // },
];

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">
      <FadeUp delay={0}>
        <SectionHeader
          number="04"
          title="Blog"
          subtitle="Writing on AI engineering, system design, and building in public."
        />
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="flex gap-3 mb-10">
          <a
            href="https://hashnode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-xs font-mono bg-bg-secondary border border-border text-text-secondary hover:text-accent hover:border-accent transition-colors rounded-md"
          >
            Hashnode ↗
          </a>
          <a
            href="https://dev.to"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-xs font-mono bg-bg-secondary border border-border text-text-secondary hover:text-accent hover:border-accent transition-colors rounded-md"
          >
            Dev.to ↗
          </a>
        </div>
      </FadeUp>

      {posts.length > 0 ? (
        <div className="space-y-px">
          {posts.map((post, i) => (
            <FadeUp key={post.title} delay={0.2 + i * 0.07}>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-6 py-5 border-b border-border hover:bg-bg-secondary -mx-4 px-4 rounded-lg transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-accent bg-accent-muted px-2 py-0.5 rounded">
                      {post.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors mb-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-text-muted">{post.description}</p>
                </div>
                <span className="text-xs font-mono text-text-muted shrink-0 pt-0.5">{post.date}</span>
              </a>
            </FadeUp>
          ))}
        </div>
      ) : (
        <FadeUp delay={0.2}>
          <div className="text-center py-20 border border-dashed border-border rounded-xl">
            <p className="text-text-muted text-sm mb-2">No posts yet.</p>
            <p className="text-text-muted text-xs">
              Writing coming soon — follow on{" "}
              <a href="https://hashnode.com" className="text-accent hover:underline">
                Hashnode
              </a>{" "}
              for updates.
            </p>
          </div>
        </FadeUp>
      )}

      <FadeUp delay={0.4}>
        <div className="mt-12 p-5 bg-bg-secondary border border-border rounded-xl">
          <p className="text-sm text-text-secondary mb-1">Want to write together?</p>
          <p className="text-xs text-text-muted mb-3">
            I&apos;m open to guest posts, technical collaborations, and co-authoring on AI topics.
          </p>
          <Link
            href="/contact"
            className="text-xs text-accent hover:underline font-mono"
          >
            Get in touch →
          </Link>
        </div>
      </FadeUp>
    </div>
  );
}
