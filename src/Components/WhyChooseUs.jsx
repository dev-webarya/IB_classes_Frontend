import React from 'react';
import { CheckCircle, MessageCircle, Users, BookOpen, Clock, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    { icon: MessageCircle, title: "Message The Tutors Before Booking A Demo" },
    { icon: Users, title: "Choose Your Own Tutor" },
    { icon: BookOpen, title: "Undivided Personal Attention" },
    { icon: Clock, title: "Unlimited Doubt Clearing Sessions" },
    { icon: Award, title: "Virtual Whiteboard Functionality" }
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white">

      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80')"
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center" data-aos="fade-right">

            {/* Background Blob */}
            <div className="absolute w-[500px] h-[500px] bg-pink-200 rounded-full blur-3xl opacity-40"></div>

            {/* Main Image */}
            <div className="relative z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://www.sssi.in/assets/front_new/new-style/images/young-pretty.webp"
                alt="student"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Icon */}
            <div className="absolute top-0 left-10 animate-float">
              <div className="bg-blue-500 p-4 rounded-xl shadow-lg">
                <MessageCircle className="text-white w-6 h-6" />
              </div>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-4" data-aos="fade-left">

            <h2 className="text-3xl lg:text-4xl font-bold text-black font-serif" style={{fontFamily: 'Georgia, serif'}}>
              Advantages Of <span className="text-blue-700">Online Classes</span>
            </h2>

            <p className="text-gray-600">
              Learn smarter with IBClassesOnline®. Get personal attention, real-time whiteboard learning,
              and structured exam preparation.
            </p>

            {/* FEATURES */}
            <div className="space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg shadow hover:shadow-md transition"
                  >
                    <div className="bg-orange-500 p-2 rounded-full">
                      <CheckCircle className="text-white w-5 h-5" />
                    </div>

                    <p className="font-medium text-gray-800">{feature.title}</p>

                    <Icon className="ml-auto text-orange-400 w-5 h-5" />
                  </div>
                );
              })}
            </div>

            {/* BUTTON */}
            <a
              href="https://wa.me/919611488690"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;