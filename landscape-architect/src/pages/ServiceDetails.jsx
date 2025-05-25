import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ServiceDetails.css';
import { Link } from 'react-router-dom';
import {
    FaChalkboardTeacher,
    FaDraftingCompass,
    FaHardHat,
    FaLeaf,
    FaProjectDiagram,
    FaTasks,
    FaWater,
    FaSwimmingPool,
    FaTint,
    FaRecycle,
    FaDrawPolygon,
    FaTools,
    FaSeedling,
    FaComments,
    FaCubes,
    FaBoxes
} from "react-icons/fa";

// Utility function to convert slug back to title
const fromSlug = (slug) => slug.replace(/-/g, ' ');

export const services = [
    {
        id: 1,
        title: 'Landscape Consultation',
        description:
            'We offer expert landscape consultancy services in Kenya, helping you make informed decisions through tailored maintenance strategies and sustainable plans for thriving outdoor spaces.',
        image: '/services/landscape-consultation.jpg',
        icon: <FaComments className="w-8 h-8" />,
        features: [
            {
                title: 'Tailored Garden Maintenance Plans',
                description:
                    'Personalized schedules for pruning, irrigation, and fertilization adapted to Kenya’s dry and rainy seasons to ensure your garden thrives with minimal waste.',
            },
            {
                title: 'Future-Proof Landscape Development',
                description:
                    'We create long-term development plans aligned with your goals, budget, and personal style to evolve your outdoor space sustainably over time.',
            },
            {
                title: 'Integrated Pest & Disease Control',
                description:
                    'Our eco-conscious pest strategies and resilient plant choices protect your garden from common threats and promote long-term plant health.',
            },
            {
                title: 'Collaborative Consultations',
                description:
                    'We work closely with you through site walks, workshops, and open feedback loops to ensure your vision is reflected in every decision.',
            },
            {
                title: 'Expert Horticultural Insight',
                description:
                    'Our team combines local and international landscaping knowledge to offer practical, up-to-date advice for garden design, maintenance, and plant care.',
            },
            {
                title: 'WhatsApp-Based Support',
                description:
                    'We provide fast, convenient support for queries or updates via WhatsApp, ensuring you stay informed and in control throughout the process.',
            }
        ],
        howWeCanHelp:
            'We empower homeowners and businesses with science-backed landscaping strategies tailored to Kenya’s unique climate. Our consultants provide sustainable, actionable plans to create outdoor spaces that flourish year-round.',
        whyChoose:
            'With certified horticulturists and a client-first approach, YouLandscape delivers personalized guidance, resilient gardens, and enduring outdoor beauty. Trust Kenya’s top landscape consultants to turn your space into a thriving sanctuary.'
    },
    {
        id: 2,
        title: 'Landscape Design',
        description:
            'We merge innovative design with sustainable practices to create outdoor spaces that elevate aesthetics and amplify property value—crafted specifically for Kenya’s diverse climates.',
        image: '/services/landscape-design.jpg',
        icon: <FaDraftingCompass className="w-8 h-8" />,
        features: [
            {
                title: 'Initial Consultation',
                description:
                    'We begin with a free, collaborative consultation and a detailed site assessment to understand your design goals, budget, and style preferences.',
            },
            {
                title: 'Plant Selection',
                description:
                    'Our horticultural experts select native and exotic plant species based on soil, climate, and sunlight, ensuring beauty and long-term growth.',
            },
            {
                title: 'Garden Design & Features',
                description:
                    'We incorporate elements like natural stone pathways, entertainment areas, water features, and solar-powered lighting to create immersive, functional spaces.',
            },
            {
                title: 'Collaborative Design Refinement',
                description:
                    'Using interactive 3D visuals, we walk you through the proposed design and make revisions until every detail matches your vision.',
            },
            {
                title: 'Final Design Package',
                description:
                    'We deliver a comprehensive blueprint that includes plant schedules, irrigation layouts, and cost estimates, ready for smooth implementation.',
            },
            {
                title: 'Customer Satisfaction',
                description:
                    'Our process is driven by your input and satisfaction—weekly updates and flexible adjustments ensure the result exceeds expectations.',
            }
        ],
        howWeCanHelp:
            'At YouLandscape, we specialize in sustainable, value-driven design that enhances aesthetics and functionality. We use 2D/3D visualization and data-backed planning to deliver landscapes that thrive and uplift your property.',
        whyChoose:
            'We blend artistic creativity with eco-conscious planning to deliver outdoor spaces that reflect your lifestyle. From compact courtyards to expansive retreats, our designs are beautiful, practical, and tailored for Kenya’s climate.'
    },
    {
        id: 3,
        title: 'Landscape Implementation',
        description:
            'We turn visionary designs into functional, breathtaking landscapes through expert installation of hardscapes, softscapes, and water-efficient systems tailored to Kenya’s environment.',
        image: '/services/landscape-implementation.jpg',
        icon: <FaTools className="w-8 h-8" />,
        features: [
            {
                title: 'Landscape Design and Planning',
                description:
                    'We begin with site assessments and develop detailed design plans that integrate hardscape and softscape features, with emphasis on climate-resilient plant choices.',
            },
            {
                title: 'Hardscape Installation',
                description:
                    'Our team installs durable structures such as patios, pathways, retaining walls, pergolas, and water features using high-quality materials and expert craftsmanship.',
            },
            {
                title: 'Softscape Development',
                description:
                    'We implement turf laying, flower beds, shrubs, and trees to promote biodiversity and seasonal interest, using soil health techniques like mulching and amendments.',
            },
            {
                title: 'Irrigation and Drainage Systems',
                description:
                    'We install efficient drip and sprinkler irrigation systems, rainwater harvesting setups, and drainage solutions to support plant health and prevent waterlogging.',
            },
            {
                title: 'Landscape Lighting',
                description:
                    'Our lighting designs enhance safety and ambiance using pathway, accent, and security lighting, tailored for both residential and commercial spaces.',
            },
            {
                title: 'Quality Assurance & Handover',
                description:
                    'We conduct inspections at every phase and provide a detailed walkthrough with maintenance guidelines and care packages to ensure lasting beauty and performance.',
            }
        ],
        howWeCanHelp:
            'Our certified landscape architects, horticulturists, and technicians ensure smooth, professional execution—from ground prep to final installation—delivering resilient, eco-friendly landscapes.',
        whyChoose:
            'With precision, premium materials, and client-focused collaboration, YouLandscape creates sustainable outdoor environments that exceed expectations. We deliver quality you can see and durability you can trust.'
    },
    {
        id: 4,
        title: 'Landscape Maintenance',
        description:
            'We provide tailored care and management for outdoor spaces across Kenya’s diverse climates, ensuring they remain vibrant, healthy, and beautiful all year round.',
        image: '/services/landscape-maintenance.jpg',
        icon: <FaLeaf className="w-8 h-8" />,
        features: [
            {
                title: 'Lawn Care',
                description: 'Regular mowing, fertilization, aeration, and watering to keep lawns lush and healthy.',
            },
            {
                title: 'Pruning and Trimming',
                description: 'Shaping and removing dead or overgrown branches to promote plant health and aesthetic form.',
            },
            {
                title: 'Weed and Pest Control',
                description: 'Implementing proactive treatments and eco-friendly strategies to prevent and eliminate threats.',
            },
            {
                title: 'Soil Health',
                description: 'Improving soil through mulching and amendments to enhance plant growth and resilience.',
            },
            {
                title: 'Irrigation Management',
                description: 'Installing and maintaining efficient systems to ensure optimal water use and moisture levels.',
            },
            {
                title: 'Seasonal Clean-ups',
                description: 'Clearing debris, fallen leaves, and preparing the garden for changing weather conditions.',
            }
        ],
        howWeCanHelp:
            'Our certified team develops seasonal and climate-specific care programs to keep your landscape healthy and visually stunning—from Nairobi’s dry seasons to Mombasa’s humidity.',
        whyChoose:
            'With a focus on sustainability, precision, and customer care, YouLandscape offers expert maintenance services designed to preserve the beauty and longevity of your outdoor spaces.'
    },
    {
        id: 5,
        title: 'Master Planning',
        description:
            'We design large-scale, sustainable outdoor layouts that organize space, resources, and aesthetics into cohesive long-term visions.',
        image: '/services/master-planning.jpg',
        icon: <FaProjectDiagram className="w-8 h-8" />,
        features: [
            {
                title: 'Initial Consultation and Goal Setting',
                description: 'Understanding your vision, goals, budget, and timeline to guide the entire project scope.',
            },
            {
                title: 'Site Analysis and Survey',
                description: 'Assessing soil, topography, climate, vegetation, and drainage to inform strategic planning.',
            },
            {
                title: 'Concept Development and Zoning',
                description: 'Dividing the land into functional zones such as recreation, planting, and circulation areas.',
            },
            {
                title: 'Preliminary Design and Feedback',
                description: 'Sharing draft layouts for review and refinement before finalizing the master plan.',
            },
            {
                title: 'Detailed Master Plan Creation',
                description: 'Delivering blueprints, planting plans, infrastructure layouts, and sustainability strategies.',
            },
            {
                title: 'Phased Implementation Strategy',
                description: 'Defining a practical, budget-conscious construction timeline aligned with project goals.',
            }
        ],
        howWeCanHelp:
            'We bring together landscape architects and environmental experts to create long-term development plans that balance functionality, beauty, and eco-conscious design.',
        whyChoose:
            'Our proven process, deep knowledge of Kenya’s ecosystems, and client-first strategy ensure your master plan is practical, visionary, and future-ready.'
    },
    {
        id: 6,
        title: 'Project Management',
        description:
            'We oversee landscape projects from design through implementation, coordinating teams and resources for seamless delivery on time and on budget.',
        image: '/services/project-management.jpg',
        icon: <FaTasks className="w-8 h-8" />,
        features: [
            {
                title: 'Integrated Design & Build Expertise',
                description: 'A unified team of designers, planners, and builders ensures efficient project execution.',
            },
            {
                title: 'Professional Project Coordination',
                description: 'Managing scheduling, procurement, budgets, and resource allocation from start to finish.',
            },
            {
                title: 'On-Site Supervision',
                description: 'Daily oversight of crews and quality assurance by experienced site supervisors.',
            },
            {
                title: 'Client-Centric Collaboration',
                description: 'Clear communication, updates, and design refinement based on client feedback.',
            },
            {
                title: 'Quality Assurance & Satisfaction',
                description: 'Rigorous standards and attention to detail throughout every phase of the project.',
            },
            {
                title: 'End-to-End Delivery',
                description: 'YouLandscape handles all phases of implementation for a worry-free, successful result.',
            }
        ],
        howWeCanHelp:
            'Our certified team of architects, landscapers, and project managers ensures organized, professional delivery with high-quality results and full accountability.',
        whyChoose:
            'We combine digital tools, transparent processes, and hands-on expertise to complete projects with precision, care, and client satisfaction at the core.'
    },
    {
        id: 7,
        title: 'Water Features',
        description:
            'We design and install custom water features—from serene fountains to dramatic waterfalls—that elevate your outdoor space’s beauty and ambiance.',
        image: '/services/water-features.jpg',
        icon: <FaWater className="w-8 h-8" />,
        features: [
            {
                title: 'Tailored Water Feature Design',
                description: 'Personalized concepts aligned with site conditions, style, and space requirements.',
            },
            {
                title: 'Types of Water Features',
                description: 'Includes garden fountains, reflecting pools, koi ponds, waterfalls, and vertical water walls.',
            },
            {
                title: 'Eco-Friendly Systems',
                description: 'Use of recirculating pumps, solar power, and bio-filtration to reduce water and energy waste.',
            },
            {
                title: 'Professional Installation',
                description: 'End-to-end installation from excavation to waterproofing, plumbing, and electrical integration.',
            },
            {
                title: 'Integrated Lighting and Automation',
                description: 'Low-voltage LED lights and smart automation for enhanced ambiance and convenience.',
            },
            {
                title: 'Maintenance & Aftercare',
                description: 'Ongoing support including seasonal cleaning, algae control, and equipment servicing.',
            }
        ],
        howWeCanHelp:
            'We bring your water feature vision to life with engineering precision and artistic flair, ensuring long-term beauty and sustainability.',
        whyChoose:
            'YouLandscape designs efficient, safe, and visually captivating water elements tailored to your property’s layout and your personal taste.'
    },
    {
        id: 8,
        title: 'Swimming Pools',
        description:
            'We design and build custom swimming pools that transform outdoor spaces into luxurious retreats with functionality and long-lasting value.',
        image: '/services/swimming-pools.jpg',
        icon: <FaSwimmingPool className="w-8 h-8" />,
        features: [
            {
                title: 'Custom Pool Design',
                description: 'Pools tailored to your style, lifestyle, site, and preferences—shapes, depths, features included.',
            },
            {
                title: 'High-Quality Construction',
                description: 'Durable pools built with concrete, fiberglass, or vinyl and finished with precision.',
            },
            {
                title: 'Energy-Efficient Systems',
                description: 'Solar heaters, LED lighting, and eco-pumps reduce environmental impact and running costs.',
            },
            {
                title: 'Integrated Landscaping & Hardscaping',
                description: 'Surrounding decks, patios, and greenery designed for seamless transitions and ambiance.',
            },
            {
                title: 'Safety and Accessibility',
                description: 'Built-in features to meet safety regulations and inclusive access requirements.',
            },
            {
                title: 'Maintenance and Aftercare',
                description: 'We provide cleaning, chemical balancing, and servicing packages for a stress-free experience.',
            }
        ],
        howWeCanHelp:
            'From planning to handover, our team delivers pools that are elegant, efficient, and perfectly matched to your space and vision.',
        whyChoose:
            'We combine construction excellence, thoughtful design, and full-service care to deliver a swimming experience that’s safe, stylish, and sustainable.'
    },
    {
        id: 9,
        title: 'Landscape Irrigation',
        description:
            'We design and install advanced irrigation systems that conserve water while keeping your garden healthy, vibrant, and low-maintenance.',
        image: '/services/landscape-irrigation.jpg',
        icon: <FaTint className="w-8 h-8" />,
        features: [
            {
                title: 'Customized Irrigation Design',
                description: 'Irrigation plans tailored to your soil, plant types, garden layout, and sun exposure.',
            },
            {
                title: 'Drip and Sprinkler Systems',
                description: 'Efficient systems that target plant roots precisely—ideal for lawns, beds, and hedges.',
            },
            {
                title: 'Smart Irrigation Technology',
                description: 'Rain sensors and programmable controllers for automated watering based on real-time conditions.',
            },
            {
                title: 'Professional Installation',
                description: 'Proper zoning, pressure regulation, and leak prevention ensure system longevity and efficiency.',
            },
            {
                title: 'Maintenance Services',
                description: 'System checks, cleaning, and repairs to keep your irrigation functioning flawlessly.',
            }
        ],
        howWeCanHelp:
            'We create water-wise irrigation systems that support plant health while minimizing waste and costs—perfect for Kenya’s diverse climates.',
        whyChoose:
            'Our irrigation solutions are smart, sustainable, and built for your landscape. We provide expert design, reliable installation, and ongoing support.'
    },
    {
        id: 10,
        title: 'Garden Renovation',
        description:
            'We rejuvenate tired or neglected gardens with design upgrades, healthier planting, and sustainable improvements that breathe new life into outdoor spaces.',
        image: '/services/garden-renovation.jpg',
        icon: <FaRecycle className="w-8 h-8" />,
        features: [
            {
                title: 'Comprehensive Garden Assessment',
                description: 'We evaluate layout, plant health, soil condition, and drainage to identify improvement opportunities.',
            },
            {
                title: 'Customized Renovation Plans',
                description: 'Strategic updates from redesign to irrigation upgrades and plant replacements tailored to your goals.',
            },
            {
                title: 'Soil Improvement and Pest Management',
                description: 'We amend soil and control pests for long-term plant health and ecosystem balance.',
            },
            {
                title: 'Sustainable Upgrades',
                description: 'We integrate native, water-wise plants and eco-friendly materials for lower maintenance and impact.',
            },
            {
                title: 'Ongoing Maintenance Support',
                description: 'Optional care plans including pruning, fertilizing, and seasonal upkeep to preserve the transformation.',
            }
        ],
        howWeCanHelp:
            'Our renovation services blend thoughtful design with horticultural science to refresh your garden and optimize its beauty and utility.',
        whyChoose:
            'From assessment to aftercare, YouLandscape transforms aging gardens into sustainable, stunning outdoor experiences that match your evolving lifestyle.'
    },
    {
        id: 11,
        title: 'Hardscape & Modification',
        description:
            'We design and build structural landscape elements like patios, walkways, retaining walls, and outdoor living spaces that enhance form and function.',
        image: '/services/hardscape-modification.jpg',
        icon: <FaCubes className="w-8 h-8" />,
        features: [
            {
                title: 'Custom Hardscape Design',
                description: 'We build patios, decks, driveways, and seating using quality materials that complement your garden.',
            },
            {
                title: 'Landscape Modifications',
                description: 'We reconfigure outdated or impractical layouts to improve traffic flow and curb appeal.',
            },
            {
                title: 'Retaining Walls & Drainage',
                description: 'Engineered solutions for erosion control and stability, with integrated stormwater management.',
            },
            {
                title: 'Outdoor Living Enhancements',
                description: 'Add pergolas, fire pits, outdoor kitchens, and more to extend your living space outdoors.',
            }
        ],
        howWeCanHelp:
            'We blend structural expertise with creative design to transform underused or outdated outdoor areas into functional, visually compelling environments.',
        whyChoose:
            'YouLandscape delivers durable, climate-smart hardscaping solutions using premium materials and precise construction suited to Kenyan terrain.'
    },
    {
        id: 12,
        title: 'Landscape Supplies & Products',
        description:
            'We supply premium landscape materials and tools—including plants, stones, soils, irrigation gear, décor, and more—to support DIYers, developers, and contractors.',
        image: '/services/landscape-supplies.jpg',
        icon: <FaBoxes className="w-8 h-8" />,
        features: [
            {
                title: 'Plants & Greenery',
                description: 'Wide range of potted plants, trees, shrubs, aquatic plants, and ground covers suited for Kenyan climates.',
            },
            {
                title: 'Hardscape Materials',
                description: 'Natural stones, cabro blocks, and colored pebbles for durable and attractive pathways and walls.',
            },
            {
                title: 'Irrigation & Water Management',
                description: 'Drip systems, sprinklers, rainwater harvesting tools, and installation accessories.',
            },
            {
                title: 'Garden Décor & Enhancements',
                description: 'Outdoor lighting, furniture, vertical garden systems, and rock garden installations.',
            },
            {
                title: 'Soils & Fertilizers',
                description: 'Topsoil, compost, organic manure, and specialty fertilizers to support plant health.',
            },
            {
                title: 'Tools & Services',
                description: 'Gardening tools, live fence installation, pest control, greenhouse management, and rooftop garden supplies.',
            }
        ],
        howWeCanHelp:
            'We deliver reliable, climate-resilient landscaping supplies along with expert advice for selection and integration into your project.',
        whyChoose:
            'Our products are locally sourced, sustainably packaged, and professionally supported—ensuring every garden has the best foundation to thrive.'
    }
];

export default function ServiceDetails() {
    const { title } = useParams();
    const service = services.find((service) => service.title.toLowerCase() === fromSlug(title).toLowerCase());

    if (!service) {
        return <div className="text-center text-red-500 text-lg font-semibold mt-10">Service not found</div>;
    }

    return (
        <div className="serviceDetailsContainer max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            {/* Service Title */}
            <h1 className="serviceTitle text-3xl font-bold text-green-600 text-center mb-6">{service.title}</h1>

            {/* Service Image */}
            <img src={service.image} alt={service.title} className="serviceImage w-full h-auto rounded-lg mb-6 shadow-md" />

            {/* Service Description */}
            <p className="serviceDescription text-lg text-gray-700 mb-6 leading-relaxed">{service.description}</p>

            {/* Features Section */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
            <ul className="featuresList list-disc list-inside space-y-4 mb-6">
                {service.features.map((feature, index) => (
                    <li key={index} className="text-gray-800">
                        <strong>{feature.title}</strong>
                        <p className="text-gray-600">{feature.description}</p>
                    </li>
                ))}
            </ul>

            {/* How We Can Help Section */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Can Help</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">{service.howWeCanHelp}</p>

            {/* Why Choose Us Section */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-700 leading-relaxed">{service.whyChoose}</p>
        </div>
    );
}