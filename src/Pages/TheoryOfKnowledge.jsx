import React from 'react';

const TheoryOfKnowledge = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/85 to-blue-900/90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center text-white">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-6">
            <span className="text-3xl">🤔</span>
            <span className="text-sm font-bold uppercase tracking-wider">IB Diploma Core</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Theory of Knowledge (TOK)
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Critical Thinking • Epistemology • Knowledge Questions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/917348956284?text=I%20need%20help%20with%20TOK"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <span>💡</span> Get TOK Help
            </a>
            <a 
              href="#tok-details"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-700 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50" id="tok-details">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              What is Theory of Knowledge?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-purple-700">Theory of Knowledge (TOK)</strong> is a core component of the IB Diploma Programme that challenges students to reflect on the nature of knowledge and how we know what we claim to know.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              TOK encourages critical thinking about knowledge claims in different Areas of Knowledge (AOK) and explores the role of Ways of Knowing (WOK). <strong>Combined with the Extended Essay, TOK contributes up to 3 bonus points</strong> to your IB Diploma score.
            </p>
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            TOK Framework
          </h2>

          {/* Areas of Knowledge */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-purple-700 mb-8 text-center">
              Areas of Knowledge (AOK)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Mathematics", icon: "📐", color: "from-red-600 to-pink-600" },
                { title: "Natural Sciences", icon: "🔬", color: "from-green-600 to-teal-600" },
                { title: "Human Sciences", icon: "👥", color: "from-blue-600 to-cyan-600" },
                { title: "The Arts", icon: "🎨", color: "from-purple-600 to-pink-600" },
                { title: "History", icon: "🏛️", color: "from-orange-600 to-red-600" },
                { title: "Ethics", icon: "⚖️", color: "from-indigo-600 to-purple-600" },
                { title: "Religious Knowledge", icon: "🕊️", color: "from-yellow-600 to-orange-600" },
                { title: "Indigenous Knowledge", icon: "🌏", color: "from-emerald-600 to-green-600" },
              ].map((aok, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${aok.color} rounded-xl p-6 text-white hover:scale-105 transition-transform shadow-lg`}
                >
                  <div className="text-4xl mb-3">{aok.icon}</div>
                  <h4 className="text-lg font-bold">{aok.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Ways of Knowing */}
          <div>
            <h3 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
              Ways of Knowing (WOK)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Sense Perception", icon: "👁️", description: "Using our five senses" },
                { title: "Reason", icon: "🧠", description: "Logic and rational thinking" },
                { title: "Emotion", icon: "❤️", description: "Feelings and intuition" },
                { title: "Language", icon: "💬", description: "Communication and expression" },
                { title: "Memory", icon: "🧩", description: "Recollection of past experiences" },
                { title: "Faith", icon: "✨", description: "Belief without proof" },
                { title: "Imagination", icon: "🌟", description: "Creative and hypothetical thinking" },
                { title: "Intuition", icon: "💡", description: "Instinctive knowledge" },
              ].map((wok, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-3">{wok.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{wok.title}</h4>
                  <p className="text-sm text-gray-600">{wok.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Components */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            TOK Assessment
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* TOK Essay */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-purple-600">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-3xl mb-6">
                📝
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">TOK Essay</h3>
              <p className="text-purple-700 font-bold text-xl mb-4">67% of Total Grade</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span><strong>1,600 words maximum</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span>Choose 1 title from 6 prescribed titles released by IB</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span>Must address a knowledge question</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span>Externally assessed by IB examiners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span>Graded out of 10 marks</span>
                </li>
              </ul>
            </div>

            {/* TOK Exhibition */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-indigo-600">
              <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center text-3xl mb-6">
                🖼️
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">TOK Exhibition</h3>
              <p className="text-indigo-700 font-bold text-xl mb-4">33% of Total Grade</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span><strong>3 objects</strong> connected to a knowledge question</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span>Choose from 35 IA prompts provided by IB</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span>950 words maximum (total for all 3 objects)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span>Internally assessed by teacher, externally moderated</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span>Graded out of 10 marks</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Grading */}
          <div className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-xl border-t-4 border-purple-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Overall TOK Grade</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-700 text-white">
                    <th className="border border-gray-300 px-4 py-3">Grade</th>
                    <th className="border border-gray-300 px-4 py-3">Total Marks</th>
                    <th className="border border-gray-300 px-4 py-3">Descriptor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 px-4 py-3 text-center font-bold">A</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">18-20</td>
                    <td className="border border-gray-300 px-4 py-3">Excellent</td>
                  </tr>
                  <tr className="bg-green-100">
                    <td className="border border-gray-300 px-4 py-3 text-center font-bold">B</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">15-17</td>
                    <td className="border border-gray-300 px-4 py-3">Good</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 px-4 py-3 text-center font-bold">C</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">12-14</td>
                    <td className="border border-gray-300 px-4 py-3">Satisfactory</td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="border border-gray-300 px-4 py-3 text-center font-bold">D</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">9-11</td>
                    <td className="border border-gray-300 px-4 py-3">Mediocre</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 px-4 py-3 text-center font-bold">E</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">0-8</td>
                    <td className="border border-gray-300 px-4 py-3">Elementary</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            How IBClassesOnline Supports Your TOK Success
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🎯</span> Essay Guidance
              </h3>
              <p className="text-white/90 leading-relaxed">
                Expert help in selecting the best prescribed title, developing knowledge questions, and structuring your TOK essay for maximum marks.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🖼️</span> Exhibition Support
              </h3>
              <p className="text-white/90 leading-relaxed">
                Assistance in choosing meaningful objects, connecting them to IA prompts, and writing compelling commentary for your TOK exhibition.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">💭</span> Critical Thinking Skills
              </h3>
              <p className="text-white/90 leading-relaxed">
                Develop advanced critical thinking and analytical skills essential for TOK and applicable across all IB subjects and beyond.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">📚</span> Comprehensive Resources
              </h3>
              <p className="text-white/90 leading-relaxed">
                Access to exemplar essays, past exhibition examples, knowledge question banks, and detailed study materials.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">✏️</span> Draft Reviews
              </h3>
              <p className="text-white/90 leading-relaxed">
                Detailed feedback on your TOK essay and exhibition drafts with specific suggestions for improvement.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🏆</span> Bonus Points Strategy
              </h3>
              <p className="text-white/90 leading-relaxed">
                Strategic approach to maximize your bonus points from the EE/TOK matrix, aiming for that crucial grade boost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Excel in Theory of Knowledge with Expert Support
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            25+ years of IB expertise to guide you through TOK essay and exhibition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/917348956284?text=I%20need%20TOK%20guidance"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              <span>💡</span> Start TOK Preparation
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

export default TheoryOfKnowledge;
