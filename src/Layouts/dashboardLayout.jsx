// src/layouts/DashboardLayout.jsx
import { Outlet, NavLink } from 'react-router';
import { useState } from 'react';
import {
  Home, BarChart, CreditCard, Users, Megaphone, LogOut, ChevronLeft, ChevronRight, User
} from 'lucide-react';

const navItems = [
  {
    category: 'Payments',
    items: [
      { name: 'Overview', path: '/dashboard', icon: <Home size={18} /> },
      { name: 'Transactions', path: '/dashboard/transactions', icon: <CreditCard size={18} /> },
    ],
  },
  {
    category: 'Marketing',
    items: [
      { name: 'Campaigns', path: '/dashboard/campaigns', icon: <Megaphone size={18} /> },
      { name: 'Analytics', path: '/dashboard/analytics', icon: <BarChart size={18} /> },
    ],
  },
  {
    category: 'Team',
    items: [
      { name: 'Users', path: '/dashboard/users', icon: <Users size={18} /> },
    ],
  },
];

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-md transition-all duration-300 
        ${collapsed ? 'w-15' : 'w-64'} flex flex-col justify-between`}
      >
        <div>
          {/* Top */}
          <div className="flex items-center justify-between px-4 py-4 border-b relative">
            <span className={`text-xl font-bold text-blue-600 transition-opacity duration-300 ${collapsed ? 'opacity-0' : 'opacity-100'}`}>
              Dashboard
            </span>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className={`p-1 rounded bg-gray-100 hover:bg-gray-200 absolute ${collapsed ? '-right-3' : 'right-4'}`}
            >
              {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
          </div>

          {/* Nav sections */}
          <nav className="px-2 py-4 space-y-6">
            {navItems.map((section, index) => (
              <div key={index}>
                {!collapsed && (
                  <h4 className="px-3 mb-2 text-xs uppercase text-gray-400 font-medium">
                    {section.category}
                  </h4>
                )}
                <div className="space-y-1">
                  {section.items.map((item, idx) => (
                    <NavLink
                      key={idx}
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition 
                         ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 text-gray-700'}`
                      }
                    >
                      <span className="text-gray-500">{item.icon}</span>
                      {!collapsed && <span>{item.name}</span>}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Footer (Profile + Logout) */}
        <div className="px-3 py-4 border-t flex items-center justify-between">
          <div className="flex items-center gap-3">
            <User size={24} className="text-gray-600" />
            {!collapsed && (
              <div className="text-sm">
                <div className="font-semibold">Hurayra Khan</div>
                <div className="text-gray-500 text-xs">Admin</div>
              </div>
            )}
          </div>
          <button className="text-gray-400 hover:text-red-500">
            <LogOut size={20} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <div className="space-x-3">
            <button className="bg-gray-200 px-3 py-1 rounded">🔔</button>
            <button className="bg-gray-200 px-3 py-1 rounded">👤</button>
          </div>
        </header>

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
