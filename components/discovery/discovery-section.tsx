import { Award, Bot, Code2, Compass, GitCommit, Layers } from 'lucide-react';

const PATH_OPTIONS = [
  {
    id: 'projects',
    title: 'Featured Projects',
    subtitle: '4 Verified Case Studies',
    icon: Code2,
    anchor: '#projects',
    badge: 'INTERACTIVE CASE STUDIES',
  },
  {
    id: 'journey',
    title: 'Engineering Journey',
    subtitle: '2024 → 2026 Chronological Progression',
    icon: GitCommit,
    anchor: '#journey',
    badge: 'TIMELINE',
  },
  {
    id: 'toolkit',
    title: 'Skills Constellation',
    subtitle: 'Interactive Skill Map & Usage Cards',
    icon: Layers,
    anchor: '#toolkit',
    badge: 'CAPABILITIES',
  },
  {
    id: 'recognition',
    title: 'Recognition & Impact',
    subtitle: 'World Entrepreneurs Day 1st Place',
    icon: Award,
    anchor: '#recognition',
    badge: 'AWARDS',
  },
  {
    id: 'assistant',
    title: 'Ask About Bhavya',
    subtitle: 'Guided Portfolio Assistant',
    icon: Bot,
    anchor: '#assistant',
    badge: 'ASSISTANT',
  },
];

export function DiscoverySection() {
  return (
    <section id="discovery" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400">
            <Compass className="w-3.5 h-3.5" />
            <span>DISCOVERY MODE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            WHAT WOULD YOU LIKE TO EXPLORE?
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 font-mono">
            Select a pathway below to jump directly to verified engineering proof, timeline
            progression, or guided assistant answers.
          </p>
        </div>

        {/* Discovery Pathway Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PATH_OPTIONS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.anchor}
                className="p-5 rounded-2xl glass-panel border border-white/[0.08] hover:border-sky-500/40 hover:bg-sky-500/[0.04] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-sky-500/30 group-hover:bg-sky-500/10 transition-all">
                      <Icon className="w-4 h-4 text-zinc-300 group-hover:text-sky-400 transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 group-hover:text-sky-400 transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-zinc-400 leading-relaxed font-mono">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-500 group-hover:text-white">
                  <span>EXPLORE PATH</span>
                  <span className="text-sky-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
