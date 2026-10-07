import Link from "next/link";
import hero from "@/data/hero";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/motion/reveal-text";
import { FadeIn } from "@/components/motion/fade-in";

export function Hero() {
  return (
    <section id="home" className="pt-36 pb-20">
      <Container>
        {hero.eyebrow && <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">{hero.eyebrow}</p>}
        <RevealText text={hero.headline ?? "Your headline goes here"} className="max-w-4xl text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-6xl" />
        {hero.subheadline && <FadeIn delay={0.2} className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-secondary"><p>{hero.subheadline}</p></FadeIn>}
        <FadeIn delay={0.3} className="mt-10 flex flex-wrap gap-3">
          {hero.primaryCta && <Button asChild size="lg"><Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link></Button>}
          {hero.secondaryCta && <Button asChild variant="outline" size="lg"><Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link></Button>}
        </FadeIn>
      </Container>
    </section>
  );
}
