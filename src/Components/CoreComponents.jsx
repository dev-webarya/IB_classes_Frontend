import React from 'react';

const CoreComponents = () => {
  const components = [
    {
      title: "Extended Essay (EE)",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      ),
      description: "Get expert guidance on your 4,000-word research essay",
      color: "bg-[#0071BD]",
      borderColor: "border-[#0071BD]",
      hoverBorder: "hover:border-[#0071BD]"
    },
    {
      title: "Theory of Knowledge (TOK)",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      ),
      description: "Master critical thinking and TOK essay and presentation",
      color: "bg-[#23B04D]",
      borderColor: "border-[#23B04D]",
      hoverBorder: "hover:border-[#23B04D]"
    },
    {
      title: "Internal Assessment (IA)",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"/>
          <path d="M9 7h6v2H9zm7 0h2v2h-2zm-7 3h6v2H9zm7 0h2v2h-2z"/>
        </svg>
      ),
      description: "Achieve top marks with structured IA support",
      color: "bg-[#F51617]",
      borderColor: "border-[#F51617]",
      hoverBorder: "hover:border-[#F51617]"
    }
  ];

  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-light-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14" data-aos="flip-up" data-aos-duration="700">
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-3 sm:mb-4 md:mb-5 leading-tight font-serif px-4" style={{fontFamily: 'Georgia, serif'}}>
            <span className="text-blue-700">IB Core</span> Components
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-800 font-medium max-w-3xl mx-auto px-4">
            Comprehensive support for all three core elements of the IB Diploma Programme
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {components.map((component, index) => (
            <div 
              key={index}
              data-aos="flip-down"
              data-aos-delay={index * 100}
              data-aos-duration="600"
              className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gray-200 ${component.hoverBorder} shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105 hover:-translate-y-2`}
            >
              {/* Image Section */}
              <div className="relative h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden">
                <img 
                  src={component.image} 
                  alt={component.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Icon Overlay */}
                <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${component.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  {component.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 sm:p-6 md:p-7 lg:p-8">
                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif" style={{fontFamily: 'Georgia, serif'}}>
                  {component.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                  {component.description}
                </p>

                {/* CTA Link */}
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-[#0071BD] hover:text-[#005a9c] font-semibold group-hover:gap-3 transition-all text-sm sm:text-base"
                >
                  Get Started
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreComponents;
