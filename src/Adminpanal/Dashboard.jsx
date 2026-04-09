import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const stats = [
    { label: 'Total Students', value: '0', icon: '🎓', bg: 'bg-blue-500' },
    { label: 'Total Payments', value: '0', icon: '💳', bg: 'bg-green-500' },
    { label: 'Revenue', value: '₹0', icon: '💰', bg: 'bg-yellow-500' },
    { label: 'Demo Requests', value: '0', icon: '📅', bg: 'bg-purple-500' },
    { label: 'Homework Tasks', value: '0', icon: '📝', bg: 'bg-red-500' },
    { label: 'Announcements', value: '0', icon: '📢', bg: 'bg-indigo-500' },
  ];

  const sections = [
    { title: 'Students', desc: 'View & manage registered students', icon: '🎓', link: '/dashboard', color: 'from-blue-400 to-blue-600' },
    { title: 'Courses', desc: 'Create & manage course catalog', icon: '📚', link: '/dashboard/my-courses', color: 'from-indigo-400 to-indigo-600' },
    { title: 'Fee Payments', desc: 'Track payment records from frontend', icon: '💳', link: '/dashboard/fee-payment', color: 'from-green-400 to-green-600' },
    { title: 'Demo Requests', desc: 'Manage demo class bookings', icon: '📅', link: '/dashboard', color: 'from-teal-400 to-teal-600' },
    { title: 'Homework', desc: 'Assign & manage homework tasks', icon: '📝', link: '/dashboard/homework', color: 'from-yellow-400 to-yellow-600' },
    { title: 'Practice Tests', desc: 'Create & manage tests', icon: '✅', link: '/dashboard/practice-tests', color: 'from-orange-400 to-orange-600' },
    { title: 'Announcements', desc: 'Post announcements to students', icon: '📢', link: '/dashboard/announcements', color: 'from-red-400 to-red-600' },
    { title: 'Q&A Management', desc: 'Answer student questions', icon: '❓', link: '/dashboard/ask-question', color: 'from-pink-400 to-pink-600' },
    { title: 'Feedback', desc: 'View & respond to reviews', icon: '⭐', link: '/dashboard/feedback', color: 'from-amber-400 to-amber-600' },
    { title: 'Testimonials', desc: 'Moderate testimonial submissions', icon: '💬', link: '/dashboard/testimonials', color: 'from-purple-400 to-purple-600' },
    { title: 'Blog', desc: 'Manage blog posts & subscribers', icon: '📰', link: '/dashboard/blog-management', color: 'from-cyan-400 to-cyan-600' },
    { title: 'Photo Gallery', desc: 'Manage photo gallery images', icon: '🖼️', link: '/dashboard', color: 'from-sky-400 to-sky-600' },
    { title: 'Video Gallery', desc: 'Manage video gallery content', icon: '🎥', link: '/dashboard', color: 'from-blue-500 to-blue-700' },
    { title: 'Our Tutors', desc: 'Manage tutor profiles shown on website', icon: '👨‍🏫', link: '/dashboard/tutors', color: 'from-emerald-400 to-emerald-600' },
    { title: 'Notifications', desc: 'Admin alerts & notifications', icon: '🔔', link: '/dashboard/notifications', color: 'from-amber-500 to-orange-600' },
    { title: 'My Profile', desc: 'View & edit admin profile', icon: '👤', link: '/dashboard/profile', color: 'from-slate-400 to-slate-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-[#265C7D]">Admin Dashboard</h1>
        <p className="text-gray-500 mt-1 text-sm">
          Welcome back! Here's a live overview of IBClassesOnline.
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 ${s.bg} rounded-full flex items-center justify-center text-xl mx-auto mb-3`}>
              {s.icon}
            </div>
            <div className="text-2xl font-bold text-gray-800">{s.value}</div>
            <div className="text-xs text-gray-500 mt-1 font-medium leading-tight">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Management Sections */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-5">Management Sections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sections.map((sec) => (
            <Link
              key={sec.title}
              to={sec.link}
              className="group flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#265C7D] hover:shadow-md transition-all duration-200 bg-gray-50 hover:bg-white"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-linear-to-br ${sec.color} flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform`}
              >
                {sec.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-800 group-hover:text-[#265C7D] transition-colors text-sm">
                  {sec.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{sec.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
