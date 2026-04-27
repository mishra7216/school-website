import React, { useEffect, useState } from 'react';
import { ArrowLeft, X, Flag, Trophy, Star, Shield, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const timeline = [
  {
    year: '2025',
    title: '🏆 THE DYNASTY CONTINUES!',
    result: '🥇 1st Prize',
    image: '/republicday2025firstprize.jpeg',
    desc: 'History written again! Four consecutive 1st prizes — a record that speaks for itself. Little Kingdom is not just competing; we are defining excellence.',
  },
  {
    year: '2024',
    title: '🏆 THREE-PEAT!',
    result: '🥇 1st Prize',
    image: '/republicday2024firstprize.jpg',
    desc: 'An absolutely dominant performance. LKPS made it three 1st prizes, cementing their legacy as the undisputed kings of Republic Day dance.',
  },
  {
    year: '2023',
    title: '🏆 BACK WITH A BANG!',
    result: '🥇 1st Prize',
    image: '/republicday2023firstprize.jpeg',
    desc: 'After a 2-year Covid gap, LKPS returned to the stage and reclaimed the crown instantly — proving that champions never rest, they reload.',
  },
  {
    year: '2022',
    title: 'Pandemic Pause',
    result: '🦠 COVID-19',
    image: null,
    desc: 'Second consecutive year without competition due to Covid restrictions. The hunger to perform only grew stronger.',
    dimmed: true,
  },
  {
    year: '2021',
    title: 'Pandemic Pause',
    result: '🦠 COVID-19',
    image: null,
    desc: 'No inter-school competition held due to the global COVID-19 pandemic. But our spirit remained unbroken — students practiced from home.',
    dimmed: true,
  },
  {
    year: '2020',
    title: '🏆 BACK-TO-BACK GLORY!',
    result: '🥇 1st Prize',
    image: '/republicdayperformance2020.jpeg',
    desc: 'LKPS defended their crown with another commanding 1st prize finish — two years in a row, proving 2019 was no fluke but the start of a dynasty.',
  },
  {
    year: '2019',
    title: '🏆 FIRST PRIZE!',
    result: '🥇 1st Prize',
    image: '/republicday2019firstprize.jpeg',
    desc: 'LKPS conquered the inter-school competition, delivering a breathtaking performance that left the audience spellbound and judges unanimous.',
  },
  {
    year: '2016',
    title: '2nd Prize — The Beginning',
    result: '🥈 2nd Prize',
    image: '/republicdayperformance20162ndprize.jpeg',
    desc: 'Little Kingdom made its first mark on the inter-school stage, earning 2nd prize and signaling the arrival of a powerhouse in the making.',
  },
];

const glimpses = [
  { url: '/republicdayglimpses1.jpg', caption: 'Behind the Scenes' },
  { url: '/republicdayglimpses2.webp', caption: 'Stage Moments' },
];

const RepublicDayPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [lightbox, setLightbox] = useState(null);

  const allPhotos = [...timeline.filter(t => t.image).map(t => t.image), ...glimpses.map(g => g.url)];
  const [lbIdx, setLbIdx] = useState(0);
  const openLb = (url) => { const idx = allPhotos.indexOf(url); setLbIdx(idx >= 0 ? idx : 0); setLightbox(url); };
  const prevLb = (e) => { e.stopPropagation(); const n = (lbIdx - 1 + allPhotos.length) % allPhotos.length; setLbIdx(n); setLightbox(allPhotos[n]); };
  const nextLb = (e) => { e.stopPropagation(); const n = (lbIdx + 1) % allPhotos.length; setLbIdx(n); setLightbox(allPhotos[n]); };

  return (
    <div className="min-h-screen font-sans" style={{ background: 'linear-gradient(180deg, #0C1A0E 0%, #0F1B12 40%, #0A1208 100%)' }}>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/97 flex items-center justify-center backdrop-blur-sm" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-10" onClick={() => setLightbox(null)}><X size={24} /></button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white px-5 py-4 rounded-full z-10 text-3xl" onClick={prevLb}>‹</button>
          <img src={lightbox} alt="Republic Day" className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white px-5 py-4 rounded-full z-10 text-3xl" onClick={nextLb}>›</button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs font-semibold tracking-widest">{lbIdx + 1} / {allPhotos.length}</div>
        </div>
      )}

      {/* ══════════════════════════════════════
          HERO — Patriotic Cinematic
      ══════════════════════════════════════ */}
      <div className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/republicday2025firstprize.jpeg')" }}></div>
        {/* Tri-colour inspired overlays */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,103,31,0.15) 0%, rgba(255,255,255,0.05) 33%, rgba(19,136,8,0.15) 66%, rgba(12,26,14,0.95) 100%)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A0E]/70 via-transparent to-transparent"></div>

        {/* Glow orbs — saffron and green */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ background: 'radial-gradient(#FF6F20, transparent)' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-[100px] opacity-15 pointer-events-none" style={{ background: 'radial-gradient(#138808, transparent)' }}></div>

        <Link to="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/80 hover:text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider transition-colors">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6 pb-20 z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/15 text-xs font-bold tracking-[0.25em] uppercase mb-6 shadow-lg" style={{ color: '#FF9933' }}>
            <Flag size={13} /> Jai Hind — Republic Day
          </div>

          <h1 className="font-black leading-none tracking-tight drop-shadow-2xl mb-5" style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}>
            <span className="block text-white">Republic Day</span>
            <span className="block" style={{ background: 'linear-gradient(135deg, #FF9933 0%, #FFFFFF 40%, #138808 80%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Performance
            </span>
          </h1>

          <p className="text-white/70 text-base sm:text-lg max-w-2xl font-medium leading-relaxed mb-4">
            Our motherland — the land of Mahatma Gandhi, of unity in diversity, and of a billion dreams. On every 26th January, Little Kingdom students pay tribute to the spirit of our great Republic through dance, art, and celebration.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/10">
              <div className="text-2xl font-black text-white">5×</div>
              <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest">1st Prizes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/10">
              <div className="text-2xl font-black" style={{ color: '#FF9933' }}>10</div>
              <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Years of Legacy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/10">
              <div className="text-2xl font-black" style={{ color: '#138808' }}>∞</div>
              <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Pride & Passion</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
            <path d="M0 80 L0 50 Q200 10 500 45 Q800 78 1100 30 Q1300 5 1440 35 L1440 80 Z" fill="#0C1A0E"/>
          </svg>
        </div>
      </div>

      {/* ══════════════════════════════════════
          PATRIOTIC MESSAGE
      ══════════════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="w-20 h-0.5 mx-auto mb-8 rounded-full" style={{ background: 'linear-gradient(90deg, #FF9933, #FFFFFF, #138808)' }}></div>
        <p className="text-white/60 text-base sm:text-lg leading-relaxed font-medium italic max-w-3xl mx-auto">
          "India is not just a country; it is the cradle of human civilization. From the towering Himalayas to the vast Indian Ocean, from the wisdom of the Vedas to the vision of our Constitution — our nation stands tall as the world's largest democracy. On Republic Day, we don't just celebrate a date; we celebrate the unbreakable spirit of 1.4 billion Indians who together write the greatest story of freedom, diversity, and progress."
        </p>
        <div className="w-20 h-0.5 mx-auto mt-8 rounded-full" style={{ background: 'linear-gradient(90deg, #FF9933, #FFFFFF, #138808)' }}></div>
      </div>

      {/* ══════════════════════════════════════
          DOMINANCE TIMELINE
      ══════════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <span className="font-bold tracking-widest uppercase text-xs block mb-3" style={{ color: '#FF9933' }}>Our Journey of Dominance</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">A Legacy of Champions</h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(90deg, #FF9933, #FFFFFF, #138808)' }}></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block" style={{ background: 'linear-gradient(to bottom, #FF9933, #FFFFFF, #138808, transparent)' }}></div>
          {/* Mobile left line */}
          <div className="absolute left-6 top-0 bottom-0 w-px md:hidden" style={{ background: 'linear-gradient(to bottom, #FF9933, #FFFFFF, #138808, transparent)' }}></div>

          {timeline.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            const hasImage = !!item.image;
            const isDimmed = item.dimmed;

            return (
              <div key={idx} className="relative mb-12 last:mb-0">

                {/* Desktop layout */}
                <div className="hidden md:flex items-start">
                  {/* Left side */}
                  <div className={`w-1/2 pr-10 ${isLeft ? '' : 'order-2 pl-10 pr-0'}`}>
                    {isLeft && (
                      <div className={`rounded-3xl p-6 border transition-all ${isDimmed ? 'opacity-50 border-white/5' : 'border-white/10 hover:border-white/20'}`} style={{ background: isDimmed ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)' }}>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl font-black text-white/20">{item.year}</span>
                          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10" style={{ color: hasImage ? '#FF9933' : 'rgba(255,255,255,0.4)' }}>{item.result}</span>
                        </div>
                        <h3 className="text-lg font-extrabold text-white mb-2">{item.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                        {hasImage && (
                          <div className="mt-4 rounded-2xl overflow-hidden cursor-pointer group border border-white/5" onClick={() => openLb(item.image)}>
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-5 h-5 rounded-full border-2 ${isDimmed ? 'bg-gray-700 border-gray-600' : ''}`} style={!isDimmed ? { background: hasImage ? '#FF9933' : 'rgba(255,255,255,0.2)', borderColor: hasImage ? '#FF9933' : 'rgba(255,255,255,0.1)', boxShadow: hasImage ? '0 0 20px rgba(255,153,51,0.5)' : 'none' } : {}}></div>
                  </div>

                  {/* Right side */}
                  <div className={`w-1/2 pl-10 ${isLeft ? 'order-2' : 'pr-10 pl-0'}`}>
                    {!isLeft && (
                      <div className={`rounded-3xl p-6 border transition-all ${isDimmed ? 'opacity-50 border-white/5' : 'border-white/10 hover:border-white/20'}`} style={{ background: isDimmed ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)' }}>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl font-black text-white/20">{item.year}</span>
                          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10" style={{ color: hasImage ? '#FF9933' : 'rgba(255,255,255,0.4)' }}>{item.result}</span>
                        </div>
                        <h3 className="text-lg font-extrabold text-white mb-2">{item.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                        {hasImage && (
                          <div className="mt-4 rounded-2xl overflow-hidden cursor-pointer group border border-white/5" onClick={() => openLb(item.image)}>
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden flex">
                  <div className="relative flex-shrink-0 mr-6">
                    <div className={`absolute left-6 top-0 w-px h-full ${isDimmed ? 'bg-gray-800' : 'bg-white/10'}`}></div>
                    <div className={`relative z-10 w-5 h-5 rounded-full border-2 ml-[14px]`} style={!isDimmed ? { background: hasImage ? '#FF9933' : 'rgba(255,255,255,0.2)', borderColor: hasImage ? '#FF9933' : 'rgba(255,255,255,0.1)' } : { background: '#374151', borderColor: '#4B5563' }}></div>
                  </div>
                  <div className={`flex-1 rounded-3xl p-5 border mb-2 ${isDimmed ? 'opacity-50 border-white/5' : 'border-white/10'}`} style={{ background: isDimmed ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-black text-white/20">{item.year}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border border-white/10" style={{ color: hasImage ? '#FF9933' : 'rgba(255,255,255,0.4)' }}>{item.result}</span>
                    </div>
                    <h3 className="text-base font-extrabold text-white mb-1.5">{item.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                    {hasImage && (
                      <div className="mt-3 rounded-xl overflow-hidden cursor-pointer group border border-white/5" onClick={() => openLb(item.image)}>
                        <img src={item.image} alt={item.title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* ══════════════════════════════════════
          GLIMPSES GALLERY
      ══════════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <span className="font-bold tracking-widest uppercase text-xs block mb-3" style={{ color: '#138808' }}>Behind the Curtain</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Glimpses</h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(90deg, #FF9933, #138808)' }}></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {glimpses.map((g, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-white/15 transition-all" onClick={() => openLb(g.url)}>
              <img src={g.url} alt={g.caption} className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative rounded-3xl p-10 sm:p-14 text-white text-center overflow-hidden border border-white/10" style={{ background: 'linear-gradient(135deg, rgba(255,153,51,0.15), rgba(255,255,255,0.03), rgba(19,136,8,0.12))' }}>
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: 'linear-gradient(135deg, #FF9933, #138808)' }}>
              <Flag className="text-white w-8 h-8" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Be Part of a Winning Legacy</h3>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
              When your child joins LKPS, they don't just join a school — they join a dynasty of champions. Enrol today.
            </p>
            <Link to="/admissions" className="inline-flex items-center gap-2 bg-white text-deepblue hover:bg-gray-100 px-10 py-4 rounded-full font-extrabold text-base shadow-xl transition-all transform hover:-translate-y-1">
              Apply for Admission <Trophy size={18} />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RepublicDayPage;
