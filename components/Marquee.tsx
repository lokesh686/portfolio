"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  duration?: number;
}

export function Marquee({ items, duration = 30 }: MarqueeProps) {
  const repeatedItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex gap-8 whitespace-nowrap"
      >
        {repeatedItems.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-lg font-medium text-text-secondary">
              {item}
            </span>
            <span className="text-accent">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
