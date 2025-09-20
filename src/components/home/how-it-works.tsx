import React from "react";
import { SectionTitle } from "../custom/section-title";
import { howItWorks } from "@/lib/constants";
import { StepCard } from "../custom/step-card";

export const HowItWorks = () => {
  return (
    <section className="space-y-6">
      <SectionTitle title="Learning Made Simple" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {howItWorks.map((step) => (
          <StepCard {...step} key={step.id} />
        ))}
      </div>
    </section>
  );
};
