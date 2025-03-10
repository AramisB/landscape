import { motion } from 'framer-motion';
import '../styles/About.css'; // Corrected import

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
    <div className="aboutContainer">
      {/* Hero Section */}
      <div className="heroSection">
        <img
          src="/placeholder-about-hero.jpg"
          alt="About hero"
          className="heroImage"
        />
        <div className="heroOverlay" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="heroContent">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="heroTitle"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="heroDescription"
            >
              We are passionate about creating sustainable, beautiful landscapes that enhance both the
              natural environment and human experience.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="statsSection">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="statsGrid">
            <div className="statsContent">
              <h2 className="sectionTitle">
                Our Impact
              </h2>
              <p className="sectionDescription">
                For over two decades, we've been transforming spaces and creating lasting impact through
                innovative landscape design.
              </p>
            </div>
            <dl className="statsWrapper">
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="statCard"
                >
                  <dt className="statLabel">{stat.name}</dt>
                  <dd className="statValue">{stat.value}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="teamSection">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="teamHeader">
            <h2 className="sectionTitle">
              Meet Our Team
            </h2>
            <p className="sectionDescription">
              Our talented team brings together years of experience and passion for landscape
              architecture.
            </p>
          </div>
          <div className="teamGrid">
            {team.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="teamCard"
              >
                <div className="teamImageWrapper">
                  <img
                    className="teamImage"
                    src={member.imageUrl}
                    alt={member.name}
                  />
                </div>
                <h3 className="teamMemberName">
                  {member.name}
                </h3>
                <p className="teamMemberRole">
                  {member.role}
                </p>
                <p className="teamMemberBio">
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
