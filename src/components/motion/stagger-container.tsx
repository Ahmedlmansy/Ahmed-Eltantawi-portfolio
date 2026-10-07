"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { viewport } from "@/lib/motion-tokens";
import { fadeUp, fadeUpReduced, stagger, staggerReduced } from "@/lib/motion-variants";

export function StaggerContainer({ children, className }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reducedMotion ? staggerReduced : stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();
  return <motion.div className={className} variants={reducedMotion ? fadeUpReduced : fadeUp}>{children}</motion.div>;
}
