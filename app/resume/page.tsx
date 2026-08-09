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
              Portfolio: bhavyabansal.com
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
            <span className="text-xs text-gray-500 font-mono">May 2026</span>
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
                  Python, Scikit-learn, Pandas, Seaborn
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs text-gray-700 space-y-1">
                <li>
                  Developed a machine learning classification pipeline to assist in identifying
                  early indicators of chronic kidney disease.
                </li>
                <li>
                  Handled missing clinical data, feature scaling, and categorical encoding to
                  prepare health records for model training.
                </li>
                <li>
                  Evaluated Random Forest and Logistic Regression models using precision and recall
                  metrics to ensure reliable predictions.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-900">
                  Cryptocurrency Market Analysis & Trend Forecasting
                </h3>
                <span className="text-xs font-mono text-gray-500">
                  Python, SQL, Pandas, Matplotlib
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs text-gray-700 space-y-1">
                <li>
                  Built automated data extraction scripts to clean and analyze daily time-series
                  cryptocurrency financial data.
                </li>
                <li>
                  Executed SQL queries and Pandas transformations to calculate moving averages,
                  asset volatility, and price correlations.
                </li>
                <li>
                  Created visual charts rendering multi-asset price trends and volume patterns for
                  market risk assessment.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-900">
                  CareerAgent — AI Career Navigation Assistant
                </h3>
                <span className="text-xs font-mono text-gray-500">
                  Python, Streamlit, LangChain, LLM APIs
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs text-gray-700 space-y-1">
                <li>
                  Developed an automated career assistant to help students identify skill gaps based
                  on job requirements.
                </li>
                <li>
                  Structured prompt templates and API query logic to extract key competencies from
                  industry job descriptions.
                </li>
                <li>
                  Built a responsive Streamlit application allowing users to upload resumes and view
                  personalized career roadmaps.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-xs font-mono tracking-widest text-gray-500 uppercase border-b border-gray-200 pb-1 mb-3">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-800">
            <div>
              <strong className="text-gray-900">Programming Languages:</strong> Python, SQL
            </div>
            <div>
              <strong className="text-gray-900">Data Analysis:</strong> Pandas, NumPy,
              Preprocessing, EDA, Time-Series Cleaning
            </div>
            <div>
              <strong className="text-gray-900">Machine Learning & CV:</strong> Scikit-learn,
              OpenCV, MediaPipe, Classification, Evaluation
            </div>
            <div>
              <strong className="text-gray-900">Visualization:</strong> Power BI, Excel, Matplotlib,
              Seaborn, Streamlit
            </div>
            <div className="sm:col-span-2">
              <strong className="text-gray-900">Tools & Version Control:</strong> Git, GitHub, VS
              Code, Jupyter Notebooks
            </div>
          </div>
        </section>

        {/* Experience & Leadership */}
        <section className="mb-8">
          <h2 className="text-xs font-mono tracking-widest text-gray-500 uppercase border-b border-gray-200 pb-1 mb-3">
            Experience & Technical Training
          </h2>
          <div className="space-y-4 text-xs text-gray-800">
            <div>
              <div className="flex justify-between font-bold text-gray-900">
                <span>IBM SkillsBuild & Enterprise Training</span>
                <span className="font-normal text-gray-500 font-mono">Generative AI Program</span>
              </div>
              <p className="mt-1 text-gray-700">
                Completed technical coursework covering transformer model concepts, structured
                prompt design, and evaluation techniques.
              </p>
            </div>

            <div>
              <div className="flex justify-between font-bold text-gray-900">
                <span>Student Innovation Cell & Technical Societies</span>
                <span className="font-normal text-gray-500 font-mono">
                  Team Leader & Contributor
                </span>
              </div>
              <p className="mt-1 text-gray-700">
                Led student teams in 20+ university hackathons, handling software development, code
                integration, and live project presentations.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements & Certifications */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xs font-mono tracking-widest text-gray-500 uppercase border-b border-gray-200 pb-1 mb-3">
              Achievements
            </h2>
            <ul className="text-xs text-gray-800 space-y-2">
              <li>
                <strong className="text-gray-900">1st Place Winner:</strong> World Entrepreneurs Day
                Competition (Chandigarh University Incubator, 2025)
              </li>
              <li>
                <strong className="text-gray-900">National Finalist:</strong> India Innovates 2026
                (Bharat Mandapam, New Delhi)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-mono tracking-widest text-gray-500 uppercase border-b border-gray-200 pb-1 mb-3">
              Certifications
            </h2>
            <ul className="text-xs text-gray-800 space-y-2">
              <li>• Samsung Innovation Campus — Big Data & Analytics</li>
              <li>• IBM SkillsBuild — Generative AI Foundation Models</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
