import React from 'react';

const Mathematics = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 to-[#0071BD]">
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
            IB Mathematics Tuition
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            AA (Analysis & Approaches) | AI (Applications & Interpretation)
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20join%20IB%20Mathematics%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <span>📐</span> Book Free Demo Class
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all"
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
              IB Mathematics offers two distinct pathways: <strong>Analysis & Approaches (AA)</strong> for students who love pure math and theoretical depth, and <strong>Applications & Interpretation (AI)</strong> for those who prefer practical applications and real-world problem-solving.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              At IBClassesOnline, with <strong className="text-purple-600">25+ years of IB Math expertise</strong>, we guide students through the right pathway based on their strengths, interests, and university goals.
            </p>
          </div>

          {/* AA vs AI Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-purple-600">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Math AA (Analysis & Approaches)</h3>
              <p className="text-gray-600 mb-4">For Pure Math Enthusiasts</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">Focus:</span>
                  <span className="text-gray-700">Algebra, Calculus, Theory</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">Style:</span>
                  <span className="text-gray-700">Abstract & Rigorous</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">GDC:</span>
                  <span className="text-gray-700">Limited Calculator Use</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Best for: Engineering, Physics, Pure Math majors</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#0071BD]">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Math AI (Applications & Interpretation)</h3>
              <p className="text-gray-600 mb-4">For Practical Problem Solvers</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#0071BD] font-bold">Focus:</span>
                  <span className="text-gray-700">Statistics, Real-World Data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0071BD] font-bold">Style:</span>
                  <span className="text-gray-700">Applied & Contextual</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0071BD] font-bold">GDC:</span>
                  <span className="text-gray-700">Heavy Technology Use</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Best for: Business, Economics, Social Sciences</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SL vs HL for Both */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Standard Level (SL) vs Higher Level (HL)</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-[#23B04D] pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">SL (Both AA & AI)</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#23B04D]">•</span>
                    <span>~150 teaching hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#23B04D]">•</span>
                    <span>5 core topics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#23B04D]">•</span>
                    <span>Moderate difficulty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#23B04D]">•</span>
                    <span>For non-math intensive majors</span>
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">HL (Both AA & AI)</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>~240 teaching hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>5 core + additional HL topics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>High difficulty & depth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>For STEM, Engineering, Economics majors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Math AA Topics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">Math AA – </span>
              <span className="text-purple-600">Core Topics</span>
            </h2>
            <p className="text-lg text-gray-600">Analysis & Approaches</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📈",
                title: "Number & Algebra",
                topics: ["Sequences & series", "Exponents & logarithms", "Binomial theorem", "Complex numbers (HL)"]
              },
              {
                icon: "📐",
                title: "Functions",
                topics: ["Linear, quadratic, exponential", "Transformations", "Rational & inverse functions", "Composite functions"]
              },
              {
                icon: "📊",
                title: "Geometry & Trigonometry",
                topics: ["Trigonometric functions", "Circular functions", "Vectors", "3D geometry (HL)"]
              },
              {
                icon: "📉",
                title: "Statistics & Probability",
                topics: ["Descriptive statistics", "Probability distributions", "Binomial & normal distributions", "Hypothesis testing (HL)"]
              },
              {
                icon: "∫",
                title: "Calculus",
                topics: ["Differentiation", "Integration", "Applications of calculus", "Differential equations (HL)"]
              }
            ].map((topic, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                <ul className="space-y-2">
                  {topic.topics.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Math AI Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">Math AI – </span>
              <span className="text-[#0071BD]">Core Topics</span>
            </h2>
            <p className="text-lg text-gray-600">Applications & Interpretation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📊",
                title: "Number & Algebra",
                topics: ["Arithmetic & geometric sequences", "Financial mathematics", "Growth & decay models", "Systems of equations"]
              },
              {
                icon: "📈",
                title: "Functions",
                topics: ["Linear models", "Quadratic models", "Exponential & logarithmic", "Modelling real-world data"]
              },
              {
                icon: "📐",
                title: "Geometry & Trigonometry",
                topics: ["Right-angle trigonometry", "Sine & cosine rules", "Voronoi diagrams", "Graph theory"]
              },
              {
                icon: "📉",
                title: "Statistics & Probability",
                topics: ["Statistical analysis", "Correlation & regression", "Probability (conditional)", "Hypothesis testing (HL)"]
              },
              {
                icon: "💻",
                title: "Calculus (Basic)",
                topics: ["Introduction to derivatives", "Optimization problems", "Area under curves", "Differential equations (HL)"]
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

      {/* Internal Assessment */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-purple-600/10 to-[#0071BD]/10 rounded-2xl p-8 border border-purple-600/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                IA
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Mathematics Exploration (IA)</h3>
                <p className="text-gray-600">Both SL & HL | Both AA & AI</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700"><strong className="text-purple-600">📝 Individual Mathematical Exploration</strong></p>
              <ul className="space-y-2 ml-8">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Student chooses a mathematical topic of personal interest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span>In-depth investigation with mathematical analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span>12-20 pages written report</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Use of technology (GDC, software)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">External </span>
              <span className="text-purple-600">Examination Pattern</span>
            </h2>
            <p className="text-lg text-gray-600">Grade XII Final Exams (Both AA & AI)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SL Exam Pattern */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#23B04D] mb-6">Math SL (AA / AI)</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#23B04D] pl-4">
                  <h4 className="font-bold text-gray-900">Paper 1</h4>
                  <p className="text-gray-600">1 hr 30 mins | 40% | Non-Calculator</p>
                  <p className="text-sm text-gray-500">(AA only - AI uses GDC both papers)</p>
                </div>
                <div className="border-l-4 border-[#23B04D] pl-4">
                  <h4 className="font-bold text-gray-900">Paper 2</h4>
                  <p className="text-gray-600">1 hr 30 mins | 40% | Calculator Allowed</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-bold text-gray-900">Internal Assessment (Exploration)</h4>
                  <p className="text-gray-600">20%</p>
                </div>
              </div>
            </div>

            {/* HL Exam Pattern */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-6">Math HL (AA / AI)</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 1</h4>
                  <p className="text-gray-600">2 hrs | 30% | Non-Calculator</p>
                  <p className="text-sm text-gray-500">(AA only - AI uses GDC both papers)</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 2</h4>
                  <p className="text-gray-600">2 hrs | 30% | Calculator Allowed</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 3</h4>
                  <p className="text-gray-600">1 hr | 20% | Extended Response (both calculators)</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-bold text-gray-900">Internal Assessment (Exploration)</h4>
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
            <span className="text-purple-600">Marking Scheme</span>
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-600 to-[#0071BD] text-white">
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
            <span className="text-purple-600">Developed</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🧠", title: "Logical Reasoning", desc: "Develop structured mathematical thinking" },
              { icon: "📊", title: "Data Analysis", desc: "Interpret and manipulate statistical information" },
              { icon: "💻", title: "Technology Skills", desc: "Master GDC and mathematical software" },
              { icon: "📝", title: "Problem Solving", desc: "Apply mathematical concepts creatively" },
              { icon: "🔍", title: "Pattern Recognition", desc: "Identify mathematical relationships" },
              { icon: "💡", title: "Abstract Thinking", desc: "Work with theoretical concepts" }
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
      <section className="py-16 bg-gradient-to-br from-purple-600 to-[#0071BD]">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Excel in IB Mathematics with Expert Coaching
          </h2>
          
          <p className="text-xl mb-8">
            AA & AI pathways • SL & HL levels • 25+ years experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20book%20a%20free%20demo%20for%20IB%20Mathematics"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all"
            >
              📐 Book a Free Demo Class
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all"
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

export default Mathematics;
