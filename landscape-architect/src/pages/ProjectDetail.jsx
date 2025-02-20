import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// This would typically come from an API or database
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

  // In a real app, you would fetch the project data based on the ID
  // const project = useProject(id);
  const project = projectData;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src={project.images[0]}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold tracking-tight sm:text-6xl"
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-xl text-gray-200"
            >
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">About the Project</h2>
            <p className="mt-4 text-lg text-gray-600">{project.description}</p>
            
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Location</dt>
                <dd className="mt-1 text-sm text-gray-900">{project.location}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Year</dt>
                <dd className="mt-1 text-sm text-gray-900">{project.year}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Size</dt>
                <dd className="mt-1 text-sm text-gray-900">{project.size}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Client</dt>
                <dd className="mt-1 text-sm text-gray-900">{project.client}</dd>
              </div>
            </dl>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900">Challenge</h3>
              <p className="mt-4 text-gray-600">{project.challenge}</p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900">Solution</h3>
              <p className="mt-4 text-gray-600">{project.solution}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {project.images.slice(1).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={index === 0 ? 'col-span-2' : ''}
              >
                <img
                  src={image}
                  alt={`Project view ${index + 2}`}
                  className="h-full w-full rounded-lg object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
