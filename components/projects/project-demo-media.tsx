'use client';

import { DemoMediaData } from '@/data/portfolio-data';
import { Play, VideoOff, ExternalLink, Sparkles } from 'lucide-react';

interface ProjectDemoMediaProps {
  media?: DemoMediaData;
  projectTitle: string;
  demoUrl?: string;
}

export function ProjectDemoMedia({ media, projectTitle, demoUrl }: ProjectDemoMediaProps) {
  if (!media || media.type === 'coming_soon') {
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 space-y-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
          <div className="p-3 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400">
            <VideoOff className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider block">
              DEMONSTRATION MEDIA SLOT READY
            </span>
            <p className="text-xs text-zinc-400 font-mono max-w-md mx-auto mt-1">
              {media?.caption || `Authentic screen recording for ${projectTitle} queued.`}
            </p>
          </div>

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-300 font-mono text-xs hover:bg-sky-500/20 transition-all mt-2"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>TEST LIVE DEPLOYMENT ON RENDER ↗</span>
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-[#060608] overflow-hidden space-y-2">
      <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
        <span className="flex items-center gap-1.5 text-sky-400 font-bold">
          <Play className="w-3 h-3" />
          AUTHENTIC DEMONSTRATION RECORDING
        </span>
        <span className="text-[10px] text-zinc-500">1080P MP4 / WEBM</span>
      </div>

      <div className="relative aspect-video bg-black flex items-center justify-center">
        {media.videoUrl ? (
          media.videoUrl.endsWith('.webp') || media.videoUrl.endsWith('.gif') || media.type === 'gif' ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={media.videoUrl}
              alt={media.caption}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={media.videoUrl}
              poster={media.posterUrl}
              controls
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <track kind="captions" />
              Your browser does not support HTML5 video playback.
            </video>
          )
        ) : (
          <div className="flex flex-col items-center gap-2 text-center p-6 text-zinc-400 font-mono text-xs">
            <Sparkles className="w-6 h-6 text-sky-400" />
            <span>DEMO RECORDING SLOT LOADED</span>
          </div>
        )}
      </div>

      <div className="px-4 py-2.5 text-[11px] font-mono text-zinc-400 border-t border-white/5 flex flex-wrap items-center justify-between gap-2.5">
        <span className="flex-1 min-w-[200px]">{media.caption}</span>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-300 font-bold hover:bg-sky-500/20 transition-all shrink-0"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>TRY LIVE DEMO ON RENDER ↗</span>
          </a>
        )}
      </div>
    </div>
  );
}
