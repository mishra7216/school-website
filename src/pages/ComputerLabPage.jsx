import React, { useEffect, useState } from 'react';
import { ArrowLeft, X, Monitor, Cpu, Wifi, BookOpen, Lightbulb, Projector } from 'lucide-react';
import { Link } from 'react-router-dom';

const photos = [
  { id: 1, url: '/computerlab1.jpeg', label: 'Computer Lab' },
  { id: 2, url: '/smartclass1.jpeg', label: 'Smart Classroom' },
];

const features = [
  { icon: <Monitor className="w-6 h-6" />, title: 'Modern Computer Lab', desc: 'Fully equipped lab with the latest desktops, high-speed internet, and dedicated workstations for every student.' },
  { icon: <Projector className="w-6 h-6" />, title: 'Smart Classrooms', desc: 'Interactive digital boards and AV systems that make lessons come alive with visuals, videos, and real-time engagement.' },
  { icon: <Cpu className="w-6 h-6" />, title: 'Hands-on Learning', desc: 'Students learn coding, MS Office, internet skills, and practical computer applications from primary level onwards.' },
  { icon: <Wifi className="w-6 h-6" />, title: 'Connected Campus', desc: 'High-speed connectivity enabling teachers to bring the world into the classroom through digital resources.' },
  { icon: <BookOpen className="w-6 h-6" />, title: 'Digital Literacy', desc: 'Curriculum designed to build essential 21st-century digital skills alongside traditional academics.' },
  { icon: <Lightbulb className="w-6 h-6" />, title: 'Innovation Hub', desc: 'A space where students explore, experiment, and develop creative solutions through technology.' },
];

const ComputerLabPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx) => { setLightboxIndex(idx); setLightbox(photos[idx].url); };
  const prev = (e) => { e.stopPropagation(); const n = (lightboxIndex - 1 + photos.length) % photos.length; setLightboxIndex(n); setLightbox(photos[n].url); };
  const next = (e) => { e.stopPropagation(); const n = (lightboxIndex + 1) % photos.length; setLightboxIndex(n); setLightbox(photos[n].url); };

  return (
    <div className="min-h-screen bg-[#FAFAFC] font-sans">

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center backdrop-blur-sm" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-10" onClick={() => setLightbox(null)}><X size={24} /></button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white px-5 py-4 rounded-full z-10 text-3xl" onClick={prev}>‹</button>
          <div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox} alt="Lab" className="max-w-[90vw] max-h-[82vh] object-contain rounded-2xl shadow-2xl" />
            <div className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase">{photos[lightboxIndex].label}</div>
          </div>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white px-5 py-4 rounded-full z-10 text-3xl" onClick={next}>›</button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs font-semibold tracking-widest">{lightboxIndex + 1} / {photos.length}</div>
        </div>
      )}

      {/* Hero */}
      <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/computerlab1.jpeg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-deepblue/65 via-deepblue/45 to-deepblue/92"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-deepblue/55 via-transparent to-transparent"></div>

        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px] pointer-events-none"></div>

        <Link to="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/80 hover:text-white bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider transition-colors">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 text-lightblue text-xs font-bold tracking-[0.2em] uppercase mb-5 shadow-lg">
            <Monitor size={14} /> Technology & Learning
          </div>
          <h1 className="font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl mb-4">
            <span className="block text-5xl sm:text-7xl lg:text-8xl">Computer Lab</span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37] drop-shadow-[0_0_35px_rgba(212,175,55,0.4)]">
              & Smart Class
            </span>
          </h1>
          <p className="text-white/75 text-base sm:text-xl max-w-2xl font-medium leading-relaxed drop-shadow-md">
            Where technology meets education — preparing students for the digital future, one lesson at a time.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
            <path d="M0 70 L0 40 Q360 5 720 35 Q1080 65 1440 15 L1440 70 Z" fill="#FAFAFC"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-3">Our Tech Infrastructure</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deepblue tracking-tight">Learning with Technology</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-[#D4AF37] rounded-full mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-7 shadow-[0_4px_20px_rgba(69,39,160,0.08)] border border-purple-100 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(69,39,160,0.15)] transition-all duration-300 hover:-translate-y-2 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-3xl"></div>
                <div className="w-14 h-14 rounded-2xl bg-lightblue flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">{f.icon}</div>
                <h3 className="text-lg font-extrabold text-deepblue mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Cards */}
        <div>
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-3">Inside Our Facilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deepblue tracking-tight">Lab & Smart Class Gallery</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-[#D4AF37] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {photos.map((photo, idx) => (
              <div
                key={photo.id}
                className="group bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-[0_4px_20px_rgba(69,39,160,0.08)] hover:shadow-[0_12px_40px_rgba(69,39,160,0.18)] hover:border-primary/30 transition-all duration-300 cursor-pointer hover:-translate-y-2"
                onClick={() => openLightbox(idx)}
              >
                <div className="bg-gradient-to-r from-deepblue to-primary px-6 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center">
                    {idx === 0 ? <Monitor size={18} className="text-[#D4AF37]" /> : <Projector size={18} className="text-[#D4AF37]" />}
                  </div>
                  <span className="text-white font-extrabold text-lg tracking-wide">{photo.label}</span>
                </div>
                <div className="relative h-72 sm:h-80 bg-gray-50 overflow-hidden">
                  <img src={photo.url} alt={photo.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-deepblue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white text-deepblue font-extrabold text-sm px-6 py-3 rounded-full shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      View Full Photo
                    </div>
                  </div>
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
              <Monitor className="text-[#D4AF37] w-8 h-8" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Future-Ready Education</h3>
            <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
              Equip your child with the digital skills they need to thrive in tomorrow's world. Enrol at LKPS today.
            </p>
            <Link to="/admissions" className="inline-flex items-center gap-2 bg-white text-deepblue hover:bg-lightblue px-10 py-4 rounded-full font-extrabold text-base shadow-xl transition-all transform hover:-translate-y-1">
              Apply for Admission <Cpu size={18} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComputerLabPage;
