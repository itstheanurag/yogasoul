import { motion, useAnimationFrame } from "framer-motion";

import yogaImg from "../assets/yoga.jpg";
import kidsYogaImg from "../assets/kids-yoga.jpg";
import corporateImg from "../assets/corporate-yoga.jpg";
import therapyImg from "../assets/therapy-yoga.jpg";
import certificationImg from "../assets/certification.jpg";
import nutritionImg from "../assets/nutrition.jpg";
import hydroImg from "../assets/colon-hydrotherapy.jpg";
import privateImg from "../assets/private-yoga.jpg";
import reverseAgingImg from "../assets/reverse-aging-yoga.jpg";
import retreatsImg from "../assets/retreats.jpg";
import { useRef } from "react";

const services = [
  {
    title: "General Yoga & Meditation",
    description:
      "Daily yoga and meditation to improve balance, awareness, and health through Yoga + Meditation.",
    image: yogaImg,
  },
  {
    title: "Kids Sports Yoga",
    description:
      "Fun, strength-based yoga for children aiming at Olympic-level participation and confidence.",
    image: kidsYogaImg,
  },
  {
    title: "Corporate Yoga",
    description:
      "Workplace wellness program to reduce stress and improve employee focus and productivity.",
    image: corporateImg,
  },
  {
    title: "Therapeutic Yoga",
    description:
      "Customized healing sessions combining traditional yoga with medical therapy principles.",
    image: therapyImg,
  },
  {
    title: "Certified Yoga Courses",
    description:
      "RYT-200/300 Hour Yoga Therapy Teacher Training with CYA and World Real Yoga Alliance.",
    image: certificationImg,
  },
  {
    title: "Diet & Nutrition Plans",
    description:
      "Personalized nutrition plans by certified experts to support weight loss and better health.",
    image: nutritionImg,
  },
  {
    title: "Colon Hydrotherapy",
    description:
      "Gentle detox technique to cleanse the colon and improve digestion and nutrient absorption.",
    image: hydroImg,
  },
  {
    title: "Reverse Aging Yoga",
    description:
      "Hot yoga in 40°C with oxygen infusion to support cellular rejuvenation and anti-aging.",
    image: reverseAgingImg,
  },
  {
    title: "Retreats & Workshops",
    description:
      "Immersive spiritual experiences designed for growth, connection, and deep healing.",
    image: retreatsImg,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-amber-50 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-orange-600 text-center mb-10">
        Our Services
      </h2>

      <motion.div className="m-5 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 content-center max-w-60vw border-2 border-orange-200 rounded-lg p-5 bg-amber-50 shadow-md hover:shadow-xl transition ease-in duration-300">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white w-auto rounded-lg shadow-lg m-5 hover:shadow-xl hover:scale-105 transition ease-in duration-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1, ease: "linear" }}
            viewport={{ once: true }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="object-cover rounded-lg hover:blur-(0px) transition duration-300 h-48 w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
