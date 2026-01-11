import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm font-semibold text-white">
              Ready to Partner?
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
            Ready to Partner with{" "}
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              ODS Aligners?
            </span>
          </h2>

          <p className="text-lg mb-10 text-white opacity-95 leading-relaxed">
            Join hundreds of clinics and partners worldwide delivering
            exceptional orthodontic outcomes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact?type=clinic"
              className="bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-50 transition-all transform hover:scale-105 font-bold text-base shadow-xl min-w-[260px] text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Apply to Become a Clinic Partner
            </Link>
            <Link
              href="/contact?type=oem"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all transform hover:scale-105 font-bold text-base min-w-[260px] text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Request OEM / Private Label Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
