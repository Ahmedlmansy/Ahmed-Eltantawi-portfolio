import { BadgeCheck } from "lucide-react";
import behindCode from "@/data/behind-code";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";

const codeToneClasses = {
  keyword: "font-semibold text-primary",
  type: "font-semibold text-dusty-dark",
  member: "text-primary",
  comment: "text-ink-muted",
  plain: "text-ink",
};

export function BehindCode() {
  return (
    <section id="behind-the-code" className="w-full py-24">
      <Container className="max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <FadeIn className="flex flex-col gap-4 lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-hairline bg-section p-6 text-ink shadow-xs">
              <div className="flex items-center justify-between border-b border-hairline pb-3">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="h-3 w-3 shrink-0 rounded-full bg-sand" aria-hidden="true" />
                  <span className="h-3 w-3 shrink-0 rounded-full bg-border-divider" aria-hidden="true" />
                  <span className="h-3 w-3 shrink-0 rounded-full bg-primary-light" aria-hidden="true" />
                  <span className="ml-2 truncate font-mono text-xs font-medium text-ink-secondary">
                    {behindCode.snippet.fileName}
                  </span>
                </div>
                <span className="ml-3 shrink-0 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                  {behindCode.snippet.language}
                </span>
              </div>
              <pre
                aria-label={`${behindCode.snippet.language} example`}
                className="pt-3 font-mono text-[11px] leading-relaxed sm:text-[13px]"
              >
                <code>
                  {behindCode.snippet.lines.map((line, index) => (
                    <span key={index} className="block whitespace-pre-wrap break-words">
                      {"  ".repeat(line.indent)}
                      {line.fragments.map((fragment, fragmentIndex) => (
                        <span
                          key={`${index}-${fragmentIndex}`}
                          className={codeToneClasses[fragment.tone]}
                        >
                          {fragment.text}
                        </span>
                      ))}
                    </span>
                  ))}
                </code>
              </pre>
              <p className="mt-3 text-[10px] leading-relaxed text-ink-muted">
                {behindCode.snippet.note}
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-primary-light bg-primary-surface p-6 shadow-xs">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary-light bg-elevated text-primary">
                <BadgeCheck aria-hidden="true" size={22} />
              </div>
              <div>
                <h3 className="font-headline-sm text-base font-semibold text-ink">
                  {behindCode.philosophy.heading}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
                  {behindCode.philosophy.text}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="flex flex-col items-start lg:col-span-6">
            <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
              {behindCode.eyebrow}
            </p>
            <h2 className="mb-6 font-display-hero text-[34px] font-bold tracking-tight text-ink sm:text-[40px]">
              {behindCode.heading}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-ink-secondary">
              {behindCode.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <StaggerContainer className="mt-8 grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
              {behindCode.focusAreas.map((area) => (
                <StaggerItem
                  key={area.label}
                  className="flex min-h-[82px] flex-col justify-center rounded-xl border border-hairline bg-elevated p-4 shadow-xs last:col-span-2 sm:last:col-span-1"
                >
                  <span className="font-headline-sm text-[17px] font-bold text-primary">
                    {area.value}
                  </span>
                  <span className="mt-0.5 text-[11px] font-semibold uppercase text-ink-muted">
                    {area.label}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
