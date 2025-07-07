import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../ProjectDetails';

const ProjectSection = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const projectIndex = projects.findIndex((p) => p.id === id);
    const project = projects[projectIndex];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) {
        return <div className="p-8 text-center">Project not found.</div>;
    }

    // Split overview into paragraphs for better readability
    const overviewParagraphs = project.overview
        .split(/(?<=[.!?])\s+(?=[A-Z])/)
        .map((para) => para.trim())
        .filter(Boolean);

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

    // Previous/Next project navigation
    const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
    const nextProject = projects[(projectIndex + 1) % projects.length];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <Link to="/projects" className="text-[var(--primary-green)] hover:underline text-sm mb-6 inline-block">
                &larr; Back to Projects
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch min-h-[400px] md:min-h-[500px]">
                {/* Left: Photo Carousel */}
                <div className="relative group shadow bg-white flex flex-col h-full">
                    <img
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} - YouLandscape Project Portfolio`}
                        className="w-full h-full object-cover rounded-none flex-1"
                        style={{ minHeight: 300 }}
                        sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <button
                        onClick={handlePrevImage}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
                        aria-label="Previous image"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={handleNextImage}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
                        aria-label="Next image"
                    >
                        &gt;
                    </button>
                    {/* Image Counter */}
                    <div className="absolute bottom-2 right-4 bg-black bg-opacity-60 text-white text-xs px-3 py-1 rounded-full">
                        {currentImageIndex + 1} / {project.images.length}
                    </div>
                </div>

                {/* Right: Project Details */}
                <div className="bg-white shadow p-8 rounded-none flex flex-col h-full">
                    <h1 className="text-3xl font-bold mb-4 text-[var(--primary-green)] leading-tight">{project.title}</h1>
                    <div className="mb-6 space-y-4">
                        {overviewParagraphs.map((para, idx) => (
                            <p key={idx} className="text-base text-gray-700 leading-relaxed">{para}</p>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[var(--text-dark)] text-base font-medium mt-6">
                        <div>
                            <span className="font-semibold text-[var(--light-green)]">Client:</span> {project.client}
                        </div>
                        <div>
                            <span className="font-semibold text-[var(--light-green)]">Location:</span> {project.location}
                        </div>
                        <div>
                            <span className="font-semibold text-[var(--light-green)]">Category:</span> {Array.isArray(project.category) ? project.category.join(', ') : project.category}
                        </div>
                        <div>
                            <span className="font-semibold text-[var(--light-green)]">Scope:</span> {project.scope}
                        </div>
                    </div>
                </div>
            </div>
            {/* Previous/Next Project Navigation */}
            <div className="flex justify-between mt-10">
                <Link
                    to={`/projects/section/${prevProject.id}`}
                    className="px-6 py-2 bg-[var(--primary-green)] text-white font-semibold rounded-none hover:bg-[var(--light-green)] transition"
                >
                    &larr; Previous
                </Link>
                <Link
                    to={`/projects/section/${nextProject.id}`}
                    className="px-6 py-2 bg-[var(--primary-green)] text-white font-semibold rounded-none hover:bg-[var(--light-green)] transition"
                >
                    Next &rarr;
                </Link>
            </div>
        </div>
    );
};

export default ProjectSection;
