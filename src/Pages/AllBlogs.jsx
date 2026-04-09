import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Heart, MessageCircle, Eye, SlidersHorizontal } from 'lucide-react';

const AllBlogs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [yearFilter, setYearFilter] = useState('all');

  const allBlogPosts = [
    {
      id: 1,
      category: 'IB Guide',
      title: 'Complete Guide to IB Diploma Programme',
      excerpt: 'Everything you need to know about the IB Diploma Programme, its structure, subjects, and how to excel in it. Learn from expert teachers with 25+ years of experience.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600',
      date: 'March 28, 2026',
      readTime: '8 min read',
      author: 'IBClassesOnline Team',
      tags: ['#IB', '#Guide', '#Education', '#Diploma'],
      likes: 205,
      comments: 12,
      views: 1246,
      year: 2026
    },
    {
      id: 2,
      category: 'Study Tips',
      title: 'Top 10 Study Techniques for IB Students',
      excerpt: 'Proven strategies and techniques that help IB students manage their time effectively and achieve top scores in examinations.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600',
      date: 'March 25, 2026',
      readTime: '6 min read',
      author: 'Dr. Sharma',
      tags: ['#StudyTips', '#IB', '#Productivity', '#TimeManagement'],
      likes: 156,
      comments: 8,
      views: 925,
      year: 2026
    },
    {
      id: 3,
      category: 'Success Stories',
      title: 'How Priya Scored 44/45 in IB',
      excerpt: 'Learn from Priya\'s journey and discover the strategies she used to achieve an outstanding score in IB examinations. Inspiring success story.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600',
      date: 'March 22, 2026',
      readTime: '5 min read',
      author: 'Success Team',
      tags: ['#SuccessStory', '#IB', '#Motivation', '#Achievement'],
      likes: 198,
      comments: 15,
      views: 1105,
      year: 2026
    },
    {
      id: 4,
      category: 'Subject Guide',
      title: 'Mastering IB Physics: Tips from Expert Tutors',
      excerpt: 'Expert insights and practical tips to excel in IB Physics HL and SL from our experienced faculty members with proven track records.',
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=600',
      date: 'March 20, 2026',
      readTime: '7 min read',
      author: 'Physics Faculty',
      tags: ['#Physics', '#IB', '#Tutorial', '#Science'],
      likes: 142,
      comments: 10,
      views: 856,
      year: 2026
    },
    {
      id: 5,
      category: 'IB Core',
      title: 'Extended Essay Writing Guide',
      excerpt: 'Comprehensive guide to writing an outstanding Extended Essay with proper research methodology and structure for IB students.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600',
      date: 'March 18, 2026',
      readTime: '10 min read',
      author: 'Academic Team',
      tags: ['#ExtendedEssay', '#IBCore', '#Writing', '#Research'],
      likes: 112,
      comments: 6,
      views: 780,
      year: 2026
    },
    {
      id: 6,
      category: 'Study Tips',
      title: 'Time Management Strategies for IB Students',
      excerpt: 'Effective time management techniques to balance coursework, CAS activities, and personal time for better academic performance.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600',
      date: 'March 15, 2026',
      readTime: '6 min read',
      author: 'Student Counselor',
      tags: ['#TimeManagement', '#StudyTips', '#IB', '#Balance'],
      likes: 92,
      comments: 5,
      views: 567,
      year: 2026
    },
    {
      id: 7,
      category: 'Subject Guide',
      title: 'IB Mathematics: Analysis and Approaches',
      excerpt: 'Understanding the difference between AA and AI, and choosing the right math course for your future goals and university requirements.',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600',
      date: 'March 12, 2026',
      readTime: '8 min read',
      author: 'Math Department',
      tags: ['#Mathematics', '#IBMath', '#Tutorial', '#Analysis'],
      likes: 178,
      comments: 14,
      views: 1021,
      year: 2026
    },
    {
      id: 8,
      category: 'TOK',
      title: 'Theory of Knowledge: Essay Writing Tips',
      excerpt: 'Master the art of TOK essay writing with structured approach, critical thinking, and real-world examples for higher grades.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
      date: 'March 10, 2026',
      readTime: '9 min read',
      author: 'TOK Expert',
      tags: ['#TOK', '#TheoryOfKnowledge', '#Essay', '#CriticalThinking'],
      likes: 134,
      comments: 11,
      views: 892,
      year: 2026
    },
    {
      id: 9,
      category: 'Chemistry',
      title: 'IB Chemistry: Organic Chemistry Made Easy',
      excerpt: 'Simplifying organic chemistry concepts with clear explanations, diagrams, and practical examples for better understanding.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600',
      date: 'March 8, 2026',
      readTime: '7 min read',
      author: 'Chemistry Faculty',
      tags: ['#Chemistry', '#Organic', '#IB', '#Science'],
      likes: 167,
      comments: 9,
      views: 945,
      year: 2026
    },
    {
      id: 10,
      category: 'Success Stories',
      title: 'From Average to Excellence: Rahul\'s IB Journey',
      excerpt: 'How Rahul transformed his grades from average to excellent through dedication, right guidance, and effective study strategies.',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600',
      date: 'March 5, 2026',
      readTime: '6 min read',
      author: 'Success Team',
      tags: ['#SuccessStory', '#Transformation', '#Motivation', '#IB'],
      likes: 221,
      comments: 18,
      views: 1334,
      year: 2026
    },
    {
      id: 11,
      category: 'Biology',
      title: 'Understanding Genetics for IB Biology',
      excerpt: 'Comprehensive guide to genetics covering DNA, inheritance patterns, genetic engineering, and exam-focused tips.',
      image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600',
      date: 'March 2, 2026',
      readTime: '8 min read',
      author: 'Biology Faculty',
      tags: ['#Biology', '#Genetics', '#IB', '#Science'],
      likes: 145,
      comments: 7,
      views: 823,
      year: 2026
    },
    {
      id: 12,
      category: 'Economics',
      title: 'Macroeconomics Concepts Simplified',
      excerpt: 'Breaking down complex macroeconomic theories into simple, understandable concepts with real-world applications.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600',
      date: 'February 28, 2026',
      readTime: '7 min read',
      author: 'Economics Faculty',
      tags: ['#Economics', '#Macroeconomics', '#IB', '#Theory'],
      likes: 98,
      comments: 5,
      views: 672,
      year: 2026
    },
    {
      id: 13,
      category: 'CAS',
      title: 'Creative Ideas for IB CAS Projects',
      excerpt: 'Innovative and impactful CAS project ideas that fulfill all requirements while making a real difference in the community.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600',
      date: 'February 25, 2026',
      readTime: '5 min read',
      author: 'CAS Coordinator',
      tags: ['#CAS', '#Creativity', '#Activity', '#Service'],
      likes: 186,
      comments: 13,
      views: 1087,
      year: 2026
    },
    {
      id: 14,
      category: 'Study Tips',
      title: 'Effective Note-Taking Methods for IB',
      excerpt: 'Learn proven note-taking techniques that enhance retention, understanding, and exam preparation for IB students.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600',
      date: 'February 22, 2026',
      readTime: '6 min read',
      author: 'Study Skills Expert',
      tags: ['#NoteTaking', '#StudySkills', '#IB', '#Learning'],
      likes: 203,
      comments: 16,
      views: 1198,
      year: 2026
    },
    {
      id: 15,
      category: 'English',
      title: 'IB English Literature: Analysis Techniques',
      excerpt: 'Master literary analysis with effective techniques for understanding themes, characters, and authorial intent in IB texts.',
      image: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=600',
      date: 'February 18, 2026',
      readTime: '8 min read',
      author: 'English Faculty',
      tags: ['#English', '#Literature', '#Analysis', '#IB'],
      likes: 128,
      comments: 8,
      views: 764,
      year: 2026
    },
    {
      id: 16,
      category: 'Exam Prep',
      title: 'Last Minute IB Exam Preparation Guide',
      excerpt: 'Strategic tips and techniques for last-minute exam preparation to maximize your performance under time constraints.',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600',
      date: 'February 15, 2026',
      readTime: '7 min read',
      author: 'Exam Strategy Team',
      tags: ['#ExamPrep', '#LastMinute', '#Strategy', '#IB'],
      likes: 267,
      comments: 22,
      views: 1556,
      year: 2026
    }
  ];

  // Filter and sort blogs
  const getFilteredBlogs = () => {
    let filtered = [...allBlogPosts];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Year filter
    if (yearFilter !== 'all') {
      filtered = filtered.filter(blog => blog.year === parseInt(yearFilter));
    }

    // Sort
    switch (sortBy) {
      case 'latest':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'popular':
        filtered.sort((a, b) => b.views - a.views);
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'discussed':
        filtered.sort((a, b) => b.comments - a.comments);
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredBlogs = getFilteredBlogs();

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80)',
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3A63EB]/90 to-[#5478F0]/90"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
            All Blogs
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Browse all articles, tips and insights from IBClassesOnline
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 md:py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title or content..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A63EB] focus:border-[#3A63EB] outline-none transition-all text-sm sm:text-base"
              />
            </div>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#3A63EB] text-white font-semibold rounded-lg hover:bg-[#2952d9] transition-all shadow-md hover:shadow-lg">
              Search
            </button>
          </div>

          {/* Sort and Filter Options */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-3">
            <div className="flex items-center gap-2 text-gray-600">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="font-semibold text-sm">SORT:</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 md:gap-3 flex-1">
              <button
                onClick={() => setSortBy('latest')}
                className={`px-4 sm:px-6 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all ${
                  sortBy === 'latest'
                    ? 'bg-[#3A63EB] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Latest
              </button>
              
              <button
                onClick={() => setSortBy('popular')}
                className={`px-4 sm:px-6 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all ${
                  sortBy === 'popular'
                    ? 'bg-[#3A63EB] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Popular
              </button>
              
              <button
                onClick={() => setSortBy('oldest')}
                className={`px-4 sm:px-6 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all ${
                  sortBy === 'oldest'
                    ? 'bg-[#3A63EB] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Oldest
              </button>
              
              <button
                onClick={() => setSortBy('discussed')}
                className={`px-4 sm:px-6 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all whitespace-nowrap ${
                  sortBy === 'discussed'
                    ? 'bg-[#3A63EB] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Most Discussed
              </button>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <Calendar className="w-4 h-4 text-gray-600" />
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="flex-1 md:flex-none px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A63EB] outline-none bg-white font-semibold text-xs sm:text-sm"
              >
                <option value="all">All Years</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-4 md:py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gray-600 font-semibold text-sm sm:text-base">
            {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} found
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredBlogs.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                {/* Post Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg text-xs font-bold text-white shadow-lg ${
                      post.category === 'IB Guide' ? 'bg-gradient-to-r from-[#EB5213] to-[#FF8C5A]' :
                      post.category === 'Study Tips' ? 'bg-gradient-to-r from-[#3A63EB] to-[#6B8FFF]' :
                      post.category === 'Success Stories' ? 'bg-gradient-to-r from-[#10B981] to-[#34D399]' :
                      post.category === 'Subject Guide' ? 'bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]' :
                      post.category === 'IB Core' ? 'bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]' :
                      post.category === 'TOK' ? 'bg-gradient-to-r from-[#EC4899] to-[#F472B6]' :
                      post.category === 'CAS' ? 'bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF]' :
                      'bg-gradient-to-r from-[#6366F1] to-[#818CF8]'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 hover:text-[#3A63EB] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-[#3A63EB] hover:underline cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Engagement Metrics */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer transition-colors">
                        <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer transition-colors">
                        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500">
                      {post.date.split(',')[0]}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-12 sm:py-20 px-4">
              <div className="inline-block p-4 sm:p-6 bg-gray-100 rounded-full mb-4">
                <Search className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setYearFilter('all');
                  setSortBy('latest');
                }}
                className="px-6 py-3 bg-[#3A63EB] text-white font-semibold rounded-lg hover:bg-[#2952d9] transition-all text-sm sm:text-base"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Back to Blog CTA */}
      <section className="py-8 sm:py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            Want to share your knowledge?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Write your own blog and inspire other students
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/submit-blog"
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-[#EB5213] to-[#FF8C5A] text-white font-semibold rounded-lg hover:shadow-xl transition-all text-sm sm:text-base"
            >
              Submit Your Blog
            </Link>
            <Link
              to="/blog"
              className="px-6 sm:px-8 py-3 bg-white text-[#3A63EB] border-2 border-[#3A63EB] font-semibold rounded-lg hover:bg-gray-50 transition-all text-sm sm:text-base"
            >
              Back to Blog Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllBlogs;
