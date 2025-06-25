import React from "react";
import { FaAward, FaLeaf, FaHandshake, FaProjectDiagram, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";

const reasons = [
  {
    text: "Over 10 Years of Award-Winning Landscaping Expertise in Kenya",
    icon: <FaAward className="text-[var(--orange)] w-7 h-7" />,
  },
  {
    text: "Passionate About Sustainable, Nature-Inspired Outdoor Designs",
    icon: <FaLeaf className="text-[var(--orange)] w-7 h-7" />,
  },
  {
    text: "Trusted, Transparent, and Integrity-Driven Landscape Professionals",
    icon: <FaHandshake className="text-[var(--orange)] w-7 h-7" />,
  },
  {
    text: "Proven Track Record: 200+ Successful Projects Across Kenya",
    icon: <FaProjectDiagram className="text-[var(--orange)] w-7 h-7" />,
  },
  {
    text: "Meticulous Workmanship for Lasting, Beautiful Results",
    icon: <FaCheckCircle className="text-[var(--orange)] w-7 h-7" />,
  },
  {
    text: "Affordable, Efficient Solutions That Maximize Your Investment",
    icon: <FaMoneyBillWave className="text-[var(--orange)] w-7 h-7" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[var(--primary-green)] mb-10">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.slice(0, 3).map((item, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-[var(--off-white)] rounded-xl shadow-md">
                <span>{item.icon}</span>
                <p className="text-sm md:text-base text-gray-800 font-normal">{item.text}</p>
              </div>
            </div>
          ))}
          {reasons.slice(3).map((item, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-[var(--off-white)] rounded-xl shadow-md">
                <span>{item.icon}</span>
                <p className="text-sm md:text-base text-gray-800 font-normal">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 