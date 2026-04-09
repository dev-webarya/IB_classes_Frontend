import React, { useState } from 'react';

const AskQuestion = () => {
  const [questionText, setQuestionText] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Academic');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const subjects = [
    'Mathematics HL',
    'Mathematics SL',
    'Physics HL',
    'Physics SL',
    'Chemistry HL',
    'Chemistry SL',
    'Biology HL',
    'Biology SL',
    'English A',
    'English B',
    'Economics HL',
    'Economics SL',
    'Business Management',
    'Computer Science',
    'Psychology',
    'History',
    'Geography',
    'TOK',
    'Extended Essay'
  ];

  const categories = [
    'Academic',
    'Assignment Help',
    'Exam Preparation',
    'Conceptual Doubt',
    'Technical Issue',
    'Course Material',
    'Administrative'
  ];

  const previousQuestions = [
    {
      id: 1,
      subject: 'Mathematics HL',
      category: 'Conceptual Doubt',
      question: 'How do you solve differential equations using separation of variables?',
      answer: 'To solve using separation of variables, follow these steps: 1) Separate the variables so that all terms with one variable are on one side and all terms with the other variable are on the other side. 2) Integrate both sides with respect to their respective variables. 3) Solve for the constant of integration using initial conditions. 4) Express y as an explicit function of x if possible.',
      askedDate: '2026-03-28',
      answeredDate: '2026-03-28',
      teacher: 'Mr. Rajesh Singh',
      status: 'answered',
      likes: 5
    },
    {
      id: 2,
      subject: 'Physics SL',
      category: 'Academic',
      question: 'Can you explain the concept of momentum conservation in collisions?',
      answer: 'Momentum conservation states that in an isolated system (no external forces), the total momentum before collision equals total momentum after collision. This is expressed as: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂. In elastic collisions, kinetic energy is also conserved, while in inelastic collisions, some kinetic energy is converted to other forms.',
      askedDate: '2026-03-25',
      answeredDate: '2026-03-26',
      teacher: 'Dr. Priya Sharma',
      status: 'answered',
      likes: 8
    },
    {
      id: 3,
      subject: 'Chemistry HL',
      category: 'Assignment Help',
      question: 'What is the mechanism of nucleophilic substitution reactions?',
      answer: null,
      askedDate: '2026-03-30',
      answeredDate: null,
      teacher: null,
      status: 'pending',
      likes: 0
    },
    {
      id: 4,
      subject: 'Economics SL',
      category: 'Exam Preparation',
      question: 'How do I calculate price elasticity of demand and interpret the results?',
      answer: 'Price Elasticity of Demand (PED) = (% change in quantity demanded) / (% change in price). If |PED| > 1, demand is elastic (responsive to price changes). If |PED| < 1, demand is inelastic (not very responsive). If |PED| = 1, demand is unitary elastic. Remember that PED is usually negative because of the law of demand.',
      askedDate: '2026-03-27',
      answeredDate: '2026-03-28',
      teacher: 'Ms. Neha Kapoor',
      status: 'answered',
      likes: 12
    },
    {
      id: 5,
      subject: 'English A',
      category: 'Assignment Help',
      question: 'What are the key literary devices I should analyze in my essay?',
      answer: null,
      askedDate: '2026-04-02',
      answeredDate: null,
      teacher: null,
      status: 'pending',
      likes: 0
    },
    {
      id: 6,
      subject: 'TOK',
      category: 'Conceptual Doubt',
      question: 'How do I structure my TOK essay introduction?',
      answer: 'A strong TOK essay introduction should: 1) Contextualize the prescribed title, 2) Define key terms, 3) State your thesis/main argument, 4) Outline the scope of your essay, including which AOKs you will discuss, 5) Indicate your approach to the question. Keep it concise (about 10% of total word count).',
      askedDate: '2026-03-29',
      answeredDate: '2026-03-30',
      teacher: 'Mr. Ahmed Khan',
      status: 'answered',
      likes: 7
    },
    {
      id: 7,
      subject: 'Biology HL',
      category: 'Academic',
      question: 'Can you explain the process of DNA replication in detail?',
      answer: 'DNA replication occurs in the S phase of the cell cycle. Key steps: 1) Helicase unwinds the double helix, 2) DNA primase synthesizes RNA primers, 3) DNA polymerase III adds nucleotides to the 3\' end (leading strand is continuous, lagging strand forms Okazaki fragments), 4) DNA polymerase I removes primers and fills gaps, 5) DNA ligase seals the fragments together.',
      askedDate: '2026-03-26',
      answeredDate: '2026-03-27',
      teacher: 'Dr. Priya Sharma',
      status: 'answered',
      likes: 15
    },
    {
      id: 8,
      subject: 'Extended Essay',
      category: 'Administrative',
      question: 'What is the deadline for submitting the final draft?',
      answer: null,
      askedDate: '2026-04-01',
      answeredDate: null,
      teacher: null,
      status: 'pending',
      likes: 0
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!selectedSubject) {
      alert('Please select a subject');
      return;
    }
    
    if (questionText.length < 20) {
      alert('Question must be at least 20 characters long');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form
      setQuestionText('');
      setSelectedSubject('');
      setSelectedCategory('Academic');
      setSelectedFile(null);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1000);
  };

  const toggleExpand = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#265C7D] mb-2">Ask a Question</h1>
        <p className="text-gray-600">Get AI-powered answers reviewed by expert tutors</p>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-500 text-white rounded-xl p-4 shadow-lg flex items-center gap-3 animate-fade-in">
          <span className="text-2xl">✓</span>
          <div>
            <p className="font-bold">Question submitted successfully!</p>
            <p className="text-sm">Your teacher will respond within 24 hours.</p>
          </div>
        </div>
      )}

      {/* Ask New Question Form */}
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-200">
        <h2 className="text-xl font-bold text-[#265C7D] mb-6 flex items-center gap-2">
          <span>❓</span>
          Post Your Question
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Subject Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Subject/Topic
              </label>
              <input
                type="text"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                required
                placeholder="e.g., Quadratic Equations"
                className="w-full px-4 py-3 border-2 border-[#265C7D] rounded-lg focus:ring-2 focus:ring-[#265C7D] focus:border-[#265C7D] transition-all"
              />
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#265C7D] rounded-lg focus:ring-2 focus:ring-[#265C7D] focus:border-[#265C7D] transition-all"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Question Text Area */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Question
            </label>
            <textarea
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              required
              rows="6"
              placeholder="Describe your question in detail..."
              className="w-full px-4 py-3 border-2 border-[#265C7D] rounded-lg focus:ring-2 focus:ring-[#265C7D] focus:border-[#265C7D] transition-all resize-none"
            ></textarea>
            <p className="mt-2 text-sm text-gray-500">
              {questionText.length} characters (minimum 20 characters)
            </p>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Attach File (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#265C7D] transition-colors">
              <input
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                className="hidden"
                id="file-upload"
                accept="image/*,.pdf,.doc,.docx"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="text-4xl mb-2">📎</div>
                <p className="text-gray-600 mb-1">
                  {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-sm text-gray-500">
                  PNG, JPG, PDF, DOC (max. 10MB)
                </p>
              </label>
              {selectedFile && (
                <button
                  type="button"
                  onClick={() => setSelectedFile(null)}
                  className="mt-2 text-red-500 text-sm hover:underline"
                >
                  Remove file
                </button>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!questionText || questionText.length < 20 || !selectedSubject || isSubmitting}
            className="w-full px-8 py-4 bg-[#265C7D] hover:bg-[#1e4a5f] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit Question'
            )}
          </button>
        </form>
      </div>

      {/* Previous Questions */}
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#265C7D] flex items-center gap-2">
            <span>📚</span>
            Your Previous Questions
          </h2>
          <span className="px-4 py-2 bg-[#265C7D]/10 text-[#265C7D] rounded-lg font-semibold text-sm">
            {previousQuestions.length} Questions
          </span>
        </div>

        <div className="space-y-4">
          {previousQuestions.map((item) => (
            <div
              key={item.id}
              className={`border-l-4 rounded-lg p-6 transition-all hover:shadow-md ${
                item.status === 'answered'
                  ? 'bg-[#265C7D]/5 border-[#265C7D]'
                  : 'bg-[#E49829]/5 border-[#E49829]'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-[#265C7D] text-white rounded-full text-xs font-semibold">
                      {item.subject}
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === 'answered'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.status === 'answered' ? '✓ Answered' : '⏱ Pending'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Asked on {new Date(item.askedDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
                {item.status === 'answered' && (
                  <div className="flex items-center gap-2 text-gray-500">
                    <button className="hover:text-[#265C7D] transition-colors">
                      <span className="text-xl">👍</span>
                    </button>
                    <span className="text-sm font-semibold">{item.likes}</span>
                  </div>
                )}
              </div>

              {/* Question Text */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Question:</h3>
                <p className="text-gray-700">{item.question}</p>
              </div>

              {/* Answer Section */}
              {item.status === 'answered' && (
                <div className="bg-white rounded-lg p-4 border-2 border-[#265C7D]/20">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[#265C7D] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.teacher.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-800">Answer by {item.teacher}</h3>
                      <p className="text-xs text-gray-500">
                        Answered on {new Date(item.answeredDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {expandedQuestion === item.id 
                      ? item.answer 
                      : item.answer.substring(0, 150) + (item.answer.length > 150 ? '...' : '')}
                  </p>
                  {item.answer.length > 150 && (
                    <button 
                      onClick={() => toggleExpand(item.id)}
                      className="mt-3 text-[#265C7D] hover:text-[#1e4a5f] font-semibold text-sm"
                    >
                      {expandedQuestion === item.id ? '↑ Show Less' : '↓ Read More'}
                    </button>
                  )}
                </div>
              )}

              {item.status === 'pending' && (
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <p className="text-yellow-800 text-sm flex items-center gap-2">
                    <span>⏱️</span>
                    Your teacher will respond within 24 hours. You will be notified via email.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-[#265C7D] to-[#1e4a5f] rounded-xl p-6 text-white">
          <div className="text-4xl mb-2">📊</div>
          <p className="text-3xl font-bold mb-1">{previousQuestions.length}</p>
          <p className="text-white/80 text-sm">Total Questions Asked</p>
        </div>
        <div className="bg-gradient-to-br from-[#E49829] to-[#d68522] rounded-xl p-6 text-white">
          <div className="text-4xl mb-2">✅</div>
          <p className="text-3xl font-bold mb-1">
            {previousQuestions.filter(q => q.status === 'answered').length}
          </p>
          <p className="text-white/80 text-sm">Questions Answered</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="text-4xl mb-2">⚡</div>
          <p className="text-3xl font-bold mb-1">
            {Math.round((previousQuestions.filter(q => q.status === 'answered').length / previousQuestions.length) * 100)}%
          </p>
          <p className="text-white/80 text-sm">Response Rate</p>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-gradient-to-r from-[#265C7D] to-[#1e4a5f] rounded-xl p-8 text-white">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span>💡</span>
          Tips for Getting Better Answers
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
              <span className="text-2xl">✏️</span>
              <div>
                <h3 className="font-bold mb-1">Be Specific</h3>
                <p className="text-white/80 text-sm">Clearly state what concept you're struggling with and include relevant context.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
              <span className="text-2xl">📸</span>
              <div>
                <h3 className="font-bold mb-1">Attach Visual Aids</h3>
                <p className="text-white/80 text-sm">Include diagrams, screenshots, or problem statements to help tutors understand better.</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="font-bold mb-1">Choose Right Category</h3>
                <p className="text-white/80 text-sm">Select the appropriate category to route your question to the right expert.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
              <span className="text-2xl">⏰</span>
              <div>
                <h3 className="font-bold mb-1">Typical Response Time</h3>
                <p className="text-white/80 text-sm">Teachers usually respond within 24 hours. Urgent questions are prioritized.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
        <h2 className="text-xl font-bold text-[#265C7D] mb-6 flex items-center gap-2">
          <span>❔</span>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-[#265C7D] bg-gray-50 rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-2">How long does it take to get an answer?</h3>
            <p className="text-gray-600 text-sm">Most questions are answered within 24 hours. Complex questions may take up to 48 hours.</p>
          </div>
          <div className="border-l-4 border-[#E49829] bg-gray-50 rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-2">Can I ask follow-up questions?</h3>
            <p className="text-gray-600 text-sm">Yes! If you need clarification on an answer, you can post a follow-up question referencing the original.</p>
          </div>
          <div className="border-l-4 border-[#265C7D] bg-gray-50 rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-2">Is there a limit to how many questions I can ask?</h3>
            <p className="text-gray-600 text-sm">No limit! Feel free to ask as many questions as you need. We're here to help you succeed.</p>
          </div>
          <div className="border-l-4 border-[#E49829] bg-gray-50 rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-2">Can I request a specific teacher?</h3>
            <p className="text-gray-600 text-sm">Questions are automatically routed to the most qualified teacher for that subject. All our teachers are IB-certified experts.</p>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AskQuestion;
