import React, { useState } from 'react';

const INSTAGRAM_URL = 'https://www.instagram.com/littlekingdomschoolbaihar?igsh=MjUwdHk2cDRqZW9u';

// Curated posts showcasing school life — update these when you post new content
const instaPosts = [
  {
    id: 1,
    image: '/annual-function-1.JPG',
    alt: 'Annual Function Stage Performance - Little Kingdom School Baihar Instagram',
    caption: '🎭 Grand Annual Function 2025',
    likes: 234,
    category: 'Events',
  },
  {
    id: 2,
    image: '/republicday2025firstprize.jpeg',
    alt: 'Republic Day First Prize - Little Kingdom School Baihar Instagram',
    caption: '🏆 5th Consecutive 1st Prize!',
    likes: 412,
    category: 'Achievement',
  },
  {
    id: 3,
    image: '/kindergarten-banner-1.jpg',
    alt: 'Kindergarten Joyful Learning - Little Kingdom School Baihar Instagram',
    caption: '🧸 Little Learners, Big Dreams',
    likes: 189,
    category: 'Campus',
  },
  {
    id: 4,
    image: '/playground-1.jpg',
    alt: 'Sports Playground - Little Kingdom School Baihar Instagram',
    caption: '⚽ Sports Day Vibes',
    likes: 156,
    category: 'Sports',
  },
  {
    id: 5,
    image: '/gallery-2.jpg',
    alt: 'Cultural Celebration - Little Kingdom School Baihar Instagram',
    caption: '✨ Cultural Celebration 2025',
    likes: 298,
    category: 'Events',
  },
  {
    id: 6,
    image: '/9.jpg',
    alt: 'Art and Culture Event - Little Kingdom School Baihar Instagram',
    caption: '🎨 Creativity Unleashed',
    likes: 175,
    category: 'Arts',
  },
];

const InstagramShowcase = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FAFAFA 0%, #F0F4FF 50%, #FAFAFA 100%)' }}>

      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 px-5 py-2 rounded-full mb-5">
            <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span className="text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              @littlekingdomschoolbaihar
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deepblue mb-4 tracking-tight">
            Follow Us on Instagram
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Stay updated with the latest happenings, events, and memories from Little Kingdom School Baihar
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mb-10 sm:mb-14">
          {instaPosts.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.alt}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-3 sm:p-5 transition-opacity duration-300 ${hoveredId === post.id ? 'opacity-100' : 'opacity-0'}`}>

                {/* Category Badge */}
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/10">
                  {post.category}
                </span>

                {/* Caption & Stats */}
                <div>
                  <p className="text-white font-bold text-xs sm:text-sm mb-1.5 line-clamp-2">{post.caption}</p>
                  <div className="flex items-center space-x-3 text-white/70 text-xs">
                    <span className="flex items-center space-x-1">
                      <svg className="w-3.5 h-3.5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Instagram icon (always visible, subtle) */}
              <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 transition-all duration-300 ${hoveredId === post.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                <div className="bg-white/20 backdrop-blur-md p-1.5 sm:p-2 rounded-full border border-white/10">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span>Follow @littlekingdomschoolbaihar</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default InstagramShowcase;
