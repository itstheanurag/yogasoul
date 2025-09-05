import React from "react";
// import { motion } from "framer-motion";
import { ContactHeader } from "@/components/contact/contact-header";
import { ContactInfoSection } from "@/components/contact/contact-information";
import { ContactForm } from "@/components/contact/contact-form";
import { AdditionalInformation } from "@/components/contact/additional";

const ContactPage = () => {
 

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-26 min-h-screen">
      {/* Section Header */}
      <ContactHeader />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Information */}

        <ContactInfoSection />

        {/* Contact Form */}
        <ContactForm/>
      </div>

      <AdditionalInformation/>
      {/* Map or Additional Section (Optional) */}
    </main>
  );
};

export default ContactPage;
