/* eslint-disable */
"use client";

import { motion } from "framer-motion";
import {
  Code,
  MonitorSmartphone,
  BrainCog,
  Settings2,
  Wrench,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen max-w-6xl mx-auto px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I'm <strong>Faizeen Hoque</strong>, a 15-year-old developer from Bangladesh currently studying for O-levels.
            Despite my young age, I’ve developed a strong passion for technology, programming, and artificial intelligence.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            My journey spans from traditional coding to cutting-edge AI. I’ve worked with tools like <em>Ollama</em> for local AI model deployment, and have hands-on experience in machine learning, model training, and neural networks.
          </p>
        </motion.div>

        {/* Right Column: Skills */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Skills & Technologies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-gray-100 rounded-xl p-4 shadow hover:shadow-md transition"
            >
              <Code className="text-blue-500" />
              <span>Python (Advanced), JavaScript, Rust</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-gray-100 rounded-xl p-4 shadow hover:shadow-md transition"
            >
              <MonitorSmartphone className="text-purple-500" />
              <span>React, Next.js, Tailwind CSS</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-gray-100 rounded-xl p-4 shadow hover:shadow-md transition"
            >
              <BrainCog className="text-pink-500" />
              <span>Machine Learning & AI</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-gray-100 rounded-xl p-4 shadow hover:shadow-md transition"
            >
              <Wrench className="text-green-500" />
              <span>Roblox Studio Scripting</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-gray-100 rounded-xl p-4 shadow hover:shadow-md transition"
            >
              <Settings2 className="text-yellow-500" />
              <span>Problem-solving & Algorithms</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-20 max-w-3xl mx-auto text-center"
      >
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">My Mission</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          To leverage technology and AI to build innovative solutions that empower people and improve everyday life. I aim to keep learning, growing, and sharing what I know with the world.
        </p>
      </motion.div>
    </section>
  );
}
