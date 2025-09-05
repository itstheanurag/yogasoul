import React from "react";
import { ContactHeader } from "@/components/contact/contact-header";
import { ContactInfoSection } from "@/components/contact/contact-information";
import { ContactForm } from "@/components/contact/contact-form";
import { AdditionalInformation } from "@/components/contact/additional";
import { SectionWrapper } from "@/components/section-wrapper";

const ContactPage = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-26 min-h-screen">
      {/* Section Header */}
      <SectionWrapper>
        <ContactHeader />
      </SectionWrapper>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <SectionWrapper>
          <ContactInfoSection />
        </SectionWrapper>

        <SectionWrapper>
          <ContactForm />
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <AdditionalInformation />
      </SectionWrapper>
    </main>
  );
};

export default ContactPage;
