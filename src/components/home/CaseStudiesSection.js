import Link from "next/link";

export default function CaseStudiesSection() {
  const highlights = [
    {
      metric: "Predictable",
      description: "Treatment outcomes with advanced digital planning",
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      metric: "High-Quality",
      description: "Clinical outcomes proven across thousands of cases",
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
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      metric: "Proven",
      description: "Results from real clinical cases and patient outcomes",
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-2 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">
                Clinical Outcomes
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text leading-tight">
              Real Results from{" "}
              <span className="gradient-text">ODS Aligners</span>
            </h2>
            <p className="text-lg text-text opacity-75 mb-8 leading-relaxed">
              See how our aligners deliver predictable, high-quality outcomes
              across thousands of successful treatments worldwide.
            </p>

            <div className="space-y-5 mb-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-secondary/30 p-5 rounded-2xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-text">
                      {highlight.metric} Outcomes
                    </h3>
                    <p className="text-sm text-text opacity-75 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/case-studies" className="btn-primary inline-block">
              View Case Studies
            </Link>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-6" data-aos="fade-left">
            <div
              className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl text-white shadow-xl"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="text-4xl font-bold mb-2">4.9M+</div>
              <div className="text-sm opacity-90">Aligners Manufactured</div>
            </div>
            <div
              className="bg-secondary p-8 rounded-2xl border border-secondary/30 shadow-xl"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="text-4xl font-bold text-primary mb-2">122K+</div>
              <div className="text-sm text-text opacity-75">
                Smile Set-ups Designed
              </div>
            </div>
            <div
              className="bg-secondary p-8 rounded-2xl border border-secondary/30 shadow-xl"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="text-4xl font-bold text-primary mb-2">1.8K+</div>
              <div className="text-sm text-text opacity-75">
                Active Partners
              </div>
            </div>
            <div
              className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl text-white shadow-xl"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-sm opacity-90">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
