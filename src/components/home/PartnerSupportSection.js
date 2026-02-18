"use client";

export default function PartnerSupportSection() {
  const items = [
    {
      title: "Dedicated Account Management",
      description:
        "Named account managers for key partners with regular business reviews and joint growth planning.",
    },
    {
      title: "Clinical & Planning Support",
      description:
        "Access to experienced clinicians for complex case reviews, refinements, and second opinions.",
    },
    {
      title: "Training & Enablement",
      description:
        "Onboarding programs, webinars, and marketing toolkits tailored to clinics, OEM brands, and distributors.",
    },
    {
      title: "Operational SLAs",
      description:
        "Clear production, turnaround, and support SLAs so you can confidently plan capacity and patient journeys.",
    },
  ];

  const icons = [
    // Dedicated Account Management
    (
      <svg
        key="partner-account"
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="9" cy="9" r="3" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 21a5 5 0 0110 0M17 8v5m0 0l2-2m-2 2l-2-2"
        />
      </svg>
    ),
    // Clinical & Planning Support
    (
      <svg
        key="partner-clinical"
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="8" r="3" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1"
        />
      </svg>
    ),
    // Training & Enablement
    (
      <svg
        key="partner-training"
        className="w-6 h-6 text-primary"
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
          d="M7 14v4l5 3 5-3v-4"
        />
      </svg>
    ),
    // Operational SLAs
    (
      <svg
        key="partner-slas"
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="8" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l2 2"
        />
      </svg>
    ),
  ];

  return (
    <section className="py-16 bg-section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">
              Partner Success
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text">
            Enterprise-Grade <span className="gradient-text">B2B Support</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-text opacity-75 leading-relaxed">
            A partnership model designed around your teams, from single-clinic
            practices to multi-country OEM and distribution networks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 card-shadow-hover hover-lift border border-secondary/40 h-full flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  {icons[index]}
                </div>
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                  0{index + 1}
                </div>
              </div>
              <h3 className="text-base font-bold mb-2 text-text">
                {item.title}
              </h3>
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

