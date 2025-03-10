import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Blog.css'; // Corrected import

const posts = [
  {
    id: 1,
    title: "Example Blog",
    imageUrl: "/example.jpg",
    date: "2024-02-25",
    category: "Design",
    description: "A brief description of the blog.",
    author: "John Doe",
  },
];

export default function Blog() {
  return (
    <div className="blogContainer">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="headerSection">
          <h1 className="mainTitle">
            Our Blog
          </h1>
          <p className="mainDescription">
            Insights, updates, and inspiration from our landscape architecture practice
          </p>
        </div>
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
                  className="blogImage"
                />
                <div className="imageOverlay" />
              </div>
              <div className="blogContent">
                <div className="metaInfo">
                  <time dateTime={post.date} className="blogDate">
                    {post.date}
                  </time>
                  <span className="blogCategory">
                    {post.category}
                  </span>
                </div>
                <div className="titleGroup">
                  <h3 className="blogTitle">
                    <Link to={`/blog/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="blogDescription">
                    {post.description}
                  </p>
                </div>
                <div className="authorSection">
                  <img
                    src={`/placeholder-avatar${post.id}.jpg`}
                    alt={post.author}
                    className="authorImage"
                  />
                  <div className="text-sm leading-6">
                    <p className="authorName">
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
