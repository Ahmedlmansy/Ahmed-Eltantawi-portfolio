"use client";
import dynamic from "next/dynamic";
import { SceneLoader } from "./scene-loader";

export const PhoneSceneLazy = dynamic(() => import("./phone-scene"), { ssr: false, loading: () => <SceneLoader /> });
