import React, { useState } from 'react';

const Assignments = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showViewSubmissionModal, setShowViewSubmissionModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [submissionFile, setSubmissionFile] = useState(null);
  const [submissionNotes, setSubmissionNotes] = useState('');

  const assignments = [
    {
      id: 1,
      subject: 'Mathematics HL',
      title: 'Internal Assessment - Mathematical Exploration',
      description: 'Complete a mathematical exploration on a topic of your choice (12-20 pages)',
      type: 'IA',
      dueDate: '2026-05-15',
      maxMarks: 20,
      status: 'in-progress',
      submitted: false
    },
    {
      id: 2,
      subject: 'Physics SL',
      title: 'IA - Physics Investigation',
      description: 'Individual investigation on a physics phenomenon with data collection and analysis',
      type: 'IA',
      dueDate: '2026-05-20',
      maxMarks: 24,
      status: 'not-started',
      submitted: false
    },
    {
      id: 3,
      subject: 'Chemistry HL',
      title: 'Extended Essay - Chemistry Research',
      description: '4000-word research essay on a chemistry topic',
      type: 'EE',
      dueDate: '2026-06-30',
      maxMarks: 34,
      status: 'in-progress',
      submitted: false
    },
    {
      id: 4,
      subject: 'English A',
      title: 'Written Assignment - Reflective Statement',
      description: 'Reflective statement and essay on works in translation',
      type: 'Written Task',
      dueDate: '2026-04-25',
      maxMarks: 25,
      status: 'pending-review',
      submitted: true,
      submittedDate: '2026-04-01',
      score: null
    },
    {
      id: 5,
      subject: 'Economics SL',
      title: 'Internal Assessment - Commentary',
      description: 'Economic commentary on a current news article (750 words)',
      type: 'IA',
      dueDate: '2026-03-25',
      maxMarks: 14,
      status: 'graded',
      submitted: true,
      submittedDate: '2026-03-20',
      score: 12
    }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      'not-started': { bg: 'bg-gray-100', text: 'text-gray-600', label: 'Not Started' },
      'in-progress': { bg: 'bg-[#265C7D]/10', text: 'text-[#265C7D]', label: 'In Progress' },
      'pending-review': { bg: 'bg-[#E49829]/10', text: 'text-[#E49829]', label: 'Pending Review' },
      'graded': { bg: 'bg-[#265C7D]/10', text: 'text-[#265C7D]', label: 'Graded' }
    };
    const badge = badges[status] || badges['not-started'];
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.bg} ${badge.text}`}>
        {badge.label}
      </span>
    );
  };

  const filteredAssignments = selectedFilter === 'all' 
    ? assignments 
    : assignments.filter(a => a.status === selectedFilter);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Assignments</h1>
        <p className="text-gray-600">Manage your IB Internal Assessments and projects</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-[#265C7D]">
          <p className="text-gray-500 text-sm mb-1">Total</p>
          <p className="text-3xl font-bold text-gray-800">{assignments.length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-yellow-500">
          <p className="text-gray-500 text-sm mb-1">In Progress</p>
          <p className="text-3xl font-bold text-gray-800">
            {assignments.filter(a => a.status === 'in-progress').length}
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-orange-500">
          <p className="text-gray-500 text-sm mb-1">Pending Review</p>
          <p className="text-3xl font-bold text-gray-800">
            {assignments.filter(a => a.status === 'pending-review').length}
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-green-500">
          <p className="text-gray-500 text-sm mb-1">Completed</p>
          <p className="text-3xl font-bold text-gray-800">
            {assignments.filter(a => a.status === 'graded').length}
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3">
        {[
          { value: 'all', label: 'All Assignments' },
          { value: 'in-progress', label: 'In Progress' },
          { value: 'pending-review', label: 'Pending Review' },
          { value: 'graded', label: 'Graded' }
        ].map((filter) => (
          <button
            key={filter.value}
            onClick={() => setSelectedFilter(filter.value)}
            className={`px-5 py-2 rounded-lg font-semibold transition-colors ${
              selectedFilter === filter.value
                ? 'bg-[#265C7D] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {filteredAssignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              {/* Main Content */}
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#265C7D] to-[#1e4a5f] rounded-lg flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {assignment.type === 'IA' ? '📊' : assignment.type === 'EE' ? '📝' : '✍️'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-[#265C7D]">{assignment.subject}</span>
                      <span className="px-2 py-0.5 bg-[#E49829] text-white rounded text-xs font-semibold">
                        {assignment.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{assignment.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{assignment.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-3">
                      {getStatusBadge(assignment.status)}
                      
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500">Due:</span>
                        <span className="font-semibold text-gray-800">
                          {new Date(assignment.dueDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500">Max Marks:</span>
                        <span className="font-semibold text-gray-800">{assignment.maxMarks}</span>
                      </div>

                      {assignment.status === 'graded' && (
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-gray-500">Score:</span>
                          <span className="font-bold text-green-600">
                            {assignment.score}/{assignment.maxMarks}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 lg:min-w-[180px]">
                {!assignment.submitted && (
                  <button 
                    onClick={() => {
                      setSelectedAssignment(assignment);
                      setShowSubmitModal(true);
                      setSubmissionFile(null);
                      setSubmissionNotes('');
                    }}
                    className="px-4 py-2 bg-[#E49829] hover:bg-[#d68522] text-white font-semibold rounded-lg transition-colors"
                  >
                    {assignment.status === 'in-progress' ? 'Continue Working' : 'Start Assignment'}
                  </button>
                )}
                
                <button 
                  onClick={() => {
                    setSelectedAssignment(assignment);
                    setShowDetailsModal(true);
                  }}
                  className="px-4 py-2 bg-[#265C7D] hover:bg-[#1e4a5f] text-white font-semibold rounded-lg transition-colors"
                >
                  View Details
                </button>

                {assignment.submitted && (
                  <button 
                    onClick={() => {
                      setSelectedAssignment(assignment);
                      setShowViewSubmissionModal(true);
                    }}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors"
                  >
                    View Submission
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAssignments.length === 0 && (
        <div className="bg-white rounded-xl p-12 text-center shadow-md">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No assignments found</h3>
          <p className="text-gray-600">No assignments match the selected filter.</p>
        </div>
      )}

      {/* Submit Assignment Modal */}
      {showSubmitModal && selectedAssignment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowSubmitModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Submit Assignment</h3>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <span className="px-3 py-1 bg-[#E49829] text-white rounded-full text-xs font-semibold">
                {selectedAssignment.type}
              </span>
              <p className="text-sm text-gray-600 mt-2">{selectedAssignment.subject}</p>
              <p className="font-bold text-lg text-gray-800">{selectedAssignment.title}</p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              if (!submissionFile) {
                alert('Please upload your assignment file');
                return;
              }
              alert('Assignment submitted successfully! Your teacher will review it soon.');
              setShowSubmitModal(false);
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Assignment File *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#265C7D] transition-colors">
                    <input
                      type="file"
                      onChange={(e) => setSubmissionFile(e.target.files[0])}
                      className="hidden"
                      id="assignment-upload"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                    <label htmlFor="assignment-upload" className="cursor-pointer">
                      <div className="text-4xl mb-2">📎</div>
                      <p className="text-gray-600 mb-1">
                        {submissionFile ? submissionFile.name : 'Click to upload your assignment'}
                      </p>
                      <p className="text-sm text-gray-500">
                        PDF, DOC, DOCX (max. 20MB)
                      </p>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Submission Notes (Optional)
                  </label>
                  <textarea
                    value={submissionNotes}
                    onChange={(e) => setSubmissionNotes(e.target.value)}
                    rows="4"
                    placeholder="Add any additional comments or notes about your submission..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#265C7D] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Reminder:</strong> Make sure your assignment follows the IB guidelines and criteria. Check the rubric before submitting.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-[#E49829] hover:bg-[#d68522] text-white font-bold rounded-lg transition-colors"
                  >
                    Submit Assignment
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {showDetailsModal && selectedAssignment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowDetailsModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Assignment Details</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#E49829] text-white rounded-full text-xs font-semibold">
                    {selectedAssignment.type}
                  </span>
                  {getStatusBadge(selectedAssignment.status)}
                </div>
                <p className="text-sm text-gray-600 mb-1">Subject</p>
                <p className="font-bold text-lg text-gray-800">{selectedAssignment.subject}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Title</p>
                <p className="font-bold text-lg text-gray-800">{selectedAssignment.title}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Description</p>
                <p className="text-gray-800">{selectedAssignment.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Due Date</p>
                  <p className="font-bold text-gray-800">
                    {new Date(selectedAssignment.dueDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Maximum Marks</p>
                  <p className="font-bold text-gray-800">{selectedAssignment.maxMarks}</p>
                </div>
              </div>

              {selectedAssignment.status === 'graded' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-600 mb-1">Your Score</p>
                  <p className="font-bold text-2xl text-green-800">
                    {selectedAssignment.score}/{selectedAssignment.maxMarks}
                  </p>
                </div>
              )}

              <button
                onClick={() => setShowDetailsModal(false)}
                className="w-full px-6 py-3 bg-[#265C7D] hover:bg-[#1e4a5f] text-white font-semibold rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Submission Modal */}
      {showViewSubmissionModal && selectedAssignment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative">
            <button
              onClick={() => setShowViewSubmissionModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Submission</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Assignment</p>
                <p className="font-bold text-lg text-gray-800">{selectedAssignment.title}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Submitted On</p>
                <p className="font-bold text-gray-800">
                  {selectedAssignment.submittedDate && new Date(selectedAssignment.submittedDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>

              {selectedAssignment.status === 'graded' && (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
                  <p className="text-sm text-green-600 mb-2">Your Score</p>
                  <p className="font-bold text-4xl text-green-800 mb-2">
                    {selectedAssignment.score}/{selectedAssignment.maxMarks}
                  </p>
                  <p className="text-green-600">Grade: {Math.round((selectedAssignment.score / selectedAssignment.maxMarks) * 100)}%</p>
                </div>
              )}

              {selectedAssignment.status === 'pending-review' && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800">
                    ⏳ Your submission is being reviewed by your teacher. You'll be notified once it's graded.
                  </p>
                </div>
              )}

              <button
                onClick={() => setShowViewSubmissionModal(false)}
                className="w-full px-6 py-3 bg-[#265C7D] hover:bg-[#1e4a5f] text-white font-semibold rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
