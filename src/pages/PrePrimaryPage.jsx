import React, { useEffect, useState } from 'react';
import { ArrowLeft, Star, Heart, Sun, Smile, Palette, Music, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrePrimaryPage = () => {
  // Ensure the page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Carousel State and Logic
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { url: "/kindergarten-banner-1.jpg", caption: "Joyful Playtime" },
    { url: "/kindergarten-banner-2.jpg", caption: "Creative Arts" },
    { url: "/kindergarten-banner-3.jpg", caption: "Learning Together" },
    { url: "/kindergarten-banner-4.jpg", caption: "Outdoor Activities" }
  ];

  // Auto-play the carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-[#FFFBF0] pb-24 overflow-hidden font-sans">
      
      {/* Playful Header Section */}
      <div className="relative pt-20 pb-32 text-center px-6 overflow-hidden">
        {/* Floating Background Icons */}
        <div className="absolute top-10 left-10 sm:left-20 text-yellow-400 rotate-12 animate-bounce"><Sun size={72} fill="currentColor" /></div>
        <div className="absolute top-32 right-10 sm:right-24 text-pink-400 -rotate-12 animate-pulse"><Heart size={56} fill="currentColor" /></div>
        <div className="absolute bottom-10 left-1/4 text-purple-400 rotate-45"><Star size={48} fill="currentColor" /></div>
        <div className="absolute top-20 right-1/4 text-sky-400"><Palette size={60} /></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-rose-500 font-bold hover:text-rose-600 transition-colors mb-10 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm hover:shadow-md border border-rose-100">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
          </Link>
          
          {/* Using elegant Cinzel specifically for this heading */}
          <h1 className="font-['Cinzel'] font-extrabold text-5xl sm:text-6xl lg:text-7xl text-[#FF6B6B] drop-shadow-sm mb-6 tracking-wide uppercase">
            KINDERGARTEN WING
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-2xl mx-auto font-medium leading-relaxed">
            Where little minds blossom through play, creativity, and unconditional love.
          </p>
        </div>
      </div>

      {/* Main Playful Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 -mt-12">
        
        {/* Cute Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[3rem] p-8 shadow-xl border-[6px] border-[#FFE66D] transform hover:-translate-y-4 hover:rotate-3 transition-all duration-300 text-center relative group">
            <div className="bg-[#FFE66D] w-24 h-24 rounded-full flex items-center justify-center mx-auto -mt-20 mb-6 shadow-lg border-[6px] border-white group-hover:scale-110 transition-transform">
              <Smile size={48} className="text-[#FF6B6B]" strokeWidth={2.5} />
            </div>
            <h3 className="font-['Schoolbell'] text-4xl text-[#4ECDC4] mb-4">Joyful Learning</h3>
            <p className="text-gray-600 font-medium text-lg leading-relaxed">
              We focus on activity-based learning that makes every day an absolute joy for our little stars.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[3rem] p-8 shadow-xl border-[6px] border-[#FF6B6B] transform hover:-translate-y-4 hover:-rotate-2 transition-all duration-300 text-center relative mt-16 md:mt-0 group">
            <div className="bg-[#FF6B6B] w-24 h-24 rounded-full flex items-center justify-center mx-auto -mt-20 mb-6 shadow-lg border-[6px] border-white group-hover:scale-110 transition-transform">
              <Palette size={48} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="font-['Schoolbell'] text-4xl text-[#FF6B6B] mb-4">Art & Color</h3>
            <p className="text-gray-600 font-medium text-lg leading-relaxed">
              Finger painting, crafting, and messy-play are secretly developing their fine motor skills!
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[3rem] p-8 shadow-xl border-[6px] border-[#4ECDC4] transform hover:-translate-y-4 hover:rotate-2 transition-all duration-300 text-center relative mt-16 md:mt-0 group">
            <div className="bg-[#4ECDC4] w-24 h-24 rounded-full flex items-center justify-center mx-auto -mt-20 mb-6 shadow-lg border-[6px] border-white group-hover:scale-110 transition-transform">
              <Music size={48} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="font-['Schoolbell'] text-4xl text-[#FFE66D] mb-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Music & Rhymes</h3>
            <p className="text-gray-600 font-medium text-lg leading-relaxed">
              Singing and dancing out their daily energy while unconsciously absorbing language and rhythm!
            </p>
          </div>
          
        </div>

        {/* Kindergarten Incharge Message Section */}
        <div className="mt-24 mb-12 relative bg-white rounded-[3rem] p-8 sm:p-12 shadow-xl border-[6px] border-[#4ECDC4] max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          
          {/* Incharge Photo */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex-shrink-0 group">
             <div className="absolute inset-0 bg-[#FF6B6B]/20 rounded-full blur-xl transform translate-x-3 translate-y-3"></div>
             <img 
               src="/Kindergarten%20Head.jpeg" 
               alt="Kindergarten Incharge" 
               className="relative w-full h-full object-cover rounded-full border-[8px] border-white shadow-lg bg-gray-100 transform group-hover:-rotate-3 group-hover:scale-105 transition-all duration-300"
             />
             {/* Cute decorative icon */}
             <div className="absolute -bottom-2 -right-2 bg-[#FFE66D] p-3 rounded-full shadow-md border-4 border-white rotate-12">
                <Star size={28} className="text-[#FF6B6B] fill-current" />
             </div>
          </div>

          {/* Interactive Speech Bubble Message */}
          <div className="flex-1 text-center md:text-left relative z-10">
            <h2 className="font-['Schoolbell'] text-4xl sm:text-5xl text-[#FF6B6B] mb-6">A Note from our Incharge</h2>
            <div className="relative bg-[#FFFBF0] p-8 rounded-[2rem] border-4 border-[#FFE66D] shadow-sm">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium italic space-y-3">
                <span className="block">Dear Parents, Namaste 🙏🏻</span>
                <span className="block">Nursery is the first step of your child's school journey, and we are so happy to take this step with you. To help your child learn happily and grow confidently, we need your support in this small but precious journey.</span>
                <span className="block">We are a team — you at home, us at school. Together, we can make nursery a joyful experience for your little one.</span>
                <span className="block">In nursery, we focus more on values and norms, sharing, and smiles than on marks. With your love at home and our care at school, your child will blossom beautifully. When you trust us, your child feels safe and excited to come.</span>
                <span className="block">Thank you for being our partners in this journey. 😊</span>
              </p>
              {/* Cute speech bubble arrow pointing left (on desktop) or up (on mobile) */}
              <div className="hidden md:block absolute w-6 h-6 bg-[#FFFBF0] border-l-4 border-b-4 border-[#FFE66D] transform rotate-45 -left-[14px] top-12"></div>
              <div className="md:hidden absolute w-6 h-6 bg-[#FFFBF0] border-t-4 border-l-4 border-[#FFE66D] transform rotate-45 left-1/2 -top-[14px] -translate-x-1/2"></div>
            </div>
            
            <div className="mt-6 ml-4">
              <h3 className="font-bold text-gray-800 text-xl tracking-wide">Mrs. Asna Qureshi</h3>
              <p className="text-[#4ECDC4] font-bold text-sm uppercase tracking-wider mt-1">Kindergarten Head</p>
            </div>
          </div>

        </div>

        {/* Dynamic Image Carousel Section */}
        <div className="mt-32 pb-12 max-w-5xl mx-auto">
          <h2 className="font-['Schoolbell'] text-5xl sm:text-6xl text-center text-[#4ECDC4] mb-12 drop-shadow-sm rotate-1">
            Glimpses of our Fun!
          </h2>
          
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[10px] sm:border-[16px] border-white bg-gray-100 h-[300px] sm:h-[450px] lg:h-[550px] group">
            
            {/* The Image Slides */}
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img 
                  src={slide.url} 
                  alt={slide.caption} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 text-center">
                  <span className="font-['Schoolbell'] text-3xl sm:text-4xl text-white drop-shadow-lg tracking-wide">
                    {slide.caption}
                  </span>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-rose-500 p-3 sm:p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all transform hover:-translate-x-1"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-rose-500 p-3 sm:p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all transform hover:translate-x-1"
            >
              <ChevronRight size={32} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-24 sm:bottom-28 left-0 right-0 z-20 flex justify-center gap-3">
              {slides.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-10 bg-[#FF6B6B]' : 'w-3 bg-white/60 hover:bg-white'}`}
                />
              ))}
            </div>

          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/admissions" className="inline-block font-['Schoolbell'] text-3xl sm:text-4xl tracking-wide text-white bg-[#FF6B6B] hover:bg-[#ff5252] px-12 py-5 rounded-full shadow-[0_10px_0_#d35400] hover:shadow-[0_5px_0_#d35400] hover:translate-y-[5px] transition-all">
            Join the Fun!
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PrePrimaryPage;
