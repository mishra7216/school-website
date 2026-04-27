import React, { useEffect, useState } from 'react';
import { ArrowLeft, X, Sun, BookOpen, Users, Heart, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const wings = [
  {
    label: 'Junior Wing',
    image: '/schoolassemblyjuniorwing.jpeg',
    description: 'Our junior wing students start every day with enthusiasm — prayers, pledge, and positivity setting the tone for a wonderful school day.',
  },
  {
    label: 'Senior Wing — I',
    image: '/schoolassemblyseniorwing(1).jpeg',
    description: 'Senior students lead by example, conducting assembly with discipline, purpose, and pride that inspires the entire school.',
  },
  {
    label: 'Senior Wing — II',
    image: '/schoolassemblyseniorwing(2).jpeg',
    description: 'A moment of unity — students and teachers stand together, reinforcing the values of respect, responsibility, and excellence.',
  },
];

const values = [
  { icon: <Sun className="w-6 h-6" />, title: 'Morning Prayer', desc: 'Every day begins with a collective prayer that instils gratitude, peace, and focus in every student.' },
  { icon: <BookOpen className="w-6 h-6" />, title: 'National Pledge', desc: 'Students recite the national pledge with pride, reinforcing patriotism and civic values daily.' },
  { icon: <Users className="w-6 h-6" />, title: 'Thought of the Day', desc: 'A student-shared daily thought that sparks reflection, discussion, and positive thinking.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Values & Character', desc: 'Assembly is our daily reminder of the school\'s motto — "Do The Best" in all walks of life.' },
  { icon: <Star className="w-6 h-6" />, title: 'Achievements Celebrated', desc: 'Winners, toppers and achievers are applauded publicly — motivating the whole school.' },
  { icon: <Clock className="w-6 h-6" />, title: 'Punctuality & Discipline', desc: 'Assembly teaches the lifelong value of being on time, standing tall, and being present.' },
];

const SchoolAssemblyPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx) => { setLightboxIndex(idx); setLightbox(wings[idx].image); };
  const prev = (e) => { e.stopPropagation(); const n = (lightboxIndex - 1 + wings.length) % wings.length; setLightboxIndex(n); setLightbox(wings[n].image); };
  const next = (e) => { e.stopPropagation(); const n = (lightboxIndex + 1) % wings.length; setLightboxIndex(n); setLightbox(wings[n].image); };

  return (
    <div className="min-h-screen bg-[#FAFAFC] font-sans">

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center backdrop-blur-sm" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-10" onClick={() => setLightbox(null)}><X size={24} /></button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white px-5 py-4 rounded-full z-10 text-3xl" onClick={prev}>‹</button>
          <div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox} alt="School Assembly" className="max-w-[90vw] max-h-[82vh] object-contain rounded-2xl shadow-2xl" />
            <div className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase">{wings[lightboxIndex].label}</div>
          </div>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white px-5 py-4 rounded-full z-10 text-3xl" onClick={next}>›</button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs font-semibold tracking-widest">{lightboxIndex + 1} / {wings.length}</div>
        </div>
      )}

      {/* ── CINEMATIC HERO ── */}
      <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/schoolassemblyseniorwing(1).jpeg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-deepblue/65 via-deepblue/45 to-deepblue/92"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-deepblue/55 via-transparent to-transparent"></div>

        {/* Glow orbs */}
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px] pointer-events-none"></div>

        <Link to="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/80 hover:text-white bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider transition-colors">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 text-lightblue text-xs font-bold tracking-[0.2em] uppercase mb-5 shadow-lg">
            <Sun size={14} /> Daily School Life
          </div>
          <h1 className="font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl mb-4">
            <span className="block text-5xl sm:text-7xl lg:text-8xl">School</span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37] drop-shadow-[0_0_35px_rgba(212,175,55,0.4)]">
              Assembly
            </span>
          </h1>
          <p className="text-white/75 text-base sm:text-xl max-w-2xl font-medium leading-relaxed drop-shadow-md">
            Where every school day begins with purpose, pride, and a shared commitment to "Do The Best."
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
            <path d="M0 70 L0 40 Q360 5 720 35 Q1080 65 1440 15 L1440 70 Z" fill="#FAFAFC"/>
          </svg>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Assembly Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-3">Our Daily Ritual</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deepblue tracking-tight">What Assembly Means to Us</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-[#D4AF37] rounded-full mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-7 shadow-[0_4px_20px_rgba(69,39,160,0.08)] border border-purple-100 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(69,39,160,0.15)] transition-all duration-300 hover:-translate-y-2 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-3xl"></div>
                <div className="w-14 h-14 rounded-2xl bg-lightblue flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">{v.icon}</div>
                <h3 className="text-lg font-extrabold text-deepblue mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wing Photo Cards */}
        <div>
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-3">Junior & Senior Wings</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deepblue tracking-tight">Assembly in Action</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-[#D4AF37] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wings.map((wing, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-[0_4px_20px_rgba(69,39,160,0.08)] hover:shadow-[0_12px_40px_rgba(69,39,160,0.18)] hover:border-primary/30 transition-all duration-300 cursor-pointer hover:-translate-y-2"
                onClick={() => openLightbox(idx)}
              >
                {/* Wing Label Bar */}
                <div className="bg-gradient-to-r from-deepblue to-primary px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center">
                    <Sun size={16} className="text-[#D4AF37]" />
                  </div>
                  <span className="text-white font-extrabold text-sm tracking-wide">{wing.label}</span>
                </div>

                {/* Photo */}
                <div className="relative h-64 bg-gray-50 overflow-hidden">
                  <img
                    src={wing.image}
                    alt={wing.label}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-deepblue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white text-deepblue font-extrabold text-sm px-6 py-3 rounded-full shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      View Full Photo
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed">{wing.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 relative bg-gradient-to-br from-deepblue via-[#311B92] to-primary rounded-3xl p-10 sm:p-14 text-white text-center overflow-hidden shadow-[0_20px_60px_rgba(40,23,92,0.25)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-20 translate-x-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full translate-y-10 -translate-x-10 blur-2xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Sun className="text-[#D4AF37] w-8 h-8" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Begin Every Day with Purpose</h3>
            <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
              At LKPS, we believe strong values built daily create extraordinary individuals. Enrol your child today.
            </p>
            <Link to="/admissions" className="inline-flex items-center gap-2 bg-white text-deepblue hover:bg-lightblue px-10 py-4 rounded-full font-extrabold text-base shadow-xl transition-all transform hover:-translate-y-1">
              Apply for Admission <Star size={18} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SchoolAssemblyPage;
