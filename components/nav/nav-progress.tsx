'use client';

import { useEffect, useState } from 'react';

export function NavProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const updateProgress = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = docHeight > 0 ? scrollY / docHeight : 0;

      setProgress(Math.min(Math.max(currentProgress, 0), 1));
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="h-[1.5px] w-full bg-[var(--foreground-subtle)] origin-left transition-transform duration-75 ease-out"
      style={{
        transform: `scaleX(${progress})`,
      }}
      aria-hidden="true"
    />
  );
}
