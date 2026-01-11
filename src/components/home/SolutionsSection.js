import SolutionCard from "./SolutionCard";

const solutions = [
  {
    title: "Clinic Partnership",
    description:
      "Direct partnerships with orthodontic clinics. Access to premium aligners, clinical support, and streamlined workflows.",
    href: "/clinic-partnership",
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "OEM / Private Label",
    description:
      "Build your own aligner brand with ODS manufacturing capabilities. White-label solutions for established dental companies.",
    href: "/oem-private-label",
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: "Dealer Programs",
    description:
      "International and regional dealer opportunities. Expand your business with proven aligner solutions and marketing support.",
    href: "/dealer-distributor",
    icon: (
      <svg
        className="w-10 h-10 text-white"
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

export default function SolutionsSection() {
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
            Our <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-text opacity-75 leading-relaxed">
            Tailored partnership programs for every type of dental professional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <SolutionCard {...solution} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
