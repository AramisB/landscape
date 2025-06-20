import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../components/ServiceDetails';
import WhyChooseUs from "../components/WhyChooseUs";

// Utility function to convert title to URL-friendly format
const toSlug = (title) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export default function Services() {
  return (
    <div className="min-h-screen bg-[var(--off-white)]">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center min-h-[40vh] w-full bg-[var(--off-white)] overflow-hidden py-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-green)] via-[var(--secondary-green)] to-[var(--light-green)] opacity-80 z-0" />
        <div className="relative z-10 flex flex-col items-center w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-white drop-shadow"
          >
            Comprehensive landscape architecture solutions tailored to your vision
          </motion.p>
        </div>
      </div>

      {/* Services List Section */}
      <div className="py-16 bg-[var(--off-white)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.li
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white shadow-lg rounded-none overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-none text-[var(--primary-green)] z-20">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-lg font-bold mb-2 text-[var(--primary-green)]">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{service.description}</p>
                  <Link
                    to={`/services/${toSlug(service.title)}`}
                    className="inline-block text-white font-medium bg-[var(--primary-green)] px-4 py-2 rounded-none hover:bg-[var(--secondary-green)] transition"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
}
