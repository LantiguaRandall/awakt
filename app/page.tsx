"use client";

import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { About } from "@/components/about";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      <Testimonial />
    </div>
  );
}
