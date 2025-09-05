"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  Service,
  type Services,
  servicesData,
  ServiceType,
} from "@/lib/data/services";
import { Heading } from "./internals/heading";
import { Subheading } from "./internals/subheading";
import ButtonMain from "./internals/button";
import Image from "next/image";
import { Paragraph } from "./internals/paragraph";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }, // ✅ TS happy
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export const ServicesSecondaryCard: React.FC<{ service: ServiceType }> = ({
  service,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden bg-gradient-to-br from-white via-white to-emerald-50/30 dark:from-neutral-900 dark:via-neutral-900 dark:to-emerald-950/30 backdrop-blur-lg rounded-3xl border border-neutral-200/50 dark:border-neutral-700/50 hover:border-emerald-400/60 dark:hover:border-emerald-400/40 transition-all duration-500 flex flex-col p-8 shadow-lg hover:shadow-xl hover:shadow-emerald-500/10"
    >
      {/* Title */}
      <motion.h2
        variants={childVariants}
        className="text-2xl font-bold text-neutral-600 dark:text-neutral-200 tracking-tighter"
        whileHover={{ x: 4 }}
      >
        {service.title}
      </motion.h2>

      <motion.div variants={childVariants}>
        <Paragraph className="mb-6">{service.description}</Paragraph>
      </motion.div>

      {/* Button at bottom */}
      <motion.div variants={childVariants} className="mt-auto">
        <ButtonMain>{service.buttonText}</ButtonMain>
      </motion.div>

      {/* Decorative accents */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

// Parent wrapper for cards
export const ServicesGrid = ({ services }: { services: ServiceType[] }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service) => (
        <ServicesSecondaryCard key={service.title} service={service} />
      ))}
    </motion.div>
  );
};

export const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
    >
      <CardContainer className="inter-var tracking-tighter w-full max-w-md mx-auto">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.3] hover:shadow-emerald-500/[0.2] dark:bg-neutral-900 dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border transition-all duration-500 h-auto">
          {/* Title */}
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white group-hover/card:text-emerald-600 transition-colors duration-300 font-secondary"
          >
            {service.title}
          </CardItem>

          {/* Description */}
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-400 text-sm max-w-full mt-2 dark:text-neutral-400 group-hover/card:text-neutral-600 transition-colors duration-300 leading-relaxed"
          >
            {service.description}
          </CardItem>

          {/* Image */}
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={service.src}
              alt={service.title}
              width={800}
              height={600}
              className="w-full h-auto object-cover object-center rounded-xl group-hover/card:shadow-xl transition-shadow duration-300 aspect-[4/3]"
              quality={100}
              priority
            />
          </CardItem>

          {/* Bottom section */}
          <div className="flex flex-wrap justify-between items-center mt-6 gap-2">
            <CardItem
              translateZ={20}
              className="flex items-center text-neutral-500 dark:text-neutral-500 group-hover/card:text-neutral-600 transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium">{service.duration}</span>
            </CardItem>

            <ButtonMain>{service.price}</ButtonMain>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="sm:mx-18 md:mx-12 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <Heading>Our Services</Heading>
      <Subheading>
        Choose from our yoga and wellness sessions to elevate your mind and
        body.
      </Subheading>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {servicesData.map((service: Service, index: number) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
