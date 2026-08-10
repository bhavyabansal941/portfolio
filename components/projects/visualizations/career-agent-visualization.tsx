'use client';

import { FileText, Cpu, CheckSquare, Sparkles, ArrowRight } from 'lucide-react';

interface Props {
  activeStage: number;
}

export function CareerAgentVisualization({ activeStage }: Props) {
  const steps = [
    { label: 'MULTI-FORMAT INGESTION', icon: FileText, detail: 'PDF, DOCX, XLSX & Vision OCR' },
    { label: 'LLM PARSER', icon: Cpu, detail: 'Llama 3.3 70B & Llama 3.2 Vision' },
    { label: 'TAVILY GROUNDING', icon: CheckSquare, detail: 'Tavily web search & Adzuna job APIs' },
    { label: 'SKILL GAP MATRIX', icon: Sparkles, detail: 'Pydantic-validated skill gap analysis' },
    { label: 'CHAINLIT & RENDER', icon: ArrowRight, detail: 'SQLAlchemy persistence & Render live demo' },
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
          <span>GROQ API LLAMA 3.3 70B & VISION</span>
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
          {activeStage === 0 && 'Extracting text & layout from PDF, DOCX, XLSX & Llama 3.2 Vision OCR.'}
          {activeStage === 1 && 'Llama 3.3 70B zero-shot prompt extracting candidate technical entities.'}
          {activeStage === 2 && 'Grounding entity skill requirements with Tavily Web & Adzuna Live Job APIs.'}
          {activeStage === 3 && 'Pydantic-validated skill gap analysis comparing candidate vs target roles.'}
          {activeStage === 4 && 'Chainlit chat UI with SQLAlchemy session persistence hosted live on Render.'}
        </span>
        <span className="text-emerald-400 font-bold text-[10px]">SUB-SECOND GROQ INFERENCE</span>
      </div>
    </div>
  );
}
