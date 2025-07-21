import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--off-white)]">
      <div className="py-8 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 px-2 sm:px-0">
          {/* Nairobi Branch */}
          <div className="px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-xl mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-green)]">
                  Nairobi Branch
                </h1>
                <p className="text-xl text-[var(--text-dark)] mb-8">
                  Visit or reach out to our Nairobi office to discuss your landscaping needs.
                </p>
                <dl className="space-y-6 text-[var(--text-dark)]">
                  <div className="flex items-center gap-3">
                    <span role="img" aria-label="Location" className="text-2xl">📍</span>
                    <span>KUSCCO Centre - Nairobi Region</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span role="img" aria-label="Phone" className="text-2xl">📞</span>
                    <a href="tel:+254707301563" className="hover:underline">+254707301563</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span role="img" aria-label="Email" className="text-2xl">✉️</span>
                    <a href="mailto:info@youlandscape.co.ke" className="hover:underline">info@youlandscape.co.ke</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span role="img" aria-label="WhatsApp" className="text-2xl">💬</span>
                    <a
                      href="https://wa.me/254707301563"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </dl>
              </motion.div>
            </div>
          </div>

          {/* Kitale Branch */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="px-6 lg:px-8 flex flex-col justify-center"
          >
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-green)]">
                Kitale Branch
              </h2>
              <p className="text-xl text-[var(--text-dark)] mb-8">
                Our Kitale branch is available for consultations and on-site landscaping support.
              </p>
              <dl className="space-y-6 text-[var(--text-dark)]">
                <div className="flex items-center gap-3">
                  <span role="img" aria-label="Location" className="text-2xl">📍</span>
                  <span>Kitale Town Centre</span>
                </div>
                <div className="flex items-center gap-3">
                  <span role="img" aria-label="Phone" className="text-2xl">📞</span>
                  <a href="tel:+254790350030" className="hover:underline">+254790350030</a>
                </div>
                <div className="flex items-center gap-3">
                  <span role="img" aria-label="Email" className="text-2xl">✉️</span>
                  <a href="mailto:info@youlandscape.co.ke" className="hover:underline">info@youlandscape.co.ke</a>
                </div>
                <div className="flex items-center gap-3">
                  <span role="img" aria-label="WhatsApp" className="text-2xl">💬</span>
                  <a
                    href="https://wa.me/254790350030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full px-4 py-6 sm:px-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Nairobi Map */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--primary-green)]">Nairobi Office Location</h3>
            <div className="relative w-full h-60 sm:h-[400px] overflow-hidden shadow-lg rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.587616688879!2d36.81383237436127!3d-1.2984609356382746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e665cf7961%3A0xc0207832bc88d158!2sKUSCCO%20Centre%20-%20Nairobi%20Region!5e0!3m2!1sen!2ske!4v1752045661677!5m2!1sen!2ske"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Kitale Map */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--primary-green)]">Kitale Office Location</h3>
            <div className="relative w-full h-60 sm:h-[400px] overflow-hidden shadow-lg rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.560707168345!2d34.9908659!3d1.0153272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177f1b139cc8a7f7%3A0xd28c1fffbf9961f2!2sKitale%2C%20Kenya!5e0!3m2!1sen!2ske!4v1752552555555!5m2!1sen!2ske"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
