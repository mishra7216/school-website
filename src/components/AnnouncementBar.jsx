import React from 'react';

const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-white text-xs md:text-sm font-medium py-2 px-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto text-center tracking-wide">
        Admissions Open 2026–27 <span className="hidden sm:inline">|</span><span className="inline sm:hidden"><br/></span> Limited Seats Available
      </div>
    </div>
  );
};

export default AnnouncementBar;
