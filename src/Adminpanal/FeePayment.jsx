import React, { useState } from 'react';

const FeePayment = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Current Fee Structure - Courses with payment status
  const currentFees = [
    {
      id: 1,
      course: 'Mathematics - Calculus & Integration',
      amount: 15000,
      dueDate: 'Apr 5, 2026',
      status: 'PENDING',
      term: 'Term 2'
    },
    {
      id: 2,
      course: 'Physics - Mechanics & Electromagnetism',
      amount: 12000,
      dueDate: 'Apr 5, 2026',
      status: 'PENDING',
      term: 'Term 2'
    },
    {
      id: 3,
      course: 'Chemistry - Organic & Inorganic',
      amount: 10000,
      dueDate: 'Feb 15, 2026',
      paidDate: 'Feb 10, 2026',
      status: 'PAID',
      term: 'Term 1'
    },
    {
      id: 4,
      course: 'Mathematics - Algebra & Trigonometry',
      amount: 12000,
      dueDate: 'Feb 15, 2026',
      paidDate: 'Feb 12, 2026',
      status: 'PAID',
      term: 'Term 1'
    }
  ];

  // Payment History - Previously completed payments
  const paymentHistory = [
    {
      transactionId: 'NOVA-2026-001',
      course: 'Chemistry - Organic & Inorganic',
      amount: 10000,
      date: 'Feb 10, 2026',
      method: 'UPI'
    },
    {
      transactionId: 'NOVA-2026-002',
      course: 'Mathematics - Algebra & Trigonometry',
      amount: 12000,
      date: 'Feb 12, 2026',
      method: 'Credit Card'
    }
  ];

  // Calculate stats
  const pendingAmount = currentFees
    .filter(fee => fee.status === 'PENDING')
    .reduce((sum, fee) => sum + fee.amount, 0);

  const paidThisTerm = currentFees
    .filter(fee => fee.status === 'PAID')
    .reduce((sum, fee) => sum + fee.amount, 0);

  const totalCourses = currentFees.length;

  const handlePayNow = (course) => {
    setSelectedCourse(course);
    setShowPaymentModal(true);
  };

  const handleDownloadReceipt = (transactionId) => {
    alert(`Downloading receipt for ${transactionId}...`);
    // In production, implement actual PDF download
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Fee Payment</h1>
        <p className="text-gray-600">Manage your course fees and payment history</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pending Payment Card */}
        <div className="bg-white rounded-lg shadow-md border-l-4 border-[#E49829] p-4 hover:shadow-lg transition-shadow">
          <p className="text-gray-600 text-xs font-semibold mb-1">Pending Payment</p>
          <p className="text-2xl font-bold text-[#E49829]">₹{pendingAmount.toLocaleString()}</p>
        </div>

        {/* Paid This Term Card */}
        <div className="bg-white rounded-lg shadow-md border-l-4 border-green-500 p-4 hover:shadow-lg transition-shadow">
          <p className="text-gray-600 text-xs font-semibold mb-1">Paid This Term</p>
          <p className="text-2xl font-bold text-green-600">₹{paidThisTerm.toLocaleString()}</p>
        </div>

        {/* Total Courses Card */}
        <div className="bg-white rounded-lg shadow-md border-l-4 border-[#265C7D] p-4 hover:shadow-lg transition-shadow">
          <p className="text-gray-600 text-xs font-semibold mb-1">Total Courses</p>
          <p className="text-2xl font-bold text-[#265C7D]">{totalCourses}</p>
        </div>
      </div>

      {/* Current Fee Structure */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Current Fee Structure</h2>
        
        <div className="space-y-3">
          {currentFees.map((fee) => (
            <div
              key={fee.id}
              className={`bg-white rounded-lg shadow-md border-l-4 ${
                fee.status === 'PENDING' ? 'border-[#E49829]' : 'border-green-500'
              } p-4 hover:shadow-lg transition-shadow`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Course Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-gray-800">{fee.course}</h3>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        fee.status === 'PENDING'
                          ? 'bg-[#E49829]/10 text-[#E49829] border border-[#E49829]/20'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {fee.status}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#265C7D] text-white">
                      {fee.term}
                    </span>
                  </div>
                  
                  <p className="text-xl font-bold text-gray-900 mb-1">₹{fee.amount.toLocaleString()}</p>
                  
                  <div className="text-sm text-gray-600">
                    {fee.status === 'PENDING' ? (
                      <p>Due: <span className="font-semibold text-[#E49829]">{fee.dueDate}</span></p>
                    ) : (
                      <p>
                        Due: {fee.dueDate} <span className="mx-2">•</span> 
                        Paid on: <span className="font-semibold text-green-600">{fee.paidDate}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Pay Now Button (only for pending) */}
                {fee.status === 'PENDING' && (
                  <div className="lg:ml-4">
                    <button
                      onClick={() => handlePayNow(fee)}
                      className="w-full lg:w-auto px-4 py-2 bg-[#265C7D] hover:bg-[#1e4a5f] text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      Pay Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Payment History</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-3 font-bold text-gray-700 text-xs">Transaction ID</th>
                <th className="text-left py-3 px-3 font-bold text-gray-700 text-xs">Course</th>
                <th className="text-left py-3 px-3 font-bold text-gray-700 text-xs">Amount</th>
                <th className="text-left py-3 px-3 font-bold text-gray-700 text-xs">Date</th>
                <th className="text-left py-3 px-3 font-bold text-gray-700 text-xs">Method</th>
                <th className="text-left py-3 px-3 font-bold text-gray-700 text-xs">Action</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-12 text-gray-500">
                    No payment history available yet.
                  </td>
                </tr>
              ) : (
                paymentHistory.map((payment) => (
                  <tr key={payment.transactionId} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-3">
                      <span className="font-mono text-xs text-[#265C7D] font-bold">
                        {payment.transactionId}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-xs text-gray-700">
                      {payment.course}
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-bold text-green-600 text-xs">
                        ₹{payment.amount.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-xs text-gray-700">
                      {payment.date}
                    </td>
                    <td className="py-3 px-3 text-xs text-gray-700">
                      {payment.method}
                    </td>
                    <td className="py-3 px-3">
                      <button
                        onClick={() => handleDownloadReceipt(payment.transactionId)}
                        className="px-3 py-1.5 bg-[#E49829] hover:bg-[#d68522] text-white text-xs font-semibold rounded-lg transition-colors"
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedCourse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              onClick={() => {
                setShowPaymentModal(false);
                setSelectedCourse(null);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl font-bold leading-none"
            >
              ×
            </button>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Complete Payment</h3>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-xs text-gray-600 mb-1">Course</p>
              <p className="text-sm font-semibold text-gray-800 mb-3">{selectedCourse.course}</p>
              
              <p className="text-xs text-gray-600 mb-1">Payment Amount</p>
              <p className="text-2xl font-bold text-[#265C7D]">₹{selectedCourse.amount.toLocaleString()}</p>
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-xs font-semibold text-gray-700">Select Payment Method:</p>
              <div className="grid grid-cols-2 gap-2">
                <button className="p-3 border-2 border-gray-200 rounded-lg hover:border-[#265C7D] hover:bg-blue-50 transition-all">
                  <div className="text-2xl mb-1">💳</div>
                  <p className="text-xs font-semibold">Card</p>
                </button>
                <button className="p-3 border-2 border-gray-200 rounded-lg hover:border-[#265C7D] hover:bg-blue-50 transition-all">
                  <div className="text-2xl mb-1">📱</div>
                  <p className="text-xs font-semibold">UPI</p>
                </button>
                <button className="p-3 border-2 border-gray-200 rounded-lg hover:border-[#265C7D] hover:bg-blue-50 transition-all">
                  <div className="text-2xl mb-1">🏦</div>
                  <p className="text-xs font-semibold">Net Banking</p>
                </button>
                <button className="p-3 border-2 border-gray-200 rounded-lg hover:border-[#265C7D] hover:bg-blue-50 transition-all">
                  <div className="text-2xl mb-1">👛</div>
                  <p className="text-xs font-semibold">Wallet</p>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => {
                  alert('Payment processing... In production, this would integrate with payment gateway.');
                  setShowPaymentModal(false);
                  setSelectedCourse(null);
                }}
                className="w-full px-4 py-2.5 bg-[#265C7D] hover:bg-[#1e4a5f] text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Proceed to Payment
              </button>
              <button
                onClick={() => {
                  setShowPaymentModal(false);
                  setSelectedCourse(null);
                }}
                className="w-full px-4 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-semibold rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeePayment;
