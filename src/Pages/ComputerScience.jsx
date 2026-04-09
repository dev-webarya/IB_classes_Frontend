import React from 'react';

const ComputerScience = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700">
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
            IB Computer Science Tuition
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Master Programming, Algorithms & Computational Thinking
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20join%20IB%20Computer%20Science%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <span>💻</span> Book Free Demo Class
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-all"
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
              Computer Science is the study of computational thinking, problem-solving, programming, data structures, and system design. It combines theory with practical coding skills, making it ideal for students interested in technology and innovation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              At IBClassesOnline, with <strong className="text-indigo-600">25+ years of IB teaching expertise</strong>, we help students build strong coding fundamentals, master algorithms, and develop real-world programming projects.
            </p>
          </div>

          {/* SL vs HL Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-indigo-600">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Computer Science SL</h3>
              <p className="text-gray-600 mb-4">Standard Level</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">~150</span>
                  <span className="text-gray-700">Teaching Hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">Core</span>
                  <span className="text-gray-700">System fundamentals, networks, programming</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">Moderate</span>
                  <span className="text-gray-700">Programming complexity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Best for beginners or non-CS majors</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-purple-600">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Computer Science HL</h3>
              <p className="text-gray-600 mb-4">Higher Level</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">~240</span>
                  <span className="text-gray-700">Teaching Hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">Advanced</span>
                  <span className="text-gray-700">OOP, recursion, data structures, algorithms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">High</span>
                  <span className="text-gray-700">Algorithmic & problem-solving depth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">For CS / Engineering / Software Development majors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Topics - Core */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold mb-4">
              <span className="text-gray-900">Core Topics – </span>
              <span className="text-indigo-600">Both SL & HL</span>
            </h2>
            <p className="text-lg text-gray-600">Fundamental Computer Science Concepts</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🖥️",
                title: "System Fundamentals",
                topics: ["Computer organization", "Computer architecture", "System software", "Binary & hexadecimal"]
              },
              {
                icon: "💾",
                title: "Computer Organization",
                topics: ["Primary & secondary memory", "Operating systems", "Application systems", "Binary representation"]
              },
              {
                icon: "🌐",
                title: "Networks",
                topics: ["Network fundamentals", "Data transmission", "Wireless networking", "Internet protocols (TCP/IP)"]
              },
              {
                icon: "📊",
                title: "Computational Thinking",
                topics: ["Decomposition", "Pattern recognition", "Abstraction", "Algorithm design"]
              },
              {
                icon: "🔐",
                title: "Abstract Data Structures",
                topics: ["Arrays", "Stacks", "Queues", "Linked lists", "Trees (HL)", "Graphs (HL)"]
              },
              {
                icon: "⚙️",
                title: "Resource Management",
                topics: ["System resources", "Control systems", "Role of operating system"]
              }
            ].map((topic, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                <ul className="space-y-2">
                  {topic.topics.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programming - Core Topic */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold mb-4">
              <span className="text-gray-900">Programming – </span>
              <span className="text-purple-600">Core Skill</span>
            </h2>
            <p className="text-lg text-gray-600">Java, Python, or other approved languages</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 border border-purple-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Both SL & HL</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span className="text-gray-700">Programming fundamentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span className="text-gray-700">Variables, data types, operators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span className="text-gray-700">Control structures (if, loops)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span className="text-gray-700">Arrays & collections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span className="text-gray-700">Functions/Methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span className="text-gray-700">File handling</span>
</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-indigo-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-indigo-600 mb-4">HL Additional</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Object-Oriented Programming (OOP)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Recursion</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Trees (binary, binary search trees)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Graphs (representation, traversal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Sorting & searching algorithms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Assessment */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-2xl p-8 border border-indigo-600/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                IA
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Internal Assessment – Solution</h3>
                <p className="text-gray-600">Both SL & HL</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700"><strong className="text-indigo-600">💻 Computational Solution Project</strong></p>
              <ul className="space-y-2 ml-8">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>Students develop a software solution for a real client</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>Planning, design, development, testing, evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>Written report + program code + product demonstration video</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>30+ hours of work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>Marked internally, moderated by IB</span>
                </li>
              </ul>
              <div className="bg-white rounded-lg p-4 mt-6">
                <p className="text-center text-lg"><strong className="text-purple-600">IA Weightage: 30% of final grade</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Pattern */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold mb-4">
              <span className="text-gray-900">External </span>
              <span className="text-indigo-600">Examination Pattern</span>
            </h2>
            <p className="text-lg text-gray-600">Grade XII Final Exams</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SL Exam Pattern */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-indigo-600 mb-6">Computer Science SL</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 1</h4>
                  <p className="text-gray-600">1 hr 30 mins | 45% | Short & Extended Response</p>
                  <p className="text-sm text-gray-500">System fundamentals, networks, computational thinking</p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 2</h4>
                  <p className="text-gray-600">1 hr | 25% | Problem-solving & Programming</p>
                  <p className="text-sm text-gray-500">Pre-seen case study</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-bold text-gray-900">Internal Assessment (Solution)</h4>
                  <p className="text-gray-600">30%</p>
                </div>
              </div>
            </div>

            {/* HL Exam Pattern */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-purple-600 mb-6">Computer Science HL</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 1</h4>
                  <p className="text-gray-600">2 hrs 10 mins | 40% | Short & Extended Response</p>
                  <p className="text-sm text-gray-500">All core + HL topics</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 2</h4>
                  <p className="text-gray-600">1 hr 20 mins | 20% | Advanced Programming</p>
                  <p className="text-sm text-gray-500">Pre-seen case study with OOP focus</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-bold text-gray-900">Paper 3 (Option)</h4>
                  <p className="text-gray-600">1 hr | 10% | Choose 1 option topic</p>
                  <p className="text-sm text-gray-500">Databases, Modeling, Web Science, OOP</p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-4">
                  <h4 className="font-bold text-gray-900">Internal Assessment (Solution)</h4>
                  <p className="text-gray-600">30%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Boundaries */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            <span className="text-gray-900">IB </span>
            <span className="text-indigo-600">Marking Scheme</span>
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
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
          <h2 className="text-2xl font-bold text-center mb-12">
            <span className="text-gray-900">Skills </span>
            <span className="text-indigo-600">Developed</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "💻", title: "Programming Skills", desc: "Master coding in Java/Python" },
              { icon: "🧠", title: "Algorithmic Thinking", desc: "Design efficient solutions to problems" },
              { icon: "🔍", title: "Problem Solving", desc: "Break down complex challenges systematically" },
              { icon: "🛠️", title: "Software Development", desc: "Plan, build, test, and deploy real applications" },
              { icon: "📊", title: "Data Structures", desc: "Organize and manage data effectively" },
              { icon: "💡", title: "Computational Thinking", desc: "Think like a computer scientist" }
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
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Excel in IB Computer Science with Expert Mentorship
          </h2>
          
          <p className="text-xl mb-8">
            Programming • Algorithms • Real-world Projects • 25+ years experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20book%20a%20free%20demo%20for%20IB%20Computer%20Science"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E85A24] hover:shadow-xl transition-all"
            >
              💻 Book a Free Demo Class
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-all"
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

export default ComputerScience;
