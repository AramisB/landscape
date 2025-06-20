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
      <div className="relative w-full h-64 md:h-80 mb-10">
        <img
          src="/blog-hero.png"
          alt="Landscaping blog header"
          className="w-full h-full object-cover rounded-none"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">Our Blog</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">Insights, updates, and inspiration from our landscape architecture practice</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-[var(--primary-green)]">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="px-3 py-1 bg-[var(--off-white)] text-[var(--primary-green)] rounded-none">{post.category}</span>
                </div>
                <div className="flex-grow mb-4">
                  <h3 className="text-xl font-semibold text-[var(--primary-green)] mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.description}</p>
                </div>
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-[var(--secondary-blue)] font-medium hover:underline block"
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
