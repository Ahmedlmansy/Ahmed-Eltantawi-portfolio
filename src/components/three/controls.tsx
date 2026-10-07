"use client";
import { OrbitControls } from "@react-three/drei";

export function Controls() {
  return <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={(Math.PI * 2) / 3} />;
}
