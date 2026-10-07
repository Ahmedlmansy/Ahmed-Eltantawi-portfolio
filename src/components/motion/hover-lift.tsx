"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function HoverLift({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
      {children}
    </motion.div>
  );
}
