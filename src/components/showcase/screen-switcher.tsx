"use client";
import type { ShowcaseScreen } from "@/types";
import { cn } from "@/lib/utils";

export function ScreenSwitcher({ screens, activeIndex, onChange }: { screens: ShowcaseScreen[]; activeIndex: number; onChange: (i: number) => void }) {
  if (screens.length < 2) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {screens.map((s, i) => (
        <button
          key={s.label}
          onClick={() => onChange(i)}
          className={cn("rounded-full px-3 py-1 font-mono text-xs", i === activeIndex ? "bg-primary text-primary-foreground" : "bg-section text-ink-secondary hover:bg-sage-light")}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
