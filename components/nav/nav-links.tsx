'use client';

import { useScrollSpy } from '@/hooks/use-scroll-spy';

const NAV_ITEMS = [
  { id: 'system-map', label: 'SYSTEM' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'journey', label: 'JOURNEY' },
  { id: 'achievements', label: 'EVIDENCE' },
  { id: 'agent', label: 'AGENT' },
  { id: 'contact', label: 'CONTACT' },
];

export function NavLinks() {
  const sectionIds = NAV_ITEMS.map((item) => item.id);
  const activeId = useScrollSpy(sectionIds);

  return (
    <nav
      aria-label="Main Navigation"
      className="hidden md:flex items-center gap-5 text-xs font-mono tracking-wide uppercase"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`transition-all duration-200 relative py-1 ${
              isActive ? 'text-sky-300 font-bold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            {item.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400 rounded-full" />
            )}
          </a>
        );
      })}
    </nav>
  );
}
