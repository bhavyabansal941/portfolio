'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA, AchievementItem } from '@/data/portfolio-data';
import { AchievementEvidenceModal } from '@/components/recognition/achievement-evidence-modal';
import { Trophy, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export function RecognitionSection() {
  const { achievements } = PORTFOLIO_DATA;
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);

  return (
    <section
      id="achievements"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-1">
              05 / ACHIEVEMENTS & RECOGNITION
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>COMPETITIVE EVIDENCE</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
            Verified university awards and national innovation finalist recognitions. Click any card
            to inspect full photographic evidence.
          </p>
        </div>

        {/* Achievement Evidence Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedAchievement(item)}
              className="rounded-2xl glass-panel border border-white/10 overflow-hidden hover:border-sky-400 transition-all duration-300 bg-white/[0.01] group flex flex-col justify-between cursor-pointer"
            >
              {/* Event Evidence Photograph Container */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-90" />

                {/* Award Badge Overlay */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-lg bg-[#09090b]/80 backdrop-blur-md border border-sky-500/40 text-xs font-mono font-bold text-sky-300 flex items-center gap-2">
                  <Trophy className="w-3.5 h-3.5 text-sky-400" />
                  <span>{item.award}</span>
                </div>

                {/* View Evidence Hover Overlay Button */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-lg bg-sky-500 text-white text-xs font-mono font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <span>VIEW EVIDENCE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>

                {/* Location Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-xs font-mono text-zinc-300">
                  <span>{item.location}</span> • <span className="text-sky-400">{item.year}</span>
                </div>
              </div>

              {/* Card Content Details */}
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{item.summary}</p>
                <p className="text-xs text-zinc-400 font-mono leading-relaxed border-l-2 border-sky-500/40 pl-3">
                  {item.details}
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>VERIFIED COMPETITIVE AWARD</span>
                  </span>
                  <span className="text-sky-400 flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                    <span>INSPECT EVIDENCE</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      <AchievementEvidenceModal
        achievement={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </section>
  );
}
