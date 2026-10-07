"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { spring } from "@/lib/motion-tokens";

export function HoverLift({ children, className }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      whileHover={reducedMotion ? undefined : { y: -4 }}
      transition={spring.soft}
    >
      {children}
    </motion.div>
  );
}
