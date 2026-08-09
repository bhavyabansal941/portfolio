import { ArrowRight, CheckCircle2, Code2, RefreshCw, TestTube2 } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    label: 'LEARN',
    title: 'Theory & Foundations',
    description:
      'Mastering mathematical foundations, computer vision algorithms, and data preprocessing standards.',
    icon: Code2,
    color: 'text-sky-400',
  },
  {
    step: '02',
    label: 'BUILD',
    title: 'Practical Prototypes',
    description:
      'Translating concepts into functional Python, MediaPipe, and Scikit-learn repositories.',
    icon: RefreshCw,
    color: 'text-[#60a5fa]',
  },
  {
    step: '03',
    label: 'TEST',
    title: 'Hackathons & Feedback',
    description:
      'Testing projects under time constraints in 20+ competitive hackathons and live innovation booths.',
    icon: TestTube2,
    color: 'text-emerald-400',
  },
  {
    step: '04',
    label: 'IMPROVE',
    title: 'Refinement & Iteration',
    description:
      'Refactoring code architecture, improving evaluation metrics, and updating technical documentation.',
    icon: CheckCircle2,
    color: 'text-purple-400',
  },
];

export function LearningSection() {
  return (
    <section id="learning" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
            06 / LEARNING METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Active Learning & Iterative Growth
          </h2>
        </div>

        {/* Visual Flow: LEARN -> BUILD -> TEST -> IMPROVE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-6 rounded-2xl glass-panel border border-white/[0.08] relative group hover:border-sky-500/30 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-zinc-500 font-bold">
                    STEP {item.step}
                  </span>
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 font-bold ${item.color}`}
                  >
                    {item.label}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 inline-block mb-3">
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-600">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
