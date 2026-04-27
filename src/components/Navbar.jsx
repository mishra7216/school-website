import React, { useState } from 'react';
import { Menu, X, BookOpen, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md text-deepblue sticky top-[36px] sm:top-[36px] z-40 border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-24">
          
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-4 cursor-pointer hover:opacity-90">
            <img 
              src="/logo.png" 
              alt="School Logo" 
              className="h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain drop-shadow-sm" 
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-xl leading-tight uppercase tracking-wider text-deepblue">Little Kingdom</span>
              <span className="text-xs text-primary/80 font-semibold uppercase tracking-widest hidden sm:block mt-0.5">Senior Secondary School</span>
              <span className="text-[10px] text-primary/80 font-semibold uppercase tracking-widest sm:hidden mt-0.5">Sr. Sec. School, Baihar</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wider relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wider relative group py-2">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Academics Dropdown Container */}
            <div className="relative group p-2">
                <div className="flex items-center space-x-1 cursor-pointer text-gray-600 group-hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wider">
                  <span>Academics</span>
                  <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" />
                </div>
                
                {/* The Dropdown Card (Invisible until hover) */}
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 py-3 block z-50">
                  <div className="px-4 py-3 hover:bg-lightblue/30 transition-colors">
                    <Link to="/teachers" className="block text-primary font-bold text-sm tracking-wide">
                      Know Your Teachers
                    </Link>
                    <p className="text-gray-500 text-xs mt-1 leading-snug">Meet our dedicated faculty shaping future minds</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-lightblue/30 transition-colors">
                    <Link to="/exhibition" className="block text-primary font-bold text-sm tracking-wide">
                      Annual Exhibition
                    </Link>
                    <p className="text-gray-500 text-xs mt-1 leading-snug">Science, art & innovation projects by our students</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-lightblue/30 transition-colors">
                    <Link to="/art-event-gallery" className="block text-primary font-bold text-sm tracking-wide">
                      Art &amp; Event Gallery
                    </Link>
                    <p className="text-gray-500 text-xs mt-1 leading-snug">Paintings, cultural events and campus life moments</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-lightblue/30 transition-colors">
                    <Link to="/academic-results" className="block text-primary font-bold text-sm tracking-wide">
                      Academic Results
                    </Link>
                    <p className="text-gray-500 text-xs mt-1 leading-snug">Board exam results and our academic achievements</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-lightblue/30 transition-colors opacity-50 cursor-pointer">
                    <span className="block text-gray-700 font-bold text-sm tracking-wide">Curriculum Details</span>
                    <p className="text-gray-400 text-xs mt-1">Coming soon</p>
                  </div>
                </div>
            </div>

            <Link to="/admissions" className="text-gray-600 hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wider relative group py-2">
              Admissions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link to="/admissions" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-deepblue hover:bg-gray-50 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown Wrapper */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-2xl overflow-y-auto max-h-[85vh]">
          <div className="px-5 pt-3 pb-8 space-y-2">
            
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center justify-between px-4 py-4 border-b border-gray-50 text-base font-bold text-deepblue hover:text-primary hover:bg-lightblue/30 transition-colors rounded-lg">
              Home
              <ChevronRight className="h-5 w-5 opacity-40 text-primary" />
            </Link>
            
            <Link to="/about" onClick={() => setIsOpen(false)} className="flex items-center justify-between px-4 py-4 border-b border-gray-50 text-base font-bold text-deepblue hover:text-primary hover:bg-lightblue/30 transition-colors rounded-lg">
              About Us
              <ChevronRight className="h-5 w-5 opacity-40 text-primary" />
            </Link>

            {/* Mobile Academics Dropdown */}
            <div className="border-b border-gray-50 rounded-lg overflow-hidden">
              <button 
                onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                className="w-full flex items-center justify-between px-4 py-4 text-base font-bold text-deepblue hover:text-primary hover:bg-lightblue/30 transition-colors"
              >
                Academics
                <ChevronDown className={`h-5 w-5 text-primary transition-transform ${isAcademicsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mobile Submenu for Academics */}
              {isAcademicsOpen && (
                <div className="bg-gray-50 px-4 py-3 space-y-3 pb-5">
                  <Link to="/teachers" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-sm font-bold text-primary rounded-xl bg-white shadow-sm border border-gray-100 hover:border-primary/50 transition-all text-center">
                    Know Your Teachers
                  </Link>
                  <Link to="/exhibition" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-sm font-bold text-primary rounded-xl bg-white shadow-sm border border-gray-100 hover:border-primary/50 transition-all text-center">
                    Annual Exhibition
                  </Link>
                  <Link to="/art-event-gallery" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-sm font-bold text-primary rounded-xl bg-white shadow-sm border border-gray-100 hover:border-primary/50 transition-all text-center">
                    Art &amp; Event Gallery
                  </Link>
                  <Link to="/academic-results" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-sm font-bold text-primary rounded-xl bg-white shadow-sm border border-gray-100 hover:border-primary/50 transition-all text-center">
                    Academic Results
                  </Link>
                  <div className="block px-4 py-4 text-sm font-bold text-gray-500 rounded-xl bg-white shadow-sm border border-gray-100 opacity-60 text-center">
                    Curriculum Overview
                  </div>
                </div>
              )}
            </div>

            <Link to="/admissions" onClick={() => setIsOpen(false)} className="flex items-center justify-between px-4 py-4 border-b border-gray-50 text-base font-bold text-deepblue hover:text-primary hover:bg-lightblue/30 transition-colors rounded-lg">
              Admissions
              <ChevronRight className="h-5 w-5 opacity-40 text-primary" />
            </Link>

            <div className="pt-6 px-4">
              <Link to="/admissions" onClick={() => setIsOpen(false)} className="block w-full bg-primary hover:bg-primary/90 text-white px-5 py-4 rounded-xl font-bold text-base tracking-wide transition-colors shadow-lg text-center">
                Apply Now
              </Link>
            </div>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
