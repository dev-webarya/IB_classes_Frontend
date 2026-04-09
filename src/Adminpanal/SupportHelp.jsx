import React, { useState } from 'react';

const SupportHelp = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const supportTickets = [
    {
      id: 1,
      ticketId: 'TK-2026-001',
      title: 'Cannot access Chemistry HL course materials',
      status: 'OPEN',
      date: 'Apr 02, 2026',
      updated: '2 hours ago',
      priority: 'high',
      statusColor: 'bg-red-500',
      borderColor: 'border-red-500'
    },
    {
      id: 2,
      ticketId: 'TK-2026-002',
      title: 'Need help with Extended Essay submission',
      status: 'IN-PROGRESS',
      date: 'Apr 01, 2026',
      updated: '5 hours ago',
      priority: 'medium',
      statusColor: 'bg-[#E49829]',
      borderColor: 'border-[#E49829]'
    },
    {
      id: 3,
      ticketId: 'TK-2026-003',
      title: 'IB Mathematics HL practice test not loading',
      status: 'RESOLVED',
      date: 'Mar 30, 2026',
      updated: '2 days ago',
      priority: 'low',
      statusColor: 'bg-green-500',
      borderColor: 'border-green-500'
    }
  ];

  const categories = ['All', 'Account', 'Courses', 'Assignments', 'Technical'];

  const faqs = [
    {
      id: 1,
      category: 'Account',
      question: 'How do I reset my password?',
      answer: 'To reset your password, click on "Forgot Password" on the login page. Enter your registered email address, and you will receive a password reset link within 5 minutes. Follow the link to create a new password. For security, make sure to use a strong password with at least 8 characters.'
    },
    {
      id: 2,
      category: 'Courses',
      question: 'How do I enroll in a new IB course?',
      answer: 'Go to "My Courses" section and click on "Browse Courses". Select the IB subject you want to enroll in (HL or SL), review the course details, syllabus, and teacher information. Click "Enroll Now" and complete the payment process to get instant access to all course materials, live classes, and practice resources.'
    },
    {
      id: 3,
      category: 'Assignments',
      question: 'How do I submit my IB Internal Assessment (IA)?',
      answer: 'Navigate to the "Assignments" section, select your IA assignment, upload your files in PDF or DOCX format (max 50MB). Add any comments or notes for your teacher. Click "Submit Assignment" and you will receive a confirmation email. Your teacher will review and provide feedback within 3-5 business days.'
    },
    {
      id: 4,
      category: 'Technical',
      question: 'What should I do if I can\'t join a live IB class?',
      answer: 'First, check your internet connection and ensure you have a stable connection. Try refreshing the page or using a different browser (Chrome or Firefox recommended). Clear your browser cache if needed. If you still cannot join, contact our support team immediately via WhatsApp (+91 831 740 7250) and we will provide you with the class recording and study notes.'
    },
    {
      id: 5,
      category: 'Account',
      question: 'How can I view my IB course payment history?',
      answer: 'Go to "Fee Payment" section in your student dashboard. Scroll down to the "Payment History" table where you can view all your past transactions, download fee receipts, and check payment status for each IB course. You can also export your payment records as PDF for your records.'
    },
    {
      id: 6,
      category: 'Courses',
      question: 'Can I access IB course materials after course completion?',
      answer: 'Yes! Once you complete your IB course, you will have lifetime access to all course materials, including recorded lectures, study notes, practice tests, past IB papers, and assignments. You can revisit the content anytime from your "My Courses" dashboard even after your IB exams.'
    },
    {
      id: 7,
      category: 'Technical',
      question: 'Which browsers and devices are supported for online IB classes?',
      answer: 'We recommend using the latest versions of Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge for the best experience. Our platform works on Windows, Mac, iOS, and Android devices. Make sure to enable JavaScript and cookies in your browser settings. Use a headset with microphone for better audio quality in live classes.'
    },
    {
      id: 8,
      category: 'Assignments',
      question: 'What is the deadline policy for IB assignments and IAs?',
      answer: 'All IB assignments and Internal Assessments have specific deadlines mentioned in the assignment details. We recommend submitting at least 2-3 days before the deadline. Late submissions may receive reduced feedback or marks. For Extended Essays and TOK essays, multiple draft submissions are allowed before the final deadline.'
    },
    {
      id: 9,
      category: 'Courses',
      question: 'Do you provide IB past papers and mark schemes?',
      answer: 'Yes! All enrolled students get access to our extensive library of IB past papers (last 10 years) with detailed mark schemes and examiner reports. These are available in the "Practice Tests" section. We also conduct regular mock exams following IB assessment patterns.'
    },
    {
      id: 10,
      category: 'Account',
      question: 'How do I get help with my Extended Essay or TOK essay?',
      answer: 'Click on "Ask a Question" in your dashboard to schedule one-on-one mentoring sessions with our IB experts. You can also submit your essay drafts for feedback. Our teachers provide detailed comments on structure, argumentation, citations, and IB assessment criteria alignment.'
    }
  ];

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#265C7D]">Support & Help</h1>
        <p className="text-sm text-gray-600 mt-1">Get help and support for your IB learning journey</p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Call Us */}
        <div className="group relative bg-white rounded-lg p-6 shadow-md border-t-4 border-[#265C7D] hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#265C7D] to-[#1e4a5f] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></div>
          <div className="relative z-10">
            <div className="text-4xl mb-3 text-center">📞</div>
            <h2 className="text-xl font-bold text-[#265C7D] group-hover:text-white mb-3 text-center transition-colors">Call Us</h2>
            <a href="tel:+918317407250" className="block text-lg font-semibold text-gray-800 group-hover:text-white mb-2 text-center hover:underline transition-colors">
              +91 831 740 7250
            </a>
            <p className="text-sm text-gray-600 group-hover:text-white/90 text-center transition-colors">Mon - Sat, 9 AM - 8 PM IST</p>
          </div>
        </div>

        {/* Email Us */}
        <div className="group relative bg-white rounded-lg p-6 shadow-md border-t-4 border-[#E49829] hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E49829] to-[#d68522] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></div>
          <div className="relative z-10">
            <div className="text-4xl mb-3 text-center">📧</div>
            <h2 className="text-xl font-bold text-[#E49829] group-hover:text-white mb-3 text-center transition-colors">Email Us</h2>
            <a href="mailto:ibclassesonline@ixpoe.com" className="block text-lg font-semibold text-gray-800 group-hover:text-white mb-2 text-center hover:underline break-all transition-colors">
              ibclassesonline@ixpoe.com
            </a>
            <p className="text-sm text-gray-600 group-hover:text-white/90 text-center transition-colors">We'll respond within 24 hours</p>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="group relative bg-white rounded-lg p-6 shadow-md border-t-4 border-green-500 hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></div>
          <div className="relative z-10">
            <div className="text-4xl mb-3 text-center">💬</div>
            <h2 className="text-xl font-bold text-green-600 group-hover:text-white mb-3 text-center transition-colors">WhatsApp</h2>
            <a 
              href="https://wa.me/918317407250?text=Hello,%20I%20need%20help%20with%20my%20IB%20courses"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg font-semibold text-gray-800 group-hover:text-white mb-2 text-center hover:underline transition-colors"
            >
              Chat with us
            </a>
            <p className="text-sm text-gray-600 group-hover:text-white/90 text-center transition-colors">Instant response available</p>
          </div>
        </div>
      </div>

      {/* My Support Tickets */}
      <div className="bg-white rounded-lg p-4 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#265C7D]">My Support Tickets</h2>
          <button className="px-4 py-2 bg-[#265C7D] hover:bg-[#1e4a5f] text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm">
            + New Ticket
          </button>
        </div>
        
        <div className="space-y-4">
          {supportTickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`border-l-4 ${ticket.borderColor} bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-bold text-gray-800 text-base">{ticket.title}</h3>
                    <span className={`${ticket.statusColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {ticket.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Ticket ID:</span> {ticket.ticketId}
                  </p>
                  <p className="text-xs text-gray-500">
                    Created: {ticket.date} • Updated: {ticket.updated} • Priority: <span className="font-semibold capitalize">{ticket.priority}</span>
                  </p>
                </div>
                <button className="px-5 py-2 bg-white border-2 border-[#265C7D] text-[#265C7D] hover:bg-[#265C7D] hover:text-white font-semibold rounded-lg transition-all duration-200 text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {supportTickets.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p className="text-4xl mb-3">📋</p>
            <p className="text-lg">No support tickets yet</p>
            <p className="text-sm mt-2">Create a ticket to get help from our support team</p>
          </div>
        )}
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-lg p-4 shadow-md">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#265C7D] mb-2">Frequently Asked Questions</h2>
          <p className="text-sm text-gray-600">Find quick answers to common questions about IB courses and platform usage</p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                selectedCategory === category
                  ? category === 'All'
                    ? 'bg-[#265C7D] text-white'
                    : category === 'Account'
                    ? 'bg-[#E49829] text-white border-2 border-[#E49829]'
                    : category === 'Courses'
                    ? 'bg-white text-[#265C7D] border-2 border-[#265C7D]'
                    : category === 'Assignments'
                    ? 'bg-white text-[#E49829] border-2 border-[#E49829]'
                    : 'bg-white text-red-600 border-2 border-red-600'
                  : 'bg-gray-100 text-gray-700 border-2 border-gray-100 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg font-bold text-[#265C7D] transform transition-transform duration-200 ${expandedFAQ === faq.id ? 'rotate-90' : ''}`}>
                    ▶
                  </span>
                  <span className="font-semibold text-gray-800 text-left">{faq.question}</span>
                </div>
              </button>
              {expandedFAQ === faq.id && (
                <div className="px-4 pb-4 bg-gray-50 animate-fadeIn">
                  <p className="text-gray-700 leading-relaxed pl-8">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-lg">No FAQs found in this category</p>
            <p className="text-sm mt-2">Try selecting a different category</p>
          </div>
        )}

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg font-semibold text-sm cursor-not-allowed">
            Previous
          </button>
          <button className="px-4 py-2 bg-[#265C7D] text-white rounded-lg font-semibold text-sm">
            1
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold text-sm">
            2
          </button>
          <button className="px-4 py-2 bg-[#265C7D] hover:bg-[#1e4a5f] text-white rounded-lg font-semibold text-sm">
            Next
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gradient-to-r from-[#265C7D] to-[#1e4a5f] rounded-lg p-8 text-white shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Still need help?</h2>
            <p className="text-white/90 text-lg">Can't find the answer you're looking for? Our IB support team is here to help you succeed!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/918317407250?text=Hello,%20I%20need%20help%20with%20my%20IB%20courses"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-center"
            >
              💬 WhatsApp Support
            </a>
            <a
              href="mailto:ibclassesonline@ixpoe.com"
              className="px-6 py-3 bg-[#E49829] hover:bg-[#d68522] text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-center"
            >
              📧 Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportHelp;
