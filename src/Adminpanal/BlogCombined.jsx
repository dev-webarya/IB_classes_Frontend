import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BlogManagement from './BlogManagement';
import { BlogModerationPage } from './BlogModerationPage';
import { FileText, Shield } from 'lucide-react';

const TABS = [
  { key: 'management', label: 'Blog Management', icon: FileText, desc: 'Manage all published & draft posts' },
  { key: 'moderation', label: 'Blog Moderation', icon: Shield, desc: 'Review & approve submissions' },
];

export default function BlogCombined() {
  const location = useLocation();
  const defaultTab = location.state?.tab === 'moderation' ? 'moderation' : 'management';
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="space-y-6">
      {/* Tab Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1 flex gap-1">
        {TABS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all ${
              activeTab === key
                ? 'bg-blue-900 text-white shadow'
                : 'text-gray-500 hover:text-blue-900 hover:bg-blue-50'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'management' && <BlogManagement />}
      {activeTab === 'moderation' && <BlogModerationPage />}
    </div>
  );
}
