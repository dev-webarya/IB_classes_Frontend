import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OnlineClasses = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 100
    });
  }, []);

  const features = [
    {
      icon: '🎥',
      title: 'Live Interactive Sessions',
      description: 'All classes are live, enabling real-time explanation, discussion, and doubt-solving. Students can ask questions instantly and engage actively — just like a physical classroom, but more focused.'
    },
    {
      icon: '👥',
      title: 'Small Batch Size for Personal Attention',
      description: 'Each batch has only 4–6 students, ensuring the teacher understands each student\'s learning pace and provides tailored guidance.'
    },
    {
      icon: '💻',
      title: 'Advanced Digital Tools & Teaching Aids',
      description: 'We use interactive whiteboards, digital notes, visual animations, diagrams, past papers, and practical examples to enhance understanding. This makes learning engaging, clear, and application-oriented.'
    },
    {
      icon: '📹',
      title: 'Class Recordings for Revision',
      description: 'All sessions are recorded and shared with students, so they can revise anytime — especially useful before exams.'
    },
    {
      icon: '❓',
      title: 'Scheduled Doubt-Solving Support',
      description: 'Separate doubt-clearing sessions and one-on-one mentoring ensure no student is left behind.'
    },
    {
      icon: '📊',
      title: 'Structured Weekly and Monthly Assessments',
      description: 'Regular practice tests, chapter-wise assessments, and feedback reports track progress and strengthen exam preparation.'
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Parent-Teacher Updates',
      description: 'Parents receive monthly performance reports and feedback on learning progress, attendance, and improvement areas.'
    }
  ];

  const comparisonData = [
    { feature: 'Batch Size', online: 'Small batches, individual attention', traditional: 'Crowded classrooms with limited focus' },
    { feature: 'Teacher Access', online: 'Learn from top expert teachers from anywhere', traditional: 'Limited to local tutor availability' },
    { feature: 'Revision Support', online: 'Class recordings for repeated revision', traditional: 'No access to recorded lessons' },
    { feature: 'Learning Tools', online: 'Real-time whiteboard technology and digital resources', traditional: 'Traditional blackboard-only learning' },
    { feature: 'Time Efficiency', online: 'More time-efficient (no travel)', traditional: 'Wasted time commuting' },
    { feature: 'Flexibility', online: 'Flexible timings', traditional: 'Rigid schedules' },
    { feature: 'Parent Involvement', online: 'Strong parent involvement through reports', traditional: 'Limited transparency' }
  ];

  const benefits = [
    { icon: '🎯', text: 'Focused and distraction-free' },
    { icon: '💬', text: 'Highly interactive' },
    { icon: '⚡', text: 'Efficient and time-saving' },
    { icon: '✨', text: 'Built around student needs' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/hero2.png" 
            alt="Online Classes Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-center text-white">
          {/* Logo Display */}
          <div className="mb-6 flex justify-center">
            <img 
              src="/logo (3).png" 
              alt="IBClassesOnline Logo" 
              className="h-20 md:h-24 drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{fontFamily: 'Georgia, serif'}}>
            <span className="text-[#FF6B35]">Why</span> <span className="text-[#0071BD]">IBClassesOnline</span> <span className="text-[#FF6B35]">Classes?</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            High-Quality Online Learning Designed for Excellence
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0071BD] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-6" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0071BD]/10 to-[#FF6B35]/10 text-[#0071BD] rounded-full text-sm font-bold border border-[#0071BD]/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
                Our Expertise
              </div>
              
              <h2 className="text-4xl md:text-4xl font-bold leading-tight" style={{fontFamily: 'Georgia, serif'}}>
                <span className="text-gray-900">High-Quality Online</span> <br/>
                <span className="text-[#0071BD]">Learning</span>
              </h2>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] rounded-full"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                At IBClassesOnline, we specialize exclusively in online learning, ensuring that every class is <strong className="text-[#0071BD]">interactive, structured, and result-oriented</strong>.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                With <strong className="text-[#FF6B35]">25+ years of teaching experience</strong>, we have refined a digital learning environment that combines the strengths of expert teaching, advanced technology, and personalized attention — giving students the best of both convenience and academic rigor.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-6 bg-gradient-to-br from-[#0071BD]/10 to-[#0071BD]/5 rounded-xl border border-[#0071BD]/20">
                  <div className="text-4xl font-bold text-[#0071BD] mb-2">25+</div>
                  <div className="text-sm text-gray-600 font-semibold">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 rounded-xl border border-[#FF6B35]/20">
                  <div className="text-4xl font-bold text-[#FF6B35] mb-2">100%</div>
                  <div className="text-sm text-gray-600 font-semibold">Online Classes</div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative group" data-aos="fade-left">
              <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-[#0071BD]/20 to-[#FF6B35]/20 rounded-3xl transform group-hover:scale-105 transition-all duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/hero1.png" 
                  alt="Online Classes" 
                  className="relative w-full h-[500px] object-cover transform group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0071BD]/60 via-[#0071BD]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0071BD]/10 to-[#FF6B35]/10 text-[#0071BD] rounded-full text-sm font-bold border border-[#0071BD]/20 mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
              </svg>
              Our Key Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-gray-900">How Our Online Classes</span> <br/>
              <span className="text-[#0071BD]">Stand Apart</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#0071BD] via-[#FF6B35] to-[#0071BD] rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative" data-aos="fade-up" data-aos-duration="600" data-aos-delay={index * 100}>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl flex-shrink-0">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 leading-tight" style={{fontFamily: 'Georgia, serif'}}>{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0071BD]/10 to-[#FF6B35]/10 text-[#0071BD] rounded-full text-sm font-bold border border-[#0071BD]/20 mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
              </svg>
              Comparison
            </div>
            <h2 className="text-4xl md:text-4xl font-bold mb-6" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-gray-900">Why Online Classes at</span> <br/>
              <span className="text-[#0071BD]">IBClassesOnline Work Better</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Than Traditional Tuition
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow-2xl ring-1 ring-black ring-opacity-5 rounded-2xl">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gradient-to-r from-[#0071BD] to-[#FF6B35]">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                        Feature
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                        ✅ Online at IBClassesOnline
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                        ❌ Traditional Offline Tuition
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {comparisonData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <div className="flex items-start gap-2">
                            <span className="text-[#FF6B35] text-lg flex-shrink-0">✓</span>
                            <span>{row.online}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <div className="flex items-start gap-2">
                            <span className="text-red-500 text-lg flex-shrink-0">✗</span>
                            <span>{row.traditional}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-[#0071BD]/5 to-[#FF6B35]/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0071BD] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{fontFamily: 'Georgia, serif'}}>
                <span className="text-gray-900">Perfect for</span> <span className="bg-gradient-to-r from-[#0071BD] to-[#FF6B35] bg-clip-text text-transparent">Today's Students</span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
                Students today need flexibility, clarity, and personal mentoring. IBClassesOnline's online platform delivers a learning experience that is:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-[#FF6B35] hover:shadow-lg hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="text-5xl">{benefit.icon}</div>
                    <p className="text-gray-700 font-semibold text-center">{benefit.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#0071BD]/10 to-[#FF6B35]/10 rounded-2xl p-8 border border-[#0071BD]/20">
                <p className="text-gray-700 text-lg italic leading-relaxed">
                  "We ensure that students don't just memorize — they <strong className="text-[#0071BD]">understand, apply, and excel</strong>."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-gray-50 via-white to-[#0071BD]/5 rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-gray-900">Start Learning the</span> <br/>
              <span className="bg-gradient-to-r from-[#0071BD] to-[#FF6B35] bg-clip-text text-transparent">IBClassesOnline Way</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Experience a demo class and see how online learning can transform your child's performance and confidence.
            </p>
            
            <a href="/contact-us" className="inline-block px-10 py-4 bg-[#FF6B35] text-white rounded-full font-bold text-lg hover:bg-[#E85A24] hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Book a Free Demo Class Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineClasses;
