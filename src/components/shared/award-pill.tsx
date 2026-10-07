import { Badge } from "@/components/ui/badge";
export function AwardPill({ children }: { children: React.ReactNode }) {
  return <Badge variant="award">{children}</Badge>;
}
