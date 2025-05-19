import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/ProjectDetail.css'; // Import the CSS file directly

// Sample project data (would typically come from an API)
const projectData = {
  id: '1',
  title: 'Modern Residential Garden',
  category: 'residential',
  description: 'A contemporary garden design that transforms a suburban backyard into a modern outdoor living space.',
  location: 'Beverly Hills, CA',
  year: 2023,
  size: '2,500 sq ft',
  client: 'Private Residence',
  images: [
    '/placeholder-project-detail1.jpg',
    '/placeholder-project-detail2.jpg',
    '/placeholder-project-detail3.jpg',
  ],
  challenge: 'The clients wanted a low-maintenance garden that would provide year-round interest and incorporate sustainable design principles.',
  solution: 'We created a design that features drought-resistant plants, a modern water feature, and flexible outdoor living spaces.',
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData;

  return (
    <div className="projectDetailContainer">
      {/* Hero Section */}
      <div className="heroSection">
        <div className="heroImageWrapper">
          <img
            src={project.images[0]}
            alt={project.title}
            className="heroImage"
          />
          <div className="heroOverlay" />
        </div>
        <div className="heroContent">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heroTitle"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heroCategory"
          >
            {project.category}
          </motion.p>
        </div>
      </div>

      {/* Project Details */}
      <div className="detailsSection">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="contentGrid">
            {/* Project Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="projectInfo"
            >
              <p className="projectDescription">{project.description}</p>
              
              <dl className="projectMeta">
                <div className="metaItem">
                  <dt>Location</dt>
                  <dd>{project.location}</dd>
                </div>
                <div className="metaItem">
                  <dt>Year</dt>
                  <dd>{project.year}</dd>
                </div>
                <div className="metaItem">
                  <dt>Size</dt>
                  <dd>{project.size}</dd>
                </div>
                <div className="metaItem">
                  <dt>Client</dt>
                  <dd>{project.client}</dd>
                </div>
              </dl>

              <div className="projectChallenge">
                <h3>Challenge</h3>
                <p>{project.challenge}</p>
              </div>

              <div className="projectSolution">
                <h3>Solution</h3>
                <p>{project.solution}</p>
              </div>
            </motion.div>

            {/* Project Gallery */}
            <div className="galleryGrid">
              {project.images.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="galleryItem"
                >
                  <img
                    src={image}
                    alt={`Project view ${index + 2}`}
                    className="galleryImage"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
