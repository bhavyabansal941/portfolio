# Bhavya Bansal — AI Engineer Software Portfolio

A calm, minimal, publication-grade software portfolio representing the engineering quality, product thinking, and technical growth of **Bhavya Bansal**, an Artificial Intelligence & Data Science undergraduate.

Built as an **editorial dark journal product** rather than a traditional template website. It prioritizes high-contrast typography, generous whitespace, strict content truthfulness, zero visual clutter, and zero unnecessary dependencies.

---

## 🌟 Key Highlights & Engineering Features

- **Server-First Architecture**: Built on Next.js 16 App Router using React Server Components (RSC) by default for zero client-side JavaScript hydration overhead.
- **Editorial Dark Obsidian Palette**: Deep `#09090b` obsidian background paired with curated typography (`Inter` & `JetBrains Mono`).
- **Asymmetric 12-Column Grid Layout**: Uniform 12-column grid (`4 cols` section meta / `8 cols` content stream) across all 8 main chapters.
- **100% Production & ATS Verified**: Includes dynamic `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, Schema.org `Person` JSON-LD structured data, and Open-Graph social link preview metadata.
- **Accessible & Responsive**: WCAG AAA text contrast, keyboard navigation with visible focus rings (`:focus-visible`), native skip link (`#main-content`), and screen-reader friendliness.
- **Decoupled Scroll-Spy Navigation**: Custom `useScrollSpy` hook and GPU-accelerated 1.5px reading progress line (`transform: scaleX`) throttled via `requestAnimationFrame`.

---

## 📑 Portfolio Chapters & Information Architecture

1. **Identity (`IdentitySection`)**: Undergraduate positioning statement and priority 4:5 rectangular portrait.
2. **Current Focus (`FocusSection`)**: 4-card matrix detailing Academics, Technical Focus, Core Stack, and Opportunities.
3. **Featured Projects (`ProjectsSection`)**: 3 detailed engineering case studies (*AI Posture Analysis*, *Stock Analysis*, *Disease Outbreak Prediction*) with explicit trade-offs.
4. **Experience Beyond Classroom (`ExperienceSection`)**: Editorial coverage of national hackathons, startup incubator judging, and live booth demonstrations.
5. **Technical Toolkit (`ToolkitSection`)**: Categorized capability matrix covering Python, SQL, Computer Vision, Machine Learning, Scikit-learn, OpenCV, and Next.js.
6. **Learning Journey (`LearningSection`)**: 5 continuous growth pillars structured around *Focus / Why It Matters / Recent Application*.
7. **Recognition & Impact (`RecognitionSection`)**: World Entrepreneurs Day 1st Place Winner hero block and national summit presentations (India Innovates 2026, India AI Convergence).
8. **Professional Profile (`ProfileSection`)**: 4 verifiable verification cards for Resume, GitHub, LinkedIn, and Direct Email Inquiries.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16.3.0 (App Router, Turbopack)
- **Language**: TypeScript (`strict: true`)
- **Styling**: Tailwind CSS v4 + Vanilla CSS Custom Properties
- **Fonts**: `Inter` & `JetBrains Mono` via `next/font/google`
- **Linting & Formatting**: ESLint + Prettier (`eslint-config-prettier`)

---

## 📁 Repository Structure

```text
bhavya-portfolio/
├── app/
│   ├── layout.tsx             # Root layout, Google Fonts, Open Graph, JSON-LD Schema
│   ├── page.tsx               # Main entry point rendering the 8 editorial chapters
│   ├── globals.css            # Obsidian design tokens & Tailwind imports
│   ├── manifest.ts            # Web App Manifest route (/manifest.webmanifest)
│   ├── robots.ts              # Dynamic robots.txt generator (/robots.txt)
│   └── sitemap.ts             # Dynamic sitemap.xml generator (/sitemap.xml)
├── components/
│   ├── navbar.tsx             # Sticky header wrapper
│   ├── footer.tsx             # Quiet editorial footer grounding
│   ├── focus/                 # Current Focus components
│   ├── identity/              # Identity hero components
│   ├── learning/              # Learning Journey components
│   ├── nav/                   # Brand, links, mobile TOC, progress bar components
│   ├── profile/               # Professional Profile components
│   ├── projects/              # Featured Projects case study components
│   ├── recognition/           # Recognition & Impact components
│   └── toolkit/               # Technical Toolkit components
├── docs/                      # Engineering audit docs & Resume Version 3.0
├── hooks/                     # Custom useScrollSpy hook
├── public/                    # Production photography assets & favicons
├── LICENSE                    # MIT License
└── README.md                  # Engineering documentation
```

---

## 💻 Local Development Setup

### 1. Prerequisites
- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/bhavyabansal941/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Build & Verification Commands

```bash
# Code formatting with Prettier
npm run format

# ESLint code linting
npm run lint

# Next.js production build
npm run build

# Run local production server
npm run start
```

---

## 🚀 Deployment (Vercel)

This application is optimized for continuous deployment on Vercel:

1. Import repository `bhavyabansal941/portfolio` in Vercel Dashboard.
2. Framework Preset: **Next.js**
3. Build Command: `npm run build`
4. Output Directory: `.next`
5. Deploy!

---

## 📄 License

Distributed under the MIT License. See [LICENSE](file:///c:/Users/Bhavya%20Bansal/bhavya-portfolio/LICENSE) for more details.
