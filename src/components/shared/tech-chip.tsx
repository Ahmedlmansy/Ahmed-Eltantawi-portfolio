import { Badge } from "@/components/ui/badge";
export function TechChip({ children }: { children: React.ReactNode }) {
  return <Badge variant="default">{children}</Badge>;
}
