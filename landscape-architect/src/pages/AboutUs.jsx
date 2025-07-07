import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AboutUsDetails from '../components/AboutUsDetails';
import GetStartedSection from '../components/GetStartedSection';

export default function AboutUs() {
  const { sectionId } = useParams();
  const navigate = useNavigate();

  // Default to "Our Company" if no sectionId
  const defaultSectionId = "our-company";
  const currentId = sectionId || defaultSectionId;

  const section = AboutUsDetails.find((sec) => sec.id === currentId);

  return (
    <div key={currentId} className="px-2 sm:px-8 py-8 sm:py-12 max-w-5xl mx-auto">
      {/* SEO Meta Tags for About Us */}
      <Helmet>
        <title>About Us | YouLandscape Architects & Consultants - Kenya's Leading Landscape Design Firm</title>
        <meta name="description" content="Discover YouLandscape Architects & Consultants - Kenya's premier landscape architecture firm. Learn about our team, mission, and 10+ years of experience in sustainable landscape design." />
        <meta name="keywords" content="YouLandscape, about us, landscape architects Kenya, landscape design Nairobi, sustainable landscaping, outdoor design, garden design Kenya" />
        <meta name="author" content="YouLandscape Architects & Consultants" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Us | YouLandscape Architects & Consultants" />
        <meta property="og:description" content="Discover YouLandscape Architects & Consultants - Kenya's premier landscape architecture firm. Learn about our team, mission, and 10+ years of experience in sustainable landscape design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://youlandscape.co.ke/about-us" />
        <meta property="og:image" content="https://youlandscape.co.ke/logo.webp" />
        <meta property="og:site_name" content="YouLandscape Architects & Consultants" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | YouLandscape Architects & Consultants" />
        <meta name="twitter:description" content="Discover YouLandscape Architects & Consultants - Kenya's premier landscape architecture firm. Learn about our team, mission, and 10+ years of experience in sustainable landscape design." />
        <meta name="twitter:image" content="https://youlandscape.co.ke/logo.webp" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://youlandscape.co.ke/about-us" />
      </Helmet>

      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--primary-green)] drop-shadow">About YouLandscape</h1>
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
              alt={`${section.title} - YouLandscape Professional Services`}
              className="w-full h-40 sm:h-64 object-cover rounded-none"
              sizes="100vw"
              priority={true}
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-lg sm:text-2xl md:text-3xl font-bold text-white bg-black bg-opacity-50 m-0 p-0 rounded-none">
              {section.title}
            </h2>
          </div>
          {section.id === "our-company" && typeof section.content === "object" ? (
            <div className="bg-white p-4 sm:p-6 rounded-none shadow-md space-y-4 text-sm sm:text-base text-gray-800">
              <p>{section.content.description}</p>
              <h3 className="font-semibold mt-4">Who We Are</h3>
              <p>{section.content.whoWeAre}</p>
              <h3 className="font-semibold mt-4">Core Values</h3>
              <ul className="list-disc pl-6">
                {section.content.coreValues.map((value, idx) => (
                  <li key={idx}>{value}</li>
                ))}
              </ul>
              <h3 className="font-semibold mt-4">Mission</h3>
              <p>{section.content.mission}</p>
              <h3 className="font-semibold mt-4">Vision</h3>
              <p>{section.content.vision}</p>
              <h3 className="font-semibold mt-4">Slogan</h3>
              <p className="italic">{section.content.slogan}</p>
              <h3 className="font-semibold mt-4">Working Process</h3>
              <p>{section.content.workingProcess.intro}</p>
              <ol className="list-decimal pl-6">
                {section.content.workingProcess.steps.map((step, idx) => (
                  <li key={idx} className="mb-6 flex flex-col sm:flex-row items-start gap-4 text-left">
                    {step.image && (
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-32 h-32 object-cover rounded shadow border border-gray-200"
                        sizes="(min-width: 640px) 8rem, 100vw"
                        priority={idx < 2}
                      />
                    )}
                    <div className="w-full text-left">
                      <span className="font-semibold block mb-1">{step.title}</span>
                      <span>{step.description}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ) : (
            <pre className="whitespace-pre-wrap text-sm sm:text-base text-gray-800 bg-white p-4 sm:p-6 rounded-none shadow-md">
              {section.content}
            </pre>
          )}
        </div>
      ) : (
        <div className="text-red-600">Section not found.</div>
      )}
      <GetStartedSection />
    </div>
  );
}
