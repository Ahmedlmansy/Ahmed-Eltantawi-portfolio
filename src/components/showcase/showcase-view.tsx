"use client";
import { useState } from "react";
import showcase from "@/data/showcase";
import { PhoneSceneLazy } from "@/components/three/phone-scene-lazy";
import { AppSelector } from "./app-selector";
import { AppInfoPanel } from "./app-info-panel";
import { ScreenSwitcher } from "./screen-switcher";

export function ShowcaseView() {
  const apps = showcase.apps ?? [];
  const [activeId, setActiveId] = useState(apps[0]?.id ?? "");
  const [screenIndex, setScreenIndex] = useState(0);
  const app = apps.find((a) => a.id === activeId);
  const screens = app?.screens ?? [];
  const image = screens[screenIndex]?.image;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className="h-[520px] rounded-lg border border-border bg-sage-soft shadow-rest">
        <PhoneSceneLazy screenImage={image} />
      </div>
      <div className="flex flex-col gap-6">
        {apps.length > 1 && <AppSelector apps={apps} activeId={activeId} onChange={(id) => { setActiveId(id); setScreenIndex(0); }} />}
        {app ? <AppInfoPanel app={app} /> : <p className="text-ink-muted">Add apps in <code className="font-mono">src/data/showcase.js</code></p>}
        <ScreenSwitcher screens={screens} activeIndex={screenIndex} onChange={setScreenIndex} />
      </div>
    </div>
  );
}
