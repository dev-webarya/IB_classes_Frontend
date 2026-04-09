import React, { useState, useEffect } from 'react';

const Achievements = () => {
  const [counters, setCounters] = useState({
    years: 0,
    teachers: 0,
    students: 0
  });

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      years: 25,
      teachers: 50,
      students: 1000
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        years: Math.floor(targets.years * progress),
        teachers: Math.floor(targets.teachers * progress),
        students: Math.floor(targets.students * progress)
      });

      if (currentStep >= steps) {
        setCounters(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const achievements = [
    {
      number: `${counters.years}+`,
      label: "Years of Excellence",
    },
    {
      number: `${counters.teachers}+`,
      label: "Expert Teachers",
    },
    {
      number: `${counters.students}+`,
      label: "Students Trained",
    }
  ];

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80)',
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="text-center transform transition-all duration-500 hover:scale-110"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white transition-all duration-300">
                {achievement.number}
              </h3>
              <p className="text-base md:text-lg text-white/90 font-medium">
                {achievement.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
