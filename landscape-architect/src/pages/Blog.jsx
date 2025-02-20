import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Sustainable Landscape Design Trends for 2024',
    description: 'Explore the latest trends in eco-friendly landscape architecture and sustainable garden design.',
    imageUrl: '/placeholder-blog1.jpg',
    date: 'Mar 16, 2024',
    author: 'Jane Smith',
    category: 'Design Trends',
  },
  {
    id: 2,
    title: 'Urban Gardens: Maximizing Small Spaces',
    description: 'Creative solutions for designing beautiful and functional gardens in urban environments.',
    imageUrl: '/placeholder-blog2.jpg',
    date: 'Mar 10, 2024',
    author: 'John Davis',
    category: 'Urban Design',
  },
  // Add more blog posts as needed
];

export default function Blog() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Blog
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Insights, updates, and inspiration from our landscape architecture practice
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link to={`/blog/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={`/placeholder-avatar${post.id}.jpg`}
                    alt={post.author}
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {post.author}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
