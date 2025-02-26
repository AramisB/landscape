import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from '../styles/Blog.module.css';

export default function Blog() {
  return (
    <div className={styles.blogContainer}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={styles.headerSection}>
          <h1 className={styles.mainTitle}>
            Our Blog
          </h1>
          <p className={styles.mainDescription}>
            Insights, updates, and inspiration from our landscape architecture practice
          </p>
        </div>
        <div className={styles.blogGrid}>
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.blogCard}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className={styles.blogImage}
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.blogContent}>
                <div className={styles.metaInfo}>
                  <time dateTime={post.date} className={styles.blogDate}>
                    {post.date}
                  </time>
                  <span className={styles.blogCategory}>
                    {post.category}
                  </span>
                </div>
                <div className={styles.titleGroup}>
                  <h3 className={styles.blogTitle}>
                    <Link to={`/blog/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className={styles.blogDescription}>
                    {post.description}
                  </p>
                </div>
                <div className={styles.authorSection}>
                  <img
                    src={`/placeholder-avatar${post.id}.jpg`}
                    alt={post.author}
                    className={styles.authorImage}
                  />
                  <div className="text-sm leading-6">
                    <p className={styles.authorName}>
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
