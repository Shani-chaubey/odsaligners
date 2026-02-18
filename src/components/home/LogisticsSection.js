export default function LogisticsSection() {
  const items = [
    {
      label: "Production Turnaround",
      value: "3–5 business days*",
      note: "*after case approval, varies by region and volume.",
    },
    {
      label: "Shipping",
      value: "Tracked, partner-preferred couriers",
      note: "Options for consolidated or direct-to-clinic shipments.",
    },
    {
      label: "Packaging",
      value: "Clinic & OEM-ready",
      note: "White-label and co-branded options available.",
    },
    {
      label: "Reorders & Refinements",
      value: "Streamlined workflows",
      note: "Fast reprints linked to original digital setup.",
    },
  ];

  const icons = [
    // Production Turnaround
    (
      <svg
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="7" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v4l2 2"
        />
      </svg>
    ),
    // Shipping
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
          d="M3 7h11v8H3zM14 10h4l3 3v5h-7z"
        />
        <circle cx="7.5" cy="17" r="1.5" strokeWidth={2} />
        <circle cx="17.5" cy="17" r="1.5" strokeWidth={2} />
      </svg>
    ),
    // Packaging
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
          d="M4 7l8-4 8 4-8 4-8-4z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10l8 4 8-4V7"
        />
      </svg>
    ),
    // Reorders & Refinements
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
          d="M4 10a6 6 0 0111-2l1-3m-1 13a6 6 0 01-11-2l-1 3"
        />
      </svg>
    ),
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">
              Logistics & Fulfilment
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text">
            Reliable <span className="gradient-text">Global Delivery</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-text opacity-75 leading-relaxed">
            From lab to clinic or warehouse, our logistics workflows are designed for
            B2B partners who need predictable timelines and clear communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={item.label}
              className="bg-section rounded-2xl p-6 card-shadow-hover hover-lift border border-secondary/40 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  {icons[index]}
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-primary/70">
                  Leg 0{index + 1}
                </div>
              </div>
              <h3 className="text-sm font-semibold text-text mb-1">
                {item.label}
              </h3>
              <div className="text-base font-bold text-text mb-2">
                {item.value}
              </div>
              <p className="text-xs text-text opacity-75 leading-relaxed">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

