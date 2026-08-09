'use client';

import { useEffect } from 'react';
import { usePortfolio } from '@/context/portfolio-context';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Code2 } from 'lucide-react';

export function ProjectCaseStudyModal() {
  const { activeCaseStudyId, closeCaseStudy } = usePortfolio();

  const project = PORTFOLIO_DATA.projects.find((p) => p.id === activeCaseStudyId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCaseStudy();
    };
    if (activeCaseStudyId) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeCaseStudyId, closeCaseStudy]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#09090b]/80 backdrop-blur-xl animate-fade-in">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border border-white/10 bg-[#09090b]/95 p-6 sm:p-10 text-left space-y-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={closeCaseStudy}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 border-b border-white/10 pb-6 pr-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-sky-400">
            <span className="px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/30">
              PROJECT {project.number}
            </span>
            <span>•</span>
            <span>{project.category}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-zinc-400">{project.subtitle}</p>
        </div>

        {/* Problem & Approach Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
            <h4 className="text-xs font-mono font-bold text-sky-400 uppercase flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" />
              01 / THE PROBLEM
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{project.problem}</p>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
            <h4 className="text-xs font-mono font-bold text-sky-400 uppercase flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              02 / TECHNICAL APPROACH
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{project.approach}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-bold text-sky-400 uppercase flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5" />
            03 / TECH STACK & LIBRARIES
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Implementations */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-bold text-sky-400 uppercase">
            04 / ENGINEERING IMPLEMENTATION DETAILS
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
            {project.implementation.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-sky-400 font-mono font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Engineering Decisions */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-bold text-sky-400 uppercase">
            05 / ARCHITECTURAL DECISIONS & TRADEOFFS
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
            {project.decisions.map((decision, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-sky-400 font-mono font-bold">•</span>
                <span>{decision}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome */}
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm text-emerald-300 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="block text-emerald-200 font-mono">
              06 / VERIFIED OUTCOME & STATUS:
            </strong>
            <span>{project.outcome}</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#09090b] font-semibold text-xs tracking-wide hover:bg-sky-300 transition-all shadow-md"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>VIEW ON GITHUB</span>
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 font-medium text-xs hover:bg-sky-500/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>LIVE DEMO</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
