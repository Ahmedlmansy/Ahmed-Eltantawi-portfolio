import skills from "@/data/skills";
import { Container } from "@/components/shared/container";
import { SkillGroup } from "@/components/cards/skill-group";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { FadeIn } from "@/components/motion/fade-in";

export function Skills() {
  if (skills.groups.length === 0) return null;
  return (
    <section id="skills" className="border-y border-hairline bg-section py-24">
      <Container>
        <FadeIn className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-sage-dark">
            {skills.eyebrow}
          </p>
          <h2 className="font-display-hero text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {skills.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-secondary">
            {skills.description}
          </p>
        </FadeIn>
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group) => (
            <StaggerItem key={group.title}>
              <SkillGroup {...group} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
