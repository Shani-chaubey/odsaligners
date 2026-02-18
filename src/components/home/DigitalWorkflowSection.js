export default function DigitalWorkflowSection() {
  const pillars = [
    {
      title: "Seamless Case Submission",
      description:
        "Upload scans, photos, and prescriptions through a secure portal with structured B2B workflows and status tracking.",
    },
    {
      title: "Planning & Approvals",
      description:
        "Review 3D setups, request refinements, and approve treatment plans with clear SLAs and clinical communication.",
    },
    {
      title: "Production & Logistics",
      description:
        "Automated handoff from planning to manufacturing with real-time production milestones and shipping notifications.",
    },
  ];

  const integrations = [
    "Compatible with leading intraoral scanners",
    "Standardised file formats (DICOM / STL)",
    "API-ready for enterprise partners",
    "Role-based multi-clinic access",
  ];

  const icons = [
    // Seamless Case Submission
    (
      <svg
        key="workflow-submission"
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <rect x="5" y="4" width="14" height="12" rx="2" ry="2" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 10l3-3 3 3M12 7v8"
        />
      </svg>
    ),
    // Planning & Approvals
    (
      <svg
        key="workflow-approvals"
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <rect x="4" y="4" width="10" height="14" rx="2" ry="2" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9h4M8 12h2"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 9l2 2 3-3"
        />
      </svg>
    ),
    // Production & Logistics
    (
      <svg
        key="workflow-logistics"
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12h13l3 3v3H3z"
        />
        <circle cx="7.5" cy="18" r="1.5" strokeWidth={2} />
        <circle cx="15.5" cy="18" r="1.5" strokeWidth={2} />
      </svg>
    ),
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">
                Digital Workflow
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text leading-tight">
              End-to-End <span className="gradient-text">Digital Workflow</span>
            </h2>
            <p className="text-base md:text-lg text-text opacity-75 mb-6 leading-relaxed">
              Built for clinics, OEM brands, and distributors who need predictable,
              repeatable processes from first scan to final shipment.
            </p>
            <ul className="space-y-3">
              {integrations.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-text opacity-80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-3 gap-5" data-aos="fade-left">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="bg-section rounded-2xl p-5 card-shadow-hover hover-lift border border-secondary/40 flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    {icons[index]}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-primary/70">
                    Step 0{index + 1}
                  </div>
                </div>
                <h3 className="text-base font-bold mb-2 text-text">
                  {pillar.title}
                </h3>
                <p className="text-xs text-text opacity-75 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

