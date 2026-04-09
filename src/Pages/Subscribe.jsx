import React, { useState } from 'react';
import { Mail, CheckCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Simulate subscription (you'll need to integrate with your backend)
    console.log('Subscribing email:', email);
    setIsSubscribed(true);
    setError('');
    setEmail('');
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80)',
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0071BD]/90 to-[#005a9c]/90"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block p-3 sm:p-4 bg-white/10 rounded-full mb-4 sm:mb-6">
            <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
            Stay Updated
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-2">
            Get notified when new articles are published
          </p>
          <p className="text-base sm:text-lg text-white/80">
            Join our community of learners and never miss an update
          </p>
        </div>
      </section>

      {/* Subscribe Form Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 text-center font-serif" style={{fontFamily: 'Georgia, serif'}}>
              Subscribe to Blog Updates
            </h2>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8">
              Enter your email to receive new blog notifications
            </p>

            {/* Success Message */}
            {isSubscribed && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg flex items-start sm:items-center gap-2 sm:gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                <div>
                  <p className="text-sm sm:text-base text-green-800 font-semibold">Successfully Subscribed!</p>
                  <p className="text-xs sm:text-sm text-green-700">You'll receive updates about new blog posts.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 sm:gap-3">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
                <p className="text-sm sm:text-base text-red-800">{error}</p>
              </div>
            )}


            {/* Subscribe Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0071BD] focus:border-[#0071BD] outline-none transition-all"
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#0071BD] to-[#005a9c] text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Subscribe
              </button>
            </form>

            <div className="mt-4 sm:mt-6 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
              <Link to="/blog" className="text-[#0071BD] hover:underline text-xs sm:text-sm">
                ← Back to Blog
              </Link>
              <span className="hidden sm:inline mx-2 text-gray-400">|</span>
              <a href="mailto:ibclassesonline@ixpoe.com?subject=Unsubscribe" className="text-gray-600 hover:underline text-xs sm:text-sm">
                Want to unsubscribe?
              </a>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Subscribe;
