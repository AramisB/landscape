import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

const team = [
  {
    id: 1,
    name: 'Jane Smith',
    role: 'Principal Landscape Architect',
    imageUrl: '/placeholder-team1.jpg',
    bio: 'With over 15 years of experience in landscape architecture, Jane leads our creative vision.',
  },
  {
    id: 2,
    name: 'John Davis',
    role: 'Senior Designer',
    imageUrl: '/placeholder-team2.jpg',
    bio: 'John specializes in sustainable design and urban planning solutions.',
  },
  // Add more team members as needed
];

const stats = [
  { id: 1, name: 'Years of Experience', value: '20+' },
  { id: 2, name: 'Completed Projects', value: '500+' },
  { id: 3, name: 'Awards Won', value: '25+' },
  { id: 4, name: 'Happy Clients', value: '300+' },
];

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <img
          src="/placeholder-about-hero.jpg"
          alt="About hero"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={styles.heroContent}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.heroTitle}
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={styles.heroDescription}
            >
              We are passionate about creating sustainable, beautiful landscapes that enhance both the
              natural environment and human experience.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={styles.statsSection}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={styles.statsGrid}>
            <div className={styles.statsContent}>
              <h2 className={styles.sectionTitle}>
                Our Impact
              </h2>
              <p className={styles.sectionDescription}>
                For over two decades, we've been transforming spaces and creating lasting impact through
                innovative landscape design.
              </p>
            </div>
            <dl className={styles.statsWrapper}>
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={styles.statCard}
                >
                  <dt className={styles.statLabel}>{stat.name}</dt>
                  <dd className={styles.statValue}>{stat.value}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className={styles.teamSection}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={styles.teamHeader}>
            <h2 className={styles.sectionTitle}>
              Meet Our Team
            </h2>
            <p className={styles.sectionDescription}>
              Our talented team brings together years of experience and passion for landscape
              architecture.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.teamCard}
              >
                <div className={styles.teamImageWrapper}>
                  <img
                    className={styles.teamImage}
                    src={member.imageUrl}
                    alt={member.name}
                  />
                </div>
                <h3 className={styles.teamMemberName}>
                  {member.name}
                </h3>
                <p className={styles.teamMemberRole}>
                  {member.role}
                </p>
                <p className={styles.teamMemberBio}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
