import React, { useState } from 'react';

const FeedbackReviews = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      studentName: 'Aarav Sharma',
      studentInitial: 'A',
      course: 'Mathematics HL',
      rating: 5,
      review: 'Nova Tuitions helped me score a 7 in Math HL! The calculus and statistics modules were explained brilliantly. Practice papers were exactly like the real IB exams. Highly recommend for IB students!',
      date: '2026-03-28',
      bgColor: 'bg-blue-500'
    },
    {
      id: 2,
      studentName: 'Diya Patel',
      studentInitial: 'D',
      course: 'Physics SL',
      rating: 5,
      review: 'The teachers at Nova Tuitions make Physics so easy to understand! Online classes are interactive with live experiments and simulations. Got excellent results in my IB exams thanks to their guidance.',
      date: '2026-03-25',
      bgColor: 'bg-purple-500'
    },
    {
      id: 3,
      studentName: 'Rohan Malhotra',
      studentInitial: 'R',
      course: 'Chemistry HL',
      rating: 4,
      review: 'Outstanding teaching quality! The organic chemistry and lab work sessions were particularly helpful. Study materials are comprehensive and aligned with IB curriculum. Would love more past paper discussions.',
      date: '2026-03-22',
      bgColor: 'bg-green-500'
    },
    {
      id: 4,
      studentName: 'Ananya Reddy',
      studentInitial: 'A',
      course: 'English A: Literature',
      rating: 5,
      review: 'Amazing guidance for IB English assignments and IOC preparation! The teacher helped me improve my literary analysis skills significantly. My Extended Essay was completed with their excellent mentoring.',
      date: '2026-03-20',
      bgColor: 'bg-pink-500'
    },
    {
      id: 5,
      studentName: 'Kabir Singh',
      studentInitial: 'K',
      course: 'Economics SL',
      rating: 5,
      review: 'Best online IB Economics classes! Real-world examples and case studies made macro and micro concepts crystal clear. Mock exams helped me understand the IB marking scheme perfectly.',
      date: '2026-03-18',
      bgColor: 'bg-orange-500'
    },
    {
      id: 6,
      studentName: 'Ishita Kapoor',
      studentInitial: 'I',
      course: 'Theory of Knowledge',
      rating: 4,
      review: 'TOK classes were thought-provoking and engaging! Helped me develop critical thinking skills. The teacher guided me through my TOK essay and presentation step by step. Great support!',
      date: '2026-03-15',
      bgColor: 'bg-indigo-500'
    }
  ]);
  const [myReviewsCount, setMyReviewsCount] = useState(2);

  const courses = [
    'Mathematics HL',
    'Mathematics SL',
    'Physics HL',
    'Physics SL',
    'Chemistry HL',
    'Chemistry SL',
    'Biology HL',
    'Biology SL',
    'English A: Literature',
    'English A: Language and Literature',
    'Economics HL',
    'Economics SL',
    'Business Management',
    'Computer Science',
    'Psychology',
    'Theory of Knowledge',
    'Extended Essay'
  ];

  // Calculate stats
  const totalReviews = reviews.length;
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews).toFixed(1) 
    : 0;

  // Avatar colors to cycle through
  const avatarColors = ['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-pink-500', 'bg-orange-500', 'bg-indigo-500', 'bg-teal-500', 'bg-red-500'];

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    
    // Validate all fields
    if (!selectedCourse) {
      alert('⚠️ Please select a course');
      return;
    }
    
    if (rating === 0) {
      alert('⚠️ Please rate your experience');
      return;
    }
    
    if (feedbackText.length < 50) {
      alert('⚠️ Please write at least 50 characters in your review');
      return;
    }
    
    // Create new review
    const newReview = {
      id: Date.now(), // Use timestamp for unique ID
      studentName: 'You',
      studentInitial: 'Y',
      course: selectedCourse,
      rating: rating,
      review: feedbackText,
      date: new Date().toISOString().split('T')[0],
      bgColor: avatarColors[reviews.length % avatarColors.length]
    };

    // Add to reviews array at the beginning
    setReviews([newReview, ...reviews]);
    
    // Increment my reviews count
    setMyReviewsCount(myReviewsCount + 1);

    // Show success message
    alert('✅ Thank you for your feedback! Your review has been submitted successfully.');
    
    // Reset form
    setRating(0);
    setHoveredRating(0);
    setFeedbackText('');
    setSelectedCourse('');
    setShowReviewForm(false);
  };

  const renderStars = (count, interactive = false, size = 'text-xl') => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`${size} cursor-${interactive ? 'pointer' : 'default'} transition-colors ${
              star <= (interactive ? (hoveredRating || rating) : count)
                ? 'text-[#E49829]'
                : 'text-gray-300'
            }`}
            onClick={() => interactive && setRating(star)}
            onMouseEnter={() => interactive && setHoveredRating(star)}
            onMouseLeave={() => interactive && setHoveredRating(0)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Feedback & Reviews</h1>
          <p className="text-sm text-gray-600 mt-1">Share your IB learning experience and read reviews from fellow students</p>
        </div>
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="px-6 py-2 bg-[#265C7D] hover:bg-[#1e4a5f] text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
        >
          {showReviewForm ? '✕ Close' : '✍️ Write Review'}
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Average Rating */}
        <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-[#265C7D]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-600 mb-1">Average Rating</p>
              <p className="text-2xl font-bold text-gray-800">{averageRating}</p>
              <div className="mt-2">
                {renderStars(Math.round(averageRating), false, 'text-sm')}
              </div>
            </div>
            <div className="text-3xl">⭐</div>
          </div>
        </div>

        {/* Total Reviews */}
        <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-[#E49829]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-600 mb-1">Total Reviews</p>
              <p className="text-2xl font-bold text-gray-800">{totalReviews}</p>
              <p className="text-xs text-gray-500 mt-2">From all students</p>
            </div>
            <div className="text-3xl">📝</div>
          </div>
        </div>

        {/* My Reviews */}
        <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-600 mb-1">My Reviews</p>
              <p className="text-2xl font-bold text-gray-800">{myReviewsCount}</p>
              <p className="text-xs text-gray-500 mt-2">Your contributions</p>
            </div>
            <div className="text-3xl">✅</div>
          </div>
        </div>
      </div>

      {/* Write Review Form */}
      {showReviewForm && (
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>📝</span>
            Write Your Review
          </h2>

          <form onSubmit={handleSubmitFeedback} className="space-y-4">
            {/* Course Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Course *
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#265C7D] focus:border-transparent transition-all text-sm"
              >
                <option value="">Choose a course...</option>
                {courses.map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Rate your experience *
              </label>
              <div className="flex items-center gap-3">
                {renderStars(rating, true, 'text-3xl')}
                {rating > 0 && (
                  <span className="text-sm font-semibold text-[#265C7D]">
                    {rating === 5 ? 'Excellent!' : rating === 4 ? 'Very Good!' : rating === 3 ? 'Good' : rating === 2 ? 'Fair' : 'Poor'}
                  </span>
                )}
              </div>
            </div>

            {/* Feedback Text */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Review *
              </label>
              <textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                required
                rows="4"
                placeholder="Share your thoughts about the IB course, teaching quality, study materials, exam preparation, and overall experience..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#265C7D] focus:border-transparent transition-all resize-none text-sm"
              ></textarea>
              <p className="mt-1 text-xs text-gray-500">
                {feedbackText.length} characters (minimum 50)
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3">
              <button
                type="submit"
                className={`px-6 py-2 font-semibold rounded-lg transition-all duration-200 shadow-md text-sm ${
                  selectedCourse && rating > 0 && feedbackText.length >= 50
                    ? 'bg-[#265C7D] hover:bg-[#1e4a5f] text-white hover:shadow-lg cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Review
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowReviewForm(false);
                  setRating(0);
                  setHoveredRating(0);
                  setFeedbackText('');
                  setSelectedCourse('');
                }}
                className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                Cancel
              </button>
            </div>
            
            {/* Validation Helper Text */}
            <div className="text-xs text-gray-500 space-y-1">
              <p className={selectedCourse ? 'text-green-600' : ''}>
                {selectedCourse ? '✓' : '○'} Course selected
              </p>
              <p className={rating > 0 ? 'text-green-600' : ''}>
                {rating > 0 ? '✓' : '○'} Rating given
              </p>
              <p className={feedbackText.length >= 50 ? 'text-green-600' : ''}>
                {feedbackText.length >= 50 ? '✓' : '○'} Review text (minimum 50 characters)
              </p>
            </div>
          </form>
        </div>
      )}

      {/* Student Reviews Section */}
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>👥</span>
          Student Reviews - Nova Tuitions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-200"
            >
              {/* Review Header */}
              <div className="flex items-start gap-3 mb-3">
                {/* Avatar */}
                <div className={`w-10 h-10 ${review.bgColor} rounded-full flex items-center justify-center text-white font-bold shrink-0`}>
                  {review.studentInitial}
                </div>

                {/* Student Info */}
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{review.studentName}</h3>
                  <p className="text-xs text-gray-600">{review.course}</p>
                  <div className="flex items-center gap-2 mt-1">
                    {renderStars(review.rating, false, 'text-sm')}
                    <span className="text-xs text-gray-500">• {formatDate(review.date)}</span>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sm text-gray-700 leading-relaxed">
                {review.review}
              </p>
            </div>
          ))}
        </div>

        {reviews.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p className="text-lg mb-2">📝</p>
            <p>No reviews yet. Be the first to share your experience!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackReviews;
