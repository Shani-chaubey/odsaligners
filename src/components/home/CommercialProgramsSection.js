export default function CommercialProgramsSection() {
  const programs = [
    {
      name: "Clinic Partnership",
      audience: "Single and multi-site clinics",
      points: [
        "Tiered pricing based on monthly volume",
        "Optional planning-only or full-lab services",
        "Co-branded patient education materials",
      ],
    },
    {
      name: "OEM / Private Label",
      audience: "Dental brands & DSOs",
      points: [
        "Custom branding across packaging and documentation",
        "Flexible pricing models (per case or per arch)",
        "Dedicated commercial and clinical onboarding",
      ],
    },
    {
      name: "Dealer / Distributor",
      audience: "Regional distributors",
      points: [
        "Protected territories with clear volume targets",
        "Structured margin bands for sustainable growth",
        "Joint marketing, events, and KOL programs",
      ],
    },
  ];

  const icons = [
    // Clinic Partnership
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
          d="M7 11a3 3 0 116 0 3 3 0 01-6 0zM3 21a4 4 0 018-2.5M14 8h3l3 3v9h-6"
        />
      </svg>
    ),
    // OEM / Private Label
    (
      <svg
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <rect x="4" y="4" width="7" height="7" rx="1.5" ry="1.5" strokeWidth={2} />
        <rect x="13" y="9" width="7" height="7" rx="1.5" ry="1.5" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 8l2 2"
        />
      </svg>
    ),
    // Dealer / Distributor
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
          d="M4 7h16v4H4zM6 13h12v4H6z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17v2m6-2v2"
        />
      </svg>
    ),
  ];

  return (
    <section className="py-16 bg-section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">
              Commercial Programs
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text">
            Built Around <span className="gradient-text">Your Business Model</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-text opacity-75 leading-relaxed">
            Transparent, B2B-first commercial structures that align incentives and
            support long-term growth for every partner type.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.name}
              className="bg-white rounded-2xl p-6 card-shadow-hover hover-lift border border-secondary/40 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  {icons[index]}
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-primary/70">
                  Program 0{index + 1}
                </div>
              </div>
              <div className="mb-3">
                <h3 className="text-lg font-bold text-text mb-1">
                  {program.name}
                </h3>
                <p className="text-xs uppercase tracking-wide text-text opacity-70">
                  {program.audience}
                </p>
              </div>
              <ul className="space-y-2 mb-4">
                {program.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-text opacity-80 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-3 text-xs text-text opacity-60">
                Indicative only — final terms are tailored by region and partner type.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

