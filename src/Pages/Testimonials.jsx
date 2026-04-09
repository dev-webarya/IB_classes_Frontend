import React, { useEffect, useMemo, useState } from 'react';
import { Star, Filter, X, Play, Video, Headphones, MessageCircle, ArrowRight, Image as ImageIcon, FileText, Plus, TrendingUp, Users } from 'lucide-react';
import { getApprovedTestimonials } from '../api/api/testimonialApi';
import TestimonialFormModal from '../Components/TestimonialFormModal';

const whatsappImageUrls = {
  sanjana: new URL('../assets/A level Math and Statistics guidance to Sanjana.png', import.meta.url).href,
  amrit: new URL('../assets/Amrit scored A grade for Math classes IGCSE.png', import.meta.url).href,
  rithika: new URL('../assets/AS Level guidance and support for Math and Statistics to Rithika.jpeg', import.meta.url).href,
  mahiRia: new URL('../assets/Mahi and Ria scored A (star) and A grades in IGCSE Math.PNG', import.meta.url).href,
  pradyumna: new URL("../assets/Pradyumna's bridge course for a smooth transition from CBSE to IGCSE.png", import.meta.url).href,
  rheaTheaOjal: new URL('../assets/Rhea, Thea and Ojal Math group classes for IGCSE.png', import.meta.url).href,
  siddhantPC: new URL('../assets/Siddhant scored A (star) grades in Physics and Chemistry subjects.png', import.meta.url).href,
  siddhantML: new URL("../assets/Siddhant's IA-ML computer science project feedback for IGCSE.png", import.meta.url).href,
  thanya: new URL('../assets/Thanya scored an A grade for 8th grade Math IGCSE.png', import.meta.url).href,
};

const cardBackgrounds = [
  '/card/card1.jpeg',
  // '/card/card2.jpeg',
  '/card/card3PM.jpeg',
  '/card/card4.jpeg',
  // '/card/card5.jpeg',
  // '/card/card6.jpeg',
  '/card/card7.jpeg',
  // '/card/card8.jpeg',
  // '/card/card9jpeg.jpeg',
  // '/card/card10PM.jpeg'
];

const maskPhone = (phone) => {
  if (!phone) return '';
  return phone.replace(/(\d{2})(\d{6})(\d{2})/, '$1XXXXXX$3');
};

const isMediaUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  return url.startsWith('http') && (
    url.match(/\.(mp4|webm|ogg|mp3|wav|jpg|jpeg|png|gif|webp)/i) ||
    url.includes('cloudinary.com') ||
    url.includes('youtube.com') ||
    url.includes('youtu.be')
  );
};

const Testimonials = () => {
  const categories = ['All', 'IGCSE', 'AS/A Level'];
  const types = ['All', 'audio', 'video', 'whatsapp', 'text', 'image'];

  const [selectedCategory] = useState('All');
  const [selectedType] = useState('All');
  const [visibleCount, setVisibleCount] = useState(9);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getApprovedTestimonials();
        console.log('Testimonials API Response:', data); // Debug log
        const testimonialList = data?.content || (Array.isArray(data) ? data : []);
        console.log('Testimonials List:', testimonialList); // Debug log
        setTestimonials(testimonialList);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setTestimonials([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const [active, setActive] = useState(null);

  useEffect(() => {
    setVisibleCount(9);
  }, [selectedCategory, selectedType]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 18);
  };

  const primaryTestimonial = useMemo(() =>
    testimonials.find(t => t.primary),
    [testimonials]
  );

  const filteredTestimonials = useMemo(() => {
    return testimonials.filter((t) => {
      const categoryMatch = selectedCategory === 'All' || t.category === selectedCategory;
      const typeMatch = selectedType === 'All' || t.type === selectedType;
      const isNotPrimary = !t.primary;
      return categoryMatch && typeMatch && isNotPrimary;
    });
  }, [testimonials, selectedCategory, selectedType]);

  const paginatedTestimonials = filteredTestimonials.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-fuchsia-50">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 107, 107, 0.6);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 107, 107, 0.9);
        }
      `}</style>

      {/* Primary Testimonial Banner Removed */}

      {/* Main Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-900 mb-4"></div>
              <p className="text-blue-900 font-bold">Loading Testimonials...</p>
            </div>
          ) : filteredTestimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No testimonials found for the selected filters.</p>
            </div>
          ) : (
            <>
              <div className="text-center max-w-3xl mx-auto mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Student Testimonials
                </h1>
                <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full"></div>
                <p className="mt-6 text-lg text-gray-600">
                  Explore real stories from IGCSE and AS/A Level students and parents.
                </p>
              </div>

              {/* Authenticity Statement */}
              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-sm text-gray-800 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="font-semibold">Dear Parents and Students,</span> Trust and authenticity are at the heart of everything we do. All testimonials displayed here are 100% genuine and have been provided by real students and parents. None of them is AI-generated, fake, edited, or modified in any manner.
                </p>
                <p className="text-sm text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We invite you to click on each testimonial to view the original feedback. We also welcome any further verification to reassure you of the authenticity of every testimonial shared here.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {paginatedTestimonials.map((testimonial, index) => {
                  const id = testimonial.id || testimonial._id;
                  const studentName = testimonial.name || testimonial.reviewerName || 'Student';

                  // FIX: Use `testimonial.text` from the new API as the primary source of truth.
                  let testimonialText = testimonial.text || testimonial.quote || testimonial.message || "Experience excellence with A Star Classes.";

                  // Special handling for specific students
                  if (studentName.toLowerCase().includes('sanjana')) {
                    testimonialText = "Thank you so much Sir! You have really had a huge impact on her life - especially her interest in Math and especially Stats! She hopes to pursue these in college.";
                  } else if (studentName.toLowerCase().includes('amrit')) {
                    testimonialText = "Poonam Kumar: Thanks Rohit. You'll be happy to know that Amrit got an A on his most recent midterm. Thanks much for your hard work with him. Any hw for this week? Sanjeev Kumar: Yes. Amrit scored well above the average. Let's keep with the drill...";
                  } else if (testimonial.content && testimonial.content.startsWith('http')) {
                    // Fallback for old data that might still use `content` for a URL
                    testimonialText = `Outstanding success in ${testimonial.subject || 'studies'}! Click to see the full ${testimonial.type} testimonial and detailed feedback.`;
                  }

                  // Determine media type for the icon
                  const mediaUrl = testimonial.mediaUrl || testimonial.content;
                  let mediaType = testimonial.type || 'text';
                  
                  // Auto-detect media type if not set
                  if (mediaUrl && mediaType === 'text') {
                    if (mediaUrl.match(/\.(mp4|webm|mov)$/i)) mediaType = 'video';
                    else if (mediaUrl.match(/\.(mp3|wav|ogg)$/i)) mediaType = 'audio';
                    else if (mediaUrl.match(/\.(jpg|jpeg|png|gif|webp)$/i)) mediaType = 'image';
                    else if (mediaUrl.match(/\.pdf$/i)) mediaType = 'pdf';
                    else if (mediaUrl.includes('/video/')) mediaType = 'video';
                    else if (mediaUrl.includes('/image/')) mediaType = 'image';
                    else if (mediaUrl.includes('/audio/')) mediaType = 'audio';
                  }
                  
                  // Always use card backgrounds from public/card folder
                  // Admin-uploaded media will show in the modal when clicked
                  const backgroundImage = cardBackgrounds[index % cardBackgrounds.length];

                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setActive(testimonial)}
                      className="group relative flex flex-col w-full max-w-[520px] mx-auto rounded-2xl overflow-hidden transition-all duration-500 text-left shadow-2xl aspect-[4/3]"
                    >
                      {/* Background Image with Overlay */}
                      <div className="absolute inset-0">
                        <img
                          src={backgroundImage}
                          alt="Card background"
                          className="w-full h-full object-cover transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                        <div className="absolute inset-0 border-[8px] border-[#FF6B6B]/20 transition-colors duration-300"></div>
                      </div>

                      {/* Content Overlay */}
                      <div className="relative h-full flex items-center justify-center z-10">
                        {/* Media Icon Indicator */}
                        {mediaUrl && (
                          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300">
                            {mediaType === 'video' && <Video size={18} className="text-white" />}
                            {mediaType === 'audio' && <Headphones size={18} className="text-white" />}
                            {mediaType === 'whatsapp' && <MessageCircle size={18} className="text-white" />}
                            {mediaType === 'image' && <ImageIcon size={18} className="text-white" />}
                            {mediaType === 'pdf' && <FileText size={18} className="text-white" />}
                            {mediaType === 'text' && <MessageCircle size={18} className="text-white" />}
                          </div>
                        )}

                        {/* Testimonial Text - Positioned inside quote box */}
                        <div className="w-[75%] max-w-[400px] h-[65%] flex items-center justify-center overflow-y-auto pr-2 custom-scrollbar scroll-smooth">
                          <p className="text-white text-xs md:text-sm lg:text-base font-bold leading-relaxed text-center drop-shadow-2xl px-3">
                            {testimonialText}
                          </p>
                        </div>
                      </div>


                    </button>
                  );
                })}
              </div>

              {filteredTestimonials.length > paginatedTestimonials.length && (
                <div className="mt-16 flex flex-col items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleLoadMore}
                    className="group flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95"
                  >
                    Load More Success Stories
                    <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                    Showing {paginatedTestimonials.length} of {filteredTestimonials.length} Stories
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Testimonial Modal */}
      {
        active && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-[#002B5B]/90 backdrop-blur-md"
              onClick={() => setActive(null)}
            />

            <div className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col items-center justify-center">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute -top-12 right-0 md:-right-12 rounded-full p-2 text-white hover:bg-white/20 transition-all z-30"
              >
                <X size={32} />
              </button>

              {/* Evidence Content Only */}
              <div className="w-full h-full overflow-hidden rounded-3xl shadow-2xl bg-white border-4 border-[#FF6B6B]">
                {active.mediaUrl || active.image || (active.content && active.content.startsWith('http')) ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900 min-h-[400px]">
                    {(() => {
                      const url = active.mediaUrl || active.image || active.content;
                      const mediaType = active.type || 'text';
                      
                      // Use type field first, then fallback to URL detection
                      if (mediaType === 'video' || url.match(/\.(mp4|webm|mov|avi)$/i) || url.includes('/video/')) {
                        return (
                          <div className="relative w-full h-full flex items-center justify-center p-8">
                            <video 
                              src={url}
                              controls
                              className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
                              autoPlay={false}
                            >
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        );
                      } else if (mediaType === 'image' || url.match(/\.(jpg|jpeg|png|gif|webp)$/i) || url.includes('/image/')) {
                        return (
                          <img
                            src={url}
                            alt="Evidence"
                            className="max-w-full max-h-[80vh] object-contain"
                          />
                        );
                      } else if (mediaType === 'audio' || url.match(/\.(mp3|wav|ogg|m4a)$/i) || url.includes('/audio/')) {
                        return (
                          <div className="p-12 w-full max-w-lg bg-white rounded-2xl">
                            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                              <Headphones size={40} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-black text-[#002B5B] mb-6 text-center uppercase tracking-widest">Audio Evidence</h3>
                            <audio controls src={url} className="w-full" />
                          </div>
                        );
                      } else if (url.match(/\.pdf$/i)) {
                        return (
                          <iframe
                            src={url}
                            title="PDF evidence"
                            className="w-full h-[80vh]"
                          />
                        );
                      } else {
                        // If no type matches but URL exists, try to display as image
                        return (
                          <img
                            src={url}
                            alt="Evidence"
                            className="max-w-full max-h-[80vh] object-contain"
                            onError={(e) => {
                              // If image fails to load, show error message
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = '<div class="p-12 text-white text-center"><p class="text-xl font-bold">Unable to load media</p><p class="text-sm mt-2 text-white/70">Media URL: ' + url + '</p></div>';
                            }}
                          />
                        );
                      }
                    })()}
                  </div>
                ) : (
                  <div className="p-20 text-center bg-white">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FileText size={40} className="text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">Evidence for {active.name || active.reviewerName}</h3>
                    <p className="text-gray-500">This testimonial consists of the verified text shown on the card.</p>
                  </div>
                )}
              </div>

              <p className="mt-6 text-white/60 text-sm font-bold uppercase tracking-[0.4em]">
                Actual Testimonial
              </p>
            </div>
          </div>
        )
      }

      {/* Submit Testimonial CTA */}
      {/**
      <section className="py-16 bg-linear-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Share Your Success Story
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Are you an A Star Classes alumnus? We'd love to hear about your journey and achievements!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Submit Your Story
            </button>
            <button
              onClick={() => window.open('https://wa.me/918861919000', '_blank')}
              className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
      */}

      {/* Submission Modal */}
      <TestimonialFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Testimonials;
