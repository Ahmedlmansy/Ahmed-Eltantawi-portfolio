import { FadeIn } from "@/components/motion/fade-in";

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title?: string; description?: string }) {
  if (!title && !eyebrow && !description) return null;
  return (
    <FadeIn className="mb-12 max-w-2xl">
      {eyebrow && <p className="mb-3 font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">{eyebrow}</p>}
      {title && <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h2>}
      {description && <p className="mt-4 text-base leading-relaxed text-ink-secondary">{description}</p>}
    </FadeIn>
  );
}
