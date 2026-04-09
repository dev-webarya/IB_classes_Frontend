import React from 'react';

const About = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" 
                alt="IB Students Learning" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0071BD]/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-serif" style={{fontFamily: 'Georgia, serif'}}>Learn from the Best</h3>
                <p className="text-white/90">Expert IB tutors with proven track records</p>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-2xl p-6 hidden lg:block border-t-4 border-[#23B04D]">
              <div className="text-4xl font-bold text-[#0071BD] mb-2">45/45</div>
              <div className="text-sm text-gray-600">Perfect Scores<br/>Achieved</div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-[#0071BD]/10 text-[#0071BD] rounded-full text-sm font-semibold mb-4">
              About IBClassesOnline
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight font-serif" style={{fontFamily: 'Georgia, serif'}}>
              Your Partner in <span className="text-[#23B04D]">IB Excellence</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At IBClassesOnline, we are committed to helping students achieve their full potential in the International Baccalaureate program. Our experienced tutors provide personalized, one-on-one instruction tailored to each student's unique learning style.
            </p>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              With over 15 years of experience and hundreds of successful students, we understand what it takes to excel in the IB curriculum. From challenging subjects to Extended Essays and Internal Assessments, we're here to guide you every step of the way.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#23B04D] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Personalized Learning</h4>
                  <p className="text-gray-600">Customized lessons based on your strengths and weaknesses</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0071BD] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Flexible Scheduling</h4>
                  <p className="text-gray-600">Learn at your own pace with flexible class timings</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#F51617] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Proven Results</h4>
                  <p className="text-gray-600">98% of our students achieve their target grades</p>
                </div>
              </div>
            </div>

            <button className="bg-[#0071BD] hover:bg-[#005a9c] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
