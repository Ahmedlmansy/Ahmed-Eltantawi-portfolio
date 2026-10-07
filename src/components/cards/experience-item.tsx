import type { ExperienceItem as Item } from "@/types";
import { TechChip } from "@/components/shared/tech-chip";

export function ExperienceItem({ role, company, period, description, tags }: Item) {
  return (
    <div className="grid gap-4 border-t border-hairline py-8 md:grid-cols-[200px_1fr]">
      <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">{period}</p>
      <div>
        <h3 className="text-xl font-semibold text-ink">{role}</h3>
        <p className="text-sm text-ink-secondary">{company}</p>
        {description && <p className="mt-3 leading-relaxed text-ink-secondary">{description}</p>}
        {tags && tags.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{tags.map((t) => <TechChip key={t}>{t}</TechChip>)}</div>}
      </div>
    </div>
  );
}
