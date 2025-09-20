import { routes } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavLink } from "./nav-link";

export const Navbar = () => {
  return (
    <div className="bg-background sticky top-0 container flex items-center justify-between py-2">
      <div>
        <Link href="/">
          <Image alt="logo" src="/eduSphere.svg" width={200} height={52} />
        </Link>
      </div>
      <nav className="flex items-center gap-4">
        {routes.map((route) => (
          <NavLink {...route} key={route.label} />
        ))}
      </nav>
    </div>
  );
};
