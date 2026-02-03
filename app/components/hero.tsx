"use client";

import React from "react";
import Image from "next/image";

// Pixel leaf SVG component
const PixelLeaf = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="6" y="0" width="2" height="2" fill="#5a7a5a" />
    <rect x="4" y="2" width="2" height="2" fill="#5a7a5a" />
    <rect x="6" y="2" width="2" height="2" fill="#7a9a7a" />
    <rect x="8" y="2" width="2" height="2" fill="#5a7a5a" />
    <rect x="2" y="4" width="2" height="2" fill="#5a7a5a" />
    <rect x="4" y="4" width="2" height="2" fill="#7a9a7a" />
    <rect x="6" y="4" width="2" height="2" fill="#9aba9a" />
    <rect x="8" y="4" width="2" height="2" fill="#7a9a7a" />
    <rect x="10" y="4" width="2" height="2" fill="#5a7a5a" />
    <rect x="2" y="6" width="2" height="2" fill="#7a9a7a" />
    <rect x="4" y="6" width="2" height="2" fill="#9aba9a" />
    <rect x="6" y="6" width="2" height="2" fill="#7a9a7a" />
    <rect x="8" y="6" width="2" height="2" fill="#9aba9a" />
    <rect x="10" y="6" width="2" height="2" fill="#7a9a7a" />
    <rect x="4" y="8" width="2" height="2" fill="#7a9a7a" />
    <rect x="6" y="8" width="2" height="2" fill="#5a7a5a" />
    <rect x="8" y="8" width="2" height="2" fill="#7a9a7a" />
    <rect x="6" y="10" width="2" height="2" fill="#5a7a5a" />
    <rect x="6" y="12" width="2" height="2" fill="#4a5a4a" />
    <rect x="6" y="14" width="2" height="2" fill="#4a5a4a" />
  </svg>
);

// Falling leaves configuration
const fallingLeaves = [
  { id: 1, left: "5%", delay: 0, duration: 8, size: 24 },
  { id: 2, left: "15%", delay: 1.5, duration: 10, size: 20 },
  { id: 3, left: "25%", delay: 3, duration: 9, size: 28 },
  { id: 4, left: "35%", delay: 0.8, duration: 11, size: 22 },
  { id: 5, left: "45%", delay: 2.2, duration: 8, size: 18 },
  { id: 6, left: "55%", delay: 4, duration: 10, size: 26 },
  { id: 7, left: "65%", delay: 1.8, duration: 9, size: 24 },
  { id: 8, left: "75%", delay: 0.3, duration: 12, size: 20 },
  { id: 9, left: "85%", delay: 2.8, duration: 8, size: 28 },
  { id: 10, left: "92%", delay: 1.2, duration: 11, size: 22 },
  { id: 11, left: "10%", delay: 5, duration: 9, size: 26 },
  { id: 12, left: "30%", delay: 5.5, duration: 10, size: 24 },
  { id: 13, left: "50%", delay: 6, duration: 8, size: 20 },
  { id: 14, left: "70%", delay: 5.2, duration: 11, size: 28 },
  { id: 15, left: "88%", delay: 6.5, duration: 9, size: 22 },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#f1eee4] overflow-hidden flex items-center justify-center">
      {/* Falling Leaves Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {fallingLeaves.map((leaf) => (
          <div
            key={leaf.id}
            className="absolute animate-fall"
            style={{
              left: leaf.left,
              top: -30,
              width: leaf.size,
              height: leaf.size,
              animationDelay: `${leaf.delay}s`,
              animationDuration: `${leaf.duration}s`,
            }}
          >
            <PixelLeaf className="w-full h-full" />
          </div>
        ))}
      </div>

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
