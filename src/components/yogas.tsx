"use client";

import React from "react";
import { FocusCards } from "./focus-cards";

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
      <h2 className="text-4xl sm:text-5xl font-bold text-emerald-600 text-center tracking-tighter font-secondary">
        Our Yoga Practices
      </h2>
      <p className="mt-4 text-lg sm:text-xl text-center text-neutral-400 dark:text-neutral-400 max-w-3xl mx-auto ">
        Explore a variety of yoga styles designed to bring balance, flexibility,
        and inner peace. Each practice is tailored to help you connect mind,
        body, and breath.
      </p>

      <div className="mt-24">

      <FocusCards cards={images} />
      </div>

    </section>
  );
};

export default Yogas;
