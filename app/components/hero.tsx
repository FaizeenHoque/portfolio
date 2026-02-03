import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#e8e4d9] overflow-hidden flex items-center justify-center">
      {/* Top Left Corner Leaf */}
      <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
        <Image
          src="/02.png"
          alt="Decorative leaf"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Bottom Right Corner Leaf */}
      <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
        <Image
          src="/03.png"
          alt="Decorative leaf"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center z-10 px-4 sm:px-6 md:px-8">
        {/* Logo/Name */}
        <div className="relative w-[280px] h-[140px] sm:w-[400px] sm:h-[200px] md:w-[500px] md:h-[250px] lg:w-[600px] lg:h-[300px] mb-6 sm:mb-8 md:mb-10">
          <Image
            src="/01.png"
            alt="Faizaan Hoque"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
          {/* View Projects Button */}
          <a
            href="#projects"
            className="relative w-[160px] h-[50px] sm:w-[180px] sm:h-[55px] md:w-[200px] md:h-[60px] cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-150"
          >
            <Image
              src="/0b1.png"
              alt="View Projects"
              fill
              className="object-contain"
            />
          </a>

          {/* Contact Me Button */}
          <a
            href="#contact"
            className="relative w-[160px] h-[50px] sm:w-[180px] sm:h-[55px] md:w-[200px] md:h-[60px] cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-150"
          >
            <Image
              src="/0b2.png"
              alt="Contact Me"
              fill
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
