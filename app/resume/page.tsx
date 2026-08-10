'use client';

import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Navigation Control Bar */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl glass-panel border border-white/10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white transition-colors"
        >
          ← Back to Portfolio
        </Link>
        <div className="flex items-center gap-3">
          <a
            href="/docs/RESUME_VERSION_3.md"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-mono tracking-wider uppercase text-[#a1a1aa] bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 rounded-lg transition-all"
          >
            Raw Markdown
          </a>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') window.print();
            }}
            className="px-4 py-2 text-xs font-mono tracking-wider uppercase text-[#09090b] bg-white hover:bg-sky-400 rounded-lg font-semibold transition-all shadow-md"
          >
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* Clean Editorial Printable Document Box */}
      <div className="max-w-4xl mx-auto bg-white text-[#09090b] p-8 sm:p-12 rounded-2xl shadow-2xl font-sans selection:bg-sky-100 selection:text-sky-900">
        {/* Header */}
        <header className="border-b border-gray-200 pb-6 mb-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
            BHAVYA BANSAL
          </h1>
          <p className="text-sm text-gray-600 mb-3">
            New Delhi, India | +91 9205292550 | bansalbhavya941@gmail.com
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-medium text-sky-700">
            <a
              href="https://portfolio-five-steel-94.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Portfolio: portfolio-five-steel-94.vercel.app
            </a>
            <span>•</span>
            <a
              href="https://github.com/bhavyabansal941"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub: github.com/bhavyabansal941
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/bhavya-bansal-aa70a3301"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn: linkedin.com/in/bhavya-bansal-aa70a3301
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-xs font-mono tracking-widest text-gray-500 uppercase border-b border-gray-200 pb-1 mb-3">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-gray-800">
            B.Tech Artificial Intelligence & Data Science undergraduate focused on solving practical
            problems through software and data analytics. Experienced in developing computer vision
            tools, machine learning pipelines, and interactive data applications across hackathons
            and engineering projects. Open to technical internship opportunities.
          </p>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xs font-mono tracking-widest text-gray-500 uppercase border-b border-gray-200 pb-1 mb-3">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline">
            <h3 className="text-sm font-bold text-gray-900">
              Guru Gobind Singh Indraprastha University (GGSIPU) — New Delhi, India
            </h3>
            <span className="text-xs text-gray-500 font-mono">Expected Graduation: May 2027</span>
          </div>
          <p className="text-xs italic text-gray-700 mt-1">
            Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science | CGPA: 9.03 /
            10.0
          </p>
        </section>

        {/* Featured Projects */}
        <section className="mb-8">
          <h2 className="text-xs font-mono tracking-widest text-gray-500 uppercase border-b border-gray-200 pb-1 mb-4">
            Featured Projects
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-900">
                  AI-Based Physiotherapy Assistance System
                </h3>
                <span className="text-xs font-mono text-gray-500">
                  Python, MediaPipe, OpenCV, Streamlit
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs text-gray-700 space-y-1">
                <li>
                  Built a real-time posture analysis application to help users perform physiotherapy
                  exercises accurately at home.
                </li>
                <li>
                  Formulated custom 2D joint angle calculations using MediaPipe pose landmarks to
                  evaluate movement against target health thresholds.
                </li>
                <li>
                  Designed an interactive camera interface in Streamlit that displays immediate
                  visual feedback during rehabilitation sessions.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-900">
                  Chronic Kidney Disease Prediction Pipeline
                </h3>
                <span className="text-xs font-mono text-gray-500">
                  Python, Scikit-learn, XGBoost, Pandas
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs text-gray-700 space-y-1">
                <li>
                  Processed clinical dataset containing 4,000 patient records across 21 clinical and
                  lifestyle features for 6-class severity staging.
                </li>
                <li>
                  Implemented explicit target leakage prevention by identifying and dropping derived
                  columns prior to categorical encoding.
                </li>
                <li>
                  Evaluated multi-class CKD stage prediction using XGBoost, achieving 98.75% accuracy
                  and 0.985 5-fold CV F1 score.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-900">
                  Cryptocurrency Market Analysis & Trend Forecasting
                </h3>
                <span className="text-xs font-mono text-gray-500">
                  Python, SQL, Pandas, CoinGecko API, TensorFlow/Keras
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs text-gray-700 space-y-1">
                <li>
                  Built automated CoinGecko REST API ingestion scripts to extract and clean daily
                  time-series cryptocurrency financial data.
                </li>
                <li>
                  Executed SQL queries and Pandas transformations to calculate 7-day/30-day moving
                  averages, asset volatility, and price correlations.
                </li>
                <li>
                  Trained an LSTM forecasting model and evaluated next-day return predictions against
                  a naive persistence baseline.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-900">
                  CareerAgent — AI Career Navigation Assistant
                </h3>
                <span className="text-xs font-mono text-gray-500">
                  Python, Chainlit, LangChain, Groq API, Llama 3.3
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs text-gray-700 space-y-1">
                <li>
                  Built a Chainlit-based AI career assistant using LangChain and Groq-hosted Llama
                  3.3 70B for multi-format resume analysis (PDF, DOCX, XLSX).
                </li>
                <li>
                  Integrated Llama 3.2 Vision OCR for image-based resumes, Tavily web grounding, and
                  Adzuna job search APIs for skill gap analysis.
                </li>
                <li>
                  Implemented persistent session storage with SQLAlchemy and deployed the application
                  live on Render.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Achievements & Recognition */}
        <section className="mb-8">
          <h2 className="text-xs font-mono tracking-widest text-gray-500 uppercase border-b border-gray-200 pb-1 mb-3">
            Key Achievements & Recognition
          </h2>
          <ul className="list-disc list-outside ml-4 text-xs text-gray-800 space-y-1.5">
            <li>
              <strong className="text-gray-900">1st Place Winner:</strong> World Entrepreneurs Day
              Competition 2025 (Chandigarh University Incubator) for AI healthcare assistance
              prototype.
            </li>
            <li>
              <strong className="text-gray-900">National Finalist:</strong> India Innovates 2026
              (Bharat Mandapam, New Delhi) in Healthcare Open Innovation track.
            </li>
            <li>
              <strong className="text-gray-900">Hackathon Leadership:</strong> Participated in 20+
              competitive hackathons as team leader and lead software/data developer.
            </li>
          </ul>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-xs font-mono tracking-widest text-gray-500 uppercase border-b border-gray-200 pb-1 mb-3">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-gray-800">
            <div>
              <span className="font-bold text-gray-900">Languages:</span> Python, SQL, C++, HTML,
              CSS, JavaScript, TypeScript
            </div>
            <div>
              <span className="font-bold text-gray-900">Data Analytics:</span> Pandas, NumPy,
              Matplotlib, Seaborn, CoinGecko API
            </div>
            <div>
              <span className="font-bold text-gray-900">Machine Learning & CV:</span> Scikit-learn,
              XGBoost, MediaPipe, OpenCV
            </div>
            <div>
              <span className="font-bold text-gray-900">GenAI & Web:</span> LangChain, Groq API
              (Llama 3.3 70B & Vision), Chainlit, Tavily, Next.js 16, React
            </div>
            <div>
              <span className="font-bold text-gray-900">Tools & OS:</span> Git, GitHub, VS Code,
              Render, Windows, Linux
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
