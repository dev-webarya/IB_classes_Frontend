import React from 'react';

const Physics = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=1920&q=80)',
          }}
        ></div>
        
        {/* Blue and Orange Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0071BD]/85 via-[#FF6B35]/70 to-[#FF6B35]/85 z-10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl z-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl z-20 animate-pulse"></div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-6 py-8 text-center">
          <div className="mb-4 flex justify-center" data-aos="fade-down">
            <img 
              src="/logo (3).png" 
              alt="IBClassesOnline Logo" 
              className="h-16 md:h-20 drop-shadow-2xl hover:scale-110 transition-transform"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight font-serif text-white drop-shadow-2xl" style={{fontFamily: 'Georgia, serif'}} data-aos="fade-up">
            <span>IB Physics</span> <span className="text-[#FFD700]">Tuition</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg mb-8" data-aos="fade-up" data-aos-delay="100">
            Master Physics with Clarity, Confidence & Strong Conceptual Understanding
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="zoom-in" data-aos-delay="200">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20join%20IB%20Physics%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/80 text-white font-bold rounded-lg hover:scale-105 hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              <span>📚</span> Book Free Demo Class
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0071BD] hover:scale-105 transition-all"
            >
              📞 Call: +91 831 740 7250
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0071BD] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block px-5 py-2 bg-[#0071BD]/10 text-[#0071BD] rounded-full text-sm font-semibold mb-6">
              About IB Physics
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight font-serif mb-4" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-black">Master the</span> <span className="text-[#0071BD]">Science of Nature</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Physics is a subject that requires clear fundamentals, logical reasoning, mathematical application, and problem-solving skills. At IBClassesOnline, we help students build conceptual understanding from the ground up, turning Physics from a challenging subject into a powerful strength.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              With over <strong className="text-[#0071BD]">25+ years of expertise</strong> in IB Physics teaching, IBClassesOnline has guided thousands of students to score exceptionally well in board exams and tests.
            </p>
          </div>

          {/* SL vs HL Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group relative bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#0071BD] hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0071BD] to-[#0071BD]/80 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0071BD]/10 to-[#0071BD]/5 rounded-full flex items-center justify-center mb-6 border border-[#0071BD]/20 group-hover:bg-white/20 transition-colors">
                  <span className="text-3xl">📘</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0071BD] group-hover:text-white mb-4 font-serif transition-colors" style={{fontFamily: 'Georgia, serif'}}>Physics  SL</h3>
                <p className="text-gray-600 group-hover:text-white/90 mb-4 transition-colors">Standard Level</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0071BD] group-hover:text-[#FFD700] font-bold transition-colors">~150</span>
                    <span className="text-gray-700 group-hover:text-white transition-colors">Teaching Hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0071BD] group-hover:text-[#FFD700] font-bold transition-colors">Core</span>
                    <span className="text-gray-700 group-hover:text-white transition-colors">Topics Coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0071BD] group-hover:text-[#FFD700] font-bold transition-colors">Moderate</span>
                    <span className="text-gray-700 group-hover:text-white transition-colors">Mathematical Rigor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 group-hover:text-[#FFD700] transition-colors">✓</span>
                    <span className="text-gray-700 group-hover:text-white transition-colors">Best for students not majoring in Physics</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#FF6B35] hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#FF6B35]/80 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 rounded-full flex items-center justify-center mb-6 border border-[#FF6B35]/20 group-hover:bg-white/20 transition-colors">
                  <span className="text-3xl">📗</span>
                </div>
                <h3 className="text-2xl font-bold text-[#FF6B35] group-hover:text-white mb-4 font-serif transition-colors" style={{fontFamily: 'Georgia, serif'}}>Physics HL</h3>
                <p className="text-gray-600 group-hover:text-white/90 mb-4 transition-colors">Higher Level</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B35] group-hover:text-[#FFD700] font-bold transition-colors">~240</span>
                    <span className="text-gray-700 group-hover:text-white transition-colors">Teaching Hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B35] group-hover:text-[#FFD700] font-bold transition-colors">Advanced</span>
                    <span className="text-gray-700 group-hover:text-white transition-colors">Topics Coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B35] group-hover:text-[#FFD700] font-bold transition-colors">High</span>
                    <span className="text-gray-700 group-hover:text-white transition-colors">Mathematical Rigor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 group-hover:text-[#FFD700] transition-colors">✓</span>
                    <span className="text-gray-700 group-hover:text-white transition-colors">For Engineering / Physics / STEM aspirants</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Covered - SL */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80)',
          }}
        ></div>
        
        {/* Decorative Gradient Blurs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#0071BD]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-5 py-2 bg-[#0071BD]/10 text-[#0071BD] rounded-full text-sm font-semibold mb-4">
              Standard Level Curriculum
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-black">Physics SL – </span>
              <span className="text-[#0071BD]">Core Topics</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] rounded-full mx-auto mb-2"></div>
            <p className="text-lg text-gray-600">Grade XI–XII Complete Syllabus Coverage</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🚀",
                title: "Space, Time & Motion",
                topics: ["Kinematics", "Forces & Newton's Laws", "Work, Energy, Power", "Momentum & Circular Motion"]
              },
              {
                icon: "⚛️",
                title: "Particulate Nature of Matter",
                topics: ["Thermal physics", "Ideal gas laws", "Specific heat capacity", "Phase changes"]
              },
              {
                icon: "🌊",
                title: "Wave Behaviour",
                topics: ["Simple harmonic motion", "Wave characteristics", "Sound waves", "Interference & diffraction"]
              },
              {
                icon: "🧲",
                title: "Fields",
                topics: ["Gravitational fields", "Electric fields", "Magnetic fields"]
              },
              {
                icon: "⚡",
                title: "Electricity & Magnetism",
                topics: ["Current, voltage, resistance", "Ohm's law", "Circuits", "Electromagnetic induction"]
              },
              {
                icon: "☢️",
                title: "Nuclear & Quantum Physics",
                topics: ["Radioactivity", "Nuclear reactions", "Photoelectric effect", "Basic quantum theory"]
              }
            ].map((topic, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-[#0071BD]/5 to-white rounded-xl p-6 border border-[#0071BD]/20 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="text-xl font-bold text-[#0071BD] group-hover:text-white mb-4 transition-colors">{topic.title}</h3>
                  <ul className="space-y-2">
                    {topic.topics.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 group-hover:text-white transition-colors">
                        <span className="text-[#0071BD] group-hover:text-[#FFD700] font-bold transition-colors">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Covered - HL Additional */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
          }}
        ></div>
        
        {/* Decorative Gradient Blurs */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#0071BD]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-5 py-2 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full text-sm font-semibold mb-4">
              Higher Level Curriculum
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-black">Physics HL – </span>
              <span className="text-[#FF6B35]">Additional Advanced Topics</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#FF6B35] to-[#0071BD] rounded-full mx-auto mb-2"></div>
            <p className="text-lg text-gray-600">HL students study all SL topics PLUS:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Advanced Mechanics",
                topics: ["Projectile motion (advanced treatment)", "Rigid body mechanics", "Rotational dynamics"]
              },
              {
                title: "Advanced Thermal Physics",
                topics: ["Detailed gas laws", "Thermodynamic processes", "Internal energy"]
              },
              {
                title: "Advanced Wave Phenomena",
                topics: ["Wave superposition", "Standing waves", "Doppler effect"]
              },
              {
                title: "Advanced Electromagnetism",
                topics: ["Capacitance", "Magnetic flux", "Detailed electromagnetic induction"]
              },
              {
                title: "Advanced Quantum & Nuclear Physics",
                topics: ["Particle physics", "Feynman diagrams", "Nuclear binding energy"]
              }
            ].map((topic, index) => (
              <div key={index} className="group relative bg-white rounded-xl p-6 border border-[#FF6B35]/30 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#0071BD] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#FF6B35] group-hover:text-white mb-4 font-serif transition-colors" style={{fontFamily: 'Georgia, serif'}}>{topic.title}</h3>
                  <ul className="space-y-2">
                    {topic.topics.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 group-hover:text-white transition-colors">
                        <svg className="w-5 h-5 text-[#FF6B35] group-hover:text-[#FFD700] mt-0.5 shrink-0 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Assessment */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&q=80)',
          }}
        ></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0071BD]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-[#0071BD]/10 to-[#FF6B35]/10 rounded-2xl p-8 md:p-10 border border-[#0071BD]/20 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0071BD] to-[#0071BD]/80 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                IA
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif" style={{fontFamily: 'Georgia, serif'}}>Internal Assessment (IA)</h3>
                <p className="text-gray-600 font-semibold">Both SL & HL</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700"><strong className="text-[#0071BD]">🔬 Individual Investigation</strong></p>
              <ul className="space-y-2 ml-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#0071BD]">•</span>
                  <span>Student-designed experiment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071BD]">•</span>
                  <span>Data collection & analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071BD]">•</span>
                  <span>Scientific report writing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071BD]">•</span>
                  <span>Marked internally, moderated by IB</span>
                </li>
              </ul>
              <div className="bg-white rounded-lg p-4 mt-6">
                <p className="text-center text-lg"><strong className="text-[#FF6B35]">IA Weightage: 20% of final grade</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Pattern */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80)',
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-block px-5 py-2 bg-[#0071BD]/10 text-[#0071BD] rounded-full text-sm font-semibold mb-4">
              Assessment Structure
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-gray-900">External </span>
              <span className="text-[#0071BD]">Examination Pattern</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] rounded-full mx-auto mb-2"></div>
            <p className="text-lg text-gray-600">Grade XII Final Exams</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SL Exam Pattern */}
            <div className="group relative bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#0071BD] hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0071BD] to-[#0071BD]/80 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                  SL
                </div>
                <h3 className="text-2xl font-bold text-[#0071BD] font-serif" style={{fontFamily: 'Georgia, serif'}}>Physics SL</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-[#0071BD] pl-4">
                  <h4 className="font-bold text-gray-900">Paper 1</h4>
                  <p className="text-gray-600">45 mins | 20% | Multiple Choice</p>
                </div>
                <div className="border-l-4 border-[#0071BD] pl-4">
                  <h4 className="font-bold text-gray-900">Paper 2</h4>
                  <p className="text-gray-600">1 hr 15 mins | 40% | Structured & Extended Answers</p>
                </div>
                <div className="border-l-4 border-[#0071BD] pl-4">
                  <h4 className="font-bold text-gray-900">Paper 3</h4>
                  <p className="text-gray-600">1 hr | 20% | Data-based & Practical Skills</p>
                </div>
                <div className="border-l-4 border-[#FF6B35] pl-4">
                  <h4 className="font-bold text-gray-900">Internal Assessment</h4>
                  <p className="text-gray-600">20%</p>
                </div>
              </div>
            </div>

            {/* HL Exam Pattern */}
            <div className="group relative bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#FF6B35] hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FF6B35]/80 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                  HL
                </div>
                <h3 className="text-2xl font-bold text-[#FF6B35] font-serif" style={{fontFamily: 'Georgia, serif'}}>Physics HL</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-[#FF6B35] pl-4">
                  <h4 className="font-bold text-gray-900">Paper 1</h4>
                  <p className="text-gray-600">1 hr | 20% | Multiple Choice</p>
                </div>
                <div className="border-l-4 border-[#FF6B35] pl-4">
                  <h4 className="font-bold text-gray-900">Paper 2</h4>
                  <p className="text-gray-600">2 hr 15 mins | 36% | Long Structured & Essay Questions</p>
                </div>
                <div className="border-l-4 border-[#FF6B35] pl-4">
                  <h4 className="font-bold text-gray-900">Paper 3</h4>
                  <p className="text-gray-600">1 hr 15 mins | 24% | Data-based + HL Advanced Questions</p>
                </div>
                <div className="border-l-4 border-[#0071BD] pl-4">
                  <h4 className="font-bold text-gray-900">Internal Assessment</h4>
                  <p className="text-gray-600">20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Boundaries */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80)',
          }}
        ></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-block px-5 py-2 bg-[#0071BD]/10 text-[#0071BD] rounded-full text-sm font-semibold mb-4">
              Grading System
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-gray-900">IB </span>
              <span className="text-[#0071BD]">Marking Scheme</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] rounded-full mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#0071BD] to-[#FF6B35] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Percentage</th>
                  <th className="px-6 py-4 text-left">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { percent: "80–100%", grade: "7" },
                  { percent: "70–79%", grade: "6" },
                  { percent: "60–69%", grade: "5" },
                  { percent: "50–59%", grade: "4" },
                  { percent: "40–49%", grade: "3" },
                  { percent: "30–39%", grade: "2" },
                  { percent: "Below 30%", grade: "1" }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">{row.percent}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full font-bold ${
                        row.grade === "7" ? "bg-green-100 text-green-700" :
                        row.grade === "6" ? "bg-blue-100 text-blue-700" :
                        row.grade === "5" ? "bg-yellow-100 text-yellow-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {row.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            *Note: Boundaries vary slightly each year
          </p>
        </div>
      </section>

      {/* Skills Developed */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=1920&q=80)',
          }}
        ></div>
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#0071BD] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#FF6B35] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-5 py-2 bg-[#0071BD]/10 text-[#0071BD] rounded-full text-sm font-semibold mb-4">
              Competencies & Abilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-gray-900">Skills </span>
              <span className="text-[#0071BD]">Developed</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🧠", title: "Advanced Analytical Reasoning", desc: "Develop critical thinking and problem-solving skills" },
              { icon: "📐", title: "Mathematical Modeling", desc: "Apply mathematical concepts to real-world scenarios" },
              { icon: "📝", title: "Scientific Writing", desc: "Master structured report and essay writing" },
              { icon: "📊", title: "Data Interpretation", desc: "Analyze and evaluate experimental data" },
              { icon: "💡", title: "Logical Argument Building", desc: "Construct well-reasoned scientific arguments" },
              { icon: "🔬", title: "Experimental Design", desc: "Design and conduct scientific investigations" }
            ].map((skill, index) => (
              <div key={index} className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">{skill.title}</h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-10 right-20 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif" style={{fontFamily: 'Georgia, serif'}}>
            Begin Your Physics Success Journey with <span className="text-[#FFD700]">IBClassesOnline</span>
          </h2>
          
          <p className="text-xl mb-8">
            Expert guidance • Small batches • 25+ years experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20book%20a%20free%20demo%20for%20IB%20Physics"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all"
            >
              📚 Book a Free Demo Class
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0071BD] transition-all"
            >
              📞 Call/WhatsApp: +91 831 740 7250
            </a>
          </div>
          
          <p className="mt-6 text-white/90">
            📧 Email: ibclassesonline@ixpoe.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default Physics;
