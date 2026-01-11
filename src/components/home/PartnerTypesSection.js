import Link from "next/link";

export default function PartnerTypesSection() {
  const partnerTypes = [
    {
      title: "Clinic Partnership",
      description:
        "Transform your clinic with premium aligners designed for predictable outcomes. Clinical planning support and comprehensive training included.",
      features: [
        "Clinical precision & predictable outcomes",
        "Treatment planning & case assistance",
        "Training & resources",
        "Material excellence",
      ],
      href: "/clinic-partnership",
      cta: "Apply to Become a Partner",
    },
    {
      title: "OEM / Private Label",
      description:
        "Build your own aligner brand while leveraging ODS manufacturing and clinical expertise. Scalable production with quality control.",
      features: [
        "In-house quality control",
        "Scalable production",
        "CE / ISO-certified manufacturing",
        "Clinical support for your brand",
      ],
      href: "/oem-private-label",
      cta: "Apply for Private Label",
    },
    {
      title: "Dealer / Distributor",
      description:
        "Partner with us to deliver clinical-grade aligners in your region. Exclusive regional rights and comprehensive support.",
      features: [
        "High-quality aligners",
        "Marketing & training support",
        "Exclusive regional rights",
        "Technical & regulatory guidance",
      ],
      href: "/dealer-distributor",
      cta: "Contact Sales Team",
    },
  ];

  return (
    <section className="py-20 bg-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary opacity-3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary opacity-3 rounded-full blur-3xl"></div>
      </div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">
              Partnership Options
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text">
            Choose Your <span className="gradient-text">Partnership Path</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-text opacity-75 leading-relaxed">
            Tailored solutions for clinics, OEM partners, and dealers worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {partnerTypes.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-secondary/30 card-shadow-hover hover-lift transition-all duration-300 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <h3 className="text-2xl font-bold mb-4 text-text">
                {partner.title}
              </h3>
              <p className="text-sm text-text opacity-75 mb-6 leading-relaxed flex-grow">
                {partner.description}
              </p>

              <ul className="space-y-3 mb-8">
                {partner.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    <span className="text-sm text-text opacity-75">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={partner.href}
                className="btn-primary text-center block mt-auto"
              >
                {partner.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
