'use client';

import React from 'react';
import Link from 'next/link';
import { usePortfolio } from '@/context/portfolio-context';
import { ArrowUpRight, FileText, Mail, Sparkles, X } from 'lucide-react';

export function RecruiterModeModal() {
  const { isRecruiterMode, toggleRecruiterMode } = usePortfolio();

  if (!isRecruiterMode) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Recruiter Executive Summary Mode"
    >
      <div className="relative w-full max-w-3xl rounded-2xl glass-panel p-6 sm:p-8 border border-sky-500/40 bg-[#09090b]/95 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="px-2.5 py-1 rounded bg-sky-500/20 border border-sky-500/40 text-xs font-mono font-bold text-sky-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RECRUITER MODE ACTIVE</span>
            </div>
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              20-Second Executive Summary
            </span>
          </div>

          <button
            onClick={toggleRecruiterMode}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Exit Recruiter Mode"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Candidate Overview */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            BHAVYA BANSAL
          </h2>
          <p className="text-xs sm:text-sm font-mono text-sky-400 uppercase">
            B.TECH ARTIFICIAL INTELLIGENCE & DATA SCIENCE UNDERGRADUATE (GGSIPU &apos;26)
          </p>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal pt-1">
            Applying computer vision tools, statistical machine learning pipelines, and SQL data
            analytics to solve practical engineering problems. Open to technical internship roles.
          </p>
        </div>

        {/* Verified Stats Row */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center font-mono">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-white">9.03</div>
            <div className="text-[10px] text-zinc-400">B.TECH CGPA</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-white">20+</div>
            <div className="text-[10px] text-zinc-400">HACKATHON PARTICIPATIONS</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-sky-400">1st</div>
            <div className="text-[10px] text-zinc-400">ENTREPRENEURS DAY</div>
          </div>
        </div>

        {/* Flagship Projects Quick List */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            FEATURED PROJECTS:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10 text-zinc-200">
              • AI Physiotherapy Assistance System (MediaPipe, OpenCV)
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10 text-zinc-200">
              • Chronic Kidney Disease ML Pipeline (Scikit-learn)
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10 text-zinc-200">
              • Crypto Time-Series Market Analytics (SQL, Pandas)
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10 text-zinc-200">
              • CareerAgent — AI Career Navigation (LangChain, Streamlit)
            </div>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white text-[#09090b] font-mono text-xs font-bold hover:bg-sky-300 transition-all inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW RESUME</span>
            </Link>

            <a
              href="https://github.com/bhavyabansal941"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/5 text-zinc-200 font-mono text-xs hover:bg-white/10 hover:text-white border border-white/10 transition-all inline-flex items-center gap-1.5"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            <a
              href="https://linkedin.com/in/bhavya-bansal-aa70a3301"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/5 text-zinc-200 font-mono text-xs hover:bg-white/10 hover:text-white border border-white/10 transition-all inline-flex items-center gap-1.5"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            <a
              href="mailto:bansalbhavya941@gmail.com"
              className="px-4 py-2.5 rounded-xl bg-white/5 text-zinc-200 font-mono text-xs hover:bg-white/10 hover:text-white border border-white/10 transition-all inline-flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>EMAIL</span>
            </a>
          </div>

          <button
            onClick={toggleRecruiterMode}
            className="text-xs font-mono text-zinc-400 hover:text-white underline underline-offset-4"
          >
            Return to Full Interactive View →
          </button>
        </div>
      </div>
    </div>
  );
}
