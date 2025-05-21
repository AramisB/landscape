import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

// Icons
import { FaTree, FaWater, FaSun, FaLeaf, FaHome, FaSeedling } from 'react-icons/fa';

const SLIDE_DURATION = 10000;

const slides = [
  {
    key: 'hero',
    content: (
      <>
        <div className="heroContent">
          <h1 className="heroTitle">Transforming Spaces and Enhancing Lives</h1>
          <p className="heroDescription">
            We design and build innovative outdoor spaces that harmonize with nature and enhance people's lives.
          </p>
          <div className="heroButtons flex flex-wrap justify-center gap-8 mx-auto mt-6">
            <div className="bg-white border-2 border-[var(--secondary-blue)] rounded-none px-8 py-4 flex items-center">
              <Link to="/projects">View Portfolio</Link>
            </div>
            <div className="bg-white border-2 border-[var(--secondary-blue)] rounded-none px-8 py-4 flex items-center">
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="heroImageWrapper">
          <img src="/hero.jpg" alt="Hero background" className="heroImage" />
        </div>
      </>
    ),
  },
  {
    key: 'services',
    content: (
      <div
        className="w-screen overflow-hidden min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 border-2 border-[var(--secondary-blue)] shadow-lg rounded-none text-center relative bg-cover bg-center"
        style={{ backgroundImage: "url('/servicesSlider.jpeg')" }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="heroTitle mb-4 text-center text-4xl font-extrabold text-[var(--pure-white)]">
            Our Services
          </h1>
          <p className="heroDescription mb-8 text-lg max-w-3xl text-center text-[var(--pure-white)]">
            Comprehensive landscape architecture and design services tailored to enhance outdoor living experiences:
          </p>
          <div className="heroButtons flex justify-center mt-10">
            <div className="bg-white border-2 border-[var(--secondary-blue)] rounded-none px-8 py-4 flex items-center">
              <Link to="/services" className="text-[var(--secondary-blue)] font-semibold">Explore</Link>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'contact',
    content: (
      <div className="w-screen overflow-hidden px-0 py-8 md:px-0 min-h-[80vh] flex flex-col justify-center rounded-none shadow-lg border-2 border-[var(--secondary-blue)] relative bg-cover bg-center"
        style={{ backgroundImage: "url('/contactSlider.jpeg')" }}
      >
        <h1 className="heroTitle mb-4">Get In Touch</h1>
        <p className="heroDescription mb-6">
          Let's create something beautiful together.<br />
          Contact us for a free consultation.
        </p>
        <div className="heroButtons flex justify-center">
          <div className="bg-white border-2 border-[var(--secondary-blue)] rounded-none px-8 py-4 flex items-center">
            <Link to="/contact" className="text-[var(--secondary-blue)] font-semibold">Get In Touch</Link>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homeContainer">
      {/* Hero Section with Vertical Slider */}
      <section className="heroSection relative flex items-center justify-center min-h-[60vh] md:min-h-[80vh] w-full bg-[var(--off-white)] overflow-hidden">
        {/* Optional: Overlay for readability */}
        {slides[current].key === 'hero' && (
          <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].key}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4 py-8"
          >
            {slides[current].content}
          </motion.div>
        </AnimatePresence>
        {/* Hero background image, only for the hero slide */}
        {slides[current].key === 'hero' && (
          <img
            src="/hero.jpg"
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ objectPosition: 'center' }}
          />
        )}
      </section>

      <div className="flex justify-center gap-2 mt-4 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-[var(--secondary-blue)]' : 'bg-gray-300'} transition`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Featured Projects Section */}
      <div className="featuredProjects section-padding">
        <div className="sectionHeader">
          <h2 className="sectionTitle gradient-text">Featured Projects</h2>
          <p className="sectionDescription">
            Discover our latest and most impactful landscape designs.
          </p>
        </div>

        <div className="projectsAndProcess">
          {/* Projects Grid */}
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

          {/* Process Tree Image */}
          <div className="processTree">
            <img src="/processTree.png" alt="Our Process" />
          </div>
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
