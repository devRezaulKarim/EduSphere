"use client";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <main className="container space-y-6 md:space-y-10">
      <Hero />
      <Features />
    </main>
  );
}
