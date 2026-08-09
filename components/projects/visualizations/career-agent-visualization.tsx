'use client';

import { FileText, Cpu, CheckSquare, Sparkles, ArrowRight } from 'lucide-react';

interface Props {
  activeStage: number;
}

export function CareerAgentVisualization({ activeStage }: Props) {
  const steps = [
    { label: 'PDF RESUME', icon: FileText, detail: 'PyPDF2 text stream extraction' },
    { label: 'LLM PARSER', icon: Cpu, detail: 'LangChain entity prompt templates' },
    { label: 'SKILL MATRIX', icon: CheckSquare, detail: 'Python, SQL, ML, React taxonomy' },
    { label: 'JOB MATCHING', icon: Sparkles, detail: 'Vector skill gap comparison' },
    { label: 'ROADMAP OUTPUT', icon: ArrowRight, detail: 'Groq Llama 3 custom guidance' },
  ];

  return (
    <div className="w-full rounded-xl bg-[#09090b]/90 border border-white/10 p-4 relative overflow-hidden font-mono text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-2 text-sky-400 font-bold">
          <Sparkles className="w-4 h-4" />
          <span>DOCUMENT-TO-LLM KNOWLEDGE GRAPH PIPELINE</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>GROQ API LLAMA 3 8B</span>
        </div>
      </div>

      {/* Step Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center py-2">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isActive = activeStage === idx;
          const isPassed = activeStage > idx;

          return (
            <div
              key={s.label}
              className={`p-3 rounded-lg border transition-all duration-300 relative ${
                isActive
                  ? 'bg-sky-500/20 border-sky-400 shadow-lg shadow-sky-500/10 scale-105 z-10'
                  : isPassed
                    ? 'bg-white/[0.03] border-sky-500/30 text-zinc-300'
                    : 'bg-white/[0.01] border-white/10 text-zinc-500'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? 'text-sky-300' : isPassed ? 'text-sky-400' : 'text-zinc-500'
                  }`}
                />
                <span className="text-[9px] font-bold text-zinc-400">0{idx + 1}</span>
              </div>
              <div
                className={`text-[11px] font-bold tracking-wide mb-1 ${
                  isActive ? 'text-white' : 'text-zinc-300'
                }`}
              >
                {s.label}
              </div>
              <div className="text-[9px] text-zinc-400 leading-tight">{s.detail}</div>
            </div>
          );
        })}
      </div>

      {/* Telemetry Output Box */}
      <div className="mt-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between text-[11px] text-zinc-300 gap-2">
        <span className="text-zinc-400 font-bold">LLM INFERENCE PIPELINE:</span>
        <span className="text-sky-300">
          {activeStage === 0 && 'PyPDF2 parsing raw PDF layout stream into clean text buffers.'}
          {activeStage === 1 &&
            'LangChain zero-shot prompt extracting candidate technical entities.'}
          {activeStage === 2 && 'Structuring skill taxonomy into verified JSON schemas.'}
          {activeStage === 3 && 'Comparing candidate taxonomy against target enterprise job specs.'}
          {activeStage === 4 && 'Llama 3 via Groq API producing step-by-step career roadmaps.'}
        </span>
        <span className="text-emerald-400 font-bold text-[10px]">SUB-SECOND GROQ INFERENCE</span>
      </div>
    </div>
  );
}
