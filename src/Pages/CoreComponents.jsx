import React from 'react';

const CoreComponents = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500">
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
            IB Diploma Core Components
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Extended Essay • Theory of Knowledge • Internal Assessment
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20learn%20more%20about%20IB%20Core%20Components"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <span>🎓</span> Get Expert Guidance
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-700 transition-all"
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
              The <strong className="text-indigo-700">IB Diploma Programme Core</strong> extends the academic curriculum with three essential components that develop independent research, critical thinking, and ethical awareness.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              At IBClassesOnline, with <strong className="text-purple-700">25+ years of IB expertise</strong>, we provide comprehensive support for EE, TOK, and IA to maximize your IB Diploma score.
            </p>
          </div>

          {/* Core Points System */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border-t-4 border-indigo-600">
            <h3 className="text-xl font-bold text-center mb-6 text-gray-900">The Core Bonus Points</h3>
            <p className="text-center text-gray-700 mb-6">EE + TOK together can contribute up to <strong className="text-indigo-700">3 bonus points</strong> to your total IB Diploma score.</p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-indigo-700 text-white">
                    <th className="border border-gray-300 px-4 py-2">TOK Grade</th>
                    <th className="border border-gray-300 px-4 py-2">EE Grade A</th>
                    <th className="border border-gray-300 px-4 py-2">EE Grade B</th>
                    <th className="border border-gray-300 px-4 py-2">EE Grade C</th>
                    <th className="border border-gray-300 px-4 py-2">EE Grade D</th>
                    <th className="border border-gray-300 px-4 py-2">EE Grade E</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">A</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-green-100">3</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-green-100">3</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-100">2</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-100">2</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-red-100">Failed</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">B</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-green-100">3</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-100">2</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-100">2</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-100">1</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-red-100">Failed</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">C</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-100">2</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-100">2</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-100">1</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-100">1</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-orange-100">0</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">D</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-100">2</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-100">1</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-100">1</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-orange-100">0</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-red-100">Failed</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">E</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-red-100">Failed</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-red-100">Failed</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-orange-100">0</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-red-100">Failed</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-red-100">Failed</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Maximum 45 points total: 42 from subjects + 3 from EE/TOK
            </p>
          </div>
        </div>
      </section>

      {/* Extended Essay */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-700 to-purple-600 text-white px-6 py-3 rounded-full mb-6">
                <span className="text-3xl">📝</span>
                <h2 className="text-xl font-bold">Extended Essay (EE)</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                The Extended Essay is a <strong>4,000-word independent research paper</strong> on a topic of your choice within one of your IB subjects.
              </p>

              <div className="space-y-4">
                <div className="bg-indigo-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-indigo-700 mb-3">Key Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>Maximum 4,000 words (examiners stop reading beyond this)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>Independent research on a focused research question</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>Structured academic format with citations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>Supervised by a teacher advisor</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-purple-700 mb-3">Subject Areas Available</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Studies in Language & Literature",
                      "Language Acquisition",
                      "Individuals & Societies",
                      "Sciences",
                      "Mathematics",
                      "The Arts",
                      "World Studies (interdisciplinary)"
                    ].map((subject, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-purple-600">✓</span>
                        <span className="text-gray-700 text-sm">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">EE Structure</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-indigo-600">1.</span>
                    <div>
                      <strong>Title Page</strong>
                      <p className="text-sm text-gray-600">Subject, research question, word count</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-indigo-600">2.</span>
                    <div>
                      <strong>Contents Page</strong>
                      <p className="text-sm text-gray-600">Sections and page numbers</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-indigo-600">3.</span>
                    <div>
                      <strong>Introduction</strong>
                      <p className="text-sm text-gray-600">Context and research question</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-indigo-600">4.</span>
                    <div>
                      <strong>Main Body</strong>
                      <p className="text-sm text-gray-600">Argument, analysis, evidence</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-indigo-600">5.</span>
                    <div>
                      <strong>Conclusion</strong>
                      <p className="text-sm text-gray-600">Summary and evaluation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-indigo-600">6.</span>
                    <div>
                      <strong>References & Bibliography</strong>
                      <p className="text-sm text-gray-600">MLA, APA, Chicago, etc.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-indigo-600 shadow-lg">
                <h3 className="text-lg font-bold text-indigo-700 mb-3">Assessment Criteria</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>Focus & Method</span>
                    <span className="font-bold">6 marks</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Knowledge & Understanding</span>
                    <span className="font-bold">6 marks</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Critical Thinking</span>
                    <span className="font-bold">12 marks</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Presentation</span>
                    <span className="font-bold">4 marks</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Engagement</span>
                    <span className="font-bold">6 marks</span>
                  </li>
                  <li className="flex justify-between items-center border-t-2 border-indigo-600 pt-2 mt-2">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-lg">34 marks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theory of Knowledge */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full mb-6">
                <span className="text-3xl">🤔</span>
                <h2 className="text-xl font-bold">Theory of Knowledge (TOK)</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                TOK is a course about <strong>critical thinking and inquiry</strong>. It asks: "How do we know what we claim to know?"
              </p>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-purple-700 mb-3">TOK Framework</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Knowledge Questions:</strong> Open questions about knowledge itself</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Areas of Knowledge:</strong> Mathematics, Natural Sciences, Human Sciences, History, The Arts, Ethics, Religious Knowledge, Indigenous Knowledge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Ways of Knowing:</strong> Language, Sense Perception, Reason, Emotion, Faith, Imagination, Intuition, Memory</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-pink-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-pink-700 mb-3">Core Themes</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">✓</span>
                      <span>Knowledge and the Knower</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">✓</span>
                      <span>Knowledge and Language</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">✓</span>
                      <span>Knowledge and Politics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">✓</span>
                      <span>Knowledge and Technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">✓</span>
                      <span>Knowledge and Religion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600">✓</span>
                      <span>Knowledge and Indigenous Societies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">TOK Assessment Components</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-purple-700 mb-3">1. TOK Exhibition (DP1)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Select 3 objects that relate to a TOK prompt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Write 950-word commentary (max)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Internally assessed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span><strong>Weightage: 33%</strong></span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t-2 border-purple-300 pt-6">
                    <h4 className="text-lg font-bold text-pink-700 mb-3">2. TOK Essay (DP2)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-pink-600">•</span>
                        <span>1,600-word essay on one of 6 prescribed titles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-600">•</span>
                        <span>Externally assessed by IB</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-600">•</span>
                        <span>Respond to a knowledge question</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-600">•</span>
                        <span><strong>Weightage: 67%</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-purple-600 shadow-lg">
                <h3 className="text-lg font-bold text-purple-700 mb-3">TOK Grading</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>Grade A: Excellent</span>
                    <span className="font-bold">9-10 marks</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Grade B: Good</span>
                    <span className="font-bold">7-8 marks</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Grade C: Satisfactory</span>
                    <span className="font-bold">5-6 marks</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Grade D: Mediocre</span>
                    <span className="font-bold">3-4 marks</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Grade E: Elementary</span>
                    <span className="font-bold">0-2 marks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Assessment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-indigo-700 text-white px-6 py-3 rounded-full mb-6">
              <span className="text-3xl">📊</span>
              <h2 className="text-xl font-bold">Internal Assessment (IA)</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every IB subject has an Internal Assessment component, contributing <strong>20-30%</strong> to your final grade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { subject: "Sciences", ia: "Individual Investigation", weight: "20%", icon: "🔬" },
              { subject: "Mathematics", ia: "Mathematical Exploration", weight: "20%", icon: "📐" },
              { subject: "English", ia: "Individual Oral", weight: "30%", icon: "🗣️" },
              { subject: "Languages", ia: "Individual Oral", weight: "30%", icon: "💬" },
              { subject: "Economics", ia: "Portfolio (3 Commentaries)", weight: "20%", icon: "📈" },
              { subject: "Computer Science", ia: "Computational Solution", weight: "30%", icon: "💻" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.subject}</h3>
                <p className="text-gray-700 mb-3">{item.ia}</p>
                <p className="text-indigo-700 font-bold text-lg">{item.weight}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-center mb-6 text-gray-900">Why IA Matters</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>Internally marked by your teacher</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>Externally moderated by IB</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>Demonstrates research & inquiry skills</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Subject-specific criteria</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Independent investigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Critical to final IB score</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Core Components Matter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gray-900">Why the Core </span>
            <span className="text-indigo-700">Matters</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-indigo-600">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bonus Points</h3>
              <p className="text-gray-700">EE + TOK can give you up to 3 bonus points, crucial for reaching 40+ scores for top universities.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-purple-600">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Critical Skills</h3>
              <p className="text-gray-700">Develops research writing, independent thinking, and philosophical inquiry — essential for university.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-pink-600">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Holistic Learning</h3>
              <p className="text-gray-700">Connects all IB subjects through inquiry, ethics, and knowledge — the heart of IB philosophy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Master the IB Core with Expert Support
          </h2>
          
          <p className="text-xl mb-8">
            EE Guidance • TOK Expertise • IA Support • 25+ years experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20help%20with%20IB%20Core%20Components"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all"
            >
              🎓 Get EE/TOK/IA Support
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-700 transition-all"
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

export default CoreComponents;
