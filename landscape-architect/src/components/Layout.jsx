import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Projects', href: '/projects' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
  { name: 'Get A Quote', href: '#' }, 
];

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false); // State for the modal

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Strip */}
      <div className="contactStrip flex justify-between items-center bg-[var(--light-green)] px-4 py-3 border-b text-white text-sm">
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="https://www.google.com/maps/place/KUSCCO,+Centre,+Nairobi,+KE"
            target="_blank"
            rel="noopener noreferrer"
            className="locationLink flex items-center gap-1 text-white font-normal"
          >
            KUSCCO Centre - Nairobi Region
          </a>
          <a href="tel:+1234567890" className="contactLink flex items-center gap-1 text-white font-normal">
            <FaPhoneAlt className="inline-block text-white" /> +254707301563
          </a>
          <a href="mailto:info@landscape.com" className="contactLink flex items-center gap-1 text-white font-normal">
            <FaEnvelope className="inline-block text-white" /> info@youlandscape.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-lg">
            <FaFacebook />
          </a>
          <span className="text-white">|</span>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-lg">
            <FaTwitter />
          </a>
          <span className="text-white">|</span>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-lg">
            <FaYoutube />
          </a>
          <span className="text-white">|</span>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-lg">
            <FaInstagram />
          </a>
          <span className="text-white">|</span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-lg">
            <FaLinkedin />
          </a>
          <span className="text-white">|</span>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="socialIcon text-white text-lg">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b shadow-sm relative z-50">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" aria-label="Home">
              <div className="p-2 bg-[var(--pure-white)]">
                <img
                  src="/logo.png"
                  alt="Youlandscape Logo"
                  className="h-28 w-auto"                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={item.name === 'Get A Quote' ? (e) => { e.preventDefault(); setQuoteModalOpen(true); } : undefined}
                className={`${
                  item.name === 'Get A Quote'
                    ? 'text-[var(--secondary-blue)] bg-[var(--off-white)] px-4 py-2 text-lg font-semibold border-2 border-[var(--secondary-blue)] hover:bg-[var(--light-green)]'
                    : 'text-[var(--secondary-blue)] font-medium text-base hover:underline hover:text-[var(--secondary-green)]'
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
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

      <main>
        <Outlet />
      </main>
    </div>
  );
}