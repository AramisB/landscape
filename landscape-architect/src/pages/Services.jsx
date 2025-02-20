import { useState } from 'react';
import ProjectCard from '../components/projects/ProjectCard';

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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Projects</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore our portfolio of landscape architecture projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
