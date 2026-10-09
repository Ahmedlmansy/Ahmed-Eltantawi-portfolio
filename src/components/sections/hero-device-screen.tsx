"use client";

import { useEffect } from "react";
import {
  ArrowLeftRight,
  BatteryFull,
  Bell,
  LayoutDashboard,
  MessageSquare,
  RefreshCw,
  Settings,
  ShieldCheck,
  Signal,
  TrendingUp,
  type LucideIcon,
  Wallet,
  Wifi,
} from "lucide-react";
import { motion, useAnimationControls, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { distance, duration, ease, spring, stagger } from "@/lib/motion-tokens";
import type { Hero } from "@/types";

type Preview = NonNullable<Hero["preview"]>;

const actionIcons: Record<string, LucideIcon> = {
  "arrow-left-right": ArrowLeftRight,
  "refresh-cw": RefreshCw,
  "shield-check": ShieldCheck,
};

const navigationIcons: Record<string, LucideIcon> = {
  "layout-dashboard": LayoutDashboard,
  "message-square": MessageSquare,
  wallet: Wallet,
  settings: Settings,
};

const statusIcons = [Signal, Wifi, BatteryFull];

export function HeroDeviceScreen({
  preview,
  threeDimensional = false,
}: {
  preview: Preview;
  threeDimensional?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const canHover = useMediaQuery("(hover: hover)");
  const controls = useAnimationControls();
  const spatialDistance = reducedMotion ? 0 : distance.md;

  const revealVariants: Variants = {
    hidden: { opacity: 0, y: spatialDistance },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? duration.instant : duration.base,
        ease: ease.out,
      },
    },
  };

  // 2D: حركة كاملة. 3D: fade فقط، بدون أي transform على الحاوية
  // لأن Html transform بيتحكم في matrix3d بنفسه.
  const deviceVariants: Variants = threeDimensional
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: reducedMotion ? duration.instant : duration.base,
            ease: ease.out,
            delayChildren: reducedMotion ? 0 : stagger.tight,
            staggerChildren: reducedMotion ? 0 : stagger.tight,
          },
        },
      }
    : {
        hidden: {
          opacity: 0,
          x: spatialDistance,
          scale: reducedMotion ? 1 : 0.97,
          rotate: reducedMotion ? 0 : -1.5,
        },
        visible: {
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 0,
          transition: {
            duration: reducedMotion ? duration.instant : duration.reveal,
            ease: ease.out,
            delayChildren: reducedMotion ? 0 : stagger.tight,
            staggerChildren: reducedMotion ? 0 : stagger.tight,
          },
        },
      };

  const screenVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: stagger.tight,
        staggerChildren: stagger.tight,
      },
    },
  };
  const chartLineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: reducedMotion ? duration.instant : duration.reveal,
        delay: reducedMotion ? 0 : stagger.loose,
        ease: ease.out,
      },
    },
  };
  const chartFillVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: reducedMotion ? duration.instant : duration.base,
        delay: reducedMotion ? 0 : stagger.loose,
        ease: ease.out,
      },
    },
  };
  const topBadgeVariants: Variants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : -distance.sm },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? duration.instant : duration.base,
        delay: reducedMotion ? 0 : stagger.loose,
        ease: ease.out,
      },
    },
  };
  const bottomBadgeVariants: Variants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : distance.sm },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? duration.instant : duration.base,
        delay: reducedMotion ? 0 : stagger.loose + stagger.tight,
        ease: ease.out,
      },
    },
  };

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
    <motion.div
      className={
        threeDimensional
          ? // 305px × 620px = 1.94 × 3.94 وحدة (يطابق الزجاج في hero-phone-canvas)
            "relative w-[305px] rounded-[38px] bg-transparent p-0 shadow-none"
          : "relative w-[310px] rounded-[48px] border border-border-subtle bg-frame-metal p-[10px] shadow-[0_16px_36px_rgba(38,50,56,0.08)] sm:w-[330px]"
      }
      variants={deviceVariants}
      initial={false}
      animate={controls}
      whileHover={
        !threeDimensional && canHover && !reducedMotion ? { y: -4 } : undefined
      }
      transition={spring.soft}
      aria-label="Illustrative mobile application preview"
      role="img"
    >
      <div
        className={`relative flex h-[620px] w-full select-none flex-col justify-between overflow-hidden rounded-[38px] bg-canvas ${
          threeDimensional ? "" : "border border-hairline"
        }`}
      >
        <motion.div
          className="z-20 flex w-full items-center justify-between px-6 pt-3"
          variants={revealVariants}
        >
          <span className="font-mono text-xs font-semibold text-ink">9:41</span>
          <div className="flex h-5 w-24 items-center justify-end rounded-full bg-ink/10 px-2">
            <div className="h-2 w-2 rounded-full bg-sage" />
          </div>
          <div className="flex items-center gap-1 text-ink-secondary">
            {statusIcons.map((Icon, index) => (
              <Icon
                key={index}
                className="h-[13px] w-[13px]"
                aria-hidden="true"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-2 flex flex-1 flex-col gap-4 overflow-hidden p-5"
          variants={screenVariants}
        >
          <motion.div
            className="flex items-center justify-between"
            variants={revealVariants}
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-sage-light bg-sage-soft text-[13px] font-bold text-primary">
                AE
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                  {preview.accountLabel}
                </div>
                <div className="text-sm font-semibold leading-tight text-ink">
                  {preview.accountName}
                </div>
              </div>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-elevated text-ink-secondary shadow-xs">
              <Bell className="h-4 w-4" aria-hidden="true" />
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-hairline bg-elevated p-4 text-ink shadow-xs"
            variants={revealVariants}
          >
            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-ink-secondary">
              <span>{preview.balanceLabel}</span>
              <span className="font-bold text-primary">{preview.category}</span>
            </div>
            <div className="mt-1 text-[26px] font-bold tracking-tight text-ink">
              {preview.balance}
            </div>
            <div className="mt-2 flex items-center gap-1.5 font-mono text-[11px] text-primary">
              <TrendingUp className="h-[14px] w-[14px]" aria-hidden="true" />
              <span>{preview.change}</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-1.5 rounded-2xl border border-hairline bg-elevated p-3.5"
            variants={revealVariants}
          >
            <div className="flex items-center justify-between text-[11px] uppercase text-ink-secondary">
              <span>{preview.chartLabel}</span>
              <span className="font-bold text-primary">
                {preview.chartMetric}
              </span>
            </div>
            <svg
              className="h-10 w-full overflow-visible text-sage"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 100 24"
              aria-hidden="true"
            >
              <motion.path
                d="M0 18 Q 15 2, 30 14 T 60 8 T 90 4 L 100 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
                variants={chartLineVariants}
                style={{ transformOrigin: "left" }}
              />
              <motion.path
                d="M0 18 Q 15 2, 30 14 T 60 8 T 90 4 L 100 6 L 100 24 L 0 24 Z"
                fill="currentColor"
                fillOpacity="0.12"
                variants={chartFillVariants}
              />
            </svg>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-2"
            variants={revealVariants}
          >
            {preview.actions.map((action) => {
              const Icon = actionIcons[action.icon];
              return (
                <div
                  key={action.label}
                  className="flex flex-col items-center justify-center rounded-xl border border-hairline bg-elevated p-2.5 text-center"
                >
                  {Icon && (
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  )}
                  <span className="mt-1 text-[10px] font-semibold text-ink-secondary">
                    {action.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className={`flex items-center justify-around border-t border-hairline bg-elevated p-3 ${
            threeDimensional ? "" : "bg-elevated/90 backdrop-blur-md"
          }`}
          variants={revealVariants}
        >
          {preview.navigation.map((name, index) => {
            const Icon = navigationIcons[name];
            return Icon ? (
              <Icon
                key={name}
                className={`h-[22px] w-[22px] ${index === 0 ? "text-primary" : "text-ink-muted"}`}
                aria-hidden="true"
              />
            ) : null;
          })}
        </motion.div>
      </div>

      {!threeDimensional && (
        <>
          <motion.div
            className="absolute -left-4 -top-3.5 flex items-center gap-1.5 rounded-full border border-border-soft bg-elevated px-3 py-1.5 shadow-xs"
            variants={topBadgeVariants}
          >
            <span className="h-2 w-2 rounded-full bg-sage" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-ink">
              {preview.frameRate}
            </span>
          </motion.div>

          <motion.div
            className="absolute -bottom-3.5 -right-3 flex items-center gap-1.5 rounded-full border border-border-soft bg-elevated px-3.5 py-1.5 text-ink shadow-xs"
            variants={bottomBadgeVariants}
          >
            <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-secondary">
              {preview.architecture}
            </span>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
