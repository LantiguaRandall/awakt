"use client";

import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <About />
    </div>
  );
}
