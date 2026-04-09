import React from 'react';

const German = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 to-yellow-500">
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
            IB German Tuition
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Master German Language – Reading, Writing, Speaking & Listening
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20join%20IB%20German%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <span>🇩🇪</span> Book Free Demo Class
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-all"
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
              IB German develops proficiency in one of the world's most important languages, opening doors to European opportunities in business, research, and culture. The course emphasizes communication, comprehension, and cultural understanding.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              At IBClassesOnline, with <strong className="text-red-600">25+ years of IB language teaching expertise</strong>, we help students master German through immersive practice, authentic texts, and systematic skill-building.
            </p>
          </div>

          {/* Language Levels */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
  <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">📖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">German ab initio</h3>
              <p className="text-gray-600 mb-4">For Beginners (SL Only)</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">~150</span>
                  <span className="text-gray-700">Teaching Hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">No prior German knowledge needed</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red-500">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">German B SL</h3>
              <p className="text-gray-600 mb-4">Intermediate Level</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">~150</span>
                  <span className="text-gray-700">Teaching Hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">2-5 years prior learning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-yellow-600">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">German B HL</h3>
              <p className="text-gray-600 mb-4">Advanced Level</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">~240</span>
                  <span className="text-gray-700">Teaching Hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Strong prior knowledge</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">Four </span>
              <span className="text-red-600">Core Skills</span>
            </h2>
            <p className="text-lg text-gray-600">Balanced Development Across All Levels</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "👂",
                title: "Listening",
                desc: "Understand spoken German in various contexts"
              },
              {
                icon: "💬",
                title: "Speaking",
                desc: "Communicate fluently and accurately"
              },
              {
                icon: "📖",
                title: "Reading",
                desc: "Comprehend authentic German texts"
              },
              {
                icon: "✍️",
                title: "Writing",
                desc: "Produce various text types effectively"
              }
            ].map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">Thematic </span>
              <span className="text-yellow-600">Topics</span>
            </h2>
            <p className="text-lg text-gray-600">Real-World Contexts</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "👤", title: "Identities", topics: ["Lifestyle", "Health", "Relationships", "Beliefs & values"] },
              { icon: "🌍", title: "Experiences", topics: ["Leisure", "Holidays", "Festivals", "Life stories"] },
              { icon: "🏙️", title: "Human Ingenuity", topics: ["Entertainment", "Artistic expressions", "Communication", "Technology"] },
              { icon: "🌿", title: "Social Organization", topics: ["Social relationships", "Education", "The workplace", "Law & order"] },
              { icon: "🌎", title: "Sharing the Planet", topics: ["Environment", "Human rights", "Peace & conflict", "Equality"] }
            ].map((topic, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                <ul className="space-y-2">
                  {topic.topics.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">•</span>
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
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-red-600/10 to-yellow-500/10 rounded-2xl p-8 border border-red-600/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                IA
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Internal Assessment – Individual Oral</h3>
                <p className="text-gray-600">All Levels (ab initio, SL, HL)</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700"><strong className="text-red-600">🎤 Individual Oral Assessment</strong></p>
              <ul className="space-y-2 ml-8">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>15-minute oral examination (10 mins for ab initio)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Based on visual stimulus + follow-up discussion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Students present and discuss a chosen topic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Assessed by teacher, moderated by IB</span>
                </li>
              </ul>
              <div className="bg-white rounded-lg p-4 mt-6">
                <p className="text-center text-lg"><strong className="text-yellow-600">IA Weightage: 30% of final grade</strong></p>
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
              <span className="text-red-600">Examination Pattern</span>
            </h2>
            <p className="text-lg text-gray-600">Grade XII Final Exams</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">German ab initio / B SL</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 1: Writing</h4>
                  <p className="text-gray-600">1 hr 15 mins | 25% | Productive Skills</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 2: Listening & Reading</h4>
                  <p className="text-gray-600">1 hr 45 mins (2 hrs HL) | 50% (45% HL) | Receptive Skills</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-bold text-gray-900">Internal Assessment: Individual Oral</h4>
                  <p className="text-gray-600">25%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-yellow-600 mb-6">German B HL</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 1: Writing</h4>
                  <p className="text-gray-600">1 hr 30 mins | 25% | Essay (450-600 words)</p>
                </div>
                <div className="border-l-4 border-yellow-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 2: Listening & Reading</h4>
                  <p className="text-gray-600">2 hrs | 45% | Comprehension Questions</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-bold text-gray-900">Internal Assessment: Individual Oral</h4>
                  <p className="text-gray-600">30%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-yellow-500">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Master German with Expert IB Teachers
          </h2>
          
          <p className="text-xl mb-8">
            ab initio • SL • HL • Native Speakers • 25+ years experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20book%20a%20free%20demo%20for%20IB%20German"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all"
            >
              🇩🇪 Book a Free Demo Class
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-all"
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

export default German;
