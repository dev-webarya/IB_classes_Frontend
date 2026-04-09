import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic (can integrate with backend/email service)
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=1920&q=80)',
          }}
        ></div>
        
        {/* Blue and Orange Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0071BD]/80 via-[#FF6B35]/70 to-[#0071BD]/80 z-10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl z-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl z-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center" data-aos="fade-up">
          {/* Logo Display */}
          <div className="mb-3 sm:mb-4 flex justify-center" data-aos="zoom-in" data-aos-delay="100">
            <img 
              src="/logo (3).png" 
              alt="IBClassesOnline Logo" 
              className="h-12 sm:h-16 md:h-20 drop-shadow-2xl transform hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight font-serif text-white drop-shadow-2xl" style={{fontFamily: 'Georgia, serif'}} data-aos="fade-up" data-aos-delay="200">
            <span>Get in</span> <span className="text-[#FFD700]">Touch</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg px-4" data-aos="fade-up" data-aos-delay="300">
            Let's discuss how we can help you excel in the IB Diploma Programme
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-3 sm:mb-4" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-black">Connect</span> <span className="text-[#0071BD]">With Us</span>
            </h2>
            <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="group relative bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-300 border-t-4 border-[#0071BD] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0071BD]/10 to-[#0071BD]/5 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-[#0071BD]/20 group-hover:bg-white/20 group-hover:border-white/50 transition-all">
                  <span className="text-2xl sm:text-3xl">📞</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-white mb-2 sm:mb-3 transition-colors">Call Us</h3>
                <a href="tel:+918317407250" className="text-[#0071BD] group-hover:text-white hover:underline text-base sm:text-lg font-semibold transition-colors">
                  +91 831 740 7250
                </a>
                <p className="text-gray-600 group-hover:text-white/90 mt-2 text-xs sm:text-sm transition-colors">Mon-Sat: 9 AM - 8 PM IST</p>
              </div>
            </div>

            <div className="group relative bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-300 border-t-4 border-[#FF6B35] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#0071BD] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-[#FF6B35]/20 group-hover:bg-white/20 group-hover:border-white/50 transition-all">
                  <span className="text-2xl sm:text-3xl">📧</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-white mb-2 sm:mb-3 transition-colors">Email Us</h3>
                <a href="mailto:ibclassesonline@ixpoe.com" className="text-[#FF6B35] group-hover:text-white hover:underline text-base sm:text-lg font-semibold break-all transition-colors">
                  ibclassesonline@ixpoe.com
                </a>
                <p className="text-gray-600 group-hover:text-white/90 mt-2 text-xs sm:text-sm transition-colors">We respond within 24 hours</p>
              </div>
            </div>

            <div className="group relative bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-300 border-t-4 border-[#0071BD] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0071BD]/10 to-[#0071BD]/5 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-[#0071BD]/20 group-hover:bg-white/20 group-hover:border-white/50 transition-all">
                  <span className="text-2xl sm:text-3xl">💬</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-white mb-2 sm:mb-3 transition-colors">WhatsApp</h3>
                <a 
                  href="https://wa.me/918317407250?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20IB%20classes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0071BD] group-hover:text-white hover:underline text-base sm:text-lg font-semibold transition-colors"
                >
                  Chat with us
                </a>
                <p className="text-gray-600 group-hover:text-white/90 mt-2 text-xs sm:text-sm transition-colors">Instant response available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-serif" style={{fontFamily: 'Georgia, serif'}}>
                <span className="text-black">Send Us a </span>
                <span className="text-[#0071BD]">Message</span>
              </h2>
              <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] rounded-full mb-4 sm:mb-6"></div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Subject of Interest *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Select a subject</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="Mathematics">Mathematics (AA/AI)</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Economics">Economics</option>
                    <option value="English">English Language & Literature</option>
                    <option value="German">German</option>
                    <option value="French">French</option>
                    <option value="Core">EE/TOK/IA Support</option>
                    <option value="Multiple">Multiple Subjects</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Tell us about your requirements, current grade level, and any specific questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0071BD] to-[#FF6B35] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base rounded-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  📨 Send Message
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-serif" style={{fontFamily: 'Georgia, serif'}}>
                  <span className="text-black">Why Choose </span>
                  <span className="text-[#0071BD]">IBClassesOnline?</span>
                </h2>
                <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] rounded-full mb-4 sm:mb-6"></div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0071BD]/10 to-[#0071BD]/5 rounded-full flex items-center justify-center flex-shrink-0 border border-[#0071BD]/20">
                      <span className="text-xl sm:text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#0071BD] mb-1">25+ Years Experience</h3>
                      <p className="text-sm sm:text-base text-gray-600">Deep expertise in IB curriculum across all subjects</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 rounded-full flex items-center justify-center flex-shrink-0 border border-[#FF6B35]/20">
                      <span className="text-xl sm:text-2xl">👨‍🏫</span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#FF6B35] mb-1">Expert IB Teachers</h3>
                      <p className="text-sm sm:text-base text-gray-600">Qualified instructors with proven track records</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0071BD]/10 to-[#0071BD]/5 rounded-full flex items-center justify-center flex-shrink-0 border border-[#0071BD]/20">
                      <span className="text-xl sm:text-2xl">📊</span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#0071BD] mb-1">Personalized Learning</h3>
                      <p className="text-sm sm:text-base text-gray-600">Individual attention and customized study plans</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 rounded-full flex items-center justify-center flex-shrink-0 border border-[#FF6B35]/20">
                      <span className="text-xl sm:text-2xl">🌍</span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#FF6B35] mb-1">Online Classes</h3>
                      <p className="text-sm sm:text-base text-gray-600">Learn from anywhere with live interactive sessions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0071BD]/10 to-[#0071BD]/5 rounded-full flex items-center justify-center flex-shrink-0 border border-[#0071BD]/20">
                      <span className="text-xl sm:text-2xl">📚</span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#0071BD] mb-1">Complete Support</h3>
                      <p className="text-sm sm:text-base text-gray-600">Subject classes + IA/EE/TOK guidance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 rounded-full flex items-center justify-center flex-shrink-0 border border-[#FF6B35]/20">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#FF6B35] mb-1">Excellent Results</h3>
                      <p className="text-gray-600">Consistent high scores and university placements</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-[#0071BD]/10 to-[#FF6B35]/10 rounded-xl p-8 border border-[#0071BD]/20">
                <h3 className="text-2xl font-bold text-[#0071BD] mb-4">📅 Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex justify-between">
                    <span className="font-semibold">Monday - Friday:</span>
                    <span>9:00 AM - 8:00 PM IST</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Saturday:</span>
                    <span>10:00 AM - 6:00 PM IST</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  💡 For urgent queries, WhatsApp us anytime!
                </p>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <a 
                  href="https://wa.me/918317407250?text=I%20would%20like%20to%20book%20a%20free%20demo%20class"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/80 text-white text-center font-bold py-4 px-6 rounded-lg hover:scale-105 hover:shadow-xl transition-all"
                >
                  📚 Book a Free Demo Class
                </a>
                <a 
                  href="tel:+918317407250"
                  className="block w-full bg-gradient-to-r from-[#0071BD] to-[#0071BD]/80 text-white text-center font-bold py-4 px-6 rounded-lg hover:scale-105 hover:shadow-xl transition-all"
                >
                  📞 Call Now: +91 831 740 7250
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
            <span className="text-black">Frequently Asked </span>
            <span className="text-[#0071BD]">Questions</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] rounded-full mx-auto mb-12"></div>

          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-900">
                What subjects do you offer?
              </summary>
              <p className="mt-3 text-gray-700">
                We offer all IB subjects including Sciences (Physics, Chemistry, Biology), Mathematics (AA & AI), 
                Computer Science, Economics, English Language & Literature, German, French, and Core Components support (EE, TOK, IA).
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-900">
                Do you offer both SL and HL courses?
              </summary>
              <p className="mt-3 text-gray-700">
                Yes, we offer both Standard Level (SL) and Higher Level (HL) courses for all subjects, 
                with specialized teaching approaches for each level.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-900">
                Are classes conducted online or offline?
              </summary>
              <p className="mt-3 text-gray-700">
                We conduct live online interactive classes, allowing students from anywhere in the world to access 
                quality IB education. All sessions are recorded for revision.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-900">
                Do you provide support for IA, EE, and TOK?
              </summary>
              <p className="mt-3 text-gray-700">
                Absolutely! We provide comprehensive guidance for Internal Assessments (IA), Extended Essay (EE), 
                and Theory of Knowledge (TOK) to help you maximize your core points.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-900">
                Can I join mid-year?
              </summary>
              <p className="mt-3 text-gray-700">
                Yes, we accept students year-round and provide catch-up materials and personalized study plans 
                to ensure smooth integration into the current syllabus.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-900">
                How do I book a free demo class?
              </summary>
              <p className="mt-3 text-gray-700">
                Simply WhatsApp us at +91 831 740 7250, call us, or fill out the contact form above. 
                We'll schedule a free demo class at your convenience.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0071BD] via-[#FF6B35] to-[#0071BD]">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif" style={{fontFamily: 'Georgia, serif'}}>
            Ready to Excel in <span className="text-[#FFD700]">IB?</span>
          </h2>
          
          <p className="text-xl mb-8">
            Join hundreds of successful IB students who achieved their dream university placements with us
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918317407250?text=I'm%20ready%20to%20start%20IB%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#FF6B35] font-bold rounded-lg hover:scale-105 hover:shadow-xl transition-all"
            >
              💬 Start WhatsApp Chat
            </a>
            <a 
              href="tel:+918317407250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0071BD] transition-all"
            >
              📞 Call: +91 831 740 7250
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
