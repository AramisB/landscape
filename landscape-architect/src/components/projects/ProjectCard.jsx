import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg"
    >
      <Link to={`/projects/${project.id}`}>
        <div className="aspect-h-9 aspect-w-16 w-full overflow-hidden">
          <img
            src={project.thumbnailUrl}
            alt={`${project.title} - YouLandscape Project Portfolio`}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm text-gray-200">{project.category}</p>
        </div>
      </Link>
    </motion.div>
  );
}
