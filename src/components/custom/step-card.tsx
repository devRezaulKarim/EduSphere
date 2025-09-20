import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Feature, Step } from "@/types/custom-types";

export const StepCard = ({ icon, title, description }: Step) => {
  return (
    <Card className="shadow-accent border-0 text-center shadow-[inset_0_0_12px_0]">
      <CardHeader>
        <span className="mx-auto block text-4xl">{icon}</span>
        <CardTitle className="mt-2 text-lg md:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};
