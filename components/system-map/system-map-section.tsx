'use client';

import { useState } from 'react';
import { Network, Sparkles, Layers, Terminal } from 'lucide-react';

const SYSTEM_DOMAINS = [
  { id: 'ai', label: 'AI', desc: 'Agent Systems & LLM Architectures' },
  { id: 'data', label: 'DATA', desc: 'Preprocessing, SQL & Time-Series Analytics' },
  { id: 'ml', label: 'MACHINE LEARNING', desc: 'Classification Pipelines & Model Evaluation' },
  { id: 'cv', label: 'COMPUTER VISION', desc: '33 MediaPipe Landmarks & 2D Vector Geometry' },
  { id: 'software', label: 'SOFTWARE', desc: 'Full-Stack Next.js 16 & System Design' },
  { id: 'projects', label: 'PROJECTS', desc: '4 Verified Engineering Implementations' },
];

export function SystemMapSection() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  return (
    <section
      id="system-map"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-1">
              01 / SYSTEM MAP
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              HOW BHAVYA BUILDS
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
            An interactive architecture map connecting core domains, data pipelines, and project
            implementations.
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-2xl glass-panel border border-white/10 relative overflow-hidden bg-white/[0.01]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="text-center mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 font-mono text-sm font-bold tracking-wider shadow-lg shadow-sky-500/10">
              <Network className="w-4 h-4 text-sky-400" />
              <span>BHAVYA // DIGITAL LAB</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {SYSTEM_DOMAINS.map((domain) => {
              const isActive = activeDomain === domain.id;
              return (
                <div
                  key={domain.id}
                  onMouseEnter={() => setActiveDomain(domain.id)}
                  onMouseLeave={() => setActiveDomain(null)}
                  onClick={() => {
                    const el = document.getElementById('projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer group relative ${
                    isActive
                      ? 'bg-sky-500/10 border-sky-400 shadow-xl shadow-sky-500/10 scale-[1.02]'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-mono tracking-wider font-bold text-sky-400 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>{domain.label}</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-sky-400/50 group-hover:bg-sky-400 group-hover:animate-ping" />
                  </div>
                  <p className="text-xs text-zinc-300 font-mono leading-relaxed">{domain.desc}</p>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500 group-hover:text-sky-300 transition-colors">
                    <span>EXPLORE DOMAIN WORK</span>
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400 relative z-10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>DATA PIPELINES → COMPUTER VISION → ML DIAGNOSTICS → LLM AGENTS</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <Layers className="w-3.5 h-3.5" />
              <span>INTERACTIVE DOMAIN ARCHITECTURE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
