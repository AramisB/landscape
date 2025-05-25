import React from 'react';
import '../styles/Footer.css'; // Import the footer styles

export default function Footer() {
  return (
    <footer className="footer bg-green-600 text-white py-6">
      <div className="footerContainer max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="footerText text-sm">
          © {new Date().getFullYear()} YouLandscape. All rights reserved.
        </p>
        <p className="footerText text-sm mt-2">
          Designed with care by YouLandscape Architects & Consultants.
        </p>
      </div>
    </footer>
  );
}
