import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LearningFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(3);

  const features = [
    {
      title: "Interactive Live Classes",
      description: "Engage in real-time learning with our expert IB tutors through interactive virtual classrooms.",
      video: "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/b0f83d25-ebe3-45f2-a7ac-fd2065bc75c5.mp4",
      color: "border-[#10B981]"
    },
    {
      title: "The Two-Teacher Model",
      description: "Benefit from dual expertise with subject specialists and pedagogical mentors working together.",
      video: "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/27f09fef-f89b-4ba9-9c78-30b4a5c42358.mp4",
      color: "border-[#0EA5E9]"
    },
    {
      title: "Tailored Practice Solutions",
      description: "Customized practice materials designed specifically for your learning pace and style.",
      video: "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/c48cfce2-0a81-437a-8c83-98f993be654f.mp4",
      color: "border-[#10B981]"
    },
    {
      title: "Homework Assistance",
      description: "No more homework struggles! Get real-time homework support from our Mentors.",
      video: "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/c48cfce2-0a81-437a-8c83-98f993be654f.mp4",

      color: "border-[#0EA5E9]"
    },
    {
      title: "Daily Performance Tracking",
      description: "Monitor your progress with detailed analytics and personalized feedback every day.",
      video: "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/fbb16af4-8e44-4382-bec8-b00541f38246.mp4",
      color: "border-[#10B981]"
    },
    {
      title: "Extended Essay & TOK Support",
      description: "Expert guidance for IB's Extended Essay and Theory of Knowledge components.",
      video: "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/b0f83d25-ebe3-45f2-a7ac-fd2065bc75c5.mp4",
      color: "border-[#0EA5E9]"
    }
  ];

  return (
    <section className="relative py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      
      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { 
          animation: fade-in 0.5s ease-out forwards; 
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02) translateY(-4px);
        }
      `}</style>
      
      {/* Background Image with Enhanced Visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80')"
        }}
      ></div>
      
      {/* Reduced White Overlay for Better Background Visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-50/40 to-slate-50/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16" data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-3 sm:mb-4 md:mb-5 leading-tight font-serif px-4" style={{fontFamily: 'Georgia, serif'}}>
            Hand's-On Learning 
            <span className="text-blue-700"> and More!</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-800 font-medium px-4">
            Explore Our Latest Features
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10 items-start">
          {/* Left Sidebar - Features List */}
          <div className="space-y-3 sm:space-y-4" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
            {features.map((feature, index) => (
              <div 
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl transition-all duration-500 cursor-pointer border-2 transform hover:-translate-y-1 hover:scale-102 ${
                  activeFeature === index 
                    ? `bg-gradient-to-br from-blue-50 to-white shadow-2xl border-blue-300 ring-2 ring-blue-200 ring-opacity-50` 
                    : 'bg-gradient-to-br from-slate-50 to-white shadow-lg hover:shadow-xl border-blue-100 hover:border-blue-200 hover:from-blue-50 hover:to-white'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="500"
              >
                <h3 className={`font-bold text-sm sm:text-base md:text-lg mb-2 transition-colors duration-300 ${
                  activeFeature === index ? 'text-black' : 'text-orange-600'
                }`}>
                  {feature.title}
                </h3>
                {activeFeature === index && (
                  <p className="text-xs sm:text-sm md:text-base text-orange-600 font-medium leading-relaxed animate-fade-in">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Video Display */}
          <div className="md:col-span-2 mt-6 md:mt-0" data-aos="fade-left" data-aos-offset="500" data-aos-duration="600">
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-blue-200 backdrop-blur-sm">
              <div className="relative">
                {/* Video Element */}
                <video
                  key={features[activeFeature].video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-xl sm:rounded-2xl shadow-2xl w-full object-cover transition-all duration-500 border-2 border-blue-200"
                  style={{ maxHeight: '350px', height: 'auto' }}
                >
                  <source src={features[activeFeature].video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Floating Elements */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl hidden md:block border border-blue-200">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-bold text-black">Live Now</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl hidden lg:block border-2 border-blue-500">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold">100+</div>
                    <div className="text-xs sm:text-sm font-medium">Active Students</div>
                  </div>
                </div>

                {/* Feature Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-xl sm:rounded-2xl shadow-xl border border-blue-200">
                  <span className="text-xs sm:text-sm font-bold text-black">
                    {features[activeFeature].title}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10 md:mt-12 text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-translate-y-2 active:scale-95 border-2 border-orange-500 hover:border-orange-600 relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-200 rounded-2xl"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningFeatures;
