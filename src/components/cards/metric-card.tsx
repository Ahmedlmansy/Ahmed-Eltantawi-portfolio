import type { Stat } from "@/types";

export function MetricCard({ value, label }: Stat) {
  return (
    <div>
      <p className="text-4xl font-medium tracking-tight text-ink">{value}</p>
      <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">{label}</p>
    </div>
  );
}
