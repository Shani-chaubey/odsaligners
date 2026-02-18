export default function AboutSection() {
  const values = [
    {
      title: "Our Mission",
      description:
        "Deliver quality, clinical predictability, and build long-term partnerships with clinics and partners worldwide.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Our Vision",
      description:
        "Become the leading premium aligner brand and trusted OEM partner for dental professionals globally.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
    {
      title: "Global Presence",
      description:
        "Serving partners in India, Italy, France, and expanding to new markets worldwide.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary opacity-3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary opacity-3 rounded-full blur-3xl"></div>
      </div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">About Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text">
            About <span className="gradient-text">ODS Aligners</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-text opacity-75 leading-relaxed">
            Clinician-focused, quality-driven, globally trusted aligners
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-secondary/30 card-shadow-hover hover-lift transition-all duration-300 text-center"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-text">
                {value.title}
              </h3>
              <p className="text-sm text-text opacity-75 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
