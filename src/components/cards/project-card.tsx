import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HoverLift } from "@/components/motion/hover-lift";
import { TechChip } from "@/components/shared/tech-chip";
import { PlatformBadge } from "@/components/shared/platform-badge";
import { AwardPill } from "@/components/shared/award-pill";

export function ProjectCard({ title, description, platforms, stack, image, award, links }: Project) {
  const href = links?.live ?? links?.store ?? links?.github;
  return (
    <HoverLift>
      <Card className="h-full overflow-hidden">
        {image && (
          <div className="bg-sage-soft p-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={title} className="mx-auto max-h-64 rounded-md object-contain" />
          </div>
        )}
        <CardHeader>
          <div className="flex flex-wrap gap-2">
            {platforms?.map((p) => <PlatformBadge key={p}>{p}</PlatformBadge>)}
            {award && <AwardPill>{award}</AwardPill>}
          </div>
          <CardTitle className="mt-2">{title}</CardTitle>
          {description && <CardDescription className="leading-relaxed">{description}</CardDescription>}
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {stack && <div className="flex flex-wrap gap-2">{stack.map((s) => <TechChip key={s}>{s}</TechChip>)}</div>}
          {href && (
            <Link href={href} className="inline-flex items-center gap-1 text-sm font-semibold text-primary underline decoration-1 underline-offset-[3px]">
              View project <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </CardContent>
      </Card>
    </HoverLift>
  );
}
