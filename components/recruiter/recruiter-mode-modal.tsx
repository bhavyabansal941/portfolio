'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePortfolio } from '@/context/portfolio-context';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { X, FileText, Mail, Award, Zap } from 'lucide-react';

export function RecruiterModeModal() {
  const { isRecruiterMode, toggleRecruiterMode } = usePortfolio();
  const { candidate, projects, achievements } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') toggleRecruiterMode();
    };
    if (isRecruiterMode) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isRecruiterMode, toggleRecruiterMode]);

  if (!isRecruiterMode) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#09090b]/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border border-sky-500/40 bg-[#09090b]/95 p-6 sm:p-10 text-left space-y-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={toggleRecruiterMode}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-white/10 pb-4 pr-12">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold">
            <Zap className="w-4 h-4 text-sky-400" />
            <span>RECRUITER MODE — 20-SECOND CANDIDATE OVERVIEW</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {candidate.name}
          </h2>
          <p className="text-xs font-mono text-zinc-300">{candidate.degree} • GGSIPU</p>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="text-xs font-mono text-zinc-400">GPA</div>
            <div className="text-base font-bold font-mono text-white mt-0.5">{candidate.cgpa}</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="text-xs font-mono text-zinc-400">Graduation</div>
            <div className="text-base font-bold font-mono text-sky-400 mt-0.5">May 2027</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="text-xs font-mono text-zinc-400">Hackathons</div>
            <div className="text-base font-bold font-mono text-white mt-0.5">
              20+ Participations
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="text-xs font-mono text-zinc-400">Top Award</div>
            <div className="text-base font-bold font-mono text-emerald-400 mt-0.5">
              1st Place 2025
            </div>
          </div>
        </div>

        {/* Top 4 Flagship Projects Quick List */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-sky-400 uppercase">
            4 CANONICAL FLAGSHIP PROJECTS:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
            {projects.map((p) => (
              <div
                key={p.id}
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between"
              >
                <span className="font-bold text-white truncate">
                  {p.number}. {p.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Major Achievements */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-sky-400 uppercase">KEY ACHIEVEMENTS:</h4>
          <ul className="space-y-1 text-xs font-mono text-zinc-300">
            {achievements.map((ach) => (
              <li key={ach.id} className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>
                  <strong>{ach.award}:</strong> {ach.title} ({ach.year})
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleRecruiterMode}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 text-white font-bold text-xs font-mono hover:bg-sky-400 transition-all shadow-md"
          >
            <FileText className="w-4 h-4 text-white" />
            <span>VIEW RESUME ↗</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={candidate.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
              title="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href={candidate.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={`mailto:${candidate.email}`}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
