import type { SkillGroup as SkillGroupType, SkillIcon } from "@/types";
import {
  Boxes,
  Cloud,
  Database,
  Layers3,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { HoverLift } from "@/components/motion/hover-lift";
import { StaggerChips } from "@/components/motion/stagger-chips";

const icons: Record<SkillIcon, LucideIcon> = {
  mobile: Smartphone,
  state: Workflow,
  architecture: Layers3,
  cloud: Cloud,
  database: Database,
  foundations: Boxes,
};

const accents = {
  sage: "border-primary-light bg-primary-surface text-primary",
  blue: "border-dusty bg-dusty-light text-dusty-dark",
  sand: "border-sand/40 bg-sand-light text-ink",
};

export function SkillGroup({ title, description, icon, accent, items }: SkillGroupType) {
  const Icon = icons[icon];

  return (
    <HoverLift className="h-full">
      <article className="group flex h-full flex-col justify-between rounded-2xl border border-hairline bg-elevated p-7 shadow-xs transition-colors hover:border-sage">
        <div>
          <div
            className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border ${accents[accent]}`}
          >
            <Icon aria-hidden="true" size={24} />
          </div>
          <h3 className="font-headline-sm text-lg font-bold text-ink">{title}</h3>
          <p className="mb-6 mt-2 text-[13px] leading-relaxed text-ink-secondary">{description}</p>
        </div>
        <StaggerChips items={items} />
      </article>
    </HoverLift>
  );
}
