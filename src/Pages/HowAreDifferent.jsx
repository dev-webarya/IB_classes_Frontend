import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowAreDifferent = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true
    });
  }, []);

  const standoutFeatures = [
    {
      icon: '👥',
      number: '1',
      title: 'Small Batches for Individual Attention',
      description: 'Unlike typical coaching centers with 20–50 students in a group, IBClassesOnline maintains only 4–6 students per batch, ensuring every child receives personalized support and guidance.'
    },
    {
      icon: '👨‍🏫',
      number: '2',
      title: 'Highly Experienced & Specialized Teachers',
      description: 'All subjects are taught by experts with 10–25 years of teaching experience, not college students or part-time teachers. Every teacher is a subject specialist and understands board exam patterns thoroughly.'
    },
    {
      icon: '🧠',
      number: '3',
      title: 'Conceptual Teaching, Not Rote Learning',
      description: 'We focus on clarity of fundamentals, logical reasoning, and application-based understanding — enabling students to think, analyze, and write better answers in exams.'
    },
    {
      icon: '📚',
      number: '4',
      title: 'Structured Learning System',
      description: 'A disciplined and systematic study plan helps students stay ahead throughout the year.',
      features: [
        'Chapter-wise teaching',
        'Notes & summaries',
        'Regular tests',
        'Analysis & feedback',
        'Revision cycles',
        'Final exam preparation'
      ]
    },
    {
      icon: '❓',
      number: '5',
      title: 'Doubt-Solving & One-on-One Mentorship',
      description: 'Special doubt classes and guided mentoring ensure that every student\'s weak areas are identified and strengthened.'
    },
    {
      icon: '📊',
      number: '6',
      title: 'Real-Time Tracking & Parent Updates',
      description: 'We maintain complete transparency. Parents receive periodic reports on:',
      features: [
        'Test performance',
        'Attendance',
        'Class participation',
        'Areas of improvement',
        'Academic goals'
      ]
    },
    {
      icon: '💻',
      number: '7',
      title: 'Advanced Teaching Tools & Technology',
      description: 'Digital whiteboards, visual explanations, recorded sessions, and smart learning materials make complex concepts simple and engaging.'
    },
    {
      icon: '🏠',
      number: '8',
      title: 'Flexible Convenience of Online Learning',
      description: 'No travel time, safer learning environment, access from anywhere — without compromising on quality or outcomes.'
    },
    {
      icon: '🎯',
      number: '9',
      title: 'Focus on Board Results & Future Readiness',
      description: 'Beyond board exams, we support students with:',
      features: [
        'Stream & subject selection guidance',
        'College admission counseling (Indian & abroad)',
        'Project and assignment support',
        'Essay writing & presentation training'
      ]
    },
    {
      icon: '⭐',
      number: '10',
      title: 'Proven Track Record',
      description: 'Thousands of students have improved dramatically in academics — from average performance to top scorers with confidence and clarity.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/hero1.png" 
            alt="How Are We Different Background" 
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
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{fontFamily: 'Georgia, serif'}} data-aos="fade-up" data-aos-duration="800">
            <span className="text-white">How Are We</span> <span className="text-white">Different</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Transforming Learning Through Excellence and Innovation
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0071BD] rounded-full blur-3xl"></div>
        </div>
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/hero1.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-6" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF6B35]/10 to-[#0071BD]/10 text-[#FF6B35] rounded-full text-sm font-bold border border-[#FF6B35]/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                Our Approach
              </div>
              
              <h2 className="text-4xl md:text-4xl font-bold leading-tight" style={{fontFamily: 'Georgia, serif'}}>
                <span className="text-gray-900">We Don't Just Teach</span> <br/>
                <span className="text-[#0071BD]">We Transform Learning</span>
              </h2>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#FF6B35] to-[#0071BD] rounded-full"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                At IBClassesOnline, our approach is built on <strong className="text-[#FF6B35]">deep expertise, personalized attention, and proven academic success</strong> developed over 25+ years of working with IB Board students.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                We understand that <strong className="text-[#0071BD]">every child learns differently</strong>. That's why our teaching methods, class structure, and support systems are designed to focus on individual progress, not just generic instruction.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="relative overflow-hidden group text-center p-6 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 rounded-xl border border-[#FF6B35]/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-4xl font-bold text-[#FF6B35] group-hover:text-white transition-colors duration-300 mb-2">25+</div>
                    <div className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300 font-semibold">Years of Excellence</div>
                  </div>
                </div>
                <div className="relative overflow-hidden group text-center p-6 bg-gradient-to-br from-[#0071BD]/10 to-[#0071BD]/5 rounded-xl border border-[#0071BD]/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-4xl font-bold text-[#0071BD] group-hover:text-white transition-colors duration-300 mb-2">4-6</div>
                    <div className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300 font-semibold">Students Per Batch</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative group" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B35]/20 to-[#0071BD]/20 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/hero2.png" 
                  alt="IBClassesOnline Difference" 
                  className="relative w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#FF6B35] to-[#0071BD] text-white px-8 py-4 rounded-2xl shadow-xl z-10">
                <div className="text-center">
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-sm">Success Stories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Stand Out Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/hero1.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF6B35]/10 to-[#0071BD]/10 text-[#FF6B35] rounded-full text-sm font-bold border border-[#FF6B35]/20 mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
              Our Key Differentiators
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-gray-900">What Makes</span> <span className="text-[#0071BD]">IBClassesOnline Stand Out?</span>
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#FF6B35] via-[#0071BD] to-[#FF6B35] rounded-full"></div>
            </div>
          </div>

          {/* Features Grid with Alternating Layout */}
          <div className="space-y-12">
            {standoutFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                  index === 3 || index === 5 ? 'bg-gradient-to-br from-gray-50 to-white' : ''
                }`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
              >
                <div className={`grid lg:grid-cols-2 gap-0 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Image Side */}
                  <div className={`relative h-80 lg:h-96 overflow-hidden group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-[#0071BD]/20">
                      <img 
                        src={index % 2 === 0 ? '/hero1.png' : '/hero2.png'}
                        alt={feature.title}
                        className="w-full h-full object-cover opacity-90 transform transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    {/* Number Badge */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#FF6B35]">
                      <span className="text-2xl font-bold text-[#0071BD]">{feature.number}</span>
                    </div>
                    {/* Icon Badge */}
                    <div className="absolute bottom-6 right-6 w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#0071BD] rounded-2xl flex items-center justify-center text-4xl shadow-xl">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`relative p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                      {feature.title}
                    </h3>
                      <p className="text-gray-600 group-hover:text-white transition-colors duration-300 text-lg leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* Additional Features List */}
                    {feature.features && (
                      <div className="space-y-3">
                        {feature.features.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 group-hover:bg-white/10 rounded-lg transition-colors">
                              <div className="w-6 h-6 bg-[#FF6B35] group-hover:bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                            </div>
                              <span className="text-gray-700 group-hover:text-white transition-colors duration-300 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Learning System Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/hero2.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0071BD]/10 to-[#FF6B35]/10 text-[#0071BD] rounded-full text-sm font-bold border border-[#0071BD]/20 mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
              </svg>
              Our Methodology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-gray-900">Our Structured</span> <span className="text-[#0071BD]">Learning System</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#FF6B35] to-[#0071BD] rounded-full"></div>
            </div>
          </div>

          {/* Timeline Style Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Chapter-wise teaching', desc: 'Systematic coverage of entire syllabus', icon: '📖' },
              { num: '2', title: 'Notes & summaries', desc: 'Comprehensive study material for revision', icon: '📝' },
              { num: '3', title: 'Regular tests', desc: 'Continuous assessment and evaluation', icon: '✅' },
              { num: '4', title: 'Analysis & feedback', desc: 'Detailed performance tracking', icon: '📊' },
              { num: '5', title: 'Revision cycles', desc: 'Multiple rounds of concept reinforcement', icon: '🔄' },
              { num: '6', title: 'Final exam preparation', desc: 'Intensive preparation for board exams', icon: '🎯' }
            ].map((step, idx) => (
              <div key={idx} className="relative group" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay={idx * 100}>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B35] to-[#0071BD] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#0071BD] rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg flex-shrink-0">
                      {step.num}
                    </div>
                    <div className="text-4xl">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 mb-3" style={{fontFamily: 'Georgia, serif'}}>{step.title}</h3>
                  <p className="text-gray-600 group-hover:text-white transition-colors duration-300 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 bg-gradient-to-br from-[#FF6B35] to-[#0071BD] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center text-white mb-12">
            <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-8">
              Our Commitment to You
            </div>
            <h2 className="text-4xl md:text-4xl font-bold mb-8 leading-tight" style={{fontFamily: 'Georgia, serif'}}>
              The IBClassesOnline Promise
            </h2>
            <div className="flex justify-center mb-10">
              <div className="w-32 h-1.5 bg-white/40 rounded-full"></div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl mb-10">
              <div className="text-3xl md:text-4xl font-bold mb-6 text-white">
                "Every student matters. Every student grows."
              </div>
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                We are committed to delivering <strong>real improvement</strong>, <strong>disciplined study habits</strong>, and <strong>strong foundations</strong> that last beyond school.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/918317407250?text=I%20would%20like%20to%20join%20a%20free%20demo%20class"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-white text-[#0071BD] font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Join a Free Demo Class
                </span>
              </a>
              <a 
                href="tel:+918317407250"
                className="group px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#0071BD] transition-all duration-300 hover:scale-105 text-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call: +91 831 740 7250
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default HowAreDifferent;
