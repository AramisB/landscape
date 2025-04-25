import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCardSlider from '../components/projects/ProjectCardSlider';
import '../styles/Projects.css';

const categories = ['all', 'residential', 'commercial', 'public'];

const sampleProjects = [
  {
    id: '1',
    title: 'Modern Residential Garden',
    category: 'residential',
    images: [
      '/placeholder-project1.jpg',
      '/residential/image1.jpg',
      '/residential/image2.jpg',
      '/residential/image3.jpg'
    ],
    description: 'A contemporary garden design for urban living.',
  },
  {
    id: '2',
    title: 'City Park Renovation',
    category: 'public',
    images: [
      '/placeholder-project2.jpg',
      '/park1.jpg',
      '/park2.jpg',
      '/park3.jpg'
    ],
    description: 'Revitalization of a public park space.',
  },
  {
    id: '3',
    title: 'Mall',
    category: 'commercial',
    images: [
      '/placeholder-project3.jpg',
      '/mall1.jpg',
      '/mall2.jpg',
      '/mall3.jpg'
    ],
    description: 'Blending retail with social spaces, featuring event areas, play zones, and garden retreats.'
  }
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
              >
                <ProjectCardSlider project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}