import React, { useState, useEffect } from 'react';
import { getApprovedTestimonials } from '../api/api/testimonialApi';

// Card background images from public/card folder
const cardBackgrounds = [
  '/card/card1.jpeg',
  // '/card/card2.jpeg',
  // '/card/card3PM.jpeg',
  '/card/card4.jpeg',
  // '/card/card5.jpeg',
  // '/card/card6.jpeg',
  '/card/card7.jpeg',
    '/card/card3PM.jpeg',
  // '/card/card8.jpeg',
  // '/card/card9jpeg.jpeg',
  // '/card/card10PM.jpeg'
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCardMedia, setSelectedCardMedia] = useState(null);
  
  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const response = await getApprovedTestimonials();
        
        console.log('API Response:', response); // Debug log
        
        // API response: [{id, text, mediaUrl, createdAt, updatedAt, primary}]
        const data = Array.isArray(response) ? response : (response?.content || response?.data || []);

        const mappedTestimonials = Array.isArray(data) && data.length > 0
          ? data.map(item => {
              const fullText = (item.text || '').trim();
              // Split into quote and attribution (separated by \n\n– or \n\n--)
              const parts = fullText.split(/\n\n[\u2013\u2014\-]+\s*/);
              const quote = parts[0]?.trim() || fullText;
              const attribution = parts.length > 1
                ? parts.slice(1).join(' – ').replace(/\n/g, ' ').trim()
                : '';
              const isVideo = !!(item.mediaUrl || '').match(/\.(mp4|webm|mov)(\?|$)/i);
              return { id: item.id, quote, attribution, mediaUrl: item.mediaUrl || null, isVideo };
            })
          : [];
        
        console.log('Mapped Testimonials:', mappedTestimonials); // Debug log
        setTestimonials(mappedTestimonials);
        setError(null);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError(err.message);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Responsive cards per slide based on screen width
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 768) {
        setCardsPerSlide(1); // Mobile: 1 card
      } else {
        setCardsPerSlide(2); // Desktop & Tablet: 2 cards
      }
    };

    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);
  


  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);
 
  // Loading state
  if (loading) {
    return (
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-orange-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#EB5213]/10 text-[#EB5213] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Success Stories
            </div>
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-4 sm:mb-5 md:mb-6 leading-tight font-serif px-4" style={{fontFamily: 'Georgia, serif'}}>
              What Our <span className="text-blue-700">Students Say</span>
            </h2>
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EB5213]"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-orange-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Custom Styles for Scrollbar */}
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 107, 107, 0.6);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 107, 107, 0.9);
          }
        `}</style>

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16" data-aos="fade-up" data-aos-duration="700">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#EB5213]/10 text-[#EB5213] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Success Stories
          </div>
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-4 sm:mb-5 md:mb-6 leading-tight font-serif px-4" style={{fontFamily: 'Georgia, serif'}}>
            What Our <span className="text-blue-700">Students Say</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            Read testimonials from students who achieved their dream IB scores with our guidance.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative px-8 sm:px-10 md:px-12">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-1 sm:px-2 max-w-6xl mx-auto">
                    {testimonials
                      .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                      .map((testimonial, index) => {
                        // Assign a unique background image to each card
                        const globalIndex = slideIndex * cardsPerSlide + index;
                        const backgroundImage = cardBackgrounds[globalIndex % cardBackgrounds.length];
                        
                        return (
                          <div
                            key={testimonial.id || index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            data-aos-duration="600"
                            className="relative flex flex-col w-full max-w-[520px] mx-auto rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl cursor-pointer"
                            onClick={() => testimonial.mediaUrl && setSelectedCardMedia(testimonial)}
                            style={{
                              minHeight: '320px',
                              height: '320px'
                            }}
                          >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0">
                              <img
                                src={backgroundImage}
                                alt="Card background"
                                className="w-full h-full object-cover transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                              <div className="absolute inset-0 border-[8px] border-[#FF6B6B]/20 transition-colors duration-300"></div>
                            </div>

                            {/* Content Overlay - Text positioned inside quote box */}
                            <div className="relative h-full flex items-start justify-start pt-8 sm:pt-10 md:pt-12 lg:pt-14 pl-10 sm:pl-12 md:pl-14 lg:pl-18 z-10">
                              {/* Media Icon Indicator */}
                              {testimonial.mediaUrl && (
                                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {testimonial.isVideo ? (
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    ) : (
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    )}
                                  </svg>
                                </div>
                              )}

                              {/* Testimonial Text - Inside Quote Box Frame matching image dimensions */}
                              <div className="w-[70%] sm:w-[65%] md:w-[60%] lg:w-[55%] max-w-md max-h-[180px] sm:max-h-[200px] md:max-h-[220px] flex flex-col items-start justify-start overflow-y-auto custom-scrollbar scroll-smooth pr-2 sm:pr-3">
                                <p className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold leading-relaxed text-left drop-shadow-2xl">
                                  {testimonial.quote}
                                </p>
                                {testimonial.attribution && (
                                  <p className="text-white/95 text-[9px] sm:text-[10px] md:text-xs leading-relaxed drop-shadow-lg mt-2 sm:mt-2.5 text-left font-medium">
                                    — {testimonial.attribution}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white hover:bg-gradient-to-r hover:from-[#EB5213] hover:to-[#3A63EB] text-gray-800 hover:text-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 active:scale-95"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white hover:bg-gradient-to-r hover:from-[#EB5213] hover:to-[#3A63EB] text-gray-800 hover:text-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 active:scale-95"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-7 md:mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index 
                    ? 'bg-gradient-to-r from-[#EB5213] to-[#3A63EB] w-6 sm:w-8 h-2.5 sm:h-3' 
                    : 'bg-gray-300 hover:bg-gray-400 w-2.5 sm:w-3 h-2.5 sm:h-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Admin-Uploaded Media */}
      {selectedCardMedia && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedCardMedia(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCardMedia(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all hover:scale-110"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Media Content */}
            <div className="max-h-[80vh] overflow-y-auto">
              {selectedCardMedia.isVideo ? (
                <div className="relative bg-black">
                  <video
                    src={selectedCardMedia.mediaUrl}
                    controls
                    autoPlay
                    className="w-full max-h-[70vh] object-contain"
                  />
                </div>
              ) : (
                <img
                  src={selectedCardMedia.mediaUrl}
                  alt="Testimonial Media"
                  className="w-full max-h-[70vh] object-contain"
                />
              )}
              
              {/* Testimonial Info */}
              <div className="p-6 bg-gradient-to-br from-orange-50 via-blue-50 to-white">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-[#EB5213]/30 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                  <p className="text-gray-800 text-base leading-relaxed italic font-medium">
                    "{selectedCardMedia.quote}"
                  </p>
                </div>
                {selectedCardMedia.attribution && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700">
                      <span className="font-semibold text-[#EB5213]">— </span>
                      <span>{selectedCardMedia.attribution}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
        
        
    </section>
  );
};

export default Testimonials;
