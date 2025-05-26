import { useParams, Link } from "react-router-dom";
import AboutUsDetails from "./AboutUsDetails";

export default function AboutUs() {
  const { sectionId } = useParams();

  // Default to "Our Company" if no sectionId
  const defaultSectionId = "our-company";
  const currentId = sectionId || defaultSectionId;

  const section = AboutUsDetails.find((sec) => sec.id === currentId);

  return (
    <div className="px-8 py-12 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <ul className="flex flex-wrap gap-4 text-green-700 text-lg">
          {AboutUsDetails.map((sec) => (
            <li key={sec.id}>
              <Link
                to={`/about-us/${sec.id}`}
                className={`hover:underline ${currentId === sec.id ? "font-semibold underline" : ""
                  }`}
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
              className="w-full h-64 object-cover"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white bg-black bg-opacity-50">
              {section.title}
            </h2>
          </div>
          <pre className="whitespace-pre-wrap text-lg text-gray-800">
            {section.content}
          </pre>
        </div>
      ) : (
        <div className="text-red-600">Section not found.</div>
      )}
    </div>
  );
}
