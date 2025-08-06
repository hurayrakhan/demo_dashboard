import { Helmet } from 'react-helmet';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const cards = [
  { title: 'Users', value: '1,248', icon: '👥' },
  { title: 'Revenue', value: '$32,500', icon: '💰' },
  { title: 'Sessions', value: '9,430', icon: '📈' },
  { title: 'Errors', value: '12', icon: '⚠️' },
];

const DashboardHome = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Overview</title>
      </Helmet>

      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow rounded-xl p-5"
            >
              <div className="text-3xl mb-2">{card.icon}</div>
              <div className="text-sm text-gray-500">{card.title}</div>
              <div className="text-xl font-bold">{card.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Activity Section */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✅ New user signed up</li>
            <li>💡 New feature deployed</li>
            <li>🔧 Server maintenance completed</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
