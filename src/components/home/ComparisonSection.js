export default function ComparisonSection() {
  const comparison = [
    {
      feature: "Suitability",
      ods: "All cases: simple to complex teeth movement. Entire arch of teeth, incl. bite correction.",
      competitor:
        "All cases: simple to complex teeth movement. Suitable for pre-teens, teens, and adults.",
      domestic: "Mild to moderate correction, mostly limited to front teeth.",
    },
    {
      feature: "Aligner Material",
      ods: "Premium Multilayer Sheets",
      competitor: "Premium Multilayer Sheets",
      domestic:
        "Mostly single-layer sheets, harder, more pain due to pressure, prone to breakage.",
    },
    {
      feature: "Aligner Wear",
      ods: "7-10 days",
      competitor: "7-15 days",
      domestic: "15 days",
    },
    {
      feature: "Affordability",
      ods: "30-50% lower cost compared to international brands.",
      competitor: "Higher cost.",
      domestic:
        "Lower cost compared to international brands but longer duration and additional hidden costs later",
    },
    {
      feature: "Treatment Duration",
      ods: "25-50% shorter.",
      competitor: "Shorter.",
      domestic: "Much longer duration with more aligners.",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-2 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">
              Competitive Advantage
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text">
            Why <span className="gradient-text">ODS Aligners</span> Stand Out
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-text opacity-75 leading-relaxed">
            See how ODS Aligners compares to international and domestic
            competitors
          </p>
        </div>

        {/* Comparison Table */}
        <div
          className="overflow-x-auto mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="inline-block min-w-full">
            <div className="overflow-hidden rounded-2xl shadow-lg border border-secondary/30">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary via-primary-dark to-primary">
                <div className="grid grid-cols-4 gap-4 p-5 text-white">
                  <div className="font-bold text-base">Feature</div>
                  <div className="font-bold text-base text-center">
                    ODS Aligners
                  </div>
                  <div className="font-bold text-base text-center">
                    Top International Brand
                  </div>
                  <div className="font-bold text-base text-center">
                    Other Domestic Brands
                  </div>
                </div>
              </div>

              {/* Rows */}
              <div className="bg-white divide-y divide-secondary/20">
                {comparison.map((row, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-4 gap-4 p-5 hover:bg-secondary/20 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-secondary/5"
                    }`}
                  >
                    <div className="font-semibold text-text text-sm">
                      {row.feature}
                    </div>
                    <div className="text-text text-center">
                      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm font-medium">
                        <svg
                          className="w-4 h-4 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{row.ods}</span>
                      </div>
                    </div>
                    <div className="text-text opacity-70 text-center text-sm leading-relaxed">
                      {row.competitor}
                    </div>
                    <div className="text-text opacity-70 text-center text-sm leading-relaxed">
                      {row.domestic}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
          <p className="text-base md:text-lg text-text opacity-75 mb-5">
            Experience the difference with ODS Aligners
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Request Partnership Information
          </a>
        </div>
      </div>
    </section>
  );
}
