import { useState, useRef, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import AboutUsDetails from './AboutUsDetails';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us', dropdown: true },
  { name: 'Projects', href: '/projects' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
  { name: 'Get A Quote', href: '#' },
];

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [aboutMobileAccordionOpen, setAboutMobileAccordionOpen] = useState(false);
  const aboutDropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target)
      ) {
        setAboutDropdownOpen(false);
      }
    }
    if (aboutDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [aboutDropdownOpen]);

  // Get current page info for SEO
  const getCurrentPageInfo = () => {
    const path = location.pathname;
    if (path === '/') {
      return {
        title: 'YouLandscape Architects & Consultants - Kenya\'s Premier Landscape Design Firm',
        description: 'YouLandscape Architects & Consultants is Kenya\'s leading landscape design firm specializing in sustainable, elegant outdoor spaces. Over 10 years of award-winning landscaping expertise.',
        keywords: 'YouLandscape, landscape architects Kenya, landscape design Nairobi, sustainable landscaping, outdoor design, garden design Kenya'
      };
    } else if (path.startsWith('/about-us')) {
      return {
        title: 'About Us | YouLandscape Architects & Consultants',
        description: 'Discover YouLandscape Architects & Consultants - Kenya\'s premier landscape architecture firm. Learn about our team, mission, and 10+ years of experience in sustainable landscape design.',
        keywords: 'YouLandscape, about us, landscape architects Kenya, landscape design Nairobi, sustainable landscaping'
      };
    } else if (path.startsWith('/services')) {
      return {
        title: 'Services | YouLandscape Architects & Consultants',
        description: 'Comprehensive landscape services including design, installation, maintenance, and consultation. Professional landscaping solutions across Kenya.',
        keywords: 'landscape services, landscape design, landscape installation, landscape maintenance, landscaping Kenya'
      };
    } else if (path.startsWith('/projects')) {
      return {
        title: 'Projects | YouLandscape Architects & Consultants',
        description: 'Explore our portfolio of successful landscape projects across Kenya. Residential, commercial, and institutional landscape designs.',
        keywords: 'landscape projects, portfolio, landscape design examples, landscaping Kenya, outdoor projects'
      };
    } else if (path.startsWith('/contact')) {
      return {
        title: 'Contact Us | YouLandscape Architects & Consultants',
        description: 'Contact YouLandscape Architects & Consultants for professional landscape design and consultation services in Kenya.',
        keywords: 'contact YouLandscape, landscape consultation, landscape design Kenya, landscaping services'
      };
    }
    return {
      title: 'YouLandscape Architects & Consultants',
      description: 'Kenya\'s premier landscape design firm specializing in sustainable, elegant outdoor spaces.',
      keywords: 'YouLandscape, landscape architects Kenya, landscape design'
    };
  };

  const pageInfo = getCurrentPageInfo();

  return (
    <>
      {/* Global SEO Meta Tags */}
      <Helmet>
        <title>{pageInfo.title}</title>
        <meta name="description" content={pageInfo.description} />
        <meta name="keywords" content={pageInfo.keywords} />
        <meta name="author" content="YouLandscape Architects & Consultants" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageInfo.title} />
        <meta property="og:description" content={pageInfo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://youlandscape.co.ke${location.pathname}`} />
        <meta property="og:image" content="https://youlandscape.co.ke/logo.webp" />
        <meta property="og:site_name" content="YouLandscape Architects & Consultants" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageInfo.title} />
        <meta name="twitter:description" content={pageInfo.description} />
        <meta name="twitter:image" content="https://youlandscape.co.ke/logo.webp" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://youlandscape.co.ke${location.pathname}`} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#2F855A" />
        
        {/* Business Information */}
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.2921;36.8219" />
        <meta name="ICBM" content="-1.2921, 36.8219" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-white">
        {/* Contact Strip */}
        <div className="bg-[var(--primary-green)] border-b text-white text-xs">
          <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
            {/* Contact Info */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="https://www.google.com/maps/place/KUSCCO,+Centre,+Nairobi,+KE"
                target="_blank"
                rel="noopener noreferrer"
                className="locationLink flex items-center gap-1 text-white font-normal"
              >
                KUSCCO Centre - Nairobi Region
              </a>
              <a href="tel:+254707301563" className="contactLink flex items-center gap-1 text-white font-normal">
                +254707301563
              </a>
              <a href="mailto:info@youlandscape.co.ke" className="contactLink flex items-center gap-1 text-white font-normal">
                info@youlandscape.co.ke
              </a>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/share/1AeahKt66s/" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-sm">
                <FaFacebook />
              </a>
              <a href="https://x.com/YouLandscapeArc?t=13WdP8KbrnBK8pwm7g-yOQ&s=08" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-sm">
                <FaTwitter />
              </a>
              <a href="https://youtube.com/@youlandscapearchitect?si=1z1QaenWL71j1Ibn" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-sm">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/youlandscapearc?igsh=MXdtdXN3eWFwb3o2cg==" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-sm">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/youlandscape-architects-257980373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-sm">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/254707301563" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-sm">
                <FaWhatsapp />
              </a> 
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white border-b shadow-sm relative z-50 sticky top-0">
          <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-1">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" aria-label="Home">
                <img
                  src="/logo.webp"
                  alt="YouLandscape Logo - Professional Landscape Architecture Services"
                  className="h-20 w-auto"
                  onError={(e) => {
                    console.error('Logo failed to load:', e.target.src);
                    e.target.src = '/logo.webp';
                  }}
                />
              </Link>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              {navigation.map((item) =>
                item.name === 'About Us' ? (
                  <div
                    key={item.name}
                    className="relative"
                    ref={aboutDropdownRef}
                  >
                    <button
                      className="flex items-center gap-1 text-[var(--secondary-blue)] font-medium text-sm hover:underline hover:text-[var(--secondary-green)] transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        setAboutDropdownOpen((open) => !open);
                      }}
                    >
                      {item.name}
                      <ChevronDownIcon className="h-4 w-4" />
                    </button>
                    {aboutDropdownOpen && (
                      <div
                        className="absolute left-0 mt-2 w-54 bg-white border rounded shadow-lg z-50"
                        style={{ minWidth: '200px' }}
                      >
                        {AboutUsDetails.map((sec) => (
                          <Link
                            key={sec.id}
                            to={`/about-us/${sec.id}`}
                            className="block px-4 py-2 text-[var(--secondary-blue)] hover:bg-[var(--light-green)] hover:text-white text-sm"
                            onClick={() => setAboutDropdownOpen(false)}
                          >
                            {sec.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={item.name === 'Get A Quote' ? (e) => { e.preventDefault(); setQuoteModalOpen(true); } : undefined}
                    className={`${item.name === 'Get A Quote'
                      ? 'text-[var(--secondary-blue)] bg-[var(--off-white)] px-4 py-2 text-sm font-semibold border-2 border-[var(--secondary-blue)] hover:bg-[var(--light-green)]'
                      : 'text-[var(--secondary-blue)] font-medium text-sm hover:underline hover:text-[var(--secondary-green)]'
                      } transition-colors`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                aria-label="Open menu"
              >
                <Bars3Icon className="h-8 w-8 text-green-800" />
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
            <Dialog.Panel className="fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-lg z-50 flex flex-col p-6">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="self-end mb-6 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                aria-label="Close menu"
              >
                <XMarkIcon className="h-8 w-8 text-green-800" />
              </button>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col gap-6">
                {navigation.map((item) =>
                  item.name === 'About Us' ? (
                    <div key={item.name}>
                      <button
                        className="flex items-center w-full justify-between text-green-800 font-semibold text-sm hover:underline transition-colors focus:outline-none"
                        onClick={() => setAboutMobileAccordionOpen((open) => !open)}
                        aria-expanded={aboutMobileAccordionOpen}
                        aria-controls="about-mobile-accordion"
                        type="button"
                      >
                        <span>About Us</span>
                        <ChevronDownIcon className={`h-4 w-4 ml-2 transition-transform ${aboutMobileAccordionOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {aboutMobileAccordionOpen && (
                        <div id="about-mobile-accordion" className="pl-4 mt-2 flex flex-col gap-2">
                          {AboutUsDetails.map((sec) => (
                            <Link
                              key={sec.id}
                              to={`/about-us/${sec.id}`}
                              className="text-green-800 font-normal text-sm hover:underline transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {sec.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={item.name === 'Get A Quote' ? (e) => { e.preventDefault(); setQuoteModalOpen(true); } : () => setMobileMenuOpen(false)}
                      className="text-green-800 font-semibold text-sm hover:underline transition-colors"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        {/* Get A Quote Modal */}
<Dialog as="div" open={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} className="relative z-50">
  <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <Dialog.Panel className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative text-gray-800 space-y-6">
      <h1 className="text-2xl font-bold text-center">Get A Quote Now</h1>
      <p className="text-sm text-center">
        Contact us now to get a quote or book a site visit. We're here to help you transform your outdoor space!
      </p>

      <div className="space-y-4">
        <a
          href="mailto:info@youlandscape.co.ke"
          className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-[var(--light-green)] hover:bg-[var(--orange)] rounded"
        >
          <FaEnvelope />
          Email Us
        </a>
        <a
          href="tel:+254707301563"
          className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-[var(--light-green)] hover:bg-[var(--orange)] rounded"
        >
          <FaPhoneAlt />
          Call Us
        </a>
        <a
          href="https://wa.me/254707301563"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-[var(--light-green)] hover:bg-[var(--orange)] rounded"
        >
          <FaWhatsapp />
          Message on WhatsApp
        </a>
      </div>

      <div className="flex justify-end pt-4">
        <button
          onClick={() => setQuoteModalOpen(false)}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Close
        </button>
      </div>
    </Dialog.Panel>
  </div>
</Dialog>


        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-[var(--primary-green)] text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* About Us + Socials */}
              <div>
                <h4 className="text-lg font-bold mb-3">About Us</h4>
                <p className="mb-4 text-sm leading-relaxed">
                  YouLandscape is Kenya's premier landscape architecture firm, creating sustainable, breathtaking outdoor spaces tailored to your vision.
                </p>
                <div className="flex gap-3 mt-2">
                  <a href="https://www.facebook.com/share/1AeahKt66s/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orange)] transition"><FaFacebook /></a>
                  <a href="https://x.com/YouLandscapeArc?t=13WdP8KbrnBK8pwm7g-yOQ&s=08" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orange)] transition"><FaTwitter /></a>
                  <a href="https://www.instagram.com/youlandscapearc?igsh=MXdtdXN3eWFwb3o2cg==" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orange)] transition"><FaInstagram /></a>
                  <a href="https://www.linkedin.com/in/youlandscape-architects-257980373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orange)] transition"><FaLinkedin /></a>
                  <a href="https://youtube.com/@youlandscapearchitect?si=1z1QaenWL71j1Ibn" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orange)] transition"><FaYoutube /></a>
                  <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orange)] transition"><FaWhatsapp /></a>
                </div>
              </div>
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-bold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/services" className="hover:underline hover:text-[var(--orange)] transition">Services</Link></li>
                  <li><Link to="/projects" className="hover:underline hover:text-[var(--orange)] transition">Projects</Link></li>
                  <li><Link to="/about-us/our-company" className="hover:underline hover:text-[var(--orange)] transition">About YouLandscape</Link></li>
                  <li><Link to="/contact" className="hover:underline hover:text-[var(--orange)] transition">Contact</Link></li>
                  <li><Link to="/privacy-policy" className="hover:underline hover:text-[var(--orange)] transition">Privacy Policy</Link></li>
                </ul>
              </div>
              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-bold mb-3">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li>Email: <a href="mailto:info@youlandscape.co.ke" className="hover:underline hover:text-[var(--orange)] transition">info@youlandscape.co.ke</a></li>
                  <li>Phone: <a href="tel:+254707301563" className="hover:underline hover:text-[var(--orange)] transition">+254707301563</a></li>
                  <li>Address: <a href="https://www.google.com/maps/place/KUSCCO,+Centre,+Nairobi,+KE" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[var(--orange)] transition">KUSCCO Centre - Nairobi Region</a></li>
                  <li>Open: Mon - Sat, 8:00am - 6:00pm</li>
                </ul>
              </div>
              {/* Newsletter */}
              <div>
                <h4 className="text-lg font-bold mb-3">Newsletter</h4>
                <p className="mb-3 text-sm">Get the latest updates and landscaping tips straight to your inbox.</p>
                <form className="flex flex-col sm:flex-row gap-2">
                  <input type="email" placeholder="Your email address" className="px-3 py-2 rounded-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--orange)] w-full sm:w-auto" />
                  <button type="submit" className="bg-[var(--orange)] text-white px-4 py-2 rounded-none font-semibold hover:bg-[var(--light-green)] transition">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-10 border-t border-white/30 pt-4">
              <p className="text-white text-xs md:text-sm">
                © {new Date().getFullYear()} YouLandscape. All rights reserved.
              </p>
              <div className="flex gap-4 text-white text-xs md:text-sm">
                <Link to="/terms-of-use" className="hover:underline hover:text-[var(--orange)] transition">Terms of use</Link>
                <span className="hidden md:inline">|</span>
                <Link to="/privacy-policy" className="hover:underline hover:text-[var(--orange)] transition">Privacy Policy</Link>
                <span className="hidden md:inline">|</span>
                <Link to="/cookie-policy" className="hover:underline hover:text-[var(--orange)] transition">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}