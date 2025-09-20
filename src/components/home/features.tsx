import React from "react";
import { SectionTitle } from "../custom/section-title";
import { FeatureCard } from "../custom/feature-card";
import { features } from "@/lib/constants";

export const Features = () => {
  return (
    <section className="space-y-6">
      <SectionTitle title="Why EduSphere?" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature) => (
          <FeatureCard {...feature} key={feature.id} />
        ))}
      </div>
    </section>
  );
};
