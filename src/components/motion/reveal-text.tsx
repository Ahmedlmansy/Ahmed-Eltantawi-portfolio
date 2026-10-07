"use client";
import { motion } from "framer-motion";

export function RevealText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="mr-[0.25em] inline-block"
          variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        >
          {w}
        </motion.span>
      ))}
    </motion.h1>
  );
}
