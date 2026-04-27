import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';

const GalleryDetail = () => {
  const { id } = useParams();
  
  // Format slug (e.g. 'school-assembly') into proper title case
  const formatTitle = (slug) => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const title = id ? formatTitle(id) : 'Gallery';
  
  // Scroll to the top of the page when navigating here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Mini header section */}
      <div className="bg-lightblue py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <Link to="/" className="inline-flex items-center text-primary font-bold hover:text-deepblue transition-colors mb-6 group">
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-deepblue mb-6 tracking-tight drop-shadow-sm leading-tight">
            {title}
          </h1>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-8 mt-16">
        
        {/* Placeholder High-Quality Image relative to Theme */}
        <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 mb-16 border border-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop" 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Generic Content Block */}
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-deepblue mb-6">Discover the {title} Experience</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Welcome to the dedicated gallery for the {title} at Little Kingdom Senior Secondary School! This space forms an integral part of our dynamic learning environment, thoughtfully designed to foster growth, critical thinking, and lasting memories for every student.
          </p>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            We believe that true education extends far beyond textbooks. Through our carefully curated experiences, students engage in practical activities, develop key social skills, and embrace opportunities that build strong character and leadership. 
            Enjoy this extended gallery to witness the energy and passion that fills our incredible campus every single day!
          </p>
        </div>

        {/* Sub-gallery Grids */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 border-t border-gray-100 pt-16">
          <div className="col-span-full mb-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-deepblue">More Highlights</h3>
            <p className="text-gray-500 mt-2">More photos will be uploaded here soon.</p>
          </div>
          {[1, 2, 3].map((item) => (
             <div key={item} className="aspect-[4/3] bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 hover:border-primary/20 transition-colors shadow-sm">
                <div className="text-center text-gray-400 p-6">
                  <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-40 text-primary" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Coming Soon</span>
                </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail;
