"use client";
import Link from "next/link";
import appLab from "@/data/app-lab";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { SHOWCASE_PATH } from "@/lib/constants";

export function AppLab() {
  const apps = appLab.apps ?? [];
  if (apps.length === 0 && !appLab.heading) return null;
  return (
    <section id="app-lab" className="border-y border-hairline bg-section py-24">
      <Container>
        <SectionHeading eyebrow="App Lab" title={appLab.heading} description={appLab.description} />
        {apps.length > 0 && (
          <Tabs defaultValue={apps[0].id}>
            <TabsList>{apps.map((a) => <TabsTrigger key={a.id} value={a.id}>{a.name}</TabsTrigger>)}</TabsList>
            {apps.map((a) => (
              <TabsContent key={a.id} value={a.id}>
                <div className="rounded-lg border border-border bg-elevated p-8 shadow-rest">
                  <h3 className="text-xl font-semibold">{a.name}</h3>
                  {a.tagline && <p className="mt-1 text-ink-secondary">{a.tagline}</p>}
                  {a.screens?.[0] && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={a.screens[0].image} alt={a.screens[0].label} className="mx-auto mt-6 max-h-[420px] rounded-xl" />
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
        <div className="mt-8">
          <Button asChild><Link href={appLab.cta?.href ?? SHOWCASE_PATH}>{appLab.cta?.label ?? "Open 3D showcase"}</Link></Button>
        </div>
      </Container>
    </section>
  );
}
