import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Sparkles, Star, Award, Music, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnnualFunctionPage = () => {
  // Ensure the page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lightboxImage, setLightboxImage] = useState(null);

  // 9 High-Quality Event Placeholders designed for an interlocking Grid
  const images = [
    { id: 1, url: "/annual-function-1.JPG", span: "col-span-2 row-span-2" },
    { id: 2, url: "/annual-function-2.JPG", span: "col-span-1 row-span-1" },
    { id: 3, url: "/annual-function-3.JPG", span: "col-span-1 row-span-1" },
    { id: 4, url: "/annual-function-4.JPG", span: "col-span-1 row-span-2" },
    { id: 5, url: "/annual-function-5.JPG", span: "col-span-1 row-span-1" },
    { id: 6, url: "/annual-function-6.JPG", span: "col-span-1 row-span-1" },
    { id: 7, url: "/annual-function-7.JPG", span: "col-span-2 row-span-1" },
    { id: 8, url: "/annual-function-8.JPG", span: "col-span-1 row-span-1" },
    { id: 9, url: "/annual-function-9.JPG", span: "col-span-1 row-span-1" },
    { id: 10, url: "/annual-function-10.JPG", span: "col-span-2 row-span-2" },
    { id: 11, url: "/annual-function-11.JPG", span: "col-span-1 row-span-1" },
    { id: 12, url: "/annual-function-12.JPG", span: "col-span-1 row-span-2" },
    { id: 13, url: "/annual-function-13.jpg", span: "col-span-1 row-span-1" },
    { id: 14, url: "/annual-function-14.JPG", span: "col-span-1 row-span-1" },
    { id: 15, url: "/annual-function-15.JPG", span: "col-span-2 row-span-1" },
    { id: 16, url: "/annual-function-16.JPG", span: "col-span-1 row-span-1" },
    { id: 17, url: "/annual-function-17.JPG", span: "col-span-1 row-span-1" },
    { id: 18, url: "/annual-function-18.JPG", span: "col-span-1 row-span-2" },
    { id: 19, url: "/annual-function-19.JPG", span: "col-span-2 row-span-1" },
    { id: 20, url: "/annual-function-20.JPG", span: "col-span-1 row-span-1" }
  ];

  return (
    <div className="bg-[#050B14] min-h-screen text-gray-200 font-sans selection:bg-[#D4AF37]/30 selection:text-[#FFF]">
      
      {/* Lightbox Modal (Conditional Rendering) */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300">
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
          >
            <X size={28} />
          </button>
          <img 
            src={lightboxImage} 
            alt="Enlarged stage moment" 
            className="max-w-[95%] max-h-[90vh] object-contain rounded-xl shadow-[0_0_50px_rgba(212,175,55,0.15)] animate-in zoom-in-95 duration-300"
          />
        </div>
      )}

      {/* Cinematic Full-Screen Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: "url('/annual-function-hero.jpg')" }}
        ></div>
        
        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/80 via-[#050B14]/60 to-[#050B14]"></div>
        
        {/* Particles / Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="inline-block py-1 px-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[#D4AF37] font-bold tracking-[0.2em] text-xs sm:text-sm mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            CELEBRATING EXCELLENCE
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-[7rem] font-extrabold tracking-tight mb-6 leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF1CC] to-[#D4AF37] drop-shadow-[0_0_30px_rgba(212,175,55,0.6)]">
              ANNUAL FUNCTION
            </span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-10 drop-shadow-md">
            A magnificent evening of cultural brilliance, showcasing the phenomenal talent and spirit of Little Kingdom Public School.
          </p>
        </div>

        {/* Back navigation fixed to top left */}
        <Link to="/" className="absolute top-8 left-8 z-20 flex items-center space-x-2 text-white/70 hover:text-white transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <ArrowLeft size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">Back to Home</span>
        </Link>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Full-width Masonry Gallery Grid */}
        <div className="w-full">
          <div className="flex items-center space-x-3 mb-10 border-b border-white/10 pb-6 text-center justify-center">
            <Sparkles className="text-[#D4AF37] w-6 h-6" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">Event Highlights</h2>
          </div>
          
          {/* Custom responsive CSS Grid mapping masonry styles */}
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[250px] gap-4 sm:gap-6">
            {images.map((img) => (
              <div 
                key={img.id} 
                className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 bg-white/5 ${img.span.replace('col-span-2', 'md:col-span-2 col-span-2').replace('col-span-1', 'md:col-span-1 col-span-1')}`}
                onClick={() => setLightboxImage(img.url)}
              >
                <img 
                  src={img.url} 
                  alt="Annual Function Moment" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
                />
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                   <div className="bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     View Full Photo
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AnnualFunctionPage;
