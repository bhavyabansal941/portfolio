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

export interface EvidenceData {
  type: 'code' | 'evaluation';
  label: string;
  sourceFile: string;
  description: string;
  codeSnippet?: string;
  evaluationTable?: {
    asset: string;
    modelMape: string;
    baselineMape: string;
    verdict: string;
  }[];
}

export interface MetricSummary {
  label: string;
  value: string;
}

export interface DemoMediaData {
  type: 'video' | 'gif' | 'coming_soon';
  videoUrl?: string;
  posterUrl?: string;
  caption: string;
}

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  problem: string;
  dataInputs?: string;
  approach: string;
  techStack: string[];
  pipeline: PipelineStage[];
  implementation: string[];
  decisions: string[];
  metricsSummary?: MetricSummary[];
  tradeoffs?: string[];
  limitations?: string[];
  nextIteration?: string[];
  outcome: string;
  githubUrl: string;
  demoUrl?: string;
  evidence?: EvidenceData;
  demoMedia?: DemoMediaData;
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
    degree: 'Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science',
    university: 'Guru Gobind Singh Indraprastha University (GGSIPU)',
    graduationDate: 'May 2027',
    graduationClass: 'Class of 2027',
    cgpa: '9.03 / 10.0',
    hackathons: '20+ Hackathons',
    flagships: '4 Flagship AI/ML Projects',
    topAward: '1st Place Winner — World Entrepreneurs Day 2025',
    email: 'bansalbhavya941@gmail.com',
    phone: '+91 9205292550',
    github: 'https://github.com/bhavyabansal941',
    linkedin: 'https://linkedin.com/in/bhavya-bansal-aa70a3301',
    status: 'B.Tech AI & Data Science Candidate (Class of 2027)',
  },

  projects: [
    {
      id: 'ai-physiotherapy',
      number: '01',
      title: 'AI-Based Physiotherapy Assistance System',
      subtitle: 'Real-Time Pose Estimation & Joint Angle Trigonometry Math',
      category: 'Computer Vision / Healthcare Engineering',
      summary:
        'A real-time computer vision application using MediaPipe, OpenCV, and 2D vector geometry math to analyze posture, grade exercise form depth, and log session data at 30 FPS.',
      problem:
        'At-home physical therapy lacks immediate visual feedback, leading to improper movement form and increased risk of joint strain.',
      dataInputs:
        'Live webcam video feed at 30 FPS, extracting 33 normalized (x, y, z) MediaPipe pose landmarks per frame.',
      metricsSummary: [
        { label: 'Processing Latency', value: '< 50ms' },
        { label: 'Frame Rate', value: '30 FPS' },
        { label: 'Pose Landmarks', value: '33 Nodes' },
        { label: 'Award', value: '1st Place Winner (2025)' },
      ],
      tradeoffs: [
        'Selected 2D landmark projection over 3D coordinate estimation for 3x lower latency on consumer webcams.',
        'Enforced strict 10-degree margin of error on joint posture bounds to prevent false positive rep completions.',
      ],
      limitations: [
        'Requires adequate lighting and full body visibility within webcam field of view.',
        'Extreme side-profile angles can lead to 2D landmark occlusion.',
      ],
      nextIteration: [
        'Integrate interactive 3D skeleton visualization for joint depth inspection.',
        'Add custom user exercise profile calibration for specialized physical therapy regimens.',
      ],
      demoMedia: {
        type: 'video',
        videoUrl: '/media/demos/physiotherapy-demo.webp',
        posterUrl: '/media/demos/physiotherapy-poster.jpg',
        caption: 'Cinematic AI-generated visualization of the MediaPipe pose-estimation, 2D joint-angle, form-evaluation, and session-logging pipeline.',
      },
      approach:
        'Engineered a real-time webcam pose tracking system extracting 33 MediaPipe keypoints, calculating 2D vector joint angles using math.atan2, and rendering live visual cues.',
      techStack: ['Python 3.9', 'MediaPipe', 'OpenCV', 'NumPy', 'Streamlit', 'CSV'],
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
          detail: 'NumPy math.atan2 vector math computing shoulder-elbow-wrist and knee angles.',
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
        'Calculated 2D vector angles using math.atan2 trigonometry across shoulder-elbow-wrist and hip-knee-ankle joint triplets in utils.py.',
        'Designed interactive Streamlit web dashboard rendering live webcam feed alongside real-time angle gauges and repetition counters.',
        'Implemented CSV data logger capturing per-frame joint angles and timestamped rep completion metrics to session_log.csv.',
      ],
      decisions: [
        'Selected 2D landmark projection over 3D coordinate estimation for 3x lower latency on consumer webcams.',
        'Used Streamlit frame-looping over heavy JS frontend frameworks to maintain monolithic Python codebase simplicity.',
        'Enforced strict 10-degree margin of error on joint posture bounds to prevent false positive rep completions.',
      ],
      outcome:
        'Achieved sub-50ms frame processing latency on standard consumer webcams; winner of 1st Place at World Entrepreneurs Day Competition 2025.',
      githubUrl: 'https://github.com/bhavyabansal941/ai-physiotherapy-analysis',
      evidence: {
        type: 'code',
        label: '2D Vector Joint Angle Trigonometry Math',
        sourceFile: 'physiotherapy_project/utils.py',
        description:
          'Calculates the 2D spatial angle (in degrees) at point b formed by points a-b-c using math.atan2 vector math, ensuring low-latency posture evaluation without black-box libraries.',
        codeSnippet: `def calculate_angle(a, b, c):
    """
    Calculate the angle (in degrees) at point b, formed by points a-b-c.
    Each point is an (x, y) pixel coordinate tuple.
    """
    x1, y1 = a
    x2, y2 = b
    x3, y3 = c

    angle = math.degrees(
        math.atan2(y3 - y2, x3 - x2) - math.atan2(y1 - y2, x1 - x2)
    )
    return abs((angle + 360) % 360)`,
      },
    },
    {
      id: 'ckd-prediction',
      number: '02',
      title: 'Chronic Kidney Disease Stage Prediction Pipeline',
      subtitle: 'Multi-Class Staging (0–5), Data Leakage Detection & XGBoost Modeling',
      category: 'Machine Learning / Healthcare Analytics',
      summary:
        'A machine learning classification pipeline predicting six CKD severity stages (0 = No CKD, 1–5 = Kidney Failure) using 4,000 patient records, explicit feature leakage detection, and XGBoost modeling.',
      problem:
        'Clinical tabular datasets frequently suffer from target-derived feature leakage (e.g. cluster labels) and class imbalance across multi-stage disease progression.',
      dataInputs:
        'Clinical tabular dataset containing 4,000 patient records across 21 clinical, lab, and lifestyle attributes for 6-class severity staging.',
      metricsSummary: [
        { label: 'Dataset Size', value: '4,000 Records' },
        { label: 'Features', value: '21 Attributes' },
        { label: 'XGBoost Accuracy', value: '98.75%' },
        { label: '5-Fold CV F1', value: '0.985' },
      ],
      tradeoffs: [
        'Explicitly removed target-derived ckd_pred and cluster features to prevent artificially inflated 100% metrics.',
        'Prioritized XGBoost gradient boosting over simpler linear models to capture complex non-linear clinical feature interactions.',
      ],
      limitations: [
        'Tabular dataset requires pre-imputation for missing lab values prior to pipeline ingestion.',
        'Severity staging relies on retrospective clinical records requiring prospective validation.',
      ],
      nextIteration: [
        'Implement SHAP feature explanation force plots for individual patient risk breakdowns.',
        'Deploy REST API endpoint with FastAPI for real-time clinical EHR integration.',
      ],
      demoMedia: {
        type: 'coming_soon',
        caption: 'Interactive clinical dataset evaluation and XGBoost pipeline execution visualizer',
      },
      approach:
        'Engineered an ML pipeline dropping leakage variables (ckd_pred, cluster), applying categorical encoding, and training Logistic Regression, Random Forest, and XGBoost classifiers evaluated with 5-fold cross-validation.',
      techStack: ['Python 3.10', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Seaborn', 'Streamlit'],
      pipeline: [
        {
          stage: 'DATA INGESTION',
          description: '4,000 Patient Records',
          purpose: 'Ingests clinical dataset attributes',
          nextStage: 'Data Leakage Detection',
          detail: 'Kaggle CKD dataset containing 4,000 patient records across 21 clinical & lifestyle features.',
        },
        {
          stage: 'LEAKAGE DETECTION',
          description: 'Target Leakage Drop',
          purpose: 'Identifies & removes target-derived columns',
          nextStage: 'Categorical Encoding & Scaling',
          detail: 'Explicitly drops ckd_pred and cluster columns confirmed via cross-tabulation to encode the target.',
        },
        {
          stage: 'PREPROCESSING',
          description: 'One-Hot Encoding',
          purpose: 'Encodes lifestyle factors & scales metrics',
          nextStage: 'Stratified 5-Fold Cross-Validation',
          detail: 'One-hot encodes categorical lifestyle variables (diet, smoking) and normalizes continuous lab values.',
        },
        {
          stage: 'MODEL TRAINING',
          description: 'XGBoost CV Folds',
          purpose: 'Trains Logistic Regression, RF & XGBoost',
          nextStage: 'Multi-Class Stage Prediction',
          detail: 'Evaluates models using stratified 80/20 train-test split and 5-fold cross-validation.',
        },
        {
          stage: 'STAGE PREDICTION',
          description: '6-Class CKD Staging',
          purpose: 'Predicts Stage 0 to Stage 5 severity',
          nextStage: 'Permutation Feature Explainability',
          detail: 'Predicts CKD Stage 0 (No CKD) through Stage 5 (Kidney Failure) with stage probability gauges.',
        },
        {
          stage: 'EXPLAINABILITY',
          description: 'Permutation Importance',
          purpose: 'Identifies primary predictive lab features',
          nextStage: 'End of ML Pipeline Loop',
          detail: 'Permutation importance identified GFR as the dominant feature in the trained model.',
        },
      ],
      implementation: [
        'Processed Kaggle CKD dataset containing 4,000 patient records across 21 clinical and lifestyle attributes.',
        'Identified data leakage columns (ckd_pred, cluster) derived from target labels and dropped them before pipeline encoding.',
        'Trained Logistic Regression (93.75%), Random Forest (98.63%), and XGBoost (98.75% accuracy / 0.985 5-fold CV F1).',
        'Applied model-agnostic permutation importance; permutation importance identified GFR as the dominant feature in the trained model.',
      ],
      decisions: [
        'Explicitly removed target-derived ckd_pred and cluster features to prevent artificially inflated 100% evaluation metrics.',
        'Evaluated per-class confusion matrices across 6 stages to verify misclassifications occurred only between adjacent severity boundaries.',
        'Selected XGBoost model for superior multi-class gradient boosting performance on tabular clinical metrics.',
      ],
      outcome:
        'Achieved 98.75% accuracy (0.985 5-fold CV F1) with XGBoost; permutation importance identified GFR as the dominant feature in the trained model.',
      githubUrl: 'https://github.com/bhavyabansal941/urine-test-disease-prediction',
      evidence: {
        type: 'code',
        label: 'Target Feature Leakage Prevention Pipeline',
        sourceFile: 'urine-test-disease-prediction/src/08_clean_preprocess_v2.py',
        description:
          'Identified and removed target-derived columns (ckd_pred, cluster) confirmed via cross-tabulation to encode the target answer itself, preventing data leakage before categorical encoding.',
        codeSnippet: `# Drop leaked/derived columns — confirmed via cross-tab that these
# encode the answer itself rather than being real clinical inputs
df = df.drop(columns=["ckd_pred", "cluster"])

# One-hot encode categorical features (diet, smoking, alcohol, etc.)
categorical_cols = df.select_dtypes(include="object").columns.tolist()
df_encoded = pd.get_dummies(df, columns=categorical_cols, drop_first=True)`,
      },
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
      dataInputs:
        'CoinGecko REST API fetching daily market OHLCV data for BTC, ETH, SOL, ADA, and DOGE stored in indexed SQLite database.',
      metricsSummary: [
        { label: 'API Ingestion', value: 'CoinGecko REST' },
        { label: 'Technical Metrics', value: '7d/30d SMA & EMA' },
        { label: 'LSTM Assets Evaluated', value: '5 Crypto Assets' },
        { label: 'Baseline Benchmark', value: 'Naive Persistence (t-1)' },
      ],
      tradeoffs: [
        'Included naive persistence forecast as benchmark to prevent over-optimistic evaluation of time-series neural networks.',
        'Normalized price series using MinMaxScaler fit exclusively on rolling training windows to prevent look-ahead bias.',
      ],
      limitations: [
        'High-frequency crypto asset returns exhibit high noise-to-signal ratios where naive persistence often rivals complex neural models.',
        'Sentiment analysis depends on public news headlines which may not capture sudden order-book liquidity shifts.',
      ],
      nextIteration: [
        'Incorporate order-book depth and on-chain transaction metrics into feature matrix.',
        'Implement Transformer-based time-series architectures for multi-step horizon forecasting.',
      ],
      demoMedia: {
        type: 'coming_soon',
        caption: 'Interactive financial time-series forecasting & baseline comparison dashboard',
      },
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
      evidence: {
        type: 'evaluation',
        label: 'LSTM vs Naive Persistence Baseline Evaluation (MAPE)',
        sourceFile: 'Crypto Market Analysis/models/training_summary_v2.csv',
        description:
          'Evaluated Next-Day Return LSTM predictions against a naive "no change" persistence baseline (t = t-1), demonstrating random walk characteristics where naive baselines outperform neural models on high-frequency assets.',
        evaluationTable: [
          { asset: 'ADA', modelMape: '3.47%', baselineMape: '3.48%', verdict: 'Outperforms Baseline (Marginal)' },
          { asset: 'BTC', modelMape: '2.59%', baselineMape: '1.69%', verdict: 'Naive Baseline Superior' },
          { asset: 'DOGE', modelMape: '2.42%', baselineMape: '1.95%', verdict: 'Naive Baseline Superior' },
          { asset: 'ETH', modelMape: '2.28%', baselineMape: '2.23%', verdict: 'Near Parity' },
          { asset: 'SOL', modelMape: '2.86%', baselineMape: '2.62%', verdict: 'Naive Baseline Superior' },
        ],
      },
    },
    {
      id: 'career-agent',
      number: '04',
      title: 'CareerAgent — Conversational AI Career Assistant',
      subtitle: 'Multi-Modal LLM Pipeline, Vision OCR, Web Grounding & Job Search',
      category: 'Generative AI / Natural Language Processing',
      summary:
        'A conversational AI assistant analyzing candidate resumes (PDF, DOCX, XLSX, images via Vision OCR), comparing skills against target job specifications using Llama 3.3 70B & Tavily web grounding, and fetching live job listings via Adzuna API.',
      problem:
        'Job seekers struggle to map complex project experience against job descriptions and identify verified technical skill gaps.',
      dataInputs:
        'Multi-format candidate resumes (PDF, DOCX, XLSX, images via Llama 3.2 11B Vision OCR) + target job specifications.',
      metricsSummary: [
        { label: 'Core LLM', value: 'Llama 3.3 70B' },
        { label: 'Vision OCR', value: 'Llama 3.2 11B Vision' },
        { label: 'UI Framework', value: 'Chainlit' },
        { label: 'Live Host', value: 'Render' },
      ],
      tradeoffs: [
        'Selected Chainlit UI over Streamlit for native multi-modal file uploads, streaming chat, and OAuth data layer support.',
        'Bound Tavily search tool to LLM to prevent hallucinations on time-sensitive exam cutoffs and job requirements.',
      ],
      limitations: [
        'Free-tier deployment on Render experiences a ~30-second cold start delay on initial HTTP connection.',
        'Vision OCR model accuracy depends on input image resolution and layout formatting.',
      ],
      nextIteration: [
        'Implement vector RAG embeddings for fast semantic matching against large enterprise job description databases.',
        'Add interactive voice interview practice module using WebRTC.',
      ],
      demoMedia: {
        type: 'coming_soon',
        caption: 'Live interactive conversational assistant running at https://careeragent-n127.onrender.com',
      },
      approach:
        'Built a Chainlit application utilizing LangChain, Groq API (Llama 3.3 70B & Llama 3.2 Vision), Pydantic schema validation, Tavily web search grounding, and Adzuna API live job matching.',
      techStack: ['Python 3.10', 'Chainlit', 'LangChain', 'Groq API', 'Llama 3.3 70B', 'Tavily API', 'Adzuna API', 'SQLAlchemy'],
      demoUrl: 'https://careeragent-n127.onrender.com',
      pipeline: [
        {
          stage: 'MULTI-FORMAT INGESTION',
          description: 'Document & Image OCR',
          purpose: 'Ingests PDF, DOCX, XLSX & Image Resumes',
          nextStage: 'Groq Llama 3.3 Skill Extraction',
          detail: 'Parses PDF (pypdf), DOCX (python-docx), XLSX (openpyxl), and Image OCR via Llama 3.2 11B Vision.',
        },
        {
          stage: 'SKILL EXTRACTION',
          description: 'Entity Parsing',
          purpose: 'Extracts technical skills & candidate context',
          nextStage: 'Tavily Web Search Grounding',
          detail: 'Groq Llama 3.3 70B structured prompt parsing candidate competencies into session memory.',
        },
        {
          stage: 'WEB GROUNDING',
          description: 'Tavily Search Grounding',
          purpose: 'Grounds responses in live search results',
          nextStage: 'Vector Skill Gap Matrix Matching',
          detail: 'Tavily API fetching up-to-date exam patterns, syllabi, & Adzuna live job listings.',
        },
        {
          stage: 'MATCHING',
          description: 'Skill Gap Analysis',
          purpose: 'Computes skill overlap & identifies gaps',
          nextStage: 'Actionable Career Roadmap Generation',
          detail: 'Pydantic-validated skill gap matrix comparing candidate skills to target job specifications.',
        },
        {
          stage: 'ROADMAP GENERATION',
          description: 'Mock Interview & Guides',
          purpose: 'Generates sequential interview practice',
          nextStage: 'SQLAlchemy Conversation Persistence',
          detail: 'Llama 3.3 70B generating sequential mock interview questions and tailored learning roadmaps.',
        },
        {
          stage: 'CONVERSATION PERSISTENCE',
          description: 'SQLAlchemy & Render Host',
          purpose: 'Persists user chat sessions',
          nextStage: 'End of Conversational Agent Loop',
          detail: 'Google OAuth sign-in and conversation persistence deployed live on Render.',
        },
      ],
      implementation: [
        'Built Chainlit web interface (app.py) providing interactive streaming LLM conversational workflows.',
        'Configured ChatGroq API utilizing llama-3.3-70b-versatile for core reasoning and llama-3.2-11b-vision-preview for OCR resume images.',
        'Integrated Tavily API tool binding (@tool def web_search) to ground answers in real-time web search results.',
        'Deployed production application live on Render (https://careeragent-n127.onrender.com) with SQLAlchemy session persistence.',
      ],
      decisions: [
        'Selected Chainlit UI over Streamlit for native multi-modal file uploads, streaming chat, and OAuth data layer support.',
        'Bound Tavily search tool to LLM to prevent hallucinations on time-sensitive exam cutoffs and job requirements.',
        'Used Llama 3.2 11B Vision model for direct image OCR resume parsing without external proprietary OCR dependencies.',
      ],
      outcome:
        'Deployed live conversational agent on Render; handles multi-format resumes and real-time web search grounding.',
      githubUrl: 'https://github.com/bhavyabansal941/CareerAgent',
      evidence: {
        type: 'code',
        label: 'Groq Multi-Modal LLM & Tavily Search Tool Binding',
        sourceFile: 'CareerAgent/app.py',
        description:
          'Configured ChatGroq API model instances for Llama 3.3 70B reasoning and Llama 3.2 Vision OCR, binding Tavily web search tool for real-time grounded context retrieval.',
        codeSnippet: `# ---------------- LLMs ----------------
llm = ChatGroq(groq_api_key=os.getenv("GROQ_API_KEY"), model_name="llama-3.3-70b-versatile")
vision_llm = ChatGroq(groq_api_key=os.getenv("GROQ_API_KEY"), model_name="llama-3.2-11b-vision-preview")

# ---------------- Web search grounding (Tavily) ----------------
tavily_client = TavilyClient(api_key=os.getenv("TAVILY_API_KEY")) if os.getenv("TAVILY_API_KEY") else None

@tool
def web_search(query: str) -> str:
    """Search the web for current time-sensitive information and live job patterns."""
    if not tavily_client:
        return "Web search is not configured."
    results = tavily_client.search(query, max_results=5, include_answer=True)
    return results.get("answer", "No results found.")

llm_with_tools = llm.bind_tools([web_search])`,
      },
    },
  ],

  skills: [
    {
      id: 'python',
      name: 'Python 3.x',
      category: 'programming',
      categoryLabel: 'PROGRAMMING LANGUAGE',
      howApplied:
        'Core development language across all 4 flagship projects. Applied for MediaPipe pose estimation, Scikit-learn & XGBoost modeling, ETL pipelines, and LangChain agents.',
      whereUsed: [
        'AI Physiotherapy: MediaPipe & OpenCV frame processing loop',
        'CKD Prediction: Scikit-learn & XGBoost multi-class data cleaning & modeling',
        'Crypto Analysis: Pandas time-series processing & API extraction',
        'CareerAgent: Chainlit app & Groq Llama 3.3 70B API orchestration',
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
        'CareerAgent: SQLAlchemy database persistence layer for user conversations',
        'Academic Coursework: Database Management Systems (DBMS) relational modeling',
      ],
      relatedProjectIds: ['crypto-analysis', 'career-agent'],
      relatedProjectNames: ['Crypto Market Analysis', 'CareerAgent'],
    },
    {
      id: 'scikit-learn',
      name: 'Scikit-learn & XGBoost',
      category: 'ml',
      categoryLabel: 'MACHINE LEARNING',
      howApplied:
        'Data preprocessing (leakage removal, scaling, encoding), model selection (XGBoost, Random Forest, Logistic Regression), 5-fold cross-validation, and permutation importance.',
      whereUsed: [
        'CKD Prediction: Target leakage drop & XGBoost 98.75% 6-stage classification',
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
        'CKD Prediction: 4,000 record feature encoding & leakage cleaning',
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
        'Multi-modal LLM orchestration (Llama 3.3 70B & Llama 3.2 Vision), Tavily web search tool binding, Chainlit UI, and Pydantic structured output validation.',
      whereUsed: ['CareerAgent: Multi-format resume parsing, Tavily web grounding & Chainlit chat'],
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
      whereUsed: ['Bhavya Personal Portfolio V5.1: Digital Lab web experience & web resume route'],
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
      whereUsed: ['Portfolio V5.1 Hero: Interactive 3D AI Core WebGL scene background'],
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
      year: '2023',
      title: 'Enrollment & Foundational CS Programming',
      role: 'B.Tech AI & Data Science Student',
      description:
        'Enrolled in B.Tech Artificial Intelligence & Data Science at Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi. Established core programming foundations in Python, C++, Object-Oriented Programming, Data Structures, and SQL relational modeling.',
      badge: '2023 ENROLLMENT',
      highlights: [
        'Enrolled in B.Tech AI & Data Science degree program at GGSIPU, New Delhi.',
        'Mastered foundational programming in Python, C++, Data Structures, Algorithms, and Object-Oriented Design.',
        'Wrote initial relational database schemas and automated data processing scripts.',
      ],
    },
    {
      year: '2024',
      title: 'Core Machine Learning & Analytical Modeling',
      role: 'Academic & Hackathon Developer',
      description:
        'Advanced into machine learning algorithms, statistical data analysis, and relational database systems. Maintained high academic standing (Current CGPA: 9.03/10.0) while building foundation projects in data processing and analytics.',
      highlights: [
        'Maintained 9.03 / 10.0 cumulative CGPA across rigorous AI & Data Science curriculum.',
        'Engineered statistical data cleaning pipelines and exploratory data analysis notebooks.',
        'Began competitive hackathon participation, learning rapid prototyping and software teamwork.',
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
      version: 'v5.1',
      date: '2026-08-09',
      title: 'Spatial Engineering Experience & Timeline Alignment',
      summary:
        'Corrected B.Tech journey timeline to 2023-2027, enhanced spatial domain map, and verified production truth standards.',
      changes: [
        'Corrected B.Tech AI & Data Science timeline start year to 2023 (2023 → 2027 sequence).',
        'Verified Machine Learning / Healthcare Analytics CKD project framing without medical diagnostic claims.',
        'Maintained single root layout footer tag and single hero candidate portrait on main page.',
        'Executed clean Prettier, ESLint, Next.js static build, and automated live HTML audit.',
      ],
    },
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
  ],

  agentQA: [
    {
      question: 'What projects has Bhavya built?',
      answer:
        'Bhavya has engineered 4 canonical flagship systems: 1) AI-Based Physiotherapy Assistance System (MediaPipe 33 pose landmarks & 2D joint vector geometry at 30 FPS); 2) Chronic Kidney Disease Prediction Pipeline (4,000 patient records, 21 features, target leakage removal, and XGBoost classification achieving 98.75% accuracy & 0.985 5-fold CV F1); 3) Cryptocurrency Market Analysis (CoinGecko API, SQL, 7d/30d moving averages, and LSTM vs naive persistence baseline evaluation); 4) CareerAgent (Chainlit UI, Groq API Llama 3.3 70B & Llama 3.2 Vision OCR, Tavily grounding, Adzuna job APIs, and Render live deployment).',
      actionType: 'projects',
      actionLabel: 'VIEW PROJECTS',
    },
    {
      question: 'What are his core technical skills?',
      answer:
        'Bhavya specializes in Python 3.x, SQL, Machine Learning (Scikit-learn, XGBoost), Computer Vision (MediaPipe, OpenCV 2D joint trigonometry), Data Analytics (Pandas, NumPy, CoinGecko API), Generative AI (LangChain, Groq API Llama 3.3 70B & Vision, Tavily, Chainlit), Web Development (Next.js 16, TypeScript, Tailwind CSS, Three.js 3D WebGL), and Version Control & Hosting (Git/GitHub, Render).',
      actionType: 'skills',
      actionLabel: 'VIEW SKILLS',
    },
    {
      question: 'What model did you use for CKD?',
      answer:
        'XGBoost was the selected model for the 6-stage CKD classification pipeline on 4,000 patient records, achieving 98.75% accuracy and a 0.985 5-fold CV F1 score. Permutation importance identified GFR as the dominant feature in the trained model.',
      actionType: 'projects',
      actionLabel: 'VIEW CKD PROJECT',
    },
    {
      question: 'What is the CKD dataset size?',
      answer:
        'The CKD pipeline processes 4,000 patient records across 21 clinical and lifestyle attributes, incorporating explicit target leakage prevention (ckd_pred & cluster removal) and 6-class severity staging (Stage 0 to Stage 5).',
      actionType: 'projects',
      actionLabel: 'VIEW CKD PROJECT',
    },
    {
      question: 'What LLM does CareerAgent use?',
      answer:
        'CareerAgent uses Groq-hosted Llama 3.3 70B for its primary language reasoning and skill gap analysis, and Llama 3.2 11B Vision for image-based resume processing.',
      actionType: 'projects',
      actionLabel: 'VIEW CAREERAGENT',
    },
    {
      question: 'What UI framework does CareerAgent use?',
      answer:
        'CareerAgent uses Chainlit for its conversational user interface, paired with SQLAlchemy for persistent session management and hosted live on Render.',
      actionType: 'projects',
      actionLabel: 'VIEW CAREERAGENT',
    },
    {
      question: 'Does CareerAgent have a live demo?',
      answer:
        'Yes. CareerAgent is deployed live on Render at https://careeragent-n127.onrender.com featuring interactive resume analysis, Tavily web search grounding, and Adzuna job search.',
      actionType: 'projects',
      actionLabel: 'TRY LIVE DEMO ↗',
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
        'Bhavya is a B.Tech Artificial Intelligence & Data Science candidate at GGSIPU (Expected Graduation: May 2027, 9.03 CGPA). His journey spans foundational computer science in 2023, core machine learning in 2024, winning 1st Place in 2025, Generative AI specialization & National Finalist recognition in 2026, and expected graduation in May 2027.',
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
