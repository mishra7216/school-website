import React, { useEffect, useState } from 'react';
import { ArrowLeft, X, Palette, Music, Camera, Star, Heart, Sparkles, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = [
  { id: 9,  url: '/9.jpg' },
  { id: 10, url: '/10.jpg' },
  { id: 11, url: '/11.jpg' },
  { id: 12, url: '/12.jpg' },
  { id: 13, url: '/13.jpg' },
  { id: 14, url: '/14.jpg' },
  { id: 15, url: '/15.jpg' },
  { id: 16, url: '/16.jpg' },
  { id: 17, url: '/17.jpg' },
  { id: 18, url: '/18.jpg' },
  { id: 19, url: '/19.jpg' },
  { id: 20, url: '/20.jpg' },
  { id: 21, url: '/21.jpg' },
  { id: 22, url: '/22.jpg' },
  { id: 23, url: '/23.jpg' },
  { id: 24, url: '/24.jpg' },
];

const categories = [
  { icon: <Palette className="w-6 h-6" />, title: 'Arts & Craft', desc: 'Paintings, sculptures, and handmade creations celebrating imagination at every age.', color: 'from-pink-500 to-rose-400' },
  { icon: <Music className="w-6 h-6" />, title: 'Cultural Events', desc: 'Dance, drama, and music performances that fill the school with colour and rhythm.', color: 'from-violet-500 to-purple-400' },
  { icon: <Camera className="w-6 h-6" />, title: 'Photography & Media', desc: 'Student photographers capture the spirit of campus life through their own lens.', color: 'from-amber-500 to-yellow-400' },
  { icon: <Star className="w-6 h-6" />, title: 'Competitions & Awards', desc: 'Inter-school art competitions, poetry slams, and talent hunts that build confidence.', color: 'from-blue-500 to-sky-400' },
  { icon: <Heart className="w-6 h-6" />, title: 'Community Celebrations', desc: 'Festivals, charity drives and special days where students give back with joy.', color: 'from-red-500 to-orange-400' },
  { icon: <Sparkles className="w-6 h-6" />, title: 'Surprise Showcases', desc: 'Pop-up exhibits and flash events that keep the school buzzing with energy.', color: 'from-teal-500 to-emerald-400' },
];

const ArtEventGalleryPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx) => { setLightboxIndex(idx); setLightbox(images[idx].url); };
  const prev = (e) => { e.stopPropagation(); const n = (lightboxIndex - 1 + images.length) % images.length; setLightboxIndex(n); setLightbox(images[n].url); };
  const next = (e) => { e.stopPropagation(); const n = (lightboxIndex + 1) % images.length; setLightboxIndex(n); setLightbox(images[n].url); };

  return (
    <div className="min-h-screen font-sans" style={{ background: '#0D0B1E' }}>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/97 flex items-center justify-center backdrop-blur-sm" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-10" onClick={() => setLightbox(null)}><X size={24} /></button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white px-5 py-4 rounded-full z-10 text-3xl font-thin" onClick={prev}>‹</button>
          <img src={lightbox} alt="Art & Event" className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white px-5 py-4 rounded-full z-10 text-3xl font-thin" onClick={next}>›</button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs font-semibold tracking-[0.3em] uppercase">{lightboxIndex + 1} of {images.length}</div>
        </div>
      )}

      {/* ══════════════════════════════════════
          CINEMATIC FULL-SCREEN HERO
          — dark canvas with collage overlay
      ══════════════════════════════════════ */}
      <div className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">

        {/* Background photo — cover with top-center focus so faces/subjects show */}
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: "url('/16.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 10%',
          }}
        ></div>

        {/* Much lighter overlay — photo stays clearly visible */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,11,30,0.20) 0%, rgba(13,11,30,0.15) 40%, rgba(13,11,30,0.65) 75%, rgba(13,11,30,0.95) 100%)' }}></div>

        {/* Coloured bokeh orbs — paint‑splash feel */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-[120px] opacity-30 pointer-events-none" style={{ background: 'radial-gradient(#ec4899, transparent)' }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-25 pointer-events-none" style={{ background: 'radial-gradient(#a855f7, transparent)' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full blur-[110px] opacity-20 pointer-events-none" style={{ background: 'radial-gradient(#f59e0b, transparent)' }}></div>

        {/* Back button */}
        <Link to="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/70 hover:text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider transition-all">
          <ArrowLeft size={13} /> Back to Home
        </Link>

        {/* Hero content — bottom-aligned for cinematic feel */}
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6 pb-24 z-10">

          {/* Category pill */}
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-md text-pink-300 text-xs font-bold tracking-[0.25em] uppercase shadow-lg">
            <Palette size={13} />  Arts, Culture &amp; Events
          </div>

          {/* Headline — large, expressive */}
          <h1 className="font-black leading-none tracking-tight drop-shadow-2xl mb-5" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>
            <span className="block text-white">Art &amp;</span>
            <span className="block" style={{ background: 'linear-gradient(135deg, #f9a8d4 0%, #d8b4fe 40%, #fde68a 80%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Event Gallery
            </span>
          </h1>

          <p className="text-white/65 text-base sm:text-lg max-w-xl font-medium leading-relaxed">
            A canvas of colours, creativity, and culture — where every student finds their voice.
          </p>
        </div>

        {/* Artistic brush-stroke wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
            <path d="M0 80 L0 50 Q200 10 500 45 Q800 78 1100 30 Q1300 5 1440 35 L1440 80 Z" fill="#0D0B1E"/>
          </svg>
        </div>
      </div>

      {/* ══════════════════════════════════════
          WHAT WE CELEBRATE — colourful cards
      ══════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="text-center mb-14">
          <span className="text-pink-400 font-bold tracking-widest uppercase text-xs block mb-3">What We Celebrate</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Creative Life at LKPS</h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(90deg, #ec4899, #a855f7, #f59e0b)' }}></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c, idx) => (
            <div key={idx} className="group relative rounded-3xl p-7 overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-400 hover:-translate-y-2 cursor-default" style={{ background: 'rgba(255,255,255,0.04)' }}>
              {/* Colour glow in background */}
              <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity bg-gradient-to-br ${c.color}`}></div>
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${c.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

              <div className={`w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-white bg-gradient-to-br ${c.color} shadow-lg`}>
                {c.icon}
              </div>
              <h3 className="text-base font-extrabold text-white mb-2">{c.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          MRS. ALEENA FRANCIS — Head of Co-Curricular
      ══════════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 p-8 sm:p-12" style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.12) 0%, rgba(168,85,247,0.10) 50%, rgba(245,158,11,0.08) 100%)' }}>

          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-60 h-60 rounded-full blur-[80px] opacity-20 pointer-events-none" style={{ background: 'radial-gradient(#ec4899, transparent)' }}></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-[70px] opacity-15 pointer-events-none" style={{ background: 'radial-gradient(#a855f7, transparent)' }}></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 lg:gap-16">

            {/* Photo */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full blur-2xl opacity-40 scale-110" style={{ background: 'radial-gradient(#ec4899, #a855f7)' }}></div>
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full border-4 overflow-hidden shadow-2xl" style={{ borderColor: 'rgba(236,72,153,0.5)' }}>
                <img
                  src="/aleena-francis.jpg"
                  alt="Mrs. Aleena Francis"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #ec4899, #a855f7)';
                    e.target.parentElement.innerHTML += '<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:3rem;font-weight:900;color:white">AF</div>';
                  }}
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-2 -right-2 rounded-full p-2.5 border-2 border-white/10 shadow-lg" style={{ background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}>
                <Palette size={18} className="text-white" />
              </div>
            </div>

            {/* Message */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-pink-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
                <Sparkles size={12} /> Head of Co-Curricular Development
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">Mrs. Aleena Francis</h2>

              {/* Speech bubble */}
              <div className="relative rounded-2xl p-6 border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <Quote size={28} className="text-pink-400/40 mb-3" />
                <p className="text-white/75 text-sm sm:text-base leading-relaxed italic font-medium">
                  "As the Head of Co-Curricular Development, I aim to unlock every student's hidden potential. From cultural programs to sports, debates to craft, I guide students to discover their strengths, express themselves, and develop essential 21st-century skills like leadership, collaboration, and creativity."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          PHOTO GALLERY — dark masonry grid
      ══════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <span className="text-pink-400 font-bold tracking-widest uppercase text-xs block mb-3">Photo Gallery</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Captured Moments</h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(90deg, #ec4899, #a855f7, #f59e0b)' }}></div>
        </div>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img, idx) => (
            <div
              key={img.id}
              className="break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer relative border border-white/5 hover:border-pink-400/30 transition-all duration-300"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={img.url}
                alt={`Art & Event ${img.id}`}
                className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ background: 'rgba(13,11,30,0.6)' }}>
                <div className="text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/30">
                  View
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative rounded-3xl p-10 sm:p-14 text-white text-center overflow-hidden border border-white/10" style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(168,85,247,0.18) 50%, rgba(245,158,11,0.12) 100%)' }}>
          <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(13,11,30,0.5), rgba(13,11,30,0.3))' }}></div>
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}>
              <Palette className="text-white w-8 h-8" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Give Your Child a Creative Stage</h3>
            <p className="text-white/65 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
              At LKPS, we believe every child is an artist. Enrol today and let their creativity flourish.
            </p>
            <Link to="/admissions" className="inline-flex items-center gap-2 bg-white text-deepblue hover:bg-pink-50 px-10 py-4 rounded-full font-extrabold text-base shadow-xl transition-all transform hover:-translate-y-1">
              Apply for Admission <Sparkles size={18} />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ArtEventGalleryPage;
