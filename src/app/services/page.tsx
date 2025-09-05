import React from "react";
import Services, { ServicesGrid } from "@/components/service";
import { Heading } from "@/components/internals/heading";
import { whatWeOffer } from "@/lib/data/services";
import { Paragraph } from "@/components/internals/paragraph";
import { SectionWrapper } from "@/components/section-wrapper";

const Page = () => {
  return (
        <>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-26">
            <SectionWrapper>
              <div className="flex flex-col items-center text-center mb-12">
                <Heading>Services at Soul Sanctuary Yoga</Heading>

                <div className="max-w-4xl w-full px-4 sm:px-0 text-center">
              <Paragraph direction="left_to_right" delay={0.5}>
                Experience customized yoga sessions in the comfort of your home—
                designed to suit your lifestyle, goals, and health needs.
                Whether you&apos;re managing back pain, addressing specific
                health issues, or maintaining daily fitness and wellness, our
                private classes offer focused guidance and therapeutic support.
              </Paragraph>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <ServicesGrid services={whatWeOffer} />
          </div>
        </SectionWrapper>
      </main>

      <SectionWrapper>
        <section className="w-full flex flex-col items-center justify-center mb-16">
          <Services />
        </section>
      </SectionWrapper>
    </>
  );
};

export default Page;
