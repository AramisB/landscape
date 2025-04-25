import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectCardSlider({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 50000);

    return () => clearInterval(timer);
  }, [project.images.length]);

  return (
    <div className="projectCard">
      <div className="imageWrapper">
        <AnimatePresence mode='wait'>
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="projectImage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="imageOverlay" />
      </div>
      <div className="projectContent">
        <h3 className="projectTitle">{project.title}</h3>
        <p className="projectCategory">
          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
        </p>
        <p className="projectDescription">{project.description}</p>
      </div>
    </div>
  );
}
