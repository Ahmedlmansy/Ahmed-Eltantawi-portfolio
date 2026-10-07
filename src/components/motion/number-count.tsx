"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { duration, ease, viewport } from "@/lib/motion-tokens";

export function NumberCount({ value }: { value: string }) {
  const target = Number(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, viewport);
  const reducedMotion = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    String(Math.round(latest)).padStart(value.length, "0"),
  );

  useEffect(() => {
    if (!Number.isFinite(target)) return;
    if (reducedMotion) {
      count.set(target);
      return;
    }
    if (!inView) return;

    const animation = animate(count, target, {
      duration: duration.count,
      ease: ease.out,
    });

    return () => animation.stop();
  }, [count, inView, reducedMotion, target]);

  if (!/^\d+$/.test(value)) return <span>{value}</span>;

  return (
    <motion.span ref={ref} aria-hidden="true">
      {rounded}
    </motion.span>
  );
}
