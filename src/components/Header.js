"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-primary-dark to-primary shadow-md">
      <nav className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/ods-white-logo.png"
              alt="ODS Aligners Logo"
              width={220}
              height={70}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/clinic-partnership"
              className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-sm font-medium"
            >
              Clinic Partnership
            </Link>
            <Link
              href="/oem-private-label"
              className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-sm font-medium"
            >
              OEM / Private Label
            </Link>
            <Link
              href="/dealer-distributor"
              className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-sm font-medium"
            >
              Dealer / Distributor
            </Link>
            <Link
              href="/case-studies"
              className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-sm font-medium"
            >
              Case Studies
            </Link>
            <Link
              href="/certifications"
              className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-base font-medium lg:hidden xl:block"
            >
              Certifications
            </Link>
            <Link
              href="/resources"
              className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-base font-medium lg:hidden xl:block"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="ml-2 bg-white text-primary px-5 py-2 rounded-lg hover:bg-white/90 transition-all duration-200 text-sm font-semibold shadow-sm"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/clinic-partnership"
                className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Clinic Partnership
              </Link>
              <Link
                href="/oem-private-label"
                className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                OEM / Private Label
              </Link>
              <Link
                href="/dealer-distributor"
                className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Dealer / Distributor
              </Link>
              <Link
                href="/case-studies"
                className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/certifications"
                className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Certifications
              </Link>
              <Link
                href="/resources"
                className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="mt-2 mx-4 bg-white text-primary px-5 py-3 rounded-lg hover:bg-white/90 transition-all duration-200 text-sm font-semibold text-center shadow-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
