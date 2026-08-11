'use client';

import { BarChart3, ShieldCheck } from 'lucide-react';

export function CKDEvaluationChart() {
  const rankedFeatures = [
    {
      rank: 1,
      feature: 'GFR (Glomerular Filtration Rate)',
      label: 'DOMINANT PREDICTOR',
      badge: 'RANK #1 · PRIMARY SIGNAL',
      indicatorWidth: '100%',
      isDominant: true,
    },
    {
      rank: 2,
      feature: 'C3 / C4 Complement Levels',
      label: 'CLINICAL KIDNEY MARKER',
      badge: 'RANK #2 · SECONDARY SIGNAL',
      indicatorWidth: '60%',
      isDominant: false,
    },
    {
      rank: 3,
      feature: 'BUN / Blood Urea',
      label: 'KIDNEY FUNCTION MARKER',
      badge: 'RANK #3 · TERTIARY SIGNAL',
      indicatorWidth: '40%',
      isDominant: false,
    },
    {
      rank: 4,
      feature: 'Blood Pressure',
      label: 'CARDIOVASCULAR / RENAL MARKER',
      badge: 'RANK #4 · SUPPORTING SIGNAL',
      indicatorWidth: '25%',
      isDominant: false,
    },
  ];

  const modelComparison = [
    {
      model: 'XGBoost (best)',
      accuracy: '98.75%',
      weightedF1: '0.987',
      cvAccuracy: '0.985',
      status: 'SELECTED MODEL',
    },
    {
      model: 'Random Forest',
      accuracy: '98.63%',
      weightedF1: '0.985',
      cvAccuracy: '0.984',
      status: 'BASELINE COMPARISON',
    },
    {
      model: 'Logistic Regression',
      accuracy: '93.75%',
      weightedF1: '0.937',
      cvAccuracy: '0.940',
      status: 'BASELINE COMPARISON',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Relative Permutation Importance Rank */}
      <div className="rounded-xl border border-white/10 bg-[#060608] p-4 sm:p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400">
            <BarChart3 className="w-4 h-4 text-sky-400" />
            <span>RELATIVE PERMUTATION IMPORTANCE RANK</span>
          </div>
          <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
            MODEL-AGNOSTIC EVALUATION
          </span>
        </div>

        <div className="space-y-3">
          {rankedFeatures.map((item) => (
            <div key={item.feature} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex flex-wrap justify-between items-center text-[11px] font-mono gap-1">
                <span className={`font-bold ${item.isDominant ? 'text-sky-300' : 'text-zinc-300'}`}>
                  {item.rank}. {item.feature}
                </span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded ${
                    item.isDominant
                      ? 'bg-sky-500/10 text-sky-300 border border-sky-500/30 font-bold'
                      : 'bg-white/5 text-zinc-400 border border-white/10'
                  }`}
                >
                  {item.badge}
                </span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    item.isDominant ? 'bg-gradient-to-r from-sky-500 to-cyan-400' : 'bg-zinc-600'
                  }`}
                  style={{ width: item.indicatorWidth }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/10 text-[10px] font-mono text-zinc-400 space-y-1">
          <div className="text-sky-400 font-bold">Source: urine-test-disease-prediction/README.md</div>
          <div>
            Evidence: Permutation importance identified GFR as the dominant predictor by a wide margin, followed by C3/C4 complement levels, BUN, and blood pressure.
          </div>
        </div>
      </div>

      {/* Verified Model Results Table */}
      <div className="rounded-xl border border-white/10 bg-[#060608] overflow-hidden space-y-0">
        <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            VERIFIED MODEL EVALUATION BENCHMARK
          </span>
          <span className="text-[10px] text-zinc-400">LEAKAGE DROPPED (ckd_pred, cluster)</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] font-mono border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-zinc-400 bg-white/[0.02]">
                <th className="py-2.5 px-4 font-semibold">MODEL</th>
                <th className="py-2.5 px-4 font-semibold">ACCURACY</th>
                <th className="py-2.5 px-4 font-semibold">WEIGHTED F1</th>
                <th className="py-2.5 px-4 font-semibold">5-FOLD CV ACCURACY</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-zinc-300">
              {modelComparison.map((row) => (
                <tr
                  key={row.model}
                  className={`transition-colors ${
                    row.status.includes('SELECTED') ? 'bg-sky-500/10 font-bold' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <td className="py-2.5 px-4 text-white flex items-center gap-2">
                    {row.model}
                    {row.status.includes('SELECTED') && (
                      <span className="px-1.5 py-0.5 text-[9px] rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        BEST
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-4 text-sky-300 font-bold">{row.accuracy}</td>
                  <td className="py-2.5 px-4 text-emerald-300 font-bold">{row.weightedF1}</td>
                  <td className="py-2.5 px-4 text-zinc-300">{row.cvAccuracy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-2 border-t border-white/10 bg-white/[0.01] text-[10px] font-mono text-zinc-400">
          Source: urine-test-disease-prediction/README.md (Results Table)
        </div>
      </div>
    </div>
  );
}
