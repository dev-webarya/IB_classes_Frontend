import React, { useEffect } from 'react';
import { GraduationCap, Award, BookOpen, Users, CheckCircle, Phone } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurTutors = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true
    });
  }, []);
  const tutors = [
    {
      id: 1,
      name: "B. Aishwarya",
      credentials: "M.Sc. Chemistry, NIT Rourkela",
      title: "IB Chemistry Educator | MYP & DP Chemistry Specialist",
      description: "Ms. B. Aishwarya is a committed IB Chemistry educator with several years of experience teaching students exclusively from the International Baccalaureate (IB) curriculum. A strong academic achiever, she qualified and holds a M.Sc. in Chemistry from NIT Rourkela, where she also cleared GATE (Chemistry) with an AIR of 390.",
      expertise: [
        "IB MYP Sciences and DP Chemistry (SL & HL)",
        "Inquiry-based learning and conceptual understanding",
        "Academic content development aligned with IB objectives",
        "TOK integration within the sciences",
        "Lab-skills support and IA guidance",
        "Exam-oriented strategies for Paper 1, 2, and 3"
      ],
      subjects: ["Chemistry"],
      image: "/tutors/aishwarya.jpg"
    },
    {
      id: 2,
      name: "Balasaritha P",
      credentials: "Ph.D. (Physics) | NET Qualified (AIR 132)",
      title: "IB MYP & DP Educator | Physics & Mathematics Faculty",
      description: "Ms. Balasaritha P is an experienced educator specializing in IB MYP Physics, MYP Mathematics, and DP Physics, with a Ph.D. in Physics and NET qualification (AIR 132). She brings deep academic expertise and international-curriculum teaching experience to support IB learners.",
      expertise: [
        "Inquiry-based learning for MYP",
        "Strong conceptual focus for DP Physics (SL/HL)",
        "Application of IB command terms",
        "Support for Internal Assessments (IA)",
        "Paper 1 (MCQs), Paper 2 (structured problems), and Paper 3 strategies",
        "Mentoring students across Grades 6–12"
      ],
      subjects: ["Physics", "Mathematics"],
      image: "/tutors/balasaritha.jpg"
    },
    {
      id: 3,
      name: "Ramya Rajamani",
      credentials: "19+ Years of Experience",
      title: "Mathematics, Statistics & Physics Faculty | IB MYP & DP Educator",
      description: "Ms. Ramya Rajamani is a veteran educator with nearly two decades of experience teaching IB MYP Mathematics, MYP Physics, and DP Mathematics (AA/AI – SL). Her teaching focuses on building strong analytical foundations and supporting students in achieving excellence in IB assessments.",
      expertise: [
        "Algebra & functions",
        "Trigonometry and DP-level introductory calculus",
        "Probability & statistics",
        "Data interpretation & modelling",
        "Scientific application of mathematics",
        "Research Analysis background for real-world connections"
      ],
      subjects: ["Mathematics", "Statistics", "Physics"],
      image: "/tutors/ramya.jpg"
    },
    {
      id: 4,
      name: "Ram G. Mohan",
      credentials: "M.Tech (IIT Delhi) | B.Ed (Mathematics)",
      title: "Physics & Mathematics Faculty | IB MYP & DP Instructor",
      description: "Mr. Ram G. Mohan is a highly accomplished educator specializing in IB MYP Mathematics & Sciences and DP Physics, supported by strong academic credentials including an M.Tech from IIT Delhi, a B.Ed (Mathematics), and over 10 years of teaching experience.",
      expertise: [
        "Full alignment with IB learning objectives",
        "Conceptual teaching with real-world examples",
        "Support for IA development and lab investigations",
        "Systematic preparation for MYP eAssessments and DP exams",
        "13-year corporate background in software engineering",
        "Strong analytical foundations building"
      ],
      subjects: ["Physics", "Mathematics"],
      image: "/tutors/ram.jpg"
    },
    {
      id: 5,
      name: 'K. V. Bala Subramanyam ("Mr. Balu")',
      credentials: "M.Sc. (Physics), B.Ed | 15+ Years of Experience",
      title: "IB Physics Faculty | MYP & DP Physics Specialist",
      description: "Mr. Balu is a seasoned Physics educator with extensive experience teaching exclusively IB MYP Physics and DP Physics (SL/HL). His structured approach and clear explanations make him a respected mentor for IB students.",
      expertise: [
        "Conceptual clarity with global contextualization",
        "Strong numerical and analytical problem-solving",
        "Lesson plans aligned with IB objectives",
        "Clear understanding and application of IB command terms",
        "Support for IA, labs, and investigations",
        "Critical thinking development"
      ],
      subjects: ["Physics"],
      image: "/tutors/balu.jpg"
    },
    {
      id: 6,
      name: "Shambhu M. G.",
      credentials: "M.Sc. Biotechnology",
      title: "Biology Faculty | IB MYP Science & DP Biology Educator",
      description: "Mr. Shambhu M. G. is an experienced Biology educator who teaches IB MYP Sciences and DP Biology, helping learners build deep conceptual understanding through clear explanations and real-world examples.",
      expertise: [
        "Linking content to global contexts",
        "Visual learning methods",
        "Focus on conceptual depth over memorization",
        "Support for IAs, lab reports, and scientific inquiry",
        "Exam-oriented preparation for Paper 1, 2, and 3 (DP)",
        "Building confidence and intellectual curiosity"
      ],
      subjects: ["Biology"],
      image: "/tutors/shambhu.jpg"
    },
    {
      id: 7,
      name: "Rakesh",
      credentials: "M.Sc. Chemistry (3 Gold Medals) | University of Mysore",
      title: "Chemistry, Mathematics & Science Faculty | IB MYP & DP Educator",
      description: "Mr. Rakesh is a dynamic educator specializing in IB MYP Mathematics & Sciences and DP Chemistry, with strong academic credentials including three gold medals during his M.Sc. in Chemistry from the University of Mysore.",
      expertise: [
        "Inquiry-based learning",
        "Strong foundational understanding",
        "Real-life application of scientific and mathematical concepts",
        "IB command terms and exam patterns",
        "MYP Math & Sciences (Grades 6–10)",
        "DP Chemistry (SL/HL)"
      ],
      subjects: ["Chemistry", "Mathematics", "Science"],
      image: "/tutors/rakesh.jpg"
    },
    {
      id: 8,
      name: "Salai Kulamani Birlasekar",
      credentials: "M.Phil in English | 12+ Years of Experience",
      title: "English Language Faculty | IB Language & Literature Specialist",
      description: "Ms. Birlasekar is an experienced English educator who teaches exclusively IB MYP English and DP English Language & Literature (SL/HL). With an M.Phil in English and 12+ years of teaching experience, she is known for her structured, clear, and student-centred approach.",
      expertise: [
        "Training in textual analysis & literary techniques",
        "Developing strong writing skills for commentaries and essays",
        "Enhancing reading comprehension through guided strategies",
        "Alignment with IB assessment criteria (A–D / Criteria A–E)",
        "TOK-linked perspectives on literature",
        "Support for Internal Assessments (IO & HL Essay)"
      ],
      subjects: ["English"],
      image: "/tutors/birlasekar.jpg"
    },
    {
      id: 9,
      name: "Neha Aggarwal",
      credentials: "CSIR NET Qualified",
      title: "Mathematics Educator | IB MYP & DP Mathematics Instructor",
      description: "Ms. Neha Aggarwal is a dedicated Mathematics educator specializing in IB MYP Mathematics and DP Mathematics (AA/AI – SL). With strong academic credentials including CSIR NET qualification, she brings conceptual depth and clarity to her lessons.",
      expertise: [
        "Developing reasoning and analytical thinking",
        "Inquiry-based understanding",
        "Mastery of IB command terms",
        "Clear strategies for solving AA/AI-style questions",
        "Strengthening mathematical writing and justification",
        "Computational thinking integration (C, C++, Java, Python)"
      ],
      subjects: ["Mathematics"],
      image: "/tutors/neha.jpg"
    }
  ];

  const getSubjectColor = (subject) => {
    const colors = {
      'Chemistry': 'bg-purple-100 text-purple-700',
      'Physics': 'bg-blue-100 text-blue-700',
      'Mathematics': 'bg-green-100 text-green-700',
      'Biology': 'bg-teal-100 text-teal-700',
      'English': 'bg-pink-100 text-pink-700',
      'Statistics': 'bg-indigo-100 text-indigo-700',
      'Science': 'bg-cyan-100 text-cyan-700'
    };
    return colors[subject] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/hero1.png" 
            alt="Our Tutors Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center text-white">
          {/* Logo Display */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/logo (3).png" 
              alt="IBClassesOnline Logo" 
              className="h-24 md:h-28 drop-shadow-2xl"
            />
          </div>
          
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold border border-white/20 mb-6">
            <GraduationCap className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Meet Our Expert Faculty</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{fontFamily: 'Georgia, serif'}}>
            Our <span className="text-[#FF6B35]">IB Expert</span> <span className="text-[#0071BD]">Tutors</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            World-class educators dedicated to IB excellence. Learn from qualified professionals with proven track records in MYP and DP programs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://wa.me/918317407250?text=I%20would%20like%20to%20join%20a%20free%20demo%20class" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-xl hover:bg-[#E85A24] hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Book a Free Demo Class
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white shadow-lg relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group" data-aos="fade-up" data-aos-delay="0">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#0071BD] bg-clip-text text-transparent mb-2">9+</div>
              <div className="text-gray-600 font-medium">Expert Tutors</div>
            </div>
            <div className="text-center group" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#0071BD] to-[#FF6B35] bg-clip-text text-transparent mb-2">150+</div>
              <div className="text-gray-600 font-medium">Years Combined Experience</div>
            </div>
            <div className="text-center group" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#0071BD] bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-gray-600 font-medium">IB Curriculum Focus</div>
            </div>
            <div className="text-center group" data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#0071BD] to-[#FF6B35] bg-clip-text text-transparent mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Students Taught</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Tutors Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0071BD] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0071BD]/10 to-[#FF6B35]/10 text-[#0071BD] rounded-full text-sm font-bold border border-[#0071BD]/20 mb-6">
              <Award className="w-5 h-5" />
              <span>Our Excellence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily: 'Georgia, serif'}}>
              Why Choose <span className="text-[#FF6B35]">Our Tutors?</span>
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#0071BD] via-[#FF6B35] to-[#0071BD] rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our faculty members are not just subject experts—they are IB specialists committed to student success.
            </p>
          </div>

          <style>{`
            .tutor-feature-card {
              position: relative;
              overflow: hidden;
              z-index: 0;
            }
            
            .tutor-feature-card::before {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(to right, #0071BD, #FF6B35);
              transform: translateY(100%);
              transition: transform 0.3s ease;
              z-index: -1;
            }
            
            .tutor-feature-card:hover::before {
              transform: translateY(0%);
            }
            
            .tutor-feature-card:hover .card-text {
              color: rgba(255, 255, 255, 0.95);
              transition: color 0.5s ease-out 0.1s;
            }
            
            .tutor-feature-card:hover .card-title {
              color: white;
              transition: color 0.5s ease-out 0.1s;
            }
            
            .tutor-feature-card:hover .icon-box {
              background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%);
              border: 2px solid white;
              transition: all 0.5s ease-out 0.1s;
            }
          `}</style>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="tutor-feature-card group bg-gradient-to-br from-blue-100 via-blue-200 to-orange-100 p-8 rounded-2xl border border-blue-50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="relative z-10">
                <div className="icon-box bg-gradient-to-br from-[#0071BD] to-[#FF6B35] w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="card-title text-xl font-bold text-gray-800 mb-2" style={{fontFamily: 'Georgia, serif'}}>IB Certified</h3>
                <p className="card-text text-gray-600">All tutors are trained in IB pedagogy and assessment standards</p>
              </div>
            </div>

            <div className="tutor-feature-card group bg-gradient-to-br from-orange-100 via-orange-200 to-blue-100 p-8 rounded-2xl border border-orange-50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="relative z-10">
                <div className="icon-box bg-gradient-to-br from-[#FF6B35] to-[#0071BD] w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="card-title text-xl font-bold text-gray-800 mb-2" style={{fontFamily: 'Georgia, serif'}}>Subject Mastery</h3>
                <p className="card-text text-gray-600">Deep expertise in specific IB subjects with proven results</p>
              </div>
            </div>

            <div className="tutor-feature-card group bg-gradient-to-br from-blue-100 via-orange-100 to-blue-200 p-8 rounded-2xl border border-blue-50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="relative z-10">
                <div className="icon-box bg-gradient-to-br from-[#0071BD] to-[#FF6B35] w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="card-title text-xl font-bold text-gray-800 mb-2" style={{fontFamily: 'Georgia, serif'}}>Personalized Approach</h3>
                <p className="card-text text-gray-600">Student-centered teaching tailored to individual learning styles</p>
              </div>
            </div>

            <div className="tutor-feature-card group bg-gradient-to-br from-orange-100 via-orange-200 to-blue-100 p-8 rounded-2xl border border-orange-50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="relative z-10">
                <div className="icon-box bg-gradient-to-br from-[#FF6B35] to-[#0071BD] w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="card-title text-xl font-bold text-gray-800 mb-2" style={{fontFamily: 'Georgia, serif'}}>Proven Track Record</h3>
                <p className="card-text text-gray-600">Consistent excellent results in IB examinations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutors Grid */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/hero2.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0071BD]/10 to-[#FF6B35]/10 text-[#0071BD] rounded-full text-sm font-bold border border-[#0071BD]/20 mb-6">
              <GraduationCap className="w-5 h-5" />
              <span>Our Expert Faculty</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-gray-900">Meet Our</span> <span className="text-[#0071BD]">Dedicated Educators</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#0071BD] via-[#FF6B35] to-[#0071BD] rounded-full"></div>
            </div>
          </div>
          
          <div className="space-y-12">
            {tutors.map((tutor, index) => (
              <div 
                key={tutor.id}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100}
              >
                {/* Image Section */}
                <div className="lg:w-1/3 bg-gradient-to-br from-blue-100 to-orange-100 p-8 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0071BD]/10 to-[#FF6B35]/10"></div>
                  <div className="text-center relative z-10">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-[#0071BD] to-[#FF6B35] rounded-full flex items-center justify-center mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center overflow-hidden">
                        <img 
                          src={tutor.image || '/hero1.png'}
                          alt={tutor.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full items-center justify-center hidden">
                          <GraduationCap className="w-24 h-24 text-[#0071BD]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                      {tutor.subjects.map((subject, idx) => (
                        <span 
                          key={idx}
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${getSubjectColor(subject)}`}
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-2/3 p-8">
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2" style={{fontFamily: 'Georgia, serif'}}>{tutor.name}</h3>
                    <p className="text-[#FF6B35] font-bold text-lg mb-1">{tutor.credentials}</p>
                    <p className="text-[#0071BD] font-semibold text-base">{tutor.title}</p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {tutor.description}
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2" style={{fontFamily: 'Georgia, serif'}}>
                      <CheckCircle className="w-5 h-5 text-[#0071BD]" />
                      Key Expertise & Specializations
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {tutor.expertise.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#FF6B35] mt-1">•</span>
                          <span className="text-sm">{item}</span>
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

export default OurTutors;
