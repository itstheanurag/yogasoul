import React from "react";
import { type OurServices } from "../../data/services";

interface ServiceModalProps {
  service: OurServices | null;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4 py-8"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-xl p-4 sm:p-6 shadow-xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 sm:h-60 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceModal;
