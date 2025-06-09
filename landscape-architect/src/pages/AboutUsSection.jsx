import { useParams } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import AboutUsDetails from "./AboutUsDetails";
import { motion } from "framer-motion";
import "../styles/AboutUs.css";
import { FaBullseye, FaRocket } from 'react-icons/fa';
import { MdFormatQuote } from 'react-icons/md';


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

    let companySections = [];
    if (validId === "our-company" && section.content) {
        const content = section.content;

        companySections = [
            {
                heading: "Who We Are",
                content: content.whoWeAre.split('\n').map(line => line.trim()),
            },
            {
                heading: "Our Core Values",
                content: content.coreValues,
            },
            {
                heading: "Our Mission",
                content: [content.mission],
            },
            {
                heading: "Our Vision",
                content: [content.vision],
            },
            {
                heading: "Our Slogan",
                content: [`"${content.slogan}"`],
            },
        ];
    }

    return (
        <div className="aboutSectionMain">
            {/* Shared banner image + title for all sections */}
            {section.image && (
                <div className="relative mb-10">
                    <img
                        src={section.image}
                        alt={section.title}
                        className="w-screen h-64 object-cover" // Full-width banner
                    />
                    <h2 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white bg-black bg-opacity-50">
                        {section.title}
                    </h2>
                </div>
            )}

            {/* Content for Meet Our Team */}
            {validId === "our-team" && (
                <div className="px-8 py-6 max-w-5xl mx-auto">
                    <p className="text-base text-gray-800 dark:text-gray-300 mb-8">
                        {section.content}
                    </p>
                    <div className="teamGrid mb-10">
                        {section.members.map((member) => (
                            <div className="teamCard" key={member.id}>
                                <div className="teamImageWrapper">
                                    <img
                                        src={member.imageUrl}
                                        alt={member.name}
                                        className="teamImage"
                                    />
                                </div>
                                <div className="teamMemberName text-lg">{member.name}</div>
                                <div className="teamMemberRole text-sm">{member.role}</div>
                                <p className="teamMemberBio text-sm">{member.bio}</p>
                                <div className="teamSocials">
                                    <a
                                        href={member.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-pink-500 hover:text-pink-600"
                                    >
                                        <FaInstagram size={20} />
                                    </a>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-700 ml-4"
                                    >
                                        <FaLinkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* OTHER SECTIONS */}
            {validId === "our-company" && (
                <section id="our-company" className="py-8 bg-white dark:bg-gray-900">
                    <div className="max-w-5xl mx-auto px-4">
                        <motion.h2
                            className="text-2xl font-bold text-green-700 dark:text-green-300 text-center mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            YouLandscape – Kenya’s Premier Landscape Architects & Design Consultants
                        </motion.h2>

                        <div className="text-gray-700 dark:text-gray-300 space-y-6 text-base leading-relaxed">
                            {/* Who We Are */}
                            <div>
                                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mt-6 mb-2">Who We Are</h3>
                                {section.content.whoWeAre.split('\n').map((line, index) =>
                                    line.trim() ? (
                                        <p key={index} className="text-base text-gray-700 dark:text-gray-300">
                                            {line.trim()}
                                        </p>
                                    ) : null
                                )}
                            </div>

                            {/* Mission, Vision, and Core Values Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                {/* Our Mission */}
                                <div className="bg-green-50 dark:bg-gray-800 shadow p-6 text-align-left">
                                    <FaBullseye className="text-green-500 text-4xl mb-4 mx-auto" />
                                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">Our Mission</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">{section.content.mission}</p>
                                </div>

                                {/* Our Vision */}
                                <div className="bg-green-50 dark:bg-gray-800 shadow p-6 text-align-left">
                                    <FaRocket className="text-blue-500 text-4xl mb-4 mx-auto" />
                                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">Our Vision</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">{section.content.vision}</p>
                                </div>

                                {/* Our Core Values */}
                                <div className="bg-green-50 dark:bg-gray-800 shadow-md p-6 text-align-left max-w-md mx-auto">
                                    <FaBullseye className="text-green-600 text-5xl mb-4 mx-auto" />
                                    <h3 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-6">Our Core Values</h3>
                                    <p className="text-gray-700 dark:text--300 text-sm max-w-xs mx-auto">
                                        {section.content.coreValues.join(' \u00B7 ')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {isWhyChooseUs && (
                <div className="whyChooseUs mb-12 px-8 py-6 max-w-5xl mx-auto">
                    <div className="bg-green-50 dark:bg-gray-800 shadow-md p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {Array.isArray(section.content) &&
                                section.content.map((reason, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 bg-white dark:bg-gray-900 shadow p-6"
                                    >
                                        <span className="shrink-0">{reason.icon}</span>
                                        <div>
                                            <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-1">
                                                {reason.title}
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                                {reason.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            )}

            {isWorkingProcess && (
                <section className="max-w-6xl mx-auto px-4 py-12 space-y-16">
                    <motion.h2
                        className="text-2xl font-bold text-center text-green-700 dark:text-green-300 mb-12"
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
                            {/* Step Image with background color */}
                            <div className={`md:w-1/2 w-full p-6 ${index % 2 === 0 ? "bg-green-50" : "bg-blue-50"}`}>
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="shadow-lg w-full h-64 object-cover"
                                />
                            </div>

                            {/* Step Content */}
                            <div className="md:w-1/2 w-full text-center md:text-left">
                                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {validId === "our-company" && section.content.workingProcess && (
                <div className="working-process-wrapper my-12 px-4 md:px-8">
                    {/* Our Working Process Section */}
                    <section className="working-process-section bg-green-50 dark:bg-gray-800 shadow-md p-8 mb-12 bg-white max-w-6xl mx-auto">
                        <h2 className="working-process-title text-xl md:text-2xl font-bold text-green-700 dark:text-green-300 mb-8 text-center">
                            Our Working Process
                        </h2>
                        <div className="working-process-steps grid grid-cols-1 md:grid-cols-2 gap-8">
                            {section.content.workingProcess.steps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className={`flex flex-col md:flex-row items-center gap-6 mb-10 bg-white dark:bg-gray-900 shadow-md p-6 md:p-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse text-sm md:text-base' : ''
                                        }`}
                                >
                                    {/* Optional Image or Icon section */}
                                    <div className="flex-shrink-0 w-full md:w-1/3">
                                        <div className="w-14 h-14 flex items-center justify-center bg-[var(--primary-green)] text-white text-xl font-bold shadow mx-auto md:mx-0">
                                            {idx + 1}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="md:w-2/3 text-center md:text-left">
                                        <h3 className="text-lg md:text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xs md:text-sm">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </section>

                    {/* Our Esteemed Clients Section */}
                    <section className="esteemed-clients bg-white py-16">
                        <div className="esteemed-clients-container max-w-6xl mx-auto px-4 text-center">
                            <h2 className="esteemed-clients-title text-2xl md:text-3xl font-bold mb-12 text-gray-800">
                                Some of our Esteemed Clients
                            </h2>
                            <div className="esteemed-clients-logos grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
                                <img src="/images/clients/hotel-kunste.png" alt="Hotel Kunste" className="client-logo h-16 object-contain mx-auto" />
                                <img src="/images/clients/smith-kilian.png" alt="Smith Kilian" className="client-logo h-10 object-contain mx-auto" />
                                <img src="/images/clients/ask.png" alt="Agricultural Society of Kenya" className="client-logo h-16 object-contain mx-auto" />
                                <img src="/images/clients/county-government.png" alt="County Government" className="client-logo h-16 object-contain mx-auto" />
                                <img src="/images/clients/kdf.png" alt="Kenya Defence Forces" className="client-logo h-14 object-contain mx-auto" />
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Us Section */}
                    <section className="why-choose-us-section bg-[var(--pure-white)] py-12 px-4 md:px-16 mt-12 max-w-6xl mx-auto">
                        <h2 className="why-choose-us-title text-center text-2xl font-bold text-gray-800 mb-8">
                            Why <span className="text-primary">Choose</span> Us?
                        </h2>
                        <div className="why-choose-us-grid grid md:grid-cols-2 gap-8 items-start">
                            <div className="why-choose-us-column space-y-6">
                                {[
                                    { text: "We have over 10 years’ experience in landscaping", color: "blue" },
                                    { text: "We are very passionate about nature", color: "blue" },
                                    { text: "We are honest and are men of integrity", color: "blue" },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`why-choose-us-item flex items-start space-x-4 p-4 shadow-md bg-blue-100`}
                                    >
                                        <div className="why-choose-us-dot w-4 h-4 mt-2 bg-pink-500 shadow-md" />
                                        <p className="why-choose-us-text text-base text-gray-700">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="why-choose-us-column space-y-6">
                                {[
                                    { text: "We have done over 200 projects across the country", color: "pink" },
                                    { text: "We are meticulous in our work", color: "pink" },
                                    { text: "We are affordable and efficient", color: "pink" },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`why-choose-us-item flex items-start space-x-4 p-4 shadow-md bg-pink-100`}
                                    >
                                        <div className="why-choose-us-dot w-4 h-4 mt-2 bg-blue-500 shadow-md" />
                                        <p className="why-choose-us-text text-base text-gray-700">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}
