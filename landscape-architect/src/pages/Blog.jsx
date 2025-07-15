import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const posts = [
  {
    id: 1,
    title: '🌿 Transform Your Small Backyard: Clever Landscape Design Ideas for Urban Spaces',
    imageUrl: '/small-backyard.webp',
    date: '2025-05-27',
    category: 'Urban Design',
    description:
      'Learn how to make the most of small outdoor areas with smart landscaping tips tailored for urban homes.',
    author: 'YouLandscape Team',
    externalUrl:
      'https://youlandscapeblog.wordpress.com/2025/05/27/%f0%9f%8c%bf-transform-your-small-backyard/',
  },
  {
    id: 2,
    title: '🌱 Beyond Green Grass: Exploring Unique Ground Cover Alternatives for Your Yard',
    imageUrl: '/ground-cover.webp',
    date: '2025-05-27',
    category: 'Sustainable Landscaping',
    description:
      'Discover creative, low-maintenance, and eco-friendly alternatives to traditional lawns.',
    author: 'YouLandscape Team',
    externalUrl:
      'https://youlandscapeblog.wordpress.com/2025/05/27/%f0%9f%8c%b1-beyond-green-grass-exploring-unique-ground-cover-alternatives-for-your-yard/',
  },
  {
    id: 3,
    title: '🌳 The ROI of Professional Landscape Design: Why Investing Outdoors Pays Off',
    imageUrl: '/landscape-roi.webp',
    date: '2025-05-27',
    category: 'Landscape Investment',
    description:
      "See why professional landscaping isn't just beautiful—it's a wise investment with long - term benefits.",
    author: 'YouLandscape Team',
    externalUrl:
      'https://youlandscapeblog.wordpress.com/2025/05/27/%f0%9f%8c%b3-the-roi-of-professional-landscape-design-why-investing-outdoors-pays-off/',
  },
];

// Reading time estimator (200 words/minute)
function estimateReadingTime(html) {
  if (!html) return '1 min read';
  const text = html.replace(/<[^>]+>/g, ' ');
  const words = text.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-[var(--off-white)]">
      {/* Blog Hero Image Section */}
      <div className="relative w-full h-72 md:h-96 mb-10">
        <img
          src="/blog-hero.webp"
          alt="Landscaping blog header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent flex flex-col items-center justify-center text-center px-2 sm:px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3">Our Blog</h1>
          <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto">Insights, updates, and inspiration from our landscape architecture practice</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col border border-gray-100"
            >
              <div className="relative h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] w-full overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={`${post.title} - YouLandscape Blog`}
                  className="w-full h-full object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Category badge */}
                <span className="absolute top-4 left-4 bg-[var(--primary-green)] text-white text-xs px-3 py-1 font-semibold tracking-wide">{post.category}</span>
              </div>
              <div className="flex flex-col p-6 md:p-8">
                <div className="flex items-center gap-3 mb-2 text-xs text-gray-500 flex-wrap">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="text-gray-300">|</span>
                  <span className="font-medium text-[var(--primary-green)]">{post.author}</span>
                  <span className="text-gray-300">|</span>
                  <span>{estimateReadingTime(post.description)}</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--primary-green)] mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-4">{post.description}</p>
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto px-4 py-2 bg-[var(--secondary-blue)] text-white font-semibold shadow hover:bg-[var(--primary-green)] transition text-xs rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] w-fit self-end"
                >
                  Read Full Blog →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlogList() {
  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-md overflow-hidden flex flex-col w-full max-w-xs border border-gray-100"
        >
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3 left-3 bg-[var(--primary-green)] text-white text-xs px-2 py-1 font-semibold tracking-wide z-10">{post.category}</span>
          </div>
          <div className="p-4 flex flex-col">
            <h3 className="text-base font-semibold text-[var(--primary-green)] mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-3 flex-grow line-clamp-3">
              {post.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2 flex-wrap">
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <span className="text-gray-300">|</span>
              <span className="font-medium text-[var(--primary-green)]">{post.author}</span>
              <span className="text-gray-300">|</span>
              <span>{estimateReadingTime(post.description)}</span>
            </div>
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-3 py-1 bg-[var(--secondary-blue)] text-white text-xs font-semibold rounded shadow hover:bg-[var(--primary-green)] transition w-fit self-end"
            >
              Read Full Blog →
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
