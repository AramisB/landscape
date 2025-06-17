import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from './ProjectDetails';

const ProjectSection = () => {
    const { id } = useParams(); // Get the project ID from the URL
    const project = projects.find((p) => p.id === id); // Find the project by ID

    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image in the carousel

    if (!project) {
        return <div className="p-8 text-center">Project not found.</div>;
    }

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <Link to="/projects" className="text-[var(--primary-green)] hover:underline text-sm mb-4 block">
                &larr; Back to Projects
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Photo Carousel */}
                <div className="relative">
                    <img
                        src={project.images[currentImageIndex]}
                        alt={project.title}
                        className="w-full h-96 object-cover rounded"
                    />
                    <button
                        onClick={handlePrevImage}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={handleNextImage}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    >
                        &gt;
                    </button>
                </div>

                {/* Right: Project Details */}
                <div>
                    <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
                    <p className="text-gray-700 mb-4">{project.overview}</p>
                    <div className="space-y-2">
                        <p>
                            <strong>Client:</strong> {project.client}
                        </p>
                        <p>
                            <strong>Location:</strong> {project.location}
                        </p>
                        <p>
                            <strong>Category:</strong> {Array.isArray(project.category) ? project.category.join(', ') : project.category}
                        </p>
                        <p>
                            <strong>Scope:</strong> {project.scope}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
