"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Lights } from "./lights";
import { Controls } from "./controls";
import { PhoneModel } from "./phone-model";
import { SceneFallback } from "./scene-fallback";
import { useWebGLSupport } from "@/hooks/use-webgl-support";

export default function PhoneScene({ screenImage }: { screenImage?: string }) {
  const webgl = useWebGLSupport();
  if (webgl === false) return <SceneFallback />;
  return (
    <div className="h-full min-h-[420px] w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Lights />
          <PhoneModel screenImage={screenImage} />
          <Controls />
        </Suspense>
      </Canvas>
    </div>
  );
}
