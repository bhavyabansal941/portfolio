'use client';

import { useState, useEffect } from 'react';

export function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const chapters = [
    { number: '01', id: 'focus', label: 'Current Focus' },
    { number: '02', id: 'work', label: 'Projects' },
    { number: '03', id: 'experience', label: 'Experience' },
    { number: '04', id: 'toolkit', label: 'Toolkit' },
    { number: '05', id: 'learning', label: 'Learning' },
    { number: '06', id: 'recognition', label: 'Recognition & Impact' },
    { number: '07', id: 'profile', label: 'Professional Profile' },
  ];

  // Lock body scroll when drawer is open & handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
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
      {/* Menu Toggle Button */}
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label="Table of Contents Menu"
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1.5 rounded border border-[var(--surface-border)] bg-[var(--surface)] text-xs font-mono text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground-muted)]"
      >
        {isOpen ? 'CLOSE [ESC]' : 'MENU'}
      </button>

      {/* Slide-over Table of Contents Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 z-50 bg-[var(--background)] border-t border-[var(--surface-border)] p-6 flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Table of Contents Navigation"
        >
          <div>
            <div className="mb-6 pb-2 border-b border-[var(--surface-border)]">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)]">
                TABLE OF CONTENTS
              </span>
            </div>

            <nav className="flex flex-col space-y-4">
              {chapters.map((chapter) => (
                <a
                  key={chapter.id}
                  href={`#${chapter.id}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 text-base font-sans text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground-muted)]"
                >
                  <span className="font-mono text-xs text-[var(--foreground-subtle)]">
                    {chapter.number}
                  </span>
                  <span className="font-medium text-[var(--foreground)]">{chapter.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Drawer Footer Note */}
          <div className="pt-4 border-t border-[var(--surface-border)] text-xs font-mono text-[var(--foreground-subtle)]">
            Bhavya Bansal — Engineering Portfolio
          </div>
        </div>
      )}
    </div>
  );
}
