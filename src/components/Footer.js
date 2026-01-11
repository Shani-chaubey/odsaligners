"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer">
      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              ODS Aligners
            </h3>
            <p className="text-sm mb-4">
              Precision clear aligners for clinics and partners worldwide.
              Clinically-engineered, quality-controlled solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="transition-colors opacity-70 hover:opacity-100 hover:text-primary text-white"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="transition-colors opacity-70 hover:opacity-100 hover:text-primary text-white"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/clinic-partnership"
                  className="transition-colors opacity-80 hover:opacity-100 hover:text-primary text-white"
                >
                  Clinic Partnership
                </Link>
              </li>
              <li>
                <Link
                  href="/oem-private-label"
                  className="transition-colors opacity-80 hover:opacity-100 hover:text-primary text-white"
                >
                  OEM / Private Label
                </Link>
              </li>
              <li>
                <Link
                  href="/dealer-distributor"
                  className="transition-colors opacity-80 hover:opacity-100 hover:text-primary text-white"
                >
                  Dealer / Distributor
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/case-studies"
                  className="transition-colors opacity-80 hover:opacity-100 hover:text-primary text-white"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/certifications"
                  className="transition-colors opacity-80 hover:opacity-100 hover:text-primary text-white"
                >
                  Certifications & Quality
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="transition-colors opacity-80 hover:opacity-100 hover:text-primary text-white"
                >
                  Training & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="transition-colors opacity-80 hover:opacity-100 hover:text-primary text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors opacity-80 hover:opacity-100 hover:text-primary text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-colors opacity-80 hover:opacity-100 hover:text-primary text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors opacity-80 hover:opacity-100 hover:text-primary text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="transition-colors opacity-80 hover:opacity-100 hover:text-primary text-white"
                >
                  Clinical Use Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-8 pt-8 text-center text-sm"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p>
            &copy; {new Date().getFullYear()} ODS Aligners. All rights reserved.
          </p>
          <p className="mt-2 text-xs opacity-70">
            ISO 13485 Certified | CE Approved
          </p>
        </div>
      </div>
    </footer>
  );
}
