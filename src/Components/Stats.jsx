import React from 'react';

const Stats = () => {
  const features = [
    {
      image: "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/523946d6-9389-4017-87b6-24fb59fe249b.webp",
      title: "Live Interactive",
      subtitle: "Classes",
      bgColor: "bg-gradient-to-br from-red-50 to-red-100",
      badgeBg: "bg-red-500"
    },
    {
      image: "https://img.icons8.com/color/96/000000/headset.png",
      title: "24 x 7",
      subtitle: "Mentor Support",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      badge: null,
      badgeBg: null
    },
    {
      image: "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/ca486553-e34e-401c-a5e2-76a66dcc02f4.webp",
      title: "Daily",
      subtitle: "Progress Tracking",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      badge: null,
      badgeBg: null
    },
    {
      image: "https://img.icons8.com/color/96/000000/medal.png",
      title: "Practice Led",
      subtitle: "Learning",
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      badge: null,
      badgeBg: null
    }
  ];

  return (
    <section className="py-6 sm:py-8 md:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-5 sm:py-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {/* Badge */}
                {feature.badge && (
                  <div className={`${feature.badgeBg} text-white text-xs font-bold px-2 sm:px-2.5 py-1 rounded-md mb-2`}>
                    {feature.badge}
                  </div>
                )}
                
                {/* Icon Image */}
                <div className={`${feature.bgColor} w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 shadow-sm`}>
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
                
                {/* Text Content */}
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;