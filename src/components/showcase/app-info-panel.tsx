import type { ShowcaseApp } from "@/types";
import { TechChip } from "@/components/shared/tech-chip";

export function AppInfoPanel({ app }: { app: ShowcaseApp }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-ink">{app.name}</h2>
      {app.tagline && <p className="mt-1 text-ink-secondary">{app.tagline}</p>}
      {app.description && <p className="mt-4 leading-relaxed text-ink-secondary">{app.description}</p>}
      {app.stack && <div className="mt-5 flex flex-wrap gap-2">{app.stack.map((s) => <TechChip key={s}>{s}</TechChip>)}</div>}
    </div>
  );
}
