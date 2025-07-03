import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { services, type OurServices } from "../data/services";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
    image: string;
  } | null>(null);

  const handleCardClick = (service: OurServices) => {
    setSelectedService(service);
  };

  useEffect(() => {
    document.body.style.overflow = selectedService ? "hidden" : "auto";
  }, [selectedService]);

  return (
    <section className="py-16 bg-amber-50 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-orange-600 text-center mb-10">
        Our Services
      </h2>

      <motion.div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl border-2 border-orange-200 rounded-lg p-8 bg-amber-50 shadow-md hover:shadow-xl transition ease-in duration-300">
        {services.map((service: OurServices, index: number) => (
          <motion.div
            key={index}
            className="bg-amber-50 shadow-sm rounded-lg hover:shadow-xl hover:scale-[1.02] transition ease-in duration-300 w-full max-w-sm mx-auto cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "linear",
            }}
            viewport={{ once: true }}
            onClick={() => handleCardClick(service)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="object-cover rounded-t-lg transition duration-300 h-48 w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 ">
                {service.title}
              </h3>
              <p className="text-gray-600 truncate-100">
                {service.description.slice(0, 80)}
                {service.description.length > 100 && "..."}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
          onClick={() => setSelectedService(null)} // Close on background click
        >
          <div
            className="bg-white rounded-lg max-w-lg w-full p-6 shadow-xl relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when modal is clicked
          >
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-orange-600 mb-2">
              {selectedService.title}
            </h3>
            <p className="text-gray-700">{selectedService.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
