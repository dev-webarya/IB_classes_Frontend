import React, { useState } from 'react';

const PracticeTests = () => {
  const [showTestModal, setShowTestModal] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);
  const [testStarted, setTestStarted] = useState(false);
  const tests = [
    {
      id: 1,
      subject: 'Mathematics HL',
      title: 'Calculus & Functions - Unit Test',
      questions: 25,
      duration: '90 minutes',
      difficulty: 'Hard',
      status: 'available',
      attempts: 0,
      bestScore: null
    },
    {
      id: 2,
      subject: 'Physics SL',
      title: 'Mechanics - Chapter Quiz',
      questions: 15,
      duration: '45 minutes',
      difficulty: 'Medium',
      status: 'completed',
      attempts: 2,
      bestScore: 85
    },
    {
      id: 3,
      subject: 'Chemistry HL',
      title: 'Organic Chemistry - Practice Test',
      questions: 30,
      duration: '60 minutes',
      difficulty: 'Hard',
      status: 'available',
      attempts: 1,
      bestScore: 78
    },
    {
      id: 4,
      subject: 'English A',
      title: 'Literary Analysis - Mock Exam',
      questions: 20,
      duration: '120 minutes',
      difficulty: 'Medium',
      status: 'available',
      attempts: 0,
      bestScore: null
    },
    {
      id: 5,
      subject: 'Economics SL',
      title: 'Microeconomics - Progress Test',
      questions: 18,
      duration: '50 minutes',
      difficulty: 'Easy',
      status: 'completed',
      attempts: 1,
      bestScore: 92
    }
  ];

  const getDifficultyBadge = (difficulty) => {
    const badges = {
      'Easy': 'bg-[#265C7D]/10 text-[#265C7D] border-[#265C7D]/20',
      'Medium': 'bg-[#E49829]/10 text-[#E49829] border-[#E49829]/20',
      'Hard': 'bg-red-100 text-red-600 border-red-200'
    };
    return badges[difficulty] || badges['Medium'];
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Practice Tests</h1>
        <p className="text-gray-600">Test your knowledge with practice quizzes and mock exams</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-[#265C7D] to-[#1e4a5f] rounded-xl p-6 text-white shadow-lg">
          <div className="text-4xl mb-2">📝</div>
          <p className="text-white/80 text-sm mb-1">Total Tests</p>
          <p className="text-3xl font-bold">{tests.length}</p>
        </div>
        <div className="bg-gradient-to-br from-[#E49829] to-[#d68522] rounded-xl p-6 text-white shadow-lg">
          <div className="text-4xl mb-2">✅</div>
          <p className="text-white/80 text-sm mb-1">Completed</p>
          <p className="text-3xl font-bold">{tests.filter(t => t.status === 'completed').length}</p>
        </div>
        <div className="bg-gradient-to-br from-[#265C7D] to-[#1e4a5f] rounded-xl p-6 text-white shadow-lg">
          <div className="text-4xl mb-2">⭐</div>
          <p className="text-white/80 text-sm mb-1">Average Score</p>
          <p className="text-3xl font-bold">
            {Math.round(tests.filter(t => t.bestScore).reduce((acc, t) => acc + t.bestScore, 0) / 
             tests.filter(t => t.bestScore).length) || 0}%
          </p>
        </div>
      </div>

      {/* Practice Tests List */}
      <div className="space-y-4">
        {tests.map((test) => (
          <div
            key={test.id}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Test Info */}
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#265C7D] to-[#1e4a5f] rounded-xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    {test.status === 'completed' ? '✅' : '📝'}
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#265C7D] mb-1">{test.subject}</p>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">{test.title}</h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">📊</span>
                        <span className="text-gray-600">{test.questions} Questions</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">⏱️</span>
                        <span className="text-gray-600">{test.duration}</span>
                      </div>
                      
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyBadge(test.difficulty)}`}>
                        {test.difficulty}
                      </span>
                    </div>

                    {test.bestScore !== null && (
                      <div className="mt-3 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">Best Score:</span>
                          <span className="text-lg font-bold text-green-600">{test.bestScore}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">Attempts:</span>
                          <span className="text-sm font-semibold text-gray-800">{test.attempts}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 lg:min-w-[180px]">
                {test.status === 'completed' ? (
                  <>
                    <button
                      onClick={() => {
                        setSelectedTest(test);
                        setTestStarted(false);
                        setShowTestModal(true);
                      }}
                      className="px-6 py-3 bg-[#E49829] hover:bg-[#d68522] text-white font-semibold rounded-lg transition-colors"
                    >
                      Retake Test
                    </button>
                    <button
                      onClick={() => {
                        setSelectedTest(test);
                        setShowResultsModal(true);
                      }}
                      className="px-6 py-3 bg-[#265C7D] hover:bg-[#1e4a5f] text-white font-semibold rounded-lg transition-colors"
                    >
                      View Results
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setSelectedTest(test);
                        setTestStarted(true);
                        setShowTestModal(true);
                      }}
                      className="px-6 py-3 bg-[#E49829] hover:bg-[#d68522] text-white font-semibold rounded-lg transition-colors"
                    >
                      {test.attempts > 0 ? 'Continue Test' : 'Start Test'}
                    </button>
                    <button
                      onClick={() => {
                        setSelectedTest(test);
                        setShowPreviewModal(true);
                      }}
                      className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors"
                    >
                      Preview
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div className="bg-gradient-to-r from-[#265C7D] to-[#1e4a5f] rounded-xl p-8 text-white">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span>💡</span>
          Test Taking Tips
        </h2>
        <ul className="space-y-2 text-white/90">
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Read all questions carefully before attempting</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Manage your time effectively - don't spend too long on one question</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Review your answers before submitting</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Practice regularly to improve your scores</span>
          </li>
        </ul>
      </div>

      {/* Test Modal */}
      {showTestModal && selectedTest && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-[#265C7D] to-[#1e4a5f] p-6 text-white">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{selectedTest.title}</h2>
                  <p className="text-white/90">{selectedTest.subject}</p>
                </div>
                <div className="flex items-center gap-4">
                  {testStarted && (
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <p className="text-sm">Time Remaining</p>
                      <p className="text-2xl font-bold">45:30</p>
                    </div>
                  )}
                  <button
                    onClick={() => {
                      setShowTestModal(false);
                      setTestStarted(false);
                    }}
                    className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-2xl transition-colors"
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {!testStarted ? (
                // Instructions Screen
                <>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-[#265C7D]/5 rounded-lg p-4 text-center">
                      <p className="text-3xl mb-2">📊</p>
                      <p className="text-2xl font-bold text-[#265C7D]">{selectedTest.questions}</p>
                      <p className="text-sm text-gray-600">Questions</p>
                    </div>
                    <div className="bg-[#E49829]/5 rounded-lg p-4 text-center">
                      <p className="text-3xl mb-2">⏱️</p>
                      <p className="text-2xl font-bold text-[#E49829]">{selectedTest.duration}</p>
                      <p className="text-sm text-gray-600">Duration</p>
                    </div>
                    <div className="bg-[#265C7D]/5 rounded-lg p-4 text-center">
                      <p className="text-3xl mb-2">🎯</p>
                      <p className="text-2xl font-bold text-[#265C7D]">{selectedTest.difficulty}</p>
                      <p className="text-sm text-gray-600">Difficulty</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Instructions:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-[#265C7D] mt-1">•</span>
                        <span>All questions are mandatory. Unanswered questions will be marked as incorrect.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#265C7D] mt-1">•</span>
                        <span>The test will auto-submit when the timer runs out.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#265C7D] mt-1">•</span>
                        <span>You can navigate between questions using Next/Previous buttons.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#265C7D] mt-1">•</span>
                        <span>Review your answers before final submission.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#265C7D] mt-1">•</span>
                        <span>Once submitted, you cannot change your answers.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setTestStarted(true)}
                      className="flex-1 px-6 py-4 bg-[#E49829] hover:bg-[#d68522] text-white font-bold rounded-lg transition-colors text-lg"
                    >
                      Start Test Now
                    </button>
                    <button
                      onClick={() => setShowTestModal(false)}
                      className="px-6 py-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                // Test Interface
                <>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-semibold text-gray-700">Question 1 of {selectedTest.questions}</p>
                      <span className="px-3 py-1 bg-[#265C7D] text-white rounded-full text-sm font-semibold">
                        Not Answered
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      What is the derivative of f(x) = 3x² + 2x - 5?
                    </h3>
                    <div className="space-y-3">
                      {['6x + 2', '6x - 2', '3x + 2', 'x² + 2x'].map((option, idx) => (
                        <label
                          key={idx}
                          className="flex items-center gap-3 p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-[#265C7D] cursor-pointer transition-colors"
                        >
                          <input
                            type="radio"
                            name="answer"
                            className="w-5 h-5 text-[#265C7D]"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors">
                      ← Previous
                    </button>
                    <div className="flex gap-3">
                      <button className="px-6 py-3 bg-[#265C7D] hover:bg-[#1e4a5f] text-white font-semibold rounded-lg transition-colors">
                        Mark for Review
                      </button>
                      <button className="px-6 py-3 bg-[#E49829] hover:bg-[#d68522] text-white font-semibold rounded-lg transition-colors">
                        Next →
                      </button>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">Question Navigation</p>
                      <button
                        onClick={() => {
                          if (window.confirm('Are you sure you want to submit? You cannot change answers after submission.')) {
                            alert(`Test submitted for ${selectedTest.title}`);
                            setShowTestModal(false);
                            setTestStarted(false);
                          }
                        }}
                        className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
                      >
                        Submit Test
                      </button>
                    </div>
                    <div className="grid grid-cols-10 gap-2 mt-3">
                      {Array.from({ length: selectedTest.questions }, (_, i) => (
                        <button
                          key={i}
                          className={`w-10 h-10 rounded-lg font-semibold text-sm ${
                            i === 0
                              ? 'bg-[#265C7D] text-white'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Results Modal */}
      {showResultsModal && selectedTest && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Test Results</h2>
                  <p className="text-white/90">{selectedTest.title}</p>
                </div>
                <button
                  onClick={() => setShowResultsModal(false)}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-2xl transition-colors"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Score Summary */}
              <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
                <div className="text-7xl font-bold text-green-600 mb-2">{selectedTest.bestScore}%</div>
                <p className="text-xl text-gray-700 font-semibold">Your Best Score</p>
                <p className="text-gray-600 mt-2">Great job! Keep practicing to improve further.</p>
              </div>

              {/* Detailed Stats */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <p className="text-3xl mb-2">✅</p>
                  <p className="text-2xl font-bold text-green-600">
                    {Math.round(selectedTest.questions * (selectedTest.bestScore / 100))}
                  </p>
                  <p className="text-sm text-gray-600">Correct</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 text-center">
                  <p className="text-3xl mb-2">❌</p>
                  <p className="text-2xl font-bold text-red-600">
                    {selectedTest.questions - Math.round(selectedTest.questions * (selectedTest.bestScore / 100))}
                  </p>
                  <p className="text-sm text-gray-600">Incorrect</p>
                </div>
                <div className="bg-[#265C7D]/5 rounded-lg p-4 text-center">
                  <p className="text-3xl mb-2">🔁</p>
                  <p className="text-2xl font-bold text-[#265C7D]">{selectedTest.attempts}</p>
                  <p className="text-sm text-gray-600">Attempts</p>
                </div>
              </div>

              {/* Performance Analysis */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Performance Analysis</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">Accuracy</span>
                      <span className="font-bold text-green-600">{selectedTest.bestScore}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-green-600"
                        style={{ width: `${selectedTest.bestScore}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700 mb-2">Average Time per Question</p>
                    <p className="text-2xl font-bold text-[#265C7D]">2.5 minutes</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowResultsModal(false);
                    setTestStarted(false);
                    setShowTestModal(true);
                  }}
                  className="flex-1 px-6 py-3 bg-[#E49829] hover:bg-[#d68522] text-white font-semibold rounded-lg transition-colors"
                >
                  Retake Test
                </button>
                <button
                  onClick={() => setShowResultsModal(false)}
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {showPreviewModal && selectedTest && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-[#265C7D] to-[#1e4a5f] p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Test Preview</h2>
                  <p className="text-white/90">{selectedTest.title}</p>
                </div>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-2xl transition-colors"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Test Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Subject</p>
                  <p className="text-lg font-bold text-gray-800">{selectedTest.subject}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Difficulty</p>
                  <p className="text-lg font-bold text-gray-800">{selectedTest.difficulty}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Questions</p>
                  <p className="text-lg font-bold text-gray-800">{selectedTest.questions}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Duration</p>
                  <p className="text-lg font-bold text-gray-800">{selectedTest.duration}</p>
                </div>
              </div>

              {/* Topics Covered */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Topics Covered</h3>
                <div className="space-y-2">
                  {[
                    'Differential Calculus',
                    'Integral Calculus',
                    'Functions and Graphs',
                    'Sequences and Series',
                    'Complex Numbers'
                  ].map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-[#265C7D]/5 rounded-lg p-3">
                      <span className="text-[#265C7D]">✓</span>
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowPreviewModal(false);
                    setTestStarted(false);
                    setShowTestModal(true);
                  }}
                  className="flex-1 px-6 py-3 bg-[#E49829] hover:bg-[#d68522] text-white font-semibold rounded-lg transition-colors"
                >
                  Start Test
                </button>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors"
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

export default PracticeTests;
