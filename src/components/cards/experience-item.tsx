import type { ExperienceItem as Item } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { TechChip } from "@/components/shared/tech-chip";

export function ExperienceItem({
  role,
  company,
  companyUrl,
  period,
  description,
  tags,
  side,
}: Item & { side: "left" | "right" }) {
  const onLeft = side === "left";

  return (
    <div className="relative grid grid-cols-[24px_minmax(0,1fr)] items-start sm:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)]">
      <div className="relative z-10 col-start-1 row-start-1 flex justify-center pt-6 sm:col-start-2 sm:row-start-1">
        <span
          aria-hidden="true"
          className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-elevated shadow-xs"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
        </span>
      </div>
      <article
        className={`col-start-2 row-start-1 rounded-2xl border border-hairline bg-elevated p-6 shadow-xs transition-colors hover:border-primary-light ${onLeft ? "sm:col-start-1 sm:text-right" : "sm:col-start-3"} sm:row-start-1`}
      >
        <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
          {period}
        </p>
        <h3 className="mt-1 font-headline-sm text-[17px] font-bold text-ink">{role}</h3>
        {companyUrl ? (
          <a
            href={companyUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1 text-sm font-medium text-ink-secondary transition-colors hover:text-primary ${onLeft ? "sm:flex-row-reverse" : ""}`}
          >
            {company}
            <ArrowUpRight aria-hidden="true" size={14} />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : (
          <p className="text-sm font-medium text-ink-secondary">{company}</p>
        )}
        <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">{description}</p>
        {tags && tags.length > 0 && (
          <div className={`mt-4 flex flex-wrap gap-2 ${onLeft ? "sm:justify-end" : ""}`}>
            {tags.map((tag) => <TechChip key={tag}>{tag}</TechChip>)}
          </div>
        )}
      </article>
    </div>
  );
}
