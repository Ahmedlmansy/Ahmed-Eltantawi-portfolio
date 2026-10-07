"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function useInViewOnce<T extends Element = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}
