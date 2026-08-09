import Image from 'next/image';
import { Award, Trophy } from 'lucide-react';

export function RecognitionSection() {
  return (
    <section id="recognition" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
            04 / RECOGNITION & AWARDS
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Competitive Recognition & Impact
          </h2>
        </div>

        {/* Hero Achievement Block: World Entrepreneurs Day 1st Place */}
        <div className="mb-12 p-8 sm:p-10 rounded-2xl glass-panel border border-sky-500/30 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-500/40 text-xs font-mono text-sky-300">
                <Trophy className="w-3.5 h-3.5" />
                <span>1ST PLACE WINNER</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                World Entrepreneurs Day Competition
              </h3>

              {/* Parameter Matrix: WHAT, WHEN, WHERE, WHY IT MATTERS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono border-y border-white/10 py-4">
                <div>
                  <span className="text-zinc-500 block mb-0.5">WHEN:</span>
                  <span className="text-zinc-200">2025</span>
                </div>
                <div>
                  <span className="text-zinc-500 block mb-0.5">WHERE:</span>
                  <span className="text-zinc-200">Chandigarh University Incubator</span>
                </div>
                <div>
                  <span className="text-zinc-500 block mb-0.5">WHAT:</span>
                  <span className="text-zinc-200">AI Healthcare Prototype</span>
                </div>
                <div>
                  <span className="text-zinc-500 block mb-0.5">RECOGNITION:</span>
                  <span className="text-sky-400 font-bold">1st Place Award</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Awarded 1st place for designing and pitching an applied AI healthcare assistance
                prototype. Evaluated on technical solution architecture, geometric pose estimation,
                and live system demonstration.
              </p>
            </div>

            {/* Right Photo: Single Instance of Verified Ceremony Photo (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[4/3] group">
                <Image
                  src="/images/world-entrepreneurs-day-winner.jpg"
                  alt="Bhavya Bansal receiving 1st Place Trophy at World Entrepreneurs Day Competition"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-[11px] font-mono text-zinc-300 bg-[#09090b]/80 backdrop-blur-md p-2 rounded border border-white/10">
                  🏆 1st Place Trophy Presentation Ceremony
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Achievement Card: India Innovates 2026 */}
        <div className="p-8 rounded-2xl glass-panel border border-white/[0.08] hover:border-sky-500/30 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-sky-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">
                  India Innovates 2026 — National Finalist
                </h4>
                <div className="text-xs font-mono text-zinc-400">
                  Bharat Mandapam, New Delhi • Healthcare Open Innovation Track
                </div>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-zinc-300">
              NATIONAL SUMMIT
            </span>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed max-w-4xl">
            Represented GGSIPU in the Healthcare Open Innovation track at Bharat Mandapam,
            presenting applied AI posture tracking solutions to national tech leaders and innovation
            committees.
          </p>
        </div>
      </div>
    </section>
  );
}
