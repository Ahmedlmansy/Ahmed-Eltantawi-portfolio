import { Badge } from "@/components/ui/badge";
export function PlatformBadge({ children }: { children: React.ReactNode }) {
  return <Badge variant="platform">{children}</Badge>;
}
