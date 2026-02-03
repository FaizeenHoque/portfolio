import React from "react";
import Image from "next/image";
import projectsData from "../data/projects.json";

interface Project {
  id: number;
  title: string;
  category: string;
  type: "hardware" | "software";
  description: string;
  tags: string[];
  github: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const isHardware = project.type === "hardware";

  return (
    <div className="relative bg-[#e8e4d9] border-[3px] border-[#4a5a4a] p-4 sm:p-5 flex flex-col gap-3 shadow-[6px_6px_0px_0px_#4a5a4a]">
      {/* Header */}
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#a8b8a0] border-[3px] border-[#4a5a4a] flex items-center justify-center flex-shrink-0">
          {isHardware ? (
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-[#4a5a4a]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <rect x="8" y="8" width="8" height="8" fill="currentColor" />
              <rect x="2" y="7" width="2" height="2" fill="currentColor" />
              <rect x="2" y="11" width="2" height="2" fill="currentColor" />
              <rect x="2" y="15" width="2" height="2" fill="currentColor" />
              <rect x="20" y="7" width="2" height="2" fill="currentColor" />
              <rect x="20" y="11" width="2" height="2" fill="currentColor" />
              <rect x="20" y="15" width="2" height="2" fill="currentColor" />
              <rect x="7" y="2" width="2" height="2" fill="currentColor" />
              <rect x="11" y="2" width="2" height="2" fill="currentColor" />
              <rect x="15" y="2" width="2" height="2" fill="currentColor" />
              <rect x="7" y="20" width="2" height="2" fill="currentColor" />
              <rect x="11" y="20" width="2" height="2" fill="currentColor" />
              <rect x="15" y="20" width="2" height="2" fill="currentColor" />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-[#4a5a4a]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M7 9l3 3-3 3"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 15h5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>

        {/* Title and Category */}
        <div className="flex flex-col">
          <h3 className="text-lg sm:text-xl font-bold text-[#4a5a4a] tracking-wide">
            {project.title}
          </h3>
          <span className="text-sm sm:text-base text-[#6b8a6b] italic">
            {project.category}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-[#4a5a4a] leading-relaxed">
        {project.description}
      </p>

      {/* Tags and GitHub */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs sm:text-sm bg-[#6b8a6b] text-white font-medium border-2 border-[#4a5a4a] shadow-[2px_2px_0px_0px_#4a5a4a]"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 ml-2 hover:scale-110 active:scale-95 transition-transform duration-150"
        >
          <svg
            className="w-8 h-8 sm:w-9 sm:h-9 text-[#6b8a6b]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = projectsData.projects as Project[];

  return (
    <section
      id="projects"
      className="w-full bg-[var(--lightmode-secondary)] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="relative w-[280px] h-[80px] sm:w-[400px] sm:h-[110px] md:w-[500px] md:h-[140px] lg:w-[600px] lg:h-[160px]">
            <Image
              src="/11.png"
              alt="My Projects - A collection of hardware and software creations"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
