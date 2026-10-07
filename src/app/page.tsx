import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/layout/page-transition";
import { Hero } from "@/components/sections/hero";
import { StatsStrip } from "@/components/sections/stats-strip";
import { Skills } from "@/components/sections/skills";
import { BehindCode } from "@/components/sections/behind-code";
import { Experience } from "@/components/sections/experience";
import { AppLab } from "@/components/sections/app-lab";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <Hero />
        <StatsStrip />
        <BehindCode />
        <Skills />
        <Experience />
        <AppLab />
        <FeaturedProjects />
        <ContactSection />
      </PageTransition>
      <Footer />
    </>
  );
}
