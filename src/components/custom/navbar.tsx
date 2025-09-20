import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="container py-2">
      <div>
        <Link href="/">
          <Image alt="logo" src="/eduSphere.svg" width={200} height={52} />
        </Link>
      </div>
    </div>
  );
};
