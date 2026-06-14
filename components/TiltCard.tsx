"use client";

import { useRef, ReactNode, MouseEvent } from "react";
import { motion, useSpring } from "framer-motion";

export default function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });
  const glowX = useSpring(50, { stiffness: 200, damping: 20 });
  const glowY = useSpring(50, { stiffness: 200, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    rotateX.set((y - 0.5) * -10);
    rotateY.set((x - 0.5) * 10);
    glowX.set(x * 100);
    glowY.set(y * 100);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`project-grid-item relative ${className ?? ""}`}
    >
      {/* Radial glow that follows mouse */}
      <motion.div
        className="card-glow"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(99,102,241,0.10) 0%, transparent 60%)`,
          opacity: 1,
        }}
      />
      {children}
    </motion.div>
  );
}
