import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <img
            src="/placeholder-hero.jpg"
            alt="Hero background"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className={styles.heroTextContent}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={styles.heroTitle}
              >
                Creating Sustainable Landscapes
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={styles.heroDescription}
              >
                We design and build innovative outdoor spaces that harmonize with nature and enhance
                people's lives.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={styles.heroButtons}
              >
                <Link
                  to="/projects"
                  className={styles.primaryButton}
                >
                  View Portfolio
                </Link>
                <Link
                  to="/contact"
                  className={styles.secondaryButton}
                >
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className={styles.featuredSection}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Featured Projects
            </h2>
            <p className={styles.sectionDescription}>
              Discover our latest and most impactful landscape designs.
            </p>
          </div>
          <div className={styles.projectsGrid}>
            {/* Add featured projects grid here */}
          </div>
        </div>
      </div>

      {/* Services Overview Section */}
      <div className={styles.servicesSection}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Our Services
            </h2>
            <p className={styles.sectionDescription}>
              Comprehensive landscape architecture and design services.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {/* Add services grid here */}
          </div>
        </div>
      </div>
    </div>
  );
}
