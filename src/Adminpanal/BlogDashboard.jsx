import React, { useState, useEffect } from 'react';
import {
  FileText, Clock, CheckCircle, Users, Shield
} from 'lucide-react';
import { adminApi } from '../api/api/blogApi';
import BlogManagement from './BlogManagement';
import { BlogModerationPage } from './BlogModerationPage';

const TABS = [
  { key: 'management', label: 'Blog Management', icon: FileText },
  { key: 'moderation', label: 'Blog Moderation', icon: Shield },
];

export default function BlogDashboard() {
    const [stats, setStats] = useState({ total: 0, pending: 0, published: 0, subscribers: 0 });
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('management');

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [blogsRes, subsRes, pendingRes, publishedRes] = await Promise.allSettled([
                    adminApi.getAdminBlogs({ page: 0, size: 1 }),
                    adminApi.getSubscribers({ page: 0, size: 1 }),
                    adminApi.getAdminBlogs({ status: 'PENDING', page: 0, size: 1 }),
                    adminApi.getAdminBlogs({ status: 'PUBLISHED', page: 0, size: 1 }),
                ]);
                setStats({
                    total:       blogsRes.status     === 'fulfilled' ? (blogsRes.value.data?.totalElements     ?? 0) : 0,
                    subscribers: subsRes.status      === 'fulfilled' ? (subsRes.value.data?.totalElements      ?? 0) : 0,
                    pending:     pendingRes.status   === 'fulfilled' ? (pendingRes.value.data?.totalElements   ?? 0) : 0,
                    published:   publishedRes.status === 'fulfilled' ? (publishedRes.value.data?.totalElements ?? 0) : 0,
                });
            } catch (err) {
                console.error('Failed to load blog stats', err);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    const statCards = [
        { label: 'Total Blogs',    value: stats.total,       icon: FileText,    color: '#1e3a8a', bg: '#eff6ff' },
        { label: 'Pending Review', value: stats.pending,     icon: Clock,       color: '#f59e0b', bg: '#fff8e1' },
        { label: 'Published',      value: stats.published,   icon: CheckCircle, color: '#16a34a', bg: '#dcfce7' },
        { label: 'Subscribers',    value: stats.subscribers, icon: Users,       color: '#7c3aed', bg: '#f5f3ff' },
    ];

    return (
        <div className="w-full px-4 md:px-8 py-8 space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-1 text-blue-900">Blog Dashboard</h1>
                <p className="text-gray-500">Manage blog posts and newsletter subscribers</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {statCards.map(s => {
                    const Icon = s.icon;
                    return (
                        <div key={s.label} className="bg-white rounded-xl shadow-md p-5 border-l-4"
                            style={{ borderLeftColor: s.color, backgroundColor: s.bg }}>
                            <div className="flex items-center gap-3 mb-2">
                                <Icon className="w-5 h-5" style={{ color: s.color }} />
                                <p className="text-xs font-semibold text-gray-500">{s.label}</p>
                            </div>
                            {loading ? (
                                <div className="h-8 w-12 bg-gray-200 rounded animate-pulse" />
                            ) : (
                                <p className="text-3xl font-bold" style={{ color: s.color }}>{s.value}</p>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Tabs */}
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

