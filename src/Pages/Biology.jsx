import React from 'react';

const Biology = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-600 to-teal-500">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center text-white">
          <div className="mb-6 flex justify-center">
            <img 
              src="/logo (3).png" 
              alt="IBClassesOnline Logo" 
              className="h-20 md:h-24 drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            IB Biology Tuition
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Explore the Science of Life – From Molecules to Ecosystems
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20join%20IB%20Biology%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <span>🧬</span> Book Free Demo Class
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all"
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
              Biology is the science of life – a subject that connects molecular processes, cellular mechanisms, human anatomy, evolution, and ecology into one fascinating discipline. At IBClassesOnline, we make Biology engaging, visual, and easy to understand.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              With <strong className="text-green-600">25+ years of IB Biology teaching experience</strong>, we help students build conceptual clarity, master diagrams, and develop critical thinking for exams and beyond.
            </p>
          </div>

          {/* SL vs HL Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🧬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Biology SL</h3>
              <p className="text-gray-600 mb-4">Standard Level</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">~150</span>
                  <span className="text-gray-700">Teaching Hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">Core</span>
                  <span className="text-gray-700">6 Main Topics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">Moderate</span>
                  <span className="text-gray-700">Depth & Complexity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Best for non-Biology majors</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-teal-500">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Biology HL</h3>
              <p className="text-gray-600 mb-4">Higher Level</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">~240</span>
                  <span className="text-gray-700">Teaching Hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">Advanced</span>
                  <span className="text-gray-700">Additional HL Topics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">High</span>
                  <span className="text-gray-700">Advanced Depth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">For Medicine / Life Sciences / Research</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grade XI */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">Grade XI – </span>
              <span className="text-green-600">Foundation Topics</span>
            </h2>
            <p className="text-lg text-gray-600">Both SL & HL</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🧬",
                title: "Cell Biology",
                topics: ["Cell theory", "Cell structure", "Membrane transport", "Cell division (mitosis & meiosis)"]
              },
              {
                icon: "🧪",
                title: "Molecular Biology",
                topics: ["Carbohydrates, lipids, proteins", "DNA structure & replication", "Transcription & translation", "Enzymes"]
              },
              {
                icon: "🧫",
                title: "Genetics",
                topics: ["Mendelian genetics", "Genetic diagrams", "Inheritance patterns", "Genetic modification"]
              },
              {
                icon: "🌱",
                title: "Ecology",
                topics: ["Species & ecosystems", "Energy flow", "Carbon & nitrogen cycles", "Climate change impact"]
              },
              {
                icon: "🧠",
                title: "Evolution & Biodiversity",
                topics: ["Natural selection", "Classification", "Cladistics", "Speciation"]
              },
              {
                icon: "🫀",
                title: "Human Physiology",
                topics: ["Digestion", "Circulatory system", "Defense against disease", "Gas exchange"]
              }
            ].map((topic, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                <ul className="space-y-2">
                  {topic.topics.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">•</span>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-2xl font-bold mb-4">
              <span className="text-gray-900">HL </span>
              <span className="text-teal-600">Additional Topics</span>
            </h2>
            <p className="text-lg text-gray-600">For Higher Level Students Only</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Nucleic Acids (Advanced)",
                topics: ["DNA structure & repair mechanisms", "Gene expression regulation", "Recombinant DNA technology"]
              },
              {
                title: "Metabolism, Cell Respiration & Photosynthesis",
                topics: ["Biochemical pathways", "Glycolysis, Krebs cycle", "Electron transport chain", "Light-dependent & independent reactions"]
              },
              {
                title: "Plant Biology",
                topics: ["Plant structure & growth", "Transport in plants (xylem & phloem)", "Reproduction in flowering plants"]
              },
              {
                title: "Genetics & Evolution (Advanced)",
                topics: ["Meiosis in detail", "Inheritance patterns", "Gene pools & speciation"]
              },
              {
                title: "Animal Physiology (Advanced)",
                topics: ["Antibody production", "Muscle & bone systems", "Hormones & homeostasis", "Nervous system in detail"]
              }
            ].map((topic, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-teal-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-teal-600 mb-4">{topic.title}</h3>
                <ul className="space-y-2">
                  {topic.topics.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-green-600/10 to-teal-500/10 rounded-2xl p-8 border border-green-600/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                IA
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Internal Assessment (IA)</h3>
                <p className="text-gray-600">Both SL & HL</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700"><strong className="text-green-600">🔬 Individual Investigation</strong></p>
              <ul className="space-y-2 ml-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>Student-designed biological experiment or field study</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>Research question, hypothesis, methodology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>Data collection, analysis, evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>6-12 pages written report</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>Marked internally, moderated by IB</span>
                </li>
              </ul>
              <div className="bg-white rounded-lg p-4 mt-6">
                <p className="text-center text-lg"><strong className="text-teal-600">IA Weightage: 20% of final grade</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Pattern */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-2xl font-bold mb-4">
              <span className="text-gray-900">External </span>
              <span className="text-green-600">Examination Pattern</span>
            </h2>
            <p className="text-lg text-gray-600">Grade XII Final Exams</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SL Exam Pattern */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-green-600 mb-6">Biology SL</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 1</h4>
                  <p className="text-gray-600">45 mins | 20% | 30 Multiple Choice</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 2</h4>
                  <p className="text-gray-600">1 hr 15 mins | 40% | Data-based & Short/Extended Response</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 3</h4>
                  <p className="text-gray-600">1 hr | 20% | Practical & Data Analysis</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-bold text-gray-900">Internal Assessment</h4>
                  <p className="text-gray-600">20%</p>
                </div>
              </div>
            </div>

            {/* HL Exam Pattern */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-teal-600 mb-6">Biology HL</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 1</h4>
                  <p className="text-gray-600">1 hr | 20% | 40 Multiple Choice</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 2</h4>
                  <p className="text-gray-600">2 hr 15 mins | 36% | Extended Response & Essays</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 3</h4>
                  <p className="text-gray-600">1 hr 15 mins | 24% | Advanced Data Analysis + HL Options</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-bold text-gray-900">Internal Assessment</h4>
                  <p className="text-gray-600">20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Boundaries */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-gray-900">IB </span>
            <span className="text-green-600">Marking Scheme</span>
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-600 to-teal-500 text-white">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gray-900">Skills </span>
            <span className="text-green-600">Developed</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🔬", title: "Laboratory Techniques", desc: "Master practical and experimental skills" },
              { icon: "📊", title: "Data Analysis", desc: "Interpret biological data and graphs" },
              { icon: "🧠", title: "Critical Thinking", desc: "Evaluate scientific evidence and theories" },
              { icon: "✍️", title: "Scientific Communication", desc: "Write clear reports and explanations" },
              { icon: "🔍", title: "Research Skills", desc: "Design and conduct investigations" },
              { icon: "💡", title: "Application Skills", desc: "Connect theory to real-world contexts" }
            ].map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-200">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-teal-500">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Excel in IB Biology with Expert Teaching
          </h2>
          
          <p className="text-xl mb-8">
            Visual learning • Practical skills • 25+ years experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20book%20a%20free%20demo%20for%20IB%20Biology"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all"
            >
              🧬 Book a Free Demo Class
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all"
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

export default Biology;
