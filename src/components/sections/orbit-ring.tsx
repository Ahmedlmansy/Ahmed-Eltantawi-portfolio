"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Tool = { name: string; slug: string };

const icon = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;

const innerTools: Tool[] = [
  { name: "Flutter", slug: "flutter" },
  { name: "Dart", slug: "dart" },
  { name: "Firebase", slug: "firebase" },
  { name: "Android", slug: "android" },
  { name: "Git", slug: "git" },
];

const outerTools: Tool[] = [
  { name: "REST API", slug: "fastapi" },
  { name: "GitHub", slug: "github" },
  { name: "Android Studio", slug: "androidstudio" },
  { name: "VS Code", slug: "vscode" },
  { name: "Python", slug: "python" },
  { name: "SQLite", slug: "sqlite" },
];

const RAD = Math.PI / 180;

function OrbitIcon({
  tool,
  offset,
  rx,
  ry,
  size,
  angle,
}: {
  tool: Tool;
  offset: number;
  rx: number;
  ry: number;
  size: number;
  angle: MotionValue<number>;
}) {
  const left = useTransform(
    angle,
    (a) => `${(50 + rx * Math.cos((a + offset) * RAD)).toFixed(3)}%`,
  );
  const top = useTransform(
    angle,
    (a) => `${(50 + ry * Math.sin((a + offset) * RAD)).toFixed(3)}%`,
  );
  // حركة خفيفة في الحجم عشان إحساس العمق
  const scale = useTransform(angle, (a) =>
    Number((0.94 + 0.06 * Math.sin((a + offset) * RAD)).toFixed(3)),
  );

  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-2xl border border-hairline bg-elevated p-2 shadow-xs"
      style={{
        left,
        top,
        scale,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
      title={tool.name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon(tool.slug)}
        alt={tool.name}
        width={32}
        height={32}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-contain"
      />
    </motion.div>
  );
}

// مدار بيضاوي حوالين الصورة (الصورة landscape فالمدار بيضاوي مش دايرة)
function OrbitRing({
  tools,
  rx,
  ry,
  size,
  duration,
  reverse,
  animated,
  startOffset = 0,
}: {
  tools: Tool[];
  rx: number; // % من عرض الحاوية
  ry: number; // % من ارتفاع الحاوية
  size: number; // px
  duration: number;
  reverse?: boolean;
  animated: boolean;
  startOffset?: number;
}) {
  const angle = useMotionValue(0);

  useEffect(() => {
    if (!animated) return;
    const controls = animate(angle, reverse ? -360 : 360, {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
    return () => controls.stop();
  }, [angle, animated, duration, reverse]);

  return (
    <>
      <div
        className="absolute rounded-full border border-dashed border-hairline"
        style={{
          left: `${50 - rx}%`,
          top: `${50 - ry}%`,
          width: `${rx * 2}%`,
          height: `${ry * 2}%`,
        }}
        aria-hidden="true"
      />
      {tools.map((tool, i) => (
        <OrbitIcon
          key={tool.name}
          tool={tool}
          offset={startOffset + (i / tools.length) * 360}
          rx={rx}
          ry={ry}
          size={size}
          angle={angle}
        />
      ))}
    </>
  );
}

export function HeroOrbit({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
}: {
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}) {
  const reducedMotion = useReducedMotion();
  const animated = !reducedMotion;

  return (
    <div className="relative aspect-[6/5] w-full max-w-[600px]">
      {/* توهج ناعم ورا الصورة */}
      <div
        className="absolute left-1/2 top-1/2 h-[75%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-sage-light via-sand-light to-dusty-light opacity-60 blur-2xl"
        aria-hidden="true"
      />

      {/* الصورة بنسبتها الأصلية (1143×928) */}
      <div className="absolute left-1/2 top-1/2 z-10 w-[60%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[32px] border border-hairline bg-white shadow-sm">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          priority
          sizes="(min-width: 1024px) 360px, 60vw"
          className="block h-auto w-full"
        />
      </div>

      {/* الأيقونات قدام الصورة عشان تفضل ظاهرة */}
      <div className="absolute inset-0 z-20">
        <OrbitRing
          tools={outerTools}
          rx={47}
          ry={46}
          size={50}
          duration={46}
          reverse
          animated={animated}
        />
        <OrbitRing
          tools={innerTools}
          rx={40}
          ry={38}
          size={46}
          duration={34}
          animated={animated}
          startOffset={-90}
        />
      </div>
    </div>
  );
}
