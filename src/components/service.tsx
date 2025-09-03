"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  Service,
  type Services,
  servicesData,
  ServiceType,
} from "@/lib/data/services";
import { Heading } from "./internals/heading";
import { Subheading } from "./internals/subheading";

export const ServicesSecondaryCard: React.FC<{ service: ServiceType }> = ({
  service,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden bg-white/80 dark:bg-neutral-900/70 backdrop-blur-md rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-emerald-500 transition-all duration-300 flex flex-col p-8"
    >
      {/* Top Decorative Icon */}
      <div className="absolute top-4 right-4 text-emerald-500 text-4xl opacity-10 group-hover:opacity-20 transition">
        🧘
      </div>

      {/* Service Title */}
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 group-hover:text-emerald-600 transition">
        {service.title}
      </h2>

      {/* Service Description */}
      <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Button */}
      <button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg w-fit sm:w-auto py-3 px-6 rounded-ful transition-all duration-300 font-mono tracking-tight rounded-2xl text-neutral-50 text-shadow-md">
        {service.buttonText}
      </button>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-transparent opacity-0 group-hover:opacity-20 transition duration-300"></div>
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
            <img
              src={service.src}
              className="w-full h-auto object-cover object-center rounded-xl group-hover/card:shadow-xl transition-shadow duration-300 aspect-[4/3]"
              alt={service.title}
            />
          </CardItem>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-2 sm:gap-0">
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

            <CardItem
              translateZ={20}
              as="button"
              className="px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold transition-colors duration-300 shadow-lg"
            >
              {service.price}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="mt-12 max-w-8xl mx-auto">
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

      {/* Call to action */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <button className="mt-12 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-shadow-md font-mono py-4 px-8 rounded-2xl tracking-tighter transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Book Your Session
        </button>
      </motion.div>
    </section>
  );
};

export default Services;
