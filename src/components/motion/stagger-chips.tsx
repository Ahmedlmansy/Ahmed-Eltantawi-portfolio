"use client";

import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { distance, duration, ease, stagger, viewport } from "@/lib/motion-tokens";

export function StaggerChips({ items }: { items: string[] }) {
  const reducedMotion = useReducedMotion();
  const itemVariants: Variants = reducedMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: duration.instant } },
      }
    : {
        hidden: { opacity: 0, y: distance.sm },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: duration.base, ease: ease.out },
        },
      };

  return (
    <motion.div
      className="flex flex-wrap gap-1.5"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: reducedMotion ? 0 : stagger.tight },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {items.map((item) => (
        <motion.span
          key={item}
          variants={itemVariants}
          className="rounded-full border border-hairline bg-section px-3 py-1 text-xs font-medium text-ink-secondary transition-colors hover:bg-sage-soft hover:text-sage-dark"
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
}
