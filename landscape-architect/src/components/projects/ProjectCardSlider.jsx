import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectCardSlider({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
      }, 5000);

    return () => clearInterval(timer);
    }
  }, [project.images.length, isHovered]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div 
      className="projectCard"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="imageWrapper">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentImageIndex}
            className="projectImage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1} - YouLandscape Project`}
              className="w-full h-full object-cover"
              sizes="(min-width: 1024px) 50vw, (min-width: 768px) 75vw, 100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="imageOverlay" />
        
        {/* Navigation Arrows */}
        {isHovered && project.images.length > 1 && (
          <>
            <button 
              className="navArrow left"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              ←
            </button>
            <button 
              className="navArrow right"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              →
            </button>
          </>
        )}
        
        {/* Image Counter */}
        {project.images.length > 1 && (
          <div className="imageCounter">
            {currentImageIndex + 1} / {project.images.length}
          </div>
        )}
      </div>
      
      <div className="projectContent">
        <h3 className="projectTitle">{project.title}</h3>
        <p className="projectCategory">
          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
        </p>
        <p className="projectDescription">{project.description}</p>
        
        {/* Features Tags */}
        {project.features && (
          <div className="projectFeatures">
            {project.features.map((feature, index) => (
              <span key={index} className="featureTag">
                {feature}
              </span>
            ))}
          </div>
        )}
        
        {/* View Details Button */}
        <Link 
          to={`/projects/${project.id}`}
          className="viewDetailsButton"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
