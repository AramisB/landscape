import { useParams } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import AboutUsDetails from "./AboutUsDetails";
import { motion } from "framer-motion";
import { FaBullseye, FaRocket } from 'react-icons/fa';
import { MdFormatQuote } from 'react-icons/md';
import WhyChooseUs from "./WhyChooseUs";

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
        <div className="min-h-screen bg-[var(--off-white)]">
            {/* Shared banner image + title for all sections */}
            {section.image && (
                <div className="relative mb-10">
                    <img
                        src={section.image}
                        alt={section.title}
                        className="w-screen h-64 object-cover rounded-none"
                    />
                    <h2 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white bg-black bg-opacity-50 m-0 p-0 rounded-none">
                        {section.title}
                    </h2>
                </div>
            )}

            {/* Content for Meet Our Team */}
            {isTeamPage && (
                <div className="px-8 py-6 max-w-5xl mx-auto">
                    <p className="text-base text-gray-800 dark:text-gray-300 mb-8">
                        {section.content}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
                        {section.members.map((member) => (
                            <div className="flex flex-col items-center bg-white shadow-md hover:shadow-lg transition-all duration-300 p-6 rounded-none" key={member.id}>
                                <div className="w-32 h-32 mb-4 overflow-hidden">
                                    <img
                                        src={member.imageUrl}
                                        alt={member.name}
                                        className="w-full h-full object-cover rounded-none"
                                    />
                                </div>
                                <div className="text-lg font-semibold text-[var(--primary-green)]">{member.name}</div>
                                <div className="text-sm text-gray-600 mb-2">{member.role}</div>
                                <p className="text-sm text-gray-700 mb-2 text-center">{member.bio}</p>
                                <div className="flex gap-4 mt-2">
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
                                        className="text-blue-600 hover:text-blue-700"
                                    >
                                        <FaLinkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <WhyChooseUs />
                </div>
            )}

            {/* OTHER SECTIONS */}
            {validId === "our-company" && (
                <section id="our-company" className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-4">
                        <motion.h2
                            className="text-3xl font-bold text-[var(--primary-green)] text-center mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            YouLandscape – Kenya's Premier Landscape Architects & Design Consultants
                        </motion.h2>

                        {/* Who We Are */}
                        <div className="mb-10">
                            <h3 className="text-xl font-semibold text-[var(--primary-green)] mb-2">Who We Are</h3>
                            {section.content.whoWeAre.split('\n').map((line, index) =>
                                line.trim() ? (
                                    <p key={index} className="text-base text-gray-700 mb-2">{line.trim()}</p>
                                ) : null
                            )}
                        </div>

                        {/* Mission, Vision, Core Values */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                            {/* Mission */}
                            <div className="bg-green-50 shadow p-6 rounded-none flex flex-col items-center">
                                <FaBullseye className="text-green-500 text-4xl mb-3" />
                                <h3 className="text-lg font-semibold text-[var(--primary-green)] mb-2">Our Mission</h3>
                                <p className="text-gray-700 text-center">{section.content.mission}</p>
                            </div>
                            {/* Vision */}
                            <div className="bg-green-50 shadow p-6 rounded-none flex flex-col items-center">
                                <FaRocket className="text-blue-500 text-4xl mb-3" />
                                <h3 className="text-lg font-semibold text-[var(--primary-green)] mb-2">Our Vision</h3>
                                <p className="text-gray-700 text-center">{section.content.vision}</p>
                            </div>
                            {/* Core Values */}
                            <div className="bg-green-50 shadow p-6 rounded-none flex flex-col items-center">
                                <FaBullseye className="text-green-600 text-4xl mb-3" />
                                <h3 className="text-lg font-semibold text-[var(--primary-green)] mb-2">Our Core Values</h3>
                                <ul className="list-disc list-inside text-gray-700 text-center">
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
                    </div>
                </section>
            )}

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
                                            <p className="text-gray-700 text-sm">
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
                                {/* Step Image with background color */}
                                <div className={`md:w-1/2 w-full p-6 ${index % 2 === 0 ? "bg-green-50" : "bg-blue-50"}`}>
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="shadow-lg w-full h-64 object-cover rounded-none"
                                    />
                                </div>

                                {/* Step Content */}
                                <div className="md:w-1/2 w-full text-center md:text-left">
                                    <h3 className="text-lg font-semibold text-[var(--primary-green)] mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </section>
                    <WhyChooseUs />
                </>
            )}

            {validId === "our-company" && section.content.workingProcess && (
                <div className="my-12 px-4 md:px-8">
                    {/* Our Working Process Section */}
                    <section className="bg-green-50 shadow-md p-8 mb-12 bg-white max-w-6xl mx-auto rounded-none">
                        <h2 className="text-xl md:text-2xl font-bold text-[var(--primary-green)] mb-8 text-center">
                            Our Working Process
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {section.content.workingProcess.steps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className={`flex flex-col md:flex-row items-center gap-6 mb-10 bg-white shadow-md p-6 md:p-8 rounded-none ${idx % 2 !== 0 ? 'md:flex-row-reverse text-sm md:text-base' : ''}`}
                                >
                                    {/* Optional Image or Icon section */}
                                    <div className="flex-shrink-0 w-full md:w-1/3">
                                        <div className="w-14 h-14 flex items-center justify-center bg-[var(--primary-green)] text-white text-xl font-bold shadow mx-auto md:mx-0 rounded-none">
                                            {idx + 1}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="md:w-2/3 text-center md:text-left">
                                        <h3 className="text-lg md:text-xl font-semibold text-[var(--primary-green)] mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </section>

                    {/* Our Esteemed Clients Section */}
                    <section className="bg-white py-16">
                        <div className="max-w-6xl mx-auto px-4 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800">
                                Some of our Esteemed Clients
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
                                <img src="/images/clients/hotel-kunste.png" alt="Hotel Kunste" className="h-16 object-contain mx-auto" />
                                <img src="/images/clients/smith-kilian.png" alt="Smith Kilian" className="h-10 object-contain mx-auto" />
                                <img src="/images/clients/ask.png" alt="Agricultural Society of Kenya" className="h-16 object-contain mx-auto" />
                                <img src="/images/clients/county-government.png" alt="County Government" className="h-16 object-contain mx-auto" />
                                <img src="/images/clients/kdf.png" alt="Kenya Defence Forces" className="h-14 object-contain mx-auto" />
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Us Section */}
                    <WhyChooseUs />
                </div>
            )}
        </div>
    );
}
