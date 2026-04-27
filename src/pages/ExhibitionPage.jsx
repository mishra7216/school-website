import React, { useEffect, useState } from 'react';
import { ArrowLeft, X, Lightbulb, Microscope, Cpu, Palette, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const totalPhotos = 14;
const images = Array.from({ length: totalPhotos }, (_, i) => ({
  id: i + 1,
  url: `/exhibition-${i + 1}.jpg`,
}));

// Give first and fifth photos a wider span for visual variety
const spanMap = {
  1: 'md:col-span-2 col-span-2 row-span-2',
  5: 'md:col-span-2 col-span-2',
};

const highlights = [
  { icon: <Microscope className="w-6 h-6" />, title: 'Science Projects', desc: 'Students showcase live working models, experiments, and research on real-world scientific problems.' },
  { icon: <Cpu className="w-6 h-6" />, title: 'Technology & Innovation', desc: 'From robotics to software demos — young innovators present cutting-edge digital solutions.' },
  { icon: <Palette className="w-6 h-6" />, title: 'Arts & Craft', desc: 'A vibrant display of paintings, sculptures, and handcraft celebrating creativity.' },
  { icon: <Lightbulb className="w-6 h-6" />, title: 'Student Inventions', desc: 'Original ideas turned into working prototypes, judged by expert panels.' },
  { icon: <Users className="w-6 h-6" />, title: 'Parent Participation', desc: 'Families join in to see, appreciate, and be inspired by their children\'s achievements.' },
  { icon: <Award className="w-6 h-6" />, title: 'Awards & Recognition', desc: 'Top projects are awarded certificates and trophies at the Annual Prize Distribution.' },
];

const ExhibitionPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightbox(images[idx].url);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    const newIdx = (lightboxIndex - 1 + images.length) % images.length;
    setLightboxIndex(newIdx);
    setLightbox(images[newIdx].url);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    const newIdx = (lightboxIndex + 1) % images.length;
    setLightboxIndex(newIdx);
    setLightbox(images[newIdx].url);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] font-sans">

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center backdrop-blur-sm" onClick={() => setLightbox(null)}>
          {/* Close */}
          <button className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-10 transition-colors" onClick={() => setLightbox(null)}>
            <X size={24} />
          </button>
          {/* Prev */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white p-4 rounded-full z-10 transition-all" onClick={prevPhoto}>
            ‹
          </button>
          {/* Image */}
          <img
            src={lightbox}
            alt="Exhibition"
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          {/* Next */}
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white p-4 rounded-full z-10 transition-all text-2xl" onClick={nextPhoto}>
            ›
          </button>
          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-semibold tracking-widest">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}

      {/* ── CINEMATIC HERO ── */}
      <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[8s]"
          style={{ backgroundImage: "url('/exhibition-hero.jpg'), url('/exhibition-1.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-deepblue/70 via-deepblue/50 to-deepblue/92"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-deepblue/55 via-transparent to-transparent"></div>

        {/* Glow orbs */}
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-primary/20 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[70px] pointer-events-none"></div>

        {/* Back button */}
        <Link to="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/80 hover:text-white bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider transition-colors">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 text-lightblue text-xs font-bold tracking-[0.2em] uppercase mb-5 shadow-lg">
            <Lightbulb size={14} /> Academics & Innovation
          </div>
          <h1 className="font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl mb-4">
            <span className="block text-5xl sm:text-7xl lg:text-8xl">Annual</span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37] drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]">
              Exhibition
            </span>
          </h1>
          <p className="text-white/75 text-base sm:text-xl max-w-2xl font-medium leading-relaxed drop-shadow-md">
            A celebration of curiosity, creativity, and brilliance — where every student gets to shine.
          </p>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
            <path d="M0 70 L0 40 Q360 5 720 35 Q1080 65 1440 15 L1440 70 Z" fill="#FAFAFC"/>
          </svg>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Highlights Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-3">What Makes It Special</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deepblue tracking-tight">A Platform for Every Talent</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-[#D4AF37] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-7 shadow-[0_4px_20px_rgba(69,39,160,0.08)] border border-purple-100 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(69,39,160,0.15)] transition-all duration-300 hover:-translate-y-2 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-3xl"></div>
                <div className="w-14 h-14 rounded-2xl bg-lightblue flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  {h.icon}
                </div>
                <h3 className="text-lg font-extrabold text-deepblue mb-2">{h.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery — Masonry Grid */}
        <div>
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-3">Exhibition Gallery</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deepblue tracking-tight">Moments from the Floor</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-[#D4AF37] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] gap-4">
            {images.map((img, idx) => (
              <div
                key={img.id}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-purple-100 bg-lightblue ${spanMap[img.id] || 'col-span-1 row-span-1'}`}
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={img.url}
                  alt={`Exhibition ${img.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  style={{ transition: 'transform 0.7s ease' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepblue/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
                  <div className="bg-gradient-to-r from-primary to-[#311B92] text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 relative bg-gradient-to-br from-deepblue via-[#311B92] to-primary rounded-3xl p-10 sm:p-14 text-white text-center overflow-hidden shadow-[0_20px_60px_rgba(40,23,92,0.25)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-20 translate-x-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full translate-y-10 -translate-x-10 blur-2xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Award className="text-[#D4AF37] w-8 h-8" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Let Your Child Shine</h3>
            <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
              Join the Little Kingdom family and give your child the stage they deserve — academically, creatively, and beyond.
            </p>
            <Link to="/admissions" className="inline-flex items-center gap-2 bg-white text-deepblue hover:bg-lightblue px-10 py-4 rounded-full font-extrabold text-base shadow-xl transition-all transform hover:-translate-y-1">
              Apply for Admission <Award size={18} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExhibitionPage;
