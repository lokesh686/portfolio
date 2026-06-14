"use client";

import { useEffect, useState, useCallback } from "react";

const phrases = [
  "autonomous AI agents.",
  "RAG pipelines.",
  "production SaaS.",
  "multi-agent systems.",
  "full-stack products.",
];

export default function TypewriterHero() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  const tick = useCallback(() => {
    const current = phrases[phraseIdx];
    if (paused) return;

    if (!deleting) {
      if (charIdx < current.length) {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else {
        setPaused(true);
        setTimeout(() => {
          setDeleting(true);
          setPaused(false);
        }, 1800);
      }
    } else {
      if (charIdx > 0) {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setPhraseIdx((p) => (p + 1) % phrases.length);
      }
    }
  }, [charIdx, deleting, paused, phraseIdx]);

  useEffect(() => {
    const speed = deleting ? 38 : 60;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, deleting]);

  return (
    <span className="text-accent">
      {displayed}
      <span className="typed-cursor text-accent">|</span>
    </span>
  );
}
