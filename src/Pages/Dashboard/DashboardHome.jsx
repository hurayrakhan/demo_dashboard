import { Helmet } from 'react-helmet';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaUserFriends } from 'react-icons/fa';
import { FaArrowTrendUp, FaSackDollar } from 'react-icons/fa6';
import { IoIosWarning } from 'react-icons/io';

const cards = [
  { title: 'Users', value: '1,248', icon: <FaUserFriends></FaUserFriends> },
  { title: 'Revenue', value: '$32,500', icon: <FaSackDollar></FaSackDollar> },
  { title: 'Sessions', value: '9,430', icon: <FaArrowTrendUp></FaArrowTrendUp> },
  { title: 'Errors', value: '12', icon: <IoIosWarning></IoIosWarning> },
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
              className="bg-white shadow rounded-xl p-5 border border-gray-300"
            >
              <div className='flex gap-2 mb-2 items-center'>
                <div className=" text-xl font-semibold text-gray-400">{card.icon}</div>
                <div className="text-xl font-semibold text-gray-400">{card.title}</div>
              </div>
              <div className='flex gap-3'>
                <div className="text-3xl font-bold text-green-900">{card.value}</div>
                <div className='text-green-400 flex gap-1 items-center font-semibold'><FaArrowTrendUp></FaArrowTrendUp> <p>5%</p></div>
              </div>
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
