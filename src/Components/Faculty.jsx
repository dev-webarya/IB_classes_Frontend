import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Faculty = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items per page based on screen width
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet: 2 cards
      } else {
        setItemsPerPage(3); // Desktop: 3 cards
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const teachers = [
   
    {
      name: "Mr. Rohit Gupta",
      image: "https://ibclassesonline.com/uploads/user_image/c05572d49dd9491d25a27ec081bbae51.jpg",
      qualification: "M.Sc in Physics and Chemistry with 6+ years of experience.",
      subjects: "Physics, Chemistry"
    },
    {
      name: "Mr. Sant Kumar Verma",
      image: "https://ibclassesonline.com/uploads/user_image/2ac8190c020baf3966bf41faaa8e50d7.jpg",
      qualification: "Math and Physics tutor with 8+ years of experience.",
      subjects: "Math, Physics"
    },
    {
      name: "Mr. Akash Omar",
      image: "https://ibclassesonline.com/uploads/user_image/9bddc417c57861e18d527ab9bf57139e.jpg",
      qualification: "Math and Physics specialist with 5+ years of experience.",
      subjects: "Math, Physics"
    },
    {
      name: "Mr. Ram G. Mohan",
      image: "https://ibclassesonline.com/uploads/user_image/cced8dbadd5b7598cf00d6d4493e5495.jpg",
      qualification: "Math faculty with extensive IB teaching experience.",
      subjects: "Mathematics"
    },
    {
      name: "Mr. Ashish Kumar",
      image: "https://ibclassesonline.com/uploads/user_image/54f871646089bb4f183016aac23e4bd1.jpg",
      qualification: "Physics and Math tutor with 7+ years of experience.",
      subjects: "Physics, Math"
    },
    {
      name: "Mr. Prashant Singh Bais",
      image: "https://ibclassesonline.com/uploads/user_image/8434cd026fac70499fc36d50d59ca7ac.jpg",
      qualification: "Physics specialist with 6+ years of teaching experience.",
      subjects: "Physics"
    }
  ];

  const totalPages = Math.ceil(teachers.length / itemsPerPage);

  // Auto slide effect
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoSlide); // Cleanup on unmount
  }, [totalPages]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleTeachers = teachers.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80)'}}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-orange-50/80 to-blue-50/80"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16" data-aos="fade-up" data-aos-duration="700">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-green-100 text-[#23B04D] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold">
              Our Expert Team
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-3 sm:mb-4 md:mb-5 leading-tight font-serif px-4" style={{fontFamily: 'Georgia, serif'}}>
            Meet Our <span className="text-blue-700">Excellent Mentors</span>
          </h2>
          {/* <p className="text-lg md:text-xl text-gray-700">
            Our teachers are no less than wizards! <span className="text-2xl">🧙</span>
          </p> */}
        </div>

        {/* Teachers Grid */}
        <div className="relative overflow-hidden mb-6 sm:mb-7 md:mb-8 px-8 sm:px-10 md:px-12">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div key={pageIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 px-1 sm:px-2">
                  {teachers
                    .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                    .map((teacher, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="600"
                      className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border-t-4 h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] xl:h-[360px]"
                      style={{
                        borderTopColor: index % 2 === 0 ? '#10B981' : '#0EA5E9'
                      }}
                    >
                      {/* Full Card Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={teacher.image}
                          alt={teacher.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Full Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent group-hover:from-black/85 transition-all duration-500"></div>

                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6">
                        {/* Teacher Info */}
                        <div className="mb-2 sm:mb-3">
                          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-1.5 transform group-hover:translate-x-1 transition-transform duration-300">
                            {teacher.name}
                          </h3>
                          <p className="text-emerald-400 text-xs sm:text-sm font-semibold mb-1 sm:mb-1.5">
                            {teacher.subjects}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-1.5 sm:mb-2 line-clamp-2">
                            {teacher.qualification}
                          </p>
                        </div>

                        {/* Button */}
                        <Link to="/our-tutors" className="text-[#EB5213] hover:text-white hover:bg-[#EB5213] border-2 border-[#EB5213] rounded-md font-semibold text-xs sm:text-sm px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 transition-all duration-300 flex items-center gap-2 group-hover:gap-3 bg-white shadow-lg w-fit transform hover:scale-105 active:scale-95">
                          View More <FaChevronRight className="text-xs" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5">
          <button
            onClick={prevSlide}
            className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#EB5213] hover:bg-[#d94912] text-white flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-95"
            aria-label="Previous"
          >
            <FaArrowLeft className="text-sm sm:text-base md:text-lg" />
          </button>
          
          <div className="flex gap-1.5 sm:gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-[#EB5213] w-8 sm:w-9 md:w-10'
                    : 'bg-gray-300 hover:bg-[#EB5213] w-2 sm:w-2.5 md:w-3'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#EB5213] hover:bg-[#d94912] text-white flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-95"
            aria-label="Next"
          >
            <FaArrowRight className="text-sm sm:text-base md:text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
