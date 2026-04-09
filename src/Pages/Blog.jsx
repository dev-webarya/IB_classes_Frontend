import React from 'react';
import { BookOpen, PenTool, Bell, ThumbsUp, MessageCircle, Eye, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {

  const blogPosts = [
    {
      id: 1,
      category: 'IB Guide',
      title: 'Complete Guide to IB Diploma Programme',
      excerpt: 'Everything you need to know about the IB Diploma Programme, its structure, subjects, and how to excel in it.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600',
      date: 'March 28, 2026',
      readTime: '8 min read',
      author: 'IBClassesOnline Team',
      tags: ['#ib-guide', '#diploma', '#education'],
      likes: 205,
      comments: 12,
      views: 1246
    },
    {
      id: 2,
      category: 'Study Tips',
      title: 'Top 10 Study Techniques for IB Students',
      excerpt: 'Proven strategies and techniques that help IB students manage their time effectively and achieve top scores.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600',
      date: 'March 25, 2026',
      readTime: '6 min read',
      author: 'Dr. Sharma',
      tags: ['#study-tips', '#ib', '#productivity'],
      likes: 156,
      comments: 8,
      views: 925
    },
    {
      id: 3,
      category: 'Success Stories',
      title: 'How Priya Scored 44/45 in IB',
      excerpt: 'Learn from Priya\'s journey and discover the strategies she used to achieve an outstanding score in IB examinations.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600',
      date: 'March 22, 2026',
      readTime: '5 min read',
      author: 'Success Team',
      tags: ['#success-story', '#ib-exam', '#motivation'],
      likes: 198,
      comments: 15,
      views: 1105
    },
    {
      id: 4,
      category: 'Subject Guide',
      title: 'Mastering IB Physics: Tips from Expert Tutors',
      excerpt: 'Expert insights and practical tips to excel in IB Physics HL and SL from our experienced faculty.',
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=600',
      date: 'March 20, 2026',
      readTime: '7 min read',
      author: 'Physics Faculty',
      tags: ['#physics', '#ib-subject', '#tutorial'],
      likes: 142,
      comments: 10,
      views: 856
    },
    {
      id: 5,
      category: 'IB Core',
      title: 'Extended Essay Writing Guide',
      excerpt: 'Comprehensive guide to writing an outstanding Extended Essay with proper research methodology and structure.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600',
      date: 'March 18, 2026',
      readTime: '10 min read',
      author: 'Academic Team',
      tags: ['#extended-essay', '#ib-core', '#writing'],
      likes: 112,
      comments: 6,
      views: 780
    },
    {
      id: 6,
      category: 'Study Tips',
      title: 'Time Management Strategies for IB Students',
      excerpt: 'Effective time management techniques to balance coursework, CAS activities, and personal time.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600',
      date: 'March 15, 2026',
      readTime: '6 min read',
      author: 'Student Counselor',
      tags: ['#time-management', '#study-tips', '#ib'],
      likes: 92,
      comments: 5,
      views: 567
    },
    {
      id: 7,
      category: 'Subject Guide',
      title: 'IB Mathematics: Analysis and Approaches',
      excerpt: 'Understanding the difference between AA and AI, and choosing the right math course for your goals.',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600',
      date: 'March 12, 2026',
      readTime: '8 min read',
      author: 'Math Department',
      tags: ['#mathematics', '#ib-math', '#tutorial'],
      likes: 87,
      comments: 4,
      views: 534
    },
    {
      id: 8,
      category: 'IB Core',
      title: 'Theory of Knowledge: Essay Writing Tips',
      excerpt: 'How to write a compelling TOK essay that demonstrates critical thinking and knowledge exploration.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
      date: 'March 10, 2026',
      readTime: '9 min read',
      author: 'TOK Expert',
      tags: ['#tok', '#ib-core', '#essay-writing'],
      likes: 76,
      comments: 3,
      views: 489
    },
    {
      id: 9,
      category: 'Success Stories',
      title: 'From Average to Excellence: Rahul\'s IB Journey',
      excerpt: 'How targeted tutoring and dedication helped Rahul improve his predicted grades from 32 to 40.',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600',
      date: 'March 8, 2026',
      readTime: '7 min read',
      author: 'Success Team',
      tags: ['#success-story', '#ib', '#motivation'],
      likes: 134,
      comments: 11,
      views: 692
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#EB5213]/90 via-[#3A63EB]/85 to-[#EB5213]/90"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight font-serif text-white drop-shadow-2xl" style={{fontFamily: 'Georgia, serif'}}>
            Learn. Grow. Excel.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg mb-6 sm:mb-8 px-4">
            Tips, strategies and insights to help students ace their boards and beyond.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center px-4" data-aos="fade-up" data-aos-delay="200">
            <Link to="/all-blogs" className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-white text-[#3A63EB] rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
              Explore Blogs
            </Link>
            <Link to="/submit-blog" className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-[#EB5213] to-[#FF8C5A] text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <PenTool className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
              Write Your Blog
            </Link>
            <Link to="/subscribe" className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-[#3A63EB] to-[#6B8FFF] text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
              Subscribe
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              Popular Blogs
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Most-read articles curated for you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Post Image */}
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className={`px-3 sm:px-4 py-1 rounded-full text-xs font-semibold text-white ${
                      post.category === 'IB Guide' ? 'bg-gradient-to-r from-[#EB5213] to-[#FF8C5A]' :
                      post.category === 'Study Tips' ? 'bg-gradient-to-r from-[#3A63EB] to-[#6B8FFF]' :
                      post.category === 'Success Stories' ? 'bg-gradient-to-r from-[#10B981] to-[#34D399]' :
                      post.category === 'Subject Guide' ? 'bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]' :
                      'bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-4 sm:p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs text-[#3A63EB] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 hover:text-[#3A63EB] transition-colors font-serif line-clamp-2" style={{fontFamily: 'Georgia, serif'}}>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {post.views}
                    </span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center text-xs text-gray-500 mb-3 sm:mb-4 gap-2 sm:gap-3 border-t pt-2 sm:pt-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>

                  {/* Author & Read More */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-500">By {post.author}</span>
                    <Link to="/all-blogs" className="text-[#3A63EB] font-semibold text-xs sm:text-sm hover:text-[#EB5213] transition-colors flex items-center gap-1">
                      Read More
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No blog posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      

    </div>
  );
};

export default Blog;
