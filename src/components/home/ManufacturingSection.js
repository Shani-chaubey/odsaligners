export default function ManufacturingSection() {
  const pillars = [
    {
      title: "ISO 13485 Production",
      description:
        "Cleanroom manufacturing with documented protocols, batch traceability, and in-line quality checks at every stage.",
      metric: "13485",
      metricLabel: "Medical Devices QMS",
    },
    {
      title: "High-Capacity Lab",
      description:
        "Industrial-grade 3D printing, thermoforming, and finishing lines designed to scale with OEM and dealer demand.",
      metric: "4.9M+",
      metricLabel: "Aligners Produced",
    },
    {
      title: "Material Excellence",
      description:
        "Premium multilayer sheets sourced from trusted suppliers, validated for force delivery, clarity, and patient comfort.",
      metric: "Multi‑Layer",
      metricLabel: "Premium Sheets",
    },
    {
      title: "Quality Assurance",
      description:
        "Visual inspection, fit verification, and packaging checks before every shipment, aligned with international standards.",
      metric: "4‑Step",
      metricLabel: "QC Framework",
    },
  ];

  const icons = [
    // ISO 13485 Production
    (
      <svg
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <rect x="4" y="8" width="7" height="10" rx="1.5" ry="1.5" strokeWidth={2} />
        <rect x="13" y="6" width="7" height="12" rx="1.5" ry="1.5" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 8V5h3M15 6V4h3"
        />
      </svg>
    ),
    // High-Capacity Lab
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
          d="M4 12l4-7h8l4 7v7H4z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 16h6M9 13h2"
        />
      </svg>
    ),
    // Material Excellence
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
          d="M4 9l8-4 8 4-8 4-8-4z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 15l8-4 8 4-8 4-8-4z"
        />
      </svg>
    ),
    // Quality Assurance
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
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div data-aos="fade-right">
            <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">
                Manufacturing & Lab
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text leading-tight">
              Scalable, <span className="gradient-text">Clinical-Grade</span>{" "}
              Production
            </h2>
            <p className="text-base md:text-lg text-text opacity-75 mb-5 leading-relaxed">
              A vertically integrated, quality-controlled lab built specifically for
              clear aligners and B2B partnerships.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-text opacity-80">
              <div className="rounded-2xl border border-secondary/40 bg-section p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-primary/70 mb-1">
                  For Clinics
                </div>
                <p>
                  Consistent fit, predictable delivery windows, and packaging that
                  is ready to hand to patients.
                </p>
              </div>
              <div className="rounded-2xl border border-secondary/40 bg-section p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-primary/70 mb-1">
                  For OEM & Dealers
                </div>
                <p>
                  White-label ready production, capacity planning, and dedicated
                  production lines for strategic partners.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5" data-aos="fade-left">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="bg-section rounded-2xl p-5 card-shadow-hover hover-lift border border-secondary/40 flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    {icons[index]}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-primary/70">
                    Capability 0{index + 1}
                  </div>
                </div>
                <h3 className="text-base font-bold text-text mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-text opacity-75 leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="text-lg font-semibold text-text">
                    {pillar.metric}
                  </div>
                  <div className="text-[11px] uppercase tracking-wide text-text opacity-70 text-right">
                    {pillar.metricLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

