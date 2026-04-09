import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const BookDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: ''
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Demo class scheduled:', formData);
    // Add your form submission logic here
    alert('Demo class scheduled successfully!');
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6" style={{ zIndex: 999999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflowY: 'auto' }}>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80"
        onClick={onClose}
        style={{ zIndex: 999998, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-[600px] my-auto border-8 border-[#FF6B35]" style={{ zIndex: 999999, position: 'relative', animation: 'fadeIn 0.3s ease-in-out' }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors text-2xl font-light w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full"
          aria-label="Close modal"
          style={{ zIndex: 1000000 }}
        >
          ✕
        </button>

        {/* Modal Content */}
        <div className="p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Schedule a free demo class
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-8">
            Schedule a free demo class at your time.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-gray-700 placeholder-gray-400 text-base"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-gray-700 placeholder-gray-400 text-base"
              />
            </div>

            {/* Phone Input */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-gray-700 placeholder-gray-400 text-base"
              />
            </div>

            {/* Date Input */}
            <div>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Select your date"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-gray-700 placeholder-gray-400 text-base"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="px-8 py-3 bg-[#FF6B35] text-white rounded font-semibold text-base hover:bg-[#E85A24] transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Schedule
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BookDemoModal;
