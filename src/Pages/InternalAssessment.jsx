import React from 'react';

const InternalAssessment = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-purple-900/90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center text-white">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-6">
            <span className="text-3xl">📊</span>
            <span className="text-sm font-bold uppercase tracking-wider">IB Assessment</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Internal Assessment (IA)
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Subject-Specific Research & Investigation Projects
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/917348956284?text=I%20need%20help%20with%20my%20Internal%20Assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <span>📈</span> Get IA Support
            </a>
            <a 
              href="#ia-details"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-700 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50" id="ia-details">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              What is Internal Assessment?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The <strong className="text-blue-700">Internal Assessment (IA)</strong> is a subject-specific research or investigation project that forms an essential component of most IB Diploma subjects. Each IA allows you to explore a topic of personal interest within the subject framework.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Internal Assessments are <strong>internally marked by your teacher and externally moderated by IB</strong>, contributing <strong>20-30% of your final subject grade</strong> depending on the subject.
            </p>
          </div>
        </div>
      </section>

      {/* Subject-Specific IAs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            IA by Subject Group
          </h2>

          <div className="space-y-8">
            {/* Group 1: Language & Literature */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-3">
                <span className="text-3xl">📚</span> Group 1: Language & Literature
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Individual Oral (IO)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold mt-1">•</span>
                      <span>10-minute prepared oral with 5-minute follow-up questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold mt-1">•</span>
                      <span>Analyze global issue through literary works</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold mt-1">•</span>
                      <span>30% of final grade</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Higher Level Essay (HL only)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold mt-1">•</span>
                      <span>1,200-1,500 word essay</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold mt-1">•</span>
                      <span>Critical analysis of a literary work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold mt-1">•</span>
                      <span>20% of final grade (HL)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Group 2: Language Acquisition */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
                <span className="text-3xl">🌍</span> Group 2: Language Acquisition
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Individual Oral (IO)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>12-15 minute oral presentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>Visual stimulus with follow-up conversation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>30% of final grade</span>
                    </li>
                  </ul>
                </div>
                <div className="text-gray-600">
                  <p className="text-sm italic">Focus on communication skills and cultural understanding through the target language</p>
                </div>
              </div>
            </div>

            {/* Group 3: Individuals & Societies */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-3">
                <span className="text-3xl">🏛️</span> Group 3: Individuals & Societies
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">History: Historical Investigation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span>2,200 word investigation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span>Historical research question</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span>25% of final grade</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Economics: Commentary</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span>3 commentaries (750 words each)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span>Based on real-world economics articles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span>30% of final grade</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Group 4: Sciences */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
              <h3 className="text-2xl font-bold text-teal-700 mb-4 flex items-center gap-3">
                <span className="text-3xl">🔬</span> Group 4: Sciences (Physics, Chemistry, Biology)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Individual Investigation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold mt-1">•</span>
                      <span>6-12 pages (2,200-2,500 words recommended)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold mt-1">•</span>
                      <span>Hands-on scientific investigation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold mt-1">•</span>
                      <span>Research question, method, data analysis, conclusion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold mt-1">•</span>
                      <span>20% of final grade (SL & HL)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <p className="text-sm text-gray-700"><strong>Sections:</strong> Research Question, Background Information, Methodology, Analysis, Conclusion, Evaluation</p>
                </div>
              </div>
            </div>

            {/* Group 5: Mathematics */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-3">
                <span className="text-3xl">📐</span> Group 5: Mathematics (AA & AI)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Mathematical Exploration</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">•</span>
                      <span>12-20 pages maximum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">•</span>
                      <span>Investigate area of mathematics of personal interest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">•</span>
                      <span>Must include personal engagement & reflection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">•</span>
                      <span>20% of final grade</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <p className="text-sm text-gray-700"><strong>Key Criteria:</strong> Communication, Mathematical Presentation, Personal Engagement, Reflection, Use of Mathematics</p>
                </div>
              </div>
            </div>

            {/* Group 6: Arts */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-100">
              <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-3">
                <span className="text-3xl">🎨</span> Group 6: The Arts
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Visual Arts: Exhibition</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold mt-1">•</span>
                      <span>4-7 artworks (SL) or 8-11 artworks (HL)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold mt-1">•</span>
                      <span>Curatorial rationale (400-700 words)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold mt-1">•</span>
                      <span>40% of final grade</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Computer Science: Solution</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold mt-1">•</span>
                      <span>Computational solution to a problem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold mt-1">•</span>
                      <span>30 hours development (SL) / 30-40 hours (HL)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold mt-1">•</span>
                      <span>30% of final grade</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Assessment Criteria */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Common IA Success Factors
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Personal Engagement", icon: "❤️", description: "Show genuine interest and initiative in your chosen topic" },
              { title: "Clear Research Question", icon: "🎯", description: "Focused, specific, and appropriate for the subject discipline" },
              { title: "Methodology", icon: "🔍", description: "Well-planned approach with justified methods and techniques" },
              { title: "Data Analysis", icon: "📊", description: "Thorough analysis with appropriate tools and interpretation" },
              { title: "Evaluation", icon: "⚖️", description: "Critical reflection on limitations, weaknesses, and improvements" },
              { title: "Academic Writing", icon: "✍️", description: "Clear communication, proper citations, and professional formatting" },
            ].map((factor, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-blue-600"
              >
                <div className="text-4xl mb-3">{factor.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{factor.title}</h3>
                <p className="text-gray-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            How IBClassesOnline Supports Your IA Success
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">💡</span> Topic Selection
              </h3>
              <p className="text-white/90 leading-relaxed">
                Guidance in choosing appropriate, focused, and interesting topics that align with IB requirements and your strengths.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">📋</span> Planning Support
              </h3>
              <p className="text-white/90 leading-relaxed">
                Help with developing research questions, planning methodology, and creating structured timelines for your IA completion.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🔬</span> Research Methods
              </h3>
              <p className="text-white/90 leading-relaxed">
                Training in appropriate research methods, data collection techniques, and analysis tools specific to your subject.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">✏️</span> Draft Feedback
              </h3>
              <p className="text-white/90 leading-relaxed">
                Detailed feedback on your IA drafts with specific suggestions aligned with IB assessment criteria and mark schemes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">📚</span> Exemplar Access
              </h3>
              <p className="text-white/90 leading-relaxed">
                Review high-scoring sample IAs from various subjects to understand what excellence looks like in practice.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🏆</span> Grade Optimization
              </h3>
              <p className="text-white/90 leading-relaxed">
                Strategic approach to maximize marks in each criterion, ensuring your IA contributes significantly to your final grade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ace Your Internal Assessment with Expert Guidance
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Subject-specific IA support from teachers with 25+ years of IB experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/917348956284?text=I%20need%20IA%20support"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              <span>📊</span> Get IA Help
            </a>
            <a 
              href="tel:+917348956284"
              className="px-10 py-4 border-2 border-[#FF6B35] text-[#FF6B35] font-bold rounded-lg hover:bg-[#FF6B35] hover:text-white transition-all"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternalAssessment;
