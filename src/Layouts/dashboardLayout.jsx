import { Outlet, NavLink } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 text-2xl font-bold border-b">🚀 Dashboard</div>
        <nav className="p-4 space-y-2 text-sm">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? 'block bg-blue-100 text-blue-600 px-4 py-2 rounded'
                : 'block px-4 py-2 rounded hover:bg-gray-100'
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/dashboard/users"
            className={({ isActive }) =>
              isActive
                ? 'block bg-blue-100 text-blue-600 px-4 py-2 rounded'
                : 'block px-4 py-2 rounded hover:bg-gray-100'
            }
          >
            Users
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <div className="space-x-3">
            <button className="bg-gray-200 px-3 py-1 rounded">🔔</button>
            <button className="bg-gray-200 px-3 py-1 rounded">👤</button>
          </div>
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
