"use client";
import { cn } from "@/lib/utils";
import { Route } from "@/types/custom-types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";

interface NavLinkProps extends Route {
  className?: string;
}
export const NavLink = ({ label, href, className }: NavLinkProps) => {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <Link
      className={cn(
        "hover:text-accent px-2 py-1",
        pathname === href && "text-accent underline underline-offset-4",
        className,
      )}
      href={href}
    >
      {label}
    </Link>
  );
};
