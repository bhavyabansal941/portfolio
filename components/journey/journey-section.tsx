'use client';

import { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { ChevronRight, Award } from 'lucide-react';

export function JourneySection() {
  const { journey } = PORTFOLIO_DATA;
  const [expandedYear, setExpandedYear] = useState<string>('2027');

  return (
    <section
      id="journey"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-1">
              04 / ENGINEERING JOURNEY
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              2023 → 2027 SPATIAL TIMELINE
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
            Academic progression from 2023 enrollment, competitive hackathons, award recognition,
            and target graduation.
          </p>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-10">
          {journey.map((item) => {
            const isExpanded = expandedYear === item.year;
            return (
              <div key={item.year} className="relative group">
                <div
                  onClick={() => setExpandedYear(item.year)}
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-2 transition-all cursor-pointer ${
                    isExpanded
                      ? 'bg-sky-400 border-white ring-4 ring-sky-500/20 scale-125'
                      : 'bg-[#09090b] border-zinc-600 hover:border-sky-400'
                  }`}
                />

                <div
                  onClick={() => setExpandedYear(item.year)}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isExpanded
                      ? 'bg-white/[0.03] border-sky-500/40 shadow-xl shadow-sky-500/5'
                      : 'bg-white/[0.01] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-black font-mono text-sky-400">
                        {item.year}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                    {item.badge && (
                      <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-mono font-bold text-sky-300 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5" />
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="text-xs font-mono text-zinc-400 mb-3">{item.role}</div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {isExpanded && (
                    <div className="pt-4 border-t border-white/10 space-y-2 animate-fade-in">
                      <h4 className="text-xs font-mono font-bold text-sky-400 uppercase">
                        KEY HIGHLIGHTS:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {item.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ChevronRight className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
