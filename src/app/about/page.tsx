import { AboutHeader } from "@/components/about/about-header";
import { FounderSection } from "@/components/about/founder-section";
import { MissionSection } from "@/components/about/mission";
import { OfferingsSection } from "@/components/about/offering-section";
import { UniquenessSection } from "@/components/about/uniqueness";
import { SectionWrapper } from "@/components/section-wrapper";

const AboutUsPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-26 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <AboutHeader />
        </SectionWrapper>
        <SectionWrapper>
          <FounderSection />
          <OfferingsSection />
        </SectionWrapper>

        <SectionWrapper>
          <UniquenessSection />
        </SectionWrapper>

        <SectionWrapper>
          <MissionSection />
        </SectionWrapper>
      </div>
    </div>
  );
};

export default AboutUsPage;
