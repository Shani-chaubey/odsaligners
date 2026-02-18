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
import DigitalWorkflowSection from "@/components/home/DigitalWorkflowSection";
import PartnerSupportSection from "@/components/home/PartnerSupportSection";
import ManufacturingSection from "@/components/home/ManufacturingSection";
import CommercialProgramsSection from "@/components/home/CommercialProgramsSection";
import GlobalNetworkSection from "@/components/home/GlobalNetworkSection";
import TechnologySection from "@/components/home/TechnologySection";
import TrainingAcademySection from "@/components/home/TrainingAcademySection";
import LogisticsSection from "@/components/home/LogisticsSection";
import ComplianceSection from "@/components/home/ComplianceSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <GlobalNetworkSection />
      <WhyODSSection />
      <SolutionsSection />
      <ProcessSection />
      <BenefitsSection />
      <TechnologySection />
      <PartnerTypesSection />
      <DigitalWorkflowSection />
      <ManufacturingSection />
      <ComparisonSection />
      <CaseStudiesSection />
      <TrustCertificationsSection />
      <ResourcesSection />
      <TrainingAcademySection />
      <LogisticsSection />
      <ComplianceSection />
      <CommercialProgramsSection />
      <PartnerSupportSection />
      <AboutSection />
      <CTASection />
    </div>
  );
}
