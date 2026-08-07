import Image from 'next/image';

export function RecognitionSection() {
  const communityEvidence = [
    {
      id: 'india-innovates-cert',
      tag: 'NATIONAL COMPETITION',
      title: 'India Innovates 2026 Certificate',
      organization: 'GGSIPU / DDU College',
      role: 'Team Member (Team Lazy Genius)',
      evidence: 'Official Healthcare Open Innovation Track competition finalist certificate.',
      image: '/images/india-innovates-2026-certificate.jpg',
    },
    {
      id: 'samsung-campus',
      tag: 'BIG DATA & AI',
      title: 'Samsung Innovation Campus',
      organization: 'Samsung Electronics',
      role: 'Curriculum Graduate',
      evidence:
        'Completed intensive coursework in data pipelines, statistical modeling, and predictive risk analytics.',
    },
    {
      id: 'ibm-genai',
      tag: 'FOUNDATION MODELS',
      title: 'IBM Generative AI Training',
      organization: 'IBM SkillsBuild',
      role: 'Program Participant',
      evidence:
        'Mastered prompt engineering principles, transformer architectures, and foundation model concepts.',
    },
    {
      id: 'community-leadership',
      tag: 'COMMUNITY LEADERSHIP',
      title: 'Innovation & Society Leadership',
      organization: 'Student Innovation Cell',
      role: 'Team Leader & Contributor',
      evidence:
        'Led hackathon teams, organized technical peer workshops, and presented live software demonstrations.',
    },
  ];

  return (
    <section
      id="recognition"
      className="max-w-6xl mx-auto px-6 py-20 lg:py-28 border-t border-[var(--surface-border)]"
    >
      {/* Section Header */}
      <div className="mb-16 lg:mb-20">
        <div className="mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
            06 / RECOGNITION & PROFESSIONAL IMPACT
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight mb-4 font-sans">
          Recognition & Professional Impact
        </h2>
        <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-2xl leading-relaxed font-sans">
          Building technical credibility through verified competitions, national innovation summits,
          continuous hackathon execution, and engineering community leadership.
        </p>
      </div>

      {/* Priority 1: World Entrepreneurs Day Winner (Flagship Hero) */}
      <article className="mb-20 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Winner Photograph (6 cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-[var(--surface-border)] bg-[var(--background)]">
              <Image
                src="/images/world-entrepreneurs-day-winner.jpg"
                alt="Bhavya Bansal holding the winner trophy at World Entrepreneurs Day"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Editorial Content (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
                STARTUP & INNOVATION COMPETITION • 2025 / 2026
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-6 font-sans">
              World Entrepreneurs Day Winner
            </h3>

            <div className="space-y-4 text-xs sm:text-sm font-sans text-[var(--foreground-muted)] mb-6">
              <div>
                <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                  ACHIEVEMENT:
                </strong>
                <p className="leading-relaxed">
                  Awarded 1st place at the World Entrepreneurs Day competition hosted by Chandigarh
                  University Incubator for an AI-driven healthcare prototype.
                </p>
              </div>

              <div>
                <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                  EVALUATION:
                </strong>
                <p className="leading-relaxed">
                  Evaluated by startup founders and investors on solution viability, data-driven
                  product architecture, and clear market execution.
                </p>
              </div>

              <div>
                <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                  ENGINEERING GROWTH:
                </strong>
                <p className="leading-relaxed text-[var(--foreground-subtle)]">
                  Demonstrated how computer vision models (MediaPipe & OpenCV) translate from code
                  into pitch-ready product prototypes under competitive evaluation.
                </p>
              </div>
            </div>

            <blockquote className="pl-4 border-l-2 border-[var(--foreground-muted)] text-xs italic text-[var(--foreground-muted)] font-sans">
              &quot;Winning reinforced that solving meaningful problems requires persistence,
              teamwork, and continuous iteration.&quot;
            </blockquote>
          </div>
        </div>
      </article>

      {/* Priority 2: India Innovates 2026 (Text Left / Image Right) */}
      <article className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text Left (7 cols) */}
        <div className="lg:col-span-7 flex flex-col order-2 lg:order-1">
          <div className="mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
              NATIONAL INNOVATION SUMMIT • 2026
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)] mb-6 font-sans">
            India Innovates 2026 — Team Lazy Genius
          </h3>

          <div className="space-y-4 text-xs sm:text-sm font-sans text-[var(--foreground-muted)]">
            <div>
              <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                CONTEXT:
              </strong>
              <p className="leading-relaxed">
                Represented Guru Gobind Singh Indraprastha University (GGSIPU) as part of Team
                &quot;Lazy Genius&quot; at Bharat Mandapam, New Delhi, in the Healthcare Open
                Innovation track.
              </p>
            </div>

            <div>
              <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                CONTRIBUTION:
              </strong>
              <p className="leading-relaxed">
                Presented a posture tracking and rehabilitation concept to national delegates,
                explaining model architecture and real-time camera feedback.
              </p>
            </div>

            <div>
              <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                KEY TAKEAWAY:
              </strong>
              <p className="leading-relaxed text-[var(--foreground-subtle)]">
                Developed key skills in high-pressure technical presentation, cross-functional
                collaboration, and presenting software under competition scrutiny.
              </p>
            </div>
          </div>
        </div>

        {/* Image Right (5 cols) */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-[var(--surface-border)] bg-[var(--surface)]">
            <Image
              src="/images/india-innovates-2026.jpg"
              alt="Bhavya Bansal at the India Innovates 2026 entrance arch at Bharat Mandapam"
              fill
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-cover"
            />
          </div>
        </div>
      </article>

      {/* Priority 3: India AI Convergence 2026 (Image Left / Text Right) */}
      <article className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Image Left (5 cols) */}
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-[var(--surface-border)] bg-[var(--surface)]">
            <Image
              src="/images/india-ai-convergence.jpg"
              alt="Bhavya Bansal standing in front of India AI Convergence backdrop"
              fill
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Right (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
              NATIONAL AI SUMMIT • 2026
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)] mb-6 font-sans">
            India AI Convergence 2026
          </h3>

          <div className="space-y-4 text-xs sm:text-sm font-sans text-[var(--foreground-muted)]">
            <div>
              <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                CONTEXT:
              </strong>
              <p className="leading-relaxed">
                Participated in national AI convergence events at Chandigarh University Incubator,
                connecting with AI researchers, industry leaders, and policy delegates.
              </p>
            </div>

            <div>
              <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                CONTRIBUTION:
              </strong>
              <p className="leading-relaxed">
                Engaged in technical discussions on emerging large language model deployment,
                computer vision pipelines, and scalable data infrastructure.
              </p>
            </div>

            <div>
              <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                KEY TAKEAWAY:
              </strong>
              <p className="leading-relaxed text-[var(--foreground-subtle)]">
                Broadened technical perspective on national AI policies, enterprise data standards,
                and ethical AI implementation.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Priority 4: Hackathons & Live Booth Presentations */}
      <article className="mb-20 p-6 sm:p-8 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)]">
        <div className="mb-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
            COMPETITIVE HACKATHONS & PROTOTYPING
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)] mb-6 font-sans">
          Hackathons & Live Booth Demonstrations
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm font-sans text-[var(--foreground-muted)]">
            <div>
              <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                CONTEXT:
              </strong>
              <p className="leading-relaxed">
                Participated in 20+ university and community hackathons, building functional
                prototypes under strict time constraints.
              </p>
            </div>

            <div>
              <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                CONTRIBUTION:
              </strong>
              <p className="leading-relaxed">
                Led computer vision logic, MediaPipe 2D joint angle calculations, and live booth
                demonstrations for judges and attendees.
              </p>
            </div>

            <div>
              <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                KEY TAKEAWAY:
              </strong>
              <p className="leading-relaxed text-[var(--foreground-subtle)]">
                Mastered rapid execution, debugging under pressure, and translating user feedback
                into immediate code adjustments.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-[var(--surface-border)] bg-[var(--background)]">
              <Image
                src="/images/ai-posture-analysis-booth.jpg"
                alt="AI Posture Analysis booth presentation photo"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </article>

      {/* Priority 5: Engineering Community & Supporting Evidence */}
      <div className="pt-12 border-t border-[var(--surface-border)]">
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium block mb-2">
            07 / ENGINEERING COMMUNITY
          </span>
          <h3 className="text-xl font-bold text-[var(--foreground)] font-sans">
            Engineering Community & Credentials
          </h3>
        </div>

        {/* Compact 4-Column Evidence Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityEvidence.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] flex flex-col justify-between"
            >
              <div>
                {item.image && (
                  <div className="relative w-full aspect-[4/3] rounded overflow-hidden mb-4 border border-[var(--surface-border)] opacity-85 hover:opacity-100 transition-opacity">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 250px"
                      className="object-cover"
                    />
                  </div>
                )}
                <span className="text-xs font-mono text-[var(--foreground-subtle)] block mb-1">
                  {item.tag}
                </span>
                <h4 className="text-sm font-bold text-[var(--foreground)] mb-1 font-sans">
                  {item.title}
                </h4>
                <span className="text-xs text-[var(--foreground-subtle)] block mb-2 font-sans">
                  {item.organization} • {item.role}
                </span>
                <p className="text-xs text-[var(--foreground-muted)] font-sans mb-3 leading-relaxed">
                  {item.evidence}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--surface-border)] text-xs font-mono text-[var(--foreground-subtle)]">
                Verified Evidence
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
