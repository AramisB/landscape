import React from 'react';

const GetAquote = () => {
  return (
    <div className="max-w-2xl mx-auto p-2 sm:p-8 bg-gray-50 font-sans">
      <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">Get a Quote for Your Landscape Project</h1>
      <p className="text-base sm:text-lg text-gray-700 mb-2">Looking to transform your outdoor space? Fill out the form below to get a personalized quote for your landscape project.</p>
      <p className="text-sm sm:text-base text-gray-600 mb-2">Our services include:</p>
      <ul className="list-disc pl-4 sm:pl-6 mb-4 text-sm sm:text-base text-gray-800">
        <li>Custom garden design</li>
        <li>Hardscaping and paving</li>
        <li>Water features and irrigation</li>
        <li>Outdoor lighting installation</li>
        <li>Sustainable landscaping solutions</li>
      </ul>
      <form className="flex flex-col gap-3 sm:gap-4">
        <label className="text-base text-gray-800">
          Name:
          <input type="text" name="name" className="block w-full mt-1 p-2 border border-gray-300 text-base rounded-none focus:outline-none focus:ring-2 focus:ring-green-600" />
        </label>
        <label className="text-base text-gray-800">
          Email:
          <input type="email" name="email" placeholder="info@youlandscape.co.ke" className="block w-full mt-1 p-2 border border-gray-300 text-base rounded-none focus:outline-none focus:ring-2 focus:ring-green-600" />
        </label>
        <label className="text-base text-gray-800">
          Project Details:
          <textarea name="details" className="block w-full mt-1 p-2 border border-gray-300 text-base rounded-none focus:outline-none focus:ring-2 focus:ring-green-600" rows={4}></textarea>
        </label>
        <button type="submit" className="w-full sm:w-fit px-6 py-2 bg-green-700 text-white font-semibold text-base border-none rounded-none hover:bg-green-600 transition">Submit</button>
      </form>
    </div>
  );
};

export default GetAquote;