import React from 'react';

const Courses = () => {
  const courses = [
    {
      subject: "Physics",
      description: "Master mechanics, electricity, magnetism, and more with expert guidance",
      levels: ["SL", "HL"],
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=600&q=80"
    },
    {
      subject: "Chemistry", 
      description: "Explore organic, inorganic, and physical chemistry concepts",
      levels: ["SL", "HL"],
      image: "https://images.unsplash.com/photo-1532634993-15f421e42ec0?w=600&q=80"
    },
    {
      subject: "Mathematics",
      description: "AA & AI courses covering calculus, statistics, and more", 
      levels: ["SL", "HL"],
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80"
    },
    {
      subject: "Biology",
      description: "Deep dive into cell biology, genetics, ecology, and evolution",
      levels: ["SL", "HL"], 
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80"
    },
    {
      subject: "Economics",
      description: "Understand micro and macroeconomics with real-world applications",
      levels: ["SL", "HL"],
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80"
    },
    {
      subject: "Computer Science",
      description: "Learn programming, algorithms, and computational thinking", 
      levels: ["SL", "HL"],
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=80"
    },
    {
      subject: "English",
      description: "Literature analysis, language skills, and essay writing",
      levels: ["SL", "HL"],
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&q=80"
    },
    {
      subject: "French", 
      description: "Develop fluency in French language and culture",
      levels: ["SL", "HL", "Ab Initio"],
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80"
    },
    {
      subject: "German",
      description: "Master German language skills and communication",
      levels: ["SL", "HL", "Ab Initio"], 
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80"
    }
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50 relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80)'}}>
      {/* Custom Animations for Mobile */}
      <style>{`
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Mobile-specific touch feedback */
        @media (max-width: 768px) {
          .touch-feedback:active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
          }
        }
      `}</style>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/75"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16" data-aos="fade-up" data-aos-duration="700">
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-3 sm:mb-4 md:mb-5 leading-tight font-serif px-4" style={{fontFamily: 'Georgia, serif'}}>
            The Right <span className="text-blue-700">Courses</span> for You
          </h2>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10">
          {courses.map((course, index) => (
            <div 
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="600"
              data-aos-easing="ease-out"
              data-aos-once="false"
              className="group touch-feedback bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 active:scale-95 cursor-pointer"
            >
              {/* Course Image */}
              <div className="relative h-44 sm:h-48 md:h-56 lg:h-60 xl:h-64 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.subject}
                  className="w-full h-full object-cover transform group-hover:scale-110 group-active:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Blue Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent group-hover:from-blue-600/30 transition-all duration-500"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg transform translate-y-0 group-hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xs sm:text-sm font-bold text-blue-700">IB Course</span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-7 bg-white/90 backdrop-blur-sm transform transition-all duration-500">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-blue-900 mb-2 sm:mb-2.5 transform group-hover:translate-x-1 transition-transform duration-300">
                  {course.subject}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-3 sm:mb-3.5 md:mb-4 line-clamp-2 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {course.description}
                </p>
                <div className="flex gap-2 sm:gap-2.5 flex-wrap">
                  {course.levels.map((level, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-full text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transform hover:scale-110 active:scale-95 transition-all duration-300"
                      style={{
                        animationDelay: `${idx * 100}ms`
                      }}
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
