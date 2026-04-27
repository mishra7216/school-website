import React from 'react';
import { Target } from 'lucide-react';

const About = () => {
  return (
    <section className="bg-[#FAFAFC] py-16 sm:py-24 lg:py-36 relative overflow-hidden">
      
      {/* Decorative Background Elements reduced for subtlety */}
      <div className="absolute top-0 right-0 w-1/4 lg:w-1/3 h-full bg-primary/5 rounded-l-[100px] transform translate-x-12"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-lightblue/30 rounded-full blur-3xl opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-10 sm:gap-16 lg:gap-24">
        
        {/* Text Content (Left Side) */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-gray-100">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-deepblue font-extrabold tracking-widest uppercase text-xs">Our Foundation</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-extrabold text-deepblue mb-6 sm:mb-8 leading-tight sm:leading-tight drop-shadow-sm">
            Nurturing Tomorrow's Leaders Since <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">2009</span>
          </h2>
          
          <div className="prose prose-lg sm:prose-xl text-gray-700 leading-relaxed max-w-none text-justify lg:text-left">
            <p className="mb-6 font-medium">
              Established in 2009 under the visionary leadership of Pravin Kumar Mishra, Little Kingdom Public School began as a modest initiative with just a few classrooms and a handful of students. Today, it stands as the <strong className="text-deepblue font-bold">largest institution in Baihar</strong> and one of the leading schools in the district, built on trust, dedication, and uncompromising educational standards.
            </p>
            
            <p className="mb-6 sm:mb-10 text-gray-600 text-base sm:text-lg">
              Renowned for consistent academic excellence—including producing Class 10th District Toppers in 2023–24 and 2025–26—LKPS blends experienced faculty, modern facilities, and a vibrant learning environment. From advanced labs and a well-stocked library to premier sports infrastructure and the district's biggest annual fest, we create opportunities where students grow with confidence and purpose.
            </p>
            
            <div className="bg-white border-l-8 border-primary p-6 sm:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] transform hover:-translate-y-1 hover:shadow-[0_15px_40px_rgb(0,0,0,0.12)] transition-all duration-500 relative">
              <p className="text-2xl sm:text-3xl font-serif italic text-deepblue leading-snug drop-shadow-sm">
                "Guided by vision, driven by excellence, and committed to shaping the future."
              </p>
            </div>

          </div>
        </div>

        {/* Elegant Image Composition (Right Side) */}
        <div className="flex-1 w-full max-w-md mx-auto lg:ml-auto mt-12 lg:mt-0 relative">
          
          {/* Main big image */}
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20 border-8 border-white transform hover:-rotate-1 transition-transform duration-700">
             <img 
               src="/about-main.jpg" 
               alt="School Campus Excellence" 
               className="w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
               onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop' }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-deepblue/40 via-transparent to-transparent"></div>
          </div>

          {/* Overlapping smaller image */}
          <div className="absolute -bottom-10 -left-8 sm:-bottom-12 sm:-left-12 z-20 rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white w-40 h-40 sm:w-48 sm:h-48 hidden sm:block transform hover:scale-105 transition-transform duration-500">
            <img 
               src="/about-secondary.jpg" 
               alt="Students studying and learning" 
               className="w-full h-full object-cover"
               onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1427504494785-3a9a27b43c62?q=80&w=800&auto=format&fit=crop' }}
            />
          </div>
          
          {/* Floating Decorative Years Badge */}
          <div className="absolute -top-8 -right-6 sm:-top-8 sm:-right-10 z-30 bg-white rounded-full p-4 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)] border-4 border-[#FAFAFC] flex flex-col items-center justify-center w-28 h-28 sm:w-36 sm:h-36 lg:animate-bounce-slow">
             <span className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-600 mb-1 leading-none">15</span>
             <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest text-center mt-0.5">Years of<br/>Trust</span>
          </div>

        </div>

      </div>
      
    </section>
  );
};

export default About;
