import experience from "@/data/experience";
import { Container } from "@/components/shared/container";
import { ExperienceItem } from "@/components/cards/experience-item";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { FadeIn } from "@/components/motion/fade-in";

export function Experience() {
  if (experience.length === 0) return null;
  return (
    <section id="experience" className="w-full py-24">
      <Container>
        <FadeIn className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
            Track Record
          </p>
          <h2 className="font-display-hero text-[34px] font-bold tracking-tight text-ink sm:text-[40px]">
            Engineering Experience &amp; Impact
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">
            Collaborating with agile teams to build cross-platform Flutter apps using clean
            architecture, state management, and robust APIs.
          </p>
        </FadeIn>
        <div className="relative mx-auto max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-3 top-6 w-px bg-hairline sm:left-1/2 sm:-translate-x-1/2"
          />
          <StaggerContainer className="space-y-8 sm:space-y-12">
            {experience.map((item, index) => (
              <StaggerItem key={`${item.company}-${item.period}`}>
                <ExperienceItem {...item} side={index % 2 === 0 ? "left" : "right"} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
