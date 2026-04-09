import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PenTool, Upload, Eye, CheckCircle, Mail, Send } from 'lucide-react';

const SubmitBlog = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showDraftNotification, setShowDraftNotification] = useState(false);
  const [lastSaved, setLastSaved] = useState('');
  
  // Form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    blogTitle: '',
    excerpt: '',
    content: '',
    tags: '',
    featuredImage: null,
    imageUrl: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check for saved draft on mount
  useEffect(() => {
    const savedDraft = localStorage.getItem('blogDraft');
    const savedTime = localStorage.getItem('blogDraftTime');
    if (savedDraft && savedTime) {
      setShowDraftNotification(true);
      setLastSaved(savedTime);
    }
  }, []);

  // Auto-save draft
  useEffect(() => {
    if (formData.blogTitle || formData.content) {
      const timer = setTimeout(() => {
        const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
        localStorage.setItem('blogDraft', JSON.stringify(formData));
        localStorage.setItem('blogDraftTime', time);
        setLastSaved(time);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, featuredImage: 'Image size should be less than 5MB' }));
        return;
      }
      setFormData(prev => ({ ...prev, featuredImage: file }));
      setErrors(prev => ({ ...prev, featuredImage: '' }));
    }
  };

  const restoreDraft = () => {
    const savedDraft = localStorage.getItem('blogDraft');
    if (savedDraft) {
      setFormData(JSON.parse(savedDraft));
      setShowDraftNotification(false);
    }
  };

  const discardDraft = () => {
    localStorage.removeItem('blogDraft');
    localStorage.removeItem('blogDraftTime');
    setShowDraftNotification(false);
  };

  const saveDraft = () => {
    const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    localStorage.setItem('blogDraft', JSON.stringify(formData));
    localStorage.setItem('blogDraftTime', time);
    setLastSaved(time);
    alert('Draft saved successfully!');
  };

  const validateStep1 = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[\d\s\+\-\(\)]{10,}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid mobile number';
    }
    if (!formData.blogTitle.trim()) newErrors.blogTitle = 'Blog title is required';
    if (!formData.excerpt.trim()) newErrors.excerpt = 'Excerpt is required';
    if (!formData.content.trim()) newErrors.content = 'Content is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Submitting blog:', formData);
    setIsSubmitted(true);
    
    // Clear draft after submission
    localStorage.removeItem('blogDraft');
    localStorage.removeItem('blogDraftTime');
    
    // Redirect after 3 seconds
    setTimeout(() => {
      navigate('/blog');
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-lg">
          <div className="inline-block p-4 sm:p-6 bg-green-100 rounded-full mb-4 sm:mb-6">
            <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Blog Submitted Successfully!</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Thank you for sharing your knowledge. We'll review your blog and publish it soon.</p>
          <Link to="/blog" className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-[#0071BD] text-white font-semibold rounded-lg hover:bg-[#005a9c] transition-all">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-r from-[#0071BD] to-[#005a9c] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block p-2.5 sm:p-3 bg-white/10 rounded-lg mb-3 sm:mb-4">
            <PenTool className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 font-serif" style={{fontFamily: 'Georgia, serif'}}>
            Submit Your Blog
          </h1>
          <p className="text-base sm:text-xl text-white/90">
            Share your knowledge with IBClassesOnline students & parents
          </p>
        </div>
      </section>

      {/* Draft Notification */}
      {showDraftNotification && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-6 sm:mt-8">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3 sm:gap-4">
              <div className="p-2 bg-yellow-100 rounded-lg flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-900">Unsaved draft found</p>
                <p className="text-xs sm:text-sm text-gray-600">Last saved at {lastSaved}</p>
              </div>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={restoreDraft}
                className="flex-1 sm:flex-none px-4 sm:px-6 py-2 text-sm sm:text-base bg-[#0071BD] text-white font-semibold rounded-lg hover:bg-[#005a9c] transition-all"
              >
                Restore
              </button>
              <button
                onClick={discardDraft}
                className="flex-1 sm:flex-none px-4 sm:px-6 py-2 text-sm sm:text-base bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step Indicator */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
              currentStep >= 1 ? 'bg-[#0071BD] text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              1
            </div>
            <span className={`mt-2 text-sm font-semibold ${currentStep >= 1 ? 'text-[#0071BD]' : 'text-gray-400'}`}>
              Write
            </span>
          </div>
          
          <div className={`h-1 w-24 ${currentStep >= 2 ? 'bg-[#0071BD]' : 'bg-gray-200'}`}></div>
          
          <div className="flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
              currentStep >= 2 ? 'bg-[#0071BD] text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              2
            </div>
            <span className={`mt-2 text-sm font-semibold ${currentStep >= 2 ? 'text-[#0071BD]' : 'text-gray-400'}`}>
              Verify
            </span>
          </div>
          
          <div className={`h-1 w-24 ${currentStep >= 3 ? 'bg-[#0071BD]' : 'bg-gray-200'}`}></div>
          
          <div className="flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
              currentStep >= 3 ? 'bg-[#0071BD] text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              3
            </div>
            <span className={`mt-2 text-sm font-semibold ${currentStep >= 3 ? 'text-[#0071BD]' : 'text-gray-400'}`}>
              Submit
            </span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 border border-gray-100">
          {/* Step 1: Write Your Blog */}
          {currentStep === 1 && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif" style={{fontFamily: 'Georgia, serif'}}>
                  Write Your Blog
                </h2>
                <button
                  onClick={saveDraft}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm sm:text-base text-[#0071BD] hover:bg-blue-50 rounded-lg transition-all"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                  <span className="font-semibold">Save Draft</span>
                  {lastSaved && <span className="text-xs sm:text-sm text-gray-500">· {lastSaved}</span>}
                </button>
              </div>

              <form className="space-y-6">
                {/* Full Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      FULL NAME <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0071BD] outline-none transition-all ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      EMAIL <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0071BD] outline-none transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    MOBILE <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0071BD] outline-none transition-all ${
                      errors.mobile ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                </div>

                {/* Blog Title */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    BLOG TITLE <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="blogTitle"
                    value={formData.blogTitle}
                    onChange={handleInputChange}
                    placeholder="An amazing title..."
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0071BD] outline-none transition-all ${
                      errors.blogTitle ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.blogTitle && <p className="text-red-500 text-sm mt-1">{errors.blogTitle}</p>}
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    EXCERPT <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    placeholder="Brief summary (2-3 sentences)"
                    rows="3"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0071BD] outline-none transition-all ${
                      errors.excerpt ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.excerpt && <p className="text-red-500 text-sm mt-1">{errors.excerpt}</p>}
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      CONTENT <span className="text-red-500">*</span>
                    </label>
                    <button type="button" className="flex items-center gap-1 text-[#0071BD] text-sm hover:underline">
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                  </div>
                  
                  {/* Editor Toolbar */}
                  <div className="border border-gray-300 rounded-t-lg bg-gray-50 p-2 flex flex-wrap gap-1">
                    <button type="button" className="p-2 hover:bg-gray-200 rounded" title="Bold">
                      <strong>B</strong>
                    </button>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded" title="Italic">
                      <em>I</em>
                    </button>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded" title="Underline">
                      <u>U</u>
                    </button>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded" title="Strikethrough">
                      <s>S</s>
                    </button>
                    <div className="w-px h-8 bg-gray-300"></div>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded text-sm">H1</button>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded text-sm">H2</button>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded text-sm">H3</button>
                    <div className="w-px h-8 bg-gray-300"></div>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded" title="Bullet List">≡</button>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded" title="Numbered List">1.</button>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded" title="Link">🔗</button>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded" title="Image">🖼️</button>
                  </div>
                  
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Write your blog content here..."
                    rows="12"
                    className={`w-full px-4 py-3 border border-t-0 rounded-b-lg focus:ring-2 focus:ring-[#0071BD] outline-none transition-all font-mono text-sm ${
                      errors.content ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    TAGS (COMMA SEPARATED)
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="study-tips, cbse, math"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0071BD] outline-none transition-all"
                  />
                </div>

                {/* Featured Image */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    FEATURED IMAGE (OPTIONAL)
                  </label>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 md:p-8 text-center hover:border-[#0071BD] transition-all">
                    <div className="mb-3 sm:mb-4">
                      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-1">Drag & drop image here</p>
                    <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">JPG, PNG, WebP · Max 5MB</p>
                    <label className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 text-sm sm:text-base bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 cursor-pointer transition-all">
                      <Upload className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Upload from Device
                      <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                    </label>
                  </div>
                  {errors.featuredImage && <p className="text-red-500 text-sm mt-1">{errors.featuredImage}</p>}

                  <p className="text-sm text-gray-600 mt-4 mb-2">Or paste image URL:</p>
                  <input
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0071BD] outline-none transition-all"
                  />
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-[#0071BD] text-white font-semibold rounded-lg hover:bg-[#005a9c] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Next: Verify Email
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>
          )}

          {/* Step 2: Verify Email */}
          {currentStep === 2 && (
            <div className="text-center py-8 sm:py-12">
              <div className="inline-block p-4 sm:p-6 bg-blue-100 rounded-full mb-4 sm:mb-6">
                <Mail className="w-12 h-12 sm:w-16 sm:h-16 text-[#0071BD]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
                Verify Your Email
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto px-4">
                We've sent a verification code to <strong>{formData.email}</strong>
              </p>
              
              <div className="max-w-md mx-auto space-y-4 sm:space-y-6 px-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Enter Verification Code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter 6-digit code"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0071BD] outline-none transition-all text-center text-xl sm:text-2xl tracking-widest"
                    maxLength="6"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-[#0071BD] text-white font-semibold rounded-lg hover:bg-[#005a9c] transition-all shadow-lg hover:shadow-xl"
                >
                  Verify & Continue
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="w-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base text-gray-600 hover:text-gray-900 font-semibold"
                >
                  ← Back to Edit
                </button>

                <p className="text-xs sm:text-sm text-gray-500">
                  Didn't receive the code?{' '}
                  <button className="text-[#0071BD] hover:underline font-semibold">
                    Resend
                  </button>
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Review & Submit */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center font-serif" style={{fontFamily: 'Georgia, serif'}}>
                Review Your Blog
              </h2>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-2">Blog Title</h3>
                  <p className="text-sm sm:text-base text-gray-900">{formData.blogTitle}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-2">Excerpt</h3>
                  <p className="text-sm sm:text-base text-gray-900">{formData.excerpt}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-2">Content Preview</h3>
                  <p className="text-sm sm:text-base text-gray-900 whitespace-pre-wrap line-clamp-6">{formData.content}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-2">Author Information</h3>
                  <p className="text-sm sm:text-base text-gray-900">{formData.fullName} · {formData.email}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
                >
                  ← Edit Blog
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Submit Blog
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmitBlog;
