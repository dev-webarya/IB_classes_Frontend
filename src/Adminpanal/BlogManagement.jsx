import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { adminApi } from '../api/api/blogApi';
import {
  FileText, CheckCircle, Clock, XCircle, Trash2, Eye, Search,
  RefreshCw, ChevronLeft, ChevronRight, ExternalLink, Filter
} from 'lucide-react';
import { format } from 'date-fns';

const STATUS_TABS = [
  { key: '', label: 'All Posts', icon: FileText, color: 'text-gray-600' },
  { key: 'PENDING', label: 'Pending', icon: Clock, color: 'text-yellow-600' },
  { key: 'PUBLISHED', label: 'Published', icon: CheckCircle, color: 'text-green-600' },
  { key: 'REJECTED', label: 'Rejected', icon: XCircle, color: 'text-red-600' },
];

const STATUS_BADGE = {
  PUBLISHED: 'bg-green-100 text-green-700 border-green-200',
  PENDING: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  REJECTED: 'bg-red-100 text-red-700 border-red-200',
  DRAFT: 'bg-gray-100 text-gray-600 border-gray-200',
};

const PAGE_SIZE = 10;

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [actionLoading, setActionLoading] = useState(null); // blog id being acted on
  const [toast, setToast] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null); // blog id to delete

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const params = { page, size: PAGE_SIZE };
      if (activeTab) params.status = activeTab;
      if (search.trim()) params.search = search.trim();
      const res = await adminApi.getAdminBlogs(params);
      setBlogs(res.data.content || []);
      setTotalPages(res.data.totalPages || 1);
      setTotalElements(res.data.totalElements || 0);
    } catch {
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  }, [activeTab, page, search]);

  useEffect(() => { fetchBlogs(); }, [fetchBlogs]);

  // Reset page when tab or search changes
  useEffect(() => { setPage(0); }, [activeTab, search]);

  const handleApprove = async (id) => {
    setActionLoading(id + '_approve');
    try {
      await adminApi.approveBlog(id);
      showToast('Blog published successfully!');
      fetchBlogs();
    } catch {
      showToast('Failed to publish blog.', 'error');
    } finally {
      setActionLoading(null);
    }
  };

  const handleReject = async (id) => {
    setActionLoading(id + '_reject');
    try {
      await adminApi.rejectBlog(id);
      showToast('Blog rejected.');
      fetchBlogs();
    } catch {
      showToast('Failed to reject blog.', 'error');
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id) => {
    setConfirmDelete(null);
    setActionLoading(id + '_delete');
    try {
      await adminApi.deleteBlog(id);
      showToast('Blog deleted.');
      fetchBlogs();
    } catch {
      showToast('Failed to delete blog.', 'error');
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Blog Management</h1>
          <p className="mt-0.5 text-sm text-gray-500">{totalElements} total posts</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/blog/submit">
            <button className="flex items-center gap-2 rounded-lg bg-[#265C7D] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1e4a5f]">
              + New Post
            </button>
          </Link>
          <button onClick={fetchBlogs} className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:bg-gray-50 transition">
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Status Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-1">
        {STATUS_TABS.map(({ key, label, icon: Icon, color }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex items-center gap-1.5 rounded-t-lg px-4 py-2 text-sm font-semibold transition-all ${
              activeTab === key
                ? 'border-b-2 border-[#265C7D] text-[#265C7D] bg-blue-50'
                : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            <Icon className={`h-4 w-4 ${activeTab === key ? 'text-[#265C7D]' : color}`} />
            {label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#265C7D] focus:ring-2 focus:ring-[#265C7D]/10 transition"
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <RefreshCw className="h-6 w-6 animate-spin text-[#265C7D]" />
          </div>
        ) : blogs.length === 0 ? (
          <div className="py-20 text-center">
            <FileText className="mx-auto mb-3 h-12 w-12 text-gray-200" />
            <p className="font-semibold text-gray-500">No blog posts found</p>
            <p className="mt-1 text-sm text-gray-400">Try changing the filter or search query.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-gray-100 bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                <tr>
                  <th className="px-5 py-3.5 text-left font-semibold">Post</th>
                  <th className="px-4 py-3.5 text-left font-semibold">Author</th>
                  <th className="px-4 py-3.5 text-left font-semibold">Status</th>
                  <th className="px-4 py-3.5 text-left font-semibold">Date</th>
                  <th className="px-4 py-3.5 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {blogs.map((blog) => (
                  <tr key={blog.id} className="transition hover:bg-gray-50/60">
                    <td className="px-5 py-4 max-w-xs">
                      <p className="line-clamp-1 font-semibold text-gray-900">{blog.title}</p>
                      <p className="mt-0.5 line-clamp-1 text-xs text-gray-400">{blog.excerpt}</p>
                      {blog.tags?.length > 0 && (
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          {blog.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-medium text-gray-700">{blog.authorName}</p>
                      <p className="text-xs text-gray-400">{blog.authorEmail}</p>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-bold ${STATUS_BADGE[blog.status] || STATUS_BADGE.DRAFT}`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-xs text-gray-500 whitespace-nowrap">
                      {blog.createdAt ? format(new Date(blog.createdAt), 'MMM dd, yyyy') : '—'}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {/* View if published */}
                        {blog.status === 'PUBLISHED' && blog.slug && (
                          <Link to={`/blog/${blog.slug}`} target="_blank">
                            <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition">
                              <Eye className="h-3.5 w-3.5" /> View
                            </button>
                          </Link>
                        )}
                        {/* Approve if pending/rejected */}
                        {(blog.status === 'PENDING' || blog.status === 'REJECTED' || blog.status === 'DRAFT') && (
                          <button
                            onClick={() => handleApprove(blog.id)}
                            disabled={actionLoading === blog.id + '_approve'}
                            className="flex items-center gap-1 rounded-lg bg-green-50 border border-green-200 px-2.5 py-1.5 text-xs font-semibold text-green-700 hover:bg-green-100 transition disabled:opacity-50"
                          >
                            <CheckCircle className="h-3.5 w-3.5" />
                            {actionLoading === blog.id + '_approve' ? '...' : 'Publish'}
                          </button>
                        )}
                        {/* Reject if pending/published */}
                        {(blog.status === 'PENDING' || blog.status === 'PUBLISHED') && (
                          <button
                            onClick={() => handleReject(blog.id)}
                            disabled={actionLoading === blog.id + '_reject'}
                            className="flex items-center gap-1 rounded-lg bg-yellow-50 border border-yellow-200 px-2.5 py-1.5 text-xs font-semibold text-yellow-700 hover:bg-yellow-100 transition disabled:opacity-50"
                          >
                            <XCircle className="h-3.5 w-3.5" />
                            {actionLoading === blog.id + '_reject' ? '...' : 'Reject'}
                          </button>
                        )}
                        {/* Delete */}
                        <button
                          onClick={() => setConfirmDelete(blog.id)}
                          disabled={actionLoading === blog.id + '_delete'}
                          className="flex items-center gap-1 rounded-lg bg-red-50 border border-red-200 px-2.5 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-100 transition disabled:opacity-50"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          {actionLoading === blog.id + '_delete' ? '...' : 'Delete'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between text-sm">
          <p className="text-gray-500">
            Page {page + 1} of {totalPages}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-40 transition"
            >
              <ChevronLeft className="h-4 w-4" /> Prev
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-40 transition"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <Trash2 className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Delete Blog Post?</h3>
            <p className="mt-1 text-sm text-gray-500">This action cannot be undone. The post will be permanently removed.</p>
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="flex-1 rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(confirmDelete)}
                className="flex-1 rounded-xl bg-red-600 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 rounded-xl px-5 py-3 text-sm font-semibold shadow-xl ${
          toast.type === 'error' ? 'bg-red-600 text-white' : 'bg-gray-900 text-white'
        }`}>
          {toast.msg}
        </div>
      )}
    </div>
  );
};

export default BlogManagement;
