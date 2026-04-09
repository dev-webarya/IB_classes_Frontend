import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../api/api/api/authApi';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [notifCount] = useState(4);
  const location = useLocation();
  const navigate = useNavigate();

  const menuGroups = [
    {
      label: 'Overview',
      items: [
        { path: '/dashboard', icon: '📊', label: 'Dashboard' },
        { path: '/dashboard/profile', icon: '👤', label: 'Admin Profile' },
        { path: '/dashboard/notifications', icon: '🔔', label: 'Notifications' },
      ],
    },
    {
      label: 'Academic Management',
      items: [
        { path: '/dashboard/my-courses', icon: '📚', label: 'Courses' },
        { path: '/dashboard/tutors', icon: '👨‍🏫', label: 'Tutor Management' },
        { path: '/dashboard/homework', icon: '📝', label: 'Homework' },
        { path: '/dashboard/assignments', icon: '📋', label: 'Assignments' },
        { path: '/dashboard/practice-tests', icon: '✅', label: 'Practice Tests' },
      ],
    },
    {
      label: 'Content & Blog',
      items: [
        { path: '/dashboard/blog-dashboard', icon: '📈', label: 'Blog Dashboard' },
        { path: '/dashboard/subscribers', icon: '📧', label: 'Subscribers' },
      ],
    },
    {
      label: 'Communication',
      items: [
        { path: '/dashboard/announcements', icon: '📢', label: 'Announcements' },
        { path: '/dashboard/ask-question', icon: '❓', label: 'Q & A' },
        { path: '/dashboard/testimonials', icon: '💬', label: 'Testimonials' },
        { path: '/dashboard/feedback', icon: '⭐', label: 'Feedback & Reviews' },
        { path: '/dashboard/support', icon: '🆘', label: 'Support & Help' },
      ],
    },
    {
      label: 'Finance',
      items: [
        { path: '/dashboard/fee-payment', icon: '💳', label: 'Fee Payment' },
      ],
    },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="h-screen bg-gray-100 flex overflow-hidden">
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-5 bg-[#265C7D] border-b border-[#1e4a5f] shrink-0">
            <div className="flex items-center gap-3">
              <img src="/logo (3).png" alt="IB Online Classes" className="h-9" />
              <div>
                <h2 className="font-bold text-base text-white leading-tight">Admin Panel</h2>
                <p className="text-white/70 text-xs">IBClassesOnline</p>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 px-3 py-3 overflow-y-auto">
            {menuGroups.map((group) => (
              <div key={group.label} className="mb-2">
                <ul className="space-y-0.5">
                  {group.items.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                          location.pathname === item.path
                            ? 'bg-[#265C7D] text-white font-semibold shadow-md'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                      >
                        <span className="text-lg shrink-0">{item.icon}</span>
                        <span className="text-sm">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200 shrink-0">
            <Link
              to="/"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-600 font-semibold rounded-lg transition-colors text-sm mb-2"
            >
              🌐 View Website
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#265C7D] text-white font-semibold rounded-lg hover:bg-[#1e4a5f] transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-[#265C7D] shadow-md shrink-0 z-30">
          <div className="px-4 py-3.5 flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <h1 className="text-white text-lg font-bold lg:block hidden">
              🛡️ Admin Panel — IBClassesOnline
            </h1>

            <div className="flex items-center gap-3">
              {/* Notification Bell */}
              <Link
                to="/dashboard/notifications"
                className="relative p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                title="Notifications"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {notifCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center">
                    {notifCount}
                  </span>
                )}
              </Link>

              {/* Admin Avatar */}
              <Link
                to="/dashboard/profile"
                className="w-9 h-9 bg-[#E49829] rounded-full flex items-center justify-center text-white font-bold hover:ring-2 hover:ring-white/60 transition-all text-sm"
                title="Admin Profile"
              >
                A
              </Link>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200 px-6 py-2 shrink-0">
          <p className="text-xs text-gray-400">
            Admin Panel
            <span className="mx-1">/</span>
            <span className="text-[#265C7D] font-medium capitalize">
              {location.pathname === '/dashboard' ? 'Dashboard' : location.pathname.replace('/dashboard/', '').replace(/-/g, ' ')}
            </span>
          </p>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
