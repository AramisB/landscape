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
        className="w-screen overflow-hidden min-h-[60vh] flex flex-col items-center justify-center px-4 py-12 border-2 border-[var(--secondary-blue)] shadow-lg rounded-none text-center relative bg-cover bg-center"
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
      <div className="w-screen overflow-hidden px-0 py-8 md:px-0 min-h-[60vh] flex flex-col justify-center rounded-none shadow-lg border-2 border-[var(--secondary-blue)] relative bg-cover bg-center"
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
      <section className="heroSection relative flex items-center justify-center min-h-[60vh] md:min-h-[60vh] w-full bg-[var(--off-white)] overflow-hidden">
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

      {/* About Section */}
      <section className="aboutSection py-16 bg-[var(--off-white)]" id="about">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 max-w-7xl">

          {/* Left Image */}
          <div className="aboutImage w-full md:w-1/2">
            <img
              src="/aboutUs.png"
              alt="About our landscaping team"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="aboutContent w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[var(--primary-green)] mb-4">About Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              YouLandscape Architects and Consultants is a leading landscape architecture firm in Kenya, specializing in innovative, sustainable outdoor designs, master planning, and eco-conscious landscaping solutions. We blend artistry, engineering, and environmental science to create functional, stunning landscapes for homes, businesses, and public spaces.
            </p>
            <div className='aboutRef'>
              <a href="/about-us"> Discover More </a>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Projects Section */}
      <div className="featuredProjects section-padding">
        <div className="sectionHeader">
          <h2 className="sectionTitle gradient-text">Our Professional Services</h2>
          <p className="sectionDescription">
            Discover the range of services we offer to transform your outdoor spaces.
          </p>
        </div>

        <div className="projectsAndProcess">
          {/* Services Grid (centered project cards) */}
          <div className="projectsGrid">
            {[
              {
                img: "/home/garden.jpg",
                title: "Landscape Design",
                desc: "Custom designs that transform your outdoor space"
              },
              {
                img: "/home/water-feature.jpg",
                title: "Water Features",
                desc: "Ponds, fountains, and streams installation"
              },
              {
                img: "/outdoorLighting.jpeg",
                title: "Outdoor Lighting",
                desc: "Enhance your landscape at night"
              },
              {
                img: "/plantSelection.jpeg",
                title: "Plant Selection",
                desc: "Expert guidance on plant choices"
              },
              {
                img: "/gardenMaintenance.png",
                title: "Garden Maintenance",
                desc: "Regular care for your landscape"
              },
              {
                img: "/home/service-sustainable.jpg",
                title: "Sustainable Design",
                desc: "Eco-friendly landscape solutions"
              },
              {
                img: "/hardscaping.jpeg",
                title: "Hardscaping",
                desc: "Patios, walkways, and retaining walls"
              },
              {
                img: "/home/service-irrigation.jpg",
                title: "Irrigation Systems",
                desc: "Efficient watering solutions"
              },
              {
                img: "/home/service-seasonal.jpg",
                title: "Seasonal Planting",
                desc: "Colorful displays for every season"
              },
              {
                img: "/home/service-soil.jpg",
                title: "Soil Improvement",
                desc: "Soil testing and amendments"
              },
              {
                img: "/home/outdoorLiving.jpeg",
                title: "Outdoor Living Spaces",
                desc: "Decks, pergolas, and seating areas"
              },
              {
                img: "/home/service-edible.jpg",
                title: "Edible Gardens",
                desc: "Grow your own fruits and vegetables"
              },
            ].map((service, idx) => (
              <motion.div
                className="projectCard card-hover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                key={idx}
              >
                <div className="projectInfo">
                  <h3 className="projectTitle">{service.title}</h3>
                  <div className="projectImage">
                    <img className="projectImg" src={service.img} alt={service.title} />
                  </div>
                  <p className="projectDesc">{service.desc}</p>
                </div>
              </motion.div>

            ))}
          </div>
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
