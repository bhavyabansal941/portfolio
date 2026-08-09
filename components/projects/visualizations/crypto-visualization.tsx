'use client';

import { TrendingUp } from 'lucide-react';

interface Props {
  activeStage: number;
  selectedCoin: string;
}

export function CryptoVisualization({ activeStage, selectedCoin }: Props) {
  // Asset specific demonstration parameters
  const coinData: Record<
    string,
    { label: string; sma7: string; sma30: string; baselineRMSE: string; lstmRMSE: string }
  > = {
    BTC: {
      label: 'Bitcoin (BTC)',
      sma7: '+4.2%',
      sma30: '+12.8%',
      baselineRMSE: '0.0412',
      lstmRMSE: '0.0384',
    },
    ETH: {
      label: 'Ethereum (ETH)',
      sma7: '+3.1%',
      sma30: '+9.4%',
      baselineRMSE: '0.0485',
      lstmRMSE: '0.0421',
    },
    SOL: {
      label: 'Solana (SOL)',
      sma7: '+8.6%',
      sma30: '+24.1%',
      baselineRMSE: '0.0610',
      lstmRMSE: '0.0518',
    },
    ADA: {
      label: 'Cardano (ADA)',
      sma7: '+1.5%',
      sma30: '+4.2%',
      baselineRMSE: '0.0390',
      lstmRMSE: '0.0365',
    },
    DOGE: {
      label: 'Dogecoin (DOGE)',
      sma7: '+11.4%',
      sma30: '+31.0%',
      baselineRMSE: '0.0890',
      lstmRMSE: '0.0740',
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
        {/* Simulated Time-Series Chart Curve SVG */}
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
            <span className="text-zinc-400">7-DAY SMA SHIFT:</span>
            <span className="text-sky-300 font-bold">{currentCoin.sma7}</span>
          </div>
          <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex justify-between items-center">
            <span className="text-zinc-400">30-DAY EMA TREND:</span>
            <span className="text-sky-300 font-bold">{currentCoin.sma30}</span>
          </div>
          <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex justify-between items-center">
            <span className="text-zinc-400">NAIVE BASELINE RMSE (t-1):</span>
            <span className="text-amber-300 font-mono font-bold">{currentCoin.baselineRMSE}</span>
          </div>
          <div className="p-2 rounded bg-sky-500/10 border border-sky-500/30 flex justify-between items-center">
            <span className="text-sky-200">LSTM MODEL RMSE:</span>
            <span className="text-emerald-400 font-mono font-bold">{currentCoin.lstmRMSE}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
