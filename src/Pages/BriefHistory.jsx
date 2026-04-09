import React from 'react';
import { Link } from 'react-router-dom';

const BriefHistory = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[30vh] md:min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80)',
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
            <span>Our Journey of</span> <br />
            <span className="text-[#FFD700]">Educational Excellence</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg" data-aos="fade-up" data-aos-delay="300">
            25+ Years of Shaping Academic Futures
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=80)',
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            
            <div className="relative" data-aos="fade-right">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#EB5213]/20 to-[#3A63EB]/20 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800" 
                alt="Educational Journey" 
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#EB5213] to-[#3A63EB] text-white p-8 rounded-xl shadow-xl max-w-xs">
                <div className="text-5xl font-bold mb-2 font-serif" style={{fontFamily: 'Georgia, serif'}}>Est.</div>
                <div className="text-3xl font-bold font-serif" style={{fontFamily: 'Georgia, serif'}}>1999</div>
                <div className="text-sm mt-2 text-white/80">Building Futures Since</div>
              </div>
            </div>

            {/* Content Side */}
            <div data-aos="fade-left">
              <div className="inline-block px-5 py-2 bg-[#EB5213]/10 text-[#EB5213] rounded-full text-sm font-semibold mb-6">
                Our Story
              </div>
              
              <h2 className="text-4xl md:text-4xl font-bold text-black mb-6 leading-tight font-serif" style={{fontFamily: 'Georgia, serif'}}>
                From Vision to <span className="text-[#3A63EB]">Reality</span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                <strong>IBClassesOnline</strong> was established by a team of experienced entrepreneurs with a shared vision—to create a high-quality, reliable, and result-oriented tutoring ecosystem for Indian students.
              </p>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                What began as a small group of passionate educators has now grown into a trusted learning platform known for its <strong>strong academic foundation</strong>, <strong>personalized teaching</strong>, and <strong>consistent student success</strong>.
              </p>

              <div className="bg-gradient-to-r from-[#EB5213]/5 to-[#3A63EB]/5 p-6 rounded-xl border-l-4 border-[#EB5213]">
                <p className="text-gray-700 text-lg italic font-serif" style={{fontFamily: 'Georgia, serif'}}>
                  "Our mission has always been simple: to strengthen concepts, build confidence, and help every student achieve academic excellence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-blue-50/30 to-white"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-5 py-2 bg-[#3A63EB]/10 text-[#3A63EB] rounded-full text-sm font-semibold mb-4">
              Our Evolution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              25+ Years of <span className="text-[#EB5213]">Growth</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted name in online tutoring
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#EB5213] to-[#3A63EB]"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center" data-aos="fade-right">
                <div className="md:text-right">
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#EB5213] min-h-[280px] flex flex-col justify-center hover:scale-105">
                    <h3 className="text-2xl font-bold text-[#EB5213] mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>The Beginning (1999)</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">
                      Started as a small group of passionate educators with a vision to transform education for Indian students.
                    </p>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-start gap-2 md:justify-end">
                        <span className="text-[#EB5213] font-bold">•</span>
                        <span className="text-base">Founded by experienced entrepreneurs</span>
                      </div>
                      <div className="flex items-start gap-2 md:justify-end">
                        <span className="text-[#EB5213] font-bold">•</span>
                        <span className="text-base">Focus on quality education</span>
                      </div>
                      <div className="flex items-start gap-2 md:justify-end">
                        <span className="text-[#EB5213] font-bold">•</span>
                        <span className="text-base">Student-centric approach established</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=500" 
                    alt="The Beginning" 
                    className="rounded-xl shadow-lg h-[280px] w-full object-cover"
                  />
                </div>
              </div>

              {/* Item 2 */}
              <div className="grid md:grid-cols-2 gap-8 items-center" data-aos="fade-left">
                <div className="hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500" 
                    alt="Specialization" 
                    className="rounded-xl shadow-lg h-[280px] w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#3A63EB] min-h-[280px] flex flex-col justify-center hover:scale-105">
                    <h3 className="text-2xl font-bold text-[#3A63EB] mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>Specialization (2005-2010)</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">
                      Focused on IB and Board curriculum for Grades 6-12, covering all major subjects with expert tutors.
                    </p>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-start gap-2">
                        <span className="text-[#3A63EB] font-bold">•</span>
                        <span className="text-base">IB & CBSE/ICSE curriculum expertise</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#3A63EB] font-bold">•</span>
                        <span className="text-base">Comprehensive subject coverage</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#3A63EB] font-bold">•</span>
                        <span className="text-base">Structured learning methodology</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="grid md:grid-cols-2 gap-8 items-center" data-aos="fade-right">
                <div className="md:text-right">
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#EB5213] min-h-[280px] flex flex-col justify-center hover:scale-105">
                    <h3 className="text-2xl font-bold text-[#EB5213] mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>Expansion (2010-2020)</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">
                      Grew to a team of 10 expert teachers, each with extensive experience training hundreds of students.
                    </p>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-start gap-2 md:justify-end">
                        <span className="text-[#EB5213] font-bold">•</span>
                        <span className="text-base">10 experienced educators onboard</span>
                      </div>
                      <div className="flex items-start gap-2 md:justify-end">
                        <span className="text-[#EB5213] font-bold">•</span>
                        <span className="text-base">Multi-board expertise development</span>
                      </div>
                      <div className="flex items-start gap-2 md:justify-end">
                        <span className="text-[#EB5213] font-bold">•</span>
                        <span className="text-base">Hundreds of success stories</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500" 
                    alt="Expansion" 
                    className="rounded-xl shadow-lg h-[280px] w-full object-cover"
                  />
                </div>
              </div>

              {/* Item 4 */}
              <div className="grid md:grid-cols-2 gap-8 items-center" data-aos="fade-left">
                <div className="hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500" 
                    alt="Today" 
                    className="rounded-xl shadow-lg h-[280px] w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#3A63EB] min-h-[280px] flex flex-col justify-center hover:scale-105">
                    <h3 className="text-2xl font-bold text-[#3A63EB] mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>Today (2020 - Present)</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">
                      A trusted learning platform known for strong academic foundation, personalized teaching, and consistent student success.
                    </p>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-start gap-2">
                        <span className="text-[#3A63EB] font-bold">•</span>
                        <span className="text-base">Recognized excellence in education</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#3A63EB] font-bold">•</span>
                        <span className="text-base">Global student reach</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#3A63EB] font-bold">•</span>
                        <span className="text-base">Proven track record of success</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Beyond Tutoring */}
      <section className="py-20 relative overflow-hidden bg-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80)',
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-5 py-2 bg-[#EB5213]/10 text-[#EB5213] rounded-full text-sm font-semibold mb-4">
              Beyond Academics
            </div>
            <h2 className="text-4xl md:text-4xl font-bold text-black mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              Comprehensive <span className="text-[#3A63EB]">Support Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We go beyond traditional tutoring to provide holistic support for your educational journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="group bg-gradient-to-br from-white to-[#EB5213]/5 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#EB5213] hover:scale-105" data-aos="flip-left" data-aos-delay="100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#EB5213] to-[#FF8C5A] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif" style={{fontFamily: 'Georgia, serif'}}>College Counseling</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert guidance for admissions to international colleges and universities worldwide
              </p>
            </div>

            {/* Service 2 */}
            <div className="group bg-gradient-to-br from-white to-[#3A63EB]/5 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#3A63EB] hover:scale-105" data-aos="flip-left" data-aos-delay="200">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3A63EB] to-[#6B8FFF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif" style={{fontFamily: 'Georgia, serif'}}>Subject Selection</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic guidance on choosing subjects for higher classes aligned with career goals
              </p>
            </div>

            {/* Service 3 */}
            <div className="group bg-gradient-to-br from-white to-[#EB5213]/5 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#EB5213] hover:scale-105" data-aos="flip-left" data-aos-delay="300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#EB5213] to-[#FF8C5A] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif" style={{fontFamily: 'Georgia, serif'}}>Study Abroad</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive admission support and guidance for studying abroad programs
              </p>
            </div>

            {/* Service 4 */}
            <div className="group bg-gradient-to-br from-white to-[#3A63EB]/5 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#3A63EB] hover:scale-105" data-aos="flip-left" data-aos-delay="400">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3A63EB] to-[#6B8FFF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif" style={{fontFamily: 'Georgia, serif'}}>Academic Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated help with school projects, assignments, and essays for all subjects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-20 bg-gradient-to-br from-[#EB5213] to-[#3A63EB] relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="text-white" data-aos="fade-right">
              <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
                Our Backbone
              </div>
              
              <h2 className="text-4xl md:text-4xl font-bold mb-6 leading-tight font-serif" style={{fontFamily: 'Georgia, serif'}}>
                Meet Our Team of <span className="text-[#FFD700]">Expert Teachers</span>
              </h2>
              
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Today, the IBClassesOnline team includes <strong>10 expert teachers</strong>, each with extensive experience in training hundreds of students across different boards.
              </p>
              
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                With deep subject knowledge, structured pedagogy, and a student-centric approach, our teachers form the backbone of IBClassesOnline and uphold our commitment to excellence.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-[#FFD700] mb-2 font-serif" style={{fontFamily: 'Georgia, serif'}}>100%</div>
                  <div className="text-sm text-white/80">Qualified</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-[#FFD700] mb-2 font-serif" style={{fontFamily: 'Georgia, serif'}}>15+</div>
                  <div className="text-sm text-white/80">Years Exp.</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-[#FFD700] mb-2 font-serif" style={{fontFamily: 'Georgia, serif'}}>10</div>
                  <div className="text-sm text-white/80">Teachers</div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative" data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800" 
                  alt="Expert Teachers" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-2 font-serif" style={{fontFamily: 'Georgia, serif'}}>Student-Centric Approach</h3>
                  <p className="text-white/90">Structured pedagogy tailored to individual learning needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" data-aos="zoom-in">
          <div className="bg-white rounded-3xl p-12 shadow-xl border-t-4 border-[#EB5213]">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted name in online tutoring, IBClassesOnline continues to inspire, mentor, and guide students toward a brighter academic future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="px-10 py-4 bg-gradient-to-r from-[#EB5213] to-[#FF8C5A] text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-serif text-center" style={{fontFamily: 'Georgia, serif'}}>
                Book a Free Demo
              </Link>
              <Link to="/contact-us" className="px-8 py-4 bg-white text-[#3A63EB] font-semibold rounded-xl border-2 border-[#3A63EB] hover:bg-[#3A63EB] hover:text-white transition-all duration-300 hover:scale-105 font-serif text-center" style={{fontFamily: 'Georgia, serif'}}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BriefHistory;