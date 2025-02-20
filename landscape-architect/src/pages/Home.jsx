import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/placeholder-hero.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative pt-32 pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold tracking-tight sm:text-6xl"
              >
                Creating Sustainable Landscapes
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg leading-8"
              >
                We design and build innovative outdoor spaces that harmonize with nature and enhance
                people's lives.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <Link
                  to="/projects"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  View Portfolio
                </Link>
                <Link
                  to="/contact"
                  className="text-sm font-semibold leading-6 text-white hover:text-gray-200"
                >
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Discover our latest and most impactful landscape designs.
            </p>
          </div>
          {/* Add featured projects grid here */}
        </div>
      </div>

      {/* Services Overview Section */}
      <div className="bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Comprehensive landscape architecture and design services.
            </p>
          </div>
          {/* Add services grid here */}
        </div>
      </div>
    </div>
  );
}