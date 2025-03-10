import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/projects/ProjectCard';
import '../styles/Projects.css';

const categories = ['all', 'residential', 'commercial', 'public'];

const sampleProjects = [
  {
    id: '1',
    title: 'Modern Residential Garden',
    category: 'residential',
    thumbnailUrl: '/placeholder-project1.jpg',
    description: 'A contemporary garden design for urban living.',
  },
  {
    id: '2',
    title: 'City Park Renovation',
    category: 'public',
    thumbnailUrl: '/placeholder-project2.jpg',
    description: 'Revitalization of a public park space.',
  },
  // Add more sample projects as needed
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? sampleProjects
    : sampleProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="projectsContainer">
      <div className="heroSection">
        <div className="heroContent">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="heroTitle"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="heroDescription"
          >
            Explore our portfolio of landscape architecture projects
          </motion.p>
        </div>
      </div>

      <div className="projectsSection">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Filter */}
          <div className="filterSection">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`filterButton ${
                  selectedCategory === category ? 'filterButtonActive' : ''
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="projectsGrid"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="projectCard"
              >
                <div className="imageWrapper">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="projectImage"
                  />
                  <div className="imageOverlay" />
                </div>
                <div className="projectContent">
                  <h3 className="projectTitle">{project.title}</h3>
                  <p className="projectCategory">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </p>
                  <p className="projectDescription">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}