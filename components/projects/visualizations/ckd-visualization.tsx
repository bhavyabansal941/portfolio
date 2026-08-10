'use client';

import { Database, Filter, Sliders, Cpu, CheckCircle2 } from 'lucide-react';

interface Props {
  activeStage: number;
}

export function CKDVisualization({ activeStage }: Props) {
  // Preprocessing node pipeline stages
  const nodes = [
    { stage: 0, label: '4,000 RECORDS', icon: Database, detail: '21 clinical features' },
    { stage: 1, label: 'LEAKAGE DROP', icon: Filter, detail: 'ckd_pred & cluster removal' },
    { stage: 2, label: 'ENCODING', icon: Sliders, detail: 'Categorical & standard scaling' },
    { stage: 3, label: 'XGBoost MODEL', icon: Cpu, detail: '98.75% acc / 0.985 5-fold CV F1' },
    { stage: 4, label: 'STAGE 0–5 PREDICTION', icon: CheckCircle2, detail: 'GFR permutation importance' },
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
          {activeStage === 0 && 'Ingesting 4,000 patient records across 21 clinical & lifestyle features.'}
          {activeStage === 1 && 'Explicitly dropping ckd_pred & cluster columns to prevent target data leakage.'}
          {activeStage === 2 && 'One-hot encoding categorical lifestyle factors & standard scaling lab values.'}
          {activeStage === 3 && 'Evaluating Logistic Regression, Random Forest & XGBoost (98.75% acc / 0.985 CV F1).'}
          {activeStage === 4 && 'Permutation importance identified GFR as dominant feature in trained model.'}
        </span>
        <span className="text-emerald-400 font-bold flex items-center gap-1">
          <span>✓</span>
          <span>STRICT DATA LEAKAGE PREVENTION</span>
        </span>
      </div>
    </div>
  );
}
