import Link from "next/link";

export default function ResourcesSection() {
  const resources = [
    {
      title: "Webinars & Video Tutorials",
      description:
        "Access expert-led webinars and comprehensive video tutorials covering treatment planning, case management, and best practices.",
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
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Treatment Manuals & Guides",
      description:
        "Comprehensive treatment manuals, case guides, and clinical protocols to support your practice success.",
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Planning Templates",
      description:
        "Access digital planning templates and case submission forms to streamline your workflow.",
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Expert Support",
      description:
        "24/7 access to our clinical support team for case reviews, treatment guidance, and technical assistance.",
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
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-2 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-2 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">
              Learning & Support
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text">
            Learning & <span className="gradient-text">Support Resources</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-text opacity-75 leading-relaxed">
            Expert guidance and comprehensive resources for successful aligner
            treatments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-secondary/30 card-shadow-hover hover-lift transition-all duration-300 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-5 flex-shrink-0 shadow-md">
                {resource.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-text flex-shrink-0">
                {resource.title}
              </h3>
              <p className="text-sm text-text opacity-75 leading-relaxed flex-grow">
                {resource.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <Link href="/resources" className="btn-outline inline-block">
            Request Access to Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
