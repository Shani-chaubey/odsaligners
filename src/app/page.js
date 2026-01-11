import HeroSection from "@/components/home/HeroSection";
import WhyODSSection from "@/components/home/WhyODSSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import StatsSection from "@/components/home/StatsSection";
import ProcessSection from "@/components/home/ProcessSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import PartnerTypesSection from "@/components/home/PartnerTypesSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import TrustCertificationsSection from "@/components/home/TrustCertificationsSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <WhyODSSection />
      <SolutionsSection />
      <ProcessSection />
      <BenefitsSection />
      <PartnerTypesSection />
      <ComparisonSection />
      <CaseStudiesSection />
      <TrustCertificationsSection />
      <ResourcesSection />
      <AboutSection />
      <CTASection />
    </div>
  );
}
