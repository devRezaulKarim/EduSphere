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
import { Feature } from "@/types/custom-types";

export const FeatureCard = ({ icon, title, subtitle }: Feature) => {
  return (
    <Card className="text-center">
      <CardHeader>
        <span className="mx-auto block text-4xl">{icon}</span>
        <CardTitle className="mt-2 text-lg md:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{subtitle}</p>
      </CardContent>
    </Card>
  );
};
