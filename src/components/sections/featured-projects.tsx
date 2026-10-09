import projects from "@/data/projects";
import { Container } from "@/components/shared/container";
import { ProjectCard } from "@/components/cards/project-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { FadeIn } from "@/components/motion/fade-in";

export function FeaturedProjects() {
  if (projects.length === 0) return null;
  const [featured, ...selectedProjects] = projects;
  const firstPair = selectedProjects.slice(0, 2);
  const secondPair = selectedProjects.slice(2, 4);

  return (
    <section id="featured-projects" className="w-full py-24 bg-section">
      <Container className="max-w-7xl px-6 lg:px-12">
        <FadeIn className="mb-16 max-w-2xl">
          <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
            Featured Work
          </p>
          <h2 className="font-display-hero text-[34px] font-bold tracking-tight text-ink sm:text-[40px]">
            Production Case Studies
          </h2>
          <p className="mt-2 text-base leading-relaxed text-ink-secondary">
            Hand-crafted cross-platform applications featuring clean
            architecture layers, optimized isolates, and delightful tactile
            feedback.
          </p>
        </FadeIn>

        {featured && (
          <StaggerContainer className="space-y-8">
            <StaggerItem>
              <ProjectCard {...featured} featured />
            </StaggerItem>

            {firstPair.length > 0 && (
              <StaggerContainer className="grid gap-8 lg:grid-cols-2">
                {firstPair.map((project) => (
                  <StaggerItem key={project.id}>
                    <ProjectCard {...project} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}

            {secondPair.length > 0 && (
              <StaggerContainer className="grid gap-8 lg:grid-cols-2">
                {secondPair.map((project) => (
                  <StaggerItem key={project.id}>
                    <ProjectCard {...project} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}
          </StaggerContainer>
        )}
      </Container>
    </section>
  );
}
