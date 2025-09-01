"use client";

import React from "react";
import { motion } from "framer-motion";
import { Service, servicesData } from "@/lib/data/services";
import Services, { ServiceCard } from "@/components/service";

const whatWeOffer = [
  {
    title: "One-to-One Private Classes",
    description:
      "Move at your own pace with expert instruction that nurtures strength, healing, and personal transformation.",
    buttonText: "Learn More",
  },
  {
    title: "Group Classes",
    description:
      "Connect and grow with our vibrant community. Our inclusive classes welcome all levels and include styles like Hatha, Vinyasa, Ashtanga, and more.",
    buttonText: "Explore Styles",
  },
  {
    title: "Yoga Therapy for Healing",
    description:
      "Address health concerns like back pain, anxiety, insomnia, and more through therapeutic yoga tailored for your well-being.",
    buttonText: "Inquire Now",
  },
];

const Page = () => {
  const cardVariants = {
    hover: { scale: 1.03, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)" },
  };

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-26">
        {/* ✅ Hero Section */}
        <section className="text-center mb-16 sm:mb-20">
          <motion.h1
            className="sm:text-4xl lg:text-5xl font-bold text-emerald-600 font-secondary tracking-tight sm:pt-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Services at Soul Sanctuary Yoga
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Experience customized yoga sessions in the comfort of your home—
            designed to suit your lifestyle, goals, and health needs. Whether
            you're managing back pain, addressing specific health issues, or
            maintaining daily fitness and wellness, our private classes offer
            focused guidance and therapeutic support.
          </motion.p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {whatWeOffer.map(
            (
              service: {
                title: string;
                description: string;
                buttonText: string;
              },
              index: number
            ) => (
              <motion.div
                key={index}
                whileHover="hover"
                variants={cardVariants}
                className="group bg-gray-50 dark:bg-neutral-900 p-6 rounded-xl shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4 font-secondary transition-colors duration-300 group-hover:text-emerald-600">
                  {service.title}
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400 text-base sm:text-lg leading-relaxed mb-6 transition-colors duration-300 group-hover:text-neutral-600">
                  {service.description}
                </p>
                <button className="mt-auto bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg transition-colors font-mono font-medium tracking-tighter text-shadow-md">
                  {service.buttonText}
                </button>
              </motion.div>
            )
          )}
        </section>
      </main>

      <section className="min-h-screen w-full flex flex-col items-center justify-center">
       <Services />
      </section>
    </>
  );
};

export default Page;
