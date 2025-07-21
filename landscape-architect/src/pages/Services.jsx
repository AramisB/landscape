import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../components/ServiceDetails';
import WhyChooseUs from "../components/WhyChooseUs";
import GetStartedSection from '../components/GetStartedSection';
import { Helmet } from 'react-helmet-async';

// Utility function to convert title to URL-friendly format
const toSlug = (title) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

// Helper to truncate and SEO-optimize service descriptions
function getSeoDescription(description) {
  if (description.length <= 180) return description;
  // Try to end at a sentence or word boundary for SEO
  let truncated = description.slice(0, 180);
  const lastPeriod = truncated.lastIndexOf('.');
  if (lastPeriod > 120) {
    truncated = truncated.slice(0, lastPeriod + 1);
  } else {
    // Otherwise, cut at last space
    const lastSpace = truncated.lastIndexOf(' ');
    truncated = truncated.slice(0, lastSpace) + '...';
  }
  return truncated;
}

export default function Services() {
  return (
    <div className="min-h-screen bg-[var(--off-white)]">
      <Helmet>
        <title>Services - YouLandscape Professional Services</title>
        <meta name="description" content="Comprehensive landscape architecture solutions tailored to your vision" />
      </Helmet>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center min-h-[40vh] w-full bg-[var(--off-white)] overflow-hidden py-6 px-2 sm:py-8 sm:px-6">
        <div className="absolute inset-0 opacity-80 z-0 bg-[url('/servicesSlider.webp')] bg-cover bg-center" />
        <div className="relative z-10 flex flex-col items-center w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-white drop-shadow"
          >
            Comprehensive landscape architecture solutions tailored to your vision
          </motion.p>
        </div>
      </div>

      {/* Services List Section */}
      <div className="py-8 sm:py-16 bg-[var(--off-white)]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {services.map((service, index) => (
              <motion.li
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white shadow-lg rounded-none overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - YouLandscape Professional Services`}
                    className="w-full h-full object-cover rounded-none"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-none text-[var(--primary-green)] z-20">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-lg font-bold mb-2 text-[var(--primary-green)]">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{getSeoDescription(service.description)}</p>
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
      <div className="max-w-6xl mx-auto px-2 sm:px-4 pb-12">
        <GetStartedSection />
      </div>
    </div>
  );
}
