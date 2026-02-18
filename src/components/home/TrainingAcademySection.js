import Link from "next/link";

export default function TrainingAcademySection() {
  const tracks = [
    {
      name: "Clinical Fundamentals",
      level: "For new providers & teams",
      topics: [
        "Case selection & indications",
        "Treatment planning workflows",
        "Monitoring & refinements",
      ],
    },
    {
      name: "Advanced Cases",
      level: "For experienced clinicians",
      topics: [
        "Complex movements & biomechanics",
        "Interdisciplinary treatments",
        "Troubleshooting challenging cases",
      ],
    },
    {
      name: "Business & Growth",
      level: "For clinic owners & partners",
      topics: [
        "Aligner practice setup",
        "Team enablement & processes",
        "Marketing & patient journeys",
      ],
    },
  ];

  const icons = [
    // Clinical Fundamentals
    (
      <svg
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 7l9-4 9 4-9 4-9-4z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 11v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"
        />
      </svg>
    ),
    // Advanced Cases
    (
      <svg
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="8" cy="8" r="3" strokeWidth={2} />
        <circle cx="16" cy="16" r="3" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.5 10.5l3 3"
        />
      </svg>
    ),
    // Business & Growth
    (
      <svg
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 19h16M6 16v-6l3 3 4-5 5 7"
        />
      </svg>
    ),
  ];

  return (
    <section className="py-16 bg-section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div data-aos="fade-right">
            <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">
                Training & Education
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text">
              ODS <span className="gradient-text">Academy</span> for Partners
            </h2>
            <p className="text-base md:text-lg text-text opacity-75 mb-6 leading-relaxed">
              Continuous education for clinicians, practice teams, OEM brands, and
              distributors to build and scale aligner programs with confidence.
            </p>
            <ul className="space-y-3 mb-6 text-sm text-text opacity-80">
              <li>• Live webinars & on-demand content</li>
              <li>• Case libraries and step-by-step guides</li>
              <li>• Regional workshops and partner-only events</li>
            </ul>
            <Link href="/resources" className="btn-outline inline-flex">
              Explore Training Resources
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5" data-aos="fade-left">
            {tracks.map((track, index) => (
              <div
                key={track.name}
                className="bg-white rounded-2xl p-5 card-shadow-hover hover-lift border border-secondary/40 flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    {icons[index]}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-primary/70">
                    Track 0{index + 1}
                  </div>
                </div>
                <h3 className="text-base font-bold text-text mb-1">{track.name}</h3>
                <p className="text-xs text-text opacity-70 mb-3">{track.level}</p>
                <ul className="space-y-2 text-xs text-text opacity-80">
                  {track.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <span className="mt-1 h-1 w-1 rounded-full bg-primary shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

