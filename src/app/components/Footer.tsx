"use client";

import { Code, Github, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f0f1a] to-[#09090f] text-gray-300 px-6 py-12 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12 md:gap-0">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">
            Faizeen Hoque
          </h2>
          <p className="text-gray-400 mt-1">Full-Stack Developer & AI Enthusiast</p>
        </div>

        {/* Center Column */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex space-x-4">
            <a
              href="https://github.com/faizeenhoque"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-800/20 p-3 rounded-full hover:bg-purple-600/30 transition"
            >
              <Github className="text-purple-300" />
            </a>
            <a
              href="mailto:ask@faizeenhoque.xyz"
              className="bg-purple-800/20 p-3 rounded-full hover:bg-purple-600/30 transition"
            >
              <Mail className="text-purple-300" />
            </a>
            <a
              href="https://faizeenhoque.xyz"
              className="bg-purple-800/20 p-3 rounded-full hover:bg-purple-600/30 transition"
            >
              <Code className="text-purple-300" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">Building the future, one line of code at a time</p>
        </div>

        {/* Right Column */}
        <div className="text-sm">
          <p className="text-gray-400 flex justify-center md:justify-end items-center gap-1">
            Made with <Heart className="text-pink-500 w-4 h-4" /> and lots of coffee
          </p>
          <p className="text-gray-500 mt-1 text-xs">&copy; {new Date().getFullYear()} Faizeen Hoque. All rights reserved.</p>
        </div>
      </div>

      {/* Divider & Quotes */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400 space-y-4">
        <p>
          <em>
            “Indeed, Allah is with those who fear Him and those who are doers of good.”
          </em>{" "}
          — <span className="text-gray-500">Qur’an 16:128</span>
        </p>
        <p>
          <em>
            “With God all things are possible.”
          </em>{" "}
          — <span className="text-gray-500">Matthew 19:26</span>
        </p>
      </div>
    </footer>
  );
}
