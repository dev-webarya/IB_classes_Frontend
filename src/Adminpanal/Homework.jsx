import React, { useState } from 'react';

const Homework = () => {
  const [filter, setFilter] = useState('all'); // all, pending, completed
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [selectedHomework, setSelectedHomework] = useState(null);
  const [submissionFile, setSubmissionFile] = useState(null);
  const [submissionNotes, setSubmissionNotes] = useState('');
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const homeworkList = [
    {
      id: 1,
      subject: 'Mathematics HL',
      title: 'Calculus Problem Set 5',
      description: 'Complete exercises 5.1 to 5.15 from the textbook',
      dueDate: '2026-04-05',
      status: 'pending',
      priority: 'high',
      submittedDate: null
    },
    {
      id: 2,
      subject: 'Physics SL',
      title: 'Lab Report - Projectile Motion',
      description: 'Write a detailed lab report on the projectile motion experiment',
      dueDate: '2026-04-08',
      status: 'pending',
      priority: 'medium',
      submittedDate: null
    },
    {
      id: 3,
      subject: 'Chemistry HL',
      title: 'Organic Chemistry Worksheet',
      description: 'Complete the organic chemistry nomenclature worksheet',
      dueDate: '2026-03-28',
      status: 'completed',
      priority: 'low',
      submittedDate: '2026-03-27'
    },
    {
      id: 4,
      subject: 'English A',
      title: 'Literary Analysis Essay',
      description: 'Analyze the themes in "The Great Gatsby" (1500 words)',
      dueDate: '2026-04-10',
      status: 'pending',
      priority: 'high',
      submittedDate: null
    },
    {
      id: 5,
      subject: 'Economics SL',
      title: 'Market Structures Assignment',
      description: 'Compare and contrast different market structures with examples',
      dueDate: '2026-03-30',
      status: 'completed',
      priority: 'medium',
      submittedDate: '2026-03-29'
    }
  ];

  const filteredHomework = homeworkList.filter(hw => {
    if (filter === 'all') return true;
    return hw.status === filter;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-600 border-red-200';
      case 'medium': return 'bg-[#E49829]/10 text-[#E49829] border-[#E49829]/20';
      case 'low': return 'bg-[#265C7D]/10 text-[#265C7D] border-[#265C7D]/20';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getDaysUntilDue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-4 sm:space-y-5 md:space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">Homework</h1>
        <p className="text-sm sm:text-base text-gray-600">Manage and submit your homework assignments</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-semibold transition-colors ${
            filter === 'all'
              ? 'bg-[#265C7D] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All ({homeworkList.length})
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-semibold transition-colors ${
            filter === 'pending'
              ? 'bg-[#265C7D] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Pending ({homeworkList.filter(hw => hw.status === 'pending').length})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-semibold transition-colors ${
            filter === 'completed'
              ? 'bg-[#265C7D] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Completed ({homeworkList.filter(hw => hw.status === 'completed').length})
        </button>
      </div>

      {/* Homework List */}
      <div className="space-y-3 sm:space-y-4">
        {filteredHomework.map((homework) => {
          const daysUntilDue = getDaysUntilDue(homework.dueDate);
          const isOverdue = daysUntilDue < 0 && homework.status === 'pending';

          return (
            <div
              key={homework.id}
              className={`bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${
                homework.status === 'completed'
                  ? 'border-green-500'
                  : isOverdue
                  ? 'border-red-500'
                  : 'border-[#265C7D]'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
                {/* Left Section */}
                <div className="flex-1">
                  <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-2">
                    <span className="text-xl sm:text-2xl flex-shrink-0">
                      {homework.status === 'completed' ? '✅' : '📝'}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">{homework.subject}</p>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 break-words">{homework.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-600 ml-0 sm:ml-8 md:ml-11 mb-2 sm:mb-3 leading-relaxed">{homework.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 ml-0 sm:ml-8 md:ml-11">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(homework.priority)}`}>
                      {homework.priority.toUpperCase()} PRIORITY
                    </span>
                    
                    {homework.status === 'completed' ? (
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
                        Submitted on {new Date(homework.submittedDate).toLocaleDateString()}
                      </span>
                    ) : isOverdue ? (
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
                        OVERDUE by {Math.abs(daysUntilDue)} days
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                        Due in {daysUntilDue} days
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Section - Actions */}
                <div className="flex flex-row sm:flex-col gap-2 sm:min-w-[150px]">
                  <p className="text-xs sm:text-sm text-gray-500 flex-1 sm:flex-none">
                    Due: <span className="font-semibold text-gray-800 block sm:inline">
                      {new Date(homework.dueDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                  </p>
                  
                  <div className="flex flex-1 sm:flex-col gap-2">
                    {homework.status === 'pending' && (
                      <button 
                        onClick={() => {
                          setSelectedHomework(homework);
                          setShowSubmitModal(true);
                          setSubmissionFile(null);
                          setSubmissionNotes('');
                        }}
                        className="flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-[#265C7D] hover:bg-[#1e4a5f] text-white font-semibold rounded-lg transition-colors"
                      >
                        Submit
                      </button>
                    )}
                    
                    <button 
                      onClick={() => {
                        setSelectedHomework(homework);
                        setShowDetailsModal(true);
                      }}
                      className="flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-[#E49829] hover:bg-[#d68522] text-white font-semibold rounded-lg transition-colors"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Submit Homework Modal */}
      {showSubmitModal && selectedHomework && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full p-5 sm:p-6 md:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowSubmitModal(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 text-2xl sm:text-3xl"
            >
              ×
            </button>
            
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 pr-8">Submit Homework</h3>
            
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-gray-600">{selectedHomework.subject}</p>
              <p className="font-bold text-base sm:text-lg text-gray-800">{selectedHomework.title}</p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Homework submitted successfully!');
              setShowSubmitModal(false);
            }}>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                    Upload Your Work *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-[#265C7D] transition-colors">
                    <input
                      type="file"
                      onChange={(e) => setSubmissionFile(e.target.files[0])}
                      className="hidden"
                      id="homework-upload"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      required
                    />
                    <label htmlFor="homework-upload" className="cursor-pointer">
                      <div className="text-3xl sm:text-4xl mb-2">📎</div>
                      <p className="text-sm sm:text-base text-gray-600 mb-1">
                        {submissionFile ? submissionFile.name : 'Click to upload'}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        PDF, DOC, DOCX, JPG, PNG (max. 10MB)
                      </p>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                    Notes (Optional)
                  </label>
                  <textarea
                    value={submissionNotes}
                    onChange={(e) => setSubmissionNotes(e.target.value)}
                    rows="4"
                    placeholder="Add any comments..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#265C7D] resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-[#265C7D] hover:bg-[#1e4a5f] text-white font-bold rounded-lg transition-colors"
                  >
                    Submit Homework
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Details Modal */}
      {showDetailsModal && selectedHomework && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-[#265C7D] p-4 sm:p-6 text-white rounded-t-xl sm:rounded-t-2xl relative">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white text-2xl sm:text-3xl hover:opacity-80"
              >
                ×
              </button>
              <h3 className="text-lg sm:text-xl font-bold pr-8">Homework Details</h3>
            </div>
            
            <div className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Subject</p>
                  <p className="font-bold text-base sm:text-lg">{selectedHomework.subject}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Title</p>
                  <p className="font-bold text-base sm:text-lg break-words">{selectedHomework.title}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Description</p>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">{selectedHomework.description}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Due Date</p>
                  <p className="font-bold text-sm sm:text-base">{new Date(selectedHomework.dueDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Status</p>
                  <p className="font-bold text-sm sm:text-base capitalize">{selectedHomework.status}</p>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-[#265C7D] hover:bg-[#1e4a5f] text-white font-semibold rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homework;
