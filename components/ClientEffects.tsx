"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";

export default function ClientEffects() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const mouseX = useSpring(0, { stiffness: 800, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 800, damping: 50 });
  const ringX = useSpring(0, { stiffness: 120, damping: 22 });
  const ringY = useSpring(0, { stiffness: 120, damping: 22 });

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const onMouseMove = useCallback((e: MouseEvent) => {
    const { clientX: x, clientY: y } = e;
    mouseX.set(x);
    mouseY.set(y);
    ringX.set(x);
    ringY.set(y);
    if (glowRef.current) {
      glowRef.current.style.left = `${x}px`;
      glowRef.current.style.top = `${y}px`;
    }
  }, [mouseX, mouseY, ringX, ringY]);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Hover detection for interactive elements
    const addHover = () => {
      dotRef.current?.classList.add("hovered");
      ringRef.current?.classList.add("hovered");
    };
    const removeHover = () => {
      dotRef.current?.classList.remove("hovered");
      ringRef.current?.classList.remove("hovered");
    };

    const targets = "a, button, [role=button], input, textarea, select, label, [data-cursor-hover]";
    document.querySelectorAll<HTMLElement>(targets).forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    // Observer for dynamically added elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>(targets).forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, [onMouseMove]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Cursor dot */}
      <motion.div
        ref={dotRef}
        className="cursor-dot"
        style={{ x: mouseX, y: mouseY }}
      />

      {/* Cursor ring (lagged) */}
      <motion.div
        ref={ringRef}
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
      />

      {/* Ambient glow that follows mouse */}
      <div ref={glowRef} className="glow-bg" />
    </>
  );
}
