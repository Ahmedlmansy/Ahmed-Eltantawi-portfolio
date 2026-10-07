import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/layout/page-transition";
import { Container } from "@/components/shared/container";
import { ShowcaseHeader } from "@/components/showcase/showcase-header";
import { ShowcaseView } from "@/components/showcase/showcase-view";

export const metadata: Metadata = { title: "App Showcase" };

export default function AppShowcasePage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <Container className="pt-32 pb-12">
          <ShowcaseHeader />
          <ShowcaseView />
        </Container>
      </PageTransition>
      <Footer />
    </>
  );
}
