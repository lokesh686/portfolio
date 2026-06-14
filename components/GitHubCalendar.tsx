"use client";

import { motion } from "framer-motion";

interface GitHubCalendarProps {
  username: string;
}

export function GitHubCalendar({ username }: GitHubCalendarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="w-full"
    >
      <div className="bg-bg-tertiary border border-border rounded-xl p-8 text-center">
        <p className="text-text-secondary mb-4">
          GitHub contribution graph
        </p>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-colors"
        >
          View on GitHub
        </a>
      </div>
    </motion.div>
  );
}
