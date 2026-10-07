"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import appLab from "@/data/app-lab";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/motion/fade-in";
import { spring } from "@/lib/motion-tokens";

export function AppLab() {
  const [activeId, setActiveId] = useState(appLab.apps[0]?.id ?? "");
  const [focusedTab, setFocusedTab] = useState(0);
  const reducedMotion = useReducedMotion();
  const activeApp = appLab.apps.find((app) => app.id === activeId);

  function selectApp(index: number) {
    const app = appLab.apps[index];
    if (!app) return;
    setFocusedTab(index);
    setActiveId(app.id);
  }

  function handleTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % appLab.apps.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + appLab.apps.length) % appLab.apps.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = appLab.apps.length - 1;
    else return;

    event.preventDefault();
    selectApp(nextIndex);
    document.getElementById(`app-lab-tab-${appLab.apps[nextIndex].id}`)?.focus();
  }

  if (appLab.apps.length === 0) return null;

  return (
    <section id="app-lab" className="w-full border-y border-hairline bg-section py-24">
      <Container className="flex max-w-7xl flex-col items-center px-6 lg:px-12">
        <FadeIn className="mb-12 max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center rounded-full border border-primary-light bg-primary-surface px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
            {appLab.eyebrow}
          </p>
          <h2 className="font-display-hero text-[34px] font-bold tracking-tight text-ink sm:text-[40px]">
            {appLab.heading}
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
            {appLab.description}
          </p>
        </FadeIn>

        <div
          role="tablist"
          aria-label="Choose a project to preview"
          className="mb-10 flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-hairline bg-elevated p-1.5"
        >
          {appLab.apps.map((app, index) => {
            const selected = app.id === activeId;
            return (
              <button
                key={app.id}
                id={`app-lab-tab-${app.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`app-lab-panel-${app.id}`}
                tabIndex={index === focusedTab ? 0 : -1}
                onClick={() => selectApp(index)}
                onFocus={() => setFocusedTab(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={`relative isolate rounded-full px-4 py-2.5 font-sans text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light sm:px-5 ${
                  selected ? "text-white" : "text-ink-secondary hover:bg-section hover:text-ink"
                }`}
              >
                {selected && (
                  <motion.span
                    aria-hidden="true"
                    layoutId="app-lab-tab-indicator"
                    className="absolute inset-0 -z-10 rounded-full bg-primary shadow-xs"
                    transition={reducedMotion ? { duration: 0 } : spring.snappy}
                  />
                )}
                {app.name}
              </button>
            );
          })}
        </div>

        {activeApp && (
          <div
            id={`app-lab-panel-${activeApp.id}`}
            role="tabpanel"
            aria-labelledby={`app-lab-tab-${activeApp.id}`}
            className="relative flex w-full max-w-4xl flex-col items-center overflow-hidden rounded-3xl border border-hairline bg-canvas p-6 shadow-xs sm:p-8 lg:p-12"
          >
            <div className="z-10 mb-6 flex w-full items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-secondary sm:text-xs">
                  {appLab.stageLabel}
                </span>
              </div>
              <span className="rounded-full border border-primary-light bg-primary-surface px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-primary sm:text-[11px]">
                {appLab.viewportLabel}
              </span>
            </div>

            <div className="w-[min(100%,320px)] rounded-[44px] border border-border-divider bg-frame-metal p-2.5 shadow-rest">
              <div className="flex h-[540px] flex-col overflow-hidden rounded-[34px] border border-hairline bg-elevated">
                <div className="flex items-center justify-between px-6 pb-3 pt-4">
                  <span className="font-mono text-[10px] font-semibold text-ink">APP PREVIEW</span>
                  <span className="h-4 w-20 rounded-full bg-ink/10" aria-hidden="true" />
                  <span className="font-mono text-[10px] text-ink-secondary">•••</span>
                </div>

                <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-elevated px-5 pb-5">
                  <div key={activeApp.id} id={`app-lab-preview-${activeApp.id}`} className="flex min-h-full flex-col">
                      <div className="flex items-center gap-3 border-b border-hairline pb-4 pt-2">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-light bg-primary-surface font-headline-sm text-sm font-bold text-primary">
                          {activeApp.previewTitle
                            .split(/\s+/)
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()}
                        </span>
                        <div className="min-w-0">
                          <h3 className="truncate font-headline-sm text-sm font-semibold text-ink">
                            {activeApp.previewTitle}
                          </h3>
                          <p className="mt-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-primary">
                            {activeApp.previewLabel}
                          </p>
                        </div>
                      </div>

                      <p className="py-4 text-xs leading-relaxed text-ink-secondary">
                        {activeApp.description}
                      </p>

                      <div className="space-y-2.5">
                        {activeApp.features.map((feature, index) => (
                          <div
                            key={feature.label}
                            className="flex items-start gap-3 rounded-xl border border-hairline bg-section p-3"
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-surface font-mono text-[10px] font-bold text-primary">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <div>
                              <p className="text-xs font-semibold text-ink">{feature.label}</p>
                              <p className="mt-0.5 text-[10px] leading-relaxed text-ink-secondary">
                                {feature.detail}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-5">
                        <p className="mb-2 font-mono text-[9px] font-semibold uppercase tracking-wider text-ink-muted">
                          Flutter project
                        </p>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-primary-surface">
                          <div className="h-full w-2/3 rounded-full bg-primary" />
                        </div>
                      </div>
                  </div>
                </div>
                <div className="flex justify-center py-2.5">
                  <span className="h-1 w-28 rounded-full bg-border-divider" aria-hidden="true" />
                </div>
              </div>
            </div>

            <p className="mt-6 text-center font-mono text-[10px] font-medium uppercase tracking-wider text-ink-muted sm:text-[11px]">
              Select a project above to switch the preview
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
