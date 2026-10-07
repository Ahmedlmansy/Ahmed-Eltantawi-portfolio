import projects from "@/data/projects";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/cards/project-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";

export function FeaturedProjects() {
  if (projects.length === 0) return null;
  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading eyebrow="Projects" title="Selected work" />
        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => <StaggerItem key={p.id}><ProjectCard {...p} /></StaggerItem>)}
        </StaggerContainer>
      </Container>
    </section>
  );
}
