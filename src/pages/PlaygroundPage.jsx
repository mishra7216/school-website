import React, { useEffect, useState } from 'react';
import { ArrowLeft, X, Dumbbell, Wind, Shield, Users, Trophy, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlaygroundPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [lightbox, setLightbox] = useState(null);

  const images = [
    { id: 1, url: '/playground-1.jpg', span: 'col-span-2 row-span-2' },
    { id: 2, url: '/playground-2.jpg', span: 'col-span-1 row-span-1' },
    { id: 3, url: '/playground-3.jpg', span: 'col-span-1 row-span-1' },
    { id: 4, url: '/playground-4.jpg', span: 'col-span-1 row-span-1' },
    { id: 5, url: '/playground-5.jpg', span: 'col-span-2 row-span-1' },
    { id: 6, url: '/playground-6.jpg', span: 'col-span-1 row-span-1' },
  ];

  const features = [
    { icon: <Dumbbell className="w-6 h-6" />, title: 'Indoor Kabaddi Hall', desc: 'A dedicated indoor Kabaddi hall fitted with interlocked foam mats meeting international standards.' },
    { icon: <Wind className="w-6 h-6" />, title: 'Open Field', desc: 'A vast open ground for cricket, football, and athletics.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Safe Environment', desc: 'Supervised play area with rubberized flooring and safety netting.' },
    { icon: <Users className="w-6 h-6" />, title: 'Trained Sports Staff', desc: 'Expert PT instructors ensuring proper technique and sportsmanship.' },
    { icon: <Trophy className="w-6 h-6" />, title: 'Inter-School Competitions', desc: 'Regular participation in district and state level tournaments.' },
    { icon: <Sun className="w-6 h-6" />, title: 'Daily PT Sessions', desc: 'Structured physical education periods for every class.' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFC] font-sans">

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full" onClick={() => setLightbox(null)}>
            <X size={26} />
          </button>
          <img src={lightbox} alt="Playground" className="max-w-[93vw] max-h-[88vh] object-contain rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* ── CINEMATIC HERO (Royal theme) ── */}
      <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/playground-hero.jpg')" }}
        ></div>

        {/* Royal violet/deep blue gradient overlay — matches website theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-deepblue/70 via-deepblue/50 to-deepblue/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-deepblue/60 via-transparent to-transparent"></div>

        {/* Glow orbs */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/25 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-primary/15 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Back button */}
        <Link to="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/80 hover:text-white bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider transition-colors">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 text-lightblue text-xs font-bold tracking-[0.2em] uppercase mb-5 shadow-lg">
            <Trophy size={14} /> Sports & Infrastructure
          </div>
          <h1 className="font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl mb-4">
            <span className="block text-5xl sm:text-7xl lg:text-8xl">Our</span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-lightblue via-white to-lightblue drop-shadow-[0_0_30px_rgba(243,232,255,0.4)]">
              Playground
            </span>
          </h1>
          <p className="text-white/75 text-base sm:text-xl max-w-2xl font-medium leading-relaxed drop-shadow-md">
            Where champions are built, teamwork is learned, and young athletes discover their potential.
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

        {/* Feature Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-3">World-Class Facilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deepblue tracking-tight">Built for Champions</h2>
            <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-7 shadow-[0_4px_20px_rgba(69,39,160,0.08)] border border-purple-100 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(69,39,160,0.15)] transition-all duration-400 hover:-translate-y-2 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#7B1FA2] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-3xl"></div>
                <div className="w-14 h-14 rounded-2xl bg-lightblue flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  {f.icon}
                </div>
                <h3 className="text-lg font-extrabold text-deepblue mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div>
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-3">Photo Gallery</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deepblue tracking-tight">Action Highlights</h2>
            <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-4">
            {images.map((img) => (
              <div
                key={img.id}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-purple-100 bg-lightblue ${img.span.replace('col-span-2','md:col-span-2 col-span-2').replace('col-span-1','md:col-span-1 col-span-1')}`}
                onClick={() => setLightbox(img.url)}
              >
                <img
                  src={img.url}
                  alt={`Playground ${img.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepblue/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
                  <div className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Photo
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA — matches royal theme */}
        <div className="mt-20 relative bg-gradient-to-br from-deepblue via-[#311B92] to-primary rounded-3xl p-10 sm:p-14 text-white text-center overflow-hidden shadow-[0_20px_60px_rgba(40,23,92,0.25)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-20 translate-x-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full translate-y-10 -translate-x-10 blur-2xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Trophy className="text-lightblue w-8 h-8" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Nurturing Future Champions</h3>
            <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
              At LKPS, sports isn't just a period — it's a commitment to building resilient, disciplined, and confident young athletes.
            </p>
            <Link to="/admissions" className="inline-flex items-center gap-2 bg-white text-deepblue hover:bg-lightblue px-10 py-4 rounded-full font-extrabold text-base shadow-xl transition-all transform hover:-translate-y-1">
              Enroll Your Child <Trophy size={18} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlaygroundPage;
