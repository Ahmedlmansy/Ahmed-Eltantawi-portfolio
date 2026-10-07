"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, stagger } from "@/lib/motion-variants";

export function StaggerContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={fadeUp}>{children}</motion.div>;
}
