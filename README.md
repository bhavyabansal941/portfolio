# Bhavya Bansal — AI & Data Science Portfolio

Applied software engineering and data science portfolio representing computer vision tools, machine learning classification pipelines, time-series data analytics, and interactive web applications.

Live Website: [https://portfolio-five-steel-94.vercel.app/](https://portfolio-five-steel-94.vercel.app/)  
Resume: [https://portfolio-five-steel-94.vercel.app/resume](https://portfolio-five-steel-94.vercel.app/resume)

---

## Overview

This portfolio demonstrates practical software development, machine learning model building, and data analytics engineering by **Bhavya Bansal**, a B.Tech Artificial Intelligence & Data Science undergraduate at Guru Gobind Singh Indraprastha University (GGSIPU, Class of 2026, 9.03 CGPA).

It is built as an interactive digital experience featuring 3D hardware-accelerated spatial canvas backgrounds, interactive case study drawers, skills usage maps, chronological timeline, guided assistant, and an executive Recruiter Mode.

---

## Featured Projects

### 01 — AI-Based Physiotherapy Assistance System

- **Stack**: Python, MediaPipe, OpenCV, Streamlit
- **Description**: Real-time computer vision application calculating 2D joint angle geometry across 33 MediaPipe pose landmarks at 30 FPS to guide at-home exercise posture calibration. Awarded 1st Place at World Entrepreneurs Day Competition 2025 (Chandigarh University Incubator).

### 02 — Chronic Kidney Disease Prediction Pipeline

- **Stack**: Python, Scikit-learn, Pandas, Seaborn
- **Description**: Machine learning diagnostic classification pipeline preprocessing clinical patient health indicators, handling missing medical data via median imputation, and evaluating Random Forest and Logistic Regression models via precision/recall curves.

### 03 — Cryptocurrency Market Analysis & Trend Forecasting

- **Stack**: Python, SQL, Pandas, Matplotlib
- **Description**: Automated time-series data cleaning and SQL data analytics workflow processing financial market records, computing 7-day and 30-day rolling moving averages, and rendering asset volatility trends.

### 04 — CareerAgent — AI Career Navigation Assistant

- **Stack**: Python, Streamlit, LangChain, LLM APIs
- **Description**: LLM-assisted student career analysis tool structuring prompt templates and API query logic to extract core competency requirements from job descriptions and compare them against student resumes.

---

## Portfolio Features

- **Interactive Hero & Spatial Canvas (`Hero3DScene`)**: Lightweight Three.js WebGL canvas rendering spatial wireframe geometry and particle clouds with mouse parallax tracking.
- **Recruiter Mode (`RecruiterModeModal`)**: Header toggle switch launching a 20-second executive summary snapshot overlay highlighting key metrics, 4 featured projects, core skills, and direct action links.
- **Interactive Case Study Drawers (`ProjectCaseStudyModal`)**: Expandable project drawers revealing detailed Problem, Technical Approach, What I Built, Engineering Insight, Verified Status, and GitHub code.
- **Chronological Engineering Journey (`JourneySection`)**: Interactive timeline from 2024 to 2026 showcasing academic, hackathon, and technical milestones.
- **Interactive Skills Constellation (`ToolkitSection`)**: Category-grouped skill map revealing applied real-world usage cards for Python, SQL, OpenCV, MediaPipe, Scikit-learn, and Power BI. Zero percentage progress bars.
- **Engineering Build Log (`BuildLogSection`)**: Compact repository changelog tracking version releases and updates.
- **Guided Portfolio Assistant (`AssistantSection`)**: Deterministic "Ask About Bhavya" Q&A interface providing verified factual responses with auto-scrolling section navigation.
- **Printable ATS Resume Route (`/resume`)**: Standalone, print-ready web route presenting Resume Version 3.0 Final with a 1-click `Print / Save PDF` action.

---

## Technology Stack

Verified technologies from codebase and `package.json`:

- **Core Framework**: Next.js 16.3.0 (App Router, Turbopack)
- **Language**: TypeScript (`strict: true`)
- **3D Graphics**: Three.js (`three`, `@types/three`)
- **Styling**: Tailwind CSS v4 + Vanilla CSS Variables (Obsidian Dark `#09090b` Theme)
- **Icons**: Lucide React (`lucide-react`)
- **Typography**: Inter & JetBrains Mono (`next/font/google`)
- **Code Quality**: ESLint + Prettier

---

## Repository Structure

```text
bhavya-portfolio/
├── app/
│   ├── layout.tsx             # Root layout, PortfolioProvider, Google Fonts, JSON-LD Schema
│   ├── page.tsx               # Main page assembling V3.2 interactive modules & modals
│   ├── globals.css            # Obsidian design tokens & Tailwind v4 imports
│   ├── resume/page.tsx        # Printable ATS Resume Version 3.0 route (/resume)
│   ├── manifest.ts            # Web App Manifest route (/manifest.webmanifest)
│   ├── robots.ts              # Dynamic robots.txt generator (/robots.txt)
│   └── sitemap.ts             # Dynamic sitemap.xml generator (/sitemap.xml)
├── components/
│   ├── navbar.tsx             # Sticky header wrapper with Recruiter Mode toggle
│   ├── footer.tsx             # Editorial footer
│   ├── assistant/             # Guided Assistant ("Ask About Bhavya")
│   ├── discovery/             # Choose Your Path discovery section
│   ├── experience/            # Experience & Leadership components
│   ├── focus/                 # Current Focus 4-card matrix
│   ├── identity/              # Identity Hero section & spatial node overlays
│   ├── journey/               # Chronological Engineering Journey timeline
│   ├── learning/              # Learning flow components
│   ├── log/                   # Build Log engineering changelog
│   ├── profile/               # Contact & Profile section
│   ├── projects/              # Projects stream & Case Study modal drawer
│   ├── recognition/           # Recognition & Awards components
│   ├── recruiter/             # Recruiter Mode executive snapshot modal
│   ├── toolkit/               # Skills Constellation & applied context cards
│   └── ui/                    # Three.js 3D spatial canvas (Hero3DScene)
├── context/
│   └── portfolio-context.tsx  # React Context for Recruiter Mode & Case Study Modal state
├── docs/                      # Engineering documentation & Resume Version 3.0 markdown
├── hooks/                     # Custom useScrollSpy hook
└── public/                    # Production photography assets & favicons
```

---

## Local Development

### Installation

```bash
# Clone the repository
git clone https://github.com/bhavyabansal941/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality & Build Verification Commands

```bash
# Prettier code formatting
npm run format

# ESLint code quality check
npm run lint

# Next.js static production build
npm run build

# Start local production server
npm run start
```

---

## Production Deployment

This project is deployed on **Vercel** with automatic deployment connected to the `main` branch of GitHub repository [`bhavyabansal941/portfolio`](https://github.com/bhavyabansal941/portfolio).

- **Production URL**: [https://portfolio-five-steel-94.vercel.app/](https://portfolio-five-steel-94.vercel.app/)

---

## License

Distributed under the MIT License. See [LICENSE](file:///c:/Users/Bhavya%20Bansal/bhavya-portfolio/LICENSE) for details.
