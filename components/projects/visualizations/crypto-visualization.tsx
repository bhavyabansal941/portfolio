'use client';

import { TrendingUp } from 'lucide-react';

interface Props {
  activeStage: number;
  selectedCoin: string;
}

export function CryptoVisualization({ activeStage, selectedCoin }: Props) {
  // Asset specific benchmark parameters (Source: Crypto Market Analysis/models/training_summary_v2.csv)
  const coinData: Record<
    string,
    { label: string; lstmMAPE: string; naiveMAPE: string; verdict: string; verdictType: 'superior' | 'baseline' | 'parity' }
  > = {
    ADA: {
      label: 'Cardano (ADA)',
      lstmMAPE: '3.47%',
      naiveMAPE: '3.48%',
      verdict: 'LSTM Superior (Marginal)',
      verdictType: 'superior',
    },
    BTC: {
      label: 'Bitcoin (BTC)',
      lstmMAPE: '2.59%',
      naiveMAPE: '1.69%',
      verdict: 'Naive Baseline Superior',
      verdictType: 'baseline',
    },
    DOGE: {
      label: 'Dogecoin (DOGE)',
      lstmMAPE: '2.42%',
      naiveMAPE: '1.95%',
      verdict: 'Naive Baseline Superior',
      verdictType: 'baseline',
    },
    ETH: {
      label: 'Ethereum (ETH)',
      lstmMAPE: '2.28%',
      naiveMAPE: '2.23%',
      verdict: 'Near Parity',
      verdictType: 'parity',
    },
    SOL: {
      label: 'Solana (SOL)',
      lstmMAPE: '2.86%',
      naiveMAPE: '2.62%',
      verdict: 'Naive Baseline Superior',
      verdictType: 'baseline',
    },
  };

  const currentCoin = coinData[selectedCoin] || coinData['BTC'];

  return (
    <div className="w-full rounded-xl bg-[#09090b]/90 border border-white/10 p-4 relative overflow-hidden font-mono text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-2 text-sky-400 font-bold">
          <TrendingUp className="w-4 h-4" />
          <span>MULTI-ASSET TIME-SERIES & BASELINE BENCHMARK</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span>COINGECKO API SQL ETL</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Time-Series Chart Curve SVG */}
        <div className="md:col-span-7 bg-white/[0.02] p-3 rounded-lg border border-white/5 relative">
          <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-2">
            <span className="text-white font-bold">{currentCoin.label} Daily OHLCV</span>
            <span className="text-sky-300">SMA-7 Overlay</span>
          </div>

          <svg viewBox="0 0 200 70" className="w-full h-24 overflow-visible">
            {/* Grid Lines */}
            <line
              x1="0"
              y1="15"
              x2="200"
              y2="15"
              stroke="#27272a"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
            <line
              x1="0"
              y1="35"
              x2="200"
              y2="35"
              stroke="#27272a"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
            <line
              x1="0"
              y1="55"
              x2="200"
              y2="55"
              stroke="#27272a"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />

            {/* Historical Price Curve (Base) */}
            <path
              d="M 0 50 Q 30 20, 60 40 T 120 25 T 160 45 T 200 18"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />

            {/* 7-Day Moving Average Curve (Overlay) */}
            {activeStage >= 3 && (
              <path
                d="M 0 45 Q 30 25, 60 38 T 120 28 T 160 40 T 200 22"
                fill="none"
                stroke="#818cf8"
                strokeWidth="1"
                strokeDasharray="2,1"
              />
            )}

            {/* LSTM Next-Day Forecast Marker */}
            {activeStage >= 4 && (
              <g>
                <circle cx="195" cy="20" r="3.5" fill="#34d399" />
                <circle
                  cx="195"
                  cy="20"
                  r="6"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="0.5"
                  className="animate-ping"
                />
                <text x="145" y="12" fill="#34d399" fontSize="6" fontWeight="bold">
                  LSTM FORECAST
                </text>
              </g>
            )}
          </svg>

          <div className="flex items-center justify-between text-[9px] text-zinc-500 pt-1 border-t border-white/5">
            <span>t-30 Rolling Days</span>
            <span>t (Current)</span>
            <span>t+1 Forecast</span>
          </div>
        </div>

        {/* Technical Metric Indicators */}
        <div className="md:col-span-5 space-y-2 text-[10px]">
          <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex justify-between items-center">
            <span className="text-zinc-400">LSTM MODEL MAPE:</span>
            <span className="text-sky-300 font-mono font-bold">{currentCoin.lstmMAPE}</span>
          </div>
          <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex justify-between items-center">
            <span className="text-zinc-400">NAIVE BASELINE MAPE (t-1):</span>
            <span className="text-amber-300 font-mono font-bold">{currentCoin.naiveMAPE}</span>
          </div>
          <div className="p-2 rounded bg-sky-500/10 border border-sky-500/30 flex justify-between items-center">
            <span className="text-zinc-300">BENCHMARK VERDICT:</span>
            <span
              className={`font-mono font-bold px-1.5 py-0.5 rounded text-[9.5px] ${
                currentCoin.verdictType === 'superior'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : currentCoin.verdictType === 'baseline'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
              }`}
            >
              {currentCoin.verdict}
            </span>
          </div>
          <div className="text-[9px] text-zinc-500 text-right pt-0.5 italic">
            Source: training_summary_v2.csv
          </div>
        </div>
      </div>
    </div>
  );
}
