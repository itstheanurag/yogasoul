"use client";
import { motion } from "motion/react";
import React from "react";

export const AdditionalInformation = () => {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 sm:mt-20"
      >
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-2xl border border-emerald-200 dark:border-emerald-800">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">
              Visit Our Studio
            </h3>
            <p className="text-emerald-700 dark:text-emerald-300 leading-relaxed">
              Our beautiful, serene studio space is designed to provide the
              perfect environment for your yoga practice. Located in the heart
              of Ludhiana, we're easily accessible by public transport and offer
              free parking for our students.
            </p>
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 hover:bg-emerald-700 shadow-lg w-fit sm:w-auto text-white px-8 py-3 rounded-lg transition-colors duration-200 font-mono tracking-tighter"
              >
                Get Directions
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
