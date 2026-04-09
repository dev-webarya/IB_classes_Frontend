import React from 'react';
import { Link } from 'react-router-dom';

const Vision = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80)',
          }}
        ></div>
        
        {/* Blue and Orange Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0071BD]/80 via-[#FF6B35]/70 to-[#0071BD]/80 z-10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl z-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl z-20"></div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-6 py-8 text-center" data-aos="fade-up">
          {/* Logo Display */}
          <div className="mb-4 flex justify-center" data-aos="zoom-in" data-aos-delay="100">
            <img 
              src="/image.png" 
              alt="IBClassesOnline Logo" 
              className="h-16 md:h-20 drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight font-serif text-white drop-shadow-2xl" style={{fontFamily: 'Georgia, serif'}} data-aos="fade-up" data-aos-delay="200">
            <span>Our</span> <span className="text-[#FFD700]">Vision</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg" data-aos="fade-up" data-aos-delay="300">
            Shaping the Future of Education in India
          </p>
        </div>
      </section>

      {/* Main Vision Statement */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=80)',
          }}
        ></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0071BD] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-6" data-aos="fade-right">
              <div className="inline-block px-5 py-2 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full text-sm font-semibold">
                Our Vision
              </div>
              
              <h2 className="text-4xl md:text-4xl font-bold leading-tight font-serif" style={{fontFamily: 'Georgia, serif'}}>
                <span className="text-black">India's Most</span> <br/>
                <span className="text-[#0071BD]">Trusted Platform</span>
              </h2>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] rounded-full"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Our vision is to become <strong className="text-[#0071BD]">India's most trusted and result-driven online tutoring platform</strong> for school students by delivering exceptional academic support and creating meaningful learning experiences.
              </p>

              {/* Vision Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-6 bg-gradient-to-br from-[#0071BD]/10 to-[#0071BD]/5 rounded-xl border border-[#0071BD]/20 hover:scale-105 transition-transform" data-aos="zoom-in" data-aos-delay="100">
                  <div className="text-4xl font-bold text-[#0071BD] mb-2">🎯</div>
                  <div className="text-sm text-gray-600 font-semibold">Result-Driven</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 rounded-xl border border-[#FF6B35]/20 hover:scale-105 transition-transform" data-aos="zoom-in" data-aos-delay="200">
                  <div className="text-4xl font-bold text-[#FF6B35] mb-2">⭐</div>
                  <div className="text-sm text-gray-600 font-semibold">Trusted</div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative" data-aos="fade-left">
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[#0071BD]/20 to-[#FF6B35]/20 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800" 
                alt="Our Vision" 
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#FF6B35] to-[#0071BD] text-white p-8 rounded-xl shadow-xl max-w-xs">
                <h3 className="text-2xl font-bold mb-2 font-serif" style={{fontFamily: 'Georgia, serif'}}>Excellence Guaranteed</h3>
                <p className="text-white/90 text-sm">Exceptional Academic Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Vision Pillars */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-blue-50/30 to-white"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#0071BD] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-5 py-2 bg-[#0071BD]/10 text-[#0071BD] rounded-full text-sm font-semibold mb-4">
              Three Pillars of Our Vision
            </div>
            <h2 className="text-4xl md:text-4xl font-bold mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-black">Building the</span> <span className="text-[#0071BD]">Future</span>
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#0071BD] via-[#FF6B35] to-[#0071BD] rounded-full"></div>
            </div>
          </div>

          {/* Vision Cards */}
          <div className="space-y-16">
            {/* Pillar 1 - Community */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative" data-aos="fade-right">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#FF6B35]/20 to-[#0071BD]/20 rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" 
                  alt="Community" 
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#FF6B35] to-[#0071BD] text-white p-8 rounded-xl shadow-xl max-w-xs">
                  <div className="text-5xl font-bold mb-2 font-serif" style={{fontFamily: 'Georgia, serif'}}>01</div>
                  <div className="text-sm text-white/80">Pillar</div>
                </div>
              </div>

              <div className="space-y-6" data-aos="fade-left">
                <div className="inline-block px-5 py-2 bg-[#0071BD]/10 text-[#0071BD] rounded-full text-sm font-semibold">
                  Pillar 1
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-serif" style={{fontFamily: 'Georgia, serif'}}>
                  <span className="text-black">Inclusive</span> <span className="text-[#0071BD]">Community</span>
                </h3>
                <div className="w-20 h-1 bg-[#0071BD] rounded-full"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We aim to build a community where <strong className="text-[#0071BD]">every student, regardless of background or location</strong>, receives the guidance and encouragement needed to unlock their full potential.
                </p>
                <div className="bg-gradient-to-r from-[#0071BD]/5 to-[#FF6B35]/5 p-6 rounded-xl border-l-4 border-[#0071BD]">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[#0071BD] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Equal Access for All</h4>
                        <p className="text-gray-600 text-sm">Quality education regardless of background</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#0071BD] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Personal Guidance</h4>
                        <p className="text-gray-600 text-sm">Individual support for every learner</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#0071BD] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Unlock Full Potential</h4>
                        <p className="text-gray-600 text-sm">Empowering students to achieve their dreams</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2 - Inspiring Education */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-1" data-aos="fade-right">
                <div className="inline-block px-5 py-2 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full text-sm font-semibold">
                  Pillar 2
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-serif" style={{fontFamily: 'Georgia, serif'}}>
                  <span className="text-black">Inspiring</span> <span className="text-[#0071BD]">Education</span>
                </h3>
                <div className="w-20 h-1 bg-[#FF6B35] rounded-full"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  IBClassesOnline envisions a future in which education is <strong className="text-[#FF6B35]">inspiring, engaging, and future-ready</strong>—where students learn with joy, think creatively, and develop the skills to lead with confidence.
                </p>
                <div className="bg-gradient-to-r from-[#FF6B35]/5 to-[#0071BD]/5 p-6 rounded-xl border-l-4 border-[#FF6B35]">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[#FF6B35] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Joyful Learning</h4>
                        <p className="text-gray-600 text-sm">Making education enjoyable and engaging</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#FF6B35] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Creative Thinking</h4>
                        <p className="text-gray-600 text-sm">Fostering innovation and problem-solving</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#FF6B35] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Future-Ready Skills</h4>
                        <p className="text-gray-600 text-sm">Preparing for tomorrow's world</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:order-2" data-aos="fade-left">
                <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[#0071BD]/20 to-[#FF6B35]/20 rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800" 
                  alt="Inspiring Education" 
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] text-white p-8 rounded-xl shadow-xl max-w-xs">
                  <div className="text-5xl font-bold mb-2 font-serif" style={{fontFamily: 'Georgia, serif'}}>02</div>
                  <div className="text-sm text-white/80">Pillar</div>
                </div>
              </div>
            </div>

            {/* Pillar 3 - Leadership */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative" data-aos="fade-right">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#FF6B35]/20 to-[#0071BD]/20 rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800" 
                  alt="Leadership" 
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#FF6B35] to-[#0071BD] text-white p-8 rounded-xl shadow-xl max-w-xs">
                  <div className="text-5xl font-bold mb-2 font-serif" style={{fontFamily: 'Georgia, serif'}}>03</div>
                  <div className="text-sm text-white/80">Pillar</div>
                </div>
              </div>

              <div className="space-y-6" data-aos="fade-left">
                <div className="inline-block px-5 py-2 bg-[#0071BD]/10 text-[#0071BD] rounded-full text-sm font-semibold">
                  Pillar 3
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-serif" style={{fontFamily: 'Georgia, serif'}}>
                  <span className="text-black">Confident</span> <span className="text-[#0071BD]">Leaders</span>
                </h3>
                <div className="w-20 h-1 bg-[#0071BD] rounded-full"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We develop the skills students need to <strong className="text-[#0071BD]">lead with confidence in a rapidly changing world</strong>, preparing them not just for exams, but for life.
                </p>
                <div className="bg-gradient-to-r from-[#0071BD]/5 to-[#FF6B35]/5 p-6 rounded-xl border-l-4 border-[#0071BD]">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[#0071BD] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Confidence Building</h4>
                        <p className="text-gray-600 text-sm">Empowering students with self-assurance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#0071BD] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Life Skills Development</h4>
                        <p className="text-gray-600 text-sm">Beyond academics, for real-world success</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#0071BD] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Future Leaders</h4>
                        <p className="text-gray-600 text-sm">Preparing tomorrow's changemakers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-12"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 via-white to-[#0071BD]/5"></div>
        
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#0071BD] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-5 py-2 bg-[]/10 text-[#3547ad] rounded-full text-sm font-semibold mb-4">
              Our Vision in Action
            </div>
            <h2 className="text-4xl md:text-4xl font-bold mb-6 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-black">Creating</span> <span className="text-[#0071BD]">Impact</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#FF6B35] via-[#0071BD] to-[#FF6B35] rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#FF6B35]/30 hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#FF6B35]/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 font-serif" style={{fontFamily: 'Georgia, serif'}}>Empowering Students</h3>
              <p className="text-gray-600 leading-relaxed">
                Giving students the tools, confidence, and knowledge to excel in the IB program and beyond.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0071BD]/30 hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0071BD] to-[#0071BD]/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 font-serif" style={{fontFamily: 'Georgia, serif'}}>Shaping Futures</h3>
              <p className="text-gray-600 leading-relaxed">
                Preparing students not just for academic success, but for a lifetime of meaningful achievements.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#FF6B35]/30 hover:scale-105" data-aos="zoom-in" data-aos-delay="300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#0071BD] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 font-serif" style={{fontFamily: 'Georgia, serif'}}>Building Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating a supportive global network where students thrive, connect, and grow together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-12"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0071BD]/10 via-white to-[#FF6B35]/10"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0071BD] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              {/* Logo */}
              <div className="flex justify-center mb-8" data-aos="zoom-in">
                <div className="bg-gradient-to-br from-[#0071BD]/5 to-[#FF6B35]/5 rounded-2xl p-4 shadow-lg">
                  <img 
                    src="/image.png" 
                    alt="IBClassesOnline Logo" 
                    className="h-16 md:h-20"
                  />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif" style={{fontFamily: 'Georgia, serif'}} data-aos="fade-up">
                <span className="text-black">Be Part of Our</span> <span className="text-[#0071BD]">Vision</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Join thousands of students who are already experiencing the future of education. Let's build a brighter tomorrow together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
                <Link to="/contact-us" className="group px-10 py-5 bg-gradient-to-r from-[#FF6B35] to-[#E85A24] text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg text-center">
                  <span className="flex items-center justify-center gap-2">
                    Start Your Journey
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link to="/online-classes" className="px-10 py-5 bg-white text-[#0071BD] font-bold rounded-xl border-2 border-[#0071BD] hover:bg-[#0071BD] hover:text-white transition-all duration-300 hover:scale-105 text-lg shadow-lg text-center">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;