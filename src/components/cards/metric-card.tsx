import type { Stat } from "@/types";
import { NumberCount } from "@/components/motion/number-count";

export function MetricCard({ value, label, description }: Stat) {
  return (
    <div className="flex flex-col items-center p-3 text-center">
      <p
        aria-label={value}
        className="font-display-hero text-[40px] font-bold tracking-tight text-ink"
      >
        <NumberCount value={value} />
      </p>
      <p className="mt-1 font-sans text-[11px] font-bold uppercase tracking-wider text-ink-secondary">
        {label}
      </p>
      <p className="mt-0.5 text-xs text-ink-muted">{description}</p>
    </div>
  );
}
