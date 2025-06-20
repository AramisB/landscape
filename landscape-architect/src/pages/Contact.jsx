import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[var(--off-white)]">
      <div className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-xl mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-green)]">Get in Touch</h1>
                <p className="text-xl text-[var(--text-dark)] mb-8">
                  Ready to transform your space? Contact us to discuss your project or schedule a consultation.
                </p>
                <dl className="space-y-6">
                  <div className="flex items-start gap-4">
                    <dt className="sr-only">Address</dt>
                    <dd className="text-base text-[var(--text-dark)] flex items-center gap-2">
                      <span className="inline-block w-6 h-6 text-[var(--primary-green)]">📍</span>
                      123 Design Street<br />City, State 12345
                    </dd>
                  </div>
                  <div className="flex items-start gap-4">
                    <dt className="sr-only">Phone</dt>
                    <dd className="text-base text-[var(--text-dark)] flex items-center gap-2">
                      <span className="inline-block w-6 h-6 text-[var(--primary-green)]">📞</span>
                      +1 (555) 123-4567
                    </dd>
                  </div>
                  <div className="flex items-start gap-4">
                    <dt className="sr-only">Email</dt>
                    <dd className="text-base text-[var(--text-dark)] flex items-center gap-2">
                      <span className="inline-block w-6 h-6 text-[var(--primary-green)]">✉️</span>
                      contact@example.com
                    </dd>
                  </div>
                </dl>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="px-6 lg:px-8"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-dark)]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-none border-0 px-4 py-3 text-[var(--text-dark)] shadow-sm ring-1 ring-inset ring-[var(--off-white)] focus:ring-2 focus:ring-inset focus:ring-[var(--primary-green)] placeholder:text-gray-400"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-dark)]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-none border-0 px-4 py-3 text-[var(--text-dark)] shadow-sm ring-1 ring-inset ring-[var(--off-white)] focus:ring-2 focus:ring-inset focus:ring-[var(--primary-green)] placeholder:text-gray-400"
                  placeholder="you@email.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-dark)]">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-none border-0 px-4 py-3 text-[var(--text-dark)] shadow-sm ring-1 ring-inset ring-[var(--off-white)] focus:ring-2 focus:ring-inset focus:ring-[var(--primary-green)] placeholder:text-gray-400"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-dark)]">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-none border-0 px-4 py-3 text-[var(--text-dark)] shadow-sm ring-1 ring-inset ring-[var(--off-white)] focus:ring-2 focus:ring-inset focus:ring-[var(--primary-green)] placeholder:text-gray-400"
                  placeholder="How can we help you?"
                />
              </div>
            </div>
            <div className="mt-8">
              <button type="submit" className="w-full rounded-none bg-[var(--primary-green)] px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-[var(--secondary-green)] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:ring-offset-2">
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        {/* Add your map component here */}
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--off-white)]">
          <p className="text-lg text-[var(--text-dark)]">Map will be integrated here</p>
        </div>
      </div>
    </div>
  );
}
