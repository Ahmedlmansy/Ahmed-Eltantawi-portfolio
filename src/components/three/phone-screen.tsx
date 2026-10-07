"use client";
import { Suspense } from "react";
import { useTexture } from "@react-three/drei";

const W = 1.5;
const H = 3.1;

function Textured({ url }: { url: string }) {
  const map = useTexture(url);
  map.colorSpace = "srgb";
  return (
    <mesh position={[0, 0, 0.061]}>
      <planeGeometry args={[W, H]} />
      <meshBasicMaterial map={map} toneMapped={false} />
    </mesh>
  );
}

export function PhoneScreen({ image }: { image?: string }) {
  if (!image) {
    return (
      <mesh position={[0, 0, 0.061]}>
        <planeGeometry args={[W, H]} />
        <meshBasicMaterial color="#EEF4EF" />
      </mesh>
    );
  }
  return (
    <Suspense fallback={null}>
      <Textured url={image} />
    </Suspense>
  );
}
