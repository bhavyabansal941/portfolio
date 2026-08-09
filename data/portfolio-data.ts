export interface CandidateInfo {
  name: string;
  degree: string;
  university: string;
  graduationDate: string;
  graduationClass: string;
  cgpa: string;
  hackathons: string;
  flagships: string;
  topAward: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  status: string;
}

export interface PipelineStage {
  stage: string;
  description: string;
  purpose: string;
  nextStage?: string;
  detail: string;
}

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  techStack: string[];
  pipeline: PipelineStage[];
  implementation: string[];
  decisions: string[];
  outcome: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'programming' | 'data' | 'ml' | 'cv' | 'genai' | 'tools';
  categoryLabel: string;
  whereUsed: string[];
  howApplied: string;
  relatedProjectIds: string[];
  relatedProjectNames: string[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  role: string;
  description: string;
  badge?: string;
  highlights: string[];
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
}

export interface BuildLogEntry {
  version: string;
  date: string;
  title: string;
  summary: string;
  changes: string[];
}

export interface AgentQA {
  question: string;
  answer: string;
  actionType: 'projects' | 'skills' | 'achievements' | 'journey' | 'contact' | 'resume';
  actionLabel: string;
}

export const PORTFOLIO_DATA: {
  candidate: CandidateInfo;
  projects: ProjectData[];
  skills: SkillNode[];
  journey: TimelineMilestone[];
  achievements: AchievementItem[];
  buildLogs: BuildLogEntry[];
  agentQA: AgentQA[];
} = {
  candidate: {
    name: 'Bhavya Bansal',
    degree: 'B.Tech Artificial Intelligence & Data Science',
    university: 'Guru Gobind Singh Indraprastha University (GGSIPU)',
    graduationDate: 'Expected Graduation: May 2027',
    graduationClass: 'Class of 2027',
    cgpa: '9.03 / 10.0',
    hackathons: '20+ Hackathon Participations',
    flagships: '4 Flagship AI & CV Systems',
    topAward: '1st Place Winner — World Entrepreneurs Day 2025',
    email: 'bansalbhavya941@gmail.com',
    phone: '+91 9205292550',
    github: 'https://github.com/bhavyabansal941',
    linkedin: 'https://www.linkedin.com/in/bhavya-bansal-aa70a3301',
    status: 'AVAILABLE FOR INTERNSHIP OPPORTUNITIES',
  },

  projects: [
    {
      id: 'ai-physiotherapy',
      number: '01',
      title: 'AI-Based Physiotherapy Assistance System',
      subtitle: 'Real-Time Pose Estimation & Motion Geometry Feedback',
      category: 'Computer Vision / Motion Geometry',
      summary:
        'A real-time computer vision application calculating 2D joint angles across 33 MediaPipe pose landmarks to guide posture calibration during rehabilitation exercises.',
      problem:
        'Physical therapy patients performing home exercises lack real-time posture feedback, risking re-injury due to improper joint execution angles.',
      approach:
        'Built a 30 FPS video pipeline with MediaPipe Pose landmark extraction, applying 2D vector trigonometry to compute real-time joint angles and compare against clinical motion targets.',
      techStack: ['Python 3.9', 'MediaPipe 0.10', 'OpenCV', 'Streamlit', 'NumPy', 'SciPy'],
      pipeline: [
        {
          stage: 'CAMERA',
          description: 'Webcam Frame Capture',
          purpose: 'Captures live video feed at 30 FPS via OpenCV',
          nextStage: 'MediaPipe Pose Extraction',
          detail: '30 FPS OpenCV video stream buffer processing live webcam frames.',
        },
        {
          stage: 'MEDIAPIPE',
          description: 'Pose Extraction',
          purpose: 'Extracts 33 skeletal body landmark coordinates',
          nextStage: 'Coordinate Rescaling & Filtering',
          detail: 'MediaPipe Pose solution extracting (x, y, z) keypoints with confidence scoring.',
        },
        {
          stage: 'LANDMARKS',
          description: 'Rescaling & Filtering',
          purpose: 'Normalizes 2D coordinates to frame dimensions',
          nextStage: 'Joint Geometry Calculation',
          detail: 'Scales raw normalized keypoints to pixel space for geometrical analysis.',
        },
        {
          stage: 'JOINT GEOMETRY',
          description: '2D Vector Math',
          purpose: 'Calculates joint angles via vector trigonometry',
          nextStage: 'Posture Threshold Evaluation',
          detail: 'NumPy arctan2 vector math computing shoulder-elbow-wrist and knee angles.',
        },
        {
          stage: 'POSTURE ANALYSIS',
          description: 'Threshold Evaluation',
          purpose: 'Compares real-time angles against Target Thresholds',
          nextStage: 'Visual & CSV Feedback Logging',
          detail: 'Evaluates computed joint angles against posture execution bounds.',
        },
        {
          stage: 'FEEDBACK',
          description: 'Visual & CSV Logging',
          purpose: 'Renders UI overlays and logs workout repetitions',
          nextStage: 'End of Pipeline Frame Loop',
          detail:
            'Streamlit visual overlay displaying real-time gauges and logging rep timestamps.',
        },
      ],
      implementation: [
        'Configured MediaPipe Pose solution with min_detection_confidence=0.5 and min_tracking_confidence=0.5 for stable 30 FPS inference.',
        'Calculated 2D vector angles using arctan2 trigonometry across shoulder-elbow-wrist and hip-knee-ankle joint triplets.',
        'Designed interactive Streamlit web dashboard rendering live webcam feed alongside real-time angle gauges and repetition counters.',
        'Implemented CSV data logger capturing per-frame joint angles and timestamped rep completion metrics for retrospective review.',
      ],
      decisions: [
        'Selected 2D landmark projection over 3D coordinate estimation for 3x lower latency on consumer webcams.',
        'Used Streamlit frame-looping over heavy JS frontend frameworks to maintain monolithic Python codebase simplicity.',
        'Enforced strict 10-degree margin of error on joint posture bounds to prevent false positive rep completions.',
      ],
      outcome:
        'Achieved sub-50ms frame processing latency on standard consumer webcams; winner of 1st Place at World Entrepreneurs Day Competition 2025.',
      githubUrl: 'https://github.com/bhavyabansal941/ai-physiotherapy-analysis',
    },
    {
      id: 'ckd-prediction',
      number: '02',
      title: 'Chronic Kidney Disease Prediction Pipeline',
      subtitle: 'Clinical Feature Engineering & Classification Modeling',
      category: 'Machine Learning / Healthcare Analytics',
      summary:
        'A machine learning classification pipeline using clinical data preprocessing, median imputation, feature scaling, and model evaluation to explore CKD risk prediction.',
      problem:
        'Clinical tabular datasets frequently suffer from missing laboratory values (up to 40% missingness) and high feature correlation, requiring structured data pipelines for reliable analytics.',
      approach:
        'Engineered an end-to-end ML data pipeline utilizing median/mode imputation, standard feature scaling, correlation analysis, and hyperparameter-tuned classification models.',
      techStack: ['Python 3.10', 'Scikit-learn', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
      pipeline: [
        {
          stage: 'DATA',
          description: 'Clinical Ingestion',
          purpose: 'Ingests clinical laboratory dataset attributes',
          nextStage: 'Missing Value Imputation',
          detail:
            'UCI Chronic Kidney Disease dataset containing 400 patient instances across 24 attributes.',
        },
        {
          stage: 'CLEANING',
          description: 'Median Imputation',
          purpose: 'Fills missing numerical values via group medians',
          nextStage: 'Feature Encoding & Scaling',
          detail:
            'SimpleImputer handling missing continuous lab indicators without synthetic distortion.',
        },
        {
          stage: 'FEATURE ENG',
          description: 'Standard Scaling',
          purpose: 'Encodes categorical features & normalizes variance',
          nextStage: 'Model Training & Hyperparameter Tuning',
          detail: 'StandardScaler scaling numerical distributions to zero mean and unit variance.',
        },
        {
          stage: 'MODEL',
          description: 'Random Forest Training',
          purpose: 'Trains Decision Tree & Random Forest classifiers',
          nextStage: 'Recall & ROC-AUC Metric Evaluation',
          detail: 'Trains ensemble classifiers with stratified 5-fold cross-validation folds.',
        },
        {
          stage: 'PREDICTION',
          description: 'Recall Evaluation',
          purpose: 'Evaluates recall, confusion matrix & false negatives',
          nextStage: 'Model Performance Reporting',
          detail: 'Prioritizes high recall evaluation to minimize false-negative risk indicators.',
        },
      ],
      implementation: [
        'Cleaned UCI Chronic Kidney Disease dataset containing 400 patient records across 24 clinical attributes (hemodialysis, blood urea, serum creatinine).',
        'Implemented SimpleImputer using median strategy for continuous clinical variables and mode strategy for binary indicator attributes.',
        'Trained and evaluated Logistic Regression, Decision Tree, and Random Forest Classifiers with stratified 5-fold cross-validation.',
        'Generated ROC-AUC curves, confusion matrices, and feature importance rankings identifying serum creatinine and hemoglobin as top diagnostic indicators.',
      ],
      decisions: [
        'Prioritized recall metric optimization over accuracy to minimize false-negative diagnostic classifications.',
        'Selected Random Forest ensemble model due to robustness against non-linear feature interactions and missing value sensitivity.',
        'Applied Standard Scaler exclusively within cross-validation folds to strictly prevent data leakage between train and test sets.',
      ],
      outcome:
        'Established an interpretable diagnostic pipeline benchmark exploring machine learning feature importance in renal health analytics.',
      githubUrl: 'https://github.com/bhavyabansal941/urine-test-disease-prediction',
    },
    {
      id: 'crypto-analysis',
      number: '03',
      title: 'Cryptocurrency Market Analysis & Trend Forecasting',
      subtitle: 'Multi-Asset Time-Series Pipeline & Baseline Model Benchmark',
      category: 'Data Analytics / Financial Time-Series',
      summary:
        'Automated time-series data extraction, SQL analytics, news sentiment scoring, and next-day return forecasting pipeline comparing LSTM predictions against a naive baseline.',
      problem:
        'Cryptocurrency markets exhibit extreme volatility and noise; naive predictions fail without rigorous feature engineering, moving averages, and sentiment indicators.',
      approach:
        'Built an automated data pipeline fetching multi-asset OHLCV data from CoinGecko API, storing records in SQL, engineering 7-day/30-day moving averages, and training an LSTM forecasting model.',
      techStack: ['Python 3.11', 'SQL', 'Pandas', 'TensorFlow/Keras', 'TextBlob', 'Dash', 'Plotly'],
      pipeline: [
        {
          stage: 'DATA',
          description: 'CoinGecko API Extract',
          purpose: 'Extracts historical multi-coin daily market data',
          nextStage: 'Relational SQL Indexing',
          detail: 'CoinGecko REST API ingestion for BTC, ETH, SOL, ADA, and DOGE assets.',
        },
        {
          stage: 'SQL',
          description: 'Relational Aggregation',
          purpose: 'Stores structured OHLCV time-series records',
          nextStage: 'Pandas Feature Engineering',
          detail: 'SQLite relational database indexing daily timestamps for fast analytic queries.',
        },
        {
          stage: 'PANDAS',
          description: 'Feature Preprocessing',
          purpose: 'Computes volatility, rolling means & returns',
          nextStage: 'Moving Average Indicator Computation',
          detail: 'Data Cleaning, log-return calculations, and missing data interpolation.',
        },
        {
          stage: 'MOVING AVG',
          description: 'Volatility Scoring',
          purpose: 'Calculates 7-day & 30-day SMA/EMA technical metrics',
          nextStage: 'Sequential LSTM Neural Model Training',
          detail: 'Engineers technical momentum indicators to capture short-term trend shifts.',
        },
        {
          stage: 'TREND ANALYSIS',
          description: 'LSTM Model Training',
          purpose: 'Trains sequential LSTM neural network model',
          nextStage: 'Naive Persistence Baseline Benchmark Evaluation',
          detail: 'TensorFlow/Keras LSTM network trained on rolling 30-day sequences.',
        },
        {
          stage: 'FORECASTING',
          description: 'Baseline Evaluation',
          purpose: 'Compares LSTM RMSE against Naive Persistence Benchmark',
          nextStage: 'End of Financial Analytics Pipeline',
          detail: 'Evaluates model forecasting performance against a simple t-1 baseline.',
        },
      ],
      implementation: [
        'Built Python ETL script connecting to CoinGecko REST API fetching daily market data for BTC, ETH, SOL, ADA, and DOGE.',
        'Created SQLite relational database schema storing historical price records with indexed timestamp columns for sub-10ms query execution.',
        'Engineered technical indicators using Pandas including 7-day / 30-day Simple Moving Averages, Exponential Moving Averages, and daily percentage returns.',
        'Constructed LSTM neural network in TensorFlow/Keras and benchmarked prediction error against a naive persistence baseline (t = t-1).',
      ],
      decisions: [
        'Included naive persistence forecast as benchmark to prevent over-optimistic evaluation of time-series neural networks.',
        'Normalized price series using MinMaxScaler fit exclusively on rolling training windows to prevent look-ahead bias.',
        'Integrated TextBlob sentiment analysis on financial news headlines to supplement price-only technical features.',
      ],
      outcome:
        'Established transparent baseline comparison demonstrating performance boundaries of deep learning on high-frequency financial assets.',
      githubUrl: 'https://github.com/bhavyabansal941/crypto-market-analysis',
    },
    {
      id: 'career-agent',
      number: '04',
      title: 'CareerAgent — AI Career Navigation Assistant',
      subtitle: 'LLM Prompt Engineering, Resume Parsing & Skill Gap Analysis',
      category: 'Generative AI / Natural Language Processing',
      summary:
        'An intelligent career agent analyzing resume text, extracting key technical skills, comparing candidate profiles against job specifications, and generating tailored career roadmaps.',
      problem:
        'Job seekers struggle to identify precise skill gaps between their current resume profile and target enterprise job descriptions.',
      approach:
        'Engineered an LLM-driven application using LangChain, Groq API (Llama 3), and structured prompt templates to parse resume text and return actionable skill gap recommendations.',
      techStack: ['Python 3.11', 'LangChain', 'Groq API', 'Llama 3 8B', 'PyPDF2', 'Streamlit'],
      pipeline: [
        {
          stage: 'RESUME',
          description: 'PDF Ingestion',
          purpose: 'Ingests raw candidate PDF resume documents',
          nextStage: 'PyPDF2 Text Layout Extraction',
          detail: 'PyPDF2 file stream reader uploading resume PDF files into memory.',
        },
        {
          stage: 'PARSER',
          description: 'Text Extraction',
          purpose: 'Extracts clean layout text from PDF content',
          nextStage: 'LLM Technical Skill Entity Extraction',
          detail: 'Extracts multi-column text strings and converts to structured string buffers.',
        },
        {
          stage: 'SKILL EXTRACTION',
          description: 'Entity Extraction',
          purpose: 'Parses programming languages, tools & frameworks',
          nextStage: 'Target Job Specification Analysis',
          detail: 'LangChain prompt template identifying technical skill taxonomy items.',
        },
        {
          stage: 'JOB DESCRIPTION',
          description: 'Target Analysis',
          purpose: 'Analyzes enterprise job requirement competencies',
          nextStage: 'Vector Skill Gap Matrix Matching',
          detail: 'Parses target job postings to establish required competency baselines.',
        },
        {
          stage: 'MATCHING',
          description: 'Vector Skill Gap Matrix',
          purpose: 'Computes skill overlap & highlights missing gaps',
          nextStage: 'Actionable Career Roadmap Generation',
          detail: 'Calculates skill similarity matrix and isolates missing required tech skills.',
        },
        {
          stage: 'CAREER ROADMAP',
          description: 'Actionable Guidance',
          purpose: 'Generates step-by-step learning recommendations',
          nextStage: 'End of Agent Execution Loop',
          detail: 'Groq API Llama 3 generating step-by-step roadmap and project suggestions.',
        },
      ],
      implementation: [
        'Built PyPDF2 document loader extracting raw text content from uploaded PDF resumes while handling multi-column formatting.',
        'Constructed structured zero-shot and few-shot prompt templates directing Llama 3 8B (via Groq API) to return JSON-formatted skill taxonomies.',
        'Implemented skill gap comparison module calculating overlap percentages between candidate skills and target job requirements.',
        'Deployed interactive Streamlit web application rendering similarity scores, missing skill lists, and custom interview preparation checklists.',
      ],
      decisions: [
        'Used Groq API inference engine over standard local models for sub-second LLM response latency.',
        'Enforced Pydantic structured output validation to guarantee deterministic JSON response schemas from the LLM.',
        'Designed modular pipeline allowing seamless swapping between different foundation models (Llama 3, Mixtral).',
      ],
      outcome:
        'Reduced career gap analysis turnaround from hours of manual comparison to under 3 seconds with structured actionable guidance.',
      githubUrl: 'https://github.com/bhavyabansal941/CareerAgent',
    },
  ],

  skills: [
    {
      id: 'python',
      name: 'Python 3.x',
      category: 'programming',
      categoryLabel: 'PROGRAMMING LANGUAGE',
      howApplied:
        'Core development language across all 4 flagship projects. Applied for MediaPipe pose estimation, Scikit-learn modeling, ETL pipelines, and LangChain agents.',
      whereUsed: [
        'AI Physiotherapy: MediaPipe & OpenCV frame processing loop',
        'CKD Prediction: Scikit-learn data cleaning & model training',
        'Crypto Analysis: Pandas time-series processing & API extraction',
        'CareerAgent: PyPDF2 text parsing & Groq API orchestration',
      ],
      relatedProjectIds: ['ai-physiotherapy', 'ckd-prediction', 'crypto-analysis', 'career-agent'],
      relatedProjectNames: ['AI Physiotherapy', 'CKD Prediction', 'Crypto Analysis', 'CareerAgent'],
    },
    {
      id: 'sql',
      name: 'SQL',
      category: 'data',
      categoryLabel: 'DATABASE & ANALYTICS',
      howApplied:
        'Designed relational database schemas, wrote indexing queries, and aggregated time-series financial datasets for analytical pipelines.',
      whereUsed: [
        'Crypto Analysis: SQLite database schema, price indexing & OHLCV aggregation queries',
        'Academic Coursework: Database Management Systems (DBMS) relational modeling',
      ],
      relatedProjectIds: ['crypto-analysis'],
      relatedProjectNames: ['Crypto Market Analysis'],
    },
    {
      id: 'scikit-learn',
      name: 'Scikit-learn',
      category: 'ml',
      categoryLabel: 'MACHINE LEARNING',
      howApplied:
        'Data preprocessing (imputation, scaling, encoding), model selection (Random Forest, Logistic Regression), cross-validation, and metric evaluation.',
      whereUsed: [
        'CKD Prediction: SimpleImputer median data cleaning & Random Forest classification',
        'Crypto Analysis: MinMaxScaler normalization for LSTM feature inputs',
      ],
      relatedProjectIds: ['ckd-prediction', 'crypto-analysis'],
      relatedProjectNames: ['CKD Prediction', 'Crypto Analysis'],
    },
    {
      id: 'mediapipe',
      name: 'MediaPipe',
      category: 'cv',
      categoryLabel: 'COMPUTER VISION',
      howApplied:
        'Configured real-time skeletal pose detection graph extracting 33 normalized 3D body landmarks at 30 FPS.',
      whereUsed: [
        'AI Physiotherapy: 33 landmark coordinate tracking & joint vector geometry calculation',
      ],
      relatedProjectIds: ['ai-physiotherapy'],
      relatedProjectNames: ['AI Physiotherapy Assistance'],
    },
    {
      id: 'opencv',
      name: 'OpenCV',
      category: 'cv',
      categoryLabel: 'COMPUTER VISION',
      howApplied:
        'Video stream frame capture, color-space conversions (BGR to RGB), graphical overlay drawing, and frame rate optimization.',
      whereUsed: ['AI Physiotherapy: Webcam frame loop & real-time skeleton drawing overlay'],
      relatedProjectIds: ['ai-physiotherapy'],
      relatedProjectNames: ['AI Physiotherapy Assistance'],
    },
    {
      id: 'pandas',
      name: 'Pandas & NumPy',
      category: 'data',
      categoryLabel: 'DATA ANALYTICS',
      howApplied:
        'DataFrame manipulation, missing value handling, rolling window calculations (SMA/EMA), vector trigonometry, and statistical aggregation.',
      whereUsed: [
        'CKD Prediction: Clinical dataset cleaning & attribute correlation analysis',
        'Crypto Analysis: 7-day/30-day moving average calculation & daily returns',
        'AI Physiotherapy: NumPy arctan2 2D joint angle vector geometry',
      ],
      relatedProjectIds: ['ai-physiotherapy', 'ckd-prediction', 'crypto-analysis'],
      relatedProjectNames: ['AI Physiotherapy', 'CKD Prediction', 'Crypto Analysis'],
    },
    {
      id: 'langchain',
      name: 'LangChain & Groq API',
      category: 'genai',
      categoryLabel: 'GENERATIVE AI',
      howApplied:
        'LLM prompt engineering, structured JSON output extraction, PDF text chunking, and Llama 3 API orchestration.',
      whereUsed: ['CareerAgent: Resume parsing, skill gap analysis & career roadmap generation'],
      relatedProjectIds: ['career-agent'],
      relatedProjectNames: ['CareerAgent Navigation Assistant'],
    },
    {
      id: 'nextjs',
      name: 'Next.js 16 & React 19',
      category: 'tools',
      categoryLabel: 'WEB ARCHITECTURE',
      howApplied:
        'Built production web applications utilizing App Router, Server Components, TypeScript, Tailwind CSS v4, and Three.js 3D WebGL scenes.',
      whereUsed: ['Bhavya Personal Portfolio V4: Digital Lab web experience & web resume route'],
      relatedProjectIds: [],
      relatedProjectNames: [],
    },
    {
      id: 'threejs',
      name: 'Three.js',
      category: 'tools',
      categoryLabel: '3D GRAPHICS',
      howApplied:
        'WebGL 3D scene rendering, procedural geometry generation, particle clouds, orbital rings, and mouse parallax interaction.',
      whereUsed: ['Portfolio V4 Hero: Interactive 3D AI Core WebGL scene background'],
      relatedProjectIds: [],
      relatedProjectNames: [],
    },
    {
      id: 'git',
      name: 'Git & GitHub',
      category: 'tools',
      categoryLabel: 'ENGINEERING WORKFLOW',
      howApplied:
        'Version control, clear commit discipline, open-source repository documentation, and Vercel continuous deployment integration.',
      whereUsed: ['All 4 Flagship Repositories: Recruiter-ready READMEs & verified codebases'],
      relatedProjectIds: ['ai-physiotherapy', 'ckd-prediction', 'crypto-analysis', 'career-agent'],
      relatedProjectNames: ['AI Physiotherapy', 'CKD Prediction', 'Crypto Analysis', 'CareerAgent'],
    },
  ],

  journey: [
    {
      year: '2024',
      title: 'Academic Foundations & Initial Building',
      role: 'B.Tech AI & Data Science Student',
      description:
        'Enrolled in B.Tech Artificial Intelligence & Data Science at GGSIPU (Current CGPA: 9.03/10.0). Built core programming foundations in Python, Data Structures, Algorithms, SQL, and Object-Oriented Programming.',
      highlights: [
        'Maintained 9.03 / 10.0 cumulative CGPA across rigorous AI & Data Science curriculum.',
        'Built foundation projects in Python data processing, SQL database design, and statistical data visualization.',
        'Began competitive hackathon participation, learning team leadership and rapid prototyping.',
      ],
    },
    {
      year: '2025',
      title: 'Applied Building, Pose Estimation & Award Recognition',
      role: 'Hackathon Competitor & Prototype Developer',
      description:
        'Developed the AI-Based Physiotherapy Assistance System utilizing MediaPipe 33 pose landmarks. Won 1st Place at World Entrepreneurs Day Competition 2025 (Chandigarh University Incubator).',
      badge: '1st Place Winner 2025',
      highlights: [
        'Won 1st Place at World Entrepreneurs Day Competition 2025 for AI physiotherapy prototype.',
        'Engineered real-time computer vision joint vector geometry pipeline processing video at 30 FPS.',
        'Developed Chronic Kidney Disease diagnostic ML pipeline and Cryptocurrency time-series analysis framework.',
      ],
    },
    {
      year: '2026',
      title: 'Generative AI, Specialization & National Recognition',
      role: 'National Finalist & Enterprise Training',
      description:
        'Selected as National Finalist at India Innovates 2026 (Bharat Mandapam) in Healthcare Open Innovation. Completed IBM SkillsBuild Generative AI Foundation Models program and built CareerAgent LLM application.',
      badge: 'National Finalist 2026',
      highlights: [
        'Selected as National Finalist at India Innovates 2026 (Bharat Mandapam, New Delhi) for healthcare AI innovation proposal.',
        'Completed IBM SkillsBuild Generative AI Foundation Models specialization program.',
        'Engineered CareerAgent LLM application using LangChain, Groq API (Llama 3), and structured prompt templates.',
      ],
    },
    {
      year: '2027',
      title: 'Expected B.Tech Graduation & Professional Deployment',
      role: 'B.Tech AI & Data Science Candidate (Expected Graduation: May 2027)',
      description:
        'Target graduation milestone for B.Tech in Artificial Intelligence & Data Science from Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi (Target CGPA 9.0+). Target: Internship & full-time AI/Data engineering deployment.',
      badge: 'EXPECTED GRADUATION MAY 2027',
      highlights: [
        'B.Tech Artificial Intelligence & Data Science degree completion candidate at GGSIPU (Expected May 2027).',
        'Targeting AI/ML, Data Science, Data Engineering, and Computer Vision internship & full-time roles.',
        'Continuous open-source contribution and production system refinement.',
      ],
    },
  ],

  achievements: [
    {
      id: 'world-entrepreneurs-day-2025',
      title: 'World Entrepreneurs Day Competition 2025',
      award: '1st Place Winner',
      location: 'Chandigarh University Incubator',
      year: '2025',
      image: '/images/world-entrepreneurs-day-winner.jpg',
      summary:
        'Awarded 1st Place for presenting the AI-Based Physiotherapy Assistance System prototype live on stage.',
      details:
        'Evaluated by incubator judges on technical execution, computer vision real-time accuracy, motion landmark calculation, and practical healthcare utility.',
    },
    {
      id: 'india-innovates-2026',
      title: 'India Innovates 2026 National Innovation Hackathon',
      award: 'National Finalist',
      location: 'Bharat Mandapam, New Delhi',
      year: '2026',
      image: '/images/india-innovates-2026.jpg',
      summary: 'Selected as National Finalist in Healthcare Open Innovation representing GGSIPU.',
      details:
        'Competed among top student innovator teams nationally, presenting AI healthcare software architecture at Bharat Mandapam, New Delhi.',
    },
  ],

  buildLogs: [
    {
      version: 'v4.2',
      date: '2026-08-09',
      title: 'Production Bug Fix & Final UX Polish Pass',
      summary:
        'Fixed image asset paths, removed root layout footer duplication, updated 2027 candidate terminology, and enhanced pipeline stage tooltips and skill-project dependency highlights.',
      changes: [
        'Fixed production image filenames (/images/world-entrepreneurs-day-winner.jpg & /images/ai-posture-analysis-booth.jpg).',
        'Removed duplicate footer rendering in app/page.tsx, establishing single root footer in app/layout.tsx.',
        'Updated 2027 milestone role to "B.Tech AI & Data Science Candidate (Expected Graduation: May 2027)".',
        'Refined CKD description to focus on Machine Learning / Healthcare Analytics data pipeline preprocessing.',
      ],
    },
    {
      version: 'v4.1',
      date: '2026-08-09',
      title: 'Digital Lab Architecture & Production Truth Audit',
      summary:
        'Transformed portfolio into BHAVYA // DIGITAL LAB experience architecture with 3D AI Core, System Map node diagram, interactive visual pipelines, skills constellation, and 100% May 2027 graduation alignment.',
      changes: [
        'Updated all identity references to Expected Graduation: May 2027 / Class of 2027.',
        'Extended Engineering Journey to 4 chronological nodes ending at May 2027 Expected Graduation.',
        'Created interactive System Map ("HOW BHAVYA BUILDS") and Skills Constellation taxonomy.',
        'Wired interactive 6-stage visual pipeline controllers across all 4 flagship project cards.',
      ],
    },
    {
      version: 'v3.2',
      date: '2026-08-09',
      title: 'Resume Synchronization & Production Build QA',
      summary:
        'Synchronized Expected Graduation: May 2027 across web resume route and single-page ATS PDF artifact.',
      changes: [
        'Updated app/resume/page.tsx with May 2027 graduation date.',
        'Re-generated single-page PDF bhavya_bansal_resume.pdf & 300 DPI preview.',
        'Verified clean Prettier, ESLint, and Next.js production build.',
      ],
    },
  ],

  agentQA: [
    {
      question: 'What projects has Bhavya built?',
      answer:
        'Bhavya has engineered 4 canonical flagship systems: 1) AI-Based Physiotherapy Assistance System (MediaPipe 33 pose landmarks & 2D joint vector geometry at 30 FPS); 2) Chronic Kidney Disease Prediction Pipeline (Scikit-learn median imputation & Random Forest classification); 3) Cryptocurrency Market Analysis (CoinGecko API, SQL, 7d/30d moving averages & LSTM vs naive baseline evaluation); 4) CareerAgent (LangChain, Groq API Llama 3 & structured skill gap analysis).',
      actionType: 'projects',
      actionLabel: 'VIEW PROJECTS',
    },
    {
      question: 'What are his core technical skills?',
      answer:
        'Bhavya specializes in Python 3.x, SQL, Machine Learning (Scikit-learn, Random Forest), Computer Vision (MediaPipe, OpenCV 2D joint trigonometry), Data Analytics (Pandas, NumPy, Matplotlib), Generative AI (LangChain, Groq API Llama 3), Web Development (Next.js 16, TypeScript, Tailwind CSS v4, Three.js 3D WebGL), and Version Control (Git/GitHub).',
      actionType: 'skills',
      actionLabel: 'VIEW SKILLS',
    },
    {
      question: 'What are his major achievements?',
      answer:
        'Bhavya won 1st Place at the World Entrepreneurs Day Competition 2025 (Chandigarh University Incubator) for his AI Physiotherapy prototype, was selected as National Finalist at India Innovates 2026 (Bharat Mandapam, New Delhi), completed 20+ hackathon participations as team leader, and holds a 9.03 / 10.0 CGPA at GGSIPU.',
      actionType: 'achievements',
      actionLabel: 'VIEW ACHIEVEMENTS',
    },
    {
      question: 'Show me his engineering journey',
      answer:
        'Bhavya is a B.Tech Artificial Intelligence & Data Science candidate at GGSIPU (Expected Graduation: May 2027, 9.03 CGPA). His journey spans foundational computer science in 2024, winning 1st Place in 2025, Generative AI specialization & National Finalist recognition in 2026, and expected graduation in May 2027.',
      actionType: 'journey',
      actionLabel: 'VIEW JOURNEY',
    },
    {
      question: 'How can I contact Bhavya?',
      answer:
        'You can reach Bhavya directly via email at bansalbhavya941@gmail.com, connect on LinkedIn at linkedin.com/in/bhavya-bansal-aa70a3301, explore his GitHub at github.com/bhavyabansal941, or fill out the direct contact form on this portfolio.',
      actionType: 'contact',
      actionLabel: 'OPEN CONTACT CHANNEL',
    },
    {
      question: 'Show me the resume',
      answer:
        "Bhavya's production Resume V3.0 is accessible on the web route /resume and offers 1-click PDF print/download support. It details his Expected Graduation: May 2027, 9.03 CGPA, 4 flagship projects, competitive achievements, and core technical skills.",
      actionType: 'resume',
      actionLabel: 'VIEW RESUME ↗',
    },
  ],
};
