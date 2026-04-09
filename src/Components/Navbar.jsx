import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import BookDemoModal from './BookDemoModal';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showBookDemoModal, setShowBookDemoModal] = useState(false);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="w-full sticky top-0 z-50 shadow-md backdrop-blur-md bg-opacity-95">
      {/* Top Bar */}
      <div className="bg-[#0071BD]/95 backdrop-blur-md text-white py-1.5 sm:py-2 md:py-2.5 lg:py-3">
        <div className="max-w-[1400px] mx-auto px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-2 md:gap-3">
            {/* Contact Info */}
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 items-center justify-center sm:justify-start text-center sm:text-left">
              <a href="tel:+917348956284" className="flex items-center gap-1 sm:gap-1.5 hover:opacity-80 transition-opacity">
                <span className="text-xs sm:text-sm">📞</span> 
                <span className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap">+91 7348956284</span>
              </a>
              <a href="https://wa.me/918317407250" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 sm:gap-1.5 hover:opacity-80 transition-opacity">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap">+91 831 740 7250</span>
              </a>
              <a href="mailto:info@ibclassesonline.com" className="flex items-center gap-1 sm:gap-1.5 hover:opacity-80 transition-opacity">
                <span className="text-xs sm:text-sm">✉️</span> 
                <span className="hidden lg:inline text-[10px] sm:text-xs md:text-sm">info@ibclassesonline.com</span>
                <span className="lg:hidden text-[10px] sm:text-xs md:text-sm">Email</span>
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 items-center">
            <a href="https://www.facebook.com/ibclassesonline/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 fill-white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="Instagram">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 fill-white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="Twitter">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 fill-white" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="LinkedIn">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 fill-white" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@IBClassesOnline" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="YouTube">
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 fill-white" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#search" className="hidden sm:flex hover:scale-110 transition-transform" aria-label="Search">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 stroke-white fill-none" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 relative">
            {/* Mobile Menu Toggle (Left on Mobile) */}
            <button 
              className="lg:hidden flex flex-col justify-center items-center p-1.5 sm:p-2 hover:bg-gray-100 rounded transition-colors z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 sm:w-6 h-0.5 bg-gray-800 mb-1 sm:mb-1.5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5 sm:translate-y-2' : ''}`}></span>
              <span className={`block w-5 sm:w-6 h-0.5 bg-gray-800 mb-1 sm:mb-1.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 sm:w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5 sm:-translate-y-2' : ''}`}></span>
            </button>

            {/* Logo (Center on Mobile/Tablet, Left on Desktop) */}
            <div className="flex items-center flex-shrink-0 absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none lg:ml-4 xl:ml-6">
              <Link to="/" className="flex items-center">
                <img src="/image.png" alt="IB Classes Online" className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 xl:h-20 object-contain" />
              </Link>
            </div>

            {/* Mobile/Tablet Login Button (Right) */}
            <Link 
              to="/login"
              className="lg:hidden flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-1.5 md:py-2 bg-white text-[#0071BD] border-2 border-[#0071BD] rounded font-medium text-[10px] sm:text-xs md:text-sm hover:bg-[#0071BD] hover:text-white transition-all duration-200 z-50"
            >
              <span className="text-xs sm:text-sm md:text-base">👤</span>
              <span className="hidden sm:inline">Login</span>
            </Link>

          {/* Desktop Navigation */}
          <div className={`${mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 lg:opacity-100 lg:max-h-none'} overflow-y-auto lg:overflow-visible absolute lg:relative top-12 sm:top-14 md:top-16 lg:top-0 left-0 right-0 bg-white lg:bg-transparent transition-all duration-300 ease-in-out lg:flex flex-1 justify-center shadow-lg lg:shadow-none scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100`}>
            <ul className="flex flex-col lg:flex-row items-stretch lg:items-center gap-0 lg:gap-0.5 xl:gap-1 py-2 lg:py-0">
              {/* Home */}
              <li>
                <Link 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 sm:px-5 lg:px-3 xl:px-4 py-2.5 sm:py-3 lg:py-2 xl:py-2.5 text-gray-700 font-medium text-xs sm:text-sm lg:text-[14px] xl:text-[15px] hover:text-[#0071BD] hover:bg-gray-50 lg:hover:bg-transparent transition-colors border-b lg:border-0 border-gray-100"
                >
                  Home
                </Link>
              </li>

              {/* About Us */}
              <li 
                className="relative group"
                onMouseEnter={() => toggleDropdown('about')}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <a 
                  href="/about-us" 
                  onClick={(e) => {
                    if (window.innerWidth < 1024) {
                      e.preventDefault();
                      toggleDropdown(activeDropdown === 'about' ? null : 'about');
                    }
                  }}
                  className="flex items-center justify-between px-4 sm:px-5 lg:px-3 xl:px-4 py-3 lg:py-2 xl:py-2.5 text-gray-700 font-medium text-xs sm:text-sm lg:text-[14px] xl:text-[15px] hover:text-[#0071BD] hover:bg-gray-50 lg:hover:bg-transparent transition-colors border-b lg:border-0 border-gray-100"
                >
                  About Us
                  <span className="text-[9px] sm:text-[10px] ml-1 sm:ml-1.5 transition-transform duration-300 group-hover:rotate-180">▼</span>
                </a>
                {activeDropdown === 'about' && (
                  <ul className="lg:absolute relative top-full mt-2 left-0 bg-white lg:min-w-[220px] xl:min-w-[250px] lg:shadow-xl lg:border lg:border-gray-100 rounded-md ml-3 sm:ml-4 lg:ml-0 my-1 lg:my-0 animate-in fade-in slide-in-from-top-2 duration-200">
                    <li><Link to="/about-us/brief-history" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#0071BD] hover:text-white transition-colors first:rounded-t-md">Brief History</Link></li>
                    <li><Link to="/mission" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#0071BD] hover:text-white transition-colors">Our Mission</Link></li>
                    <li><Link to="/vision" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#0071BD] hover:text-white transition-colors">Our Vision</Link></li>
                    <li><Link to="/about-us/message-from-rohit-sir" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#0071BD] hover:text-white transition-colors">Message from Rohit Sir</Link></li>
                    <li><Link to="/about-us/photo-gallery" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#0071BD] hover:text-white transition-colors">Photo Gallery</Link></li>
                    <li><Link to="/about-us/video-gallery" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#0071BD] hover:text-white transition-colors last:rounded-b-md">Video Gallery</Link></li>
                  </ul>
                )}
              </li>

              {/* Why IBClassesOnline */}
              <li 
                className="relative group"
                onMouseEnter={() => toggleDropdown('why')}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <a 
                  href="/why-ibclassesonline" 
                  onClick={(e) => {
                    if (window.innerWidth < 1024) {
                      e.preventDefault();
                      toggleDropdown(activeDropdown === 'why' ? null : 'why');
                    }
                  }}
                  className="flex items-center justify-between px-4 sm:px-5 lg:px-3 xl:px-4 py-3 lg:py-2 xl:py-2.5 text-gray-700 font-medium text-xs sm:text-sm lg:text-[14px] xl:text-[15px] hover:text-[#0071BD] hover:bg-gray-50 lg:hover:bg-transparent transition-colors border-b lg:border-0 border-gray-100"
                >
                  Why IBClassesOnline
                  <span className="text-[9px] sm:text-[10px] ml-1 sm:ml-1.5 transition-transform duration-300 group-hover:rotate-180">▼</span>
                </a>
                {activeDropdown === 'why' && (
                  <ul className="lg:absolute relative top-full mt-2 left-0 bg-white lg:min-w-[220px] xl:min-w-[250px] lg:shadow-xl lg:border lg:border-gray-100 rounded-md ml-3 sm:ml-4 lg:ml-0 my-1 lg:my-0 animate-in fade-in slide-in-from-top-2 duration-200">
                    <li><Link to="/why-ibclassesonline/online-classes" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#0071BD] hover:text-white transition-colors first:rounded-t-md">Online Classes</Link></li>
                    <li><Link to="/why-ibclassesonline/how-are-we-different" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#0071BD] hover:text-white transition-colors">How Are We Different</Link></li>
                    <li><Link to="/why-ibclassesonline/teaching-methodology" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#0071BD] hover:text-white transition-colors">Teaching Methodology</Link></li>
                    <li><Link to="/why-ibclassesonline/our-tutors" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#0071BD] hover:text-white transition-colors">Our Tutors</Link></li>
                    <li><Link to="/why-ibclassesonline/testimonials" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#0071BD] hover:text-white transition-colors last:rounded-b-md">Testimonial and Success Stories</Link></li>
                  </ul>
                )}
              </li>

              {/* IB */}
              <li 
                className="relative group"
                onMouseEnter={() => toggleDropdown('ib')}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <a 
                  href="/ib" 
                  onClick={(e) => {
                    if (window.innerWidth < 1024) {
                      e.preventDefault();
                      toggleDropdown(activeDropdown === 'ib' ? null : 'ib');
                    }
                  }}
                  className="flex items-center justify-between px-4 sm:px-5 lg:px-3 xl:px-4 py-3 lg:py-2 xl:py-2.5 text-gray-700 font-medium text-xs sm:text-sm lg:text-[14px] xl:text-[15px] hover:text-[#23B04D] hover:bg-gray-50 lg:hover:bg-transparent transition-colors border-b lg:border-0 border-gray-100"
                >
                  IB
                  <span className="text-[9px] sm:text-[10px] ml-1 sm:ml-1.5 transition-transform duration-300 group-hover:rotate-180">▼</span>
                </a>
                {activeDropdown === 'ib' && (
                  <ul className="lg:absolute relative top-full mt-2 left-0 bg-white lg:min-w-[220px] xl:min-w-[250px] lg:shadow-xl lg:border lg:border-gray-100 rounded-md ml-3 sm:ml-4 lg:ml-0 my-1 lg:my-0 animate-in fade-in slide-in-from-top-2 duration-200">
                    <li><Link to="/ib-subjects/physics" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#23B04D] hover:text-white transition-colors first:rounded-t-md">Physics</Link></li>
                    <li><Link to="/ib-subjects/chemistry" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#23B04D] hover:text-white transition-colors">Chemistry</Link></li>
                    <li><Link to="/ib-subjects/mathematics" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#23B04D] hover:text-white transition-colors">Mathematics</Link></li>
                    <li><Link to="/ib-subjects/biology" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#23B04D] hover:text-white transition-colors">Biology</Link></li>
                    <li><Link to="/ib-subjects/economics" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#23B04D] hover:text-white transition-colors">Economics</Link></li>
                    <li><Link to="/ib-subjects/computer-science" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#23B04D] hover:text-white transition-colors">Computer Science</Link></li>
                    <li><Link to="/ib-subjects/german" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#23B04D] hover:text-white transition-colors">German</Link></li>
                    <li><Link to="/ib-subjects/french" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#23B04D] hover:text-white transition-colors">French</Link></li>
                    <li><Link to="/ib-subjects/english" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#23B04D] hover:text-white transition-colors last:rounded-b-md">English</Link></li>
                  </ul>
                )}
              </li>

              {/* IB Core Components */}
              <li 
                className="relative group"
                onMouseEnter={() => toggleDropdown('core')}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <button 
                  onClick={() => toggleDropdown(activeDropdown === 'core' ? null : 'core')}
                  className="flex items-center justify-between w-full px-4 sm:px-5 lg:px-3 xl:px-4 py-3 lg:py-2 xl:py-2.5 text-gray-700 font-medium text-xs sm:text-sm lg:text-[14px] xl:text-[15px] hover:text-[#23B04D] hover:bg-gray-50 lg:hover:bg-transparent transition-colors border-b lg:border-0 border-gray-100"
                >
                  IB Core Components
                  <span className="text-[9px] sm:text-[10px] ml-1 sm:ml-1.5 transition-transform duration-300 group-hover:rotate-180">▼</span>
                </button>
                {activeDropdown === 'core' && (
                  <ul className="lg:absolute relative top-full mt-2 left-0 bg-white lg:min-w-[220px] xl:min-w-[250px] lg:shadow-xl lg:border lg:border-gray-100 rounded-md ml-3 sm:ml-4 lg:ml-0 my-1 lg:my-0 animate-in fade-in slide-in-from-top-2 duration-200">
                    <li><Link to="/ib-core/extended-essay" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#23B04D] hover:text-white transition-colors first:rounded-t-md">Extended Essay (EE)</Link></li>
                    <li><Link to="/ib-core/theory-of-knowledge" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#23B04D] hover:text-white transition-colors">Theory of Knowledge (TOK)</Link></li>
                    <li><Link to="/ib-core/internal-assessment" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[13px] xl:text-[14px] text-gray-700 hover:bg-[#23B04D] hover:text-white transition-colors">Internal Assessment (IA)</Link></li>
                    {/* <li><Link to="/ib-core/cas" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-[14px] text-gray-700 hover:bg-[#23B04D] hover:text-white transition-colors last:rounded-b-md">CAS (Creativity, Activity, Service)</Link></li> */}
                  </ul>
                )}
              </li>

              {/* Blogs */}
              <li>
                <Link 
                  to="/blog" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 sm:px-5 lg:px-3 xl:px-4 py-2.5 sm:py-3 lg:py-2 xl:py-2.5 text-gray-700 font-medium text-xs sm:text-sm lg:text-[14px] xl:text-[15px] hover:text-[#EB5213] hover:bg-gray-50 lg:hover:bg-transparent transition-colors border-b lg:border-0 border-gray-100"
                >
                  Blog
                </Link>
              </li>

              {/* Contact Us */}
              <li>
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 sm:px-5 lg:px-3 xl:px-4 py-2.5 sm:py-3 lg:py-2 xl:py-2.5 text-gray-700 font-medium text-xs sm:text-sm lg:text-[14px] xl:text-[15px] hover:text-[#0071BD] hover:bg-gray-50 lg:hover:bg-transparent transition-colors border-b lg:border-0 border-gray-100"
                >
                  Contact Us
                </Link>
              </li>

              {/* Mobile Book Demo Button */}
              <li className="lg:hidden px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 pb-3 sm:pb-3.5 md:pb-4">
                <button 
                  onClick={() => {
                    setShowBookDemoModal(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#FF6B35] text-white rounded font-semibold text-xs sm:text-sm md:text-base hover:bg-[#E85A24] transition-colors duration-200 shadow-md"
                >
                  Book Free Demo
                </button>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex gap-2 lg:gap-3 xl:gap-4 items-center flex-shrink-0">
            <Link 
              to="/login"
              className="flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 xl:px-6 py-1.5 lg:py-2 xl:py-2.5 bg-white text-[#0071BD] border-2 border-[#0071BD] rounded font-medium text-xs lg:text-sm xl:text-base hover:bg-[#0071BD] hover:text-white transition-all duration-200"
            >
              <span className="text-sm lg:text-base">👤</span> <span className="hidden lg:inline">Login</span>
            </Link>
            <button 
              onClick={() => setShowBookDemoModal(true)}
              className="px-3 lg:px-5 xl:px-7 py-1.5 lg:py-2 xl:py-2.5 bg-[#FF6B35] text-white rounded font-semibold text-xs lg:text-sm xl:text-base hover:bg-[#E85A24] transition-colors duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Book Free Demo
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onSwitchToSignup={() => {
            setShowLoginModal(false);
            setShowSignupModal(true);
          }}
        />
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <SignupModal 
          onClose={() => setShowSignupModal(false)}
          onSwitchToLogin={() => {
            setShowSignupModal(false);
            setShowLoginModal(true);
          }}
        />
      )}

      {/* Book Demo Modal */}
      {showBookDemoModal && (
        <BookDemoModal 
          isOpen={showBookDemoModal}
          onClose={() => setShowBookDemoModal(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
