import React from 'react';
import { Link } from 'react-router-dom';

const Mission = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80)',
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
            <span>Our</span> <span className="text-[#FFD700]">Mission</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg" data-aos="fade-up" data-aos-delay="300">
            Empowering Students to Excel in Academic Excellence
          </p>
        </div>
      </section>

      {/* Main Mission Statement */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
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
                Our Mission
              </div>
              
              <h2 className="text-4xl md:text-4xl font-bold leading-tight font-serif" style={{fontFamily: 'Georgia, serif'}}>
                <span className="text-black">Empowering Students</span> <br/>
                <span className="text-[#0071BD]">for Success</span>
              </h2>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] rounded-full"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                At IBClassesOnline, our mission is to <strong className="text-[#0071BD]">empower students with strong academic foundations, conceptual clarity, and confidence</strong>, enabling them to excel in school examinations and beyond.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                We are committed to providing <strong className="text-[#FF6B35]">high-quality, personalized online education</strong> that is accessible, flexible, and aligned with the evolving needs of students from IB.
              </p>

              {/* Mission Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-6 bg-gradient-to-br from-[#0071BD]/10 to-[#0071BD]/5 rounded-xl border border-[#0071BD]/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-[#0071BD] mb-2">📚</div>
                  <div className="text-sm text-gray-600 font-semibold">Academic Excellence</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 rounded-xl border border-[#FF6B35]/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-[#FF6B35] mb-2">🎯</div>
                  <div className="text-sm text-gray-600 font-semibold">Personalized Learning</div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative" data-aos="fade-left">
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[#0071BD]/20 to-[#FF6B35]/20 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800" 
                alt="Our Mission" 
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#FF6B35] to-[#0071BD] text-white p-8 rounded-xl shadow-xl max-w-xs">
                <h3 className="text-2xl font-bold mb-2 font-serif" style={{fontFamily: 'Georgia, serif'}}>Quality Education</h3>
                <p className="text-white/90 text-sm">Expert Teaching & Mentorship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Mission Pillars */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
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
              Core Focus Areas
            </div>
            <h2 className="text-4xl md:text-4xl font-bold mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-black">What We</span> <span className="text-[#0071BD]">Deliver</span>
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#0071BD] via-[#FF6B35] to-[#0071BD] rounded-full"></div>
            </div>
          </div>

          {/* Mission Cards */}
          <div className="space-y-16">
            {/* Pillar 1 - Academic Foundations */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative" data-aos="fade-right">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#FF6B35]/20 to-[#0071BD]/20 rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800" 
                  alt="Academic Foundations" 
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#FF6B35] to-[#0071BD] text-white p-8 rounded-xl shadow-xl max-w-xs">
                  <div className="text-5xl font-bold mb-2 font-serif" style={{fontFamily: 'Georgia, serif'}}>01</div>
                  <div className="text-sm text-white/80">Focus Area</div>
                </div>
              </div>

              <div className="space-y-6" data-aos="fade-left">
                <div className="inline-block px-5 py-2 bg-[#0071BD]/10 text-[#0071BD] rounded-full text-sm font-semibold">
                  Focus Area 1
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-serif" style={{fontFamily: 'Georgia, serif'}}>
                  <span className="text-black">Strong Academic</span> <span className="text-[#0071BD]">Foundations</span>
                </h3>
                <div className="w-20 h-1 bg-[#0071BD] rounded-full"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We empower students with <strong className="text-[#0071BD]">strong academic foundations, conceptual clarity, and confidence</strong>, enabling them to excel in school examinations and beyond.
                </p>
                <div className="bg-gradient-to-r from-[#0071BD]/5 to-[#FF6B35]/5 p-6 rounded-xl border-l-4 border-[#0071BD]">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[#0071BD] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Conceptual Clarity</h4>
                        <p className="text-gray-600 text-sm">Deep understanding of core concepts</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#0071BD] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Building Confidence</h4>
                        <p className="text-gray-600 text-sm">Empowering students with self-belief</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#0071BD] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Exam Excellence</h4>
                        <p className="text-gray-600 text-sm">Preparing for outstanding results</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2 - Personalized Education */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-1" data-aos="fade-right">
                <div className="inline-block px-5 py-2 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full text-sm font-semibold">
                  Focus Area 2
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-serif" style={{fontFamily: 'Georgia, serif'}}>
                  <span className="text-black">High-Quality</span> <span className="text-[#0071BD]">Personalized Education</span>
                </h3>
                <div className="w-20 h-1 bg-[#FF6B35] rounded-full"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are committed to providing <strong className="text-[#FF6B35]">high-quality, personalized online education</strong> that is accessible, flexible, and aligned with the evolving needs of students from IB.
                </p>
                <div className="bg-gradient-to-r from-[#FF6B35]/5 to-[#0071BD]/5 p-6 rounded-xl border-l-4 border-[#FF6B35]">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[#FF6B35] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Accessible Learning</h4>
                        <p className="text-gray-600 text-sm">Education available anytime, anywhere</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#FF6B35] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Flexible Approach</h4>
                        <p className="text-gray-600 text-sm">Adapting to individual learning styles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#FF6B35] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">IB Standards</h4>
                        <p className="text-gray-600 text-sm">Aligned with evolving curriculum needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:order-2" data-aos="fade-left">
                <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[#0071BD]/20 to-[#FF6B35]/20 rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" 
                  alt="Personalized Education" 
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] text-white p-8 rounded-xl shadow-xl max-w-xs">
                  <div className="text-5xl font-bold mb-2 font-serif" style={{fontFamily: 'Georgia, serif'}}>02</div>
                  <div className="text-sm text-white/80">Focus Area</div>
                </div>
              </div>
            </div>

            {/* Pillar 3 - Expert Teaching */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative" data-aos="fade-right">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#FF6B35]/20 to-[#0071BD]/20 rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800" 
                  alt="Expert Teaching" 
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#FF6B35] to-[#0071BD] text-white p-8 rounded-xl shadow-xl max-w-xs">
                  <div className="text-5xl font-bold mb-2 font-serif" style={{fontFamily: 'Georgia, serif'}}>03</div>
                  <div className="text-sm text-white/80">Focus Area</div>
                </div>
              </div>

              <div className="space-y-6" data-aos="fade-left">
                <div className="inline-block px-5 py-2 bg-[#0071BD]/10 text-[#0071BD] rounded-full text-sm font-semibold">
                  Focus Area 3
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-serif" style={{fontFamily: 'Georgia, serif'}}>
                  <span className="text-black">Expert Teaching &</span> <span className="text-[#0071BD]">Mentorship</span>
                </h3>
                <div className="w-20 h-1 bg-[#0071BD] rounded-full"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Through <strong className="text-[#0071BD]">expert teaching, continuous mentorship, and a structured learning approach</strong>, we strive to shape disciplined, curious, and self-driven learners who are prepared for future academic and career success.
                </p>
                <div className="bg-gradient-to-r from-[#0071BD]/5 to-[#FF6B35]/5 p-6 rounded-xl border-l-4 border-[#0071BD]">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[#0071BD] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Experienced Teachers</h4>
                        <p className="text-gray-600 text-sm">Subject experts with proven track records</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#0071BD] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Continuous Support</h4>
                        <p className="text-gray-600 text-sm">Ongoing mentorship throughout learning journey</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#0071BD] font-bold">•</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Structured Learning</h4>
                        <p className="text-gray-600 text-sm">Organized curriculum for systematic growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-20 bg-gradient-to-br from-[#FF6B35] to-[#0071BD] relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
              Learning Outcomes
            </div>
            <h2 className="text-4xl md:text-4xl font-bold mb-6 leading-tight font-serif" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-white">Shaping</span> <span className="text-[#FFD700]">Future-Ready Learners</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 transform hover:scale-105 transition-all" data-aos="fade-up" data-aos-delay="100">
              <div className="text-5xl mb-4">🎓</div>
              <div className="text-2xl font-bold text-white mb-3 font-serif" style={{fontFamily: 'Georgia, serif'}}>Disciplined</div>
              <div className="text-white/90 text-sm">Students who approach learning with structure and commitment</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 transform hover:scale-105 transition-all" data-aos="fade-up" data-aos-delay="200">
              <div className="text-5xl mb-4">🔍</div>
              <div className="text-2xl font-bold text-white mb-3 font-serif" style={{fontFamily: 'Georgia, serif'}}>Curious</div>
              <div className="text-white/90 text-sm">Learners who ask questions and explore beyond boundaries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 transform hover:scale-105 transition-all" data-aos="fade-up" data-aos-delay="300">
              <div className="text-5xl mb-4">🚀</div>
              <div className="text-2xl font-bold text-white mb-3 font-serif" style={{fontFamily: 'Georgia, serif'}}>Self-Driven</div>
              <div className="text-white/90 text-sm">Motivated individuals prepared for academic & career success</div>
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
          <div className="bg-white rounded-3xl p-12 shadow-xl border-t-4 border-[#FF6B35]">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-black">Ready to Join Our</span> <span className="text-[#0071BD]">Mission?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              Experience personalized learning with expert guidance. Let's work together to build your academic success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="px-10 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-serif text-center" style={{fontFamily: 'Georgia, serif'}}>
                Book a Free Demo
              </Link>
              <Link to="/contact-us" className="px-8 py-4 bg-white text-[#0071BD] font-semibold rounded-xl border-2 border-[#0071BD] hover:bg-[#0071BD] hover:text-white transition-all duration-300 hover:scale-105 font-serif text-center" style={{fontFamily: 'Georgia, serif'}}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;