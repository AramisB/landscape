import { motion } from 'framer-motion';

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
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="/placeholder-about-hero.jpg"
          alt="About hero"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We are passionate about creating sustainable, beautiful landscapes that enhance both the
              natural environment and human experience.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Impact
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                For over two decades, we've been transforming spaces and creating lasting impact through
                innovative landscape design.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-8 sm:grid-cols-2">
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                  <dd className="text-3xl font-bold leading-9 tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our talented team brings together years of experience and passion for landscape
              architecture.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <img
                  className="aspect-square w-full rounded-2xl object-cover"
                  src={member.imageUrl}
                  alt={member.name}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {member.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">{member.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600 text-center">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
