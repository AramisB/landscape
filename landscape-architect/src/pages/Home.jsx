import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import {
  FaChalkboardTeacher,
  FaDraftingCompass,
  FaHardHat,
  FaLeaf,
  FaProjectDiagram,
  FaTasks,
  FaWater,
  FaSwimmingPool,
  FaTint,
  FaRecycle,
  FaDrawPolygon,
  FaTools
} from "react-icons/fa";
import { BlogList } from './Blog'; // Adjust the path if needed


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
            <div className="bg-[var(--secondary-blue)] border-2 border-[var(--secondary-blue)] rounded-none px-8 py-4 flex items-center">
              <Link to="/projects">View Portfolio</Link>
            </div>
            <div className="bg-[var(--secondary-blue)] border-2 border-[var(--secondary-blue)] rounded-none px-8 py-4 flex items-center">
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
      <div className="w-screen overflow-hidden px-0 py-8 md:px-0 min-h-[60vh] flex flex-col justify-center rounded-none shadow-lg border-2 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/contactSlider.jpeg')" }}
      >
        <h1 className="heroTitle mb-4">Get In Touch</h1>
        <p className="heroDescription mb-6">
          Let's create something beautiful together.<br />
          Contact us for a free consultation.
        </p>
        <div className="heroButtons flex justify-center">
          <div className="bg-white border-2 rounded-none px-8 py-4 flex items-center">
            <Link to="/contact" className="text-[var(--secondary-blue)] font-semibold">Get In Touch</Link>
          </div>
        </div>
      </div>
    ),
  },
];
const serviceIcons = {
  "Landscape Consultation": FaChalkboardTeacher,
  "Landscape Design": FaDraftingCompass,
  "Landscape Implementation": FaHardHat,
  "Landscape Maintenance": FaLeaf,
  "Master Planning": FaProjectDiagram,
  "Project Management": FaTasks,
  "Water Features": FaWater,
  "Swimming Pools": FaSwimmingPool,
  "Landscape Irrigation": FaTint,
  "Garden Renovation": FaRecycle,
  "Hardscape & Modification": FaDrawPolygon,
  "Landscape Supplies & Products": FaTools,
};

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
      <section className="heroSection relative flex items-center justify-center min-h-[50vh] md:min-h-[60vh] w-full bg-[var(--off-white)] overflow-hidden py-8">
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
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 max-w-7xl py-8">

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
                img: "/services/landscape-consultation.jpg",
                title: "Landscape Consultation",
                desc: "Receive expert guidance and tailored maintenance plans for vibrant, sustainable gardens across Kenya."
              },
              {
                img: "/services/landscape-design.jpg",
                title: "Landscape Design",
                desc: "Transform your space with eco-conscious designs that boost property value and thrive in Kenya’s climate."
              },
              {
                img: "/services/landscape-implementation.jpg",
                title: "Landscape Implementation",
                desc: "We bring your vision to life with expert installation of plants, patios, lighting, and irrigation systems."
              },
              {
                img: "/services/landscape-maintenance.jpg",
                title: "Landscape Maintenance",
                desc: "Keep your outdoor spaces thriving year-round with climate-adapted care, pruning, and soil health solutions."
              },
              {
                img: "/services/master-planning.jpg",
                title: "Master Planning",
                desc: "Strategic large-scale landscape plans tailored for long-term success in residential, commercial, or public spaces."
              },
              {
                img: "/services/project-management.jpg",
                title: "Project Management",
                desc: "Seamless landscape delivery with integrated teams managing timelines, budgets, and quality from start to finish."
              },
              {
                img: "/services/water-features.jpg",
                title: "Water Features",
                desc: "Elevate your landscape with fountains, waterfalls, and ponds—designed for beauty, sustainability, and serenity."
              },
              {
                img: "/services/swimming-pools.jpg",
                title: "Swimming Pools",
                desc: "Custom-built pools with integrated landscaping, energy-efficient systems, and year-round maintenance plans."
              },
              {
                img: "/services/irrigation.jpg",
                title: "Landscape Irrigation",
                desc: "Smart irrigation systems designed to save water and support healthy, lush gardens across diverse Kenyan climates."
              },
              {
                img: "/services/garden-renovation.jpg",
                title: "Garden Renovation",
                desc: "Revive aging gardens with expert soil improvement, native planting, and functional layout redesigns."
              },
              {
                img: "/services/hardscape.jpg",
                title: "Hardscape & Modification",
                desc: "Add structure and style with patios, walls, and outdoor features customized for beauty and durability."
              },
              {
                img: "/services/supplies.jpg",
                title: "Landscape Supplies & Products",
                desc: "Access quality plants, stones, lighting, irrigation kits, and décor to elevate your landscape projects."
              }
            ].map((service, idx) => (
              <motion.div
                className="projectCard"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                key={idx}
              >
                <div className="projectInfo">
                  <h3 className="projectTitle flex items-center gap-2 justify-center">
                    {serviceIcons[service.title] && (
                      <span className="text-[var(--primary-green)]">
                        {React.createElement(serviceIcons[service.title], {
                          className: "w-5 h-5",
                        })}
                      </span>
                    )}
                    {service.title}
                  </h3>
                  <div className="projectImage max-h-[230px] w-full mx-auto mb-2">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="projectCardFooter">
                  <p className="projectDesc">{service.desc}</p>
                  <div className="learnMore">
                    <Link to="/services" className="bg-[var(--secondary-blue)] text-white px-4 py-4 pt-4 rounded-none">
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* We Have Worked With Section */}
      <section className="workedWithSection py-12 bg-[var(--off-white)]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-green)] mb-6">
            We Have Worked With
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Trusted by leading organizations, businesses, and homeowners across Kenya.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="/clients/client1.png" alt="Client 1" className="h-12 object-contain" />
            <img src="/clients/client2.png" alt="Client 2" className="h-12 object-contain" />
            <img src="/clients/client3.png" alt="Client 3" className="h-12 object-contain" />
            <img src="/clients/client4.png" alt="Client 4" className="h-12 object-contain" />
            <img src="/clients/client5.png" alt="Client 5" className="h-12 object-contain" />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blogsSection py-12 bg-[var(--off-white)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="sectionTitle text-3xl font-bold text-[var(--primary-green)] mb-4 text-center">
            Latest Blog Posts
          </h2>
          <p className="sectionDescription text-center text-gray-600 mb-10">
            Get tips, insights, and inspiration from our landscaping experts.
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
              <BlogList />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
