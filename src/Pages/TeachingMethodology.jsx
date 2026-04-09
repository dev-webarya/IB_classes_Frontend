import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeachingMethodology = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true
    });
  }, []);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/hero1.png" 
            alt="Teaching Methodology Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0071BD]/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-center text-white">
          {/* Logo Display */}
          <div className="mb-6 flex justify-center">
            <img 
              src="/logo (3).png" 
              alt="IBClassesOnline Logo" 
              className="h-20 md:h-24 drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{fontFamily: 'Georgia, serif'}}>
            <span className="text-[#FF6B35]">Teaching </span>
            <span className="text-[#0071BD]">Methodology</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Proven Learning Framework for Academic Excellence
          </p>
        </div>
      </section>

      {/* Main Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0071BD]/10 to-[#FF6B35]/10 text-[#0071BD] rounded-full text-sm font-bold border border-[#0071BD]/20 mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Our Teaching Methodology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-gray-900">Our </span>
              <span className="text-[#0071BD]">Approach</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Over 25 years, we have developed a proven and structured learning framework that helps students understand deeply, retain confidence, and perform exceptionally in exams.
            </p>
          </div>

          {/* Formula Card */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                <span className="font-semibold text-[#0071BD]">Strong concepts</span> + 
                <span className="font-semibold text-[#FF6B35]"> consistent practice</span> + 
                <span className="font-semibold text-[#0071BD]"> personalized feedback</span>
                <br className="hidden sm:block"/>
                <span className="text-gray-600"> = </span>
                <span className="font-semibold text-[#FF6B35]">guaranteed academic success</span>
              </p>
            </div>
          </div>

          <style>{`
            .methodology-card {
              position: relative;
              overflow: hidden;
              z-index: 0;
            }
            
            .methodology-card::before {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(to right, #0071BD, #FF6B35);
              transform: translateY(100%);
              transition: transform 0.3s ease;
              z-index: -1;
            }
            
            .methodology-card:hover::before {
              transform: translateY(0%);
            }
            
            .methodology-card:hover .card-text {
              color: rgba(255, 255, 255, 0.95);
              transition: color 0.5s ease-out 0.1s;
            }
            
            .methodology-card:hover .card-title {
              color: white;
              transition: color 0.5s ease-out 0.1s;
            }
            
            .methodology-card:hover .icon-box {
              background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%);
              border: 2px solid white;
              transition: all 0.5s ease-out 0.1s;
            }
            
            .methodology-card:hover .icon-svg {
              color: white;
              filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
              transition: all 0.5s ease-out 0.1s;
            }
          `}</style>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="methodology-card bg-gradient-to-br from-blue-100 via-blue-200 to-orange-100 rounded-2xl p-8 shadow-xl border border-blue-50 hover:shadow-2xl transition-all duration-500 hover:scale-105" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="icon-box w-14 h-14 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] rounded-xl flex items-center justify-center shadow-lg mb-4">
                <svg className="icon-svg w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="card-title text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>Concept-Based Learning</h3>
              <p className="card-text text-gray-600">
                Focus on clarity and understanding, not memorization
              </p>
            </div>

            <div className="methodology-card bg-gradient-to-br from-orange-100 via-orange-200 to-blue-100 rounded-2xl p-8 shadow-xl border border-orange-50 hover:shadow-2xl transition-all duration-500 hover:scale-105" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="icon-box w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#0071BD] rounded-xl flex items-center justify-center shadow-lg mb-4">
                <svg className="icon-svg w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="card-title text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>Structured Practice</h3>
              <p className="card-text text-gray-600">
                Regular assignments and assessments for skill building
              </p>
            </div>

            <div className="methodology-card bg-gradient-to-br from-blue-100 via-orange-100 to-blue-200 rounded-2xl p-8 shadow-xl border border-blue-50 hover:shadow-2xl transition-all duration-500 hover:scale-105" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="icon-box w-14 h-14 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] rounded-xl flex items-center justify-center shadow-lg mb-4">
                <svg className="icon-svg w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="card-title text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>Personalized Feedback</h3>
              <p className="card-text text-gray-600">
                Individual attention and guidance for continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Step-by-Step Learning Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0071BD]/10 to-[#FF6B35]/10 text-[#0071BD] rounded-full text-sm font-bold border border-[#0071BD]/20 mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Learning Framework
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-gray-900">Our 8-Step </span>
              <span className="text-[#0071BD]">Learning Process</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#0071BD] via-[#FF6B35] to-[#0071BD] rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured and proven methodology designed for academic excellence
            </p>
          </div>

          {/* Learning Steps - Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-duration="600" data-aos-delay="0">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    01
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{fontFamily: 'Georgia, serif'}}>
                    Diagnostic Assessment & Batch Allocation
                  </h3>
                  <p className="text-gray-600 mb-3">
                    We begin with an initial evaluation to understand each student's current level, strengths, and areas that need improvement.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#0071BD] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Students placed in 4-6 member batches</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#0071BD] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Similar learning pace for maximum effectiveness</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#0071BD] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    02
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{fontFamily: 'Georgia, serif'}}>
                    Concept-Based Teaching
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Every chapter is taught from the basics to advanced level, using real-life examples, diagrams, and board-specific explanations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#FF6B35] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Focus on clarity, not memorization</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#FF6B35] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Emphasis on why, not just what</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#FF6B35] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Logical thinking and reasoning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    03
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{fontFamily: 'Georgia, serif'}}>
                    Interactive Live Classes
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Our sessions are engaging and discussion-based — not lecture-style one-way teaching.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#0071BD] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Students encouraged to ask doubts</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#0071BD] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Active participation and live problem solving</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#0071BD] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    04
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{fontFamily: 'Georgia, serif'}}>
                    Notes & Learning Material
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Comprehensive study resources that make revision faster and more effective.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Chapter-wise concise notes</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Formula sheets and key summaries</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Question banks and previous year questions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    05
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{fontFamily: 'Georgia, serif'}}>
                    Practice-Driven Learning
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Practice is treated as a core learning element, not an optional activity.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#0071BD] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Worksheets and assignments given regularly</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#0071BD] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Solutions submitted for evaluation</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#0071BD] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Corrections and improvement feedback provided</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#0071BD] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    06
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{fontFamily: 'Georgia, serif'}}>
                    Regular Tests & Performance Tracking
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Each test is analyzed, and students receive detailed feedback.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Weekly or chapter-wise tests</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Monthly assessments</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Pre-board and final revision tests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    07
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{fontFamily: 'Georgia, serif'}}>
                    Personalized Doubt-Solving
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Special dedicated time for clearing doubts and revisiting weak topics.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#0071BD] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>One-on-one academic guidance</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#0071BD] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Focused attention on weak areas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 8 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#0071BD] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    08
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{fontFamily: 'Georgia, serif'}}>
                    Revision & Exam Preparation
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Ensuring students enter exams with confidence, clarity, and calmness.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#FF6B35] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Intensive revision classes</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#FF6B35] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Previous board questions solving</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#FF6B35] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Time-bound mock tests and strategy sessions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0071BD]/10 to-[#FF6B35]/10 text-[#0071BD] rounded-full text-sm font-bold border border-[#0071BD]/20 mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
              </svg>
              Our Philosophy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-gray-900">Teaching </span>
              <span className="text-[#0071BD]">Philosophy</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#0071BD] via-[#FF6B35] to-[#0071BD] rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven cycle of learning that guarantees academic success
            </p>
          </div>

          {/* Philosophy Steps */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-semibold text-gray-900">Concept</h3>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">✍️</div>
              <h3 className="font-semibold text-gray-900">Practice</h3>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">🔄</div>
              <h3 className="font-semibold text-gray-900">Revision</h3>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">📝</div>
              <h3 className="font-semibold text-gray-900">Test</h3>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-semibold text-gray-900">Feedback</h3>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="font-semibold text-gray-900">Mastery</h3>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold text-gray-800">
              This cycle guarantees measurable improvement and academic success
            </p>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0071BD]/10 to-[#FF6B35]/10 text-[#0071BD] rounded-full text-sm font-bold border border-[#0071BD]/20 mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Student Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-gray-900">Expected Learning </span>
              <span className="text-[#0071BD]">Outcomes</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#0071BD] via-[#FF6B35] to-[#0071BD] rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Benefits students receive from our structured methodology
            </p>
          </div>

          {/* Outcomes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0071BD]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Strong Fundamentals</h3>
                  <p className="text-gray-600">Deep understanding of core concepts and principles</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#23B04D]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Higher Accuracy</h3>
                  <p className="text-gray-600">Improved confidence and problem-solving skills</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#0071BD]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Better Presentation</h3>
                  <p className="text-gray-600">Enhanced writing and communication abilities</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#23B04D]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Time Management</h3>
                  <p className="text-gray-600">Efficient exam preparation and planning skills</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#0071BD]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Score Improvement</h3>
                  <p className="text-gray-600">Consistent academic progress and results</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#23B04D]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduced Stress</h3>
                  <p className="text-gray-600">Increased motivation and exam confidence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment & CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{fontFamily: 'Georgia, serif'}}>
            The IBClassesOnline Commitment
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 mb-10">
            <p className="text-xl md:text-2xl font-semibold mb-4">
              We do not aim for average improvement — we aim for transformation
            </p>
            <p className="text-lg text-white/90">
              Every child receives attention, support, and guidance to achieve their highest potential
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <p className="text-xl font-semibold mb-6">Experience our methodology firsthand</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/918317407250?text=I%20would%20like%20to%20join%20a%20free%20demo%20class"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-white text-[#0071BD] font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Join a Free Demo Class
                </span>
              </a>
              <a 
                href="tel:+918317407250"
                className="group px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#0071BD] transition-all duration-300 hover:scale-105 text-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call: +91 831 740 7250
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeachingMethodology;
