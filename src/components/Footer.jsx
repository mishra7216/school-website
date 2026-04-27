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
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
