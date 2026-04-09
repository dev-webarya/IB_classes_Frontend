import React, { useState } from 'react';

const Notifications = () => {
  const [filter, setFilter] = useState('all'); // all, unread, read

  const notifications = [
    {
      id: 1,
      type: 'assignment',
      title: 'New Assignment Posted',
      message: 'Mathematics HL - Internal Assessment has been posted. Due date: May 15, 2026',
      time: '2 hours ago',
      read: false,
      icon: '📝',
      color: 'bg-[#265C7D]/10 text-[#265C7D]'
    },
    {
      id: 2,
      type: 'grade',
      title: 'Assignment Graded',
      message: 'Your Economics SL commentary has been graded. Score: 12/14',
      time: '5 hours ago',
      read: false,
      icon: '⭐',
      color: 'bg-[#E49829]/10 text-[#E49829]'
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Class Starting Soon',
      message: 'Your Physics SL class will start in 1 hour (5:00 PM)',
      time: '6 hours ago',
      read: true,
      icon: '⏰',
      color: 'bg-[#E49829]/10 text-[#E49829]'
    },
    {
      id: 4,
      type: 'announcement',
      title: 'New Announcement',
      message: 'Mid-term exam schedule has been released. Check announcements.',
      time: 'Yesterday',
      read: false,
      icon: '📢',
      color: 'bg-[#265C7D]/10 text-[#265C7D]'
    },
    {
      id: 5,
      type: 'message',
      title: 'Teacher Response',
      message: 'Mr. Singh responded to your question about calculus derivatives.',
      time: 'Yesterday',
      read: true,
      icon: '💬',
      color: 'bg-[#E49829]/10 text-[#E49829]'
    },
    {
      id: 6,
      type: 'payment',
      title: 'Fee Payment Reminder',
      message: 'Your monthly fee payment is due in 3 days.',
      time: '2 days ago',
      read: false,
      icon: '💳',
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 7,
      type: 'resource',
      title: 'New Study Material',
      message: 'New practice questions uploaded for Chemistry HL - Organic Chemistry',
      time: '2 days ago',
      read: true,
      icon: '📚',
      color: 'bg-teal-100 text-teal-600'
    },
    {
      id: 8,
      type: 'feedback',
      title: 'Feedback Requested',
      message: 'Please provide feedback on your recent class experience.',
      time: '3 days ago',
      read: true,
      icon: '📝',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !n.read;
    if (filter === 'read') return n.read;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAsRead = (id) => {
    // Handle mark as read
    alert(`Notification ${id} marked as read`);
  };

  const handleMarkAllAsRead = () => {
    // Handle mark all as read
    alert('All notifications marked as read');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Notifications</h1>
          <p className="text-gray-600">Stay updated with your latest activities</p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={handleMarkAllAsRead}
            className="px-6 py-2 bg-[#265C7D] hover:bg-[#1e4a5f] text-white font-semibold rounded-lg transition-colors"
          >
            Mark All as Read
          </button>
        )}
      </div>

      {/* Stats Card */}
      <div className="bg-gradient-to-r from-[#265C7D] to-[#1e4a5f] rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-4xl">
              🔔
            </div>
            <div>
              <p className="text-3xl font-bold">{unreadCount}</p>
              <p className="text-white/90">Unread Notifications</p>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-3xl font-bold">{notifications.length}</p>
            <p className="text-white/90">Total Notifications</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            filter === 'all'
              ? 'bg-[#265C7D] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All ({notifications.length})
        </button>
        <button
          onClick={() => setFilter('unread')}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            filter === 'unread'
              ? 'bg-[#265C7D] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Unread ({unreadCount})
        </button>
        <button
          onClick={() => setFilter('read')}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            filter === 'read'
              ? 'bg-[#265C7D] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Read ({notifications.length - unreadCount})
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${
              notification.read ? 'border-gray-300' : 'border-[#265C7D]'
            } ${!notification.read ? 'bg-[#265C7D]/5' : ''}`}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={`w-12 h-12 ${notification.color} rounded-lg flex items-center justify-center text-2xl flex-shrink-0`}>
                {notification.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className={`text-lg font-bold ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                    {notification.title}
                    {!notification.read && (
                      <span className="ml-2 w-2 h-2 bg-[#265C7D] rounded-full inline-block"></span>
                    )}
                  </h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap">{notification.time}</span>
                </div>
                
                <p className={`mb-3 ${notification.read ? 'text-gray-600' : 'text-gray-700'}`}>
                  {notification.message}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-1.5 bg-[#265C7D] hover:bg-[#1e4a5f] text-white font-semibold rounded-lg text-sm transition-colors">
                    View
                  </button>
                  {!notification.read && (
                    <button
                      onClick={() => handleMarkAsRead(notification.id)}
                      className="px-4 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg text-sm transition-colors"
                    >
                      Mark as Read
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredNotifications.length === 0 && (
        <div className="bg-white rounded-xl p-12 text-center shadow-md">
          <div className="text-6xl mb-4">🔔</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No notifications</h3>
          <p className="text-gray-600">
            {filter === 'unread' 
              ? "You're all caught up! No unread notifications."
              : "No notifications in this category."}
          </p>
        </div>
      )}

      {/* Notification Settings */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>⚙️</span>
          Notification Preferences
        </h2>
        <div className="space-y-3">
          {[
            { label: 'Assignment Updates', checked: true },
            { label: 'Grade Notifications', checked: true },
            { label: 'Class Reminders', checked: true },
            { label: 'Announcements', checked: true },
            { label: 'Teacher Messages', checked: true },
            { label: 'Fee Reminders', checked: false }
          ].map((pref, index) => (
            <label key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={pref.checked}
                className="w-5 h-5 text-[#265C7D] rounded focus:ring-2 focus:ring-[#265C7D]"
              />
              <span className="text-gray-700 font-medium">{pref.label}</span>
            </label>
          ))}
        </div>
        <button className="mt-4 px-6 py-2 bg-[#E49829] hover:bg-[#d68522] text-white font-semibold rounded-lg transition-colors">
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default Notifications;
