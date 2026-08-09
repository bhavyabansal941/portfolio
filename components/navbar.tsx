'use client';

import { NavBrand } from './nav/nav-brand';
import { NavLinks } from './nav/nav-links';
import { NavMobile } from './nav/nav-mobile';
import { NavProgress } from './nav/nav-progress';
import { usePortfolio } from '@/context/portfolio-context';
import { Sparkles } from 'lucide-react';

export function Navbar() {
  const { isRecruiterMode, toggleRecruiterMode } = usePortfolio();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#09090b]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <NavBrand />

        <div className="flex items-center gap-6">
          <NavLinks />

          {/* Recruiter Mode Toggle Switch Button */}
          <button
            onClick={toggleRecruiterMode}
            className={`px-3 py-1.5 rounded-lg border text-xs font-mono tracking-wide transition-all flex items-center gap-2 ${
              isRecruiterMode
                ? 'bg-sky-500/20 border-sky-400 text-sky-300 font-bold shadow-lg shadow-sky-500/10'
                : 'bg-white/5 border-white/10 text-zinc-300 hover:text-white hover:border-sky-500/30'
            }`}
            title="Toggle 20-Second Executive Recruiter View"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">RECRUITER MODE</span>
            <span className="sm:hidden">RECRUITER</span>
          </button>
        </div>

        <NavMobile />
      </div>
      <NavProgress />
    </header>
  );
}
