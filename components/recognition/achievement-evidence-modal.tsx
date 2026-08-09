'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { AchievementItem } from '@/data/portfolio-data';
import { X, Trophy, CheckCircle2, MapPin, Calendar } from 'lucide-react';

export function AchievementEvidenceModal({
  achievement,
  onClose,
}: {
  achievement: AchievementItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (achievement) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [achievement, onClose]);

  if (!achievement) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#09090b]/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border border-sky-500/40 bg-[#09090b]/95 p-6 sm:p-8 text-left space-y-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 border-b border-white/10 pb-4 pr-12">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold">
            <Trophy className="w-4 h-4 text-sky-400" />
            <span>VERIFIED COMPETITIVE EVIDENCE FRAME</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {achievement.title}
          </h2>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 pt-1">
            <span className="flex items-center gap-1 text-sky-300">
              <MapPin className="w-3.5 h-3.5" />
              {achievement.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-zinc-300">
              <Calendar className="w-3.5 h-3.5" />
              {achievement.year}
            </span>
          </div>
        </div>

        {/* High Resolution Photograph Display */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-zinc-950">
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Details & Summary */}
        <div className="space-y-3">
          <p className="text-sm text-zinc-200 leading-relaxed font-normal">{achievement.summary}</p>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300 leading-relaxed">
            <strong className="block text-sky-400 mb-1">EVALUATION CONTEXT:</strong>
            {achievement.details}
          </div>
        </div>

        {/* Verification Status */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-400">
          <span className="flex items-center gap-1.5 font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            VERIFIED EVENT PHOTOGRAPHIC EVIDENCE
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white text-[#09090b] font-bold text-xs hover:bg-sky-300 transition-all"
          >
            CLOSE VIEWER
          </button>
        </div>
      </div>
    </div>
  );
}
