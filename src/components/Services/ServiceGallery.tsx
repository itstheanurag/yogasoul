import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { type OurServices } from "../../data/services";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";

interface ServiceGalleryProps {
  services: OurServices[];
  title?: string;
  showBorder?: boolean;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({
  services,
  showBorder = true,
}) => {
  const [selectedService, setSelectedService] = useState<OurServices | null>(
    null
  );

  const handleCardClick = (service: OurServices) => setSelectedService(service);

  useEffect(() => {
    document.body.style.overflow = selectedService ? "hidden" : "auto";
  }, [selectedService]);

  return (
    <section className=" bg-amber-50 px-4 md:px-12">
      <div
        className={`mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl rounded-lg p-8 bg-amber-50 shadow-md hover:shadow-xl transition ease-in duration-300 ${
          showBorder ? "border-2 border-orange-200" : ""
        }`}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
            onClick={handleCardClick}
          />
        ))}
      </div>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

export default ServiceGallery;
