"use client";

import { Typewriter } from "react-simple-typewriter";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center h-[100vh] px-4 overflow-hidden">
      <div>
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
          Faizeen Hoque
        </h1>

        <p className="text-xl md:text-3xl text-gray-600 font-semibold">
          <Typewriter
            words={[
              "a teen prodigy",
              "a code wizard",
              "a creative thinker",
              "a problem solver",
              "a future innovator",
              "a lifelong learner",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
      </div>

      {/* Bouncing Arrow */}
      <div
      className="absolute left-1/2 transform -translate-x-1/2"
      style={{ bottom: '10px' }} // any px value you want
    >
      <ChevronDown className="animate-bounce text-gray-500 w-7 h-7" />
    </div>

    </section>
  );
}
