import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Contact.module.css';

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
    <div className={styles.contactContainer}>
      <div className={styles.contactSection}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          {/* Contact Information */}
          <div className={styles.infoSection}>
            <div className={styles.infoContent}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className={styles.sectionTitle}>Get in Touch</h1>
                <p className={styles.sectionDescription}>
                  Ready to transform your space? Contact us to discuss your project or schedule a
                  consultation.
                </p>
                <dl className={styles.contactInfo}>
                  <div className={styles.infoItem}>
                    <dt className="sr-only">Address</dt>
                    <dd className={styles.infoText}>
                      <svg className={styles.infoIcon} /* Add SVG properties here */ />
                      123 Design Street<br />City, State 12345
                    </dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt className="sr-only">Phone</dt>
                    <dd className={styles.infoText}>
                      <svg className={styles.infoIcon} /* Add SVG properties here */ />
                      +1 (555) 123-4567
                    </dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt className="sr-only">Email</dt>
                    <dd className={styles.infoText}>
                      <svg className={styles.infoIcon} /* Add SVG properties here */ />
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
            className={styles.formSection}
          >
            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label htmlFor="name" className={styles.formLabel}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="phone" className={styles.formLabel}>
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="message" className={styles.formLabel}>
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                />
              </div>
            </div>
            <div className={styles.formActions}>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Map Section */}
      <div className={styles.mapSection}>
        {/* Add your map component here */}
        <div className={styles.mapPlaceholder}>
          <p className={styles.mapText}>Map will be integrated here</p>
        </div>
      </div>
    </div>
  );
}
