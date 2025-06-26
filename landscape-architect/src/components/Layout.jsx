import { useState, useRef, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
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

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [aboutMobileAccordionOpen, setAboutMobileAccordionOpen] = useState(false);
  const aboutDropdownRef = useRef(null);

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

  return (
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
            <a href="mailto:info@youlandscape.com" className="contactLink flex items-center gap-1 text-white font-normal">
              info@youlandscape.com
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-sm">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-sm">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-sm">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-sm">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-sm">
              <FaLinkedin />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-sm">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b shadow-sm relative z-50 sticky top-0">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" aria-label="Home">
              <div className="p-2 bg-[var(--pure-white)]">
                <img
                  src="/logo.png"
                  alt="Youlandscape Logo"
                  className="h-28 w-auto" />
              </div>
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
          <Dialog.Panel className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 relative">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Section */}
              <div className="flex-1 text-gray-800 space-y-6">
                <h1 className="text-2xl font-bold">Get A Quote Now</h1>
                <p className="text-sm">
                  Contact us now to Get A Quote or a site visit.
                </p>
                <p className="text-sm flex items-center gap-2">
                  <FaPhoneAlt className="text-green-700" />
                  <strong>Phone:</strong> +254707301563
                </p>
                <p className="text-sm flex items-center gap-2">
                  <FaEnvelope className="text-green-700" />
                  <strong>Email:</strong> info@youlandscape.com
                </p>
                <p className="text-sm">
                  We are here to help you transform your outdoor space!
                </p>
              </div>

              {/* Right Section */}
              <div className="flex-1 bg-[var(--primary-green)] p-6 shadow-md border-2">
                <h2 className="text-xl font-semibold mb-4 text-white">Request a Quote</h2>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-white">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-white focus:border-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-white focus:border-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-white">
                      Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-white focus:border-white"
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setQuoteModalOpen(false)}
                      className="mr-2 px-4 py-2 text-sm font-medium text-white bg-[var(--light-green)] hover:bg-[var(--orange)]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-[var(--light-green)] hover:bg-[var(--orange)]"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
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
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orange)] transition"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orange)] transition"><FaTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orange)] transition"><FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orange)] transition"><FaLinkedin /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orange)] transition"><FaYoutube /></a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orange)] transition"><FaWhatsapp /></a>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:underline hover:text-[var(--orange)] transition">Services</Link></li>
                <li><Link to="/projects" className="hover:underline hover:text-[var(--orange)] transition">Projects</Link></li>
                <li><Link to="/about-us" className="hover:underline hover:text-[var(--orange)] transition">About Us</Link></li>
                <li><Link to="/contact" className="hover:underline hover:text-[var(--orange)] transition">Contact</Link></li>
                <li><Link to="/privacy-policy" className="hover:underline hover:text-[var(--orange)] transition">Privacy Policy</Link></li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: <a href="mailto:info@youlandscape.co.ke" className="hover:underline hover:text-[var(--orange)] transition">info@youlandscape.co.ke</a></li>
                <li>Phone: <a href="tel:+254712345678" className="hover:underline hover:text-[var(--orange)] transition">+254 712 345 678</a></li>
                <li>Location: Nairobi, Kenya</li>
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
  );
}