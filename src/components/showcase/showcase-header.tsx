import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import showcase from "@/data/showcase";
import { HOME_PATH } from "@/lib/constants";

export function ShowcaseHeader() {
  return (
    <div className="mb-10">
      <Link href={HOME_PATH} className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-ink-secondary hover:text-ink">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>
      <h1 className="text-4xl font-medium tracking-tight text-ink md:text-5xl">{showcase.heading ?? "App Showcase"}</h1>
      {showcase.description && <p className="mt-4 max-w-2xl text-lg text-ink-secondary">{showcase.description}</p>}
    </div>
  );
}
