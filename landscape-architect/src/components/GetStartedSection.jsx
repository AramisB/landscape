import { Link } from 'react-router-dom';

export default function GetStartedSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[var(--secondary-blue)] to-[var(--secondary-green)] py-8 sm:py-10 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-3 sm:gap-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Ready to Transform Your Outdoor Space?</h2>
        <p className="text-sm sm:text-base font-normal mb-4 max-w-2xl leading-relaxed">Let our team of experts help you design, build, and maintain the landscape of your dreams. Reach out for a free consultation or to get started on your project today!</p>
        <Link
          to="/contact"
          className="inline-block bg-white text-[var(--primary-green)] font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded shadow hover:bg-[var(--light-green)] hover:text-white transition text-sm sm:text-base"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
} 