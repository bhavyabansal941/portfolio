/**
 * BHAVYA // DIGITAL LAB — CENTRAL COLOR & THEME TOKENS
 * Single Source of Truth for CSS Theme Variables & Three.js WebGL Color Constants
 */

export const THEME_TOKENS = {
  // Brand & Core Base Values
  obsidian: '#09090b',
  obsidianAlt: '#0c0c0e',
  glassSurface: '#121215',
  glassSurfaceHover: '#18181b',
  glassBorder: 'rgba(255, 255, 255, 0.08)',

  // Primary Engineering Accent (Electric Cyan)
  primary: '#38bdf8', // Sky 400
  primaryBright: '#0284c7', // Sky 600
  primaryMuted: 'rgba(56, 189, 248, 0.6)',
  primaryGlow: 'rgba(56, 189, 248, 0.15)',

  // Secondary Computational Accent (Violet / Indigo)
  secondary: '#6366f1', // Indigo 500
  secondaryBright: '#818cf8', // Indigo 400
  secondaryMuted: 'rgba(99, 102, 241, 0.6)',

  // Factual Truth & Verification (Emerald Green)
  verification: '#34d399', // Emerald 400
  verificationBright: '#10b981', // Emerald 500
  verificationMuted: 'rgba(52, 211, 153, 0.2)',

  // Warning (Amber)
  warning: '#fcd34d', // Amber 300

  // Typography Hierarchy
  textPrimary: '#ffffff',
  textSecondary: '#f4f4f5',
  textMuted: '#a1a1aa',
  textSubtle: '#71717a',
} as const;

export const WEBGL_TOKENS = {
  outerLattice: 0x38bdf8, // Electric Cyan
  innerOctahedron: 0x6366f1, // Deep Violet / Indigo
  corePointNode: 0x38bdf8, // Core Point
  orbitalRing1: 0x0284c7, // Sky 600 Ring 1
  orbitalRing2: 0x818cf8, // Indigo 400 Ring 2
  dataParticles: 0x38bdf8, // Data Particle Stream
} as const;
