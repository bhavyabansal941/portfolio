'use client';

import { Database, Filter, Sliders, Cpu, CheckCircle2 } from 'lucide-react';

interface Props {
  activeStage: number;
}

export function CKDVisualization({ activeStage }: Props) {
  // Preprocessing node pipeline stages
  const nodes = [
    { stage: 0, label: 'RAW DATA', icon: Database, detail: '400 records, 24 lab features' },
    { stage: 1, label: 'IMPUTATION', icon: Filter, detail: 'Median strategy continuous' },
    { stage: 2, label: 'SCALING', icon: Sliders, detail: 'StandardScaler normal variance' },
    { stage: 3, label: 'RANDOM FOREST', icon: Cpu, detail: '5-fold cross-validation folds' },
    { stage: 4, label: 'RECALL EVAL', icon: CheckCircle2, detail: 'Recall prioritized & ROC-AUC' },
  ];

  return (
    <div className="w-full rounded-xl bg-[#09090b]/90 border border-white/10 p-4 relative overflow-hidden font-mono text-xs select-none">
      {/* Visual System Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-2 text-sky-400 font-bold">
          <Database className="w-4 h-4" />
          <span>HEALTHCARE DATA PREPROCESSING & ML CLASSIFICATION</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>SCIKIT-LEARN PIPELINE</span>
        </div>
      </div>

      {/* Node Flow Diagram */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center py-2">
        {nodes.map((n, idx) => {
          const Icon = n.icon;
          const isActive = activeStage === idx;
          const isPassed = activeStage > idx;

          return (
            <div
              key={n.label}
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
                {n.label}
              </div>
              <div className="text-[9px] text-zinc-400 leading-tight">{n.detail}</div>
            </div>
          );
        })}
      </div>

      {/* Stage Detail Telemetry Status */}
      <div className="mt-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between text-[11px] text-zinc-300 gap-2">
        <span className="text-zinc-400 font-bold">PIPELINE METHODOLOGY:</span>
        <span className="text-sky-300">
          {activeStage === 0 && 'Ingesting 400 patient records across 24 clinical features.'}
          {activeStage === 1 && 'SimpleImputer continuous median & categorical mode replacement.'}
          {activeStage === 2 && 'StandardScaler fitting zero mean & unit variance within CV folds.'}
          {activeStage === 3 && 'Random Forest Ensemble classifier trained with 5-fold CV.'}
          {activeStage === 4 && 'Evaluating Confusion Matrix, ROC-AUC, and Recall optimization.'}
        </span>
        <span className="text-emerald-400 font-bold flex items-center gap-1 text-[10px]">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          STRICT DATA LEAKAGE PREVENTION
        </span>
      </div>
    </div>
  );
}
