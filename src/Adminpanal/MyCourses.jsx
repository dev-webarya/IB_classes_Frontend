import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyCourses = () => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showJoinClassModal, setShowJoinClassModal] = useState(false);
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Mathematics HL',
      teacher: 'Mr. Rajesh Singh',
      progress: 75,
      nextClass: 'Monday, 4:00 PM',
      students: 6,
      level: 'Higher Level',
      color: 'from-[#265C7D] to-[#1e4a5f]'
    },
    {
      id: 2,
      name: 'Physics SL',
      teacher: 'Dr. Priya Sharma',
      progress: 60,
      nextClass: 'Tuesday, 5:00 PM',
      students: 5,
      level: 'Standard Level',
      color: 'from-[#E49829] to-[#d68522]'
    },
    {
      id: 3,
      name: 'Chemistry HL',
      teacher: 'Ms. Anita Gupta',
      progress: 82,
      nextClass: 'Wednesday, 4:30 PM',
      students: 6,
      level: 'Higher Level',
      color: 'from-[#265C7D] to-[#1e4a5f]'
    },
    {
      id: 4,
      name: 'English A: Language & Literature',
      teacher: 'Mr. David Kumar',
      progress: 55,
      nextClass: 'Thursday, 3:30 PM',
      students: 4,
      level: 'Higher Level',
      color: 'from-[#E49829] to-[#d68522]'
    },
    {
      id: 5,
      name: 'Economics SL',
      teacher: 'Ms. Neha Kapoor',
      progress: 70,
      nextClass: 'Friday, 5:30 PM',
      students: 5,
      level: 'Standard Level',
      color: 'from-[#265C7D] to-[#1e4a5f]'
    }
  ]);

  const [newCourse, setNewCourse] = useState({
    name: '',
    teacher: '',
    level: 'Standard Level',
    students: 0,
    nextClass: '',
    color: 'from-[#265C7D] to-[#1e4a5f]'
  });

  const handleAddCourse = (e) => {
    e.preventDefault();
    const courseToAdd = {
      id: courses.length + 1,
      name: newCourse.name,
      teacher: newCourse.teacher,
      progress: 0,
      nextClass: newCourse.nextClass,
      students: parseInt(newCourse.students) || 0,
      level: newCourse.level,
      color: newCourse.color
    };
    setCourses([...courses, courseToAdd]);
    setShowAddCourseModal(false);
    setNewCourse({
      name: '',
      teacher: '',
      level: 'Standard Level',
      students: 0,
      nextClass: '',
      color: 'from-[#265C7D] to-[#1e4a5f]'
    });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">My Courses</h1>
          <p className="text-gray-600">Track your enrolled IB courses and progress</p>
        </div>
        <button
          onClick={() => setShowAddCourseModal(true)}
          className="px-6 py-3 bg-[#E49829] hover:bg-[#d68522] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
          <span className="text-xl">+</span>
          <span>Add Course</span>
        </button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            {/* Course Header */}
            <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-xl font-bold mb-1">{course.name}</h2>
                  <p className="text-white/90 text-sm">{course.level}</p>
                </div>
                <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                  {course.students} Students
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Course Progress</span>
                  <span className="font-bold">{course.progress}%</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white/90 rounded-full transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#265C7D]/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">👨‍🏫</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Instructor</p>
                    <p className="font-semibold text-gray-800">{course.teacher}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#E49829]/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📅</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Next Class</p>
                    <p className="font-semibold text-gray-800">{course.nextClass}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button
                  onClick={() => {
                    setSelectedCourse(course);
                    setShowDetailsModal(true);
                  }}
                  className="px-4 py-2 bg-[#265C7D] text-white font-semibold rounded-lg hover:bg-[#1e4a5f] transition-colors text-center text-sm"
                >
                  View Details
                </button>
                <button
                  onClick={() => {
                    setSelectedCourse(course);
                    setShowJoinClassModal(true);
                  }}
                  className="px-4 py-2 bg-[#E49829] text-white font-semibold rounded-lg hover:bg-[#d68522] transition-colors text-center text-sm"
                >
                  Join Class
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Browse More Courses */}
      <div className="bg-gradient-to-r from-[#265C7D] to-[#1e4a5f] rounded-xl p-8 text-white text-center">
        <h2 className="text-xl font-bold mb-3">Want to explore more subjects?</h2>
        <p className="text-white/90 mb-6">
          We offer comprehensive IB courses across all subject groups
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-[#E49829] hover:bg-[#d68522] text-white font-semibold rounded-lg transition-colors"
        >
          Browse All Courses
        </Link>
      </div>

      {/* View Details Modal */}
      {showDetailsModal && selectedCourse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className={`bg-gradient-to-r ${selectedCourse.color} p-6 text-white`}>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedCourse.name}</h2>
                  <p className="text-white/90">{selectedCourse.level}</p>
                </div>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-2xl transition-colors"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Course Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Instructor</p>
                  <p className="text-lg font-bold text-gray-800">{selectedCourse.teacher}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Next Class</p>
                  <p className="text-lg font-bold text-gray-800">{selectedCourse.nextClass}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Progress</p>
                  <p className="text-lg font-bold text-[#265C7D]">{selectedCourse.progress}%</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Batch Size</p>
                  <p className="text-lg font-bold text-gray-800">{selectedCourse.students} Students</p>
                </div>
              </div>

              {/* Course Description */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Course Overview</h3>
                <p className="text-gray-600 leading-relaxed">
                  This comprehensive IB {selectedCourse.name} course covers all topics from the IB curriculum. 
                  With personalized attention in small batches and expert guidance from {selectedCourse.teacher}, 
                  students receive thorough preparation for exams and internal assessments.
                </p>
              </div>

              {/* Topics Covered */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Key Topics</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Core Concepts', 'Problem Solving', 'Practical Applications', 'Exam Preparation', 'Internal Assessment', 'Extended Practice'].map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-[#265C7D]/5 rounded-lg p-3">
                      <span className="text-[#265C7D]">✓</span>
                      <span className="text-gray-700 font-medium">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => {
                    setShowDetailsModal(false);
                    setShowJoinClassModal(true);
                  }}
                  className="flex-1 px-6 py-3 bg-[#E49829] hover:bg-[#d68522] text-white font-semibold rounded-lg transition-colors"
                >
                  Join Next Class
                </button>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Join Class Modal */}
      {showJoinClassModal && selectedCourse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full">
            <div className={`bg-gradient-to-r ${selectedCourse.color} p-6 text-white`}>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Join Virtual Class</h2>
                  <p className="text-white/90">{selectedCourse.name}</p>
                </div>
                <button
                  onClick={() => setShowJoinClassModal(false)}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-2xl transition-colors"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Class Info */}
              <div className="bg-[#265C7D]/5 rounded-xl p-6 border-l-4 border-[#265C7D]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#265C7D] rounded-lg flex items-center justify-center text-white text-2xl">
                    📅
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Next Scheduled Class</h3>
                    <p className="text-gray-600 mb-1"><strong>Time:</strong> {selectedCourse.nextClass}</p>
                    <p className="text-gray-600 mb-1"><strong>Instructor:</strong> {selectedCourse.teacher}</p>
                    <p className="text-gray-600"><strong>Duration:</strong> 90 minutes</p>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Before Joining:</h3>
                <div className="space-y-2">
                  {[
                    'Ensure you have a stable internet connection',
                    'Keep your camera and microphone ready',
                    'Have your study materials prepared',
                    'Join a few minutes early to check your setup'
                  ].map((instruction, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-[#265C7D] mt-1">•</span>
                      <span>{instruction}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Join Button */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    alert(`Redirecting to virtual classroom for ${selectedCourse.name}...`);
                    setShowJoinClassModal(false);
                  }}
                  className="flex-1 px-6 py-4 bg-[#E49829] hover:bg-[#d68522] text-white font-bold rounded-lg transition-colors text-lg"
                >
                  🎥 Join Virtual Class Now
                </button>
                <button
                  onClick={() => setShowJoinClassModal(false)}
                  className="px-6 py-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>

              {/* Meeting Link */}
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Meeting Link (for manual join):</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value="https://meet.example.com/ib-class-12345"
                    readOnly
                    className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-sm"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('https://meet.example.com/ib-class-12345');
                      alert('Link copied to clipboard!');
                    }}
                    className="px-4 py-2 bg-[#265C7D] hover:bg-[#1e4a5f] text-white rounded text-sm font-semibold"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Course Modal */}
      {showAddCourseModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-[#265C7D] to-[#1e4a5f] p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Add New Course</h2>
                  <p className="text-white/90">Enroll in a new IB course</p>
                </div>
                <button
                  onClick={() => {
                    setShowAddCourseModal(false);
                    setNewCourse({
                      name: '',
                      teacher: '',
                      level: 'Standard Level',
                      students: 0,
                      nextClass: '',
                      color: 'from-[#265C7D] to-[#1e4a5f]'
                    });
                  }}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-2xl transition-colors"
                >
                  ×
                </button>
              </div>
            </div>

            <form onSubmit={handleAddCourse} className="p-6 space-y-6">
              {/* Course Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Name *
                </label>
                <input
                  type="text"
                  required
                  value={newCourse.name}
                  onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                  placeholder="e.g., Mathematics HL, Physics SL"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#265C7D] focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Teacher Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Instructor Name *
                </label>
                <input
                  type="text"
                  required
                  value={newCourse.teacher}
                  onChange={(e) => setNewCourse({ ...newCourse, teacher: e.target.value })}
                  placeholder="e.g., Dr. John Smith"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#265C7D] focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Course Level */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Level *
                </label>
                <select
                  value={newCourse.level}
                  onChange={(e) => setNewCourse({ ...newCourse, level: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#265C7D] focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="Standard Level">Standard Level (SL)</option>
                  <option value="Higher Level">Higher Level (HL)</option>
                </select>
              </div>

              {/* Grid for Students and Next Class */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Batch Size
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={newCourse.students}
                    onChange={(e) => setNewCourse({ ...newCourse, students: e.target.value })}
                    placeholder="e.g., 6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#265C7D] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Next Class Schedule *
                  </label>
                  <input
                    type="text"
                    required
                    value={newCourse.nextClass}
                    onChange={(e) => setNewCourse({ ...newCourse, nextClass: e.target.value })}
                    placeholder="e.g., Monday, 4:00 PM"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#265C7D] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Course Color Theme */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Color Theme
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setNewCourse({ ...newCourse, color: 'from-[#265C7D] to-[#1e4a5f]' })}
                    className={`h-12 rounded-lg bg-gradient-to-r from-[#265C7D] to-[#1e4a5f] border-4 transition-all ${
                      newCourse.color === 'from-[#265C7D] to-[#1e4a5f]' ? 'border-gray-800 scale-105' : 'border-transparent'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setNewCourse({ ...newCourse, color: 'from-[#E49829] to-[#d68522]' })}
                    className={`h-12 rounded-lg bg-gradient-to-r from-[#E49829] to-[#d68522] border-4 transition-all ${
                      newCourse.color === 'from-[#E49829] to-[#d68522]' ? 'border-gray-800 scale-105' : 'border-transparent'
                    }`}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#265C7D] hover:bg-[#1e4a5f] text-white font-semibold rounded-lg transition-colors"
                >
                  ✓ Add Course
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddCourseModal(false);
                    setNewCourse({
                      name: '',
                      teacher: '',
                      level: 'Standard Level',
                      students: 0,
                      nextClass: '',
                      color: 'from-[#265C7D] to-[#1e4a5f]'
                    });
                  }}
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCourses;
