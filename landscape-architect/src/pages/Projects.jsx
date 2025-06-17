import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from './ProjectDetails';

// List of categories
const categories = [
  { id: 'residential', name: 'Residential', icon: '🏡' },
  { id: 'installation', name: 'Landscape Installation', icon: '🌱' },
  { id: 'hospitality', name: 'Hospitality and Recreational Landscape', icon: '🏨' },
  { id: 'maintenance', name: 'Landscape Maintenance', icon: '🛠️' },
  { id: 'institutional', name: 'Institutional', icon: '🏫' },
  { id: 'water', name: 'Water Feature and Pools', icon: '💧' },
  { id: 'irrigation', name: 'Irrigation Installation', icon: '🚿' },
];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects for selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-8 text-center">Featured Projects</h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <button
          className={`px-4 py-2 rounded ${selectedCategory === 'All' ? 'bg-[var(--primary-green)] text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.name)} // Use the category "name" for filtering
            className={`px-4 py-2 rounded flex items-center gap-2 ${selectedCategory === cat.name ? 'bg-[var(--primary-green)] text-white' : 'bg-gray-200'}`}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded shadow-sm p-0 flex flex-col overflow-hidden">
              {project.images && project.images.length > 0 && (
                <img
                  src={project.images[0]} // Only show the first image
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Location:</strong> {project.location}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Scope:</strong> {project.scope}
                </p>
                <p className="text-gray-700 mt-2 mb-4 line-clamp-3">
                  {project.overview.slice(0, 120)}...
                </p>
                <Link
                  to={`/projects/section/${project.id}`}
                  className="mt-auto inline-block bg-[var(--primary-green)] text-white px-4 py-2 rounded hover:bg-[var(--light-green)] text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-20">
            No projects found in this category. <br />
            Please select a different category or check back later for new projects.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;