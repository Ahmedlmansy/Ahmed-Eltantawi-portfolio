import experience from "@/data/experience";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ExperienceItem } from "@/components/cards/experience-item";
import { FadeIn } from "@/components/motion/fade-in";

export function Experience() {
  if (experience.length === 0) return null;
  return (
    <section id="experience" className="py-24">
      <Container>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        {experience.map((e) => <FadeIn key={`${e.company}-${e.period}`}><ExperienceItem {...e} /></FadeIn>)}
      </Container>
    </section>
  );
}
