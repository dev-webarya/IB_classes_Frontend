import React from 'react';

const FounderMessage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/hero2.png" 
            alt="Founder Message Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0071BD]/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-center text-white">
          {/* Logo Display */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/logo (3).png" 
              alt="IBClassesOnline Logo" 
              className="h-24 md:h-28 drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight font-serif" style={{fontFamily: 'Georgia, serif'}}>
            <span className="text-[#FF6B35]">Message from</span> <span className="text-[#0071BD]">Rohit Sir</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Founder & Director, IBClassesOnline
          </p>
        </div>
      </section>

      {/* Welcome Section with Rohit Sir's Image */}
      <section className="py-12 bg-white relative overflow-hidden">
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
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Rohit Sir's Image - Professional Card Style */}
            <div className="lg:col-span-2" data-aos="fade-down-right">
              <div className="sticky top-24">
                <div className="relative group">
                  {/* Decorative background */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#0071BD]/20 via-[#FF6B35]/20 to-[#0071BD]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  
                  {/* Image Container */}
                  <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                    <img 
                      src="/sir1.png" 
                      alt="Rohit Gupta - Founder" 
                      className="w-full object-cover"
                    />
                    
                    {/* Name Badge */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/95 to-transparent p-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          Rohit Gupta
                        </h3>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] mx-auto mb-2"></div>
                        <p className="text-white/90 text-sm font-semibold">Founder & Director</p>
                        <p className="text-white/80 text-xs mt-1">IBClassesOnline</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] rounded-2xl shadow-xl p-4 transform rotate-3 group-hover:rotate-6 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">25+</div>
                      <div className="text-xs text-white/90 font-semibold">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-3 space-y-6" data-aos="fade-down-left">
              {/* Welcome Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0071BD]/10 to-[#FF6B35]/10 text-[#0071BD] rounded-full text-sm font-bold border border-[#0071BD]/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                A Personal Message
              </div>
              
              <h2 className="text-3xl md:text-3xl font-bold leading-tight font-serif" style={{fontFamily: 'Georgia, serif'}}>
                <span className="text-gray-900">Dear Students</span> <br/>
                <span className="text-[#0071BD]">and Parents</span>
              </h2>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] rounded-full"></div>
              
              {/* Message Content */}
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  It gives me <strong className="text-[#0071BD]">immense pride and joy</strong> to welcome you to IBClassesOnline.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  When we founded IBClassesOnline more than <strong className="text-[#FF6B35]">25 years ago</strong>, our vision was simple yet powerful — to create a learning environment where every student receives personal attention, builds strong conceptual clarity, and gains the confidence to excel academically and in life.
                </p>

                <div className="bg-gradient-to-r from-[#0071BD]/5 to-[#FF6B35]/5 p-8 rounded-2xl border-l-4 border-[#0071BD]">
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "Over the years, this vision has grown into a trusted educational platform supported by a team of highly experienced teachers and mentors who are passionate about student success."
                  </p>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  At IBClassesOnline, we believe that <strong className="text-[#0071BD]">education is not just about marks</strong>, but about <strong className="text-[#FF6B35]">shaping thinking, nurturing curiosity, and developing discipline and self-belief</strong>. We have seen students transform from struggling to outstanding performers when they are guided correctly, encouraged consistently, and taught with care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach Section */}
      <section className="py-12 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-12"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0071BD]/5 via-white to-[#FF6B35]/5"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0071BD] rounded-full blur-3xl"></div>
        </div>

        <style>{`
          .approach-card {
            position: relative;
            overflow: hidden;
            z-index: 0;
          }
          
          .approach-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to right, #2563eb, #ea580c);
            transform: translateY(100%);
            transition: transform 0.3s ease;
            z-index: -1;
          }
          
          .approach-card:hover::before {
            transform: translateY(0%);
          }
          
          .approach-card:hover .card-text {
            color: rgba(255, 255, 255, 0.95);
            transition: color 0.5s ease-out 0.1s;
          }
          
          .approach-card:hover .card-title {
            color: white;
            transition: color 0.5s ease-out 0.1s;
          }
          
          .approach-card:hover .icon-box {
            background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%);
            border: 2px solid white;
            transition: all 0.5s ease-out 0.1s;
          }
          
          .approach-card:hover .icon-svg {
            color: white;
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
            transition: all 0.5s ease-out 0.1s;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0071BD]/10 to-[#FF6B35]/10 text-[#0071BD] rounded-full text-sm font-bold border border-[#0071BD]/20 mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Our Teaching Methodology
            </div>
            <h2 className="text-3xl md:text-3xl font-bold mb-6 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-gray-900">Our Approach is</span> <span className="text-[#0071BD]">Rooted In</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#0071BD] via-[#FF6B35] to-[#0071BD] rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Approach Card 1 */}
            <div className="approach-card group bg-gradient-to-br from-blue-100 via-blue-200 to-orange-100 rounded-2xl p-8 shadow-xl border border-blue-50 hover:shadow-2xl transition-all duration-500 h-full hover:scale-105" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-box w-14 h-14 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="icon-svg w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                  </svg>
                </div>
                <h3 className="card-title text-xl font-bold text-gray-800 font-serif" style={{fontFamily: 'Georgia, serif'}}>Deep Subject Understanding</h3>
              </div>
              <p className="card-text text-gray-600 leading-relaxed">Comprehensive coverage of concepts with clarity and depth</p>
            </div>

            {/* Approach Card 2 */}
            <div className="approach-card group bg-gradient-to-br from-orange-100 via-orange-200 to-blue-100 rounded-2xl p-8 shadow-xl border border-orange-50 hover:shadow-2xl transition-all duration-500 h-full hover:scale-105" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-box w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#0071BD] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="icon-svg w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                </div>
                <h3 className="card-title text-xl font-bold text-gray-800 font-serif" style={{fontFamily: 'Georgia, serif'}}>Small Focused Batches</h3>
              </div>
              <p className="card-text text-gray-600 leading-relaxed">Limited class sizes for personalized attention and interaction</p>
            </div>

            {/* Approach Card 3 */}
            <div className="approach-card group bg-gradient-to-br from-blue-100 via-orange-100 to-blue-200 rounded-2xl p-8 shadow-xl border border-blue-50 hover:shadow-2xl transition-all duration-500 h-full hover:scale-105" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-box w-14 h-14 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="icon-svg w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="card-title text-xl font-bold text-gray-800 font-serif" style={{fontFamily: 'Georgia, serif'}}>Structured Learning</h3>
              </div>
              <p className="card-text text-gray-600 leading-relaxed">Regular assessments and systematic progress tracking</p>
            </div>

            {/* Approach Card 4 */}
            <div className="approach-card group bg-gradient-to-br from-orange-100 via-blue-100 to-orange-200 rounded-2xl p-8 shadow-xl border border-orange-50 hover:shadow-2xl transition-all duration-500 h-full hover:scale-105" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-box w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#0071BD] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="icon-svg w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="card-title text-xl font-bold text-gray-800 font-serif" style={{fontFamily: 'Georgia, serif'}}>Personalized Attention</h3>
              </div>
              <p className="card-text text-gray-600 leading-relaxed">Individual mentorship and customized learning paths</p>
            </div>

            {/* Approach Card 5 */}
            <div className="approach-card group bg-gradient-to-br from-blue-100 via-blue-200 to-orange-100 rounded-2xl p-8 shadow-xl border border-blue-50 hover:shadow-2xl transition-all duration-500 h-full hover:scale-105" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-box w-14 h-14 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="icon-svg w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h3 className="card-title text-xl font-bold text-gray-800 font-serif" style={{fontFamily: 'Georgia, serif'}}>Strong Fundamentals</h3>
              </div>
              <p className="card-text text-gray-600 leading-relaxed">Emphasis on building solid conceptual foundations</p>
            </div>

            {/* Approach Card 6 */}
            <div className="approach-card group bg-gradient-to-br from-orange-100 via-orange-200 to-blue-100 rounded-2xl p-8 shadow-xl border border-orange-50 hover:shadow-2xl transition-all duration-500 h-full hover:scale-105 md:col-start-2 lg:col-start-auto" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-box w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#0071BD] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="icon-svg w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="card-title text-xl font-bold text-gray-800 font-serif" style={{fontFamily: 'Georgia, serif'}}>Mentorship & Support</h3>
              </div>
              <p className="card-text text-gray-600 leading-relaxed">Continuous guidance and consistent encouragement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Message with Signature */}
      <section className="py-12 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0071BD]/5 via-white to-[#FF6B35]/5"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-gray-50 via-white to-[#0071BD]/5 rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-100 relative overflow-hidden" data-aos="fade-down-right">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0071BD] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <div className="bg-white rounded-2xl p-5 shadow-xl border-4 border-gray-100">
                  <img 
                    src="/logo (3).png" 
                    alt="IBClassesOnline Logo" 
                    className="h-20 md:h-24"
                  />
                </div>
              </div>

              {/* Closing Message */}
              <div className="text-center mb-10">
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                  To all parents who trust us and all students who learn with us, <strong className="text-[#0071BD]">thank you</strong> for making IBClassesOnline what it is today.
                </p>
                
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  We remain committed to <strong className="text-[#FF6B35]">evolving continuously, maintaining the highest standards of academic excellence</strong>, and guiding every student towards success.
                </p>
              </div>

              {/* Regards */}
              <div className="text-center mb-8">
                <p className="text-gray-600 text-lg italic">With warm regards and best wishes,</p>
              </div>

              {/* Signature Card */}
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#0071BD] via-[#FF6B35] to-[#0071BD] rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-r from-[#0071BD] to-[#FF6B35] p-10 md:p-12 rounded-3xl text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <h3 className="text-2xl md:text-2xl font-bold mb-3 font-serif" style={{fontFamily: 'Georgia, serif'}}>
                        Rohit Gupta
                      </h3>
                      <div className="w-40 h-1 bg-white/40 mx-auto mb-4"></div>
                      <p className="text-white/95 text-lg font-semibold mb-1">Founder & Director</p>
                      <p className="text-white/90 text-sm">IBClassesOnline</p>
                      
                      {/* Decorative element */}
                      <div className="mt-6 flex justify-center gap-2">
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FounderMessage;