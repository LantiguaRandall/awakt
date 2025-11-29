"use client";

import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { About } from "@/components/about";
import { Testimonial } from "@/components/testimonial";
import { Events } from "@/components/events";
import { Contact} from "@/components/contact";


export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      <Testimonial />
      <Events />
      <Contact />
    </div>
  );
}
