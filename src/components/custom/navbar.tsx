import { routes } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavLink } from "./nav-link";
import { Logo } from "./logo";

export const Navbar = () => {
  return (
    <div className="bg-background sticky top-0 container flex items-center justify-between py-2">
      <Logo />
      <nav className="flex items-center gap-4">
        {routes.map((route) => (
          <NavLink {...route} key={route.label} />
        ))}
      </nav>
    </div>
  );
};
