import { Cpu, Database, Eye, LineChart } from 'lucide-react';

const FOCUS_AREAS = [
  {
    number: '01',
    title: 'Artificial Intelligence & Data Science',
    description:
      'Applying statistical modeling, feature engineering, and core AI algorithms to solve practical analytical challenges.',
    icon: Cpu,
  },
  {
    number: '02',
    title: 'Data Analytics & SQL',
    description:
      'Extracting insights from structured data using SQL, Pandas, NumPy, and building interactive dashboards in Power BI and Excel.',
    icon: Database,
  },
  {
    number: '03',
    title: 'Computer Vision',
    description:
      'Developing real-time posture tracking and spatial motion estimation systems using MediaPipe 33 landmark tracking and OpenCV.',
    icon: Eye,
  },
  {
    number: '04',
    title: 'Machine Learning',
    description:
      'Building diagnostic classification pipelines with Scikit-learn, handling missing value imputation, scaling, and precision/recall evaluation.',
    icon: LineChart,
  },
];

export function FocusSection() {
  return (
    <section id="focus" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
            01 / CORE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Current Focus & Technical Specializations
          </h2>
        </div>

        {/* 4-Area Compact Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOCUS_AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.number}
                className="group relative p-6 rounded-2xl glass-panel border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-zinc-500 group-hover:text-sky-400 transition-colors">
                      {area.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-sky-500/30 group-hover:bg-sky-500/10 transition-all">
                      <Icon className="w-5 h-5 text-zinc-300 group-hover:text-sky-400 transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300">
                  <span>ACTIVE PRACTICE</span>
                  <span className="text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
