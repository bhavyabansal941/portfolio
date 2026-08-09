'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Hero3DScene } from '@/components/ui/hero-3d-scene';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { Compass, FileText, ArrowDown, ArrowUpRight, Cpu } from 'lucide-react';

export function IdentitySection() {
  const { candidate } = PORTFOLIO_DATA;

  return (
    <section
      id="identity"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#09090b]"
    >
      {/* Interactive 3D AI Core Canvas Background */}
      <Hero3DScene />

      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Identity & Primary CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Brand Tag / Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wide text-zinc-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sky-400 font-bold">BHAVYA // DIGITAL LAB</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400">AI × DATA × CV × SOFTWARE</span>
          </div>

          {/* Heading & Subtitle */}
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
              BHAVYA
              <br />
              <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
                BANSAL
              </span>
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono tracking-widest text-sky-400 uppercase">
              <span className="flex items-center gap-1.5 text-white font-bold">
                <Cpu className="w-4 h-4 text-sky-400" />
                ARTIFICIAL INTELLIGENCE & DATA SCIENCE
              </span>
              <span>•</span>
              <span className="text-zinc-400">EXPECTED GRADUATION: MAY 2027</span>
            </div>
          </div>

          {/* Concise Confident Statement */}
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
            Engineering practical software at the intersection of Computer Vision, Machine Learning,
            and Data Analytics. Focused on real-world landmark tracking, statistical pipelines, and
            clean software architecture.
          </p>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
              <div className="text-base font-bold font-mono text-white">{candidate.cgpa}</div>
              <div className="text-[11px] font-mono text-zinc-400 mt-0.5">Academic Rigor</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
              <div className="text-base font-bold font-mono text-white">20+ Hackathons</div>
              <div className="text-[11px] font-mono text-zinc-400 mt-0.5">Participations</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
              <div className="text-base font-bold font-mono text-white">4 Flagships</div>
              <div className="text-[11px] font-mono text-zinc-400 mt-0.5">AI & CV Systems</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
              <div className="text-base font-bold font-mono text-white">GGSIPU &apos;27</div>
              <div className="text-[11px] font-mono text-zinc-400 mt-0.5">May 2027 Degree</div>
            </div>
          </div>

          {/* Primary Action Buttons: [ EXPLORE WORK ] & [ VIEW RESUME ] */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#system-map"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-[#09090b] font-semibold text-sm tracking-wide hover:bg-sky-300 transition-all shadow-lg hover:shadow-sky-500/20 group"
            >
              <Compass className="w-4 h-4 text-[#09090b]" />
              <span>EXPLORE WORK</span>
              <ArrowDown className="w-4 h-4 text-[#09090b] group-hover:translate-y-0.5 transition-transform" />
            </a>

            <Link
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-sky-500/10 text-sky-300 font-medium text-sm border border-sky-500/30 hover:bg-sky-500/20 hover:border-sky-400 hover:text-white transition-all backdrop-blur-md group shadow-md"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>VIEW RESUME</span>
              <ArrowUpRight className="w-4 h-4 text-sky-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Identity Card (Single Portrait Strategy) */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-2xl overflow-hidden glass-panel p-2.5 border border-white/10 shadow-2xl group transition-all duration-500 hover:border-sky-500/40">
            {/* Ambient Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent z-10 opacity-80" />

            <Image
              src="/images/hero-portrait.jpg"
              alt="Bhavya Bansal — Artificial Intelligence & Data Science Undergraduate"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              priority
              className="object-cover object-center rounded-xl transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Overlay Metadata Badge */}
            <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/10 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white tracking-wide">BHAVYA BANSAL</span>
                <span className="px-2 py-0.5 rounded bg-sky-500/20 border border-sky-500/40 text-[10px] font-mono text-sky-300">
                  MAY 2027
                </span>
              </div>
              <div className="text-xs font-mono text-zinc-300">
                B.Tech AI & Data Science • GGSIPU
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-white/10 text-[11px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{candidate.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
