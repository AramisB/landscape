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

With over a decade of expertise, we've transformed countless properties across Kenya, from urban rooftops to sprawling estates, using cutting-edge design principles and sustainable practices. Our goal? To turn underutilized spaces into living, breathing works of art.
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

            mission: `Revolutionizing Kenya's landscaping with meticulous craftsmanship, sustainable innovation, and client-focused excellence to create stunning, eco-friendly outdoor spaces.`,

            vision: `To become Kenya's leading landscaping firm delivering exceptional, client-focused designs that redefine outdoor spaces and surpass expectations.`,

            slogan: `Transforming spaces and enhancing lives`,
            workingProcess: {
                intro: "From concept to care — we deliver excellence at every stage.",
                steps: [
                    {
                        title: "1. Initial Consultation & Vision Alignment",
                        description: "We start with a free consultation to align your vision, goals, and budget for your landscape project.",
                        image: "/images/working-process/consultation.jpg"
                    },
                    {
                        title: "2. Site Assessment",
                        description: "Our experts assess your site's unique conditions to inform a climate-adapted, efficient design.",
                        image: "/images/working-process/site-assessment.jpg"
                    },
                    {
                        title: "3. Design and Planning",
                        description: "We create a custom landscape plan with plant, hardscape, and lighting selections for your needs.",
                        image: "/images/working-process/design-planning.jpg"
                    },
                    {
                        title: "4. Proposal & Agreement",
                        description: "You receive a clear proposal with costs, timeline, and eco-friendly materials for full transparency.",
                        image: "/images/working-process/proposal-agreement.jpg"
                    },
                    {
                        title: "5. Project Execution",
                        description: "Our team implements your design with quality checks and sustainable practices at every stage.",
                        image: "/images/working-process/execution.jpg"
                    },
                    {
                        title: "6. Regular Updates",
                        description: "We keep you informed with weekly progress reports and adapt quickly to your feedback.",
                        image: "/images/working-process/updates.jpg"
                    },
                    {
                        title: "7. Quality Assurance: Precision-Driven Excellence",
                        description: "Rigorous inspections ensure every detail meets Kenya's top landscaping standards and your expectations.",
                        image: "/images/working-process/quality-assurance.jpg"
                    },
                    {
                        title: "8. Project Completion",
                        description: "We finalize your landscape with a detailed walkthrough and offer ongoing care options.",
                        image: "/images/working-process/completion.jpg"
                    },
                    {
                        title: "9. Ongoing Support: Lifelong Partnership in Landscape Excellence",
                        description: "Enjoy tailored maintenance and 24/7 expert support to keep your landscape thriving year-round.",
                        image: "/images/working-process/ongoing-support.jpg"
                    }
                ]
            }
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
                text: "With a decade of transforming Kenya's landscapes, our proven track record speaks for itself. From luxury residential gardens to large-scale commercial projects, our skilled architects deliver innovative, functional, and timeless outdoor designs.",
            },
            {
                icon: <FaRecycle className="text-green-600 text-3xl" />,
                title: "Eco-Conscious Landscaping Solutions",
                text: "Sustainability isn't just a trend—it's our core philosophy. We prioritize eco-friendly materials, water-efficient irrigation, and native plantings to create landscapes that thrive while reducing environmental impact.",
            },
            {
                icon: <FaHandsHelping className="text-blue-500 text-3xl" />,
                title: "Client-Focused Collaboration",
                text: "Your vision drives our process. We work hand-in-hand with you—from initial sketches to final installation—ensuring every detail aligns with your lifestyle, budget, and aesthetic goals.",
            },
            {
                icon: <FaLeaf className="text-green-700 text-3xl" />,
                title: "Custom Designs",
                text: "No two landscapes are alike. Whether it's a serene backyard retreat or a dynamic corporate green space, we craft custom designs that blend functionality, beauty, and cutting-edge trends.",
            },
            {
                icon: <FaUsers className="text-purple-600 text-3xl" />,
                title: "Premium Quality, Competitive Pricing",
                text: "Exceptional landscapes shouldn't break the bank. Our cost-effective solutions combine smart material selection and efficient project management to deliver high-end results at fair prices.",
            },
            {
                icon: <FaRocket className="text-pink-500 text-3xl" />,
                title: "Creative and Meticulous",
                text: "Creativity flourishes in the details. Our team's meticulous craftsmanship ensures flawless execution—from the grand layout to the finest finishing touches.",
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
At YouLandscape, we combine scientific precision with efficient workflows to deliver projects faster without compromising quality. Our optimized system ensures your landscape vision becomes a reality swiftly and seamlessly.

**Landscape Design and Implementation**

We pride ourselves on delivering Kenya's most efficient, sustainable, and client-focused landscaping services with meticulously crafted workflow, designed to ensure transparency, quality, and lasting results.
  `,
        steps: [
            {
                title: "1. Initial Consultation & Vision Alignment",
                description: `Every project begins with a free, in-depth consultation to understand your vision, budget, and functional needs. Our team listens carefully to your ideas, whether you're envisioning a serene backyard oasis or a dynamic commercial greenspace. We combine your input with our decade of expertise to outline a clear roadmap, ensuring alignment on timelines, sustainability goals, and design aesthetics before proceeding.`,
                image: "/images/working-process/consultation.jpg"
            },
            {
                title: "2. Site Assessment",
                description: `Next, our certified professionals conduct a detailed site evaluation where we analyze topography, drainage patterns, sunlight exposure, and existing vegetation to identify opportunities and challenges unique to your property. This data-driven approach allows us to craft designs that harmonize with Kenya's diverse climates, optimize water efficiency, and select native plants suited to your soil type and nutrient profile.`,
                image: "/images/working-process/site-assessment.jpg"
            },
            {
                title: "3. Design and Planning",
                description: `Based on the information gathered from the initial consultation and site assessment, our experienced designers create a customized landscape design plan. This plan includes various elements such as plant selections, hardscape features, irrigation systems, and lighting concepts. We use advanced software and visualization tools to present the design plan to you, giving you a clear picture of the proposed landscape development.`,
                image: "/images/working-process/design-planning.jpg"
            },
            {
                title: "4. Proposal & Agreement",
                description: `After finalizing your design, we provide a detailed proposal outlining the scope of work, eco-conscious materials (sourced locally for sustainability), realistic timelines, and transparent cost estimates. We prioritize open communication, addressing every query to refine terms until you're fully confident. Once approved, a digital agreement ensures seamless transition to the implementation phase, with no hidden costs and guaranteed accountability.`,
                image: "/images/working-process/proposal-agreement.jpg"
            },
            {
                title: "5. Project Execution",
                description: `Our certified landscape architects, landscapers and technicians execute your project on schedule, merging speed with meticulous attention to detail. Adhering to Kenya's top industry and safety standards, we install eco-friendly hardscapes, drought-resistant native plants, and smart irrigation systems, ensuring every element aligns with your design plan. Quality checks at each phase guarantee durable, visually stunning results—delivered promptly without compromising quality.`,
                image: "/images/working-process/execution.jpg"
            },
            {
                title: "6. Regular Updates",
                description: `We prioritize real-time communication, ensuring you're informed at every stage via weekly progress reports and photo updates. Open to feedback, we adapt swiftly—whether adjusting plant placements, modifying hardscape materials, or refining timelines—to align with your vision. Our digital collaboration tools (WhatsApp/email updates) and scheduled check-ins foster a partnership-driven approach, guaranteeing your landscape evolves exactly as envisioned, on time and within budget.`,
                image: "/images/working-process/updates.jpg"
            },
            {
                title: "7. Quality Assurance: Precision-Driven Excellence",
                description: `At YouLandscape, quality is non-negotiable. Our certified team conducts rigorous multi-phase inspections aligned with Kenya's top landscaping standards, ensuring every hardscape, irrigation line, and plant installation meets exacting benchmarks. From soil compaction tests to post-completion durability audits, we validate structural integrity, aesthetic precision, and eco-compliance. Your satisfaction is our ultimate metric, we deliver landscapes that not only meet but exceed expectations, built to thrive in Kenya's unique climate.`,
                image: "/images/working-process/quality-assurance.jpg"
            },
            {
                title: "8. Project Completion",
                description: `We conclude every project with a meticulous walkthrough, ensuring every detail aligns with your vision and our stringent quality benchmarks. Any final tweaks—from plant repositioning to irrigation calibration—are resolved promptly. Our commitment extends beyond handover: opt for our annual care packages to keep your landscape thriving, or reach out anytime for expert advice.`,
                image: "/images/working-process/completion.jpg"
            },
            {
                title: "9. Ongoing Support: Lifelong Partnership in Landscape Excellence",
                description: `At YouLandscape, your landscape's journey continues long after installation. Our certified landscape architects, landscapers, horticulturalists and technicians offer tailored maintenance plans—seasonal pruning, soil health optimization, and irrigation system audit—to safeguard your investment against Kenya's climate challenges. Whether you need emergency storm recovery, pest management, or design upgrades, our team provides 24/7 expert support via WhatsApp, email, or onsite visits.`,
                image: "/images/working-process/ongoing-support.jpg"
            }
        ]
    }
]

export default AboutUsDetails;