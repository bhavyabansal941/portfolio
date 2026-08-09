'use client';

import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { ProjectCard } from '@/components/projects/project-card';

export function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-1">
              02 / INTERACTIVE PROJECTS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>FLAGSHIP AI & DATA SYSTEMS</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
            Interactive engineering experiences demonstrating pose landmark tracking, ML diagnostic
            pipelines, financial time-series analytics, and LLM applications.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
