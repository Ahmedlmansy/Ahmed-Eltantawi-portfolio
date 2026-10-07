"use client";
import type { ShowcaseApp } from "@/types";
import { cn } from "@/lib/utils";

export function AppSelector({ apps, activeId, onChange }: { apps: ShowcaseApp[]; activeId: string; onChange: (id: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {apps.map((a) => (
        <button
          key={a.id}
          onClick={() => onChange(a.id)}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors",
            a.id === activeId ? "border-sage-light bg-sage-light text-sage-hover" : "border-border bg-white text-ink-secondary hover:bg-section"
          )}
        >
          {a.name}
        </button>
      ))}
    </div>
  );
}
