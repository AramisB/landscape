import { useParams, Link, useNavigate } from "react-router-dom";
import AboutUsDetails from '../components/AboutUsDetails';

export default function AboutUs() {
  const { sectionId } = useParams();
  const navigate = useNavigate();

  // Default to "Our Company" if no sectionId
  const defaultSectionId = "our-company";
  const currentId = sectionId || defaultSectionId;

  const section = AboutUsDetails.find((sec) => sec.id === currentId);

  return (
    <div className="px-2 sm:px-8 py-8 sm:py-12 max-w-5xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--primary-green)] drop-shadow">About Us</h1>
        {/* Dropdown for mobile */}
        <div className="sm:hidden mb-4">
          <select
            className="w-full p-2 border border-gray-300 rounded bg-white text-[var(--primary-green)]"
            value={currentId}
            onChange={e => navigate(`/about-us/${e.target.value}`)}
          >
            {AboutUsDetails.map((sec) => (
              <option key={sec.id} value={sec.id}>{sec.title}</option>
            ))}
          </select>
        </div>
        {/* Tabs for desktop */}
        <ul className="hidden sm:flex flex-wrap gap-4 text-[var(--primary-green)] text-base">
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
          <div className="relative mb-4 sm:mb-6">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-40 sm:h-64 object-cover rounded-none"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-lg sm:text-2xl md:text-3xl font-bold text-white bg-black bg-opacity-50 m-0 p-0 rounded-none">
              {section.title}
            </h2>
          </div>
          <pre className="whitespace-pre-wrap text-sm sm:text-base text-gray-800 bg-white p-4 sm:p-6 rounded-none shadow-md">
            {section.content}
          </pre>
        </div>
      ) : (
        <div className="text-red-600">Section not found.</div>
      )}
    </div>
  );
}
