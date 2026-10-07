import type { Variants } from "framer-motion";
import { distance, duration, ease, stagger as staggerToken } from "@/lib/motion-tokens";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: distance.md },
  show: { opacity: 1, y: 0, transition: { duration: duration.reveal, ease: ease.out } },
};

export const fadeUpReduced: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: duration.instant } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: staggerToken.base } },
};

export const staggerReduced: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0 } },
};
