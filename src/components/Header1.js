"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header1() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-4 mb-4 flex items-center justify-between h-16 rounded-2xl border border-white/70 bg-white/85 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.22)]">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center pl-4 hover:opacity-95 transition-all duration-200"
                    >
                        <Image
                            src="/images/ods-white-logo.png"
                            alt="ODS Aligners Logo"
                            width={220}
                            height={70}
                            className="h-10 w-auto object-contain drop-shadow-[0_6px_16px_rgba(15,23,42,0.35)]"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1 pr-4">
                        <Link
                            href="/"
                            className="px-4 py-2 text-sm font-medium text-text/80 hover:bg-gray-100/80 rounded-xl transition-all duration-200 text-primary-hover"
                        >
                            Home
                        </Link>
                        <Link
                            href="/clinic-partnership"
                            className="px-4 py-2 text-sm font-medium text-text/80 hover:bg-gray-100/80 rounded-xl transition-all duration-200 text-primary-hover"
                        >
                            Clinic Partnership
                        </Link>
                        <Link
                            href="/oem-private-label"
                            className="px-4 py-2 text-sm font-medium text-text/80 hover:bg-gray-100/80 rounded-xl transition-all duration-200 text-primary-hover"
                        >
                            OEM / Private Label
                        </Link>
                        <Link
                            href="/dealer-distributor"
                            className="px-4 py-2 text-sm font-medium text-text/80 hover:bg-gray-100/80 rounded-xl transition-all duration-200 text-primary-hover"
                        >
                            Dealer / Distributor
                        </Link>
                        <Link
                            href="/case-studies"
                            className="px-4 py-2 text-sm font-medium text-text/80 hover:bg-gray-100/80 rounded-xl transition-all duration-200 text-primary-hover"
                        >
                            Case Studies
                        </Link>
                        <Link
                            href="/certifications"
                            className="px-4 py-2 text-base font-medium text-text/80 hover:bg-gray-100/80 rounded-xl transition-all duration-200 text-primary-hover lg:hidden xl:block"
                        >
                            Certifications
                        </Link>
                        <Link
                            href="/resources"
                            className="px-4 py-2 text-base font-medium text-text/80 hover:bg-gray-100/80 rounded-xl transition-all duration-200 text-primary-hover lg:hidden xl:block"
                        >
                            Resources
                        </Link>
                        <Link
                            href="/contact"
                            className="ml-3 bg-primary text-white px-5 py-2 rounded-full hover:brightness-105 transition-all duration-200 text-sm font-semibold shadow-md hover:shadow-lg"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 mr-2 rounded-xl text-text hover:bg-gray-100/80 transition-colors border border-white/70 bg-white/85 backdrop-blur-xl"
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
                    <div className="lg:hidden mt-1 py-4 border border-white/80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg">
                        <div className="flex flex-col space-y-1">
                            <Link
                                href="/"
                                className="px-4 py-3 text-sm font-medium text-text/90 hover:bg-gray-100/80 rounded-lg transition-all duration-200 text-primary-hover"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/clinic-partnership"
                                className="px-4 py-3 text-sm font-medium text-text/90 hover:bg-gray-100/80 rounded-lg transition-all duration-200 text-primary-hover"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Clinic Partnership
                            </Link>
                            <Link
                                href="/oem-private-label"
                                className="px-4 py-3 text-sm font-medium text-text/90 hover:bg-gray-100/80 rounded-lg transition-all duration-200 text-primary-hover"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                OEM / Private Label
                            </Link>
                            <Link
                                href="/dealer-distributor"
                                className="px-4 py-3 text-sm font-medium text-text/90 hover:bg-gray-100/80 rounded-lg transition-all duration-200 text-primary-hover"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Dealer / Distributor
                            </Link>
                            <Link
                                href="/case-studies"
                                className="px-4 py-3 text-sm font-medium text-text/90 hover:bg-gray-100/80 rounded-lg transition-all duration-200 text-primary-hover"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Case Studies
                            </Link>
                            <Link
                                href="/certifications"
                                className="px-4 py-3 text-sm font-medium text-text/90 hover:bg-gray-100/80 rounded-lg transition-all duration-200 text-primary-hover"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Certifications
                            </Link>
                            <Link
                                href="/resources"
                                className="px-4 py-3 text-sm font-medium text-text/90 hover:bg-gray-100/80 rounded-lg transition-all duration-200 text-primary-hover"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Resources
                            </Link>
                            <Link
                                href="/about"
                                className="px-4 py-3 text-sm font-medium text-text/90 hover:bg-gray-100/80 rounded-lg transition-all duration-200 text-primary-hover"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                className="mt-3 mx-4 bg-primary text-white px-5 py-3 rounded-full hover:brightness-105 transition-all duration-200 text-sm font-semibold text-center shadow-md"
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
