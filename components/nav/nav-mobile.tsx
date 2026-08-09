'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FileText, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { number: '01', id: 'system-map', label: 'SYSTEM MAP' },
  { number: '02', id: 'projects', label: 'INTERACTIVE PROJECTS' },
  { number: '03', id: 'skills', label: 'SKILLS CONSTELLATION' },
  { number: '04', id: 'journey', label: 'ENGINEERING JOURNEY' },
  { number: '05', id: 'achievements', label: 'ACHIEVEMENTS' },
  { number: '06', id: 'agent', label: 'PORTFOLIO AGENT' },
  { number: '07', id: 'contact', label: 'OPEN A CHANNEL' },
];

export function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  return (
    <div className="flex md:hidden items-center">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label="Toggle Mobile Navigation"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-200 hover:text-white"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 top-16 z-50 bg-[#09090b]/95 backdrop-blur-xl p-6 flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col space-y-4 pt-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 py-2 border-b border-white/5 text-base font-mono text-zinc-300 hover:text-sky-400"
              >
                <span className="text-xs text-sky-400 font-mono">{item.number}</span>
                <span className="font-semibold text-white">{item.label}</span>
              </a>
            ))}

            <div className="pt-4">
              <Link
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-sky-500 text-white font-mono text-xs font-bold shadow-lg"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RESUME ↗</span>
              </Link>
            </div>
          </nav>

          <div className="text-xs font-mono text-zinc-500 pt-4 border-t border-white/10">
            BHAVYA // DIGITAL LAB • GGSIPU Expected Graduation: May 2027
          </div>
        </div>
      )}
    </div>
  );
}
