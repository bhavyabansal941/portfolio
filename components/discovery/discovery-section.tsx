'use client';

import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export function DiscoverySection() {
  const { journey } = PORTFOLIO_DATA;

  return (
    <section
      id="journey-legacy"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-1">
              CHRONOLOGICAL TIMELINE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              2023 → 2027 ENGINEERING PROGRESSION
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
            Key milestones from 2023 academic enrollment to 1st place competitive recognition and
            Expected May 2027 graduation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {journey.map((item) => (
            <div
              key={item.year}
              className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4 bg-white/[0.01] hover:border-sky-500/30 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-mono text-sky-400">{item.year}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/30 text-[10px] font-mono text-sky-300 font-bold">
                    {item.badge}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                <span className="text-xs font-mono text-zinc-400">{item.role}</span>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
