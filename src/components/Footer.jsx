import React from 'react';
import { BookOpen, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deepblue text-white pt-12 sm:pt-16 pb-8 border-t-[6px] border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/logo.png" 
                alt="School Logo" 
                className="h-20 w-20 sm:h-24 sm:w-24 object-contain" 
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl leading-tight uppercase tracking-wide">Little Kingdom</span>
                <span className="text-xs text-lightblue/80 uppercase tracking-wider">Sr. Sec. School, Baihar</span>
              </div>
            </div>
            <p className="text-lightblue/70 text-sm max-w-sm leading-relaxed">
              Empowering students to "Do The Best" in all walks of life. A premier educational institution dedicated to excellence.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center space-x-4 mt-5">
              <a 
                href="https://www.instagram.com/littlekingdomschoolbaihar?igsh=MjUwdHk2cDRqZW9u" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow Little Kingdom School Baihar on Instagram"
                className="group bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 p-2.5 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
              >
                <svg className="w-5 h-5 text-lightblue/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@littlekingdompublicschool?si=jQaVm90EERSjQrNI" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Watch Little Kingdom School Baihar on YouTube"
                className="group bg-white/10 hover:bg-red-600 p-2.5 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
              >
                <svg className="w-5 h-5 text-lightblue/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-4 text-lightblue/80 text-sm">
              <li><a href="#" className="hover:text-white hover:underline transition-all">About Us</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Admissions 2026-27</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Academics</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Gallery</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide uppercase">Contact Us</h3>
            <ul className="space-y-5 text-lightblue/80 text-sm">
              <li className="flex items-start space-x-3 max-w-xs">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Balaghat Road, Baihar, District Balaghat, Madhya Pradesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+917566173757" className="hover:text-white transition-colors">+91 75661 73757</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:baiharlkps@gmail.com" className="hover:text-white transition-colors">baiharlkps@gmail.com</a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Divider */}
        <div className="border-t border-blue-900/50 mb-8 w-full"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-lightblue/60 text-xs text-center md:text-left space-y-4 md:space-y-0">
          <p>&copy; {currentYear} Little Kingdom Senior Secondary School, Baihar. All Rights Reserved.</p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/littlekingdomschoolbaihar?igsh=MjUwdHk2cDRqZW9u" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://youtube.com/@littlekingdompublicschool?si=jQaVm90EERSjQrNI" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
