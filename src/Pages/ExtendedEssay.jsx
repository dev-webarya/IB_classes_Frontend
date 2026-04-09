import React from 'react';

const ExtendedEssay = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/85 to-pink-900/90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center text-white">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-6">
            <span className="text-3xl">📝</span>
            <span className="text-sm font-bold uppercase tracking-wider">IB Diploma Core</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Extended Essay (EE)
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Master Your 4,000-Word Independent Research Journey
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/917348956284?text=I%20need%20help%20with%20my%20Extended%20Essay"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <span>📚</span> Get EE Guidance
            </a>
            <a 
              href="#ee-details"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-indigo-700 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50" id="ee-details">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              What is the Extended Essay?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The <strong className="text-indigo-700">Extended Essay (EE)</strong> is a mandatory 4,000-word independent research paper that forms a core component of the IB Diploma Programme. It allows students to investigate a topic of special interest and develop essential academic research skills.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The EE is assessed externally and, <strong>combined with Theory of Knowledge (TOK), contributes up to 3 bonus points</strong> to your final IB Diploma score (out of 45 total points).
            </p>
          </div>
        </div>
      </section>

      {/* Key Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Key Requirements
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center text-3xl mb-6">
                📏
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Word Count</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span><strong>Maximum 4,000 words</strong> (examiners stop reading beyond this limit)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span>Word count includes introduction, body, conclusion, and citations within the text</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span>Excludes: acknowledgments, contents page, maps, charts, diagrams, references, and bibliography</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-3xl mb-6">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Question</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span>Must have a <strong>clearly focused research question</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span>Should be within one of your IB Diploma subjects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span>Must allow for in-depth analysis and critical thinking</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 border border-pink-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-600 rounded-xl flex items-center justify-center text-3xl mb-6">
                👨‍🏫
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supervision</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold mt-1">•</span>
                  <span>Assigned supervisor for guidance (3-5 hours of supervision time)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold mt-1">•</span>
                  <span>Three mandatory reflection sessions with supervisor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold mt-1">•</span>
                  <span>Supervisor completes assessment form but does not grade the essay</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-3xl mb-6">
                📑
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Structure</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>Title page with research question</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>Contents page, Introduction, Body paragraphs, Conclusion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>References and Bibliography in approved academic format</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Criteria */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Assessment Criteria
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-3xl mx-auto">
            The Extended Essay is assessed out of <strong>34 marks</strong> and graded from A (excellent) to E (elementary), contributing to the bonus points matrix with TOK.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Focus & Method", points: "6 marks", description: "Research question, methodology, and approach" },
              { title: "Knowledge & Understanding", points: "6 marks", description: "Context, subject knowledge, and terminology" },
              { title: "Critical Thinking", points: "12 marks", description: "Analysis, evaluation, and discussion" },
              { title: "Presentation", points: "4 marks", description: "Structure, layout, and format" },
              { title: "Engagement", points: "6 marks", description: "Reflection process and intellectual initiative" },
            ].map((criterion, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-indigo-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{criterion.title}</h3>
                <p className="text-indigo-700 font-bold text-lg mb-3">{criterion.points}</p>
                <p className="text-gray-600">{criterion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Choose Your EE Subject
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { subject: "Biology", icon: "🧬", color: "from-green-600 to-teal-600" },
              { subject: "Chemistry", icon: "🧪", color: "from-blue-600 to-cyan-600" },
              { subject: "Physics", icon: "⚛️", color: "from-indigo-600 to-blue-600" },
              { subject: "Mathematics", icon: "📐", color: "from-red-600 to-pink-600" },
              { subject: "Economics", icon: "💰", color: "from-emerald-600 to-green-600" },
              { subject: "English Literature", icon: "📚", color: "from-purple-600 to-indigo-600" },
              { subject: "History", icon: "🏛️", color: "from-yellow-600 to-orange-600" },
              { subject: "Psychology", icon: "🧠", color: "from-pink-600 to-rose-600" },
              { subject: "Computer Science", icon: "💻", color: "from-violet-600 to-purple-600" },
            ].map((item, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${item.color} rounded-xl p-6 text-white hover:scale-105 transition-transform cursor-pointer shadow-lg`}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold">{item.subject}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            How IBClassesOnline Helps Your EE Success
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">✅</span> Expert Supervision
              </h3>
              <p className="text-white/90 leading-relaxed">
                Work with experienced IB educators who guide you through topic selection, research methodology, and structure development.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">📖</span> Research Training
              </h3>
              <p className="text-white/90 leading-relaxed">
                Learn academic research skills including source evaluation, note-taking, citation formatting, and avoiding plagiarism.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">💬</span> Draft Reviews
              </h3>
              <p className="text-white/90 leading-relaxed">
                Receive detailed feedback on your drafts with actionable suggestions for improvement in analysis, argumentation, and structure.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🎯</span> Grade Maximization
              </h3>
              <p className="text-white/90 leading-relaxed">
                Strategies to achieve the highest possible grade and secure bonus points when combined with TOK performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Start Your Extended Essay Journey Today
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            With 25+ years of IB expertise, we've guided hundreds of students to EE success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/917348956284?text=I%20want%20to%20book%20an%20EE%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              <span>📝</span> Book EE Consultation
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

export default ExtendedEssay;
