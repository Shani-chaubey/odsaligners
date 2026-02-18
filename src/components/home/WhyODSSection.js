import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Clinical Predictability",
    description:
      "Advanced digital planning ensures predictable treatment outcomes with precision-engineered aligners.",
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
    bgClass: "bg-white",
  },
  {
    title: "Premium Materials",
    description:
      "Medical-grade materials that provide optimal force delivery and patient comfort throughout treatment.",
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
    bgClass: "bg-secondary/30",
  },
  {
    title: "In-House Quality Control",
    description:
      "Rigorous quality assurance processes ensure every aligner meets the highest standards before delivery.",
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
    bgClass: "bg-white",
  },
  {
    title: "Dedicated Support",
    description:
      "Comprehensive support for clinicians and partners with training, resources, and expert guidance.",
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
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    bgClass: "bg-secondary/30",
  },
];

export default function WhyODSSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-2 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">
              Our Excellence
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text">
            Why <span className="gradient-text">ODS Aligners?</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-text opacity-75 leading-relaxed">
            Excellence in every aspect of aligner manufacturing and support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
