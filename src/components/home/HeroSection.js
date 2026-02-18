import Link from "next/link";
import Aligner3D from "@/components/Aligner3D";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-hero">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="space-y-6">
              <div
                className="inline-block px-4 py-2 bg-secondary rounded-full mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span className="text-sm font-semibold text-primary">
                  B2B Partnership Solutions
                </span>
              </div>

              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Precision Clear Aligners for{" "}
                <span className="gradient-text block mt-2">
                  Clinics and Partners
                </span>
              </h1>

              <p
                className="text-base md:text-lg leading-relaxed text-text opacity-80 max-w-2xl"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Clinically-engineered, quality-controlled aligners trusted by
                orthodontists and private-label partners worldwide.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link
                href="/clinic-partnership"
                className="btn-primary text-center px-8 py-4"
              >
                Partner with ODS Aligners
              </Link>
              <Link
                href="/oem-private-label"
                className="btn-outline text-center px-8 py-4"
              >
                OEM / Private Label Solutions
              </Link>
            </div>

            {/* Trust badges */}
            <div
              className="flex items-center gap-6 pt-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-text">ISO 13485</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-text">
                  CE Approved
                </span>
              </div>
            </div>
          </div>

          {/* Right - 3D Animation */}
          <div
            className="h-[500px] lg:h-[600px] relative"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Aligner3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
