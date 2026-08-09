import { History } from 'lucide-react';

interface LogEntry {
  date: string;
  version: string;
  title: string;
  description: string;
}

const LOG_ENTRIES: LogEntry[] = [
  {
    date: '2026-08-09',
    version: 'v3.0.0',
    title: 'Interactive Digital Experience & Recruiter Mode Release',
    description:
      'Engineered Portfolio V3 with Three.js 3D spatial canvas, interactive case study drawers, skills constellation, and executive Recruiter Mode.',
  },
  {
    date: '2026-08-07',
    version: 'v2.1.0',
    title: 'Resume Version 3.0 Final Integration',
    description:
      'Refined factual candidate resume data (CGPA 9.03/10.0, exact project bullets) and established printable /resume web route.',
  },
  {
    date: '2026-08-05',
    version: 'v2.0.0',
    title: 'Public GitHub Repository & Vercel Deployment',
    description:
      'Cleaned internal AI instruction files, initialized public repository bhavyabansal941/portfolio, and verified static Turbopack production builds.',
  },
  {
    date: '2025-08-21',
    version: 'v1.0.0',
    title: 'World Entrepreneurs Day 1st Place Win',
    description:
      'Awarded 1st place for AI Physiotherapy Assistance System prototype pitch at Chandigarh University Incubator.',
  },
];

export function BuildLogSection() {
  return (
    <section id="log" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
              05 / ENGINEERING CHANGELOG
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">BUILD LOG</h2>
          </div>
          <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
            <History className="w-4 h-4 text-sky-400" />
            <span>ACTIVE REPOSITORY MAINTENANCE</span>
          </div>
        </div>

        {/* Changelog Entries Stream */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LOG_ENTRIES.map((entry) => (
            <div
              key={entry.date}
              className="p-5 rounded-2xl glass-panel border border-white/[0.08] hover:border-sky-500/30 transition-all text-left space-y-2"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-sky-400 font-bold">{entry.version}</span>
                <span className="text-zinc-500">{entry.date}</span>
              </div>

              <h3 className="text-base font-bold text-white leading-snug">{entry.title}</h3>

              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
