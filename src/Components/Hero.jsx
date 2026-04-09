import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookDemoModal from './BookDemoModal';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBookDemoModal, setShowBookDemoModal] = useState(false);

  const slides = [
    {
      id: 1,
      // image: "https://images.pexels.com/photos/5538616/pexels-photo-5538616.jpeg",
      image: "https://images.pexels.com/photos/32213218/pexels-photo-32213218.jpeg",
      title: "Empowering Every IB",
      highlight: "Learner",
      subtitle: "Expert Online Tuition",
      description: "Specialized online tuition for IB MYP & DP (Grades 6–12) with expert tutors. Get support for Higher Level subjects, Extended Essays, and TOK."
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg",
      title: "Master IB Subjects with",
      highlight: "Expert Guidance",
      subtitle: "Physics, Chemistry, Mathematics & More",
      description: "Our experienced tutors provide comprehensive support across all IB subjects including Sciences, Mathematics, Languages, and Humanities."
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/4145350/pexels-photo-4145350.jpeg",
      title: "Achieve Excellence in",
      highlight: "IB Core Components",
      subtitle: "Extended Essay | TOK | Internal Assessment | CAS",
      description: "Get dedicated support for your Extended Essay, Theory of Knowledge, Internal Assessments, and CAS activities with our IB specialists."
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/35745624/pexels-photo-35745624.jpeg",
      title: "Join Successful IB",
      highlight: "Students Worldwide",
      subtitle: "95% Success Rate | 1000+ Students",
      description: "Join thousands of successful IB students who have achieved their dream scores with our personalized online coaching programs."
    }
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Content */}
      <div className="relative z-[5] text-white px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl w-full">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ${
                index === currentSlide 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10 absolute'
              }`}
            >
              {/* Heading */}
              <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-3 sm:mb-4 md:mb-5 font-serif" style={{fontFamily: 'Georgia, serif'}}>
                {slide.title} <br /> 
                <span className="text-white">
                  {slide.highlight}
                </span>
              </h1>

              {/* Subheading */}
              <h2 className="text-sm sm:text-base md:text-base lg:text-lg mb-3 sm:mb-4 font-light">
                {slide.subtitle}
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-5 sm:mb-6 md:mb-7 leading-relaxed max-w-2xl text-gray-100">
                {slide.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => setShowBookDemoModal(true)}
                  className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-md sm:rounded-lg font-semibold text-sm sm:text-base md:text-lg text-center transition transform hover:scale-105 active:scale-95 shadow-lg text-white bg-gradient-to-r from-[#FF6B35] to-[#E85A24] hover:shadow-2xl"
                >
                  Book Free Demo →
                </button>

                <a
                  href="/contact"
                  className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-md sm:rounded-lg text-sm sm:text-base md:text-lg text-center transition transform hover:scale-105 active:scale-95 border-2 border-white hover:bg-white/20 font-semibold text-white"
                >
                  Explore Programs
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'bg-white w-8 sm:w-10 h-2.5 sm:h-3' 
                : 'bg-white/50 hover:bg-white/70 w-2.5 sm:w-3 h-2.5 sm:h-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Book Demo Modal */}
      <BookDemoModal 
        isOpen={showBookDemoModal}
        onClose={() => setShowBookDemoModal(false)}
      />

    </section>
  );
};

export default Hero;