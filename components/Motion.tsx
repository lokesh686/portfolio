"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { ReactNode } from "react";

const EASING = [0.22, 1, 0.36, 1] as const;

// Helper to check for reduced motion preference
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// FadeUp: Entrance animation with stagger support
interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeUp({ children, delay = 0, duration = 0.6, className = "" }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReducedMotion() ? 0 : duration,
        ease: EASING,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// FadeIn: Simple fade entrance
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, duration = 0.4, className = "" }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: prefersReducedMotion() ? 0 : duration,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ScrollReveal: Reveal on scroll with viewport detection
interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.7,
  yOffset = 40,
  className = "",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: prefersReducedMotion() ? 0 : duration,
        ease: EASING,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// StaggerContainer: Parent container for staggered children
interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className = "",
}: StaggerContainerProps) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// StaggerItem: Child item within StaggerContainer
interface StaggerItemProps {
  children: ReactNode;
  duration?: number;
  className?: string;
}

export function StaggerItem({ children, duration = 0.6, className = "" }: StaggerItemProps) {
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion() ? 0 : duration,
        ease: EASING,
      },
    },
  };

  return <motion.div variants={item} className={className}>{children}</motion.div>;
}

// PageTransition: Wrapper for page-level transitions
interface PageTransitionProps {
  children: ReactNode;
  duration?: number;
}

export function PageTransition({ children, duration = 0.3 }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{
          duration: prefersReducedMotion() ? 0 : duration,
          ease: EASING,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// HoverScale: Hover scale animation for interactive elements
interface HoverScaleProps {
  children: ReactNode;
  scale?: number;
  duration?: number;
  className?: string;
}

export function HoverScale({
  children,
  scale = 1.02,
  duration = 0.2,
  className = "",
}: HoverScaleProps) {
  return (
    <motion.div
      whileHover={prefersReducedMotion() ? {} : { scale }}
      transition={{ duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
