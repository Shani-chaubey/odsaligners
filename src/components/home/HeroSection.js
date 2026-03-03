import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import RevealWrapper from "@/components/RevealWrapper";
import Aligner3D from "@/components/Aligner3D";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-hero text-slate-900">
      <HeroCanvas />

      <div className="relative z-10 xl:container xl:mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <RevealWrapper delay={0.02} className="inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-white/70 px-4 py-1.5 backdrop-blur-xl shadow-sm">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-slate-600">
                  B2B orthodontic innovation
                </p>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={0.06}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-slate-900">
                Aligners for the{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-cyan-500 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
                    Connected Practice
                  </span>
                  <span className="pointer-events-none absolute -inset-x-3 -bottom-2 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-70" />
                </span>
              </h1>
            </RevealWrapper>

            <RevealWrapper delay={0.1}>
              <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                ODS Aligners combines clinically-engineered protocols, digital workflows,
                and ISO 13485 manufacturing to power private-label programs, group
                practices, and clinic networks worldwide.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={0.14}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/clinic-partnership"
                  className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-slate-950 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100"
                >
                  <span className="absolute inset-0 opacity-0 transition-opacity duration-200 hover:opacity-20 bg-[radial-gradient(circle_at_10%_0%,white,transparent_45%),radial-gradient(circle_at_90%_100%,white,transparent_55%)]" />
                  <span className="relative text-white">Partner with ODS Aligners</span>
                </Link>
                <Link
                  href="/oem-private-label"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur-xl shadow-sm transition-colors duration-200 hover:border-cyan-400/70 hover:bg-slate-50"
                >
                  OEM / Private Label Solutions
                </Link>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={0.18}>
              <div className="flex flex-wrap items-center gap-6 pt-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/5 ring-1 ring-emerald-400/40">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.95)]" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-medium">ISO 13485 / CE-marked</p>
                    <p className="text-[11px] text-slate-400">
                      Medical-grade, audited production environments
                    </p>
                  </div>
                </div>
                <div className="h-8 w-px bg-gradient-to-b from-transparent via-slate-600/70 to-transparent hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <span className="h-7 w-7 rounded-full border border-slate-200 bg-gradient-to-br from-slate-200 to-slate-400" />
                    <span className="h-7 w-7 rounded-full border border-slate-200 bg-gradient-to-br from-cyan-400/80 to-sky-500" />
                    <span className="h-7 w-7 rounded-full border border-slate-200 bg-gradient-to-br from-slate-300 to-slate-500" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-medium">Global B2B partner network</p>
                    <p className="text-[11px] text-slate-400">
                      Clinics, DSOs, OEMs, and group practices
                    </p>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          </div>

          <RevealWrapper delay={0.12} className="relative">
            <div className="relative h-[420px] sm:h-[480px] lg:h-[520px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <Aligner3D />
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

