import { useParams } from "react-router-dom";
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

    return (
        <div className="min-h-screen bg-[var(--off-white)]">
            {/* Banner image and title */}
            {section.image && (
                <div className="relative mb-0">
                    <img
                        src={section.image}
                        alt={section.title}
                        className="w-screen h-[28rem] object-cover rounded-none"
                    />
                    <h2 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white bg-black bg-opacity-50 m-0 p-0 rounded-none">
                        {section.title}
                    </h2>

                    {/* Floating Who We Are card */}
                    {validId === "our-company" && (
                        <div className="absolute top-[75%] left-[19%] z-30 w-[64rem] max-w-6xl px-4">
                            <div className="w-full md:w-1/2">
                                <div className="bg-[var(--light-green)] text-white shadow-lg px-6 py-10 md:py-16 rounded-none min-h-40 md:min-h-56 flex flex-col items-center justify-center">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-3">Who We Are</h3>
                                    <span className="text-lg md:text-xl italic font-medium">We make landscapes as unique as you.</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Team Page */}
            {isTeamPage && (
                <div className="px-8 py-6 max-w-5xl mx-auto">
                    <p className="text-base text-gray-800 dark:text-gray-300 mb-8">{section.content}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
                        {teamMembers.map((member) => (
                            <div className="flex flex-col items-center bg-white shadow-md hover:shadow-lg transition-all duration-300 p-6 rounded-none" key={member.id}>
                                <div className="w-32 h-32 mb-4 overflow-hidden">
                                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover rounded-none" />
                                </div>
                                <div className="text-lg font-semibold text-[var(--primary-green)]">{member.name}</div>
                                <div className="text-sm text-gray-600 mb-2">{member.role}</div>
                                <p className="text-sm text-gray-700 mb-2 text-center">{member.bio}</p>
                                <div className="flex gap-4 mt-2">
                                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                                        <FaInstagram size={20} />
                                    </a>
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                                        <FaLinkedin size={20} />
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
                <section id="our-company" className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-4">
                        <motion.h2
                            className="text-3xl font-bold text-[var(--primary-green)] text-center mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10 mt-24 md:mt-32">
                            {/* Left: Who We Are image */}
                            <div>
                                <img
                                    src={section.image}
                                    alt="Our Company Hero"
                                    className="w-full h-[32rem] object-cover rounded-none shadow"
                                />
                            </div>
                            {/* Right: Who We Are text */}
                            <div>
                                {section.content.whoWeAre
                                    .split("\n")
                                    .slice(1)
                                    .map((line, index) =>
                                        line.trim() ? (
                                            <p key={index} className="text-base text-gray-700 mb-2">{line.trim()}</p>
                                        ) : null
                                    )}
                            </div>
                        </div>

                        {/* Mission, Vision, Core Values */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                            <div className="group bg-green-50 shadow p-6 rounded-none flex flex-col items-center hover:bg-[var(--secondary-blue)] hover:text-white transition-all duration-300">
                                <FaBullseye className="text-green-500 text-4xl mb-3 group-hover:text-white transition-colors duration-300" />
                                <h3 className="text-lg font-semibold text-[var(--primary-green)] mb-2 group-hover:text-white transition-colors duration-300">Our Mission</h3>
                                <p className="text-gray-700 text-center group-hover:text-white transition-colors duration-300">{section.content.mission}</p>
                            </div>
                            <div className="group bg-green-50 shadow p-6 rounded-none flex flex-col items-center hover:bg-[var(--secondary-blue)] hover:text-white transition-all duration-300">
                                <FaRocket className="text-blue-500 text-4xl mb-3 group-hover:text-white transition-colors duration-300" />
                                <h3 className="text-lg font-semibold text-[var(--primary-green)] mb-2 group-hover:text-white transition-colors duration-300">Our Vision</h3>
                                <p className="text-gray-700 text-center group-hover:text-white transition-colors duration-300">{section.content.vision}</p>
                            </div>
                            <div className="group bg-green-50 shadow p-6 rounded-none flex flex-col items-center hover:bg-[var(--secondary-blue)] hover:text-white transition-all duration-300">
                                <FaBullseye className="text-green-600 text-4xl mb-3 group-hover:text-white transition-colors duration-300" />
                                <h3 className="text-lg font-semibold text-[var(--primary-green)] mb-2 group-hover:text-white transition-colors duration-300">Our Core Values</h3>
                                <ul className="list-disc list-inside text-gray-700 text-center group-hover:text-white transition-colors duration-300">
                                    {section.content.coreValues.map((value, idx) => (
                                        <li key={idx}>{value}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Slogan */}
                        <div className="flex flex-col items-center mt-8">
                            <MdFormatQuote className="text-4xl text-[var(--orange)] mb-2" />
                            <p className="italic text-lg text-[var(--primary-green)] text-center max-w-xl">
                                "{section.content.slogan}"
                            </p>
                        </div>

                        {/* Working Process */}
                        {section.content.workingProcess && (
                            <div className="mt-16">
                                <motion.h2 
                                    className="text-xl md:text-4xl font-bold text-[var(--primary-green)] text-center mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    Our Working Process
                                </motion.h2>
                                <motion.p 
                                    className="text-base text-gray-600 text-center mb-12 max-w-3xl mx-auto"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    We follow a systematic approach to deliver exceptional landscapes from concept to completion
                                </motion.p>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                                    {section.content.workingProcess.steps.map((step, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="group bg-white shadow-lg hover:shadow-2xl p-8 rounded-lg border-l-4 border-[var(--primary-green)] hover:border-[var(--secondary-blue)] transition-all duration-300 hover:-translate-y-2 relative"
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        >
                                            {/* Progress line for connecting steps */}
                                            {idx < section.content.workingProcess.steps.length - 1 && (
                                                <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-[var(--primary-green)] transform translate-x-full"></div>
                                            )}
                                            
                                            <div className="flex items-start gap-6">
                                                {/* Enhanced Step Number */}
                                                <div className="flex-shrink-0">
                                                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[var(--primary-green)] to-[var(--secondary-blue)] text-white text-xl font-bold shadow-base rounded-full">
                                                        {idx + 1}
                                                    </div>
                                                </div>
                                                
                                                {/* Content Section */}
                                                <div className="flex-1">
                                                    <h3 className="text-xl md:text-lg font-bold text-[var(--primary-green)] mb-3 group-hover:text-[var(--secondary-blue)] transition-colors">
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-gray-700 leading-relaxed text-sm group-hover:text-gray-800 transition-colors">
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
                        <section className="bg-white py-16 mt-16">
                            <div className="max-w-6xl mx-auto px-4 text-center">
                                <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800">
                                    Some of our Esteemed Clients
                                </h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
                                    <img src="/about-us/client-logos/land-and-life-foundation.jpeg" alt="Land and Life Foundation" className="h-16 object-contain mx-auto" />
                                    <img src="/about-us/client-logos/pestana-golf-resorts.jpeg" alt="Pestana Golf Resorts" className="h-16 object-contain mx-auto" />
                                    <img src="/about-us/client-logos/benedizione.jpeg" alt="Benedizione" className="h-16 object-contain mx-auto" />
                                    <img src="/about-us/client-logos/uniques-hotel-lodge-camps.jpeg" alt="Uniques Hotel Lodge Camps" className="h-16 object-contain mx-auto" />
                                    <img src="/about-us/client-logos/kisii-county.jpeg" alt="Kisii County" className="h-16 object-contain mx-auto" />
                                    <img src="/about-us/client-logos/amref-health-africa.jpeg" alt="AMREF Health Africa" className="h-16 object-contain mx-auto" />
                                </div>
                            </div>
                        </section>

                        {/* Why Choose Us */}
                        <WhyChooseUs />
                    </div>
                </section>
            )}

            {/* Why Choose Us standalone */}
            {isWhyChooseUs && (
                <div className="mb-12 px-8 py-6 max-w-5xl mx-auto">
                    <div className="bg-green-50 shadow-md p-8 rounded-none">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {Array.isArray(section.content) &&
                                section.content.map((reason, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 bg-white shadow p-6 rounded-none"
                                    >
                                        <span className="shrink-0">{reason.icon}</span>
                                        <div>
                                            <h3 className="text-lg font-semibold text-[var(--primary-green)] mb-1">
                                                {reason.title}
                                            </h3>
                                            <p className="text-gray-700 text-sm">{reason.text}</p>
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
                    <section className="max-w-6xl mx-auto px-4 py-12 space-y-16">
                        <motion.h2
                            className="text-2xl font-bold text-center text-[var(--primary-green)] mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Our Working Process
                        </motion.h2>
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                <div className={`md:w-1/2 w-full p-6 ${index % 2 === 0 ? "bg-green-50" : "bg-blue-50"}`}>
                                    <img src={step.image} alt={step.title} className="shadow-lg w-full h-64 object-cover rounded-none" />
                                </div>
                                <div className="md:w-1/2 w-full text-center md:text-left">
                                    <h3 className="text-lg font-semibold text-[var(--primary-green)] mb-4">{step.title}</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                    <WhyChooseUs />
                </>
            )}

            {/* Get Started Section before footer */}
            <div className="max-w-6xl mx-auto px-4 pb-12">
                <GetStartedSection />
            </div>
        </div>
    );
}
