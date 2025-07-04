import { motion } from "framer-motion";
import { type OurServices } from "../../data/services";

interface ServiceCardProps {
  service: OurServices;
  index: number;
  onClick: (service: OurServices) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  onClick,
}) => {
  return (
    <motion.div
      className="bg-amber-50 shadow-sm rounded-lg hover:shadow-xl hover:scale-[1.02] transition ease-in duration-300 w-full max-w-sm mx-auto cursor-pointer"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
        ease: "linear",
      }}
      viewport={{ once: true }}
      onClick={() => onClick(service)}
    >
      <img
        src={service.image}
        alt={service.title}
        className="object-cover rounded-t-lg transition duration-300 h-48 w-full"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600">
          {service.description.slice(0, 80)}
          {service.description.length > 100 && "..."}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
