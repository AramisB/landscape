import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from './ServiceDetails';
import '../styles/Services.css';
import '../styles/ServiceDetails.css';
import { FaSeedling } from 'react-icons/fa';

// Utility function to convert title to URL-friendly format
const toSlug = (title) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');


export default function Services() {
  return (
    <div className="servicesContainer">
      {/* Hero Section */}
      <div className="heroSection">
        <div className="heroOverlay nature-gradient" />
        <div className="heroContent">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="heroTitle gradient-text"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="heroDescription"
          >
            Comprehensive landscape architecture solutions tailored to your vision
          </motion.p>
        </div>
      </div>

      {/* Services List Section */}
      <div className="servicesSection">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul className="servicesList grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.li
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="serviceListItem bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="serviceImageWrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="serviceImage w-full h-48 object-cover"
                  />
                  <div className="serviceImageOverlay" />
                  <div className="serviceIconWrapper">
                    {service.icon}
                  </div>
                </div>
                <div className="serviceContent p-6">
                  <h3 className="serviceTitle text-xl font-bold mb-2">{service.title}</h3>
                  <p className="serviceDescription text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to={`/services/${toSlug(service.title)}`}
                    className="serviceButton text-white font-medium bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
