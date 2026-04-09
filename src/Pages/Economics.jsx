import React from 'react';

const Economics = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600">
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
            IB Economics Tuition
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Master Economic Theory, Real-World Applications & Decision Making
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20join%20IB%20Economics%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <span>📊</span> Book Free Demo Class
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-all"
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
              Economics is the study of how individuals, businesses, and governments make choices with limited resources. It combines theory, mathematics, diagrams, and real-world case studies – making it both challenging and intellectually rewarding.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              At IBClassesOnline, with <strong className="text-amber-600">25+ years of IB Economics expertise</strong>, we help students build strong analytical skills, master diagram drawing, and develop essay-writing techniques for top grades.
            </p>
          </div>

          {/* SL vs HL Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-amber-500">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Economics SL</h3>
              <p className="text-gray-600 mb-4">Standard Level</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">~150</span>
                  <span className="text-gray-700">Teaching Hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">4 Sections</span>
                  <span className="text-gray-700">Microeconomics, Macro, International, Development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">Moderate</span>
                  <span className="text-gray-700">Depth & Complexity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Best for general Economics interest</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-orange-600">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Economics HL</h3>
              <p className="text-gray-600 mb-4">Higher Level</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">~240</span>
                  <span className="text-gray-700">Teaching Hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">4 Sections +</span>
                  <span className="text-gray-700">Additional HL Content & Theory</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">High</span>
                  <span className="text-gray-700">Advanced Analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">For Business / Economics / Policy majors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section 1 & 2 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">Grade XI – </span>
              <span className="text-amber-600">Foundation Topics</span>
            </h2>
            <p className="text-lg text-gray-600">Both SL & HL</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Microeconomics</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Demand & Supply:</strong> Market equilibrium, price mechanism</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Elasticity:</strong> PED, PES, YED, XED</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Government Intervention:</strong> Price controls, taxes, subsidies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Market Failure:</strong> Externalities, public goods, merit/demerit goods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Theory of the Firm (HL):</strong> Production, costs, revenue, profit maximization</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Macroeconomics</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Economic Activity:</strong> AD-AS model, GDP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Aggregate Demand & Supply:</strong> Determinants & shifts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Macroeconomic Objectives:</strong> Growth, low unemployment, stable prices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Fiscal Policy:</strong> Government spending, taxation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Monetary Policy:</strong> Interest rates, money supply</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section 3 & 4 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">Grade XII – </span>
              <span className="text-orange-600">Advanced Topics</span>
            </h2>
            <p className="text-lg text-gray-600">Both SL & HL</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. International Economics</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>International Trade:</strong> Absolute & comparative advantage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Protectionism:</strong> Tariffs, quotas, trade barriers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Exchange Rates:</strong> Appreciation, depreciation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Balance of Payments</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Economic Integration (HL):</strong> Trade agreements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Development Economics</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Economic Development:</strong> vs. Growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Measuring Development:</strong> HDI, GNI per capita</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Barriers to Development:</strong> Poverty traps, corruption, debt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Development Strategies:</strong> Aid, trade, investment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Sustainability (HL):</strong> Environmental concerns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Assessment */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-2xl p-8 border border-amber-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                IA
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Internal Assessment (Portfolio)</h3>
                <p className="text-gray-600">Both SL & HL</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700"><strong className="text-amber-600">📝 Three Commentary Articles</strong></p>
              <ul className="space-y-2 ml-8">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Each 750 words, based on real-world news articles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span>One from Microeconomics, Macroeconomics, International/Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Economic theory application + diagrams + evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Students choose their own articles (published within last year)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Marked internally, moderated by IB</span>
                </li>
              </ul>
              <div className="bg-white rounded-lg p-4 mt-6">
                <p className="text-center text-lg"><strong className="text-orange-600">IA Weightage: 20% (SL) | 20% (HL)</strong></p>
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
              <span className="text-amber-600">Examination Pattern</span>
            </h2>
            <p className="text-lg text-gray-600">Grade XII Final Exams</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SL Exam Pattern */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">Economics SL</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-amber-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 1</h4>
                  <p className="text-gray-600">1 hr 30 mins | 40% | Extended Response (1 essay from 3 prompts)</p>
                </div>
                <div className="border-l-4 border-amber-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 2</h4>
                  <p className="text-gray-600">1 hr 30 mins | 40% | Data Response (1 from 2 questions)</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-bold text-gray-900">Internal Assessment (Portfolio)</h4>
                  <p className="text-gray-600">20%</p>
                </div>
              </div>
            </div>

            {/* HL Exam Pattern */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Economics HL</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 1</h4>
                  <p className="text-gray-600">2 hrs 15 mins | 30% | Extended Response (2 essays from 4 topics)</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 2</h4>
                  <p className="text-gray-600">1 hr 30 mins | 30% | Data Response (1 from 2 questions)</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 3</h4>
                  <p className="text-gray-600">1 hr | 20% | HL Extension (Quantitative & Policy Questions)</p>
                </div>
                <div className="border-l-4 border-amber-600 pl-4">
                  <h4 className="font-bold text-gray-900">Internal Assessment (Portfolio)</h4>
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
            <span className="text-amber-600">Marking Scheme</span>
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
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
            <span className="text-amber-600">Developed</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📊", title: "Analytical Thinking", desc: "Analyze economic theories and real-world issues" },
              { icon: "📝", title: "Essay Writing", desc: "Structured argumentation and evaluation" },
              { icon: "📈", title: "Diagram Mastery", desc: "Draw and explain economic models" },
              { icon: "🔍", title: "Critical Evaluation", desc: "Assess policies and their consequences" },
              { icon: "💡", title: "Problem Solving", desc: "Apply economic concepts to scenarios" },
              { icon: "🌍", title: "Global Awareness", desc: "Understand international economic issues" }
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
      <section className="py-16 bg-gradient-to-br from-amber-500 to-orange-600">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Excel in IB Economics with Expert Guidance
          </h2>
          
          <p className="text-xl mb-8">
            Theory + Diagrams + Essay Skills • 25+ years experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20book%20a%20free%20demo%20for%20IB%20Economics"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all"
            >
              📊 Book a Free Demo Class
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-all"
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

export default Economics;
