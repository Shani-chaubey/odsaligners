export default function ComplianceSection() {
  const pillars = [
    {
      title: "Quality & Regulatory",
      bullets: [
        "ISO 13485 quality management for medical devices",
        "CE marking process for applicable products and markets",
        "Documented SOPs across planning, production, and QA",
      ],
    },
    {
      title: "Data Protection",
      bullets: [
        "Best-practice controls for PHI / patient data",
        "Region-aware data handling and retention policies",
        "Restricted access with role-based permissions",
      ],
    },
    {
      title: "Partner Governance",
      bullets: [
        "Clear agreements covering responsibilities and use",
        "Support for local regulatory submissions where needed",
        "Auditable records across the case lifecycle",
      ],
    },
  ];

  const icons = [
    // Quality & Regulatory
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
          d="M12 3l6 3v5c0 4.5-3 7-6 8-3-1-6-3.5-6-8V6l6-3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 11l2 2 3-3"
        />
      </svg>
    ),
    // Data Protection
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
    // Partner Governance
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
          d="M4 5h9v6H4zM4 15h6v4H4zM15 11h5v8h-5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 7h3"
        />
      </svg>
    ),
  ];

  return (
    <section className="py-16 bg-section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">
              Compliance & Governance
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text">
            Designed for <span className="gradient-text">Regulated</span> Markets
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-text opacity-75 leading-relaxed">
            ODS Aligners operates with the quality systems, documentation, and data
            practices expected from international B2B aligner partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl p-6 card-shadow-hover hover-lift border border-secondary/40 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  {icons[index]}
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-primary/70">
                  Pillar 0{index + 1}
                </div>
              </div>
              <h3 className="text-base font-bold text-text mb-2">{pillar.title}</h3>
              <ul className="space-y-2 text-sm text-text opacity-80">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-primary shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

