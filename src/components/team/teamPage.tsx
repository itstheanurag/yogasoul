"use client";
import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import { Paragraph } from "../internals/paragraph";
import TeamSection from "../teams";
import { Heading } from "../internals/heading";

export const TeamPage = () => {
  return (
    <div className="min-h-screen">
      {/* Simplified version without complex animations */}
      <div>
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <Heading delay={0.2}>Our Team</Heading>
          <div className="w-full max-w-4xl">
            <Paragraph direction="left_to_right" delay={0.3}>
              Meet our team of expert yoga teachers – fully certified, highly
              skilled, and dedicated to guiding you on your journey to holistic
              wellness. With years of professional experience and profound
              knowledge of yoga, our teachers ensure every session is safe,
              effective, and truly transformative.
            </Paragraph>
          </div>
        </div>

        {/* TeamSection with fallback */}
        <div>
          {TeamSection ? (
            <TeamSection />
          ) : (
            <div className="text-center p-8 bg-red-100 text-red-800">
              TeamSection component not found or failed to load
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
