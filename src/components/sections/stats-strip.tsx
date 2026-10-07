import stats from "@/data/stats";
import { Container } from "@/components/shared/container";
import { MetricCard } from "@/components/cards/metric-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";

export function StatsStrip() {
  if (stats.length === 0) return null;
  return (
    <section className="w-full border-y border-hairline bg-elevated py-8">
      <Container>
        <StaggerContainer className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => <StaggerItem key={s.label}><MetricCard {...s} /></StaggerItem>)}
        </StaggerContainer>
      </Container>
    </section>
  );
}
