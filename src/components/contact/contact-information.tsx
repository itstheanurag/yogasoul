"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Subheading } from "../internals/subheading";

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    details: ["123 Wellness Street", "Ludhiana, Punjab 141001", "India"],
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 98765 43211"],
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    details: ["info@yogastudio.com", "hello@yogastudio.com"],
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Studio Hours",
    details: ["Mon - Fri: 6:00 AM - 9:00 PM", "Sat - Sun: 7:00 AM - 8:00 PM"],
  },
];

export const ContactInfoSection = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="space-y-8"
  >
    <div>
      <h2 className="text-xl sm:text-3xl font-bold text-neutral-600 dark:text-neutral-200 mb-6 font-mono tracking-tighter">
        Get in Touch
      </h2>
      <Subheading>
        Whether you're a beginner taking your first step into yoga or an
        experienced practitioner looking to deepen your practice, we're here to
        support you every step of the way.
      </Subheading>
    </div>

    <div className="grid gap-6">
      {contactInfo.map((info, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          className="flex items-start space-x-4 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-300"
        >
          <div className="text-emerald-600 mt-1">{info.icon}</div>
          <div>
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              {info.title}
            </h3>
            {info.details.map((detail, idx) => (
              <p key={idx} className="text-neutral-600 dark:text-neutral-400">
                {detail}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);
