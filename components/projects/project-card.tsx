'use client';

import { useState } from 'react';
import { ProjectData } from '@/data/portfolio-data';
import { usePortfolio } from '@/context/portfolio-context';
import { ExternalLink, Layers, Play, CheckCircle2 } from 'lucide-react';

export function ProjectCard({ project }: { project: ProjectData }) {
  const { openCaseStudy } = usePortfolio();
  const [activeStage, setActiveStage] = useState<number>(0);
  const [selectedCoin, setSelectedCoin] = useState<string>('BTC');

  const coins = ['BTC', 'ETH', 'SOL', 'ADA', 'DOGE'];

  return (
    <div className="rounded-2xl glass-panel border border-white/10 p-6 sm:p-8 space-y-6 hover:border-sky-500/30 transition-all bg-white/[0.01] relative overflow-hidden group">
      {/* Top Bar: Number, Category & GitHub */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black font-mono text-sky-400">{project.number}</span>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-zinc-400">{project.category}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
            title="View GitHub Repository"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 hover:bg-sky-500/20 transition-all"
              title="View Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      <p className="text-sm text-zinc-300 leading-relaxed">{project.summary}</p>

      {/* Project-Specific Interactive Engineering Visual Pipeline */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-sky-400">
          <span className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            INTERACTIVE TECHNICAL PIPELINE (HOVER / CLICK STAGES)
          </span>
          <span>{project.pipeline.length} STAGES</span>
        </div>

        {/* Multi-Coin Selector for Crypto Project */}
        {project.id === 'crypto-analysis' && (
          <div className="flex items-center gap-2 pt-1 pb-2">
            <span className="text-xs font-mono text-zinc-400">Select Asset:</span>
            {coins.map((coin) => (
              <button
                key={coin}
                onClick={() => setSelectedCoin(coin)}
                className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                  selectedCoin === coin
                    ? 'bg-sky-500 text-white font-bold'
                    : 'bg-white/5 text-zinc-400 hover:bg-white/10'
                }`}
              >
                {coin}
              </button>
            ))}
          </div>
        )}

        {/* Pipeline Stage Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {project.pipeline.map((p, idx) => {
            const isCurrent = activeStage === idx;
            return (
              <button
                key={p.stage}
                onMouseEnter={() => setActiveStage(idx)}
                onClick={() => setActiveStage(idx)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  isCurrent
                    ? 'bg-sky-500/20 border-sky-400 text-white shadow-lg shadow-sky-500/10'
                    : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                <div className="text-[10px] font-mono text-sky-400 font-bold mb-0.5">
                  0{idx + 1}. {p.stage}
                </div>
                <div className="text-[11px] font-mono font-medium truncate">{p.description}</div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Panel */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300 flex items-start gap-3">
          <Play className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-sky-300 font-bold">
              STAGE 0{activeStage + 1} ({project.pipeline[activeStage]?.stage}):
            </span>{' '}
            {project.pipeline[activeStage]?.detail}
            {project.id === 'crypto-analysis' && (
              <span className="block text-[11px] text-zinc-400 mt-1">
                Active Selection: {selectedCoin} market data stream & naive baseline evaluation
                benchmark.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap items-center gap-2 pt-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Case Study CTA Button */}
      <div className="pt-2 flex items-center justify-between border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>VERIFIED IMPLEMENTATION</span>
        </div>

        <button
          onClick={() => openCaseStudy(project.id)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#09090b] font-semibold text-xs tracking-wide hover:bg-sky-300 transition-all shadow-md"
        >
          <span>OPEN CASE STUDY</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
