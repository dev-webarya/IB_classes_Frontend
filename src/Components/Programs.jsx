import React, { useState } from 'react';
import { FaGraduationCap, FaCalendar, FaBook, FaCertificate } from 'react-icons/fa';
import BookDemoModal from './BookDemoModal';

const Programs = () => {
  const [showBookDemoModal, setShowBookDemoModal] = useState(false);
  
  const programs = [
    {
      title: "IB Diploma Program",
      description: "Fuel your child's Academic growth! See their confidence and grades improve.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
      classes: "Classes: 1st to 9th",
      duration: "Duration: 6 Days",
      subjects: "English, Maths, Science, Social Studies",
      curriculum: "Aligned as per CBSE, ICSE, State Boards"
    },
    {
      title: "MYP Foundation",
      description: "Help your child master English skills. Get ready to be Cambridge certified!",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
      classes: "Classes: 1st to 8th",
      duration: "Duration: 1 Day",
      subjects: "4-5 Learners per class",
      curriculum: "Aligned with the Cambridge English Scale and CEFR"
    },
    {
      title: "Subject Specialization",
      description: "Unlock your child's Math super powers! Solve complex Math calculations in just seconds.",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
      classes: "Classes: 1st to 8th",
      duration: "Duration: 6 Days",
      subjects: "10-15 Learners per Class",
      curriculum: "Math-based curriculum for enhanced mental abilities"
    }
  ];

  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-100 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-12 right-12 sm:bottom-20 sm:right-20 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16" data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-3 sm:mb-4 md:mb-5 font-serif px-4 sm:px-6" style={{fontFamily: 'Georgia, serif'}}>
            Pick a learning program & 
            <span className="text-blue-600"> get started!</span>
            <span className="text-orange-500 ml-2">✏️</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-4 sm:px-6">
            Choose from our Best Courses for your kid <span className="text-yellow-500">⭐</span>
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="w-full h-[400px] sm:h-[420px] md:h-[440px] lg:h-[460px] xl:h-[480px] rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-orange-200 relative overflow-hidden group bg-white cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              data-aos="flip-left"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              {/* Full Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${program.image})`
                }}
              ></div>

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>

              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500" />

              {/* Large Background Icon */}
              <FaGraduationCap className="absolute z-10 -top-8 -right-8 sm:-top-10 sm:-right-10 md:-top-12 md:-right-12 text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white/10 group-hover:text-orange-400 group-hover:rotate-12 transition-all duration-500" />

              {/* Content Section - Bottom Positioned with Full Content */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5 md:p-6 lg:p-7 text-white">
                {/* Title */}
                <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-white group-hover:text-white mb-2 sm:mb-2.5 transition-colors duration-300">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 group-hover:text-orange-200 text-xs sm:text-sm md:text-base leading-relaxed transition-colors duration-300 line-clamp-2 mb-3 sm:mb-3.5 md:mb-4">
                  {program.description}
                </p>

                {/* Details List */}
                <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5 mb-3 sm:mb-3.5 md:mb-4">
                  <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                    <FaGraduationCap className="text-orange-400 group-hover:text-white text-xs sm:text-sm md:text-base mt-0.5 flex-shrink-0 transition-colors duration-300" />
                    <span className="text-xs sm:text-sm text-white/90 group-hover:text-orange-200 transition-colors duration-300">
                      {program.classes}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                    <FaCalendar className="text-orange-400 group-hover:text-white text-xs sm:text-sm md:text-base mt-0.5 flex-shrink-0 transition-colors duration-300" />
                    <span className="text-xs sm:text-sm text-white/90 group-hover:text-orange-200 transition-colors duration-300">
                      {program.duration}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                    <FaBook className="text-orange-400 group-hover:text-white text-xs sm:text-sm md:text-base mt-0.5 flex-shrink-0 transition-colors duration-300" />
                    <span className="text-xs sm:text-sm text-white/90 group-hover:text-orange-200 transition-colors duration-300">
                      {program.subjects}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                    <FaCertificate className="text-orange-400 group-hover:text-white text-xs sm:text-sm md:text-base mt-0.5 flex-shrink-0 transition-colors duration-300" />
                    <span className="text-xs sm:text-sm text-white/90 group-hover:text-orange-200 transition-colors duration-300">
                      {program.curriculum}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => setShowBookDemoModal(true)}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 group-hover:from-white group-hover:to-white group-hover:text-blue-700 text-white font-bold py-2.5 sm:py-3 md:py-3.5 px-3 sm:px-4 md:px-5 rounded-md sm:rounded-lg md:rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-orange-500 group-hover:border-white text-xs sm:text-sm md:text-base"
                >
                  Book a Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book Demo Modal */}
      <BookDemoModal 
        isOpen={showBookDemoModal}
        onClose={() => setShowBookDemoModal(false)}
      />
    </section>
  );
};

export default Programs;
