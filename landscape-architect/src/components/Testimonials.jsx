import React from "react";
import { Helmet } from "react-helmet-async";

export const testimonials = [
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
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
      <p className="italic text-gray-700 mb-2">"{testimonial.message}"</p>
      <div className="font-semibold text-green-700 mt-2">{testimonial.name}</div>
      <div className="text-sm text-gray-500">{testimonial.location}</div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Helmet>
        <title>Client Testimonials - YouLandscape</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center mb-8 text-green-700">What Our Clients Say</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} testimonial={t} />
        ))}
      </div>
    </div>
  );
}
