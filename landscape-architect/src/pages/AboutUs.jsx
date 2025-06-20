import { useParams, Link } from "react-router-dom";
import AboutUsDetails from '../components/AboutUsDetails';

export default function AboutUs() {
  const { sectionId } = useParams();

  // Default to "Our Company" if no sectionId
  const defaultSectionId = "our-company";
  const currentId = sectionId || defaultSectionId;

  const section = AboutUsDetails.find((sec) => sec.id === currentId);

  return (
    <div className="px-8 py-12 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[var(--primary-green)] drop-shadow">About Us</h1>
        <ul className="flex flex-wrap gap-4 text-[var(--primary-green)] text-base">
          {AboutUsDetails.map((sec) => (
            <li key={sec.id}>
              <Link
                to={`/about-us/${sec.id}`}
                className={`hover:underline px-2 py-1 rounded-none transition-colors duration-200 ${currentId === sec.id ? "font-semibold underline bg-[var(--off-white)]" : "hover:bg-[var(--secondary-green)] hover:text-white"}`}
              >
                {sec.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {section ? (
        <div>
          {/* Full-width image with section title overlay */}
          <div className="relative mb-6">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-64 object-cover rounded-none"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-2xl md:text-3xl font-bold text-white bg-black bg-opacity-50 m-0 p-0 rounded-none">
              {section.title}
            </h2>
          </div>
          <pre className="whitespace-pre-wrap text-base text-gray-800 bg-white p-6 rounded-none shadow-md">
            {section.content}
          </pre>
        </div>
      ) : (
        <div className="text-red-600">Section not found.</div>
      )}
    </div>
  );
}
