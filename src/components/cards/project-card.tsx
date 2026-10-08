import {
  ArrowDownToLine,
  ArrowUpRight,
} from "lucide-react";
import type { Project } from "@/types";
import { HoverLift } from "@/components/motion/hover-lift";
import { TechChip } from "@/components/shared/tech-chip";
import { ProjectPreview } from "@/components/shared/project-preview";

type Props = Project & { featured?: boolean };

export function ProjectCard({
  title,
  category,
  focus,
  description,
  stack,
  preview,
  links,
  featured = false,
}: Props) {
  return (
    <HoverLift className="h-full">
      <article
        className={`flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-elevated shadow-xs transition-colors hover:border-primary-light ${
          featured ? "p-6 sm:p-8 lg:p-12" : "p-6 sm:p-8"
        }`}
      >
        {featured ? (
          <div className="grid h-full items-center gap-10 lg:grid-cols-12">
            <div className="flex flex-col items-start lg:col-span-7">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-primary-light bg-primary-surface px-3 py-1 font-sans text-xs font-bold text-primary">
                  {category}
                </span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                  {focus}
                </span>
              </div>
              <h3 className="mb-4 font-display-hero text-[28px] font-bold tracking-tight text-ink sm:text-[34px]">
                {title}
              </h3>
              <p className="mb-6 text-base leading-relaxed text-ink-secondary">{description}</p>
              <div className="mb-8 flex flex-wrap gap-2">
                {stack.map((item) => <TechChip key={item}>{item}</TechChip>)}
              </div>
              <ProjectActions github={links.github} releases={links.releases} title={title} featured />
            </div>

            <div className="flex justify-center lg:col-span-5">
              <ProjectPreview type={preview} title={title} />
            </div>
          </div>
        ) : (
          <>
            <div className="mb-5 flex items-center justify-between gap-2">
              <span className="rounded-full border border-primary-light bg-primary-surface px-3 py-1 font-sans text-xs font-bold text-primary">
                {category}
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                {focus}
              </span>
            </div>
            <h3 className="mb-2 font-headline-lg text-[22px] font-bold tracking-tight text-ink">
              {title}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-ink-secondary">{description}</p>
            <div className="mb-6">
              <ProjectPreview type={preview} title={title} />
            </div>
            <div className="mb-6 flex flex-wrap gap-2">
              {stack.map((item) => <TechChip key={item}>{item}</TechChip>)}
            </div>
            <ProjectActions github={links.github} releases={links.releases} title={title} />
          </>
        )}
      </article>
    </HoverLift>
  );
}

function ProjectActions({
  github,
  releases,
  title,
  featured,
}: {
  github: string;
  releases: string;
  title: string;
  featured?: boolean;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${featured ? "" : "mt-auto"}`}>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light ${
          featured
            ? "bg-primary text-white shadow-xs hover:bg-sage-hover"
            : "text-primary hover:bg-primary-surface"
        }`}
      >
        <span>View Repository</span>
        <ArrowUpRight aria-hidden="true" size={16} />
      </a>
      <a
        href={releases}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Check APK releases for ${title} on GitHub`}
        title="Check GitHub releases for an APK"
        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border-input px-5 text-[13px] font-semibold text-ink-secondary transition-colors hover:border-primary-light hover:bg-section focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light"
      >
        <ArrowDownToLine aria-hidden="true" className="text-primary" size={17} />
        <span>Download APK</span>
      </a>
      <p className="w-full text-[11px] leading-relaxed text-ink-muted">
        Check GitHub releases for APK availability.
      </p>
    </div>
  );
}
