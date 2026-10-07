"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import type { Group } from "three";
import { PhoneScreen } from "./phone-screen";

export function PhoneModel({ screenImage }: { screenImage?: string }) {
  const group = useRef<Group>(null);
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.15;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.5}>
      <group ref={group}>
        <RoundedBox args={[1.7, 3.3, 0.12]} radius={0.16} smoothness={6}>
          <meshStandardMaterial color="#263238" metalness={0.6} roughness={0.35} />
        </RoundedBox>
        <PhoneScreen image={screenImage} />
      </group>
    </Float>
  );
}
