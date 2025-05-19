import React from 'react';
import '../styles/GetAquote.css';

const GetAquote = () => {
  return (
    <div className="quoteContainer">
      <h1>Get a Quote for Your Landscape Project</h1>
      <p>Looking to transform your outdoor space? Fill out the form below to get a personalized quote for your landscape project.</p>
      <p>Our services include:</p>
      <ul>
        <li>Custom garden design</li>
        <li>Hardscaping and paving</li>
        <li>Water features and irrigation</li>
        <li>Outdoor lighting installation</li>
        <li>Sustainable landscaping solutions</li>
      </ul>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Project Details:
          <textarea name="details"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GetAquote;