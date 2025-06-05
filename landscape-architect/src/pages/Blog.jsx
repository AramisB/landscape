import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

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
      'See why professional landscaping isn\'t just beautiful—it\'s a wise investment with long - term benefits.',
    author: 'YouLandscape Team',
    externalUrl:
      'https://youlandscapeblog.wordpress.com/2025/05/27/%f0%9f%8c%b3-the-roi-of-professional-landscape-design-why-investing-outdoors-pays-off/',
  },
];

export default function Blog() {
  return (
    <div className="blogContainer">
      {/* Blog Hero Image Section */}
      <div className="relative w-full h-64 md:h-80 mb-10">
        <img
          src="/blog-hero.png"
          alt="Landscaping blog header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="mainTitle text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Our Blog
          </h1>
          <p className="mainDescription text-lg md:text-2xl text-white max-w-2xl mx-auto">
            Insights, updates, and inspiration from our landscape architecture
            practice
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Removed old headerSection, now in hero image */}
        <div className="blogGrid">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="blogCard"
            >
              <div className="imageWrapper">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="blogImage h-64"
                />
                <div className="imageOverlay" />
              </div>
              <div className="blogContent flex flex-col h-full">
                <div className="metaInfo">
                  <time dateTime={post.date} className="blogDate">
                    {post.date}
                  </time>
                  <span className="blogCategory">{post.category}</span>
                </div>
                <div className="titleGroup flex-grow">
                  <h3 className="blogTitle text-2xl">{post.title}</h3>
                  <p className="blogDescription">{post.description}</p>
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
          className="blogCard bg-white rounded-none shadow-md overflow-hidden flex flex-col w-full max-w-xs"
        >
          <img
            src={post.imageUrl}
            alt={post.title}
            className="blogImage h-64 w-full object-cover"
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
