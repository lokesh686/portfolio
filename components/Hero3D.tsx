"use client";

import { useRef } from "react";
import type { ReactNode, MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { clsx } from "clsx";

function useTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    stiffness: 140,
    damping: 18,
    mass: 0.7,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), {
    stiffness: 140,
    damping: 18,
    mass: 0.7,
  });

  return { x, y, rotateX, rotateY };
}

function FloatingCard({
  children,
  className,
  depth,
}: {
  children?: ReactNode;
  className: string;
  depth: string;
}) {
  return (
    <motion.div
      className={clsx(
        "absolute rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl shadow-black/25",
        className
      )}
      style={{ transform: `translateZ(${depth})` }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero3D({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { x, y, rotateX, rotateY } = useTilt();
  const glowX = useTransform(x, [-0.5, 0.5], ["35%", "65%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["30%", "70%"]);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;

    const nextX = (event.clientX - rect.left) / rect.width - 0.5;
    const nextY = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(nextX);
    y.set(nextY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={clsx(
        "relative overflow-hidden rounded-[2rem] border border-border bg-bg-secondary/70 p-6 sm:p-8",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_80px_rgba(0,0,0,0.35)]",
        className
      )}
      style={{ perspective: 1400 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(99,102,241,0.20), transparent 34%), radial-gradient(circle at 50% 0%, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <FloatingCard
          depth="70px"
          className="left-[6%] top-[10%] w-24 h-24 sm:w-28 sm:h-28 rounded-full border-accent/20 bg-accent/10"
        />
        <FloatingCard
          depth="110px"
          className="right-[10%] top-[12%] w-28 sm:w-32 h-16 rotate-12 bg-white/[0.04]"
        >
          <div className="h-full w-full flex items-center justify-center text-[10px] font-mono tracking-[0.3em] text-text-muted">
            3D / MOTION
          </div>
        </FloatingCard>
        <FloatingCard
          depth="140px"
          className="right-[4%] bottom-[8%] w-28 sm:w-36 h-20 -rotate-6 bg-bg-tertiary/80"
        >
          <div className="h-full w-full px-3 py-2 flex flex-col justify-between">
            <span className="text-[10px] font-mono text-text-muted">depth</span>
            <span className="text-sm font-medium text-text-primary">tilt + parallax</span>
          </div>
        </FloatingCard>
        <motion.div
          className="absolute inset-[12%] rounded-[2rem] border border-white/10 bg-white/[0.03]"
          style={{ transform: "translateZ(40px)" }}
        />
        <motion.div
          className="absolute inset-[18%] rounded-[1.5rem] border border-white/5"
          style={{ transform: "translateZ(10px)" }}
        />
      </motion.div>

      <div className="relative z-10" style={{ transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </section>
  );
}
