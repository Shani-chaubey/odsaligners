import Image from "next/image";

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "Connect with our B2B team to discuss your partnership needs, requirements, and expectations for your practice or business.",
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Partnership Agreement",
      description:
        "Review and sign our comprehensive partnership agreement with competitive pricing, support packages, and flexible terms.",
      icon: (
        <svg
          className="w-16 h-16 text-white"
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
      step: "03",
      title: "Onboarding & Training",
      description:
        "Receive comprehensive training on our systems, treatment protocols, and best practices. Access to dedicated support team.",
      icon: (
        <svg
          className="w-16 h-16 text-white"
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
      step: "04",
      title: "Start Treating",
      description:
        "Begin treating patients with confidence. Continuous support, regular case reviews, and access to latest innovations.",
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/20"></div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div data-aos="fade-right">
            <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">
                Partnership Journey
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 text-text leading-tight">
              Simple <span className="gradient-text">Partnership Process</span>
            </h2>
            <p className="text-lg text-text opacity-80 mb-6 leading-relaxed">
              From initial contact to treating your first patient, we make the
              partnership journey seamless and efficient.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
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
                <div>
                  <h4 className="font-bold text-text mb-2">Fast Onboarding</h4>
                  <p className="text-text opacity-70">
                    Get started in days, not weeks
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
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
                <div>
                  <h4 className="font-bold text-text mb-2">
                    Dedicated Support
                  </h4>
                  <p className="text-text opacity-70">
                    24/7 support for all your needs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
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
                <div>
                  <h4 className="font-bold text-text mb-2">
                    Competitive Pricing
                  </h4>
                  <p className="text-text opacity-70">
                    Flexible pricing models for every practice size
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative" data-aos="fade-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/aligners-on-hnd.webp"
                alt="ODS Aligners"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0"></div>
              )}

              <div
                className="bg-white p-8 rounded-3xl card-shadow-hover hover-lift border border-secondary/30 relative z-10 h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl font-extrabold text-primary/20">
                    {step.step}
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-text group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-text opacity-70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
