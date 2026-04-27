import React from 'react';
import { ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const GalleryPreview = () => {
  const images = [
    { id: 'school-assembly', src: '/gallery-1.jpg', caption: 'School Assembly', to: '/school-assembly' },
    { id: 'annual-function', src: '/gallery-2.jpg', caption: 'Annual Function', to: '/gallery/annual-function' },
    { id: 'republic-day-performance', src: '/gallery-3.jpg', caption: 'Republic Day Performance', to: '/republic-day' },
    { id: 'pre-primary-wing', src: '/gallery-4.jpg', caption: "School's Pre-Primary Wing", to: '/gallery/pre-primary-wing' },
    { id: 'playground', src: '/gallery-5.jpg', caption: "School's Playground", to: '/gallery/playground' },
    { id: 'computer-lab', src: '/gallery-6.jpg', caption: 'Computer Lab', to: '/computer-lab' },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Campus Tour</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deepblue mb-4 sm:mb-6 tracking-tight">
            Life at Our School
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
            Experience the vibrant environment, modern infrastructure, and engaging activities that make learning a joy at Little Kingdom.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {images.map((image, idx) => (
            <Link 
              to={image.to || `/gallery/${image.id}`}
              key={idx} 
              className="group relative aspect-square sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-gray-100 cursor-pointer block border border-transparent hover:border-primary/20"
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.caption} 
                className="w-full h-full object-cover transform group-hover:scale-[1.15] transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-deepblue/0 group-hover:bg-deepblue/60 transition-colors duration-500 flex items-center justify-center">
                <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-8 group-hover:translate-y-0">
                  <ImageIcon className="text-white w-10 h-10 mb-3 drop-shadow-md" />
                  <span className="text-white font-bold text-xl drop-shadow-md px-4 text-center">
                    {image.caption}
                  </span>
                  <span className="text-white/80 text-sm mt-2 font-medium tracking-wide uppercase border-b border-white/40 pb-0.5">
                    View Gallery
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 rounded-full font-bold text-base shadow-sm hover:shadow-lg hover:shadow-primary/20 transition-all sm:w-auto w-full sm:max-w-xs transform hover:-translate-y-1">
            View Complete Gallery
          </button>
        </div>

      </div>
    </section>
  );
};

export default GalleryPreview;
