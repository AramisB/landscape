import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // success or error message
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setIsSending(true);
    try {
      const response = await fetch('https://youlandscape.co.ke/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(null), 5000); // Hide after 5s
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send message.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    }
    setIsSending(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[var(--off-white)]">
      <div className="py-8 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 px-2 sm:px-0">
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
                      KUSCCO Centre - Nairobi Region
                    </dd>
                  </div>
                  <div className="flex items-start gap-4">
                    <dt className="sr-only">Phone</dt>
                    <dd className="text-base text-[var(--text-dark)] flex items-center gap-2">
                      <span className="inline-block w-6 h-6 text-[var(--primary-green)]">📞</span>
                      +254707301563
                    </dd>
                  </div>
                  <div className="flex items-start gap-4">
                    <dt className="sr-only">Email</dt>
                    <dd className="text-base text-[var(--text-dark)] flex items-center gap-2">
                      <span className="inline-block w-6 h-6 text-[var(--primary-green)]">✉️</span>
                      info@youlandscape.co.ke
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
              <button
                type="submit"
                className="w-full rounded-none bg-[var(--primary-green)] px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-[var(--secondary-green)] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              {status && (
                <div className={`mt-4 text-center text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{status.message}</div>
              )}
            </div>
          </motion.form>
        </div>
      </div>

      {/* Map Section */}
<div className="w-full px-4 py-6 sm:px-8 sm:py-10">
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
  </div>

 );
}
