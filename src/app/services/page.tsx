import React from "react";
import Services, { ServicesSecondaryCard } from "@/components/service";
import { Heading } from "@/components/internals/heading";
import { Subheading } from "@/components/internals/subheading";
import { ServiceType, whatWeOffer } from "@/lib/data/services";

const Page = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-26 pb-12">
        <section className="text-center mb-16 sm:mb-20">
          <Heading>Services at Soul Sanctuary Yoga</Heading>
          <Subheading>
            Experience customized yoga sessions in the comfort of your home—
            designed to suit your lifestyle, goals, and health needs. Whether
            you&apos;re managing back pain, addressing specific health issues,
            or maintaining daily fitness and wellness, our private classes offer
            focused guidance and therapeutic support.
          </Subheading>

        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {whatWeOffer.map((service: ServiceType, index: number) => (
            <ServicesSecondaryCard service={service} key={index} />
          ))}
        </section>
      </main>

      <section className="min-h-screen w-full flex flex-col items-center justify-center">
        <Services />
      </section>
    </>
  );
};

export default Page;
