import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
import { posts } from './Blog';
import WhyChooseUs from '../components/WhyChooseUs';
import GetStartedSection from '../components/GetStartedSection';
import { testimonials } from '../components/Testimonials';

const SLIDE_DURATION = 10000;

const slides = [
  {
    key: 'hero',
    content: (
      <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <img src="/hero.webp" alt="Hero background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 flex flex-col items-center text-center px-4 w-full">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">Transforming Spaces and Enhancing Lives</h1>
          <p className="text-lg md:text-xl max-w-3xl mt-4 text-white">We design and build innovative outdoor spaces that harmonize with nature and enhance people's lives.</p>
          <div className="flex flex-wrap justify-center gap-8 mx-auto mt-10">
            <Link to="/projects" className="px-8 py-4 bg-[var(--secondary-blue)] text-white font-semibold hover:bg-[var(--orange)] hover:text-white flex items-center gap-2">
              View Portfolio
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-[var(--secondary-blue)] text-white font-semibold hover:bg-[var(--orange)] hover:text-white flex items-center gap-2">
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
        <img src="/servicesSlider.webp" alt="Services background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 flex flex-col items-center w-full">
          <h1 className="mb-4 text-center text-3xl font-extrabold text-white">Our Services</h1>
          <p className="mb-8 text-lg max-w-3xl text-center text-white">Comprehensive landscape architecture and design services tailored to enhance outdoor living experiences:</p>
          <div className="flex justify-center mt-10">
            <Link to="/services" className="inline-block px-8 py-4 text-white bg-[var(--secondary-blue)] font-semibold transition hover:bg-[var(--orange)] hover:text-white">Explore</Link>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'contact',
    content: (
      <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <img src="/contactSlider.webp" alt="Contact background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 flex flex-col items-center w-full">
          <h1 className="mb-4 text-center text-3xl font-extrabold text-white">Get In Touch</h1>
          <p className="mb-6 text-lg max-w-3xl text-center text-white">Let's create something beautiful together.<br />Contact us for a free consultation.</p>
          <div className="flex justify-center">
            <Link to="/contact" className="inline-block px-8 py-4 text-white bg-[var(--secondary-blue)] font-semibold border-2 hover:bg-[var(--orange)] hover:text-white">Get In Touch</Link>
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
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--off-white)]">
      {/* SEO Meta Tags for Homepage */}
      <Helmet>
        <title>YouLandscape Architects & Consultants - Kenya's Premier Landscape Design Firm</title>
        <meta name="description" content="YouLandscape Architects & Consultants is Kenya's leading landscape design firm specializing in sustainable, elegant outdoor spaces. Over 10 years of award-winning landscaping expertise in Nairobi and across Kenya." />
        <meta name="keywords" content="YouLandscape, landscape architects Kenya, landscape design Nairobi, sustainable landscaping, outdoor design, garden design Kenya, landscape consultants, landscape installation, landscape maintenance" />
        <meta name="author" content="YouLandscape Architects & Consultants" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="YouLandscape Architects & Consultants - Kenya's Premier Landscape Design Firm" />
        <meta property="og:description" content="YouLandscape Architects & Consultants is Kenya's leading landscape design firm specializing in sustainable, elegant outdoor spaces. Over 10 years of award-winning landscaping expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://youlandscape.co.ke" />
        <meta property="og:image" content="https://youlandscape.co.ke/logo.webp" />
        <meta property="og:site_name" content="YouLandscape Architects & Consultants" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YouLandscape Architects & Consultants - Kenya's Premier Landscape Design Firm" />
        <meta name="twitter:description" content="YouLandscape Architects & Consultants is Kenya's leading landscape design firm specializing in sustainable, elegant outdoor spaces. Over 10 years of award-winning landscaping expertise." />
        <meta name="twitter:image" content="https://youlandscape.co.ke/logo.webp" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://youlandscape.co.ke" />
      </Helmet>

      {/* Hero Section with Vertical Slider */}
      <section className="relative flex items-center justify-center min-h-[60vh] w-full bg-white overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-20 flex flex-col items-center justify-center w-full h-full"
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
                src="/aboutUs.webp"
                alt="YouLandscape Team - Professional Landscape Architects and Consultants in Kenya"
                className="w-full h-[32rem] object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
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
                img: "/home/services/landscape-consultation.webp",
                title: "Landscape Consultation",
                desc: "Receive expert guidance and tailored maintenance plans for vibrant, sustainable gardens across Kenya."
              },
              {
                img: "/home/services/landscape-design.webp",
                title: "Landscape Design",
                desc: "Transform your space with eco-conscious designs that boost property value and thrive in Kenya's climate."
              },
              {
                img: "/home/services/landscape-implementation.webp",
                title: "Landscape Implementation",
                desc: "We bring your vision to life with expert installation of plants, patios, lighting, and irrigation systems."
              },
              {
                img: "/home/services/landscape-maintenance.webp",
                title: "Landscape Maintenance",
                desc: "Keep your outdoor spaces thriving year-round with climate-adapted care, pruning, and soil health solutions."
              },
              {
                img: "/home/services/master-planning.webp",
                title: "Master Planning",
                desc: "Strategic large-scale landscape plans tailored for long-term success in residential, commercial, or public spaces."
              },
              {
                img: "/home/services/project-management.webp",
                title: "Project Management",
                desc: "Seamless landscape delivery with integrated teams managing timelines, budgets, and quality from start to finish."
              },
              {
                img: "/home/services/water-features.webp",
                title: "Water Features",
                desc: "Elevate your landscape with fountains, waterfalls, and ponds—designed for beauty, sustainability, and serenity."
              },
              {
                img: "/home/services/swimming-pools.webp",
                title: "Swimming Pools",
                desc: "Custom-built pools with integrated landscaping, energy-efficient systems, and year-round maintenance plans."
              },
              {
                img: "/home/services/irrigation.webp",
                title: "Landscape Irrigation",
                desc: "Smart irrigation systems designed to save water and support healthy, lush gardens across diverse Kenyan climates."
              },
              {
                img: "/home/services/garden-renovation.webp",
                title: "Garden Renovation",
                desc: "Revive aging gardens with expert soil improvement, native planting, and functional layout redesigns."
              },
              {
                img: "/home/services/hardscape.webp",
                title: "Hardscape & Modification",
                desc: "Add structure and style with patios, walls, and outdoor features customized for beauty and durability."
              },
              {
                img: "/home/services/supplies.webp",
                title: "Landscape Supplies & Products",
                desc: "Access quality plants, stones, lighting, irrigation kits, and décor to elevate your landscape projects."
              }
            ].map((service, idx) => {
              // Create slug from title
              const slug = service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
              return (
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
                      alt={`${service.title} - YouLandscape Professional Services`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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
                        to={`/services/${slug}`} 
                        className="inline-block w-full bg-[var(--secondary-blue)] text-white px-4 py-3 rounded-lg hover:bg-[var(--primary-green)] transition-colors duration-300 text-center font-semibold text-sm shadow-md hover:shadow-lg"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* We Have Worked With Section */}
      <section className="py-8 sm:py-12 bg-[var(--pure-white)]">
        <div className="container mx-auto px-2 sm:px-4 max-w-7xl text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--primary-green)] mb-4 sm:mb-6">Some of Our Esteemed Clients</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
            <img src="/about-us/client-logos/land-and-life-foundation.webp" alt="Land and Life Foundation - YouLandscape Client" className="h-16 object-contain mx-auto" sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw" />
            <img src="/about-us/client-logos/pestana-golf-resorts.webp" alt="Pestana Golf Resorts - YouLandscape Client" className="h-16 object-contain mx-auto" sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw" />
            <img src="/about-us/client-logos/benedizione.webp" alt="Benedizione - YouLandscape Client" className="h-16 object-contain mx-auto" sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw" />
            <img src="/about-us/client-logos/uniques-hotel-lodge-camps.webp" alt="Uniques Hotel Lodge Camps - YouLandscape Client" className="h-16 object-contain mx-auto" sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw" />
            <img src="/about-us/client-logos/kisii-county.webp" alt="Kisii County - YouLandscape Client" className="h-16 object-contain mx-auto" sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw" />
            <img src="/about-us/client-logos/amref-health-africa.webp" alt="AMREF Health Africa - YouLandscape Client" className="h-16 object-contain mx-auto" sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-8 sm:py-12 bg-[var(--pure-white)]">
        <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--primary-green)] mb-4 text-center">Latest Blog Posts</h2>
          <p className="text-sm sm:text-base text-center text-gray-600 mb-6 sm:mb-10">Get tips, insights, and inspiration from our landscaping experts.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center w-full">
          {posts.slice(0, 3).map((post) => (
  <article
    key={post.id}
    className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition rounded-lg overflow-hidden flex flex-col"
  >
    <div className="h-56 sm:h-64 overflow-hidden">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="p-4 flex flex-col flex-1">
      <span className="text-xs text-[var(--primary-green)] font-medium mb-1">
        {post.category}
      </span>
      <h3 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2">{post.title}</h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.description}</p>
      <Link
        to={`/blog/${post.slug}`}
        className="mt-auto text-[var(--secondary-blue)] text-sm font-medium hover:underline"
      >
        Read More →
      </Link>
    </div>
  </article>
))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-[var(--off-white)]">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-2xl sm:text-3xl font-bold text-[var(--primary-green)] mb-6">What Our Clients Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.slice(0, 2).map((t, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
          <p className="italic text-gray-700">"{t.message}"</p>
          <div className="mt-4 font-semibold text-[var(--primary-green)]">{t.name}</div>
          <div className="text-sm text-gray-500">{t.location}</div>
        </div>
      ))}
    </div>
    <Link
      to="/about-us/our-company"
      className="inline-block mt-6 text-[var(--secondary-blue)] hover:underline font-medium"
    >
      Read More Testimonials →
    </Link>
  </div>
</section>
      <WhyChooseUs />

      {/* Get Started Section with About Us Our Company width */}
      <div className="w-full md:w-[900px] lg:w-[1200px] mx-auto px-2 pb-12">
        <GetStartedSection />
      </div>
      
    </div>
  );
}
