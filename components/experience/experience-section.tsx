import Image from 'next/image';
import { BookOpen, Layers, Users } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
            03 / EXPERIENCE & TECHNICAL LEADERSHIP
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Practical Work, Hackathons & Training
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Timeline Stream (7 cols) */}
          <div className="lg:col-span-7 space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-white/10">
            {/* Timeline Item 1: IBM SkillsBuild */}
            <div className="relative pl-10 group">
              <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-[#121215] border border-white/20 group-hover:border-sky-400 flex items-center justify-center transition-colors">
                <BookOpen className="w-3.5 h-3.5 text-sky-400" />
              </div>

              <div className="p-6 rounded-2xl glass-panel border border-white/[0.08] group-hover:border-sky-500/30 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">
                    IBM SkillsBuild & Enterprise Training
                  </h3>
                  <span className="text-xs font-mono text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                    PROGRAM GRADUATE
                  </span>
                </div>

                <div className="text-xs font-mono text-zinc-400 mb-3">
                  Generative AI & Foundation Models Curriculum
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                  Completed structured technical training on transformer model architectures, prompt
                  engineering patterns, and model evaluation metrics for natural language processing
                  workflows.
                </p>
              </div>
            </div>

            {/* Timeline Item 2: Innovation Cell Leadership */}
            <div className="relative pl-10 group">
              <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-[#121215] border border-white/20 group-hover:border-sky-400 flex items-center justify-center transition-colors">
                <Users className="w-3.5 h-3.5 text-sky-400" />
              </div>

              <div className="p-6 rounded-2xl glass-panel border border-white/[0.08] group-hover:border-sky-500/30 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">
                    Student Innovation Cell & Technical Societies
                  </h3>
                  <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    TEAM LEADER & CONTRIBUTOR
                  </span>
                </div>

                <div className="text-xs font-mono text-zinc-400 mb-3">
                  GGSIPU University • 20+ Hackathon Participations
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                  Gained practical engineering experience across 20+ hackathon participations,
                  handling rapid code integration, statistical model training, and live technical
                  solution demonstrations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Single High-Impact Evidence Photo (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden glass-panel p-2 border border-white/10 shadow-2xl group">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/ai-posture-analysis-booth.jpg"
                  alt="Bhavya Bansal demonstrating AI Posture Analysis prototype at university innovation booth"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-4 text-left">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>VERIFIED EVENT DEMONSTRATION</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Live demonstration of the AI Physiotherapy posture tracking system to university
                  faculty and innovation judges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
