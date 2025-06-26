import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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
import { BlogList } from './Blog';
import WhyChooseUs from '../components/WhyChooseUs';
import GetStartedSection from '../components/GetStartedSection';

const SLIDE_DURATION = 10000;

const slides = [
  {
    key: 'hero',
    content: (
      <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <img src="/hero.jpg" alt="Hero background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 flex flex-col items-center text-center px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Transforming Spaces and Enhancing Lives</h1>
          <p className="text-lg md:text-xl max-w-3xl mt-4 text-white">We design and build innovative outdoor spaces that harmonize with nature and enhance people's lives.</p>
          <div className="flex flex-wrap justify-center gap-8 mx-auto mt-10">
            <Link to="/projects" className="px-8 py-4 rounded bg-[var(--secondary-blue)] text-white font-semibold shadow hover:bg-[var(--primary-green)] flex items-center gap-2">
              View Portfolio
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded bg-white text-[var(--secondary-blue)] font-semibold border-2 border-[var(--secondary-blue)] shadow hover:bg-[var(--primary-green)] hover:text-white flex items-center gap-2">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: 'services',
    content: (
      <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <img src="/servicesSlider.jpeg" alt="Services background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 flex flex-col items-center w-full">
          <h1 className="mb-4 text-center text-3xl font-extrabold text-white">Our Services</h1>
          <p className="mb-8 text-lg max-w-3xl text-center text-white">Comprehensive landscape architecture and design services tailored to enhance outdoor living experiences:</p>
          <div className="flex justify-center mt-10">
            <Link to="/services" className="inline-block px-8 py-4 rounded bg-white text-[var(--secondary-blue)] font-semibold border-2 border-[var(--secondary-blue)] shadow transition hover:bg-[var(--primary-green)] hover:text-white">Explore</Link>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'contact',
    content: (
      <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <img src="/contactSlider.jpeg" alt="Contact background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 flex flex-col items-center w-full">
          <h1 className="mb-4 text-center text-3xl font-extrabold text-white">Get In Touch</h1>
          <p className="mb-6 text-lg max-w-3xl text-center text-white">Let's create something beautiful together.<br />Contact us for a free consultation.</p>
          <div className="flex justify-center">
            <Link to="/contact" className="inline-block px-8 py-4 rounded bg-white text-[var(--secondary-blue)] font-semibold border-2 border-[var(--secondary-blue)] shadow transition hover:bg-[var(--primary-green)] hover:text-white">Get In Touch</Link>
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
    <div className="min-h-screen flex flex-col bg-[var(--off-white)]">
      {/* Hero Section with Vertical Slider */}
      <section className="relative flex items-center justify-center min-h-[60vh] w-full bg-white overflow-hidden py-4 px-2 sm:px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].key}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-20 flex flex-col items-center justify-center w-full h-full px-2 sm:px-4 py-8"
          >
            {slides[current].content}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* About Section */}
      <section className="py-10 sm:py-16 bg-[var(--pure-white)] w-full" id="about">
        <div className="mx-auto px-2 sm:px-4 flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-12 max-w-5xl py-6 sm:py-8 w-full">
          {/* Left Image - guaranteed to stretch */}
          <div className="w-full md:w-1/2 flex flex-col h-full">
            <div className="flex-1 flex">
              <img
                src="/aboutUs.png"
                alt="About our landscaping team"
                className="w-full h-[32rem] object-cover"
              />
            </div>
          </div>
          {/* Right Content - full height, button at bottom */}
          <div className="w-full md:w-1/2 flex flex-col justify-between text-center md:text-left h-full">
            <div>
              <h2 className="text-2xl font-bold text-[var(--primary-green)] mb-4">About Us</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                <span className="font-bold text-[var(--secondary-blue)]">YOU</span>Landscape Architects and Consultants is a leading Kenyan landscaping company with over 10 years of experience. Our team of licensed landscape architects, horticulturists, and environmental design consultants is dedicated to crafting outdoor spaces that reflect <span className="font-bold text-[var(--secondary-blue)]">YOU</span>—your lifestyle, your space, and your unique vision. We transform properties across Kenya using sustainable, innovative design principles.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                We deliver exceptional gardens and landscapes for homes and businesses, blending artistry, engineering, and eco-friendly practices. Our mission is to provide quality, affordable, and personalized landscaping solutions, ensuring your satisfaction from concept to completion.
              </p>
            </div>
            <div>
              <Link
                to="/about-us/our-company"
                className="inline-block bg-[var(--secondary-blue)] text-white px-6 py-3 font-semibold text-lg shadow hover:bg-[var(--primary-green)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--primary-green)] mb-2">Our Professional Services</h2>
            <p className="text-base sm:text-xl text-gray-600 mt-4">Discover the range of services we offer to transform your outdoor spaces.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                img: "/home/services/landscape-consultation.jpeg",
                title: "Landscape Consultation",
                desc: "Receive expert guidance and tailored maintenance plans for vibrant, sustainable gardens across Kenya."
              },
              {
                img: "/home/services/landscape-design.jpg",
                title: "Landscape Design",
                desc: "Transform your space with eco-conscious designs that boost property value and thrive in Kenya's climate."
              },
              {
                img: "/home/services/landscape-implementation.jpg",
                title: "Landscape Implementation",
                desc: "We bring your vision to life with expert installation of plants, patios, lighting, and irrigation systems."
              },
              {
                img: "/home/services/landscape-maintenance.jpeg",
                title: "Landscape Maintenance",
                desc: "Keep your outdoor spaces thriving year-round with climate-adapted care, pruning, and soil health solutions."
              },
              {
                img: "/home/services/master-planning.jpg",
                title: "Master Planning",
                desc: "Strategic large-scale landscape plans tailored for long-term success in residential, commercial, or public spaces."
              },
              {
                img: "/home/services/project-management.png",
                title: "Project Management",
                desc: "Seamless landscape delivery with integrated teams managing timelines, budgets, and quality from start to finish."
              },
              {
                img: "/home/services/water-features.jpeg",
                title: "Water Features",
                desc: "Elevate your landscape with fountains, waterfalls, and ponds—designed for beauty, sustainability, and serenity."
              },
              {
                img: "/home/services/swimming-pools.jpeg",
                title: "Swimming Pools",
                desc: "Custom-built pools with integrated landscaping, energy-efficient systems, and year-round maintenance plans."
              },
              {
                img: "/home/services/irrigation.jpg",
                title: "Landscape Irrigation",
                desc: "Smart irrigation systems designed to save water and support healthy, lush gardens across diverse Kenyan climates."
              },
              {
                img: "/home/services/garden-renovation.jpeg",
                title: "Garden Renovation",
                desc: "Revive aging gardens with expert soil improvement, native planting, and functional layout redesigns."
              },
              {
                img: "/home/services/hardscape.jpeg",
                title: "Hardscape & Modification",
                desc: "Add structure and style with patios, walls, and outdoor features customized for beauty and durability."
              },
              {
                img: "/home/services/supplies.jpeg",
                title: "Landscape Supplies & Products",
                desc: "Access quality plants, stones, lighting, irrigation kits, and décor to elevate your landscape projects."
              }
            ].map((service, idx) => (
              <motion.div
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
                key={idx}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Title with Icon */}
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--primary-green)] mb-3">
                    {serviceIcons[service.title] && (
                      <span className="text-[var(--secondary-blue)]">
                        {React.createElement(serviceIcons[service.title], {
                          className: "w-5 h-5"
                        })}
                      </span>
                    )}
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">{service.desc}</p>
                  
                  {/* Button */}
                  <div className="mt-auto">
                    <Link 
                      to="/services" 
                      className="inline-block w-full bg-[var(--secondary-blue)] text-white px-4 py-3 rounded-lg hover:bg-[var(--primary-green)] transition-colors duration-300 text-center font-semibold text-sm shadow-md hover:shadow-lg"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We Have Worked With Section */}
      <section className="py-8 sm:py-12 bg-[var(--pure-white)]">
        <div className="container mx-auto px-2 sm:px-4 max-w-7xl text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--primary-green)] mb-4 sm:mb-6">Some of Our Esteemed Clients</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
            <img src="/about-us/client-logos/land-and-life-foundation.jpeg" alt="Land and Life Foundation" className="h-16 object-contain mx-auto" />
            <img src="/about-us/client-logos/pestana-golf-resorts.jpeg" alt="Pestana Golf Resorts" className="h-16 object-contain mx-auto" />
            <img src="/about-us/client-logos/benedizione.jpeg" alt="Benedizione" className="h-16 object-contain mx-auto" />
            <img src="/about-us/client-logos/uniques-hotel-lodge-camps.jpeg" alt="Uniques Hotel Lodge Camps" className="h-16 object-contain mx-auto" />
            <img src="/about-us/client-logos/kisii-county.jpeg" alt="Kisii County" className="h-16 object-contain mx-auto" />
            <img src="/about-us/client-logos/amref-health-africa.jpeg" alt="AMREF Health Africa" className="h-16 object-contain mx-auto" />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-8 sm:py-12 bg-[var(--pure-white)]">
        <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--primary-green)] mb-4 text-center">Latest Blog Posts</h2>
          <p className="text-sm sm:text-base text-center text-gray-600 mb-6 sm:mb-10">Get tips, insights, and inspiration from our landscaping experts.</p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center w-full">
              <BlogList />
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />

      {/* Get Started Section with reduced width */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 pb-12">
        <GetStartedSection />
      </div>
      
    </div>
  );
}
