import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-medium text-ink">404</h1>
      <Button asChild><Link href="/">Back home</Link></Button>
    </div>
  );
}
