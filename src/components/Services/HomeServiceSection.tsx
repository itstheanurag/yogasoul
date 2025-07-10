import { type OurServices } from "../../data/services";
import ServiceGallery from "./ServiceGallery";

interface ServicesSectionProps {
  services: OurServices[];
  title?: string;
  showBorder?: boolean;
}

const HomeServiceSection: React.FC<ServicesSectionProps> = ({
  services,
  showBorder = true,
}) => {
  return (
    <section className=" bg-amber-50 px-4 md:px-12 flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold text-orange-600 text-center cursor-pointer leading-tight pb-10">
        Our Services
      </h2>
      <ServiceGallery
        services={services}
        showBorder={showBorder}
        // onCardClick={(service) => setSelectedService(service)}
      />
    </section>
  );
};

export default HomeServiceSection;
