import { useState, useRef, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import AboutUsDetails from '../pages/AboutUsDetails';
import '../styles/Footer.css';

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
      <div className="contactStrip flex justify-between items-center bg-[var(--light-green)] px-4 py-3 border-b text-white text-sm">
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
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-lg">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-lg">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-lg">
            <FaYoutube />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-lg">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-lg">
            <FaLinkedin />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-lg">
            <FaWhatsapp />
          </a>
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
                    className="flex items-center gap-1 text-[var(--secondary-blue)] font-medium text-base hover:underline hover:text-[var(--secondary-green)] transition-colors"
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
                      className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg z-50"
                      style={{ minWidth: '200px' }}
                    >
                      {AboutUsDetails.map((sec) => (
                        <Link
                          key={sec.id}
                          to={`/about-us/${sec.id}`}
                          className="block px-4 py-2 text-[var(--secondary-blue)] hover:bg-[var(--light-green)] hover:text-white"
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
                    ? 'text-[var(--secondary-blue)] bg-[var(--off-white)] px-4 py-2 text-lg font-semibold border-2 border-[var(--secondary-blue)] hover:bg-[var(--light-green)]'
                    : 'text-[var(--secondary-blue)] font-medium text-base hover:underline hover:text-[var(--secondary-green)]'
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
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={item.name === 'Get A Quote' ? (e) => { e.preventDefault(); setQuoteModalOpen(true); } : undefined}
                  className="text-green-800 font-semibold text-lg hover:underline transition-colors"
                >
                  {item.name}
                </Link>
              ))}
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
                <h1 className="text-3xl font-bold">Get A Quote Now</h1>
                <p className="text-lg">
                  Contact us now to Get A Quote or a site visit.
                </p>
                <p className="text-lg flex items-center gap-2">
                  <FaPhoneAlt className="text-green-700" />
                  <strong>Phone:</strong> +254707301563
                </p>
                <p className="text-lg flex items-center gap-2">
                  <FaEnvelope className="text-green-700" />
                  <strong>Email:</strong> info@youlandscape.com
                </p>
                <p className="text-lg">
                  We are here to help you transform your outdoor space!
                </p>
              </div>

              {/* Right Section */}
              <div className="flex-1 bg-[var(--light-green)] p-6 shadow-md border-2">
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
                      className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-green-700 rounded-md hover:bg-green-800"
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

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid lg:grid-cols-4">

            {/* About Us + Socials */}
            <div className="footer-column">
              <h4 className="footer-heading">About Us</h4>
              <p className="footer-paragraph">
                YouLandscape is Kenya’s premier landscape architecture firm, creating sustainable, breathtaking outdoor spaces tailored to your vision.
              </p>
              <div className="footer-socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-list">
                <li><Link to="/services" className="footer-link">Services</Link></li>
                <li><Link to="/projects" className="footer-link">Projects</Link></li>
                <li><Link to="/about-us" className="footer-link">About Us</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
                <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-list">
                <li>Email: <a href="mailto:info@youlandscape.co.ke" className="footer-link">info@youlandscape.co.ke</a></li>
                <li>Phone: <a href="tel:+254712345678" className="footer-link">+254 712 345 678</a></li>
                <li>Location: Nairobi, Kenya</li>
                <li>Open: Mon - Sat, 8:00am - 6:00pm</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-column">
              <h4 className="footer-heading">Newsletter</h4>
              <p className="footer-paragraph">Get the latest updates and landscaping tips straight to your inbox.</p>
              <form className="footer-form">
                <input type="email" placeholder="Your email address" className="footer-input" />
                <button type="submit" className="footer-button">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="text-white">© {new Date().getFullYear()} YouLandscape. All rights reserved.</p>
            <p className="text-white">Designed with care by YouLandscape Architects & Consultants.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}