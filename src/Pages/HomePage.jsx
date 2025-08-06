// src/pages/Home.jsx
import { Helmet } from 'react-helmet';
import { Fade } from 'react-awesome-reveal';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const features = [
  {
    title: 'AI-Powered Tools',
    description: 'Access intelligent tools for automation, text generation, and analytics.',
  },
  {
    title: 'Secure Dashboard',
    description: 'View and manage your AI data through a secure and interactive dashboard.',
  },
  {
    title: 'Real-time Insights',
    description: 'Get updates and performance metrics in real-time.',
  },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | AI Dashboard</title>
        <meta name="description" content="AI-powered dashboard with smart tools and real-time data" />
      </Helmet>

      <div className="min-h-screen bg-white text-gray-800 flex flex-col">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <Fade cascade damping={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Welcome to <span className="text-blue-600">AI Dashboard</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Your smart analytics hub powered by AI. Track insights, manage data, and boost productivity.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="/dashboard"
                  className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Go to Dashboard
                </a>
                <a
                  href="/about"
                  className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-100 transition"
                >
                  Learn More
                </a>
              </div>
            </Fade>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <Fade direction="up" cascade damping={0.2} triggerOnce>
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 rounded-lg shadow p-6 text-center"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </Fade>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <Fade cascade>
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg mb-6">Create an account or log in to your AI dashboard now.</p>
            <a
              href="/dashboard"
              className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 transition"
            >
              Open Dashboard
            </a>
          </Fade>
        </section>
      </div>
    </>
  );
};

export default Home;
