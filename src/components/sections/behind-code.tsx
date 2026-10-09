import { BadgeCheck } from "lucide-react";
import behindCode from "@/data/behind-code";
import hero from "@/data/hero";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/motion/fade-in";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/stagger-container";
import { HeroDevice } from "@/components/sections/hero-device";

// نص الموبايل في القسم ده (غيّره زي ما تحب)
const phoneText = {
  accountLabel: "Behind the code",
  accountName: "Clean Architecture",
  balanceLabel: "Test coverage",
  category: "Flutter",
  balance: "92%",
  change: "+4.2% this month",
  chartLabel: "Build performance",
  chartMetric: "60 FPS",
  frameRate: "60 FPS",
  architecture: "Clean Architecture",
};
const actionLabels = ["State", "Sync", "Secure"];

export function BehindCode() {
  const base = hero.preview;
  const preview = base
    ? {
        ...base,
        ...phoneText,
        actions: base.actions.map((action, index) => ({
          ...action,
          label: actionLabels[index] ?? action.label,
        })),
      }
    : null;

  return (
    <section id="behind-the-code" className="w-full py-24">
      <Container className="max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <FadeIn className="flex flex-col gap-8 lg:col-span-6">
            {preview && (
              <div className="flex justify-center">
                <HeroDevice preview={preview} />
              </div>
            )}

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
