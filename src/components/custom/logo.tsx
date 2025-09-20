import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <Image
        className={cn("w-50", className)}
        alt="logo"
        src="/eduSphere.svg"
        width={200}
        height={52}
      />
    </Link>
  );
};
