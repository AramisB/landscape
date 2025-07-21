import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaInstagram, FaLinkedin, FaBullseye, FaRocket } from "react-icons/fa";
import { MdFormatQuote } from "react-icons/md";
import AboutUsDetails from "./AboutUsDetails";
import WhyChooseUs from "./WhyChooseUs";
import GetStartedSection from "./GetStartedSection";
import { motion } from "framer-motion";

export default function AboutUsSection() {
    const { id } = useParams();

    const validIds = AboutUsDetails.map((sec) => sec.id);
    const validId = validIds.includes(id) ? id : "our-company";
    const section = AboutUsDetails.find((sec) => sec.id === validId);
    const isTeamPage = validId === "our-team";
    const isWorkingProcess = validId === "working-process";
    const isWhyChooseUs = validId === "why-choose-us";

    const teamMembers = section.members || [];
    const steps = section.steps || [];

    // SEO optimization for Our Company page
    const isOurCompanyPage = validId === "our-company";

    return (
        <div className="min-h-screen bg-[var(--off-white)]">
            {/* SEO Meta Tags for Our Company Page */}
            {isOurCompanyPage && (
                <Helmet>
                    <title>Our Company | YouLandscape Architects & Consultants - Kenya's Premier Landscape Design Firm</title>
                    <meta name="description" content="Learn more about YouLandscape Architects & Consultants — Kenya's premier landscape design firm specializing in sustainable, elegant outdoor spaces. Over 10 years of award-winning landscaping expertise." />
                    <meta name="keywords" content="YouLandscape, landscape architects Kenya, landscape design Nairobi, sustainable landscaping, outdoor design, garden design Kenya, landscape consultants" />
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
                    <link rel="canonical" href="https://youlandscape.co.ke/about-us/our-company" />
                    
                    {/* Structured Data for Organization */}
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "YouLandscape Architects & Consultants",
                            "url": "https://youlandscape.co.ke",
                            "logo": "https://youlandscape.co.ke/logo.webp",
                            "description": "YouLandscape is Kenya's trusted landscape design firm specializing in consultation, design, and maintenance with over 10 years of experience.",
                            "foundingDate": "2014",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Nairobi",
                                "addressRegion": "Nairobi",
                                "addressCountry": "KE"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+254707301563",
                                "contactType": "customer service",
                                "email": "info@youlandscape.com"
                            },
                            "sameAs": [
                                "https://www.instagram.com/youlandscape",
                                "https://www.linkedin.com/company/youlandscape",
                                "https://www.facebook.com/youlandscape"
                            ],
                            "serviceArea": {
                                "@type": "Country",
                                "name": "Kenya"
                            },
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Landscape Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Landscape Design"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Landscape Installation"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Landscape Maintenance"
                                        }
                                    }
                                ]
                            }
                        })}
                    </script>
                </Helmet>
            )}

            {/* Banner image and title */}
            {section.image && (
                <div className="relative mb-0">
                    <img
                        src={section.image}
                        alt={`${section.title} - YouLandscape Professional Services`}
                        className="w-screen h-48 sm:h-64 md:h-[28rem] object-cover rounded-none"
                        sizes="100vw"
                        priority={true}
                    />
                    <h2 className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-bold text-white bg-black bg-opacity-50 m-0 p-0 rounded-none">
                        {section.title}
                    </h2>
                </div>
            )}

            {/* Team Page */}
            {isTeamPage && (
                <div className="px-4 sm:px-8 py-6 max-w-5xl mx-auto">
                    <p className="text-sm sm:text-base text-[var(--text-dark)] mb-6 sm:mb-8">{section.content}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
                        {teamMembers.map((member) => (
                            <div className="flex flex-col items-center bg-white shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-6 rounded-none" key={member.id}>
                                <div className="w-24 h-24 sm:w-32 sm:h-32 mb-3 sm:mb-4 overflow-hidden">
                                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover rounded-none" />
                                </div>
                                <div className="text-base sm:text-lg font-semibold text-[var(--primary-green)] text-center">{member.name}</div>
                                <div className="text-xs sm:text-sm text-gray-600 mb-2 text-center">{member.role}</div>
                                <p className="text-xs sm:text-sm text-gray-700 mb-2 text-center leading-relaxed">{member.bio}</p>
                                <div className="flex gap-3 sm:gap-4 mt-2">
                                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                                        <FaInstagram size={18} className="sm:w-5 sm:h-5" />
                                    </a>
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                                        <FaLinkedin size={18} className="sm:w-5 sm:h-5" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <WhyChooseUs />
                </div>
            )}

            {/* Our Company Section */}
            {validId === "our-company" && (
                <section id="our-company" className="py-8 sm:py-10 md:py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-4">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center mb-8 sm:mb-10 mt-8 sm:mt-12 md:mt-16 lg:mt-20 pb-16">
                            {/* Left: Who We Are image */}
                            <div>
                                <img
                                    src={section.image}
                                    alt="YouLandscape Architects & Consultants - Our Company"
                                    className="w-full h-48 sm:h-64 md:h-80 lg:h-[32rem] object-cover rounded-none shadow"
                                    sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                                />
                            </div>
                            {/* Right: Who We Are text */}
                            <div className="space-y-3 sm:space-y-4">
                                <h2 className="text-xl sm:text-2xl font-bold text-[var(--primary-green)] mb-4">Who We Are</h2>
                                {section.content.whoWeAre
                                    .split("\n")
                                    .slice(1)
                                    .map((line, index) =>
                                        line.trim() ? (
                                            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed">{line.trim()}</p>
                                        ) : null
                                    )}
                            </div>
                        </div>

                        {/* Mission, Vision, Core Values */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                            <div className="group bg-green-50 shadow p-4 sm:p-6 rounded-none flex flex-col items-center hover:bg-[var(--secondary-blue)] hover:text-white transition-all duration-300">
                                <FaBullseye className="text-green-500 text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300" />
                                <h2 className="text-base sm:text-lg font-semibold text-[var(--primary-green)] mb-2 group-hover:text-white transition-colors duration-300 text-center">Our Mission</h2>
                                <p className="text-sm sm:text-base text-gray-700 text-center group-hover:text-white transition-colors duration-300 leading-relaxed">{section.content.mission}</p>
                            </div>
                            <div className="group bg-green-50 shadow p-4 sm:p-6 rounded-none flex flex-col items-center hover:bg-[var(--secondary-blue)] hover:text-white transition-all duration-300">
                                <FaRocket className="text-blue-500 text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300" />
                                <h2 className="text-base sm:text-lg font-semibold text-[var(--primary-green)] mb-2 group-hover:text-white transition-colors duration-300 text-center">Our Vision</h2>
                                <p className="text-sm sm:text-base text-gray-700 text-center group-hover:text-white transition-colors duration-300 leading-relaxed">{section.content.vision}</p>
                            </div>
                            <div className="group bg-green-50 shadow p-4 sm:p-6 rounded-none flex flex-col items-center hover:bg-[var(--secondary-blue)] hover:text-white transition-all duration-300 sm:col-span-2 lg:col-span-1">
                                <FaBullseye className="text-green-600 text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300" />
                                <h2 className="text-base sm:text-lg font-semibold text-[var(--primary-green)] mb-2 group-hover:text-white transition-colors duration-300 text-center">Our Core Values</h2>
                                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 text-center group-hover:text-white transition-colors duration-300 space-y-1">
                                    {section.content.coreValues.map((value, idx) => (
                                        <li key={idx}>{value}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Slogan */}
                        <div className="flex flex-col items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                            <MdFormatQuote className="text-2xl sm:text-3xl md:text-4xl text-[var(--orange)] mb-2" />
                            <p className="italic text-base sm:text-lg text-[var(--primary-green)] text-center max-w-xl px-4">
                                "{section.content.slogan}"
                            </p>
                        </div>

                        {/* Working Process */}
                        {section.content.workingProcess && (
                            <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                                <motion.h2 
                                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--primary-green)] text-center mb-3 sm:mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    Our Working Process
                                </motion.h2>
                                <motion.p 
                                    className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    We follow a systematic approach to deliver exceptional landscapes from concept to completion
                                </motion.p>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                                    {section.content.workingProcess.steps.map((step, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="group bg-white shadow-lg hover:shadow-2xl p-4 sm:p-6 md:p-8 hover:border-[var(--secondary-blue)] transition-all duration-300 hover:-translate-y-2 relative text-left"
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        >
                                            {/* Progress line for connecting steps */}
                                            {idx < section.content.workingProcess.steps.length - 1 && (
                                                <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-[var(--primary-green)] transform translate-x-full"></div>
                                            )}
                                            
                                            <div className="flex items-start gap-4 sm:gap-6 text-left">
                                                {/* Enhanced Step Number */}
                                                <div className="flex-shrink-0">
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-br from-[var(--primary-green)] to-[var(--secondary-blue)] text-white text-sm sm:text-base md:text-xl font-bold shadow-base rounded-none">
                                                        {idx + 1}
                                                    </div>
                                                </div>
                                                
                                                {/* Content Section */}
                                                <div className="flex-1 text-left">
                                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[var(--primary-green)] mb-2 sm:mb-3 group-hover:text-[var(--secondary-blue)] transition-colors text-left">
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors text-left">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Esteemed Clients */}
                        <section className="bg-white py-8 sm:py-12 md:py-16 mt-12 sm:mt-16">
                            <div className="max-w-6xl mx-auto px-4 text-center">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-12 text-gray-800">
                                    Some of our Esteemed Clients
                                </h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center justify-center">
                                    <img src="/about-us/client-logos/land-and-life-foundation.webp" alt="Land and Life Foundation - YouLandscape Client" className="h-12 sm:h-16 object-contain mx-auto" sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw" />
                                    <img src="/about-us/client-logos/pestana-golf-resorts.webp" alt="Pestana Golf Resorts - YouLandscape Client" className="h-12 sm:h-16 object-contain mx-auto" sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw" />
                                    <img src="/about-us/client-logos/benedizione.webp" alt="Benedizione - YouLandscape Client" className="h-12 sm:h-16 object-contain mx-auto" sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw" />
                                    <img src="/about-us/client-logos/uniques-hotel-lodge-camps.webp" alt="Uniques Hotel Lodge Camps - YouLandscape Client" className="h-12 sm:h-16 object-contain mx-auto" sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw" />
                                    <img src="/about-us/client-logos/kisii-county.webp" alt="Kisii County - YouLandscape Client" className="h-12 sm:h-16 object-contain mx-auto" sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw" />
                                    <img src="/about-us/client-logos/amref-health-africa.webp" alt="AMREF Health Africa - YouLandscape Client" className="h-12 sm:h-16 object-contain mx-auto" sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw" />
                                </div>
                            </div>
                        </section>

                        {/* Testimonials Section */}
                        {section.content.testimonials && section.content.testimonials.length > 0 && (
                            <section className="py-10 sm:py-14">
                                <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-8">What Our Clients Say</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {section.content.testimonials.map((t, idx) => (
                                        <div key={idx} className="bg-white shadow-md rounded-none p-6 flex flex-col items-center text-center">
                                            <p className="italic text-gray-700 mb-2">"{t.message}"</p>
                                            <div className="font-semibold text-green-700 mt-2">{t.name}</div>
                                            <div className="text-sm text-gray-500">{t.location}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Why Choose Us */}
                        <WhyChooseUs />
                    </div>
                </section>
            )}

            {/* Why Choose Us standalone */}
            {isWhyChooseUs && (
                <div className="mb-8 sm:mb-12 px-4 sm:px-8 py-6 max-w-5xl mx-auto">
                    <div className="bg-green-50 shadow-md p-4 sm:p-6 md:p-8 rounded-none">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            {Array.isArray(section.content) &&
                                section.content.map((reason, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 sm:gap-4 bg-white shadow p-4 sm:p-6 rounded-none"
                                    >
                                        <span className="shrink-0 mt-1">{reason.icon}</span>
                                        <div>
                                            <h3 className="text-base sm:text-lg font-semibold text-[var(--primary-green)] mb-1">
                                                {reason.title}
                                            </h3>
                                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{reason.text}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Working Process standalone */}
            {isWorkingProcess && (
                <>
                    <section className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-12 sm:space-y-16">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center gap-6 sm:gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                <div className={`md:w-1/2 w-full p-4 sm:p-6 ${index % 2 === 0 ? "bg-green-50" : "bg-blue-50"}`}>
                                    <img src={step.image} alt={step.title} className="shadow-lg w-full h-48 sm:h-64 object-cover rounded-none" />
                                </div>
                                <div className="md:w-1/2 w-full text-left">
                                    <h3 className="text-base sm:text-lg font-semibold text-[var(--primary-green)] mb-3 sm:mb-4 text-left">{step.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-left">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                    <WhyChooseUs />
                </>
            )}

            <div className="max-w-6xl mx-auto px-4 pb-12">
                <GetStartedSection />
            </div>
        </div>
    );
}
