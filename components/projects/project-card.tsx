'use client';

import { useState } from 'react';
import { ProjectData } from '@/data/portfolio-data';
import { usePortfolio } from '@/context/portfolio-context';
import { ExternalLink, Layers, Play, CheckCircle2, ArrowRight } from 'lucide-react';
import { PhysiotherapyVisualization } from './visualizations/physiotherapy-visualization';
import { CKDVisualization } from './visualizations/ckd-visualization';
import { CryptoVisualization } from './visualizations/crypto-visualization';
import { CareerAgentVisualization } from './visualizations/career-agent-visualization';

export function ProjectCard({ project }: { project: ProjectData }) {
  const { openCaseStudy } = usePortfolio();
  const [activeStage, setActiveStage] = useState<number>(0);
  const [selectedCoin, setSelectedCoin] = useState<string>('BTC');

  const coins = ['BTC', 'ETH', 'SOL', 'ADA', 'DOGE'];
  const currentPipeline = project.pipeline[activeStage] || project.pipeline[0];

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
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="text-xs font-mono text-zinc-400">{project.category}</span>
              {project.demoMedia?.type === 'video' && (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-500/10 border border-sky-500/30 text-sky-300 flex items-center gap-1">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  VIDEO DEMO
                </span>
              )}
              {project.demoUrl && (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-1">
                  <ExternalLink className="w-2.5 h-2.5" />
                  LIVE DEMO
                </span>
              )}
            </div>
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

      {/* Distinct System Visualization Component */}
      <div className="pt-2">
        {project.id === 'ai-physiotherapy' && (
          <PhysiotherapyVisualization activeStage={activeStage} />
        )}
        {project.id === 'ckd-prediction' && <CKDVisualization activeStage={activeStage} />}
        {project.id === 'crypto-analysis' && (
          <CryptoVisualization activeStage={activeStage} selectedCoin={selectedCoin} />
        )}
        {project.id === 'career-agent' && <CareerAgentVisualization activeStage={activeStage} />}
      </div>

      {/* Project-Specific Interactive Engineering Visual Pipeline */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-sky-400">
          <span className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            INTERACTIVE TECHNICAL PIPELINE (CLICK / HOVER STAGES)
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
                    ? 'bg-sky-500/20 border-sky-400 text-white shadow-lg shadow-sky-500/10 scale-[1.02]'
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

        {/* Active Stage Enriched Detail Tooltip Panel */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
            <span className="text-sky-400 font-bold flex items-center gap-1.5">
              <Play className="w-3.5 h-3.5 text-sky-400" />
              STAGE 0{activeStage + 1}: {currentPipeline.stage}
            </span>
            <span className="text-zinc-400 text-[11px]">PROJECT: {project.title}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            <div>
              <span className="text-zinc-500 font-bold block">PURPOSE:</span>
              <span className="text-zinc-200">{currentPipeline.purpose}</span>
            </div>
            {currentPipeline.nextStage && (
              <div>
                <span className="text-zinc-500 font-bold block">NEXT STAGE:</span>
                <span className="text-sky-300 flex items-center gap-1">
                  <span>{currentPipeline.nextStage}</span>
                  <ArrowRight className="w-3 h-3 text-sky-400" />
                </span>
              </div>
            )}
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed pt-1 border-t border-white/5">
            {currentPipeline.detail}
            {project.id === 'crypto-analysis' && (
              <span className="block text-[11px] text-zinc-400 mt-1">
                Active Selection: {selectedCoin} market data stream & naive baseline evaluation
                benchmark.
              </span>
            )}
          </p>
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

      {/* Footer CTAs */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>VERIFIED IMPLEMENTATION</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 font-mono text-xs hover:bg-sky-500/20 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>LIVE DEMO ↗</span>
            </a>
          )}
          <button
            onClick={() => openCaseStudy(project.id)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#09090b] font-semibold text-xs tracking-wide hover:bg-sky-300 transition-all shadow-md group"
          >
            <span>OPEN CASE STUDY</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#09090b] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
