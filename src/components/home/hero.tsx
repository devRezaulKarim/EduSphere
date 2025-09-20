import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-between md:flex-row">
      <div>
        <h1>
          Learn. Grow. <span className="text-accent">Succeed.</span>
        </h1>
        <p>
          Unlock your potential with expert-led courses, immersive lessons, and
          industry-recognized certificates designed to boost your career and
          personal growth.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/courses"
            className="text-foreground hover:text-foreground bg-secondary rounded border px-4 py-2"
          >
            🎓 Browse Courses
          </Link>
          <Link
            href="#"
            className="text-foreground hover:text-foreground rounded border px-4 py-2"
          >
            👨‍🏫 Become an Instructor
          </Link>
        </div>
      </div>
      <div className="w-full shrink-0 md:w-1/2">
        <Image
          className="h-auto w-full"
          alt="Hero Image"
          src="/hero-image.png"
          width={800}
          height={800}
        />
      </div>
    </section>
  );
};
