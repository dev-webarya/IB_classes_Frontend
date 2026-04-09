import React from 'react';

// Card
export const Card = ({ className = '', children, ...props }) => (
  <div className={`bg-white rounded-xl shadow border border-gray-200 ${className}`} {...props}>
    {children}
  </div>
);

// Button
export const Button = ({ className = '', variant = 'primary', size = 'md', disabled = false, children, ...props }) => {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none';
  const variants = {
    primary: 'bg-[#0071BD] text-white hover:bg-[#005a9e] disabled:opacity-60',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-60',
    danger: 'bg-red-500 text-white hover:bg-red-600 disabled:opacity-60',
    ghost: 'bg-transparent text-[#0071BD] hover:bg-blue-50 disabled:opacity-60',
    outline: 'border border-[#0071BD] text-[#0071BD] hover:bg-blue-50 disabled:opacity-60',
  };
  const sizes = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2 text-sm', lg: 'px-6 py-3 text-base' };
  return (
    <button
      className={`${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Input
export const Input = ({ className = '', label = '', error = '', ...props }) => (
  <div className="w-full">
    {label && <label className="block text-sm font-semibold text-[#0071BD] mb-1">{label}</label>}
    <input
      className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0071BD] focus:border-transparent transition-all ${error ? 'border-red-400' : ''} ${className}`}
      {...props}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

// TextArea
export const TextArea = ({ className = '', label = '', error = '', rows = 4, ...props }) => (
  <div className="w-full">
    {label && <label className="block text-sm font-semibold text-[#0071BD] mb-1">{label}</label>}
    <textarea
      rows={rows}
      className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0071BD] focus:border-transparent transition-all resize-vertical ${error ? 'border-red-400' : ''} ${className}`}
      {...props}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

// Spinner
export const Spinner = ({ size = 'md', className = '' }) => {
  const sizes = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-10 h-10' };
  return (
    <svg
      className={`animate-spin text-[#0071BD] ${sizes[size] || sizes.md} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
    </svg>
  );
};

// Pagination
export const Pagination = ({ page, totalPages, onPageChange, className = '' }) => {
  if (totalPages <= 1) return null;
  return (
    <div className={`flex items-center gap-2 justify-center ${className}`}>
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
      >
        ← Prev
      </button>
      <span className="text-sm text-gray-600">
        Page <strong>{page}</strong> of <strong>{totalPages}</strong>
      </span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
      >
        Next →
      </button>
    </div>
  );
};

// TagBadge
export const TagBadge = ({ tag, className = '', onClick = undefined }) => (
  <span
    onClick={onClick}
    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700 ${onClick ? 'cursor-pointer hover:bg-blue-200' : ''} ${className}`}
  >
    #{tag}
  </span>
);
