'use client';

import Image from 'next/image';
import { CheckCircle2, Activity, Cpu, Code2 } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section
      id="demonstration"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-1">
              06 / LIVE DEMONSTRATION EVIDENCE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              VERIFIED PROJECT DEMO
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
            Photographic evidence of live AI healthcare prototype demonstration at university tech
            showcase.
          </p>
        </div>

        {/* Verified Event Demonstration Card */}
        <div className="rounded-2xl glass-panel border border-white/10 overflow-hidden bg-white/[0.01] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8">
          {/* Left Column: Technical Metadata */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-mono text-sky-300">
              <Activity className="w-3.5 h-3.5" />
              <span>LIVE SYSTEM CALIBRATION & DEMO</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              AI Physiotherapy Prototype Showcase
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Demonstrating the AI-Based Physiotherapy Assistance System live on stage. Processing
              webcam video feed at 30 FPS, extracting 33 MediaPipe pose landmarks, and displaying
              real-time joint angle posture feedback.
            </p>

            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="text-xs font-mono text-sky-400 font-bold flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5" />
                VERIFIED TECHNICAL OVERLAYS & ARCHITECTURE:
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-zinc-300">
                  MediaPipe 33 Landmarks
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-zinc-300">
                  OpenCV 30 FPS Stream
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-zinc-300">
                  Joint Vector Trigonometry
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-zinc-300">
                  Streamlit UI Overlay
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Demonstration Photo with Overlays */}
          <div className="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 group">
            <Image
              src="/images/ai-posture-analysis-booth.jpg"
              alt="Live Demonstration of AI Physiotherapy Assistance System"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent pointer-events-none" />

            {/* Top Overlay Badge */}
            <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-lg bg-[#09090b]/80 backdrop-blur-md border border-sky-500/40 text-[11px] font-mono font-bold text-sky-300 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-sky-400" />
              <span>LIVE DEMONSTRATION — 30 FPS MEDIAPIPE FEED</span>
            </div>

            {/* Bottom Overlay Info Bar */}
            <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-[#09090b]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px] font-mono">
              <span className="text-white font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                VERIFIED BOOTH DEMO
              </span>
              <span className="text-sky-400 font-bold">CHANDIGARH UNIVERSITY INCUBATOR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
