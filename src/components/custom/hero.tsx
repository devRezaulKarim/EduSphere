import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="">
        <h1>Learn. Grow. Succeed.</h1>
        <p>
          Empower your career with expert-led courses, interactive lessons, and
          certificates you can showcase anywhere.
        </p>
        <div className="flex items-center flex-wrap gap-4 mt-8">
          <Button variant="secondary">🎓 Browse Courses</Button>
          <Button variant="outline">👨‍🏫 Become an Instructor</Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 shrink-0">
        <Image
          className="w-full h-auto"
          alt="Hero Image"
          src="/hero-image.png"
          width={800}
          height={800}
        />
      </div>
    </section>
  );
};
