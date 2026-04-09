import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 z-[9999] bg-gradient-to-r from-[#FF6B35] to-[#E85A24] hover:from-[#E85A24] hover:to-[#FF6B35] text-white p-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
