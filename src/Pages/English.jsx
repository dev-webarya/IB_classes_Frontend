import React from 'react';

const English = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-700 to-emerald-600">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center text-white">
          <div className="mb-6 flex justify-center">
            <img 
              src="/logo (3).png" 
              alt="IBClassesOnline Logo" 
              className="h-20 md:h-24 drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            IB English Tuition
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            IB English Language & Literature – Master Analysis, Writing & Critical Thinking
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20join%20IB%20English%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <span>📚</span> Book Free Demo Class
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition-all"
            >
              📞 Call: +91 831 740 7250
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              IB English Language & Literature is a rigorous course that develops critical reading, analytical writing, and deep textual understanding. Students explore a wide range of literary and non-literary texts, mastering interpretation, argumentation, and stylistic analysis.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              At IBClassesOnline, with <strong className="text-green-700">25+ years of IB English expertise</strong>, we help students build strong essay-writing skills, develop literary analysis techniques, and achieve top scores.
            </p>
          </div>

          {/* SL vs HL Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-600">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">📖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">English Language & Literature SL</h3>
              <p className="text-gray-600 mb-4">Standard Level</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">~150</span>
                  <span className="text-gray-700">Teaching Hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">4 Works</span>
                  <span className="text-gray-700">Literature studied</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Focus on language & literature integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-emerald-600">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">English Language & Literature HL</h3>
              <p className="text-gray-600 mb-4">Higher Level</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">~240</span>
                  <span className="text-gray-700">Teaching Hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">6 Works</span>
                  <span className="text-gray-700">Literature studied</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Advanced analysis & critical theory</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Components */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">Course </span>
              <span className="text-green-700">Components</span>
            </h2>
            <p className="text-lg text-gray-600">Both SL & HL</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Readers, Writers, & Texts</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">•</span>
                  <span className="text-gray-700">Close reading & textual analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">•</span>
                  <span className="text-gray-700">Writer's choices: style, structure, technique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">•</span>
                  <span className="text-gray-700">Intertextuality & comparative analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⏳</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Time & Space</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span className="text-gray-700">Contextual understanding of texts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span className="text-gray-700">Historical, cultural, social contexts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span className="text-gray-700">Impact of time & place on meaning</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intertextuality</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">•</span>
                  <span className="text-gray-700">Connections across texts & genres</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">•</span>
                  <span className="text-gray-700">Literary & non-literary texts compared</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">•</span>
                  <span className="text-gray-700">Perspectives & interpretations</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Writing & Commentary</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span className="text-gray-700">Original compositions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span className="text-gray-700">Reflection on writing process</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span className="text-gray-700">Analysis of own stylistic choices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Text Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">Texts </span>
              <span className="text-emerald-600">Studied</span>
            </h2>
            <p className="text-lg text-gray-600">Literary & Non-Literary</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📖", title: "Literature", items: ["Novels", "Poetry", "Drama", "Short stories"] },
              { icon: "📰", title: "Non-Fiction", items: ["Articles", "Essays", "Speeches", "Memoirs"] },
              { icon: "📺", title: "Media Texts", items: ["Films", "Advertisements", "Blogs", "Social media"] },
              { icon: "🎭", title: "Multimodal", items: ["Graphic novels", "Comics", "Visual texts", "Digital media"] }
            ].map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <ul className="space-y-2">
                  {type.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 text-sm">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Assessment */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-green-700/10 to-emerald-600/10 rounded-2xl p-8 border border-green-700/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                IA
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Internal Assessment – Individual Oral</h3>
                <p className="text-gray-600">Both SL & HL</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700"><strong className="text-green-700">🎤 Individual Oral Assessment</strong></p>
              <ul className="space-y-2 ml-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-700">•</span>
                  <span>15-minute oral presentation + discussion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700">•</span>
                  <span>Based on a global issue explored through 2 texts (1 literary, 1 non-literary)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700">•</span>
                  <span>10 minutes prepared + 5 minutes discussion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700">•</span>
                  <span>Assessed by teacher, moderated by IB</span>
                </li>
              </ul>
              <div className="bg-white rounded-lg p-4 mt-6">
                <p className="text-center text-lg"><strong className="text-emerald-600">IA Weightage: 30% of final grade</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Pattern */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">External </span>
              <span className="text-green-700">Examination Pattern</span>
            </h2>
            <p className="text-lg text-gray-600">Grade XII Final Exams</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SL Exam Pattern */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6">English Language & Literature SL</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 1: Guided Textual Analysis</h4>
                  <p className="text-gray-600">1 hr 15 mins | 35% | Analyze unseen non-literary passage</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 2: Comparative Essay</h4>
                  <p className="text-gray-600">1 hr 45 mins | 35% | Compare 2 literary works</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <h4 className="font-bold text-gray-900">Internal Assessment: Individual Oral</h4>
                  <p className="text-gray-600">30%</p>
                </div>
              </div>
            </div>

            {/* HL Exam Pattern */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-emerald-600 mb-6">English Language & Literature HL</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 1: Guided Textual Analysis</h4>
                  <p className="text-gray-600">2 hrs 15 mins | 35% | Analyze 2 unseen passages</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 2: Comparative Essay</h4>
                  <p className="text-gray-600">1 hr 45 mins | 25% | Compare 2 works</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <h4 className="font-bold text-gray-900">HL Essay</h4>
                  <p className="text-gray-600">External | 20% | 1200-1500 word essay</p>
                </div>
                <div className="border-l-4 border-green-700 pl-4">
                  <h4 className="font-bold text-gray-900">Internal Assessment: Individual Oral</h4>
                  <p className="text-gray-600">20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Developed */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gray-900">Skills </span>
            <span className="text-green-700">Developed</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📖", title: "Literary Analysis", desc: "Interpret complex texts and themes" },
              { icon: "✍️", title: "Essay Writing", desc: "Construct well-argued analytical essays" },
              { icon: "🗣️", title: "Oral Communication", desc: "Present and defend interpretations" },
              { icon: "🔍", title: "Critical Thinking", desc: "Evaluate textual evidence and arguments" },
              { icon: "📝", title: "Stylistic Analysis", desc: "Identify and explain writer's techniques" },
              { icon: "🌍", title: "Cultural Awareness", desc: "Understand global and contextual perspectives" }
            ].map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-200">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-700 to-emerald-600">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Excel in IB English with Expert Teaching
          </h2>
          
          <p className="text-xl mb-8">
            Literary Analysis • Essay Skills • Oral Mastery • 25+ years experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20book%20a%20free%20demo%20for%20IB%20English"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all"
            >
              📚 Book a Free Demo Class
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition-all"
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

export default English;
