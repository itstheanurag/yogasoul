import { services } from "../../data/services"; // adjust path as neede
import ServiceGallery from "./ServiceGallery";

const ServicesPage = () => {
  return (
    <section className="bg-amber-50 text-gray-800 py-16 px-4 md:px-12">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
          Our Services
        </h1>
        <p className="text-lg md:text-xl font-medium leading-relaxed">
          At Soul Sanctuary Yoga, we offer a diverse range of programs that
          cater to every individual's physical, emotional, and spiritual needs.
          Whether you’re a beginner or advanced practitioner, we have something
          crafted just for you.
        </p>
        <p className="text-base md:text-lg mt-4 text-gray-600">
          Discover how ancient yogic practices blended with modern science can
          transform your life, improve your health, and deepen your awareness.
        </p>
      </div>

      {/* Cards */}

      <ServiceGallery services={services} />
    </section>
  );
};

export default ServicesPage;
