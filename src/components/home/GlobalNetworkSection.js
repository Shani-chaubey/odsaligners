export default function GlobalNetworkSection() {
  const regions = [
    {
      name: "Europe",
      markets: "Italy, France, UK & expanding",
      focus: "OEM brands, distributors, and premium clinics",
    },
    {
      name: "Asia Pacific",
      markets: "India, Middle East & Southeast Asia",
      focus: "High-growth clinic networks and regional partners",
    },
    {
      name: "Future Markets",
      markets: "North America & Latin America",
      focus: "Strategic OEM and distribution partnerships",
    },
  ];

  const highlights = [
    "Multi-country experience with local regulatory expectations",
    "Partner-first commercial and service models",
    "Dedicated teams for onboarding new regions",
  ];

  const icons = [
    // Europe
    (
      <svg
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="9" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 12h16M12 3a15 15 0 010 18M12 3a15 15 0 000 18"
        />
      </svg>
    ),
    // Asia Pacific
    (
      <svg
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="8" r="4" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 19a7 7 0 0114 0"
        />
      </svg>
    ),
    // Future Markets
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
          d="M12 3l6 4v5c0 4-2.5 6.5-6 8-3.5-1.5-6-4-6-8V7l6-4z"
        />
        <circle cx="12" cy="11" r="2.5" strokeWidth={2} />
      </svg>
    ),
  ];

  return (
    <section className="py-16 bg-section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div data-aos="fade-right">
            <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">
                Global Network
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text">
              Built for <span className="gradient-text">International</span> B2B Growth
            </h2>
            <p className="text-base md:text-lg text-text opacity-75 mb-6 leading-relaxed">
              ODS Aligners supports partners across multiple regions with scalable
              operations, compliant processes, and aligned commercial structures.
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm text-text opacity-80 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5" data-aos="fade-left">
            {regions.map((region, index) => (
              <div
                key={region.name}
                className="bg-white rounded-2xl p-6 card-shadow-hover hover-lift border border-secondary/40 flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    {icons[index]}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/70">
                    Region 0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text mb-1">
                  {region.name}
                </h3>
                <p className="text-sm text-text opacity-80 mb-2">
                  <span className="font-semibold">Key markets: </span>
                  {region.markets}
                </p>
                <p className="text-sm text-text opacity-75 leading-relaxed">
                  <span className="font-semibold">Focus: </span>
                  {region.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

