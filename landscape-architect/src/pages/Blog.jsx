import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const posts = [
  {
    id: 1,
    slug: 'top-landscape-companies-kenya',
    title: '🏆 Top 10 Landscape Companies in Kenya: Who’s Leading the Green Revolution?',
    imageUrl: '/top-landscape-companies-kenya.webp',
    date: '2025-07-22',
    category: 'Industry Rankings',
    tags: ['kenya', 'ranking', 'services', 'firms'],
    description: 'Explore the top 10 landscape design firms transforming outdoor spaces across Kenya.',
  },
  {
    id: 2,
    slug: 'transform-your-small-backyard',
    title: '🌿 Transform Your Small Backyard: Clever Landscape Design Ideas for Urban Spaces',
    imageUrl: '/small-backyard.webp',
    date: '2025-05-27',
    category: 'Urban Design',
    tags: ['urban', 'small spaces', 'backyard', 'design'],
    description: 'Smart landscaping tips for small urban outdoor areas.',
  },
  {
    id: 3,
    slug: 'beyond-green-grass-ground-cover-alternatives',
    title: '🌱 Beyond Green Grass: Exploring Unique Ground Cover Alternatives for Your Yard',
    imageUrl: '/ground-cover.webp',
    date: '2025-05-27',
    category: 'Sustainable Landscaping',
    tags: ['ground cover', 'eco', 'lawn alternatives'],
    description: 'Creative, low-maintenance, eco-friendly lawn alternatives.',
  },
  {
    id: 4,
    slug: 'the-roi-of-professional-landscape-design',
    title: '🌳 The ROI of Professional Landscape Design: Why Investing Outdoors Pays Off',
    imageUrl: '/landscape-roi.webp',
    date: '2025-05-27',
    category: 'Landscape Investment',
    tags: ['roi', 'professional', 'investment', 'design'],
    description: "Why professional landscaping is a wise long-term investment.",
  },
  {
    id: 5,
    slug: 'sustainable-irrigation-techniques',
    title: '💧 Sustainable Irrigation Techniques: Saving Water Without Sacrificing Beauty',
    imageUrl: '/sustainable-irrigation-techniques.webp',
    date: '2025-07-15',
    category: 'Eco-Friendly Landscaping',
    tags: ['irrigation', 'eco', 'sustainability', 'water'],
    description: 'How to conserve water with smart, beautiful irrigation systems.',
  },
  {
    id: 6,
    slug: 'low-maintenance-backyard-designs',
    title: '🌾 Low-Maintenance Backyard Designs for Busy Homeowners',
    imageUrl: '/low-maintenance-backyard-designs.webp',
    date: '2025-07-10',
    category: 'Homeowner Tips',
    tags: ['low maintenance', 'backyard', 'homeowners'],
    description: 'Create relaxing outdoor spaces with minimal upkeep.',
  },
  {
    id: 7,
    slug: 'benefits-of-vertical-gardening',
    title: '🌿 The Benefits of Vertical Gardening in Small Spaces',
    imageUrl: '/benefits-of-vertical-gardening.webp',
    date: '2025-06-28',
    category: 'Urban Gardening',
    tags: ['vertical garden', 'urban', 'space saving'],
    description: 'Grow more in less space with living walls and vertical planters.',
  },
  {
    id: 8,
    slug: 'how-landscaping-boosts-property-value',
    title: '🏡 How Landscaping Boosts Property Value: What Buyers Look For',
    imageUrl: '/how-landscaping-boosts-property-value.webp',
    date: '2025-07-05',
    category: 'Real Estate',
    tags: ['property', 'value', 'real estate', 'buyers'],
    description: 'Why first impressions from the yard can boost your home’s value.',
  },
  {
    id: 9,
    slug: 'using-mulch-effectively',
    title: '🍂 Using Mulch Effectively: A Gardener’s Secret Weapon',
    imageUrl: '/using-mulch-effectively.webp',
    date: '2025-07-01',
    category: 'Garden Techniques',
    tags: ['mulch', 'gardening', 'soil', 'conservation'],
    description: 'Save water, suppress weeds, and build better soil with mulch.',
  },
];

function estimateReadingTime(description) {
  const words = description.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-[var(--off-white)]">
      <Helmet>
        <title>Our Blog | YouLandscape</title>
        <meta name="description" content="Latest landscaping tips and updates from YouLandscape." />
      </Helmet>

      <div className="relative w-full h-72 md:h-96 mb-10">
        <img src="/blog-hero.webp" alt="Landscaping blog header" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent flex flex-col items-center justify-center text-center px-2 sm:px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3">Our Blog</h1>
          <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto">
            Insights, updates, and inspiration from our landscape architecture practice
          </p>
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
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 bg-[var(--primary-green)] text-white text-xs px-3 py-1 font-semibold tracking-wide">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-col p-6 md:p-8">
                <div className="flex items-center gap-3 mb-2 text-xs text-gray-500 flex-wrap">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="text-gray-300">|</span>
                  <span className="font-medium text-[var(--primary-green)]">YouLandscape Team</span>
                  <span className="text-gray-300">|</span>
                  <span>{estimateReadingTime(post.description)}</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--primary-green)] mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-4">{post.description}</p>
                <Link to={`/blog/${post.slug}`} className="inline-block mt-auto px-4 py-2 bg-[var(--secondary-blue)] text-white font-semibold shadow hover:bg-[var(--primary-green)] transition text-xs rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] w-fit self-end">
                  Read Full Blog →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
