import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const posts = [
  {
    id: 1,
    title: '🌿 Transform Your Small Backyard: Clever Landscape Design Ideas for Urban Spaces',
    imageUrl: '/small-backyard.png',
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
    imageUrl: '/ground-cover.png',
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
    imageUrl: '/landscape-roi.png',
    date: '2025-05-27',
    category: 'Landscape Investment',
    description:
      "See why professional landscaping isn't just beautiful—it's a wise investment with long - term benefits.",
    author: 'YouLandscape Team',
    externalUrl:
      'https://youlandscapeblog.wordpress.com/2025/05/27/%f0%9f%8c%b3-the-roi-of-professional-landscape-design-why-investing-outdoors-pays-off/',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[var(--off-white)]">
      {/* Blog Hero Image Section */}
      <div className="relative w-full h-72 md:h-96 mb-10">
        <img
          src="/blog-hero.png"
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
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Category badge */}
                <span className="absolute top-4 left-4 bg-[var(--primary-green)] text-white text-xs px-3 py-1 font-semibold tracking-wide">{post.category}</span>
              </div>
              <div className="flex flex-col h-full p-8">
                <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="text-gray-300">|</span>
                  <span className="font-medium text-[var(--primary-green)]">{post.author}</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--primary-green)] mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{post.description}</p>
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto px-5 py-2 bg-[var(--secondary-blue)] text-white font-semibold shadow hover:bg-[var(--primary-green)] transition text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
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
          className="bg-white rounded-none shadow-md overflow-hidden flex flex-col w-full max-w-xs"
        >
          <img
            src={post.imageUrl}
            alt={post.title}
            className="h-64 w-full object-cover rounded-none"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-[var(--primary-green)] mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4 flex-grow">
              {post.description}
            </p>
            <Link
              to="/blog"
              className="mt-auto text-[var(--secondary-blue)] font-medium hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
