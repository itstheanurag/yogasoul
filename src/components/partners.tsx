"use client";
import { Partner, partners } from "@/lib/data/partners";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heading } from "./internals/heading";
import { Subheading } from "./internals/subheading";
import { HoverEffect } from "./ui/card-hover-effect";

export const Partners = () => {
  return (
    <section className="pt-16">
      <Heading> Our Partners </Heading>
      <Subheading>
        Trusted partnerships with global yoga associations and wellness leaders
        help us bring meaningful, impactful experiences to our community.
      </Subheading>

      <div className="max-w-8xl mx-auto px-8">
      <HoverEffect items={partners} />
    </div>


    </section>
  );
};
