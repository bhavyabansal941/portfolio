export interface ProjectData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  summary: string;
  problem: string;
  approach: string;
  techStack: string[];
  implementation: string[];
  decisions: string[];
  outcome: string;
  pipeline: {
    stage: string;
    description: string;
    detail: string;
  }[];
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'programming' | 'data' | 'ml' | 'cv' | 'genai' | 'tools';
  categoryLabel: string;
  whereUsed: string[];
  howApplied: string;
  relatedProjectIds: string[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  role: string;
  description: string;
  highlights: string[];
  badge?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  award: string;
  location: string;
  year: string;
  image: string;
  summary: string;
  details: string;
  impact: string;
}

export const PORTFOLIO_DATA = {
  candidate: {
    name: 'Bhavya Bansal',
    tagline: 'AI & Data Science Undergraduate',
    degree: 'Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science',
    university: 'Guru Gobind Singh Indraprastha University (GGSIPU)',
    location: 'New Delhi, India',
    graduation: 'Expected Graduation: May 2027',
    cgpa: '9.03 / 10.0',
    hackathons: '20+ Hackathon Participations',
    email: 'bansalbhavya941@gmail.com',
    phone: '+91 9205292550',
    github: 'https://github.com/bhavyabansal941',
    linkedin: 'https://linkedin.com/in/bhavya-bansal-aa70a3301',
    portfolio: 'https://portfolio-five-steel-94.vercel.app/',
    status: 'AVAILABLE FOR INTERNSHIP OPPORTUNITIES',
  },

  domains: [
    { id: 'ai', label: 'AI', desc: 'Agent Systems & LLM Architectures', color: '#0284C7' },
    {
      id: 'data',
      label: 'DATA',
      desc: 'Preprocessing, SQL & Time-Series Analytics',
      color: '#38BDF8',
    },
    {
      id: 'ml',
      label: 'MACHINE LEARNING',
      desc: 'Classification Pipelines & Model Evaluation',
      color: '#6366F1',
    },
    {
      id: 'cv',
      label: 'COMPUTER VISION',
      desc: '33 MediaPipe Landmarks & 2D Vector Geometry',
      color: '#818CF8',
    },
    {
      id: 'software',
      label: 'SOFTWARE',
      desc: 'Full-Stack Next.js 16 & System Design',
      color: '#34D399',
    },
    {
      id: 'projects',
      label: 'PROJECTS',
      desc: '4 Verified Engineering Implementations',
      color: '#F472B6',
    },
  ],

  projects: [
    {
      id: 'physiotherapy',
      number: '01',
      title: 'AI-Based Physiotherapy Assistance System',
      subtitle: 'Real-Time Pose Estimation & Posture Calibration',
      category: 'Computer Vision / Motion Geometry',
      tags: ['Python', 'MediaPipe', 'OpenCV', 'Streamlit', 'Vector Geometry'],
      githubUrl: 'https://github.com/bhavyabansal941/ai-physiotherapy-analysis',
      summary:
        'A real-time computer vision application calculating 2D joint angles across 33 MediaPipe pose landmarks to guide posture calibration during rehabilitation exercises.',
      problem:
        'At-home physiotherapy patients lack immediate visual feedback on joint angles, leading to improper movement form, delayed recovery, or secondary injury.',
      approach:
        'Constructed a 30 FPS video loop processing MediaPipe body landmarks, calculating 2D vector angles via dot product trigonometry, and surfacing instant posture feedback.',
      techStack: ['Python 3.9', 'MediaPipe 0.10', 'OpenCV', 'Streamlit', 'NumPy'],
      implementation: [
        'Ingested 30 FPS webcam feed through OpenCV frame capture.',
        'Extracted 33 MediaPipe 2D coordinates per frame.',
        'Computed 2D joint vector dot product angles: theta = arccos((u . v) / (|u| * |v|)).',
        'Built real-time posture monitors for sitting posture, push-up depth, and squat rep counts.',
        'Logged session performance metrics and timestamped joint angles to CSV files.',
      ],
      decisions: [
        'Selected 2D vector geometry over 3D depth to maintain high 30 FPS performance on standard laptop webcams without dedicated depth hardware.',
        'Implemented threshold smoothing filters to prevent landmark flicker during rapid joint movement.',
      ],
      outcome:
        'Awarded 1st Place Winner at World Entrepreneurs Day Competition 2025 (Chandigarh University Incubator). Prototype computer vision demonstration.',
      pipeline: [
        {
          stage: 'CAMERA',
          description: 'Webcam Frame Capture',
          detail: '30 FPS OpenCV video stream buffer',
        },
        {
          stage: 'MEDIAPIPE',
          description: 'Pose Extraction',
          detail: '33 2D coordinate landmark detection',
        },
        {
          stage: 'LANDMARKS',
          description: 'Rescaling & Filtering',
          detail: 'Normalized pixel coordinate mapping',
        },
        {
          stage: 'JOINT GEOMETRY',
          description: '2D Vector Math',
          detail: 'cos(θ) = (u · v) / (||u|| ||v||)',
        },
        {
          stage: 'POSTURE ANALYSIS',
          description: 'Threshold Evaluation',
          detail: 'Angle comparison vs biomechanical target',
        },
        {
          stage: 'FEEDBACK',
          description: 'Visual & CSV Logging',
          detail: 'Real-time UI overlay + CSV session logs',
        },
      ],
    },
    {
      id: 'ckd-prediction',
      number: '02',
      title: 'Chronic Kidney Disease Prediction Pipeline',
      subtitle: 'Diagnostic ML Classification & Preprocessing Pipeline',
      category: 'Machine Learning / Healthcare Analytics',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'Random Forest'],
      githubUrl: 'https://github.com/bhavyabansal941/urine-test-disease-prediction',
      summary:
        'A diagnostic machine learning classification pipeline imputing missing clinical values and evaluating Random Forest vs Logistic Regression models for early CKD risk detection.',
      problem:
        'Clinical datasets often contain high missingness (30%+ missing entries in urine & blood metrics) and non-linear feature dependencies that impede early risk screening.',
      approach:
        'Designed an end-to-end data preprocessing pipeline using median imputation, categorical encoding, and standard scaling before evaluating classification models prioritized by recall.',
      techStack: ['Python 3.10', 'Scikit-learn', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
      implementation: [
        'Cleaned raw UCI clinical records and performed exploratory data analysis.',
        'Implemented SimpleImputer (median value strategy) for numerical feature missingness.',
        'Applied OneHotEncoder for categorical attributes and StandardScaler for numerical features.',
        'Trained Random Forest Classifier and Logistic Regression baseline models.',
        'Evaluated confusion matrix accuracy, precision, and recall metrics for clinical screening.',
      ],
      decisions: [
        'Prioritized Recall over overall Accuracy to minimize false negatives in preliminary health screening.',
        'Engineered combined urine gravity and serum creatinine ratio features to boost model sensitivity.',
      ],
      outcome:
        'Demonstrates ML engineering methodologies for medical risk assessment. Research screening pipeline.',
      pipeline: [
        {
          stage: 'DATA',
          description: 'Clinical Ingestion',
          detail: 'UCI Chronic Kidney Disease dataset',
        },
        {
          stage: 'CLEANING',
          description: 'Median Imputation',
          detail: 'Handling missing clinical observations',
        },
        {
          stage: 'FEATURE ENG',
          description: 'Standard Scaling',
          detail: 'Categorical encoding & normalization',
        },
        {
          stage: 'MODEL',
          description: 'Random Forest Training',
          detail: 'Scikit-learn classification training',
        },
        {
          stage: 'PREDICTION',
          description: 'Recall Evaluation',
          detail: 'Confusion matrix & clinical recall optimization',
        },
      ],
    },
    {
      id: 'crypto-analysis',
      number: '03',
      title: 'Cryptocurrency Market Analysis & Trend Forecasting',
      subtitle: 'Multi-Asset Time-Series Analytics & Baseline Evaluation',
      category: 'Data Analytics / Financial Time-Series',
      tags: ['Python', 'SQL', 'Pandas', 'TensorFlow', 'Dash', 'Plotly'],
      githubUrl: 'https://github.com/bhavyabansal941/crypto-market-analysis',
      summary:
        'Automated time-series data extraction, SQL analytics, news sentiment scoring, and next-day return forecasting pipeline comparing LSTM predictions against a naive baseline.',
      problem:
        'High volatility, non-linear price swings, and missing market records in multi-asset crypto datasets make trend estimation and volatility tracking difficult.',
      approach:
        'Executed CoinGecko API data extraction, computed SQL 7-day and 30-day moving averages, scored headline sentiment using TextBlob, and trained LSTM models with naive baseline benchmarking.',
      techStack: ['Python 3.11', 'SQL', 'Pandas', 'TensorFlow/Keras', 'TextBlob', 'Dash', 'Plotly'],
      implementation: [
        'Built CoinGecko API extractors for BTC, ETH, SOL, ADA, and DOGE historical market data.',
        'Calculated 7-day and 30-day rolling moving averages, volatility, and correlation matrices using SQL window functions and Pandas.',
        'Fetched headline sentiment signals per asset using TextBlob NLP.',
        'Trained LSTM neural networks per asset to forecast next-day price return trends.',
        'Surfaced MAPE performance directly against a naive "no change" baseline in Dash dashboard.',
      ],
      decisions: [
        'Displayed naive baseline comparison directly in the dashboard UI for evaluation transparency, demonstrating random-walk properties in short-term daily returns.',
        'Used Dash & Plotly for interactive multi-asset ticker normalization.',
      ],
      outcome:
        'Interactive financial analytics dashboard displaying data engineering and time-series model evaluation methodology.',
      pipeline: [
        {
          stage: 'DATA',
          description: 'CoinGecko API Extract',
          detail: '12 months multi-coin daily OHLCV records',
        },
        {
          stage: 'SQL',
          description: 'Relational Aggregation',
          detail: 'SQL window functions & rolling correlation',
        },
        {
          stage: 'PANDAS',
          description: 'Feature Preprocessing',
          detail: '7-day & 30-day moving average calculation',
        },
        {
          stage: 'MOVING AVG',
          description: 'Volatility Scoring',
          detail: 'Rolling standard deviation & news sentiment',
        },
        {
          stage: 'TREND ANALYSIS',
          description: 'LSTM Model Training',
          detail: 'TensorFlow sequence model per crypto',
        },
        {
          stage: 'FORECASTING',
          description: 'Baseline Evaluation',
          detail: 'MAPE evaluation vs naive no-change baseline',
        },
      ],
    },
    {
      id: 'careeragent',
      number: '04',
      title: 'CareerAgent — AI Career Navigation Assistant',
      subtitle: 'Conversational LLM Resume & Skill-Gap Analytics Workspace',
      category: 'Generative AI / Natural Language Processing',
      tags: ['Python', 'Chainlit', 'LangChain', 'Groq API', 'Tavily', 'PostgreSQL'],
      githubUrl: 'https://github.com/bhavyabansal941/CareerAgent',
      demoUrl: 'https://careeragent-n127.onrender.com',
      summary:
        'A conversational LLM application extracting resume text (PDF, DOCX, images) and comparing candidate technical background against target job descriptions via structured prompt pipelines.',
      problem:
        'Students entering technical data science and software fields struggle to map their academic projects against specific skill requirements listed in industry job descriptions.',
      approach:
        'Built an end-to-end LLM application using Chainlit, LangChain structured prompt templates, Groq API models, and real-time search grounding for skill gap roadmap generation.',
      techStack: [
        'Python 3.10',
        'Chainlit',
        'LangChain',
        'Groq API (Llama 3.3)',
        'Tavily',
        'Adzuna API',
        'PostgreSQL',
      ],
      implementation: [
        'Parsed uploaded candidate resumes across PDF, DOCX, XLSX, TXT, and OCR vision formats.',
        'Classified user message intent (resume analysis, ATS score, skill gap, mock interview).',
        'Formulated LangChain structured prompt templates comparing candidate skills against job requirements.',
        'Integrated Tavily API for real-time web search grounding and Adzuna API for live job listings.',
        'Persisted session history via Google OAuth and SQLAlchemy PostgreSQL data layer.',
      ],
      decisions: [
        'Used Groq API (Llama 3.3 70B) to deliver high-speed, low-latency conversational responses during live candidate interaction.',
        'Added explicit estimation disclaimers stating keyword scores are computational metrics rather than corporate hiring guarantees.',
      ],
      outcome: 'Deployed automated student career navigation prototype hosted on Render.',
      pipeline: [
        {
          stage: 'RESUME',
          description: 'Multi-Format Upload',
          detail: 'PDF, DOCX, TXT & OCR Vision extraction',
        },
        {
          stage: 'PARSER',
          description: 'Text Structuring',
          detail: 'Competency extraction into prompt context',
        },
        {
          stage: 'SKILL EXTRACTION',
          description: 'Intent Classification',
          detail: 'Intent router & domain mapping',
        },
        {
          stage: 'JOB DESCRIPTION',
          description: 'Requirement Parsing',
          detail: 'Target role skill & keyword extraction',
        },
        {
          stage: 'MATCHING',
          description: 'Prompt Pipeline',
          detail: 'LangChain structured query execution',
        },
        {
          stage: 'SKILL GAP',
          description: 'Gap Scoring',
          detail: 'Transparent computational score estimation',
        },
        {
          stage: 'CAREER ROADMAP',
          description: 'Resource Guidance',
          detail: 'Personalized course & topic roadmap',
        },
      ],
    },
  ] as ProjectData[],

  skills: [
    {
      id: 'python',
      name: 'Python',
      category: 'programming',
      categoryLabel: 'Programming Languages',
      whereUsed: [
        'Physiotherapy Assistance System',
        'CKD Prediction Pipeline',
        'Crypto Market Analysis',
        'CareerAgent',
      ],
      howApplied:
        'Primary language for data manipulation, computer vision processing, ML model training, and LLM API orchestration.',
      relatedProjectIds: ['physiotherapy', 'ckd-prediction', 'crypto-analysis', 'careeragent'],
    },
    {
      id: 'sql',
      name: 'SQL',
      category: 'programming',
      categoryLabel: 'Programming Languages',
      whereUsed: ['Crypto Market Analysis', 'CareerAgent Database'],
      howApplied:
        'Constructed complex relational queries, window functions for rolling averages, and database schema setups in SQLite/PostgreSQL.',
      relatedProjectIds: ['crypto-analysis', 'careeragent'],
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'programming',
      categoryLabel: 'Programming Languages',
      whereUsed: ['Portfolio V4 Digital Lab'],
      howApplied:
        'Strongly typed React components, Three.js spatial canvas integration, and structured portfolio state management.',
      relatedProjectIds: [],
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'programming',
      categoryLabel: 'Programming Languages',
      whereUsed: ['Portfolio V4 Digital Lab', 'Interactive Dashboards'],
      howApplied:
        'Client-side web application logic, DOM event handling, and dynamic UI rendering.',
      relatedProjectIds: [],
    },
    {
      id: 'pandas',
      name: 'Pandas',
      category: 'data',
      categoryLabel: 'Data Analytics & Processing',
      whereUsed: ['CKD Prediction Pipeline', 'Crypto Market Analysis'],
      howApplied:
        'Dataframe manipulation, missing value imputation, multi-coin daily OHLCV dataset cleaning, and moving average calculation.',
      relatedProjectIds: ['ckd-prediction', 'crypto-analysis'],
    },
    {
      id: 'numpy',
      name: 'NumPy',
      category: 'data',
      categoryLabel: 'Data Analytics & Processing',
      whereUsed: ['Physiotherapy Assistance System', 'Crypto Market Analysis'],
      howApplied:
        'Vector arithmetic, matrix dot products for joint angle trigonometry, and high-performance array operations.',
      relatedProjectIds: ['physiotherapy', 'crypto-analysis'],
    },
    {
      id: 'eda',
      name: 'Data Preprocessing & EDA',
      category: 'data',
      categoryLabel: 'Data Analytics & Processing',
      whereUsed: ['CKD Prediction Pipeline', 'Crypto Market Analysis'],
      howApplied:
        'Exploratory data analysis, handling clinical data missingness, correlation heatmaps, and standard feature scaling.',
      relatedProjectIds: ['ckd-prediction', 'crypto-analysis'],
    },
    {
      id: 'scikit-learn',
      name: 'Scikit-learn',
      category: 'ml',
      categoryLabel: 'Machine Learning',
      whereUsed: ['CKD Prediction Pipeline', 'Crypto Market Analysis'],
      howApplied:
        'Imputation pipelines, StandardScaler, OneHotEncoder, Random Forest classification, and confusion matrix recall metrics.',
      relatedProjectIds: ['ckd-prediction', 'crypto-analysis'],
    },
    {
      id: 'classification',
      name: 'Classification & Evaluation',
      category: 'ml',
      categoryLabel: 'Machine Learning',
      whereUsed: ['CKD Prediction Pipeline', 'Crypto Market Analysis'],
      howApplied:
        'Random Forest and Logistic Regression model evaluation, precision/recall tradeoff analysis, and MAPE baseline benchmarking.',
      relatedProjectIds: ['ckd-prediction', 'crypto-analysis'],
    },
    {
      id: 'mediapipe',
      name: 'MediaPipe',
      category: 'cv',
      categoryLabel: 'Computer Vision',
      whereUsed: ['Physiotherapy Assistance System'],
      howApplied:
        'Real-time extraction of 33 2D pose landmarks at 30 FPS for joint angle calculation and movement posture monitoring.',
      relatedProjectIds: ['physiotherapy'],
    },
    {
      id: 'opencv',
      name: 'OpenCV',
      category: 'cv',
      categoryLabel: 'Computer Vision',
      whereUsed: ['Physiotherapy Assistance System'],
      howApplied:
        'Webcam video stream buffer capture, frame rendering, text & bounding overlay drawing, and 30 FPS loop control.',
      relatedProjectIds: ['physiotherapy'],
    },
    {
      id: 'langchain',
      name: 'LangChain',
      category: 'genai',
      categoryLabel: 'Generative AI & LLMs',
      whereUsed: ['CareerAgent'],
      howApplied:
        'Structuring prompt templates, output parsers, document context injection, and Groq LLM API integration.',
      relatedProjectIds: ['careeragent'],
    },
    {
      id: 'llm-apis',
      name: 'LLM APIs & Prompting',
      category: 'genai',
      categoryLabel: 'Generative AI & LLMs',
      whereUsed: ['CareerAgent', 'IBM SkillsBuild Training'],
      howApplied:
        'Prompt engineering, intent classification routing, Groq (Llama 3.3 70B & Llama 3.2 Vision), and Tavily web grounding.',
      relatedProjectIds: ['careeragent'],
    },
    {
      id: 'nextjs',
      name: 'Next.js 16',
      category: 'tools',
      categoryLabel: 'Web & Development Tools',
      whereUsed: ['Portfolio V4 Digital Lab'],
      howApplied:
        'App Router architecture, static page pre-rendering, Turbopack builds, and SEO metadata infrastructure.',
      relatedProjectIds: [],
    },
    {
      id: 'react',
      name: 'React 19 & Tailwind v4',
      category: 'tools',
      categoryLabel: 'Web & Development Tools',
      whereUsed: ['Portfolio V4 Digital Lab'],
      howApplied:
        'Component state management, responsive UI layout, glassmorphism panel design, and custom theme tokens.',
      relatedProjectIds: [],
    },
    {
      id: 'threejs',
      name: 'Three.js / R3F',
      category: 'tools',
      categoryLabel: 'Web & Development Tools',
      whereUsed: ['Portfolio V4 Digital Lab'],
      howApplied:
        'Procedural 3D WebGL spatial canvas, node network rendering, orbital ring animations, and mouse parallax interaction.',
      relatedProjectIds: [],
    },
    {
      id: 'streamlit',
      name: 'Streamlit & Dash',
      category: 'tools',
      categoryLabel: 'Web & Development Tools',
      whereUsed: ['Physiotherapy Assistance System', 'Crypto Market Analysis', 'CareerAgent'],
      howApplied:
        'Building interactive data dashboards, live camera UI overlays, multi-coin financial charts, and student career portals.',
      relatedProjectIds: ['physiotherapy', 'crypto-analysis', 'careeragent'],
    },
    {
      id: 'git-github',
      name: 'Git & GitHub',
      category: 'tools',
      categoryLabel: 'Web & Development Tools',
      whereUsed: ['All 4 Flagship Repositories', 'Portfolio V4'],
      howApplied:
        'Version control, branch management, GitHub repository documentation, README engineering, and Vercel deployment.',
      relatedProjectIds: ['physiotherapy', 'ckd-prediction', 'crypto-analysis', 'careeragent'],
    },
  ] as SkillNode[],

  journey: [
    {
      year: '2024',
      title: 'Foundation in AI & Data Science',
      role: 'B.Tech AI & DS Student (GGSIPU)',
      description:
        'Commenced Artificial Intelligence & Data Science degree at Guru Gobind Singh Indraprastha University. Focused on core Python programming, SQL databases, statistics, and linear algebra.',
      highlights: [
        'Maintained strong academic performance (9.03 / 10.0 CGPA).',
        'Built foundational Python data analytics scripts with Pandas and NumPy.',
        'Explored introductory machine learning classification algorithms.',
      ],
    },
    {
      year: '2025',
      title: 'Hackathons & World Entrepreneurs Day Winner',
      role: 'Team Leader & Technical Contributor',
      description:
        'Accelerated project building through hackathon participation. Awarded 1st Place Winner at World Entrepreneurs Day Competition for an AI healthcare prototype.',
      highlights: [
        'Won 1st Place at World Entrepreneurs Day Competition 2025 (Chandigarh University Incubator).',
        'Engineered AI-Based Physiotherapy Assistance System with MediaPipe 33 pose landmark tracking.',
        'Led student developer teams across university competitive hackathons.',
      ],
      badge: '1ST PLACE WINNER',
    },
    {
      year: '2026',
      title: 'Generative AI, National Finalist & Portfolio Engineering',
      role: 'AI / Data Science Practitioner',
      description:
        'Completed IBM SkillsBuild Generative AI Foundation Models program. Selected as National Finalist at India Innovates 2026 at Bharat Mandapam, New Delhi.',
      highlights: [
        'National Finalist — India Innovates 2026 (Bharat Mandapam, New Delhi) in Healthcare Open Innovation.',
        'Completed IBM SkillsBuild Generative AI & Foundation Models Enterprise Training.',
        'Built CareerAgent LLM application with LangChain & Groq API.',
        'Engineered Portfolio V4 Digital Lab with Next.js 16 and Three.js.',
      ],
      badge: 'NATIONAL FINALIST',
    },
    {
      year: '2027',
      title: 'Expected B.Tech Graduation',
      role: 'B.Tech AI & Data Science Graduate',
      description:
        'Targeting B.Tech Artificial Intelligence & Data Science degree completion from GGSIPU with practical experience in AI, ML, Computer Vision, and Data Science.',
      highlights: [
        'Expected Graduation: May 2027.',
        'Open for AI, Machine Learning, and Data Science internship opportunities.',
      ],
      badge: 'MAY 2027 GRADUATION',
    },
  ] as JourneyMilestone[],

  achievements: [
    {
      id: 'world-entrepreneurs-day',
      title: 'World Entrepreneurs Day Competition 2025',
      award: '1st Place Winner',
      location: 'Chandigarh University Incubator',
      year: '2025',
      image: '/images/world-entrepreneurs-day.jpg',
      summary:
        'Won 1st place for an AI healthcare prototype evaluated on technical solution architecture and live product presentation.',
      details:
        'Presented the AI-Based Physiotherapy Assistance System prototype to incubator judges. Demonstrated real-time 30 FPS MediaPipe pose landmark tracking, joint angle vector geometry, and live posture calibration feedback.',
      impact: 'Selected as top technical innovation project out of competing university teams.',
    },
    {
      id: 'india-innovates-2026',
      title: 'India Innovates 2026',
      award: 'National Finalist',
      location: 'Bharat Mandapam, New Delhi',
      year: '2026',
      image: '/images/india-innovates-2026.jpg',
      summary:
        'Represented GGSIPU in the Healthcare Open Innovation track at Bharat Mandapam, New Delhi.',
      details:
        'Selected among national university finalists to showcase engineering solutions addressing healthcare accessibility and AI-assisted diagnostics.',
      impact: 'Recognized for technical methodology, practical scope, and execution clarity.',
    },
  ] as AchievementItem[],

  buildLogs: [
    {
      version: 'v4.0',
      title: 'Bhavya // Digital Lab Transformation',
      date: '2026-08-09',
      summary:
        'Engineered an interactive 3D spatial digital laboratory experience featuring a procedural AI Core, System Map node diagram, interactive project pipelines, and skills constellation.',
      changes: [
        'Procedural R3F/Three.js AI Core scene',
        'System Map node network',
        'Visual project engineering pipelines',
        'Skills constellation evidence cards',
        'Portfolio AI Agent integration',
      ],
    },
    {
      version: 'v3.2',
      title: 'Credibility & Content Truth Audit',
      date: '2026-08-07',
      summary:
        'Standardized copy across all portfolio sections to enforce grounded claims, 20+ hackathon participations, and verified May 2027 graduation date.',
      changes: [
        'Standardized hackathon metric to 20+ Participations',
        'Verified May 2027 graduation date',
        'Aligned /resume route with RESUME_V3_FINAL',
      ],
    },
    {
      version: 'v3.0',
      title: 'Interactive Experience Upgrade',
      date: '2026-08-05',
      summary:
        'Introduced obsidian dark editorial foundation, spatial 3D background canvas, and interactive recruiter mode modal.',
      changes: [
        'Three.js spatial canvas background',
        'Recruiter Mode quick summary modal',
        'Case study drawer infrastructure',
      ],
    },
  ],

  agentQA: [
    {
      question: 'What projects has Bhavya built?',
      answer:
        'Bhavya has engineered four canonical flagship projects: (1) AI-Based Physiotherapy Assistance System (MediaPipe 33 landmark pose tracking & 2D joint angle vector geometry), (2) Chronic Kidney Disease Prediction Pipeline (Scikit-learn median imputation & Random Forest classification), (3) Cryptocurrency Market Analysis (CoinGecko SQL/Pandas 7d/30d moving averages & LSTM vs naive baseline evaluation), and (4) CareerAgent (LangChain LLM resume parsing & skill-gap navigation).',
      actionType: 'projects',
      actionLabel: 'VIEW PROJECTS',
    },
    {
      question: 'What are his core technical skills?',
      answer:
        'Bhavya’s core technical toolkit includes Python, SQL, TypeScript, JavaScript, Pandas, NumPy, Scikit-learn, OpenCV, MediaPipe, LangChain, Groq LLM APIs, Next.js 16, React 19, Three.js, Streamlit, Power BI, and Git/GitHub.',
      actionType: 'skills',
      actionLabel: 'VIEW SKILLS',
    },
    {
      question: 'What are his major achievements?',
      answer:
        'Bhavya is the 1st Place Winner of the World Entrepreneurs Day Competition 2025 (Chandigarh University Incubator) for his AI healthcare prototype, a National Finalist at India Innovates 2026 (Bharat Mandapam), and has completed 20+ hackathon participations as team leader.',
      actionType: 'achievements',
      actionLabel: 'VIEW ACHIEVEMENTS',
    },
    {
      question: 'Show me his engineering journey',
      answer:
        'Bhavya is a B.Tech Artificial Intelligence & Data Science undergraduate at GGSIPU (New Delhi, Expected Graduation: May 2027, 9.03/10.0 CGPA). His journey spans foundation building in 2024, winning 1st place in 2025, Generative AI enterprise training in 2026, and graduation in May 2027.',
      actionType: 'journey',
      actionLabel: 'VIEW JOURNEY',
    },
    {
      question: 'How can I contact Bhavya?',
      answer:
        'You can reach Bhavya directly via email at bansalbhavya941@gmail.com, view his code repositories on GitHub (github.com/bhavyabansal941), or connect on LinkedIn (linkedin.com/in/bhavya-bansal-aa70a3301).',
      actionType: 'contact',
      actionLabel: 'OPEN CONTACT CHANNEL',
    },
    {
      question: 'Show me the resume',
      answer:
        'Bhavya’s production-ready Resume Version 3.0 Final is available directly on the website route /resume with 1-click PDF print/save support.',
      actionType: 'resume',
      actionLabel: 'VIEW RESUME ↗',
    },
  ],
};
