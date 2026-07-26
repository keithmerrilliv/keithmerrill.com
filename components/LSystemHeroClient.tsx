"use client";

import dynamic from "next/dynamic";

export const LSystemHero = dynamic(
  () => import("./LSystemHero").then((m) => m.LSystemHero),
  { ssr: false },
);
