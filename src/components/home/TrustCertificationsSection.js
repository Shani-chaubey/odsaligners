const certifications = [
  {
    title: "ISO 13485",
    description: "Medical Devices Quality Management",
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "CE Mark",
    description: "European Conformity Certification",
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "FDA Registered",
    description: "US Food and Drug Administration",
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "GMP Compliant",
    description: "Good Manufacturing Practices",
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Orthodontist, Singapore",
    quote:
      "ODS Aligners has transformed our practice. The quality is exceptional and the support team is always responsive.",
    rating: 5,
  },
  {
    name: "Dr. James Wilson",
    role: "Dental Clinic Owner, Australia",
    quote:
      "The partnership process was seamless, and our patients love the results. Highly recommend ODS Aligners.",
    rating: 5,
  },
  {
    name: "Dr. Maria Rodriguez",
    role: "Private Practice, UK",
    quote:
      "Outstanding clinical outcomes and excellent value. Our practice has grown significantly since partnering with ODS.",
    rating: 5,
  },
];

function CertificationBadge({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-secondary/30 card-shadow-hover hover-lift text-center transition-all duration-300">
      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-text">{title}</h3>
      <p className="text-sm text-text opacity-70">{description}</p>
    </div>
  );
}

function TestimonialCard({ name, role, quote, rating }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-secondary/30 card-shadow-hover hover-lift transition-all duration-300">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-primary"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-sm text-text opacity-75 mb-5 leading-relaxed italic">
        &quot;{quote}&quot;
      </p>
      <div>
        <div className="font-bold text-text mb-1">{name}</div>
        <div className="text-sm text-text opacity-70">{role}</div>
      </div>
    </div>
  );
}

export default function TrustCertificationsSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-2 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">
              Trust & Quality
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text">
            Trust & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-text opacity-75 leading-relaxed">
            Internationally recognized quality standards and proven clinical
            outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <CertificationBadge {...cert} />
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
