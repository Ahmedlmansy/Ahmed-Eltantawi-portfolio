"use client";

import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { Hero } from "@/types";
import { HeroDeviceScreen } from "@/components/sections/hero-device-screen";

type Preview = NonNullable<Hero["preview"]>;

export default function HeroPhoneCanvas({ preview }: { preview: Preview }) {
  const pointerX = useMotionValue(0); 
  const pointerY = useMotionValue(0); 
  const idle = useMotionValue(-6);

  const spring = { stiffness: 120, damping: 18, mass: 0.6 };
  const px = useSpring(pointerX, spring);
  const py = useSpring(pointerY, spring);

  const rotateY = useTransform([px, idle], ([p, i]: number[]) => p * 18 + i);
  const rotateX = useTransform(py, (p) => -p * 10 + 3);
  const glare = useTransform(px, [-1, 1], ["0%", "100%"]);

  useEffect(() => {
    const controls = animate(idle, 6, {
      duration: 4.5,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [idle]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    pointerX.set(((e.clientX - r.left) / r.width) * 2 - 1);
    pointerY.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };
  const onLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      className="relative flex h-[660px] w-full max-w-[390px] items-center justify-center touch-pan-y"
      style={{ perspective: 1200 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      aria-label="Interactive 3D mobile application preview"
      role="img"
    >
      <motion.div
        className="relative"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
   
        <div
          className="absolute inset-0 rounded-[48px] bg-[#263238]"
          style={{ transform: "translateZ(-16px)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 rounded-[48px] bg-[#9aa5a0]"
          style={{ transform: "translateZ(-8px)" }}
          aria-hidden="true"
        />

        <div style={{ transform: "translateZ(0)" }}>
          <HeroDeviceScreen preview={preview} />
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[48px]"
          style={{
            transform: "translateZ(2px)",
            background: useTransform(
              glare,
              (g) =>
                `linear-gradient(115deg, transparent calc(${g} - 25%), rgba(255,255,255,0.18) ${g}, transparent calc(${g} + 25%))`,
            ),
          }}
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
