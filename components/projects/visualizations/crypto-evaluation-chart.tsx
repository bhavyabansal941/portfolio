'use client';

import { useState } from 'react';
import { TrendingUp, AlertTriangle } from 'lucide-react';

interface CryptoEvaluationChartProps {
  evaluationTable?: {
    asset: string;
    modelMape: string;
    baselineMape: string;
    verdict: string;
  }[];
}

export function CryptoEvaluationChart({ evaluationTable }: CryptoEvaluationChartProps) {
  const defaultTable = [
    { asset: 'ADA', modelMape: '3.47%', baselineMape: '3.48%', verdict: 'Outperforms Baseline (Marginal)' },
    { asset: 'BTC', modelMape: '2.59%', baselineMape: '1.69%', verdict: 'Naive Baseline Superior' },
    { asset: 'DOGE', modelMape: '2.42%', baselineMape: '1.95%', verdict: 'Naive Baseline Superior' },
    { asset: 'ETH', modelMape: '2.28%', baselineMape: '2.23%', verdict: 'Near Parity' },
    { asset: 'SOL', modelMape: '2.86%', baselineMape: '2.62%', verdict: 'Naive Baseline Superior' },
  ];

  const tableData = evaluationTable && evaluationTable.length > 0 ? evaluationTable : defaultTable;
  const [selectedAsset, setSelectedAsset] = useState<string>('BTC');

  const selectedRow = tableData.find((r) => r.asset === selectedAsset) || tableData[0];
  const modelMapeNum = parseFloat(selectedRow.modelMape.replace('%', ''));
  const baselineMapeNum = parseFloat(selectedRow.baselineMape.replace('%', ''));
  const maxVal = Math.max(modelMapeNum, baselineMapeNum, 4.0);

  return (
    <div className="space-y-6">
      {/* Interactive Asset Switcher & Visual Comparison Bar */}
      <div className="rounded-xl border border-white/10 bg-[#060608] p-4 sm:p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400">
            <TrendingUp className="w-4 h-4 text-sky-400" />
            <span>LSTM NEURAL MODEL VS NAIVE PERSISTENCE BASELINE (MAPE %)</span>
          </div>
          <div className="flex items-center gap-1.5">
            {tableData.map((row) => (
              <button
                key={row.asset}
                onClick={() => setSelectedAsset(row.asset)}
                className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                  selectedAsset === row.asset
                    ? 'bg-sky-500 text-white font-bold shadow-md'
                    : 'bg-white/5 text-zinc-400 hover:bg-white/10'
                }`}
              >
                {row.asset}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Asset Bar Comparison */}
        <div className="space-y-3 pt-1">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-zinc-300 font-bold">ASSET SELECTION: {selectedAsset} / USD</span>
            <span className="text-zinc-400 text-[11px]">BENCHMARK SOURCE: training_summary_v2.csv</span>
          </div>

          <div className="space-y-2">
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[11px] font-mono">
                <span className="text-sky-300">LSTM Neural Model MAPE:</span>
                <span className="text-sky-300 font-bold">{selectedRow.modelMape}</span>
              </div>
              <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
                <div
                  className="h-full bg-sky-400 rounded-full transition-all duration-300"
                  style={{ width: `${(modelMapeNum / maxVal) * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center text-[11px] font-mono">
                <span className="text-amber-300">Naive Persistence (t-1) MAPE:</span>
                <span className="text-amber-300 font-bold">{selectedRow.baselineMape}</span>
              </div>
              <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-300"
                  style={{ width: `${(baselineMapeNum / maxVal) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/10 flex items-start gap-2.5 text-[11px] font-mono text-zinc-300">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-amber-300 font-bold block mb-0.5">EVALUATION VERDICT: {selectedRow.verdict}</span>
              <p className="text-zinc-400 text-[10px] leading-relaxed">
                Demonstrates standard financial random walk behavior where a simple naive &quot;no change&quot; persistence baseline matches or outperforms deep sequential neural networks on high-frequency asset return prediction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Benchmark Matrix */}
      <div className="rounded-xl border border-white/10 bg-[#060608] overflow-hidden">
        <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
          <span className="text-sky-400 font-bold">MULTI-ASSET EVALUATION SUMMARY (5 CRYPTO ASSETS)</span>
          <span className="text-[10px] text-zinc-500">COINGECKO REST API ETL</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] font-mono border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-zinc-400 bg-white/[0.02]">
                <th className="py-2.5 px-4 font-semibold">ASSET</th>
                <th className="py-2.5 px-4 font-semibold">LSTM MAPE</th>
                <th className="py-2.5 px-4 font-semibold">NAIVE BASELINE MAPE</th>
                <th className="py-2.5 px-4 font-semibold">VERDICT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-zinc-300">
              {tableData.map((row) => (
                <tr
                  key={row.asset}
                  onClick={() => setSelectedAsset(row.asset)}
                  className={`cursor-pointer transition-colors ${
                    selectedAsset === row.asset ? 'bg-sky-500/10' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <td className="py-2.5 px-4 font-bold text-white flex items-center gap-2">
                    {row.asset}
                    {selectedAsset === row.asset && <span className="text-[10px] text-sky-400">●</span>}
                  </td>
                  <td className="py-2.5 px-4 text-sky-300">{row.modelMape}</td>
                  <td className="py-2.5 px-4 text-amber-300">{row.baselineMape}</td>
                  <td className="py-2.5 px-4">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] ${
                        row.verdict.includes('Outperforms')
                          ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold'
                          : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                      }`}
                    >
                      {row.verdict}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
