"use client";

import React from "react";
import { FocusCards } from "./focus-cards";
import Heading from "./internals/heading";
import { Subheading } from "./internals/subheading";

const images = [
  { src: "/verticles/yoga1.jpg" },
  { src: "/verticles/yoga2.jpg" },
  { src: "/verticles/yoga3.jpg" },
  { src: "/verticles/yoga4.jpg" },
  { src: "/verticles/yoga5.jpeg" },
  { src: "/verticles/yoga6.jpeg" },
];

const Yogas = () => {
  return (
    <section className="mt-12 py-16 px-4 max-w-8xl mx-auto">
      <Heading>Our Yoga Practices</Heading>
      <Subheading>
        Explore a variety of yoga styles designed to bring balance, flexibility,
        and inner peace. Each practice is tailored to help you connect mind,
        body, and breath.
      </Subheading>

      <div className="mt-24">
        <FocusCards cards={images} />
      </div>
    </section>
  );
};

export default Yogas;
