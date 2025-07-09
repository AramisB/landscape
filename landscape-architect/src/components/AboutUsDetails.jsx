import { FaLeaf, FaHandsHelping, FaBolt, FaRecycle, FaUsers, FaRocket } from "react-icons/fa";
const AboutUsDetails = [
    {
        id: "our-company",
        title: "Our Company",
        image: "/about-us/company.webp",
        content: {
            description: `YouLandscape Architects and Consultants is a leading landscape architecture firm in Kenya, specializing in innovative, sustainable outdoor designs, master planning, and eco-conscious landscaping solutions. We blend artistry, engineering, and environmental science to create functional, stunning landscapes for homes, businesses, and public spaces.`,

            whoWeAre: `
At YouLandscape Architects and Consultants, we believe your outdoor space should be an extension of you. With over a decade of experience, we stand as a leading Kenyan landscaping company, driven by a passionate team of licensed landscape architects, horticulturists, and environmental design consultants. Our name isn't just a label; it's our mission: to craft landscapes that genuinely resonate with your lifestyle, your space, and your unique vision.

Having transformed countless properties across Kenya for over ten years, from residential homes to serene sprawling estates, we achieve this by blending cutting-edge design principles with sustainable practices, consistently turning underutilized areas into living, breathing works of art. Our commitment is to deliver exceptional lawns and gardens, providing both homes and businesses with spaces they'll enjoy for years to come.

We pride ourselves on offering the best landscape architecture and gardening services, utilizing the latest techniques and design innovations. Every project is a close collaboration with you, ensuring your vision becomes a beautiful and functional reality. Your satisfaction is at the heart of everything we do, and we're dedicated to making your landscaping journey seamless and rewarding.    `,

            testimonials: [
                {
                    name: "Wanjiru M.",
                    location: "Karen, Nairobi",
                    message:
                        "We hired YouLandscape to transform our backyard in Karen, and they exceeded every expectation. Their attention to detail and local plant knowledge brought our vision to life. We now have a beautiful, functional space where we relax as a family.",
                },
                {
                    name: "Brian Otieno",
                    location: "Runda, Nairobi",
                    message:
                        "The team at YouLandscape was professional, timely, and incredibly creative. They completely revamped the entrance garden of our home and added a water feature that’s now the highlight of the compound. I highly recommend them!",
                },
                {
                    name: "Fatuma Noor",
                    location: "Mombasa",
                    message:
                        "I appreciated how they tailored the landscape design to suit the coastal climate. The irrigation system and native plant selection have made our garden low-maintenance and lush all year. Excellent service from start to finish.",
                },
                {
                    name: "George K. Kiptoo",
                    location: "Eldoret",
                    message:
                        "YouLandscape delivered a modern, eco-friendly design for our corporate grounds in Eldoret. Their team handled everything from concept to installation with great professionalism. We continue to get compliments from visitors!",
                },
            ],

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
                        title: "Initial Consultation & Vision Alignment",
                        description: "We start with a free consultation to align your vision, goals, and budget for your landscape project."
                    },
                    {
                        title: "Site Assessment",
                        description: "Our experts assess your site's unique conditions to inform a climate-adapted, efficient design."
                    },
                    {
                        title: "Design and Planning",
                        description: "We create a custom landscape plan with plant, hardscape, and lighting selections for your needs."
                    },
                    {
                        title: "Proposal & Agreement",
                        description: "You receive a clear proposal with costs, timeline, and eco-friendly materials for full transparency."
                    },
                    {
                        title: "Project Execution",
                        description: "Our team implements your design with quality checks and sustainable practices at every stage."
                    },
                    {
                        title: "Regular Updates",
                        description: "We keep you informed with weekly progress reports and adapt quickly to your feedback."
                    },
                    {
                        title: "Quality Assurance: Precision-Driven Excellence",
                        description: "Rigorous inspections ensure every detail meets Kenya's top landscaping standards and your expectations."
                    },
                    {
                        title: "Project Completion",
                        description: "We finalize your landscape with a detailed walkthrough and offer ongoing care options."
                    },
                    {
                        title: "Ongoing Support: Lifelong Partnership in Landscape Excellence",
                        description: "Enjoy tailored maintenance and 24/7 expert support to keep your landscape thriving year-round."
                    }
                ]
            }
        }
    },

    {
        id: "why-choose-us",
        title: "Why Choose Us",
        image: "/about-us/why-choose-us.webp",
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
        image: "/about-us/our-team.webp",
        content: "At YouLandscape Architects & Consultants, we're powered by a dynamic team of passionate professionals who combine youthful innovation with years of hands-on experience. Our certified landscape architects, horticulturists, and design specialists share a unified mission: transforming Kenya's outdoor spaces through sustainable, breathtaking designs.",
        members: [
            {
                id: "carllewis",
                name: "Carllewis Chweya",
                role: "Lead Landscape Architect – Head of Design",
                imageUrl: "/about-us/our-team/carllewis.webp",
                bio: `Carllewis Chweya is a landscape architect with 6 + years of hands- on experience.He holds a BSc in Landscape Architecture from Jomo Kenyatta University of Agriculture and Technology(JKUAT).His expertise spans sustainable design, urban greening, and innovative landscape solutions that blend functionality with aesthetic excellence.`,
                instagram: "https://instagram.com/carllewis",
                linkedin: "https://linkedin.com/in/carllewis",
            },
            {
                id: "rogers",
                name: "Rogers Kirui",
                role: "Landscape Architect – Head of Implementations",
                imageUrl: "/about-us/our-team/rogers.webp",
                bio: `Rogers Kirui is a certified Landscape Architect with 6 + years' experience, holding a BSc in Landscape Architecture from JKUAT. As our Head of Implementation, he specializes in transforming designs into sustainable, functional landscapes. His expertise covers urban greening, eco-conscious solutions, and precision project execution.`,
                instagram: "https://instagram.com/rogerskirui",
                linkedin: "https://linkedin.com/in/rogerskirui",
            },
            {
                id: "brenda",
                name: "Brenda Aramis",
                role: "Marketing Manager",
                imageUrl: "/about-us/our-team/brenda.webp",
                bio: `Brenda is our dynamic Marketing Manager with expertise in brand strategy and digital growth for landscape architecture. She drives our market presence through innovative campaigns that connect clients with our sustainable design solutions.`,
                instagram: "https://instagram.com/brendaaramis",
                linkedin: "https://linkedin.com/in/brendaaramis",
            }
        ]
    },

    {
        id: "working-process",
        title: "Our Working Process",
        image: "/about-us/working-process/working-process.webp",
          steps: [
            {
                title: "1. Initial Consultation & Vision Alignment",
                description: `Every project begins with a free, in-depth consultation to understand your vision, budget, and functional needs. Our team listens carefully to your ideas, whether you're envisioning a serene backyard oasis or a dynamic commercial greenspace. We combine your input with our decade of expertise to outline a clear roadmap, ensuring alignment on timelines, sustainability goals, and design aesthetics before proceeding.`,
                image: "/about-us/working-process/consultation.webp"
            },
            {
                title: "2. Site Assessment",
                description: `Next, our certified professionals conduct a detailed site evaluation where we analyze topography, drainage patterns, sunlight exposure, and existing vegetation to identify opportunities and challenges unique to your property. This data-driven approach allows us to craft designs that harmonize with Kenya's diverse climates, optimize water efficiency, and select native plants suited to your soil type and nutrient profile.`,
                image: "/about-us/working-process/site-assessment.webp"
            },
            {
                title: "3. Design and Planning",
                description: `Based on the information gathered from the initial consultation and site assessment, our experienced designers create a customized landscape design plan. This plan includes various elements such as plant selections, hardscape features, irrigation systems, and lighting concepts. We use advanced software and visualization tools to present the design plan to you, giving you a clear picture of the proposed landscape development.`,
                image: "/about-us/working-process/design-planning.webp"
            },
            {
                title: "4. Proposal & Agreement",
                description: `After finalizing your design, we provide a detailed proposal outlining the scope of work, eco-conscious materials (sourced locally for sustainability), realistic timelines, and transparent cost estimates. We prioritize open communication, addressing every query to refine terms until you're fully confident. Once approved, a digital agreement ensures seamless transition to the implementation phase, with no hidden costs and guaranteed accountability.`,
                image: "/about-us/working-process/proposal-and-agreement.webp"
            },
            {
                title: "5. Project Execution",
                description: `Our certified landscape architects, landscapers and technicians execute your project on schedule, merging speed with meticulous attention to detail. Adhering to Kenya's top industry and safety standards, we install eco-friendly hardscapes, drought-resistant native plants, and smart irrigation systems, ensuring every element aligns with your design plan. Quality checks at each phase guarantee durable, visually stunning results—delivered promptly without compromising quality.`,
                image: "/about-us/working-process/project-execution.webp"
            },
            {
                title: "6. Regular Updates",
                description: `We prioritize real-time communication, ensuring you're informed at every stage via weekly progress reports and photo updates. Open to feedback, we adapt swiftly—whether adjusting plant placements, modifying hardscape materials, or refining timelines—to align with your vision. Our digital collaboration tools (WhatsApp/email updates) and scheduled check-ins foster a partnership-driven approach, guaranteeing your landscape evolves exactly as envisioned, on time and within budget.`,
                image: "/about-us/working-process/ongoing-updates.webp"
            },
            {
                title: "7. Quality Assurance: Precision-Driven Excellence",
                description: `At YouLandscape, quality is non-negotiable. Our certified team conducts rigorous multi-phase inspections aligned with Kenya's top landscaping standards, ensuring every hardscape, irrigation line, and plant installation meets exacting benchmarks. From soil compaction tests to post-completion durability audits, we validate structural integrity, aesthetic precision, and eco-compliance. Your satisfaction is our ultimate metric, we deliver landscapes that not only meet but exceed expectations, built to thrive in Kenya's unique climate.`,
                image: "/about-us/working-process/quality-assurance.webp"
            },
            {
                title: "8. Project Completion",
                description: `We conclude every project with a meticulous walkthrough, ensuring every detail aligns with your vision and our stringent quality benchmarks. Any final tweaks—from plant repositioning to irrigation calibration—are resolved promptly. Our commitment extends beyond handover: opt for our annual care packages to keep your landscape thriving, or reach out anytime for expert advice.`,
                image: "/about-us/working-process/project-completion.webp"
            },
            {
                title: "9. Ongoing Support: Lifelong Partnership in Landscape Excellence",
                description: `At YouLandscape, your landscape's journey continues long after installation. Our certified landscape architects, landscapers, horticulturalists and technicians offer tailored maintenance plans—seasonal pruning, soil health optimization, and irrigation system audit—to safeguard your investment against Kenya's climate challenges. Whether you need emergency storm recovery, pest management, or design upgrades, our team provides 24/7 expert support via WhatsApp, email, or onsite visits.`,
                image: "/about-us/working-process/ongoing-support.webp"
            }
        ]
    }
]

export default AboutUsDetails;