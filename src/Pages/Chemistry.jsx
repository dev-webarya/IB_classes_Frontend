import React from 'react';

const Chemistry = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&q=80)',
          }}
        ></div>
       
        {/* Green and Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#23B04D]/85 via-[#0071BD]/70 to-[#0071BD]/85 z-10"></div>
        
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
            <span>IB Chemistry</span> <span className="text-[#FFD700]">Tuition</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg mb-8" data-aos="fade-up" data-aos-delay="100">
            Master the Science of Matter – From Atoms to Complex Reactions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="zoom-in" data-aos-delay="200">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20join%20IB%20Chemistry%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/80 text-white font-bold rounded-lg hover:scale-105 hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              <span>🧪</span> Book Free Demo Class
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#23B04D] hover:scale-105 transition-all"
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#23B04D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0071BD] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block px-5 py-2 bg-[#23B04D]/10 text-[#23B04D] rounded-full text-sm font-semibold mb-6">
              About IB Chemistry
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight font-serif mb-4" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-black">Master the</span> <span className="text-[#0071BD]">Science of Matter</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#23B04D] to-[#0071BD] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Chemistry is often seen as one of the most challenging IB subjects – requiring mastery of theories, equations, reactions, and lab skills. At IBClassesOnline, we make Chemistry accessible, engaging, and achievable through conceptual clarity and step-by-step problem-solving.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              With over <strong className="text-[#23B04D]">25+ years of expertise</strong> in IB Chemistry teaching, IBClassesOnline has guided thousands of students to score exceptionally well in board exams and tests.
            </p>
          </div>

          {/* SL vs HL Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group relative bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#23B04D] hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#23B04D] to-[#23B04D]/80 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#23B04D]/10 to-[#23B04D]/5 rounded-full flex items-center justify-center mb-6 border border-[#23B04D]/20 group-hover:bg-white/20 transition-colors">
                  <span className="text-3xl">🧪</span>
                </div>
                <h3 className="text-2xl font-bold text-[#23B04D] group-hover:text-white mb-4 font-serif transition-colors" style={{fontFamily: 'Georgia, serif'}}>Chemistry SL</h3>
                <p className="text-gray-600 group-hover:text-white/90 mb-4 transition-colors">Standard Level</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#23B04D] group-hover:text-[#FFD700] font-bold transition-colors">~150</span>
                    <span className="text-gray-700 group-hover:text-white transition-colors">Teaching Hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#23B04D] group-hover:text-[#FFD700] font-bold transition-colors">Core</span>
                    <span className="text-gray-700 group-hover:text-white transition-colors">11 Main Topics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#23B04D] group-hover:text-[#FFD700] font-bold transition-colors">Moderate</span>
                    <span className="text-gray-700 group-hover:text-white transition-colors">Depth of Complexity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 group-hover:text-[#FFD700] transition-colors">✓</span>
                    <span className="text-gray-700 group-hover:text-white transition-colors">Best for non-Chemistry majors</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#0071BD] hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0071BD] to-[#0071BD]/80 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0071BD]/10 to-[#0071BD]/5 rounded-full flex items-center justify-center mb-6 border border-[#0071BD]/20 group-hover:bg-white/20 transition-colors">
                  <span className="text-3xl">⚗️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0071BD] group-hover:text-white mb-4 font-serif transition-colors" style={{fontFamily: 'Georgia, serif'}}>Chemistry HL</h3>
                <p className="text-gray-600 group-hover:text-white/90 mb-4 transition-colors">Higher Level</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0071BD] group-hover:text-[#FFD700] font-bold transition-colors">~240</span>
                    <span className="text-gray-700 group-hover:text-white transition-colors">Teaching Hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0071BD] group-hover:text-[#FFD700] font-bold transition-colors">Advanced</span>
                    <span className="text-gray-700 group-hover:text-white transition-colors">Additional HL Topics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0071BD] group-hover:text-[#FFD700] font-bold transition-colors">High</span>
                    <span className="text-gray-700 group-hover:text-white transition-colors">Advanced Problem Solving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 group-hover:text-[#FFD700] transition-colors">✓</span>
                    <span className="text-gray-700 group-hover:text-white transition-colors">For Medicine / Engineering / Sciences</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grade XI */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=1920&q=80)',
          }}
        ></div>
        
        {/* Decorative Gradient Blurs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#23B04D]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#0071BD]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-5 py-2 bg-[#23B04D]/10 text-[#23B04D] rounded-full text-sm font-semibold mb-4">
              Foundation Chemistry
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-black">Grade XI – </span>
              <span className="text-[#0071BD]">Foundation Topics</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#23B04D] to-[#0071BD] rounded-full mx-auto mb-2"></div>
            <p className="text-lg text-gray-600">Both SL & HL</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "⚛️",
                title: "Stoichiometric Relationships",
                topics: ["Mole concept", "Empirical & molecular formulae", "Balancing chemical equations", "Limiting reactants"]
              },
              {
                icon: "🔬",
                title: "Atomic Structure",
                topics: ["Electron configuration", "Quantum numbers", "Atomic emission spectra", "Ionization energy"]
              },
              {
                icon: "📊",
                title: "Periodicity",
                topics: ["Periodic table trends", "Electronegativity", "Atomic radius", "First ionization energy"]
              },
              {
                icon: "🔗",
                title: "Chemical Bonding & Structure",
                topics: ["Ionic, covalent, metallic bonding", "Lewis structures", "VSEPR theory", "Intermolecular forces"]
              },
              {
                icon: "⚡",
                title: "Energetics/Thermochemistry",
                topics: ["Enthalpy changes", "Calorimetry", "Hess's Law", "Bond enthalpies"]
              },
              {
                icon: "🧬",
                title: "Chemical Kinetics",
                topics: ["Rate of reaction", "Collision theory", "Catalysts", "Reaction mechanisms"]
              }
            ].map((topic, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                <ul className="space-y-2">
                  {topic.topics.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#23B04D] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Grade XII */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1554475901-e2ce1a3f857e?w=1920&q=80)',
          }}
        ></div>
        
        {/* Decorative Gradient Blurs */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#0071BD]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#23B04D]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-5 py-2 bg-[#0071BD]/10 text-[#0071BD] rounded-full text-sm font-semibold mb-4">
              Advanced Chemistry
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-black">Grade XII – </span>
              <span className="text-[#0071BD]">Advanced Topics</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#0071BD] to-[#23B04D] rounded-full mx-auto mb-2"></div>
            <p className="text-lg text-gray-600">Both SL & HL</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "⚖️",
                title: "Equilibrium",
                topics: ["Dynamic equilibrium", "Le Chatelier's principle", "Equilibrium constants (Kc, Kp)", "Position of equilibrium"]
              },
              {
                icon: "💧",
                title: "Acids & Bases",
                topics: ["Bronsted-Lowry theory", "pH calculations", "Strong vs weak acids/bases", "Buffer solutions"]
              },
              {
                icon: "🔋",
                title: "Redox Processes",
                topics: ["Oxidation states", "Half-reactions", "Galvanic cells", "Electrochemical series"]
              },
              {
                icon: "🧪",
                title: "Organic Chemistry",
                topics: ["Nomenclature", "Functional groups", "Isomerism", "Reaction mechanisms"]
              },
              {
                icon: "📈",
                title: "Measurement & Data Processing",
                topics: ["Uncertainty & error", "Graphical techniques", "Spectroscopic identification"]
              }
            ].map((topic, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                <ul className="space-y-2">
                  {topic.topics.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#0071BD] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HL Additional Topics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold mb-4">
              <span className="text-black">HL </span>
              <span className="text-[#0071BD]">Additional Topics</span>
            </h2>
            <p className="text-lg text-gray-600">For Higher Level Students Only</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Advanced Atomic Structure",
                topics: ["Electron configuration (detailed)", "Quantum mechanics", "Orbital hybridization"]
              },
              {
                title: "Advanced Energetics",
                topics: ["Entropy & Gibbs free energy", "Spontaneity predictions", "Advanced thermodynamics"]
              },
              {
                title: "Advanced Kinetics",
                topics: ["Rate expressions & orders", "Integrated rate laws", "Activation energy"]
              },
              {
                title: "Advanced Equilibrium",
                topics: ["Le Chatelier's principle (advanced)", "Gibbs energy & equilibrium"]
              },
              {
                title: "Advanced Acids & Bases",
                topics: ["Ka, Kb, pKa, pKb calculations", "Advanced buffer solutions", "Titration curves"]
              },
              {
                title: "Advanced Redox & Transition Metals",
                topics: ["Electrochemistry (detailed)", "Transition metal chemistry", "Ligands & coordination compounds"]
              },
              {
                title: "Advanced Organic Chemistry",
                topics: ["Stereochemistry", "Advanced mechanisms", "Synthetic routes"]
              }
            ].map((topic, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#0071BD] mb-4">{topic.title}</h3>
                <ul className="space-y-2">
                  {topic.topics.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#0071BD] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Assessment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#23B04D]/10 to-[#0071BD]/10 rounded-2xl p-8 border border-[#23B04D]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#23B04D] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                IA
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Internal Assessment (IA)</h3>
                <p className="text-gray-600">Both SL & HL</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700"><strong className="text-[#23B04D]">🧪 Individual Investigation</strong></p>
              <ul className="space-y-2 ml-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#23B04D]">•</span>
                  <span>Student-designed chemistry experiment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#23B04D]">•</span>
                  <span>Hypothesis, methodology, data collection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#23B04D]">•</span>
                  <span>Data analysis, evaluation, conclusion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#23B04D]">•</span>
                  <span>6-12 pages written report</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#23B04D]">•</span>
                  <span>Marked internally, moderated by IB</span>
                </li>
              </ul>
              <div className="bg-white rounded-lg p-4 mt-6">
                <p className="text-center text-lg"><strong className="text-[#0071BD]">IA Weightage: 20% of final grade</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Pattern */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold mb-4">
              <span className="text-black">External </span>
              <span className="text-[#0071BD]">Examination Pattern</span>
            </h2>
            <p className="text-lg text-gray-600">Grade XII Final Exams</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SL Exam Pattern */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-[#23B04D] mb-6">Chemistry SL</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#23B04D] pl-4">
                  <h4 className="font-bold text-gray-900">Paper 1</h4>
                  <p className="text-gray-600">45 mins | 20% | 30 Multiple Choice Questions</p>
                </div>
                <div className="border-l-4 border-[#23B04D] pl-4">
                  <h4 className="font-bold text-gray-900">Paper 2</h4>
                  <p className="text-gray-600">1 hr 15 mins | 40% | Short & Extended Response</p>
                </div>
                <div className="border-l-4 border-[#23B04D] pl-4">
                  <h4 className="font-bold text-gray-900">Paper 3</h4>
                  <p className="text-gray-600">1 hr | 20% | Data Analysis & Practical Questions</p>
                </div>
                <div className="border-l-4 border-[#0071BD] pl-4">
                  <h4 className="font-bold text-gray-900">Internal Assessment</h4>
                  <p className="text-gray-600">20%</p>
                </div>
              </div>
            </div>

            {/* HL Exam Pattern */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-[#0071BD] mb-6">Chemistry HL</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#0071BD] pl-4">
                  <h4 className="font-bold text-gray-900">Paper 1</h4>
                  <p className="text-gray-600">1 hr | 20% | 40 Multiple Choice Questions</p>
                </div>
                <div className="border-l-4 border-[#0071BD] pl-4">
                  <h4 className="font-bold text-gray-900">Paper 2</h4>
                  <p className="text-gray-600">2 hr 15 mins | 36% | Long & Complex Questions</p>
                </div>
                <div className="border-l-4 border-[#0071BD] pl-4">
                  <h4 className="font-bold text-gray-900">Paper 3</h4>
                  <p className="text-gray-600">1 hr 15 mins | 24% | Advanced Data Analysis + HL Topics</p>
                </div>
                <div className="border-l-4 border-[#23B04D] pl-4">
                  <h4 className="font-bold text-gray-900">Internal Assessment</h4>
                  <p className="text-gray-600">20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Boundaries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            <span className="text-black">IB </span>
            <span className="text-[#0071BD]">Marking Scheme</span>
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#23B04D] to-[#0071BD] text-white">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">
            <span className="text-black">Skills </span>
            <span className="text-[#0071BD]">Developed</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🔬", title: "Laboratory Skills", desc: "Master practical techniques and safety procedures" },
              { icon: "📊", title: "Data Analysis", desc: "Interpret and evaluate experimental results" },
              { icon: "💡", title: "Problem-Solving", desc: "Apply chemical principles to real-world scenarios" },
              { icon: "📝", title: "Scientific Writing", desc: "Communicate findings clearly and precisely" },
              { icon: "🧠", title: "Critical Thinking", desc: "Evaluate scientific claims and evidence" },
              { icon: "🔍", title: "Research Skills", desc: "Design and conduct independent investigations" }
            ].map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-200">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#23B04D] to-[#0071BD]">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Excel in IB Chemistry with Expert Guidance
          </h2>
          
          <p className="text-xl mb-8">
            Conceptual clarity • Practical skills • 25+ years experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20book%20a%20free%20demo%20for%20IB%20Chemistry"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all"
            >
              🧪 Book a Free Demo Class
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#23B04D] transition-all"
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

export default Chemistry;
