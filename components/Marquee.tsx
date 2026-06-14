"use client";

import { ReactNode } from "react";
import { clsx } from "clsx";

interface MarqueeProps {
  items: { label: string; icon?: ReactNode }[];
  reverse?: boolean;
  className?: string;
  gap?: number;
}

export default function Marquee({ items, reverse = false, className, gap = 6 }: MarqueeProps) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={clsx("marquee-container w-full", className)}>
      <div className={clsx("marquee-track", reverse && "marquee-track-reverse")} style={{ gap: `${gap * 4}px` }}>
        {doubled.map((item, i) => (
          <span key={i} className="skill-pill">
            {item.icon && <span className="opacity-70">{item.icon}</span>}
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
