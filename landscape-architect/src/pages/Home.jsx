import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Import the CSS file directly

export default function Home() {
  return (
    <div className="homeContainer">
      {/* Hero Section */}
      <div className="heroSection">
        <div className="heroContent">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heroTitle"
          >
            Creating Sustainable Landscapes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heroDescription"
          >
            We design and build innovative outdoor spaces that harmonize with nature and enhance
            people's lives.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heroButtons"
          >
            <Link to="/projects" className="primaryButton">
              View Portfolio
            </Link>
            <Link to="/contact" className="secondaryButton">
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
        <div className="heroImageWrapper">
          {/*<img
            src="/placeholder-hero.jpg"
            alt="Hero background"
            className="heroImage"
          />*/}
          <div className="heroOverlay" />
        </div>
      </div>
      { /* Diagonal Split Section */}
      <div className="diagonalSplitSection">
        <div className="diagonalContent featuredContent">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Featured Projects</h2>
            <p className="sectionDescription">
              Discover our latest and most impactful landscape designs.
            </p>
          </div>
          <div className="projectsGrid">
            {/* Add featured projects grid here */}
          </div>
        </div>

        <div className="diagonalContent servicesContent">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Our Services</h2>
            <p className="sectionDescription">
              Comprehensive landscape architecture and design services.
            </p>
          </div>
          <div className="servicesGrid">
            {/* Add services grid here */}
          </div>
        </div>
      </div>
    </div >
  );
}
