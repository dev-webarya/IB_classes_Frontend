import React, { useState } from 'react';

const SuccessStories = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const stories = [
    {
      id: 1,
      name: "Tejal",
      class: "Class 8th",
      message: "Improved my grades in school!",
      type: "image",
      image: "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/6e384f2b-c8f0-4d3c-88d6-a704ac15d2cc.webp",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    {
      id: 2,
      name: "Naksh",
      class: "Class 3rd",
      message: "I love all my mentors : They help me with all my doubts",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      thumbnail: "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/f3a66aab-c4fa-4b03-b4a3-0b7ae330a350.webp",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      id: 3,
      name: "Utkarsh",
      class: "Class 3rd",
      message: "My Parents are happy. Thanks IB CJr!",
      type: "image",
      image: "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/416d8181-3857-4660-bbfb-8e4a8902ff70.webp",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100"
    }
  ];

  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16" data-aos="fade-up" data-aos-duration="700">
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 font-serif px-4" style={{fontFamily: 'Georgia, serif'}}>
            <span className="text-black">Stories of our </span>
            <span className="bg-gradient-to-r from-[#487fe6] to-[#6366F1] bg-clip-text text-transparent">
              Brightest
            </span>
            <span className="text-black"> </span>
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent">
              Stars!
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 flex items-center justify-center gap-2 flex-wrap px-4">
            <span>Students and Parents</span>
            <span className="text-red-500">❤️</span>
            <span className="font-semibold">IBClassesOnline</span>
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <div 
              key={story.id}
              className={`${story.bgColor} rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative group`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              {/* Media Section - Image or Video */}
              <div className="relative h-72 sm:h-80 md:h-[22rem] lg:h-96 xl:h-[26rem] overflow-hidden">
                {story.type === "video" ? (
                  <div className="relative w-full h-full group cursor-pointer">
                    {playingVideo === story.id ? (
                      <iframe
                        src={story.videoUrl}
                        title={`${story.name} testimonial`}
                        className="w-full h-full object-cover"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <>
                        <img 
                          src={story.thumbnail}
                          alt={story.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Play Button Overlay */}
                        <div 
                          onClick={() => setPlayingVideo(story.id)}
                          className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300"
                        >
                          <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl active:scale-95">
                            <div className="w-0 h-0 border-t-[10px] sm:border-t-[11px] md:border-t-[12px] border-t-transparent border-l-[16px] sm:border-l-[18px] md:border-l-[20px] border-l-[#0071BD] border-b-[10px] sm:border-b-[11px] md:border-b-[12px] border-b-transparent ml-1"></div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <img 
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 sm:p-5 md:p-6 pt-16 sm:pt-18 md:pt-20">
                  <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 leading-tight">
                    {story.message}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium">
                    {story.name}, {story.class}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;
