import { ProjectCard, type Project } from './project-card';

export function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 'posture-analysis',
      isFlagship: true,
      domain: 'Computer Vision & Motion Analysis',
      title: 'AI-Based Posture & Exercise Form Analysis System',
      overview:
        'A real-time computer vision system that tracks sitting posture and exercise execution via webcam using MediaPipe Pose. It computes live 2D joint angles to provide immediate visual feedback and logs session performance over time.',
      problem:
        'Poor sitting posture during long study sessions and improper exercise form during home workouts cause musculoskeletal strain and injuries, but access to real-time corrective feedback typically requires a personal trainer or physical therapist.',
      approach:
        'Built a modular Python application using OpenCV and MediaPipe Pose landmark detection. Extracted key 2D joint coordinates to calculate critical joint angles (elbow, knee, neck-to-shoulder) using vector geometry, classifying posture quality and detecting repetition transitions through calibrated angle threshold boundaries.',
      technologies: ['Python', 'MediaPipe', 'OpenCV', 'NumPy', 'pandas'],
      keyFeatures: [
        'Sitting Posture Monitor tracking neck tilt, forward lean, and shoulder alignment',
        'Push-Up Trainer with repetition counting and elbow-depth form grading',
        'Squat Monitor checking knee depth and back straightness during rep transitions',
        'Automated session logging to CSV recording reps, form accuracy %, and duration',
      ],
      challengesAndLearnings:
        'Calibrating heuristic angle thresholds across varying user proportions and webcam angles required careful geometric tuning. Gained valuable insights into single-camera pose estimation constraints and landmark jitter stability.',
      futureImprovements:
        'Upgrade to multi-angle pose tracking, develop a web frontend (Streamlit), and validate heuristic thresholds against professional physiotherapist-annotated datasets.',
      githubUrl: 'https://github.com/bhavyabansal941/physiotherapy_project',
    },
    {
      id: 'stock-analysis',
      isFlagship: false,
      domain: 'Financial Analytics & Machine Learning',
      title: 'Stock Market Analytics & Trend Prediction System',
      overview:
        'An end-to-end data analytics and machine learning pipeline that fetches historical market data, engineers technical indicators, and trains predictive models to evaluate stock price movements.',
      problem:
        'Financial market data is noisy, volatile, and prone to overfitting, making it difficult to extract reliable technical signals without introducing data leakage.',
      approach:
        'Ingested daily historical market data using financial APIs, engineered key technical indicators (moving averages, momentum, volatility metrics), and evaluated machine learning classifiers against naive baselines to analyze directional price movement.',
      technologies: ['Python', 'pandas', 'scikit-learn', 'Matplotlib', 'yfinance'],
      keyFeatures: [
        'Automated stock price data collection, cleaning, and preprocessing',
        'Technical indicator feature engineering (7-day/30-day moving averages, volatility)',
        'Machine learning model evaluation for directional trend classification',
        'Visual analytics for price history trends and evaluation metrics',
      ],
      challengesAndLearnings:
        'Recognized that short-term price movement contains high noise, emphasizing the critical importance of clean feature engineering and strict temporal train/test splitting to prevent future data leakage.',
      futureImprovements:
        'Incorporate market news sentiment data and explore sequence-based time-series models for multi-step return forecasting.',
      githubUrl: 'https://github.com/bhavyabansal941/stock-analysis-prediction',
    },
    {
      id: 'disease-prediction',
      isFlagship: false,
      domain: 'Public Health & Big Data Analytics',
      title: 'Disease Outbreak Risk Prediction & Regional Analysis',
      overview:
        'A public health analytics project developed during the Samsung Innovation Campus Big Data initiative to analyze regional epidemiological data and predict disease outbreak risk levels.',
      problem:
        'Public health teams need early indicators of regional disease spikes to allocate medical resources effectively, but epidemiological datasets are often incomplete and affected by seasonal factors.',
      approach:
        'Preprocessed historical outbreak and environmental data, conducted exploratory data analysis to isolate seasonal patterns, and trained classification models to estimate regional vulnerability and outbreak risk levels.',
      technologies: ['Python', 'pandas', 'scikit-learn', 'Matplotlib', 'Seaborn', 'SQL'],
      keyFeatures: [
        'Exploratory data analysis of disease transmission patterns and seasonal trends',
        'Feature selection connecting environmental factors to outbreak incidence',
        'Machine learning classification modeling for regional risk levels',
        'Visual analytics highlighting high-vulnerability geographical zones',
      ],
      challengesAndLearnings:
        'Handling missing regional records and managing class imbalances for rare outbreak events provided practical experience in robust data cleaning and preprocessing.',
      futureImprovements:
        'Integrate real-time weather and population mobility APIs for dynamic risk forecasting.',
      githubUrl: 'https://github.com/bhavyabansal941/disease-outbreak-prediction',
    },
  ];

  return (
    <section
      id="work"
      className="max-w-6xl mx-auto px-6 py-20 lg:py-28 border-t border-[var(--surface-border)]"
    >
      {/* Section Header */}
      <div className="mb-12 lg:mb-16">
        <div className="mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
            02 / FEATURED PROJECTS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight mb-4 font-sans">
          Featured Engineering Projects
        </h2>
        <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-2xl leading-relaxed font-sans">
          Case studies documenting computer vision systems, predictive data modeling, and analytics
          software.
        </p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
