import { FaLeaf, FaHandsHelping, FaBolt, FaRecycle, FaUsers, FaRocket } from "react-icons/fa";
const AboutUsDetails = [
    {
        id: "our-company",
        title: "Our Company",
        image: "/images/about-us/company.jpg",
        content: {
            description: `YouLandscape Architects and Consultants is a leading landscape architecture firm in Kenya, specializing in innovative, sustainable outdoor designs, master planning, and eco-conscious landscaping solutions. We blend artistry, engineering, and environmental science to create functional, stunning landscapes for homes, businesses, and public spaces.`,

            whoWeAre: `
YouLandscape is a registered limited company driven by a team of licensed landscape architects, horticulturists, and environmental design consultants. Our name reflects our mission: to craft landscapes that resonate with you—your lifestyle, your space, and your vision.

With over a decade of expertise, we’ve transformed countless properties across Kenya, from urban rooftops to sprawling estates, using cutting-edge design principles and sustainable practices. Our goal? To turn underutilized spaces into living, breathing works of art.
    `,

            coreValues: [
                "Customer-centric",
                "Ecofriendly",
                "Integrity",
                "Efficiency",
                "Precision",
                "Reliability",
                "Affordable"
            ],

            mission: `Revolutionizing Kenya’s landscaping with meticulous craftsmanship, sustainable innovation, and client-focused excellence to create stunning, eco-friendly outdoor spaces.`,

            vision: `To become Kenya’s leading landscaping firm delivering exceptional, client-focused designs that redefine outdoor spaces and surpass expectations.`,

            slogan: `Transforming spaces and enhancing lives`
        }
    },
    {
        id: "why-choose-us",
        title: "Why Choose Us",
        image: "/images/about-us/why-choose-us.jpg",
        content: [
            {
                icon: <FaBolt className="text-orange-500 text-3xl" />,
                title: "Experience and Expertise",
                text: "With a decade of transforming Kenya’s landscapes, our proven track record speaks for itself. From luxury residential gardens to large-scale commercial projects, our skilled architects deliver innovative, functional, and timeless outdoor designs.",
            },
            {
                icon: <FaRecycle className="text-green-600 text-3xl" />,
                title: "Eco-Conscious Landscaping Solutions",
                text: "Sustainability isn’t just a trend—it’s our core philosophy. We prioritize eco-friendly materials, water-efficient irrigation, and native plantings to create landscapes that thrive while reducing environmental impact.",
            },
            {
                icon: <FaHandsHelping className="text-blue-500 text-3xl" />,
                title: "Client-Focused Collaboration",
                text: "Your vision drives our process. We work hand-in-hand with you—from initial sketches to final installation—ensuring every detail aligns with your lifestyle, budget, and aesthetic goals.",
            },
            {
                icon: <FaLeaf className="text-green-700 text-3xl" />,
                title: "Custom Designs",
                text: "No two landscapes are alike. Whether it’s a serene backyard retreat or a dynamic corporate green space, we craft custom designs that blend functionality, beauty, and cutting-edge trends.",
            },
            {
                icon: <FaUsers className="text-purple-600 text-3xl" />,
                title: "Premium Quality, Competitive Pricing",
                text: "Exceptional landscapes shouldn’t break the bank. Our cost-effective solutions combine smart material selection and efficient project management to deliver high-end results at fair prices.",
            },
            {
                icon: <FaRocket className="text-pink-500 text-3xl" />,
                title: "Creative and Meticulous",
                text: "Creativity flourishes in the details. Our team’s meticulous craftsmanship ensures flawless execution—from the grand layout to the finest finishing touches.",
            },
        ]
    },
    {
        id: "our-team",
        title: "Meet Our Team",
        image: "/images/team/team.jpg",
        content: "At YouLandscape Architects & Consultants, we're powered by a dynamic team of passionate professionals who combine youthful innovation with years of hands-on experience. Our certified landscape architects, horticulturists, and design specialists share a unified mission: transforming Kenya's outdoor spaces through sustainable, breathtaking designs.",
        members: [
            {
                id: "carllewis",
                name: "Carllewis Chweya",
                role: "Lead Landscape Architect – Head of Design",
                imageUrl: "/images/team/carllewis.jpg",
                bio: `Carllewis Chweya is a landscape architect with 6 + years of hands- on experience.He holds a BSc in Landscape Architecture from Jomo Kenyatta University of Agriculture and Technology(JKUAT).His expertise spans sustainable design, urban greening, and innovative landscape solutions that blend functionality with aesthetic excellence.`,
                instagram: "https://instagram.com/carllewis",
                linkedin: "https://linkedin.com/in/carllewis",
            },
            {
                id: "rogers",
                name: "Rogers Kirui",
                role: "Landscape Architect – Head of Implementations",
                imageUrl: "/images/team/rogers.jpg",
                bio: `Rogers Kirui is a certified Landscape Architect with 6 + years' experience, holding a BSc in Landscape Architecture from JKUAT. As our Head of Implementation, he specializes in transforming designs into sustainable, functional landscapes. His expertise covers urban greening, eco-conscious solutions, and precision project execution.`,
                instagram: "https://instagram.com/rogerskirui",
                linkedin: "https://linkedin.com/in/rogerskirui",
            },
            {
                id: "brenda",
                name: "Brenda Aramis",
                role: "Marketing Manager",
                imageUrl: "/images/team/brenda.jpg",
                bio: `Brenda is our dynamic Marketing Manager with expertise in brand strategy and digital growth for landscape architecture. She drives our market presence through innovative campaigns that connect clients with our sustainable design solutions.`,
                instagram: "https://instagram.com/brendaaramis",
                linkedin: "https://linkedin.com/in/brendaaramis",
            }
        ]
    },

    {
        id: "working-process",
        title: "Working Process",
        image: "/images/working-process/working-process.jpg",
        content: `
At YouLandscape Architects & Consultants, we believe that a well-defined process is the backbone of successful landscaping projects. Our approach combines creativity, technical expertise, and a commitment to sustainability, ensuring that every project not only meets but exceeds client expectations.
  `,
        steps: [
            {
                title: "1. Initial Consultation & Vision Alignment",
                description: `Every project begins with a free, in-depth consultation to understand your vision, budget, and functional needs. Whether you’re envisioning a serene backyard oasis or a dynamic commercial greenspace, we combine your ideas with our expertise to outline a clear roadmap aligned with your design aesthetics, sustainability goals, and timelines.`,
                image: "/images/working-process/consultation.jpg"
            },
            {
                title: "2. Site Assessment",
                description: `Our certified professionals conduct a comprehensive evaluation of your site—analyzing topography, drainage patterns, sunlight exposure, and soil conditions. This helps us craft climate-resilient designs optimized for water efficiency and plant compatibility with Kenya’s diverse ecosystems.`,
                image: "/images/working-process/site-assessment.jpg"
            },
            {
                title: "3. Design & Planning",
                description: `Based on the consultation and assessment, we produce customized design plans that include plant selections, hardscape features, irrigation systems, and lighting concepts. Using advanced 2D/3D visualization tools, we present a clear picture of the proposed development before implementation.`,
                image: "/images/working-process/design-planning.jpg"
            },
            {
                title: "4. Proposal & Agreement",
                description: `Once the design is finalized, we present a transparent proposal outlining the scope of work, locally sourced eco-materials, realistic timelines, and costs. We ensure you’re fully confident with the plan before moving forward by answering all questions and signing a clear digital agreement.`,
                image: "/images/working-process/proposal-agreement.jpg"
            },
            {
                title: "5. Project Execution",
                description: `Our skilled team implements the plan using sustainable materials and proven techniques. We install hardscapes, native plants, and smart irrigation systems with precision and efficiency, adhering to Kenya’s top landscaping and safety standards.`,
                image: "/images/working-process/execution.jpg"
            },
            {
                title: "6. Regular Updates",
                description: `We keep you informed with weekly progress reports, photos, and updates through WhatsApp or email. Our team is flexible and responsive to feedback, ensuring your vision is honored throughout the build.`,
                image: "/images/working-process/updates.jpg"
            },
            {
                title: "7. Quality Assurance",
                description: `Our certified team conducts multi-phase inspections—from soil compaction to final audits—to validate integrity, durability, and compliance with Kenya’s top landscaping standards. We go beyond expectations to ensure beauty and performance.`,
                image: "/images/working-process/quality-assurance.jpg"
            },
            {
                title: "8. Project Completion",
                description: `We conduct a final walkthrough with you to ensure everything meets your expectations. Any final adjustments are made promptly. We also offer optional annual care packages for ongoing peace of mind.`,
                image: "/images/working-process/completion.jpg"
            },
            {
                title: "9. Ongoing Support",
                description: `Our partnership doesn’t end at handover. We provide tailored maintenance, seasonal adjustments, storm recovery, and landscape upgrades through our 24/7 support channels.`,
                image: "/images/working-process/ongoing-support.jpg"
            }
        ]
    }
]

export default AboutUsDetails;