export default function TechnologySection() {
  const items = [
    {
      title: "3D Treatment Planning",
      description:
        "Advanced digital setups designed around clinical objectives, anchorage, and biomechanics—not just tooth movement.",
    },
    {
      title: "Data-Driven Protocols",
      description:
        "Protocols refined across thousands of cases to balance movement per aligner, treatment time, and patient comfort.",
    },
    {
      title: "Secure Partner Portal",
      description:
        "Role-based access, audit trails, and communication tools tailored to multi-clinic and enterprise partners.",
    },
    {
      title: "Integration-Ready",
      description:
        "Standardised formats and API-ready architecture to integrate with PMS, CRM, and OEM partner systems.",
    },
  ];

  const icons = [
    // 3D Treatment Planning
    (
      <svg
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <rect x="4" y="4" width="7" height="7" rx="1.5" ry="1.5" strokeWidth={2} />
        <rect x="13" y="13" width="7" height="7" rx="1.5" ry="1.5" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 8l2 2 2-2M9 16l2-2"
        />
      </svg>
    ),
    // Data-Driven Protocols
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
          d="M5 13l3 3 4-6 4 5 3-4"
        />
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" strokeWidth={2} />
      </svg>
    ),
    // Secure Partner Portal
    (
      <svg
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <rect
          x="5"
          y="10"
          width="14"
          height="9"
          rx="2"
          ry="2"
          strokeWidth={2}
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 10V8a3 3 0 116 0v2"
        />
      </svg>
    ),
    // Integration-Ready
    (
      <svg
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="7" cy="12" r="2.5" strokeWidth={2} />
        <circle cx="17" cy="7" r="2.5" strokeWidth={2} />
        <circle cx="17" cy="17" r="2.5" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.5 11L14.5 8M9.5 13L14.5 16"
        />
      </svg>
    ),
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">
              Technology & Platform
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text">
            Technology Built for <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-text opacity-75 leading-relaxed">
            ODS combines clinical expertise with a modern digital platform to support
            clinics, OEM brands, and distributors at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="bg-section rounded-2xl p-6 card-shadow-hover hover-lift border border-secondary/40 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  {icons[index]}
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-primary/70">
                  Module 0{index + 1}
                </div>
              </div>
              <h3 className="text-base font-bold mb-2 text-text">{item.title}</h3>
              <p className="text-sm text-text opacity-75 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

