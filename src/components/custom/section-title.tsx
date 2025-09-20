import { cn } from "@/lib/utils";
import React from "react";

export const SectionTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return <h2 className={cn("text-center", className)}>{title}</h2>;
};
