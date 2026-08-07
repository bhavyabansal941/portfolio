import Image from 'next/image';

export function ExperienceSection() {
  const professionalDev = [
    {
      id: 'india-innovates-cert',
      program: 'India Innovates 2026',
      organization: 'GGSIPU / DDU College',
      focus: 'Healthcare Open Innovation Track',
      outcome: 'Official Participant Certificate (Team Lazy Genius)',
      image: '/images/india-innovates-2026-certificate.jpg',
    },
    {
      id: 'samsung-campus',
      program: 'Samsung Innovation Campus',
      organization: 'Samsung Electronics',
      focus: 'Big Data Analytics & AI Modeling',
      outcome: 'Completed coursework in data pipelines & predictive risk',
    },
    {
      id: 'ibm-genai',
      program: 'IBM Generative AI Training',
      organization: 'IBM SkillsBuild',
      focus: 'Generative AI & Foundation Models',
      outcome: 'Mastered prompt design & foundation model concepts',
    },
    {
      id: 'hackathons-count',
      program: '20+ Hackathon Participations',
      organization: 'University & Community Events',
      focus: 'Rapid Prototyping & Problem Solving',
      outcome: 'Continuous practical exposure across competitive events',
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-20 lg:py-28 border-t border-[var(--surface-border)]"
    >
      {/* Section Header */}
      <div className="mb-16 lg:mb-20">
        <div className="mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
            03 / EXPERIENCE BEYOND THE CLASSROOM
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight mb-4 font-sans">
          Experience Beyond the Classroom
        </h2>
        <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-2xl leading-relaxed font-sans">
          An editorial showcase of active hackathon participation, startup competitions, innovation
          summits, and continuous technical learning.
        </p>
      </div>

      {/* Priority 1: Flagship Hero Feature - World Entrepreneurs Day Winner */}
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
            <div className="mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
                STARTUP & INNOVATION • 2025 / 2026
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-4 font-sans">
              World Entrepreneurs Day Winner
            </h3>

            <p className="text-base text-[var(--foreground-muted)] leading-relaxed font-sans mb-6">
              Awarded 1st place at the World Entrepreneurs Day innovation competition for presenting
              a data-driven startup concept combining computer vision and intelligent healthcare
              workflow automation.
            </p>

            {/* Editorial Takeaway Quote */}
            <blockquote className="mb-6 pl-4 border-l-2 border-[var(--foreground-muted)] text-sm italic text-[var(--foreground-muted)] font-sans">
              &quot;Winning reinforced that solving meaningful problems requires persistence,
              teamwork, and continuous iteration.&quot;
            </blockquote>

            <div className="pt-4 border-t border-[var(--surface-border)] flex items-center justify-between text-xs font-mono text-[var(--foreground-subtle)]">
              <span>Venue: Chandigarh University Incubator</span>
              <span>Award: 1st Place Trophy</span>
            </div>
          </div>
        </div>
      </article>

      {/* Priority 2: Hackathon Deep Dive - AI Posture Analysis Booth */}
      <article className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Booth Image Left (5 cols) */}
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-[var(--surface-border)] bg-[var(--surface)]">
            <Image
              src="/images/ai-posture-analysis-booth.jpg"
              alt="Bhavya Bansal and team presenting the AI Posture Analysis booth at the hackathon"
              fill
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Story Text Right (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
              HACKATHON BOOTH PRESENTATION • COMPUTER VISION
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)] mb-3 font-sans">
            AI Posture Analysis Live Demonstration
          </h3>

          <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed font-sans mb-4">
            Demonstrated an AI-driven posture and exercise tracking system during a live hackathon
            booth presentation. Collaborated in a team to explain vector-geometry joint calculations
            to judges and attendees.
          </p>

          <div className="p-4 rounded-lg bg-[var(--surface)] border border-[var(--surface-border)] mb-4 text-xs font-sans text-[var(--foreground-muted)] space-y-2">
            <div>
              <strong className="text-[var(--foreground)] font-mono uppercase">
                Why it matters:
              </strong>{' '}
              Validated 2D pose estimation feedback with real-world users, gathering immediate
              observations on lighting constraints and camera angles.
            </div>
            <div>
              <strong className="text-[var(--foreground)] font-mono uppercase">
                Technical takeaway:
              </strong>{' '}
              Gained practical experience managing real-time MediaPipe landmark jitter and threshold
              calibration.
            </div>
          </div>
        </div>
      </article>

      {/* Priority 3: Innovation Summits Stream (Alternating Layouts) */}
      {/* Block A: India Innovates 2026 (Text Left / Image Right) */}
      <article className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text Left (7 cols) */}
        <div className="lg:col-span-7 flex flex-col order-2 lg:order-1">
          <div className="mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
              INNOVATION SUMMIT & COMPETITION • 2026
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)] mb-3 font-sans">
            India Innovates 2026 — Team Lazy Genius
          </h3>

          <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed font-sans mb-4">
            Represented Guru Gobind Singh Indraprastha University (GGSIPU) as part of Team
            &quot;Lazy Genius&quot; at Bharat Mandapam, New Delhi, participating in the national
            Healthcare Open Innovation track.
          </p>

          <div className="p-4 rounded-lg bg-[var(--surface)] border border-[var(--surface-border)] text-xs font-sans text-[var(--foreground-muted)]">
            <strong className="text-[var(--foreground)] font-mono uppercase">
              Growth outcome:
            </strong>{' '}
            Tested our healthcare concept against national competition standards, developing key
            skills in team coordination and high-pressure technical presentation.
          </div>
        </div>

        {/* Images Right (5 cols) */}
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

      {/* Block B: India AI Convergence 2026 (Image Left / Text Right) */}
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
              AI CONVERGENCE SUMMIT • 2026
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)] mb-3 font-sans">
            India AI Convergence 2026
          </h3>

          <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed font-sans mb-4">
            Participated in national AI convergence events hosted at Chandigarh University
            Technology Business Incubator, engaging with AI researchers, policy delegates, and
            engineering peers.
          </p>

          <div className="p-4 rounded-lg bg-[var(--surface)] border border-[var(--surface-border)] text-xs font-sans text-[var(--foreground-muted)]">
            <strong className="text-[var(--foreground)] font-mono uppercase">
              Growth outcome:
            </strong>{' '}
            Broadened understanding of emerging AI deployment paradigms, data ethics, and real-world
            AI ecosystem needs.
          </div>
        </div>
      </article>

      {/* Priority 4: Professional Development & Supporting Evidence Bar */}
      <div className="pt-12 border-t border-[var(--surface-border)]">
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium block mb-2">
            04 / SUPPORTING EVIDENCE & DEVELOPMENT
          </span>
          <h3 className="text-xl font-bold text-[var(--foreground)] font-sans">
            Professional Development & Certifications
          </h3>
        </div>

        {/* Compact 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {professionalDev.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] flex flex-col justify-between"
            >
              <div>
                {item.image && (
                  <div className="relative w-full aspect-[4/3] rounded overflow-hidden mb-4 border border-[var(--surface-border)] opacity-85 hover:opacity-100 transition-opacity">
                    <Image
                      src={item.image}
                      alt={item.program}
                      fill
                      sizes="(max-width: 640px) 100vw, 250px"
                      className="object-cover"
                    />
                  </div>
                )}
                <span className="text-xs font-mono text-[var(--foreground-subtle)] block mb-1">
                  {item.organization}
                </span>
                <h4 className="text-sm font-bold text-[var(--foreground)] mb-2 font-sans">
                  {item.program}
                </h4>
                <p className="text-xs text-[var(--foreground-muted)] font-sans mb-3 leading-relaxed">
                  <span className="font-mono text-[var(--foreground-subtle)]">Focus:</span>{' '}
                  {item.focus}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--surface-border)] text-xs font-mono text-[var(--foreground-subtle)]">
                {item.outcome}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
