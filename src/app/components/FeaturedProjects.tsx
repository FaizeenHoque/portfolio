"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Lunar Ai",
    description: "A chatbot finedtuned by using system prompt engineering and is powered by OpenRouter Api's",
    tech: ["Next.js", "Python", "OpenRouter"],
    demo: "https://chat.faizeenhoque.xyz",
    image: "",
  },
  {
    title: "Snacc - Package Manager",
    description: "A package manager to distribute my system tools projects like MiniGrep.",
    tech: ["Roblox Studio", "Luau"],
    github: "",
    demo: "https://snacc.faizeenhoque.xyz/snacc-installer.exe",
    image: "",
  },
  {
    title: "Orrery Web App that Displays Near-Earth Objects",
    description: "This interactive orrery web app visualizes the orbits of celestial bodies, including planets and Near-Earth Objects (NEOs), in a dynamic 3D environment. Utilizing data from NASA's Near-Earth Object API, the app calculates and displays the positions of these bodies relative to the Sun, allowing users to explore their movements and characteristics. The orrery is designed to educate users about our solar system and promote awareness of NEOs, including potentially hazardous asteroids. With user-friendly controls, you can start and stop animations, adjust the speed of orbits, and click on celestial bodies for detailed information.",
    tech: ["Python", "NASA NEO API", "NASA Small Body Database"],
    github: "https://github.com/FaizeenHoque/OrreryWebApp",
    demo: "",
    image: "",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <div className="h-48 bg-gray-200">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-blue-500 font-medium">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="bg-blue-100 px-2 py-1 rounded-full text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {(project.github || project.demo) && (
                <div className="flex gap-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 hover:text-black transition"
                    >
                      <Github size={18} /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:underline"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
