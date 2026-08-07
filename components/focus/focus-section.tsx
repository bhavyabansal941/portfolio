export function FocusSection() {
  const focusItems = [
    {
      label: 'ACADEMICS',
      title: 'Artificial Intelligence & Data Science',
      description:
        'Undergraduate student building strong foundations in computer science, machine learning algorithms, applied mathematics, and data structures.',
    },
    {
      label: 'TECHNICAL FOCUS',
      title: 'AI & Machine Learning Concepts',
      description:
        'Actively studying core AI concepts, neural networks, data modeling, and practical machine learning workflows through hands-on coursework and projects.',
    },
    {
      label: 'CORE STACK',
      title: 'Python, SQL & Data Analytics',
      description:
        'Working with Python, SQL, and data analysis tools to explore data, extract insights, and build practical software solutions.',
    },
    {
      label: 'OPPORTUNITIES',
      title: 'Seeking Early-Career & Internship Roles',
      description:
        'Eager to contribute as an intern or entry-level team member in AI Engineering, Machine Learning, or Data Analytics to learn from experienced engineering teams.',
    },
  ];

  return (
    <section
      id="focus"
      className="max-w-6xl mx-auto px-6 py-20 lg:py-28 border-t border-[var(--surface-border)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (4 cols): Meta & Heading */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
              01 / CURRENT FOCUS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight mb-6 font-sans">
            Current Focus
          </h2>

          <p className="text-base text-[var(--foreground-muted)] leading-relaxed font-sans">
            A snapshot of active learning, core CS fundamentals, and practical technical
            exploration.
          </p>
        </div>

        {/* Right Column (8 cols): 2x2 Focus Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusItems.map((item) => (
            <div
              key={item.label}
              className="border border-[var(--surface-border)] bg-[var(--surface)] p-6 rounded-lg flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium block mb-3">
                  {item.label}
                </span>

                <h3 className="text-lg font-bold text-[var(--foreground)] mb-3 font-sans tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
