import skills from "@/data/skills";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SkillGroup } from "@/components/cards/skill-group";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";

export function Skills() {
  if (skills.length === 0) return null;
  return (
    <section id="skills" className="border-y border-hairline bg-section py-24">
      <Container>
        <SectionHeading eyebrow="Skills" title="Tools & craft" />
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => <StaggerItem key={g.title}><SkillGroup {...g} /></StaggerItem>)}
        </StaggerContainer>
      </Container>
    </section>
  );
}
