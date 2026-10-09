"use client";

import dynamic from "next/dynamic";
import type { Hero } from "@/types";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { HeroDeviceScreen } from "@/components/sections/hero-device-screen";

type Preview = NonNullable<Hero["preview"]>;

const HeroPhoneCanvas = dynamic(() => import("./hero-phone-canvas"), {
  ssr: false,
  loading: () => null,
});

export function HeroDevice({ preview }: { preview: Preview }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <HeroDeviceScreen preview={preview} />;
  }

  return <HeroPhoneCanvas preview={preview} />;
}
