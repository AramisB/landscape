import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Services.css'; // Import the CSS file directly

const services = [
  {
    id: 1,
    title: 'Residential Design',
    description: 'Creating beautiful, functional outdoor spaces for homes.',
    image: '/services/residential.jpg',
    features: [
      'Custom garden design',
      'Outdoor living spaces',
      'Pool and water features',
      'Sustainable landscaping',
      'Lighting design',
      'Plant selection',
    ],
  },
  {
    id: 2,
    title: 'Commercial Landscapes',
    description: 'Professional landscape solutions for businesses and institutions.',
    image: '/services/commercial.jpg',
    features: [
      'Corporate campus design',
      'Hotel and resort landscaping',
      'Restaurant outdoor spaces',
      'Green roofs',
      'Sustainable design',
      'Maintenance planning',
    ],
  },
  {
    id: 3,
    title: 'Public Spaces',
    description: 'Designing engaging public environments that bring communities together.',
    image: '/services/public.jpg',
    features: [
      'Park design',
      'Urban plazas',
      'Streetscapes',
      'Public gardens',
      'Recreational spaces',
      'Community planning',
    ],
  },
  {
    id: 4,
    title: 'Environmental Planning',
    description: 'Sustainable solutions that protect and enhance natural environments.',
    image: '/services/environmental.jpg',
    features: [
      'Ecological restoration',
      'Native plant design',
      'Stormwater management',
      'Habitat creation',
      'Environmental impact studies',
      'Conservation planning',
    ],
  },
  {
    id: 5,
    title: 'Master Planning',
    description: 'Comprehensive planning for large-scale landscape projects.',
    image: '/services/master-planning.jpg',
    features: [
      'Site analysis',
      'Development planning',
      'Phasing strategies',
      'Sustainability planning',
      'Cost estimation',
      'Project coordination',
    ],
  },
  {
    id: 6,
    title: 'Consultation Services',
    description: 'Expert advice and planning for your landscape projects.',
    image: '/services/consultation.jpg',
    features: [
      'Site evaluation',
      'Design consultation',
      'Project feasibility',
      'Maintenance planning',
      'Sustainability assessment',
      'Budget planning',
    ],
  },
];

export default function Services() {
  return (
    <div className="servicesContainer">
      {/* Hero Section */}
      <div className="heroSection">
        <div className="heroOverlay" />
        <div className="heroContent">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="heroTitle"
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

      {/* Services Grid Section */}
      <div className="servicesSection">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="servicesGrid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="serviceCard"
              >
                <div className="serviceImageWrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="serviceImage"
                  />
                  <div className="serviceImageOverlay" />
                </div>
                <div className="serviceContent">
                  <h3 className="serviceTitle">{service.title}</h3>
                  <p className="serviceDescription">{service.description}</p>
                  <ul className="featuresList">
                    {service.features.map((feature, index) => (
                      <li key={index} className="featureItem">
                        <span className="featureIcon">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="serviceButton">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="ctaSection">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="ctaContent">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="ctaTitle"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="ctaDescription"
            >
              Let's discuss how we can bring your vision to life with our expert landscape architecture services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="ctaButtons"
            >
              <Link to="/contact" className="primaryButton">
                Schedule a Consultation
              </Link>
              <Link to="/projects" className="secondaryButton">
                View Our Portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
