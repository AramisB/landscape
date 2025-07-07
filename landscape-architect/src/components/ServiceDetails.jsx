import { useParams, Link } from 'react-router-dom';
import {
    FaDraftingCompass,
    FaLeaf,
    FaProjectDiagram,
    FaTasks,
    FaWater,
    FaSwimmingPool,
    FaTint,
    FaRecycle,
    FaTools,
    FaComments,
    FaCubes,
    FaBoxes
} from "react-icons/fa";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Utility function to convert title to slug
function toSlug(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/&/g, 'and') // Replace & with 'and' for consistency
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with dash
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing dashes
}

// Utility function to convert slug back to title
function fromSlug(slug) {
    return slug
        .replace(/-/g, ' ')
        .replace(/\band\b/g, '&') // Replace 'and' with & for display
        .replace(/\s+/g, ' ') // Collapse multiple spaces
        .trim();
}

export const services = [
    {
        id: 1,
        title: 'Landscape Consultation',
        description:
            'We offer expert landscape consultancy services in Kenya, assisting, you, the client to make informed decisions delivering tailored garden maintenance strategies and sustainable future development plans for eco-conscious and thriving outdoor spaces.',
        image: '/home/services/landscape-consultation.webp',
        icon: <FaComments className="w-8 h-8" />,
        features: [
            {
                title: 'Tailored Garden Maintenance Plans for Kenyan Climates',
                description: `Every garden has unique needs. Our consultants craft personalized maintenance schedules covering pruning, fertilization, and irrigation tailored to Kenya's dry seasons and rainy periods. We prioritize drought-resistant native plants and water-saving drip systems, ensuring your garden remains lush while conserving resources. Regular soil health checks and pH balancing safeguard plant vitality, turning high-maintenance lawns into sustainable oases.`,
            },
            {
                title: 'Future-Proof Landscape Development & Design',
                description: `Effective garden planning is key to bringing your landscape vision to life. Our expert consultants take the time to understand your long-term goals, personal style, and budget. We create a tailored and sustainable garden development plan that evolves with your needs—introducing new plant varieties, designing functional outdoor living spaces, optimizing layouts, and enhancing features. Our goal is to ensure your outdoor space remains beautiful, practical, and in harmony with your vision for years to come.`,
            },
            {
                title: 'Integrated Pest & Disease Control',
                description: `Protecting your garden from pests and diseases is fundamental to long-term vitality. Our consultants assess potential threats, advise on resilient plant selections, and implement integrated pest management (IPM) strategies. With expert guidance on sanitation practices and eco-friendly treatment options, we help safeguard your landscape against future outbreaks.`,
            },
            {
                title: 'Collaborative, Client-First Consultations',
                description: `Your input shapes every decision. Through workshops and site walks, we refine designs to match your lifestyle—whether creating child-safe play areas or serene retirement gardens. Transparent cost breakdowns and flexible timelines ensure projects stay on track, while WhatsApp-based support provides instant answers to urgent queries.`,
            }
        ],
        howWeCanHelp:
            `At YouLandscape, Kenya's best landscape consultancy, we empower homeowners and businesses with science-backed solutions to create, maintain, and enhance outdoor spaces that thrive in East Africa's unique climate. Our team of expert landscape consultants with certified horticulturists combine decades of local expertise with global best practices to deliver actionable strategies for gardens that bloom year-round.`,
        whyChoose:
            `• Expert Horticultural Insight: Stay ahead with advice from consultants who keep pace with the latest in sustainable landscaping and plant science.
• Personalized Attention: Enjoy dedicated support, detailed recommendations, and hands-on collaboration from concept through implementation.
• Proven Success: From robust maintenance routines to inspired landscape transformations, we're committed to delivering exceptional, enduring results.`,
    },
    {
        id: 2,
        title: 'Landscape Design',
        description:
            'At YouLandscape, we merge innovative design with sustainable practices to create outdoor spaces that elevate aesthetics and amplify property value. Our client tailored solutions—from drought-resistant native gardens to premium stone hardscapes—are engineered for Kenya\'s climate, ensuring beauty thrives year-round. Studies show professionally designed landscapes can boost property value by up to 20%, making your investment as practical as it is breathtaking.',
        image: '/home/services/landscape-design.webp',
        icon: <FaDraftingCompass className="w-8 h-8" />,
        features: [
            {
                title: 'Initial Consultation',
                description: `We start with a free consultation to discuss your goals, style, and budget. Our team conducts a detailed site assessment, analyzing topography, soil quality, sunlight patterns, and existing features to create a design that harmonizes with Kenya's natural environment.`,
            },
            {
                title: 'Plant Selection',
                description: `Our horticultural experts craft plant palettes tailored to your garden's unique conditions—whether sun-drenched Nairobi plots, coastal Mombasa retreats, or lush highland spaces. We combine native species and exotic varieties, prioritizing aesthetics, climate adaptability, and your lifestyle needs. Every selection optimizes soil health, light exposure, and maintenance preferences, ensuring a thriving, visually captivating garden that aligns with Kenya's diverse ecosystems.`,
            },
            {
                title: 'Garden Design & Features',
                description: `Our certified designers craft gardens that masterfully blend beauty and practicality for Kenya's diverse climates. We integrate natural stone pathways, entertainment-ready seating zones, and eco-conscious water features to create immersive outdoor experiences. Solar-powered lighting enhances safety and ambiance, while focal points like sculptural native trees or vertical gardens add artistic flair. Using 3D modeling tools, we visualize designs tailored to your lifestyle—ensuring every element withstands local weather while boosting property value.`,
            },
            {
                title: 'Collaborative Design Refinement',
                description: `We present interactive 3D visuals, allowing you to explore materials, plant placements, and layouts in real time. Revisions are incorporated until every detail aligns with your vision.`,
            },
            {
                title: 'Final Design Package',
                description: `Receive a comprehensive blueprint with plant schedules, hardscape specifications, and irrigation plans. Our designs adhere to Kenya's eco-standards and include cost estimates for seamless future implementation.`,
            },
            {
                title: 'Customer Satisfaction',
                description: `At YouLandscape, Kenya's leading landscape design firm, your happiness is our ultimate measure of success. We foster open collaboration through every phase of the design journey from initial concept sketches to 3D visualizations and final revisions. Our team keeps you engaged with weekly updates, virtual walkthroughs, and flexible adjustments, ensuring your vision guides every detail. Committed to exceeding expectations, we blend artistic creativity with eco-conscious planning to craft gardens that reflect your personality while thriving in Kenya's climate.`,
            }
        ],
        howWeCanHelp:
            `At YouLandscape, we specialize in sustainable, value-driven landscape design tailored to Kenya's unique climate and your personal vision. Our end-to-end design process transforms ideas into actionable blueprints that enhance aesthetics, functionality, and property value.`,
        whyChoose:
            `• Innovative, sustainable designs tailored to Kenya's climate
• Collaborative process with 3D visualization and client input
• Plant palettes and features that maximize beauty and value
• Commitment to customer satisfaction and long-term results`,
    },
    {
        id: 3,
        title: 'Landscape Implementation',
        description:
            'At YouLandscape, Kenya\'s best landscape contractors, we turn visionary designs into reality with professional, eco-conscious installation services. Our certified landscapers and horticulturists combine technical expertise with sustainable practices to transform outdoor spaces into functional, breathtaking environments tailored to Kenya\'s climate. From native plant installations and permeable stone pathways to water-smart irrigation systems, every project adheres to strict quality standards, ensuring durability and aesthetic perfection.',
        image: '/home/services/landscape-implementation.webp',
        icon: <FaTools className="w-8 h-8" />,
        features: [
            {
                title: 'Landscape Design and Planning',
                description: `Our process begins with an in-depth consultation to understand your preferences, lifestyle, and the specific characteristics of your site. We then develop detailed design plans that integrate site analysis—assessing soil quality, topography, and existing vegetation—to inform our approach. Our conceptual designs craft layouts that balance hardscape and softscape elements, ensuring both functionality and aesthetic appeal. Plant selection focuses on choosing indigenous and climate-resilient species to promote sustainability. To help you visualize the final outcome, we provide realistic 3D renderings that bring the design to life.`,
            },
            {
                title: 'Hardscape Installation',
                description: `We construct durable and visually appealing hardscape features that enhance functionality and add structure to your landscape. This includes the installation of patios and walkways using materials like natural stone, pavers, and concrete, as well as building retaining walls to address elevation changes and prevent soil erosion. We also create pergolas and gazebos, offering shaded areas for relaxation and entertainment, and design water features such as fountains, ponds, and waterfalls that add tranquility to your outdoor space.`,
            },
            {
                title: 'Softscape Development',
                description: `Our softscaping services focus on the living components of your landscape. We offer turf installation, laying natural or synthetic grass suited to your maintenance preferences. Our team arranges planting beds with flowers, shrubs, and trees to provide seasonal interest and promote biodiversity. We also enhance soil health and moisture retention through mulching and soil amendment practices.`,
            },
            {
                title: 'Irrigation and Drainage Systems',
                description: `Efficient water management is crucial for landscape longevity. We install irrigation systems, including drip or sprinkler setups tailored to your plants' needs. Our services also encompass rainwater harvesting systems to collect and utilize rainwater effectively. To prevent waterlogging, we implement proper grading and drainage channels, ensuring your landscape remains healthy and vibrant.`,
            },
            {
                title: 'Landscape Lighting',
                description: `We design and install lighting systems that highlight key features and improve safety. Our offerings include pathway lighting to ensure safe navigation after dark, accent lighting to showcase architectural and plant features, and security lighting to enhance the safety of your property.`,
            },
            {
                title: 'Quality Assurance & Handover',
                description: `We ensure excellence through a structured Quality Assurance and Handover process. Our team conducts thorough inspections at each project milestone—covering soil preparation, hardscape installation, and planting—to guarantee structural integrity and adherence to design specifications. Upon completion, we guide clients through a comprehensive walkthrough, demonstrating irrigation controls, discussing pruning schedules, and providing essential maintenance tips. To support the longevity of your landscape, we offer optional post-installation care packages, including seasonal pruning and soil testing, ensuring your outdoor space remains vibrant and healthy year-round.`,
            }
        ],
        howWeCanHelp:
            `At YouLandscape Architects & Consultants, we specialize in delivering holistic landscaping services that transform outdoor spaces into functional, aesthetically pleasing, and sustainable environments. Our comprehensive approach encompasses every phase of landscape development, ensuring that each project aligns with our clients' visions and the unique Kenyan climate.`,
        whyChoose:
            `• Expertise: Our team possesses extensive knowledge in horticulture and landscape architecture, ensuring each project is executed with precision.
• Customized Designs: We tailor each landscape plan to reflect your personal style and the unique characteristics of your property.
• Quality Materials: Utilizing high-quality materials guarantees longevity and sustainability in every installation.
• Client-Centric Approach: We prioritize your satisfaction, maintaining open communication throughout the project to ensure your expectations are met.`,
    },
    {
        id: 4,
        title: 'Landscape Maintenance',
        description:
            'Landscape maintenance involves the regular care and management of outdoor spaces to ensure they remain healthy, attractive, and functional. In Kenya, where climates range from Nairobi\'s dry seasons to Mombasa\'s humidity and the cooler highlands, tailored maintenance practices are essential.',
        image: '/home/services/landscape-maintenance.webp',
        icon: <FaLeaf className="w-8 h-8" />,
        features: [
            {
                title: 'Lawn Care',
                description: `Regular mowing, fertilization, aeration, and watering to keep lawns lush and healthy.`,
            },
            {
                title: 'Pruning and Trimming',
                description: `Shaping and removing dead or overgrown branches from trees and shrubs to promote growth and maintain aesthetics.`,
            },
            {
                title: 'Weed and Pest Control',
                description: `Implementing strategies to prevent and eliminate unwanted plants and pests that can harm the landscape.`,
            },
            {
                title: 'Soil Health',
                description: `Enhancing soil quality through mulching and amendments to support plant vitality.`,
            },
            {
                title: 'Irrigation Management',
                description: `Installing and maintaining efficient watering systems to ensure plants receive adequate moisture without waste.`,
            },
            {
                title: 'Seasonal Clean-ups',
                description: `Removing debris, fallen leaves, and preparing the landscape for changing weather conditions.`,
            }
        ],
        howWeCanHelp:
            `At YouLandscape, the best landscape maintenance provider, we ensure your outdoor spaces remain vibrant, healthy, and visually stunning year-round. Our certified landscape architects and technicians deliver tailored care programs designed for Kenya's diverse climates, from Nairobi's seasonal shifts to Mombasa's coastal humidity.`,
        whyChoose:
            `Our commitment to excellence, sustainability, and client satisfaction sets us apart. By choosing YouLandscape, you're investing in a team that values the health of your garden and the environment. We stay abreast of the latest landscaping practices and technologies to provide you with top-tier landscape maintenance services.

Experience the difference of working with professionals dedicated to enhancing and preserving the natural beauty of your outdoor spaces. Contact YouLandscape Architects & Consultants today to learn more about our landscape maintenance services and how we can help your garden flourish.`,
    },
    {
        id: 5,
        title: 'Master Planning',
        description:
            'We design large-scale, sustainable outdoor layouts that organize space, resources, and aesthetics into cohesive long-term visions.',
        image: '/home/services/master-planning.webp',
        icon: <FaProjectDiagram className="w-8 h-8" />,
        features: [
            {
                title: 'Initial Consultation and Goal Setting',
                description: `The process begins with a detailed discussion to understand the client's vision, goals, budget, and timeline. This step establishes priorities and key objectives for the landscape project.`,
            },
            {
                title: 'Site Analysis and Survey',
                description: `A thorough assessment of the site is conducted, including soil testing, topography mapping, climate considerations, existing vegetation, drainage patterns, and access points. This data forms the basis for informed decision-making.`,
            },
            {
                title: 'Concept Development and Zoning',
                description: `Based on the site analysis and client goals, conceptual layouts are created to organize space effectively. Zoning divides the area into functional sections—such as recreational zones, planting areas, pathways, and water features—to optimize usability and flow.`,
            },
            {
                title: 'Preliminary Design and Feedback',
                description: `Initial design drafts or sketches are presented to the client for review. Feedback is gathered to refine the concept, ensuring it aligns with the client's preferences and practical needs.`,
            },
            {
                title: 'Detailed Master Plan Creation',
                description: `Once approved, a comprehensive master plan is developed. This includes detailed drawings, planting plans, hardscape designs, irrigation layouts, and infrastructure placement. Sustainability and maintenance considerations are integrated at this stage.`,
            },
            {
                title: 'Phased Implementation Strategy',
                description: `A timeline for phased development is established to guide construction and planting over time. This allows for budget management and ensures each stage complements the overall vision.`,
            },
            {
                title: 'Final Presentation and Documentation',
                description: `The completed master plan is presented with all relevant documentation, including specifications, cost estimates, and maintenance guidelines to ensure smooth execution and long-term success.`,
            }
        ],
        howWeCanHelp:
            `At YouLandscape Architects & Consultants, we deliver expert master planning services tailored to your vision and budget. Our team conducts thorough site analysis and creates strategic, sustainable designs that optimize your outdoor space. Whether for residential, commercial, or public projects, we provide clear plans and phased implementation to ensure your landscape thrives over time.`,
        whyChoose:
            `At YouLandscape, we combine design expertise with sustainable practices to deliver exceptional landscaping solutions across Kenya. Our team of licensed landscape architects and horticulture specialists brings deep knowledge of local climates, soils, and native plant species. We prioritize personalized service, eco-friendly methods, and long-term value—ensuring every project is beautiful, functional, and built to last. From concept to completion, YouLandscape is your trusted partner in creating outdoor spaces that inspire.`,
    },
    {
        id: 6,
        title: 'Project Management',
        description:
            'At YouLandscape, our project management approach brings together a multidisciplinary team of experts—including landscape architects, certified project managers, skilled landscapers, electricians, masons, and plumbers. We coordinate every detail of your landscape project, ensuring smooth execution from concept to completion. Our integrated team structure allows us to manage timelines, quality, and budgets effectively delivering functional, aesthetically pleasing outdoor spaces with precision and professionalism.',
        image: '/home/services/project-management.webp',
        icon: <FaTasks className="w-8 h-8" />,
        features: [
            {
                title: 'Integrated Landscape Design & Build Expertise',
                description: `Our registered landscape architects excel in both creative design and technical planning. Using industry-leading landscape design software, we develop detailed, regulation-compliant plans that bring your vision to life. We blend aesthetics with function, ensuring every design meets Kenya's environmental conditions and your unique requirements.`,
            },
            {
                title: 'Professional Project Coordination',
                description: `Our project managers handle all logistics, timelines, and team coordination—keeping your project organized from start to finish. With a strong focus on scheduling, procurement, and resource allocation, they ensure that all landscape construction activities progress smoothly and meet agreed timelines. This efficient workflow minimizes delays and keeps your landscaping project on track.`,
            },
            {
                title: 'On-Site Landscape Supervision',
                description: `For larger installations, our skilled site supervisors ensure that daily operations align with design specifications and quality standards. They manage ground teams, monitor safety, and resolve any on-site challenges in real time. Their direct oversight ensures flawless implementation of every hardscape and softscape element.`,
            },
            {
                title: 'Client-Centric Collaboration',
                description: `We believe successful project management starts with listening. From the first consultation to project completion, we maintain open, transparent communication. Our team keeps you updated at every stage, incorporates your feedback, and ensures the final result reflects your expectations—both functionally and visually.`,
            },
            {
                title: 'Quality Assurance & Customer Satisfaction',
                description: `At YouLandscape, quality craftsmanship and client satisfaction are at the heart of every project. Our attention to detail, reliable communication, and commitment to excellence ensure we deliver landscapes that are not only beautiful but built to last. We aim to exceed your expectations in every aspect of our service.`,
            }
        ],
        howWeCanHelp:
            `At YouLandscape, we offer expert landscape project management services to ensure your outdoor space is transformed seamlessly—on time and within budget. Our multidisciplinary team includes landscape architects, certified project managers, experienced landscapers, electricians, masons, and plumbers—bringing a full range of expertise under one roof for efficient and cohesive project delivery.`,
        whyChoose:
            `With a fully integrated team and proven project delivery systems, YouLandscape Architects & Consultants is your trusted partner for residential, commercial, and public landscape development. We handle everything—from initial planning to final handover—so you can enjoy a stress-free experience and outstanding results. Contact us today to discuss your project and discover how our end-to-end landscape project management services can bring your vision to life.`,
    },
    {
        id: 7,
        title: 'Water Features',
        description:
            'We design and install custom water features that enhance your outdoor space\'s beauty and tranquility. From concept to completion, our expert team ensures sustainable, efficient, and durable solutions tailored to your vision and site conditions. We also offer maintenance plans to keep your water features looking pristine year-round, making the process hassle-free for you.',
        image: '/home/services/water-features.webp',
        icon: <FaWater className="w-8 h-8" />,
        features: [
            {
                title: 'Tailored Water Feature Design',
                description: `Our landscape architects collaborate closely with you to create a water feature that complements your style, space, and site conditions. We assess factors such as sunlight, elevation, soil type, and proximity to utilities to determine the best design. Whether you envision a minimalist reflecting pool or a vibrant koi pond, our designs balance visual impact with long-term functionality.`,
            },
            {
                title: 'Types of Water Features We Install',
                description: `• Garden Fountains: Classic or contemporary, perfect for courtyards, entryways, and patios.
• Reflecting Pools: Sleek and modern, offering symmetry and calm.
• Cascading Waterfalls: Natural stone or architectural designs that bring dynamic movement and sound.
• Ponds & Aquascapes: Create thriving ecosystems with aquatic plants and ornamental fish.
• Water Walls: Ideal for modern spaces, offering vertical interest and ambient noise control.`,
            },
            {
                title: 'Eco-Friendly and Efficient Systems',
                description: `Sustainability is at the core of our design philosophy. Our water features use recirculating pump systems to conserve water and bio-filtration systems to maintain water quality naturally. We also provide solar-powered pump options to reduce energy use and environmental impact.`,
            },
            {
                title: 'Professional Installation and Engineering',
                description: `Our skilled technicians and masons handle every aspect of the installation—from excavation and waterproofing to plumbing and finishing. We ensure proper leveling, drainage, and structural integrity to prevent leaks and system failures. All electrical components are installed to code, and safety measures are prioritized, especially in family or public spaces.`,
            },
            {
                title: 'Integrated Lighting and Automation',
                description: `We enhance your water feature with low-voltage LED lighting, perfect for evening ambiance and visual drama. Optional smart systems allow you to automate timers, flow settings, and lighting for added convenience and energy efficiency.`,
            },
            {
                title: 'Maintenance Support and Aftercare',
                description: `YouLandscape offers tailored maintenance packages to keep your water feature pristine year-round. Services include seasonal cleaning, algae control, pump servicing, and water quality testing. We also provide client training for basic care and troubleshooting.`,
            }
        ],
        howWeCanHelp:
            `We design and install custom water features that enhance your outdoor space\'s beauty and tranquility. From concept to completion, our expert team ensures sustainable, efficient, and durable solutions tailored to your vision and site conditions. We also offer maintenance plans to keep your water features looking pristine year-round, making the process hassle-free for you.`,
        whyChoose:
            `• Custom-designed water features that suit your aesthetic and spatial goals
• Sustainable engineering for low water and energy use
• Expert installation by certified landscape architects and technicians
• Enhanced property value through visually striking outdoor elements
• End-to-end service from concept to maintenance

Let Your Garden Flow with Elegance
Contact YouLandscape Architects & Consultants today for a consultation and discover how a professionally designed water feature can transform your landscape into a serene, living masterpiece.`,
    },
    {
        id: 8,
        title: 'Swimming Pools',
        description:
            'At YouLandscape Architects & Consultants, we design and build custom swimming pools that elevate your outdoor space into a private oasis. Whether you desire a sleek modern pool, a naturalistic lagoon-style design, or a family-friendly recreational pool, our experts create solutions tailored to your lifestyle, site, and budget.',
        image: '/home/services/swimming-pools.webp',
        icon: <FaSwimmingPool className="w-8 h-8" />,
        features: [
            {
                title: 'Custom Pool Design',
                description: `Our team works closely with you to develop pool concepts that blend seamlessly with your landscape design. We consider factors such as pool size, shape, depth, and features like built-in seating, spas, or waterfalls. We also incorporate safety features and accessibility options as needed.`,
            },
            {
                title: 'High-Quality Construction and Materials',
                description: `We use durable, high-quality materials including concrete, fiberglass, and vinyl to ensure your pool is built to last. Our skilled contractors oversee every stage of construction — from excavation and plumbing to finishing and tiling — maintaining strict quality control throughout.`,
            },
            {
                title: 'Energy-Efficient Systems',
                description: `To reduce operational costs and environmental impact, we install energy-efficient pumps, filters, and heating systems. Options like solar pool heaters and LED lighting enhance sustainability and nighttime ambiance.`,
            },
            {
                title: 'Integrated Landscaping and Hardscaping',
                description: `We seamlessly integrate the pool area with surrounding landscaping, patios, decks, and lighting to create a cohesive outdoor living space. This holistic approach maximizes usability and aesthetic appeal.`,
            },
            {
                title: 'Maintenance and Aftercare',
                description: `YouLandscape offers tailored pool maintenance services, including cleaning, chemical balancing, and equipment servicing to keep your pool pristine year-round.`,
            }
        ],
        howWeCanHelp:
            `We specialize in designing and building custom swimming pools that perfectly complement your outdoor space. Our team handles everything from initial concept and design through construction and finishing, ensuring your pool is both beautiful and functional. We incorporate energy-efficient systems and integrate landscaping features to create a seamless, inviting environment. Plus, we offer ongoing maintenance services to keep your pool clean, safe, and enjoyable year-round.`,
        whyChoose:
            `• Personalized pool designs matching your vision and site
• Expert construction ensuring durability and safety
• Eco-friendly, energy-efficient systems for cost savings
• Integrated landscaping for a complete outdoor experience
• Comprehensive maintenance and support`,
    },
    {
        id: 9,
        title: 'Landscape Irrigation',
        description:
            'At YouLandscape Architects & Consultants, we design and install advanced landscape irrigation systems that conserve water while keeping your garden lush and healthy. Our irrigation solutions are customized to suit Kenya\'s diverse climates, ensuring optimal water use for residential and commercial landscapes alike.',
        image: '/home/services/irrigation.webp',
        icon: <FaTint className="w-8 h-8" />,
        features: [
            {
                title: 'Customized Irrigation Design',
                description: `Our experts assess your garden's size, soil type, plant species, and sun exposure to develop tailored irrigation plans. We design systems that provide precise water delivery to roots, minimizing waste and promoting plant health.`,
            },
            {
                title: 'Drip and Sprinkler Systems',
                description: `We install a variety of irrigation options, including drip irrigation for targeted watering of shrubs and flower beds, and sprinkler systems for lawns and larger areas. Each system is selected to maximize efficiency based on your landscape needs.`,
            },
            {
                title: 'Smart Irrigation Technology',
                description: `To enhance water conservation, we integrate smart controllers and rain sensors that adjust watering schedules based on weather conditions and soil moisture levels, reducing water consumption and lowering your utility bills.`,
            },
            {
                title: 'Installation and Maintenance',
                description: `Our skilled technicians handle professional installation, ensuring proper layout, pressure regulation, and leak prevention. We also offer ongoing maintenance and system checks to keep your irrigation running smoothly and efficiently.`,
            }
        ],
        howWeCanHelp:
            `At YouLandscape Architects & Consultants, we provide expert landscape irrigation solutions tailored to your garden's unique needs. Our team designs and installs efficient drip and sprinkler systems that conserve water while ensuring your plants receive the right amount of moisture. Using smart technology and sustainable practices, we help you maintain a healthy, thriving landscape with minimal water waste and lower utility costs.`,
        whyChoose:
            `• Expertly tailored irrigation designs for maximum efficiency
• Advanced drip and sprinkler systems suited to your plants
• Integration of smart technology for water-saving automation
• Professional installation and reliable maintenance services

Keep your garden vibrant and water-wise with expert irrigation solutions from YouLandscape Architects & Consultants. Contact us today to design a sustainable irrigation system for your outdoor space.`,
    },
    {
        id: 10,
        title: 'Garden Renovation',
        description:
            'We specialize in revitalizing tired or neglected gardens into vibrant, functional, and beautiful outdoor living spaces. Whether you want to update your garden\'s design, improve plant health, or enhance usability, our renovation services breathe new life into your landscape.',
        image: '/home/services/garden-renovation.webp',
        icon: <FaRecycle className="w-8 h-8" />,
        features: [
            {
                title: 'Comprehensive Garden Assessment',
                description: `Our team conducts a thorough evaluation of your existing garden, including soil quality, plant health, drainage, and layout. This helps us identify issues and opportunities for improvement.`,
            },
            {
                title: 'Customized Renovation Plans',
                description: `We develop tailored renovation strategies that may include replanting with climate-resilient native species, redesigning garden beds, updating irrigation systems, and enhancing hardscape elements like pathways and patios.`,
            },
            {
                title: 'Soil Improvement and Pest Management',
                description: `To support healthy plant growth, we amend soils and implement effective pest and disease control measures, ensuring your garden thrives long-term.`,
            },
            {
                title: 'Sustainable Upgrades',
                description: `Our renovations emphasize sustainability, incorporating water-wise plants, eco-friendly materials, and energy-efficient irrigation to reduce environmental impact.`,
            },
            {
                title: 'Ongoing Maintenance Support',
                description: `Post-renovation, we offer maintenance services to keep your garden looking its best, including pruning, fertilization, and seasonal clean-ups.`,
            }
        ],
        howWeCanHelp:
            `At YouLandscape Architects & Consultants, we revitalize your garden with tailored renovation plans that improve health, design, and sustainability. Our team uses native plants, soil improvement, and efficient irrigation to create beautiful, long-lasting outdoor spaces.`,
        whyChoose:
            `• Expert evaluation and tailored renovation plans
• Use of native, drought-resistant plants for sustainability
• Integrated pest control and soil health improvements
• Focus on eco-friendly and water-efficient solutions
• Comprehensive aftercare and maintenance packages

Refresh your outdoor environment with professional garden renovation services from YouLandscape Architects & Consultants. Contact us today to discuss how we can transform your garden into a thriving, beautiful space.`,
    },
    {
        id: 11,
        title: 'Hardscape & Modification',
        description:
            'At YouLandscape Architects & Consultants, we specialize in hardscape design and landscape modifications that bring structure, style, and functionality to your outdoor environment. Whether it\'s upgrading an old patio, installing retaining walls, or reconfiguring your layout, we tailor each project to suit your space, lifestyle, and Kenya\'s climate.',
        image: '/home/services/hardscape.webp',
        icon: <FaCubes className="w-8 h-8" />,
        features: [
            {
                title: 'Custom Hardscape Design',
                description: `We create durable and aesthetic hardscape elements such as walkways, driveways, patios, decks, stone walls, and seating areas using materials that complement your landscape and stand the test of time.`,
            },
            {
                title: 'Landscape Modifications',
                description: `From minor tweaks to full redesigns, we adjust existing layouts to improve usability, flow, and curb appeal—ideal for maturing gardens, expanding families, or changing property needs.`,
            },
            {
                title: 'Retaining Walls & Drainage Solutions',
                description: `We design retaining structures that solve slope issues and prevent soil erosion while doubling as design features. Integrated drainage systems ensure long-term stability.`,
            },
            {
                title: 'Outdoor Living Enhancements',
                description: `Add value and comfort with pergolas, fire pits, outdoor kitchens, and water features that turn your garden into a year-round living space.`,
            }
        ],
        howWeCanHelp:
            `We blend expert craftsmanship with thoughtful design to create hardscape solutions that are both functional and visually appealing. Whether you're renovating or starting fresh, we'll help you reimagine your outdoor space with precision and style.`,
        whyChoose:
            `At YouLandscape Architects & Consultants, we combine innovative design with expert craftsmanship to deliver durable, stylish hardscape and landscape modification solutions. Our team brings deep knowledge of Kenya's diverse climates and terrain, ensuring every structure—from patios and pathways to retaining walls—is built to last. We use premium materials, tailored designs, and sustainable practices to enhance both the beauty and functionality of your outdoor space. With a client-focused approach, we deliver custom results that match your vision, lifestyle, and long-term needs.`,
    },
    {
        id: 12,
        title: 'Landscape Supplies and Products',
        description:
            'At YouLandscape Architects & Consultants, we offer a wide range of landscape supplies and garden products tailored for residential, commercial, and institutional projects across Kenya. Whether you\'re installing a new garden, upgrading your outdoor space, or managing a rooftop or vertical garden, we provide reliable, high-quality materials and expert services to bring your vision to life.',
        image: '/home/services/supplies.webp',
        icon: <FaBoxes className="w-8 h-8" />,
        features: [
            {
                title: 'Plants & Greenery',
                description: `• Potted Plants for Sale: Flowering, ornamental, and foliage plants for indoor/outdoor décor.
• Aquatic Plants: For ponds, fountains, and wetland gardens.
• Trees & Shrubs: Indigenous and exotic species for shade, privacy, and beauty.
• Climbing Vines: For pergolas, trellises, and wall gardens.
• Ground Covers & Fillers: For erosion control and visual texture.
• Grass Varieties: Natural and synthetic turf for lawns, sports fields, and commercial landscapes.`,
            },
            {
                title: 'Hardscape Materials',
                description: `• Natural Stones: Flagstones, decorative pebbles, and boulders for pathways, water features, and retaining walls.
• Colored Pebbles: Available in various sizes and tones.
• Cabro Blocks (Pavers): High-quality paving blocks for driveways, patios, and walkways, with installation services.`,
            },
            {
                title: 'Irrigation & Water Management',
                description: `• Irrigation Systems: Design, installation, and repair of drip and sprinkler systems.
• Rainwater Harvesting Equipment: Tanks, filters, and distribution systems for water conservation.`,
            },
            {
                title: 'Garden Enhancements & Décor',
                description: `• Garden Lights Installation: Energy-efficient outdoor lighting.
• Garden Furniture: Weather-resistant sets for lounging and dining.
• Vertical Gardens & Living Walls: Green wall systems for urban spaces.
• Rock Gardens Installation: Drought-tolerant designs using natural stone.`,
            },
            {
                title: 'Soils, Fertilizers & Organics',
                description: `• Topsoil & Compost Soil: Nutrient-rich for planting areas.
• Fine Manure: Organic manure for fertility and water retention.
• Fertilizers: Balanced, plant-specific options for vibrant growth.`,
            },
            {
                title: 'Specialty Green Solutions',
                description: `• Greenhouse Management: Climate, irrigation, and pest control.
• Certified Seedlings Supply: For landscaping, reforestation, and agriculture.
• Roof Top Gardening: Lightweight soil, irrigation, and structural solutions.
• Herb Gardens & Supply: Culinary and medicinal herb installations.
• Indoor Plants: Easy-care options for homes and offices.`,
            },
            {
                title: 'Maintenance, Tools & Services',
                description: `• Gardening Tools & Equipment: From pruning shears to mowers.
• Tree Planting & Care: Selection, planting, and maintenance.
• Live Fence Installation: Natural privacy borders with hedge plants.
• Pest, Disease Control & Fumigation: Routine inspections and eco-safe treatments.
• Cleaning & Maintenance Services: Debris removal, pruning, and weeding.`,
            }
        ],
        howWeCanHelp:
            `Whether you're a homeowner, contractor, or property developer, YouLandscape provides expert advice and dependable delivery of landscaping materials tailored to your site's needs. Our products are selected for their durability, local suitability, and sustainable impact.`,
        whyChoose:
            `• Locally Sourced, Climate-Resilient Materials
• Eco-Friendly & Sustainable Options
• Reliable Supply & On-Time Delivery
• Expert Advice for Product Selection
• Integrated with Full-Service Landscaping`,
    }
];

export default function ServiceDetails() {
    const { title } = useParams();
    const service = services.find(
        (svc) => toSlug(svc.title) === title
    );

    // DEBUG: Log slugs for all services
    console.log('toSlug(Hardscape & Modification):', toSlug('Hardscape & Modification'));
    services.forEach(svc => console.log('Service:', svc.title, 'Slug:', toSlug(svc.title)));

    if (!service) {
        return <div className="text-center text-red-500 text-lg font-semibold mt-10">Service not found</div>;
    }

    // Helper to render feature descriptions as bullet lists if they contain "•"
    function renderFeatureDescription(desc, plain = false) {
        if (desc.includes('•')) {
            const items = desc
                .split('•')
                .map(item => item.trim())
                .filter(Boolean);
            return (
                <div className="space-y-1 text-gray-600">
                    {items.map((item, idx) => {
                        const [beforeColon, ...afterColon] = item.split(':');
                        return (
                            <div key={idx} className="mb-1 flex items-start">
                                <span>
                                    <span
                                        className={
                                            plain
                                                ? ""
                                                : "font-semibold text-[var(--text-black)]"
                                        }
                                    >
                                        {beforeColon.trim()}
                                        {afterColon.length ? ':' : ''}
                                    </span>
                                    {afterColon.length > 0 && (
                                        <span className="ml-1">{afterColon.join(':').trim()}</span>
                                    )}
                                </span>
                            </div>
                        );
                    })}
                </div>
            );
        }
        return <p className="text-gray-600">{desc}</p>;
    }

    return (
        <div>
            <Helmet>
                <title>{`${service.title} - YouLandscape Professional Services`}</title>
            </Helmet>
            {/* Image with title overlay */}
            <div className="relative w-full h-72 md:h-96">
                <img
                    src={service.image}
                    alt={`${service.title} - YouLandscape Professional Services`}
                    className="object-cover w-full h-full"
                    sizes="100vw"
                    priority={true}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
                        {service.title}
                    </h1>
                </div>
            </div>

            {/* Description */}
            <div className="max-w-5xl mx-auto px-4 py-8">
                {/* Two-column layout */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left: Features, How We Can Help, Why Choose Us */}
                    <div className="md:w-2/3">
                        {/* Why Choose Us Section */}
                        <h2 className="text-2xl font-semibold text-[var(--text-black)] mb-4">Why Choose Us</h2>
                        <div className="mb-6 text-[var(--text-black)] leading-relaxed">
                            {renderFeatureDescription(service.whyChoose, true)}
                        </div>
                        {/* Features Section */}
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
                        <ul className="featuresList list-disc list-inside space-y-4 mb-6">
                            {service.features.map((feature, index) => (
                                <li key={index} className="text-gray-800 mb-2 list-none">
                                    <strong className="block mb-1 text-green-600">{feature.title}</strong>
                                    <div>
                                        {renderFeatureDescription(feature.description)}
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* How We Can Help Section */}
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Can Help</h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">{service.howWeCanHelp}</p>
                    </div>

                    {/* Right: Sidebar with links */}
                    <div className="sidebar md:w-1/3 p-4 bg-gray-100 shadow-md rounded-lg h-fit">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Services</h2>
                        <ul className="space-y-2">
                            {services.map((svc) => (
                                <li key={svc.id}>
                                    <Link
                                        to={`/services/${toSlug(svc.title)}`}
                                        className={`text-green-600 hover:underline ${svc.title === service.title ? 'font-bold underline' : ''}`}
                                    >
                                        {svc.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}