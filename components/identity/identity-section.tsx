'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Hero3DScene } from '@/components/ui/hero-3d-scene';
import { ArrowDown, ArrowUpRight, Compass, FileText } from 'lucide-react';

const SYSTEM_NODES = [
  { label: '9.03 CGPA', subtitle: 'Academic Rigor' },
  { label: '20+ Hackathon Participations', subtitle: 'Competitive Building' },
  { label: '4 Featured Projects', subtitle: 'Computer Vision & ML' },
  { label: 'AI & Data Science', subtitle: 'GGSIPU Class of 2026' },
];

export function IdentitySection() {
  return (
    <section
      id="identity"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#09090b]"
    >
      {/* Interactive 3D Spatial Canvas Background */}
      <Hero3DScene />

      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Identity & Primary CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wide text-zinc-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-zinc-400">STATUS:</span> Open to Technical Internship
            Opportunities
          </div>

          {/* Heading & Subtitle */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
              BHAVYA BANSAL
            </h1>
            <p className="text-xs sm:text-sm font-mono tracking-widest text-sky-400 uppercase">
              ARTIFICIAL INTELLIGENCE & DATA SCIENCE UNDERGRADUATE
            </p>
          </div>

          {/* Concise Confident Supporting Statement */}
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
            Building practical software at the intersection of Computer Vision, Machine Learning,
            and Data Analytics. Focused on real-world application, statistical preprocessing, and
            clean architecture.
          </p>

          {/* Primary Action Buttons: [ EXPLORE ] & [ VIEW RESUME ] */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            {/* Explore Button */}
            <a
              href="#discovery"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-[#09090b] font-semibold text-sm tracking-wide hover:bg-sky-300 transition-all shadow-lg hover:shadow-sky-500/20 group"
            >
              <Compass className="w-4 h-4 text-[#09090b]" />
              <span>EXPLORE</span>
              <ArrowDown className="w-4 h-4 text-[#09090b] group-hover:translate-y-0.5 transition-transform" />
            </a>

            {/* View Resume Button - Visible, High-Contrast, Opens /resume */}
            <Link
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.04] text-zinc-200 font-medium text-sm border border-white/10 hover:bg-white/[0.08] hover:border-sky-500/40 hover:text-white transition-all backdrop-blur-md group"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>VIEW RESUME</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Interactive Spatial System Visualization Nodes */}
          <div className="pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-3">
            {SYSTEM_NODES.map((node) => (
              <div
                key={node.label}
                className="p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-sky-500/40 hover:bg-sky-500/5 transition-all group cursor-default"
              >
                <div className="text-sm font-bold font-mono text-white group-hover:text-sky-300 transition-colors">
                  {node.label}
                </div>
                <div className="text-[10px] font-mono text-zinc-400 mt-0.5">{node.subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Portrait Integrated with 3D Frame */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-2xl overflow-hidden glass-panel p-2 border border-white/10 shadow-2xl group transition-all duration-500 hover:border-sky-500/30">
            {/* Ambient Inner Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent z-10 opacity-70" />

            <Image
              src="/images/hero-portrait.jpg"
              alt="Bhavya Bansal — Artificial Intelligence & Data Science Undergraduate"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              priority
              className="object-cover object-center rounded-xl transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-xl bg-[#09090b]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-white">Bhavya Bansal</div>
                <div className="text-[10px] font-mono text-zinc-400">
                  GGSIPU AI & DS • Class of 2026
                </div>
              </div>
              <div className="px-2 py-1 rounded bg-sky-500/10 border border-sky-500/20 text-[10px] font-mono text-sky-400">
                VERIFIED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
