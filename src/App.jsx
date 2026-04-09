import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import WhyChooseUs from './Components/WhyChooseUs'
import Stats from './Components/Stats'
import CoreComponents from './Components/CoreComponents'
import Courses from './Components/Courses'
import Achievements from './Components/Achievements'
import Testimonials from './Components/Testimonials'
import Faculty from './Components/Faculty'
import Footer from './Components/Footer'
import BookDemoModal from './Components/BookDemoModal'
import ScrollToTopButton from './Components/ScrollToTopButton'
import FloatingContactButtons from './Components/FloatingContactButtons'
import BriefHistory from './Pages/BriefHistory'
import Mission from './Pages/Mission'
import Vision from './Pages/Vision'
import FounderMessage from './Pages/FounderMessage'
import Gallery from './Pages/Gallery'
import VideoGallery from './Pages/VideoGallery'
import OnlineClasses from './Pages/OnlineClasses'
import HowAreDifferent from './Pages/HowAreDifferent'
import TeachingMethodology from './Pages/TeachingMethodology'
import TestimonialsPage from './Pages/Testimonials.jsx'
import Tutors from './Pages/Tutors'
import OurTutors from './Pages/OurTutors'
import TutorsSAT from './Pages/TutorsSAT'
import TutorsIGCSE from './Pages/TutorsIGCSE'
import TutorsASLevel from './Pages/TutorsASLevel'
import TutorsALevel from './Pages/TutorsALevel'
import Physics from './Pages/Physics'
import Chemistry from './Pages/Chemistry'
import Mathematics from './Pages/Mathematics'
import Biology from './Pages/Biology'
import Economics from './Pages/Economics'
import ComputerScience from './Pages/ComputerScience'
import German from './Pages/German'
import French from './Pages/French'
import English from './Pages/English'
import CoreComponentsPage from './Pages/CoreComponents'
import ExtendedEssay from './Pages/ExtendedEssay'
import TheoryOfKnowledge from './Pages/TheoryOfKnowledge'
import InternalAssessment from './Pages/InternalAssessment'
// import CAS from './Pages/CAS'
import ContactUs from './Pages/ContactUs'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import './App.css'
import { Toaster } from 'react-hot-toast'
import LearningFeatures from './Components/LearningFeatures'
import Programs from './Components/Programs'
import SuccessStories from './Components/SuccessStories'
// import Blog from './Pages/Blog'
// import Subscribe from './Pages/Subscribe'
import { SubscribePage } from './Components/blog/SubscribePage'
// import SubmitBlog from './Pages/SubmitBlog'
// import AllBlogs from './Pages/AllBlogs'
import { SubmitBlogPage } from './Components/blog/SubmitBlogPage'
import { HomePage as BlogHomePage } from './Components/blog/HomePage'
import BlogAll from './Pages/BlogAll'
import BlogDetail from './Pages/BlogDetail'
import BlogPost from './Pages/BlogPost'
import Blogs from './Pages/Blogs'
import Blogs1 from './Pages/Blogs1'

// Admin Panel Components
import AdminLayout from './Adminpanal/AdminLayout'
import Dashboard from './Adminpanal/Dashboard'
import MyCourses from './Adminpanal/MyCourses'
import Homework from './Adminpanal/Homework'
import Assignments from './Adminpanal/Assignments'
import PracticeTests from './Adminpanal/PracticeTests'
import AskQuestion from './Adminpanal/AskQuestion'
import TestimonialManagement from './Adminpanal/TestimonialManagement'
import TutorManagement from './Adminpanal/TutorManagement'
import Announcements from './Adminpanal/Announcements'
import Notifications from './Adminpanal/Notifications'
import FeePayment from './Adminpanal/FeePayment'
import FeedbackReviews from './Adminpanal/FeedbackReviews'
import SupportHelp from './Adminpanal/SupportHelp'
import BlogManagement from './Adminpanal/BlogManagement'
import BlogDashboard from './Adminpanal/BlogDashboard'
import AdminProfile from './Adminpanal/AdminProfile'
import { BlogModerationPage } from './Adminpanal/BlogModerationPage'
import BlogCombined from './Adminpanal/BlogCombined'
import { SubscribersPage } from './Adminpanal/SubscribersPage_new'
import { BlogListPage } from './Components/blog/BlogListPage'
import { BlogDetailPage } from './Components/blog/BlogDetailPage'

// ProtectedRoute - redirects to login if no auth token
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('icfy_token');
  if (!token) return <Navigate to="/login" replace />;
  return children;
};

// ScrollToTop Component - Scrolls to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Home Page Component
const HomePage = () => {
  const [showAutoModal, setShowAutoModal] = useState(false);

  useEffect(() => {
    // Show modal automatically after 2 seconds when page loads
    const timer = setTimeout(() => {
      setShowAutoModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero />
      {/* <About /> */}
      <Stats />
    
      <WhyChooseUs />
      <Programs />
      <LearningFeatures />
      <CoreComponents />
      <Courses />
         {/* Founder Message Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=80)',
          }}
        ></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0071BD] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Rohit Sir's Image - Professional Card Style */}
            <div className="lg:col-span-2" data-aos="fade-down-right">
              <div className="sticky top-24">
                <div className="relative group">
                  {/* Decorative background */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#0071BD]/20 via-[#FF6B35]/20 to-[#0071BD]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  
                  {/* Image Container */}
                  <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                    <img 
                      src="/sir1.png" 
                      alt="Rohit Gupta - Founder" 
                      className="w-full object-cover"
                    />
                    
                    {/* Name Badge */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/95 to-transparent p-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          Rohit Gupta
                        </h3>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] mx-auto mb-2"></div>
                        <p className="text-white/90 text-sm font-semibold">Founder & Director</p>
                        <p className="text-white/80 text-xs mt-1">IBClassesOnline</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#0071BD] to-[#FF6B35] rounded-2xl shadow-xl p-4 transform rotate-3 group-hover:rotate-6 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">25+</div>
                      <div className="text-xs text-white/90 font-semibold">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-3 space-y-6" data-aos="fade-down-left">
              {/* Welcome Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0071BD]/10 to-[#FF6B35]/10 text-[#0071BD] rounded-full text-sm font-bold border border-[#0071BD]/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                A Personal Message
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight font-serif" style={{fontFamily: 'Georgia, serif'}}>
                <span className="text-gray-900">Dear Students</span> <br/>
                <span className="text-[#0071BD]">and Parents</span>
              </h2>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#0071BD] to-[#FF6B35] rounded-full"></div>
              
              {/* Message Content */}
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  It gives me <strong className="text-[#0071BD]">immense pride and joy</strong> to welcome you to IBClassesOnline.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  When we founded IBClassesOnline more than <strong className="text-[#FF6B35]">25 years ago</strong>, our vision was simple yet powerful — to create a learning environment where every student receives personal attention, builds strong conceptual clarity, and gains the confidence to excel academically and in life.
                </p>

                <div className="bg-gradient-to-r from-[#0071BD]/5 to-[#FF6B35]/5 p-8 rounded-2xl border-l-4 border-[#0071BD]">
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "Over the years, this vision has grown into a trusted educational platform supported by a team of highly experienced teachers and mentors who are passionate about student success."
                  </p>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  At IBClassesOnline, we believe that <strong className="text-[#0071BD]">education is not just about marks</strong>, but about <strong className="text-[#FF6B35]">shaping thinking, nurturing curiosity, and developing discipline and self-belief</strong>. We have seen students transform from struggling to outstanding performers when they are guided correctly, encouraged consistently, and taught with care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Achievements />
      
      <Testimonials />
      <Faculty />
      <SuccessStories />
      
      {/* Auto-show Book Demo Modal */}
      <BookDemoModal 
        isOpen={showAutoModal}
        onClose={() => setShowAutoModal(false)}
      />
    </>
  )
}

// Layout Component to conditionally render Navbar and Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isDashboardPage = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isAuthPage && !isDashboardPage && <Navbar />}
      {children}
      {!isAuthPage && !isDashboardPage && <Footer />}
      {!isAuthPage && !isDashboardPage && <FloatingContactButtons />}
      {!isAuthPage && !isDashboardPage && <ScrollToTopButton />}
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      <Layout>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us/brief-history" element={<BriefHistory />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/about-us/message-from-rohit-sir" element={<FounderMessage />} />
        <Route path="/about-us/photo-gallery" element={<Gallery />} />
        <Route path="/about-us/video-gallery" element={<VideoGallery />} />
        <Route path="/why-ibclassesonline/online-classes" element={<OnlineClasses />} />
        <Route path="/why-ibclassesonline/how-are-we-different" element={<HowAreDifferent />} />
        <Route path="/why-ibclassesonline/teaching-methodology" element={<TeachingMethodology />} />
        <Route path="/why-ibclassesonline/testimonials" element={<TestimonialsPage />} />
        <Route path="/why-ibclassesonline/our-tutors" element={<Tutors />} />
        
        {/* Tutor Category Routes */}
        <Route path="/tutors" element={<OurTutors />} />
        <Route path="/tutors/sat" element={<TutorsSAT />} />
        <Route path="/tutors/igcse" element={<TutorsIGCSE />} />
        <Route path="/tutors/as-level" element={<TutorsASLevel />} />
        <Route path="/tutors/a-level" element={<TutorsALevel />} />
        
        {/* IB Subject Routes */}
        <Route path="/ib-subjects/physics" element={<Physics />} />
        <Route path="/ib-subjects/chemistry" element={<Chemistry />} />
        <Route path="/ib-subjects/mathematics" element={<Mathematics />} />
        <Route path="/ib-subjects/biology" element={<Biology />} />
        <Route path="/ib-subjects/economics" element={<Economics />} />
        <Route path="/ib-subjects/computer-science" element={<ComputerScience />} />
        <Route path="/ib-subjects/german" element={<German />} />
        <Route path="/ib-subjects/french" element={<French />} />
        <Route path="/ib-subjects/english" element={<English />} />
        
        {/* IB Core Components */}
        <Route path="/ib-core/extended-essay" element={<ExtendedEssay />} />
        <Route path="/ib-core/theory-of-knowledge" element={<TheoryOfKnowledge />} />
        <Route path="/ib-core/internal-assessment" element={<InternalAssessment />} />
        {/* <Route path="/ib-core/cas" element={<CAS />} /> */}
        
        {/* Blog Routes */}
        <Route path="/blog" element={<BlogHomePage />} />
        <Route path="/blog/home" element={<BlogHomePage />} />
        <Route path="/blog/submit" element={<SubmitBlogPage />} />
        <Route path="/blog/subscribe" element={<SubscribePage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/blogs" element={<BlogListPage />} />
        <Route path="/blog-all" element={<BlogAll />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/blog-post/:slug" element={<BlogPost />} />
        <Route path="/blogs-home" element={<Blogs />} />
        <Route path="/blogs-list" element={<Blogs1 />} />
        
        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Student Dashboard / Admin Panel */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="homework" element={<Homework />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="practice-tests" element={<PracticeTests />} />
          <Route path="blog-management" element={<BlogCombined />} />
          <Route path="ask-question" element={<AskQuestion />} />
          <Route path="testimonials" element={<TestimonialManagement />} />
          <Route path="tutors" element={<TutorManagement />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="fee-payment" element={<FeePayment />} />
          <Route path="feedback" element={<FeedbackReviews />} />
          <Route path="support" element={<SupportHelp />} />
          <Route path="blog-dashboard" element={<BlogDashboard />} />
          <Route path="blog-moderation" element={<BlogCombined />} />
          <Route path="subscribers" element={<SubscribersPage />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>

        {/* Admin shortcut redirect */}
        <Route path="/admin" element={<Navigate to="/dashboard" replace />} />
        
        {/* Contact Us */}
        <Route path="/contact" element={<ContactUs />} />
        
        {/* Add more routes as needed */}
      </Routes>
      </Layout>
    </Router>
  )
}

export default App
