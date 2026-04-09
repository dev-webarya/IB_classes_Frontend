import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Gallery Images Data
  const galleryImages = [
    { id: 1, src: '/hero1.png', category: 'classroom', title: 'Live Online Teaching Session', description: 'Interactive online classes with expert teachers' },
    { id: 2, src: '/hero2.png', category: 'classroom', title: 'Students Learning Together', description: 'Collaborative learning environment' },
    { id: 3, src: '/hero1.png', category: 'events', title: 'Student Achievement Ceremony', description: 'Celebrating success and excellence' },
    { id: 4, src: '/hero2.png', category: 'events', title: 'Annual Function Highlights', description: 'Memorable moments from our annual event' },
    { id: 5, src: '/hero1.png', category: 'classroom', title: 'Physics Lab Sessions', description: 'Hands-on practical learning experience' },
    { id: 6, src: '/hero2.png', category: 'campus', title: 'Professional Teaching Setup', description: 'Modern digital teaching infrastructure' },
    { id: 7, src: '/hero1.png', category: 'events', title: 'Science Exhibition', description: 'Showcasing student projects and innovations' },
    { id: 8, src: '/hero2.png', category: 'campus', title: 'Study Environment', description: 'Comfortable and focused learning spaces' },
    { id: 9, src: '/hero1.png', category: 'classroom', title: 'Mathematics Workshop', description: 'Advanced problem-solving sessions' },
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📸' },
    { id: 'classroom', name: 'Classroom', icon: '👨‍🏫' },
    { id: 'events', name: 'Events', icon: '🎉' },
    { id: 'campus', name: 'Campus', icon: '🏫' },
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/hero2.png" 
            alt="Gallery Background" 
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
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight font-serif" style={{fontFamily: 'Georgia, serif'}}>
            <span className="text-[#FF6B35]">Photo</span> <span className="text-[#0071BD]">Gallery</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Capturing Moments of Excellence and Learning
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

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200 cursor-pointer" onClick={() => setSelectedImage(image)}>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-[#0071BD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Content Below Image */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#0071BD] transition-colors font-serif" style={{fontFamily: 'Georgia, serif'}}>{image.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-10 py-4 bg-[#FF6B35] text-white rounded-full font-bold text-lg hover:bg-[#E85A24] hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Load More Photos
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2 font-serif" style={{fontFamily: 'Georgia, serif'}}>{selectedImage.title}</h3>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                {categories.find(cat => cat.id === selectedImage.category)?.name || 'Gallery'}
              </span>
            </div>
          </div>
        </div>
      )}

    
    </div>
  );
};

export default Gallery;
