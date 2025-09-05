import React from "react";
import Services, { ServicesSecondaryCard } from "@/components/service";
import { Heading } from "@/components/internals/heading";
import { ServiceType, whatWeOffer } from "@/lib/data/services";
import { Paragraph } from "@/components/internals/paragraph";

const Page = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-26 pb-12">
        <section className="mb-12 sm:mb-20 flex flex-col items-center text-center">
          <Heading>Services at Soul Sanctuary Yoga</Heading>

          <div className="max-w-4xl w-full">
            <Paragraph direction="left_to_right" delay={0.5}>
              Experience customized yoga sessions in the comfort of your home—
              designed to suit your lifestyle, goals, and health needs. Whether
              you&apos;re managing back pain, addressing specific health issues,
              or maintaining daily fitness and wellness, our private classes
              offer focused guidance and therapeutic support.
            </Paragraph>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {whatWeOffer.map((service: ServiceType, index: number) => (
            <ServicesSecondaryCard service={service} key={index} />
          ))}
        </section>
      </main>

      <section className="min-h-screen w-full flex flex-col items-center justify-center mb-16">
        <Services />
      </section>
    </>
  );
};

export default Page;
