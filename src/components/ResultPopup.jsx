import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ResultPopup = () => {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the popup automatically a short time after the page loads
    const loadTimer = setTimeout(() => {
      setShow(true);
      // Wait a tiny frame to let React mount, then trigger the CSS animation
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }, 1200);
    
    return () => clearTimeout(loadTimer);
  }, []);

  const handleClose = () => {
    setIsVisible(false); // Trigger fade out animation
    
    // Completely remove it from the page after animation finishes
    setTimeout(() => {
      setShow(false);
    }, 500); 
  };

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md transition-opacity duration-500 flex-col ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      
      {/* Minimal Elegant Container */}
      <div 
        className={`relative w-full max-w-4xl transform transition-all duration-700 ease-out flex justify-center ${isVisible ? 'translate-y-0 scale-100' : 'translate-y-16 scale-95'}`}
      >
        <div className="relative inline-block">
          {/* Elegant Translucent Close Button sitting inside the photo border */}
          <button 
            onClick={handleClose}
            className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 bg-black/40 hover:bg-black/70 backdrop-blur-md text-white p-2 sm:p-2.5 rounded-full transition-all hover:scale-105"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
          </button>

          {/* The raw clean photo with no heavy white frames */}
          <img 
            src="/board-result.jpg" 
            alt="Board Result Achievements" 
            className="w-full max-w-4xl h-auto max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onError={(e) => { 
              e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop' 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultPopup;
