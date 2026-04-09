import React, { useEffect } from 'react';
import { GraduationCap, Phone } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const tutors = [
  {
    id: 1,
    name: 'B. Aishwarya',
    credentials: 'M.Sc. Chemistry, NIT Rourkela',
    title: 'IGCSE Chemistry Specialist',
    description: 'Ms. B. Aishwarya is a committed IGCSE Chemistry educator with several years of experience. She qualified GATE (Chemistry) with an AIR of 390 and brings inquiry-based learning to every session.',
    expertise: ['IGCSE Chemistry (Core & Extended)', 'Inquiry-based learning', 'Lab skills and practical support', 'Exam strategies for Paper 1, 2, and 6', 'Conceptual understanding', 'Academic content development'],
    subjects: ['Chemistry'],
    image: '/tutors/aishwarya.jpg',
  },
  {
    id: 2,
    name: 'Balasaritha P',
    credentials: 'Ph.D. (Physics) | NET Qualified (AIR 132)',
    title: 'IGCSE Physics & Mathematics Specialist',
    description: 'Ms. Balasaritha P specialises in IGCSE Physics and Mathematics. Her Ph.D. in Physics and NET qualification bring academic depth and structured teaching to IGCSE learners.',
    expertise: ['IGCSE Physics (Core & Extended)', 'IGCSE Mathematics', 'Application of command terms', 'Strong conceptual focus', 'Mentoring Grades 9–10', 'Numerical and analytical skills'],
    subjects: ['Physics', 'Mathematics'],
    image: '/tutors/balasaritha.jpg',
  },
  {
    id: 3,
    name: 'Rakesh',
    credentials: 'M.Sc. Chemistry (3 Gold Medals) | University of Mysore',
    title: 'IGCSE Chemistry, Mathematics & Science Faculty',
    description: 'Mr. Rakesh is a dynamic educator with strong academic credentials including three gold medals during his M.Sc. in Chemistry. He specialises in IGCSE Mathematics and Sciences.',
    expertise: ['IGCSE Chemistry (SL/HL)', 'IGCSE Mathematics', 'Real-life application of concepts', 'Inquiry-based learning', 'Foundational understanding', 'IGCSE exam patterns'],
    subjects: ['Chemistry', 'Mathematics', 'Science'],
    image: '/tutors/rakesh.jpg',
  },
  {
    id: 4,
    name: 'Shambhu M. G.',
    credentials: 'M.Sc. Biotechnology',
    title: 'IGCSE Biology Specialist',
    description: 'Mr. Shambhu M. G. teaches IGCSE Biology with a focus on conceptual depth and real-world examples. His visual learning methods help students excel in IGCSE assessments.',
    expertise: ['IGCSE Biology (Core & Extended)', 'Visual and conceptual learning', 'Lab reports and scientific inquiry', 'Exam preparation Paper 1, 2, 6', 'Building academic confidence', 'Linking content to global contexts'],
    subjects: ['Biology'],
    image: '/tutors/shambhu.jpg',
  },
  {
    id: 5,
    name: 'Salai Kulamani Birlasekar',
    credentials: 'M.Phil in English | 12+ Years of Experience',
    title: 'IGCSE English Language & Literature Specialist',
    description: 'Ms. Birlasekar is an experienced IGCSE English educator specialising in Language and Literature. She is known for her structured, clear, and student-centred teaching approach.',
    expertise: ['IGCSE English Language', 'IGCSE English Literature', 'Textual analysis techniques', 'Essay and commentary writing', 'Reading comprehension strategies', 'Grammar and vocabulary development'],
    subjects: ['English'],
    image: '/tutors/birlasekar.jpg',
  },
];

const getSubjectColor = (subject) => {
  const colors = {
    Chemistry: 'bg-purple-100 text-purple-700',
    Physics: 'bg-blue-100 text-blue-700',
    Mathematics: 'bg-green-100 text-green-700',
    Biology: 'bg-teal-100 text-teal-700',
    English: 'bg-pink-100 text-pink-700',
    Statistics: 'bg-indigo-100 text-indigo-700',
    Science: 'bg-cyan-100 text-cyan-700',
  };
  return colors[subject] || 'bg-gray-100 text-gray-700';
};

const TutorsIGCSE = () => {
  useEffect(() => {
    AOS.init({ duration: 500, easing: 'ease-out-cubic', once: false, mirror: true });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero1.png" alt="IGCSE Tutors" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center text-white">
          <div className="mb-8 flex justify-center">
            <img src="/logo (3).png" alt="IBClassesOnline Logo" className="h-24 md:h-28 drop-shadow-2xl" />
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold border border-white/20 mb-6">
            <GraduationCap className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">IGCSE Expert Faculty</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Our <span className="text-[#FF6B35]">IGCSE Expert</span> <span className="text-[#0071BD]">Tutors</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Cambridge IGCSE specialists dedicated to helping students achieve outstanding grades across all subjects.
          </p>
          <a
            href="https://wa.me/918317407250?text=I%20would%20like%20to%20join%20a%20free%20demo%20class"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-xl hover:bg-[#E85A24] hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Book a Free Demo Class
          </a>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              IGCSE <span className="text-[#FF6B35]">Specialist</span> Tutors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Cambridge-qualified educators helping students achieve A* and A grades in their IGCSE examinations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutors.map((tutor, index) => (
              <div key={tutor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative h-56 bg-gradient-to-br from-[#0071BD]/10 to-[#FF6B35]/10">
                  <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544717305-27a734ef1904?auto=format&fit=crop&q=80&w=400'; }} />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex flex-wrap gap-1">
                      {tutor.subjects.map((subject) => (
                        <span key={subject} className={`text-xs font-bold px-2 py-0.5 rounded-full ${getSubjectColor(subject)}`}>{subject}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{tutor.name}</h3>
                  <p className="text-[#0071BD] text-sm font-semibold mb-1">{tutor.credentials}</p>
                  <p className="text-gray-500 text-xs mb-3 italic">{tutor.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{tutor.description}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Expertise</p>
                    <ul className="space-y-1">
                      {tutor.expertise.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="text-[#FF6B35] mt-0.5">•</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorsIGCSE;
