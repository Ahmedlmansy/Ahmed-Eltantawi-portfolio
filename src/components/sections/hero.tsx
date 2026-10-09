import Link from "next/link";
import { ArrowDown, ArrowRight, FileText, Globe2, MapPin } from "lucide-react";
import hero from "@/data/hero";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/motion/reveal-text";
import { HeroOrbit } from "./orbit-ring";

function highlightTerms(text: string, terms: string[]) {
  if (terms.length === 0) return text;
  const escapedTerms = terms.map((term) =>
    term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const parts = text.split(new RegExp(`(${escapedTerms.join("|")})`, "g"));

  return parts.map((part, index) =>
    terms.includes(part) ? (
      <code
        key={`${part}-${index}`}
        className="rounded-md border border-hairline bg-section px-2 py-0.5 font-mono text-[13px] font-medium text-primary"
      >
        {part}
      </code>
    ) : (
      part
    ),
  );
}

export function Hero() {
  const subheadline = hero.subheadline ?? "";
  const accentStart = hero.headlineAccent
    ? subheadline.indexOf(hero.headlineAccent)
    : -1;

  return (
    <section
      id="about"
      className="w-full overflow-hidden pb-20 pt-32"
      aria-label="Introduction"
    >
      <Container className="max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-start lg:col-span-6">
            {hero.availability && (
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-sage-light bg-sage-soft px-4 py-1.5 shadow-xs">
                <span
                  className="relative inline-flex h-2 w-2 rounded-full bg-sage-dark"
                  aria-hidden="true"
                />
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-sage-hover">
                  {hero.availability}
                </span>
              </div>
            )}

            <RevealText
              text={hero.headline ?? ""}
              className="mb-4 text-[48px] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-[64px]"
            />

            {subheadline && (
              <p className="mb-5 max-w-xl text-[22px] font-semibold leading-snug text-ink sm:text-2xl">
                {accentStart === -1 ? (
                  subheadline
                ) : (
                  <>
                    {subheadline.slice(0, accentStart)}
                    <span className="font-bold text-primary">
                      {hero.headlineAccent}
                    </span>
                    {subheadline.slice(
                      accentStart + (hero.headlineAccent?.length ?? 0),
                    )}
                  </>
                )}
              </p>
            )}

            {hero.description && (
              <p className="mb-8 max-w-xl text-[17px] leading-relaxed text-ink-secondary">
                {highlightTerms(hero.description, hero.highlightedTerms ?? [])}
              </p>
            )}

            <div className="mb-10 flex w-full flex-wrap items-center gap-4 sm:w-auto">
              {hero.primaryCta && (
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-xl px-7 text-[13px] shadow-sm"
                >
                  <Link href={hero.primaryCta.href}>
                    {hero.primaryCta.label}
                    <ArrowDown
                      className="h-[18px] w-[18px]"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
              )}

              {hero.secondaryCta && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-xl border-ghost bg-elevated px-6 text-[13px] text-text-nav shadow-xs"
                >
                  <a
                    href={hero.secondaryCta.href}
                    aria-label="Request a copy of the CV by email"
                  >
                    <FileText
                      className="h-[18px] w-[18px] text-primary"
                      aria-hidden="true"
                    />
                    {hero.secondaryCta.label}
                  </a>
                </Button>
              )}

              {hero.tertiaryCta && (
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="h-12 rounded-xl px-4 text-[13px] text-primary"
                >
                  <Link href={hero.tertiaryCta.href}>
                    {hero.tertiaryCta.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[13px] text-ink-muted">
              {hero.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin
                    className="h-[18px] w-[18px] text-primary"
                    aria-hidden="true"
                  />
                  <span>{hero.location}</span>
                </div>
              )}
              <span
                className="h-1 w-1 rounded-full bg-border-inset"
                aria-hidden="true"
              />
              {hero.remoteWork && (
                <div className="flex items-center gap-1.5">
                  <Globe2
                    className="h-[18px] w-[18px] text-dusty-dark"
                    aria-hidden="true"
                  />
                  <span>{hero.remoteWork}</span>
                </div>
              )}
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:col-span-6">
            <HeroOrbit
              imageSrc="/images/profile.jpg"
              imageAlt="Portrait of the developer"
              imageWidth={1143}
              imageHeight={928}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
