import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCardSlider from '../components/projects/ProjectCardSlider';
import '../styles/Projects.css';

const categories = [
  { id: 'all', name: 'All Projects', icon: '🌿' },
  { id: 'residential', name: 'Residential', icon: '🏠' },
  { id: 'commercial', name: 'Commercial', icon: '🏢' },
  { id: 'public', name: 'Public Spaces', icon: '🌳' }
];

const sampleProjects = [
  {
    id: '1',
    title: 'Modern Residential Garden',
    category: 'residential',
    images: [
      '/projects/residential/modern-garden.jpg',
      '/projects/residential/garden-detail-1.jpg',
      '/projects/residential/garden-detail-2.jpg',
      '/projects/residential/garden-detail-3.jpg'
    ],
    description: 'A contemporary garden design for urban living, featuring sustainable materials and native plants.',
    features: ['Sustainable Design', 'Native Plants', 'Water Features', 'Outdoor Living Space']
  },
  {
    id: '2',
    title: 'City Park Renovation',
    category: 'public',
    images: [
      '/projects/public/city-park.jpg',
      '/projects/public/park-playground.jpg',
      '/projects/public/park-walkway.jpg',
      '/projects/public/park-garden.jpg'
    ],
    description: 'Revitalization of a public park space with modern amenities and sustainable landscaping.',
    features: ['Public Amenities', 'Playground', 'Walking Trails', 'Community Garden']
  },
  {
    id: '3',
    title: 'Shopping Mall Landscape',
    category: 'commercial',
    images: [
      '/projects/commercial/mall-entrance.jpg',
      '/projects/commercial/mall-courtyard.jpg',
      '/projects/commercial/mall-garden.jpg',
      '/projects/commercial/mall-water.jpg'
    ],
    description: 'Blending retail with social spaces, featuring event areas, play zones, and garden retreats.',
    features: ['Event Spaces', 'Play Zones', 'Garden Retreats', 'Water Features']
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
            className="heroTitle gradient-text"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="heroDescription"
          >
            Explore our portfolio of innovative landscape architecture projects
          </motion.p>
        </div>
        <div className="heroOverlay nature-gradient" />
      </div>

      <div className="projectsSection">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div 
            className="filterSection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`filterButton ${
                  selectedCategory === category.id ? 'filterButtonActive' : ''
                }`}
              >
                <span className="filterIcon">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

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
                viewport={{ once: true }}
              >
                <ProjectCardSlider project={project} />
              </motion.div>
            ))}
          </motion.div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="noProjectsMessage"
            >
              <h3>No projects found in this category</h3>
              <p>Please select a different category or check back later for new projects.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}