import type { SkillGroup as SkillGroupType } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechChip } from "@/components/shared/tech-chip";

export function SkillGroup({ title, items }: SkillGroupType) {
  return (
    <Card>
      <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {items.map((s) => <TechChip key={s}>{s}</TechChip>)}
      </CardContent>
    </Card>
  );
}
