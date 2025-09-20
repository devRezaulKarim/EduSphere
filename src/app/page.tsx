"use client";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";

export default function Home() {
  return (
    <main className="container space-y-20 md:space-y-30">
      <Hero />
      <Features />
      <HowItWorks />
    </main>
  );
}
