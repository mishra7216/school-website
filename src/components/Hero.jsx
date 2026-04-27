import React from 'react';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[85vh] sm:h-screen min-h-[500px] max-h-[900px] w-full overflow-hidden">

      {/* ── Full-Screen Background Photo ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[10s] hover:scale-100"
        style={{ backgroundImage: "url('/school-hero.jpg')" }}
      ></div>

      {/* ── Multi-layer Gradient Overlay ── */}
      {/* Dark at bottom for text legibility, subtle at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-deepblue/60 via-deepblue/40 to-deepblue/85"></div>
      {/* Extra left-to-right fade for richness */}
      <div className="absolute inset-0 bg-gradient-to-r from-deepblue/50 via-transparent to-transparent"></div>

      {/* ── Decorative Light Orbs ── */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/40 rounded-full blur-[80px] pointer-events-none"></div>

      {/* ── Hero Content ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">

        {/* Welcome label */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 text-white/90 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-6 shadow-lg">
          <GraduationCap size={15} className="text-yellow-300" />
          <span>Little Kingdom Senior Secondary School, Baihar</span>
        </div>

        {/* Main Title — Cin zel like Annual Function */}
        <h1 className="font-extrabold tracking-tight leading-tight mb-5">
          <span className="block text-3xl sm:text-5xl lg:text-7xl xl:text-[88px] text-white drop-shadow-2xl">
            Empowering
          </span>
          <span className="block text-3xl sm:text-5xl lg:text-7xl xl:text-[88px] text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-200 drop-shadow-[0_0_40px_rgba(253,224,71,0.4)]">
            Tomorrow's Leaders
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/75 text-sm sm:text-xl max-w-2xl font-medium leading-relaxed mb-8 sm:mb-10 drop-shadow-md px-2">
          Discover a world of excellence, innovation, and strong values at Baihar's most trusted school since 2009.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            to="/admissions"
            className="flex items-center gap-2 bg-white text-deepblue hover:bg-yellow-300 hover:text-deepblue px-8 py-4 rounded-full font-extrabold text-sm sm:text-base shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_30px_rgba(253,224,71,0.4)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300"
          >
            Discover More
          </Link>
        </div>

      </div>

      {/* ── Bottom curved divider ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
          <path d="M0 70 L0 40 Q360 0 720 30 Q1080 60 1440 20 L1440 70 Z" fill="#F9FAFB"/>
        </svg>
      </div>

    </div>
  );
};

export default Hero;
