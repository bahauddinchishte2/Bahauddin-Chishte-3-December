import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Earn4edu",
    description: "A revolutionary AI-powered platform that transforms how we interact with data.",
    tech: ["React", "TypeScript", "TensorFlow"],
    live: "https://earn4edu.org",
    image: "https://live.staticflickr.com/65535/54300859257_af9f01025c_k.jpg"
  },
  {
    title: "Ajker-Bazardor.onfo",
    description: "Real-time collaboration tool for remote teams with advanced features.",
    tech: ["Next.js", "Socket.io", "MongoDB"],
    live: "https://ajker-bazardor.info",
    image: "https://live.staticflickr.com/65535/54301984598_2645d9dc9a_k.jpg" },
  {
    title: "Agency Website, oLab",
    description: "Real-time collaboration tool for remote teams with advanced features.",
    tech: ["Next.js", "Socket.io", "MongoDB"],
    live: "https://olab.com.au",
    image: "https://live.staticflickr.com/65535/54301972399_fbe8390645_k.jpg"
  },
  {
    title: "Dev Sonket",
    description: "Real-time collaboration tool for remote teams with advanced features.",
    tech: ["Next.js", "Socket.io", "MongoDB"],
    live: "https://devsonket.com",
    image: "https://live.staticflickr.com/65535/54301984603_c9be18679a_k.jpg"
  },
];

export default function Projects() {
  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" id="projects">
      <div className="max-w-2xl mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          Projects and Initiative
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          A selection of my recent work and personal projects.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group bg-slate-900/50 rounded-xl border border-slate-800/50 overflow-hidden hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4">
              {/* Image Section */}
              <div className="lg:col-span-5 relative h-48 lg:h-64 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/25 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-xs text-slate-300 bg-slate-800/50 rounded-full border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div>
                    <a 
                      href={project.live}
                      className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group/link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-sm font-medium">View Project</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}