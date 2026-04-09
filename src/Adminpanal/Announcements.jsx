import React from 'react';

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: 'Mid-Term Exams Schedule Released',
      message: 'The mid-term examination schedule for all IB subjects has been released. Please check your course pages for specific dates and times. Make sure to prepare well in advance.',
      date: '2026-04-01',
      author: 'Admin',
      category: 'Exams',
      priority: 'high',
      icon: '📢'
    },
    {
      id: 2,
      title: 'Extended Essay Submission Deadline',
      message: 'Reminder: The deadline for Extended Essay first draft submission is June 30, 2026. Please reach out to your supervisors if you need guidance.',
      date: '2026-03-30',
      author: 'Academic Coordinator',
      category: 'Deadlines',
      priority: 'high',
      icon: '📝'
    },
    {
      id: 3,
      title: 'New Study Materials Available',
      message: 'We have uploaded new practice questions and revision materials for Mathematics HL and Physics SL. Check the resources section in your course pages.',
      date: '2026-03-28',
      author: 'Mr. Rajesh Singh',
      category: 'Resources',
      priority: 'medium',
      icon: '📚'
    },
    {
      id: 4,
      title: 'Holiday Notice - Classes Suspended',
      message: 'Classes will be suspended from April 10-15, 2026 for Spring Break. Regular classes will resume on April 16. Emergency support will be available via email.',
      date: '2026-03-25',
      author: 'Admin',
      category: 'General',
      priority: 'medium',
      icon: '🏖️'
    },
    {
      id: 5,
      title: 'Parent-Teacher Meeting Scheduled',
      message: 'The next parent-teacher meeting is scheduled for April 20, 2026 at 5:00 PM. Meeting links will be shared via email.',
      date: '2026-03-22',
      author: 'Admin',
      category: 'Events',
      priority: 'low',
      icon: '👥'
    },
    {
      id: 6,
      title: 'CAS Project Submission Guidelines',
      message: 'Guidelines for CAS (Creativity, Activity, Service) project submissions have been updated. Please review the new requirements on the portal.',
      date: '2026-03-20',
      author: 'CAS Coordinator',
      category: 'CAS',
      priority: 'medium',
      icon: '🎨'
    }
  ];

  const getPriorityStyle = (priority) => {
    const styles = {
      high: 'border-l-red-500 bg-red-50',
      medium: 'border-l-[#E49829] bg-[#E49829]/5',
      low: 'border-l-[#265C7D] bg-[#265C7D]/5'
    };
    return styles[priority] || styles.medium;
  };

  const getCategoryBadge = (category) => {
    const badges = {
      'Exams': 'bg-red-100 text-red-600',
      'Deadlines': 'bg-[#E49829]/10 text-[#E49829]',
      'Resources': 'bg-[#265C7D]/10 text-[#265C7D]',
      'General': 'bg-gray-100 text-gray-600',
      'Events': 'bg-[#265C7D]/10 text-[#265C7D]',
      'CAS': 'bg-[#265C7D]/10 text-[#265C7D]'
    };
    return badges[category] || badges.General;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Announcements</h1>
        <p className="text-gray-600">Stay updated with important notices and information</p>
      </div>

      {/* Stats Bar */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#265C7D] to-[#1e4a5f] rounded-lg flex items-center justify-center text-white text-2xl">
              📢
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{announcements.length}</p>
              <p className="text-sm text-gray-500">Total Announcements</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
              {announcements.filter(a => a.priority === 'high').length} High Priority
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs font-semibold">
              {announcements.filter(a => a.priority === 'medium').length} Medium
            </span>
          </div>
        </div>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${getPriorityStyle(announcement.priority)}`}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-[#265C7D] to-[#1e4a5f] rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                {announcement.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {announcement.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryBadge(announcement.category)}`}>
                        {announcement.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        by {announcement.author}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(announcement.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                  
                  {announcement.priority === 'high' && (
                    <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold border border-red-200">
                      🚨 Important
                    </span>
                  )}
                </div>

                {/* Message */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {announcement.message}
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-[#265C7D] hover:bg-[#1e4a5f] text-white font-semibold rounded-lg text-sm transition-colors">
                    View Details
                  </button>
                  <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg text-sm transition-colors">
                    Mark as Read
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Help Section */}
      <div className="bg-gradient-to-r from-[#265C7D] to-[#1e4a5f] rounded-xl p-8 text-white">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span>💡</span>
          Stay Connected
        </h2>
        <p className="text-white/90 mb-3">
          Important announcements are also sent via email. Make sure to:
        </p>
        <ul className="space-y-2 text-white/90">
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Check your email regularly for urgent updates</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Keep your contact information up to date</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Enable notifications to not miss important announcements</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Announcements;
