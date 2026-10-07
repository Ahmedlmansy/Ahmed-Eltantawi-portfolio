"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimationControls } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { distance, duration, ease, stagger } from "@/lib/motion-tokens";

export function RevealText({ text, className }: { text: string; className?: string }) {
  const reducedMotion = useReducedMotion();
  const controls = useAnimationControls();
  const words = text.split(" ");

  useEffect(() => {
    if (reducedMotion) {
      controls.set("visible");
      return;
    }

    controls.set("hidden");
    const frame = requestAnimationFrame(() => {
      void controls.start("visible");
    });

    return () => cancelAnimationFrame(frame);
  }, [controls, reducedMotion]);

  return (
    <motion.h1
      className={className}
      initial={false}
      animate={controls}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reducedMotion ? 0 : stagger.tight } },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="mr-[0.25em] inline-block"
          variants={{
            hidden: { opacity: 0, y: reducedMotion ? 0 : distance.sm },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: reducedMotion ? duration.instant : duration.base,
                ease: ease.out,
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
