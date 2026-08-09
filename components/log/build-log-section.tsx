'use client';

import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { GitBranch } from 'lucide-react';

export function BuildLogSection() {
  const { buildLogs } = PORTFOLIO_DATA;

  return (
    <section
      id="build-log"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-1">
              07 / ENGINEERING DISCIPLINE
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              HOW I BUILD & ITERATE
            </h2>
          </div>
          <p className="text-xs text-zinc-400 max-w-md font-mono">
            Documenting continuous production iteration, visual refinements, and content truth
            audits.
          </p>
        </div>

        {/* Compact Build Log List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {buildLogs.map((log) => (
            <div
              key={log.version}
              className="p-5 rounded-xl glass-panel border border-white/10 space-y-3 bg-white/[0.01]"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/30 text-[10px] font-mono font-bold text-sky-300">
                  {log.version}
                </span>
                <span className="text-[10px] font-mono text-zinc-500">{log.date}</span>
              </div>

              <h3 className="text-sm font-bold text-white tracking-tight">{log.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{log.summary}</p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {log.changes.map((change, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-zinc-400 flex items-center gap-1"
                  >
                    <GitBranch className="w-2.5 h-2.5 text-sky-400" />
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
