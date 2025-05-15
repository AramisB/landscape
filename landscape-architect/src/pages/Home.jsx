import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Import the CSS file directly

// Icons
import { FaTree, FaWater, FaSun, FaLeaf, FaHome, FaSeedling } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="homeContainer">
      {/* Hero Section */}
      <div className="heroSection">
        <div className="heroContent">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heroTitle gradient-text"
          >
            Transforming Spaces and Enhancing Lives
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heroDescription"
          >
            We design and build innovative outdoor spaces that harmonize with nature and enhance
            people's lives.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heroButtons"
          >
            <Link to="/projects" className="primaryButton">
              View Portfolio
            </Link>
            <Link to="/contact" className="secondaryButton">
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
        <div className="heroImageWrapper">
          <img
            src="/hero.jpg"
            alt="Hero background"
            className="heroImage"
          />
          <div className="heroOverlay nature-gradient" />
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="featuredProjects section-padding">
        <div className="sectionHeader">
          <h2 className="sectionTitle gradient-text">Featured Projects</h2>
          <p className="sectionDescription">
            Discover our latest and most impactful landscape designs.
          </p>
        </div>
        <div className="projectsGrid">
          <motion.div 
            className="projectCard card-hover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="projectImage">
              <img src="/home/garden.jpg" alt="Modern Garden Design" />
            </div>
            <div className="projectInfo">
              <h3>Modern Garden Design</h3>
              <p>Contemporary outdoor living space with sustainable features</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="projectCard card-hover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="projectImage">
              <img src="/home/water-feature.jpg" alt="Water Feature Installation" />
            </div>
            <div className="projectInfo">
              <h3>Water Feature Installation</h3>
              <p>Serene water elements that transform your garden</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="projectCard card-hover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="projectImage">
              <img src="/home/rooftop-garden.jpg" alt="Rooftop Garden" />
            </div>
            <div className="projectInfo">
              <h3>Rooftop Garden</h3>
              <p>Urban oasis with native plants and sustainable design</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="servicesSection section-padding">
        <div className="sectionHeader">
          <h2 className="sectionTitle gradient-text">Our Services</h2>
          <p className="sectionDescription">
            Comprehensive landscape architecture and design services.
          </p>
        </div>
        <div className="servicesGrid">
          <motion.div 
            className="serviceCard card-hover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="serviceIcon">
              <FaTree className="w-12 h-12 text-[var(--vibrant-green)]" />
            </div>
            <h3>Landscape Design</h3>
            <p>Custom designs that transform your outdoor space</p>
          </motion.div>

          <motion.div 
            className="serviceCard card-hover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="serviceIcon">
              <FaWater className="w-12 h-12 text-[var(--vibrant-green)]" />
            </div>
            <h3>Water Features</h3>
            <p>Design and installation of ponds, fountains, and streams</p>
          </motion.div>

          <motion.div 
            className="serviceCard card-hover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="serviceIcon">
              <FaSun className="w-12 h-12 text-[var(--vibrant-green)]" />
            </div>
            <h3>Outdoor Lighting</h3>
            <p>Strategic lighting to enhance your landscape at night</p>
          </motion.div>

          <motion.div 
            className="serviceCard card-hover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="serviceIcon">
              <FaLeaf className="w-12 h-12 text-[var(--vibrant-green)]" />
            </div>
            <h3>Plant Selection</h3>
            <p>Expert guidance on native and sustainable plant choices</p>
          </motion.div>

          <motion.div 
            className="serviceCard card-hover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="serviceIcon">
              <FaHome className="w-12 h-12 text-[var(--vibrant-green)]" />
            </div>
            <h3>Garden Maintenance</h3>
            <p>Regular care to keep your landscape looking its best</p>
          </motion.div>

          <motion.div 
            className="serviceCard card-hover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="serviceIcon">
              <FaSeedling className="w-12 h-12 text-[var(--vibrant-green)]" />
            </div>
            <h3>Sustainable Design</h3>
            <p>Eco-friendly solutions for your outdoor space</p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="ctaSection">
        <div className="ctaContent">
          <h2 className="ctaTitle gradient-text">Ready to Transform Your Space?</h2>
          <p className="ctaDescription">
            Let's create something beautiful together. Contact us for a free consultation.
          </p>
          <Link to="/contact" className="ctaButton">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
