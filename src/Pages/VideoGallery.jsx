import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Gallery Videos Data
  const galleryVideos = [
    { id: 1, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/hero1.png', category: 'classroom', title: 'Live Online Teaching Session', description: 'Interactive online classes with expert teachers', duration: '10:30' },
    { id: 2, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/hero2.png', category: 'classroom', title: 'Students Learning Together', description: 'Collaborative learning environment', duration: '8:45' },
    { id: 3, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/hero1.png', category: 'events', title: 'Student Achievement Ceremony', description: 'Celebrating success and excellence', duration: '15:20' },
    { id: 4, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/hero2.png', category: 'events', title: 'Annual Function Highlights', description: 'Memorable moments from our annual event', duration: '12:10' },
    { id: 5, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/hero1.png', category: 'classroom', title: 'Physics Lab Sessions', description: 'Hands-on practical learning experience', duration: '9:30' },
    { id: 6, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/hero2.png', category: 'tutorials', title: 'Professional Teaching Setup', description: 'Modern digital teaching infrastructure', duration: '11:15' },
    { id: 7, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/hero1.png', category: 'events', title: 'Science Exhibition', description: 'Showcasing student projects and innovations', duration: '7:45' },
    { id: 8, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/hero2.png', category: 'tutorials', title: 'Chemistry Experiments', description: 'Advanced laboratory demonstrations', duration: '10:00' },
    { id: 9, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/hero1.png', category: 'classroom', title: 'Student Success Stories', description: 'Inspiring testimonials from our students', duration: '6:30' },
  ];

  const categories = [
    { id: 'all', name: 'All Videos', icon: '🎬' },
    { id: 'classroom', name: 'Classroom', icon: '👨‍🏫' },
    { id: 'events', name: 'Events', icon: '🎉' },
    { id: 'tutorials', name: 'Tutorials', icon: '📚' },
  ];

  const filteredVideos = activeFilter === 'all' 
    ? galleryVideos 
    : galleryVideos.filter(video => video.category === activeFilter);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/hero2.png" 
            alt="Video Gallery Background" 
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
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight font-serif" style={{fontFamily: 'Georgia, serif'}}>
            <span className="text-[#FF6B35]">Video</span> <span className="text-[#0071BD]">Gallery</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Watch Our Learning Journey in Action
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-[#0071BD] to-[#FF6B35] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                {/* Video Thumbnail Container */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-200 cursor-pointer" onClick={() => setSelectedVideo(video)}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-xl">
                      <svg className="w-8 h-8 text-[#0071BD] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-lg text-white text-xs font-semibold">
                    {video.duration}
                  </div>
                </div>
                
                {/* Content Below Video */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#0071BD] transition-colors font-serif" style={{fontFamily: 'Georgia, serif'}}>{video.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-10 py-4 bg-[#FF6B35] text-white rounded-full font-bold text-lg hover:bg-[#E85A24] hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Load More Videos
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={() => setSelectedVideo(null)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Video Player */}
            <div className="relative aspect-[16/9] bg-black rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={selectedVideo.src}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2 font-serif" style={{fontFamily: 'Georgia, serif'}}>{selectedVideo.title}</h3>
              <div className="flex items-center justify-center gap-4">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                  {categories.find(cat => cat.id === selectedVideo.category)?.name || 'Video'}
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                  {selectedVideo.duration}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-[#0071BD]/5 to-[#FF6B35]/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-gray-900">Want to Be Part of</span> <br/>
              <span className="bg-gradient-to-r from-[#0071BD] to-[#FF6B35] bg-clip-text text-transparent">Our Success Story?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Join thousands of successful students who have achieved excellence with IBClassesOnline
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="px-10 py-4 bg-[#FF6B35] text-white rounded-full font-bold hover:bg-[#E85A24] hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
                Book Free Demo Class
              </Link>
              <Link to="/contact-us" className="px-8 py-4 bg-white text-[#0071BD] border-2 border-[#0071BD] rounded-full font-semibold hover:bg-[#0071BD] hover:text-white transition-all duration-300 text-center">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoGallery;
