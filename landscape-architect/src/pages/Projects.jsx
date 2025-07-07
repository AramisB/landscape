import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../components/ProjectDetails';
import WhyChooseUs from "../components/WhyChooseUs";
import GetStartedSection from '../components/GetStartedSection';

// List of categories with slugs
const categories = [
  { id: 'residential', slug: 'residential', name: 'Residential', icon: '🏡' },
  { id: 'installation', slug: 'landscape-installation', name: 'Landscape Installation', icon: '🌱' },
  { id: 'hospitality', slug: 'hospitality-recreational', name: 'Hospitality and Recreational Landscape', icon: '🏨' },
  { id: 'maintenance', slug: 'landscape-maintenance', name: 'Landscape Maintenance', icon: '🛠️' },
  { id: 'institutional', slug: 'institutional', name: 'Institutional', icon: '🏫' },
  { id: 'water', slug: 'water-feature-pools', name: 'Water Feature and Pools', icon: '💧' },
  { id: 'irrigation', slug: 'irrigation-installation', name: 'Irrigation Installation', icon: '🚿' },
];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter projects for selected category using slug and ensure uniqueness
  const getFilteredProjects = () => {
    if (selectedCategory === 'all') {
      // For "all" category, show unique projects by ID
      const uniqueProjects = [];
      const seenIds = new Set();
      
      projects.forEach(project => {
        if (!seenIds.has(project.id)) {
          seenIds.add(project.id);
          uniqueProjects.push(project);
        }
      });
      
      return uniqueProjects;
    } else {
      // For specific categories, filter by categorySlug and ensure uniqueness
      const categoryProjects = projects.filter((project) => project.categorySlug === selectedCategory);
      const uniqueProjects = [];
      const seenIds = new Set();
      
      categoryProjects.forEach(project => {
        if (!seenIds.has(project.id)) {
          seenIds.add(project.id);
          uniqueProjects.push(project);
        }
      });
      
      return uniqueProjects;
    }
  };

  const filteredProjects = getFilteredProjects();

  // Debug log
  console.log('Selected category:', selectedCategory, 'Filtered projects:', filteredProjects.map(p => ({id: p.id, title: p.title, categorySlug: p.categorySlug})));

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-6 sm:py-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-[var(--primary-green)] drop-shadow">Featured Projects</h1>

      {/* Category Dropdown for mobile */}
      <div className="sm:hidden mb-4">
        <select
          className="w-full p-2 border border-gray-300 rounded bg-white text-[var(--primary-green)]"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.slug}>{cat.name}</option>
          ))}
        </select>
      </div>
      {/* Category Buttons for desktop */}
      <div className="hidden sm:flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8">
        <button
          className={`px-4 py-2 rounded-none text-sm font-semibold shadow transition-colors duration-300 border border-[var(--primary-green)] ${selectedCategory === 'all' ? 'bg-[var(--primary-green)] text-white' : 'bg-white text-[var(--primary-green)] hover:bg-[var(--secondary-green)] hover:text-white'}`}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.slug)}
            className={`px-4 py-2 rounded-none flex items-center gap-2 text-sm font-semibold shadow transition-colors duration-300 border border-[var(--primary-green)] ${selectedCategory === cat.slug ? 'bg-[var(--primary-green)] text-white' : 'bg-white text-[var(--primary-green)] hover:bg-[var(--secondary-green)] hover:text-white'}`}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-2 group"
            >
              {project.images && project.images.length > 0 && (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
                />
              )}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-[var(--primary-green)] mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Location:</strong> {project.location}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Scope:</strong> {project.scope}
                </p>
                <p className="text-gray-700 mt-2 mb-4 line-clamp-3 flex-1">
                  {project.overview.slice(0, 120)}...
                </p>
                <Link
                  to={`/projects/section/${project.id}`}
                  className="mt-auto inline-block bg-[var(--primary-green)] flex justify-center items-center text-white px-4 py-2 rounded-none hover:bg-[var(--light-green)] text-sm font-semibold max-w-40 shadow transition-colors duration-300"
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
      <WhyChooseUs />
      <GetStartedSection />
    </div>
  );
};

export default ProjectsPage;