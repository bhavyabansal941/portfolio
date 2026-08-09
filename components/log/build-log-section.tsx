'use client';

import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { GitBranch } from 'lucide-react';

export function BuildLogSection() {
  const { buildLogs } = PORTFOLIO_DATA;

  return (
    <section
      id="build-log"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-1">
              07 / BUILD LOG & DISCIPLINE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>PORTFOLIO ITERATIONS</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
            Documenting the engineering evolution, visual refinements, and content truth audits of
            this web application.
          </p>
        </div>

        <div className="space-y-6">
          {buildLogs.map((log) => (
            <div
              key={log.version}
              className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 space-y-4 bg-white/[0.01]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/30 text-xs font-mono font-bold text-sky-300">
                    {log.version}
                  </span>
                  <h3 className="text-lg font-bold text-[#f4f4f5] tracking-tight">{log.title}</h3>
                </div>
                <span className="text-xs font-mono text-zinc-500">{log.date}</span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{log.summary}</p>

              <div className="flex flex-wrap gap-2 pt-1">
                {log.changes.map((change, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-1.5"
                  >
                    <GitBranch className="w-3 h-3 text-sky-400" />
                    {change}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
