"use client";

import React from "react";
import Image from "next/image";

const About = () => {
  const aboutText = `I'm a 14 year old student from Bangladesh who likes building things and figuring out how they work. I'm into programming, robotics, and AI, and I spend a lot of my time messing around with code, breaking stuff, and then fixing it better than before.

I like experimenting. Writing small simulations, playing with math in visual ways, tinkering with hardware, using Linux, and occasionally going down deep rabbit holes just because something looked interesting. I learn best by doing, not by following step-by-step guides.

I'm curious about systems in general, how software scales, how tools are built, and how ideas go from "this might work" to something real. I enjoy hard problems, long debugging sessions, and projects that force me to actually think instead of copy-pasting answers.

I'm not trying to be perfect or polished. I just like learning fast, building cool things, and getting better at what I do.`;

  return (
    <section
      id="about"
      className="w-full bg-[var(--lightmode-secondary)] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title Image */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="relative w-[200px] h-[50px] sm:w-[280px] sm:h-[70px] md:w-[350px] md:h-[90px] lg:w-[420px] lg:h-[100px]">
            <Image
              src="/31.png"
              alt="About Me"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* About Text Box */}
        <div className="bg-[var(--lightmode-primary)] border-[3px] border-[#4a5a4a] shadow-[6px_6px_0px_0px_#4a5a4a] p-6 sm:p-8 md:p-10">
          {aboutText.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-[#4a5a4a] text-sm sm:text-base md:text-lg leading-relaxed mb-4 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
