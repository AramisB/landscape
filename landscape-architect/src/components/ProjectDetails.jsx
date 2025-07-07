
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Utility function to convert title to slug (similar to ServiceDetails.jsx)
function toSlug(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/&/g, 'and') // Replace & with 'and' for consistency
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with dash
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing dashes
}

export const projects = [
  // Residential Projects
  {
    id: 'karen-marigold',
    category: 'Residential',
    categorySlug: 'residential',
    title: 'Karen Marigold Residential Home',
    location: 'Karen, Nairobi',
    client: 'Private Residence',
    scope: 'Landscape Design',
    overview: `This luxury residential home in Karen, Nairobi, required a sophisticated yet low-maintenance landscape design tailored to a premium lifestyle. Our team created a custom garden layout combining drought-resistant native plants, elegant stone walkways, and strategically placed solar garden lighting. The result is a private, eco-friendly landscape that enhances curb appeal and reduces long-term maintenance costs.`,
    images: [
      '/projects/karen/karen-1.webp',
      '/projects/karen/karen-2.webp',
      '/projects/karen/karen-3.webp',
      '/projects/karen/karen-4.webp',
      '/projects/karen/karen-5.webp',
    ],
  },
  {
    id: 'family-backyard-pool',
    category: 'Residential',
    categorySlug: 'residential',
    title: 'Family-Friendly Backyard Design with Pool & Play Area',
    location: 'Karen C, Nairobi',
    client: 'Private Residence',
    scope: 'Landscape Design',
    overview: `This backyard landscape is designed for family enjoyment, blending relaxation, play, and nature. It features a compact in-ground pool, a pergola dining space, and a child-friendly playset. Stepping stones, tropical palms, and flowering borders create a safe, vibrant outdoor living space.`,
    images: [
      '/projects/family-backyard-pool/family-backyard-pool-1.webp',
      '/projects/family-backyard-pool/family-backyard-pool-2.webp',
      '/projects/family-backyard-pool/family-backyard-pool-3.webp',
      '/projects/family-backyard-pool/family-backyard-pool-4.webp',
      '/projects/family-backyard-pool/family-backyard-pool-5.webp',
    ],
  },
  {
    id: 'luxury-poolside-garden',
    category: 'Residential',
    categorySlug: 'residential',
    title: 'Luxury Poolside Garden Design',
    location: 'Joska, Nairobi',
    client: 'Private Residence',
    scope: 'Landscape Design',
    overview: `This modern residential landscape blends tropical elegance with functional outdoor living. A sleek freeform pool, palm-lined lounge, and cabana create a resort-like feel for relaxation and entertainment. Drought-tolerant plants ensure low maintenance and year-round appeal.`,
    images: [
      '/projects/luxury-poolside-garden/luxury-poolside-garden-1.webp',
      '/projects/luxury-poolside-garden/luxury-poolside-garden-2.webp',
      '/projects/luxury-poolside-garden/luxury-poolside-garden-3.webp',
      '/projects/luxury-poolside-garden/luxury-poolside-garden-4.webp',
      '/projects/luxury-poolside-garden/luxury-poolside-garden-5.webp',
    ],
  },
  {
    id: 'luxury-garden-koi-pond',
    category: 'Residential',
    categorySlug: 'residential',
    title: 'Luxury Garden with Pool & Koi Pond',
    location: 'Malindi',
    client: 'Private',
    scope: 'Landscape Design',
    overview: `This project transformed a private home into a modern, resort-style sanctuary. A contemporary pool connects to a koi pond with stepping stones, surrounded by pergola lounge, play area, and lush tropical gardens. The design balances outdoor entertainment, family spaces, and tranquil garden elements.`,
    images: [
      '/projects/luxury-garden-koi-pond/luxury-garden-koi-pond-1.webp',
      '/projects/luxury-garden-koi-pond/luxury-garden-koi-pond-2.webp',
      '/projects/luxury-garden-koi-pond/luxury-garden-koi-pond-3.webp',
      '/projects/luxury-garden-koi-pond/luxury-garden-koi-pond-4.webp',
      '/projects/luxury-garden-koi-pond/luxury-garden-koi-pond-5.webp',
    ],
  },

  // Landscape Design Projects
  {
    id: 'outdoor-gym-garden',
    category: 'Landscape Design',
    categorySlug: 'landscape-design',
    title: 'Outdoor Gym Garden',
    location: 'Thome Garden Estate',
    client: 'Confidential',
    scope: 'Landscape Design',
    overview: `The Outdoor Gym Garden is a wellness space blending fitness, relaxation, and nature. It features five gym zones, a yoga and meditation area, winding pathways, water features, and amenities for comfort and accessibility. The design encourages holistic outdoor experiences for physical and mental well-being.`,
    images: [
      '/projects/outdoor-gym-garden/outdoor-gym-garden-1.webp',
      '/projects/outdoor-gym-garden/outdoor-gym-garden-2.webp',
      '/projects/outdoor-gym-garden/outdoor-gym-garden-3.webp',
      '/projects/outdoor-gym-garden/outdoor-gym-garden-4.webp',
      '/projects/outdoor-gym-garden/outdoor-gym-garden-5.webp',
    ],
  },
  {
    id: 'formal-garden-naivasha',
    category: 'Landscape Design',
    categorySlug: 'landscape-design',
    title: 'Formal Garden and Water Feature Landscape Design',
    location: 'Naivasha',
    client: 'Private residence',
    scope: 'Landscape Design',
    overview: `This formal garden emphasizes symmetry, elegance, and serene functionality. A reflecting pool with fountains is framed by paving patterns, manicured lawns, and flowering shrubs. The design creates a luxurious, peaceful environment for high-end residences or institutions.`,
    images: [
      '/projects/formal-garden-naivasha/formal-garden-naivasha-1.webp',
      '/projects/formal-garden-naivasha/formal-garden-naivasha-2.webp',
      '/projects/formal-garden-naivasha/formal-garden-naivasha-3.webp',
      '/projects/formal-garden-naivasha/formal-garden-naivasha-4.webp',
      '/projects/formal-garden-naivasha/formal-garden-naivasha-5.webp',
    ],
  },

  // Landscape Installation Projects
  {
    id: 'grading-lawn-runda',
    category: 'Landscape Installation',
    categorySlug: 'landscape-installation',
    title: 'Grading and Lawn Installation',
    location: 'Runda Mimosa',
    client: 'Private',
    scope: 'Landscape Installation',
    overview: `This project transformed a residential compound through professional grading and lawn establishment. Land grading improved drainage, and soil conditioning supported lush grass growth. The result is a level, fully vegetated yard that enhances usability and curb appeal.`,
    images: [
      '/projects/grading-and-lawn-installation/grading-and-lawn-installation-1.webp',
      '/projects/grading-and-lawn-installation/grading-and-lawn-installation-2.webp',
      '/projects/grading-and-lawn-installation/grading-and-lawn-installation-3.webp',
      '/projects/grading-and-lawn-installation/grading-and-lawn-installation-4.webp',
      '/projects/grading-and-lawn-installation/grading-and-lawn-installation-5.webp',
    ],
  },

  // Hospitality and Recreational Landscape Projects
  {
    id: 'urban-public-park',
    category: 'Hospitality and Recreational Landscape',
    categorySlug: 'hospitality-recreational',
    title: 'Urban Public Park',
    location: 'Thika, Kiambu',
    client: 'County government',
    scope: 'Landscape Design',
    overview: `This urban park blends landscape architecture with civic infrastructure to create a multifunctional green space. Key features include an elevated walkway, water fountain plaza, amphitheater lawn, and interactive art installations. The design emphasizes sustainability, accessibility, and civic interaction.`,
    images: [
      '/projects/urban-public-park/urban-public-park-1.webp',
      '/projects/urban-public-park/urban-public-park-2.webp',
      '/projects/urban-public-park/urban-public-park-3.webp',
      '/projects/urban-public-park/urban-public-park-4.webp',
      '/projects/urban-public-park/urban-public-park-5.webp',
    ],
  },
  {
    id: 'premier-resort-kisii',
    category: 'Hospitality and Recreational Landscape',
    categorySlug: 'hospitality-recreational',
    title: 'Premier Resort',
    location: 'Kisii',
    client: 'Premier Resort',
    scope: 'Landscape Design',
    overview: `This project creates a refined outdoor space combining natural beauty with comfort. Elevated cabanas, a linear pathway, manicured hedges, and tropical plants enhance the resort ambiance. A stone feature wall with a fireplace and modern lighting promotes outdoor living and privacy.`,
    images: [
      '/projects/premier-resort-kisii/premier-resort-kisii-1.webp',
      '/projects/premier-resort-kisii/premier-resort-kisii-2.webp',
      '/projects/premier-resort-kisii/premier-resort-kisii-3.webp',
      '/projects/premier-resort-kisii/premier-resort-kisii-4.webp',
      '/projects/premier-resort-kisii/premier-resort-kisii-5.webp',
    ],
  },

  // Landscape Maintenance Projects
  {
    id: 'residential-street-juja',
    category: 'Landscape Maintenance',
    categorySlug: 'landscape-maintenance',
    title: 'Residential Street Landscaping',
    location: 'Juja Farm',
    client: 'Private Residential Estate',
    scope: 'Landscape Maintenance',
    overview: `This project features a well-maintained residential street with structured, ornamental landscaping. Trimmed hedges, topiary shrubs, and tropical plants line the driveway, while paved roads and drainage support stormwater management. The design creates a clean, organized, and tranquil suburban setting.`,
    images: [
      '/projects/residential-street-juja/residential-street-juja-1.webp',
      '/projects/residential-street-juja/residential-street-juja-2.webp',
      '/projects/residential-street-juja/residential-street-juja-3.webp',
      '/projects/residential-street-juja/residential-street-juja-4.webp',
      '/projects/residential-street-juja/residential-street-juja-5.webp',
    ],
  },

  // Institutional Projects
  {
    id: 'chebirbelek-school',
    category: 'Institutional',
    categorySlug: 'institutional',
    title: 'Chebirbelek School Masterplanning',
    location: 'Bomet',
    client: 'Confidential',
    scope: 'Master Plan',
    overview: `The master plan for Chebirbelek Secondary School outlines a strategic framework for a modern, well-equipped learning environment. It integrates new classrooms, labs, library, boarding, staff quarters, and recreational amenities. The plan balances academics, welfare, and community life for a future-ready institution.`,
    images: [
      '/projects/chebirbelek-school/chebirbelek-school-1.webp',
      '/projects/chebirbelek-school/chebirbelek-school-2.webp',
      '/projects/chebirbelek-school/chebirbelek-school-3.webp',
      '/projects/chebirbelek-school/chebirbelek-school-4.webp',
    ],
  },

  // Water Feature and Pools Projects
  {
    id: 'luxury-poolside-garden',
    category: 'Water Feature and Pools',
    categorySlug: 'water-feature-pools',
    title: 'Luxury Poolside Garden Design',
    location: 'Joska, Nairobi',
    client: 'Private Residence',
    scope: 'Water Feature and Pools',
    overview: `This landscape design features a stunning freeform pool as the centerpiece, blending tropical elegance with modern outdoor living. Lush palms, flowering shrubs, and stone-paved lounges create a resort-style atmosphere. The layout connects all zones around the pool for a seamless outdoor experience.`,
    images: [
      '/projects/luxury-poolside-garden/1.webp',
      '/projects/luxury-poolside-garden/2.webp',
      '/projects/luxury-poolside-garden/3.webp',
      '/projects/luxury-poolside-garden/4.webp',
      '/projects/luxury-poolside-garden/5.webp',
    ],
  },
  {
    id: 'luxury-garden-koi-pond',
    category: 'Water Feature and Pools',
    categorySlug: 'water-feature-pools',
    title: 'Luxury Garden with Pool & Koi Pond',
    location: 'Malindi',
    client: 'Private Developer',
    scope: 'Water Feature and Pools',
    overview: `This project features a modern pool seamlessly integrated with a tranquil koi pond, blending luxury with natural beauty. A stepping stone walkway crosses the pond, connecting garden zones. Ambient lighting and water filtration ensure a serene, resort-style outdoor space.`,
    images: [
      '/projects/luxury-garden-koi-pond/1.webp',
      '/projects/luxury-garden-koi-pond/2.webp',
      '/projects/luxury-garden-koi-pond/3.webp',
      '/projects/luxury-garden-koi-pond/4.webp',
      '/projects/luxury-garden-koi-pond/5.webp',
    ],
  },

  // Irrigation Installation Projects
  {
    id: 'irrigation-kerarapon',
    category: 'Irrigation Installation',
    categorySlug: 'irrigation-installation',
    title: 'Kerarapon Residential Home',
    location: 'Kerarapon Drive',
    client: 'Private',
    scope: 'Automated Irrigation Installation',
    overview: `We implemented a fully zoned, automated sprinkler irrigation system for this premium residence in Nairobi. Rain Bird pop-up sprinklers cover lawns, borders, and shrubs with precision. The system conserves water, supports plant health, and ensures hassle-free lawn care.`,
    images: [
      '/projects/irrigation-kerarapon/irrigation-kerarapon-1.webp',
      '/projects/irrigation-kerarapon/irrigation-kerarapon-2.webp',
      '/projects/irrigation-kerarapon/irrigation-kerarapon-3.webp',
      '/projects/irrigation-kerarapon/irrigation-kerarapon-4.webp',
      '/projects/irrigation-kerarapon/irrigation-kerarapon-5.webp',
    ],
  },
];

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find(p => toSlug(p.title) === id);

    if (!project) {
        return <div className="text-center text-red-500 text-lg font-semibold mt-10">Project not found</div>;
    }

    return (
        <div>
            <Helmet>
                <title>{`${project.title} - YouLandscape Projects`}</title>
            </Helmet>

            <div className="relative w-full h-72 md:h-96">
                <img
                    src={project.images[0]} // Display the first image as the main header image
                    alt={`${project.title} - YouLandscape Project`}
                    className="object-cover w-full h-full"
                    sizes="100vw"
                    priority={true}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
                        {project.title}
                    </h1>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-8">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Overview</h2>
                    <p className="text-gray-700 leading-relaxed">{project.overview}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Details</h3>
                        <p className="text-gray-700"><strong className="text-green-600">Location:</strong> {project.location}</p>
                        <p className="text-gray-700"><strong className="text-green-600">Client:</strong> {project.client}</p>
                        <p className="text-gray-700"><strong className="text-green-600">Scope:</strong> {project.scope}</p>
                        <p className="text-gray-700"><strong className="text-green-600">Category:</strong> {project.category}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Gallery</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {project.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${project.title} image ${index + 1}`}
                                    className="w-full h-auto object-cover rounded-lg shadow-md"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <Link to="/projects" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300">
                        Back to Projects
                    </Link>
                </div>
            </div>
        </div>
    );
}