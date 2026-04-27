import React, { useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeachersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teachers = [
    {
      name: "Varsha Mishra",
      designation: "Principal",
      image: "/principal-photo.jpg",
      subject: "Administration"
    },
    {
      name: "Mrs. Asna Qureshi",
      designation: "Kindergarten Head",
      image: "/Kindergarten Head.jpeg",
      subject: "Early Childhood Education"
    },
    {
      name: "Mrs. Aleena Francis",
      designation: "Head of Co-Curricular Development",
      image: "/aleena-francis.jpg",
      subject: "Arts, Culture & Sports"
    },
    {
      name: "Mr.Rohit Hanwat",
      designation: "Senior Science Teacher",
      image: "/teacher-1.jpg",
      subject: "Physics & Chemistry"
    },
    {
      name: "Senior Science Teacher",
      designation: "High School Science",
      image: "/highschoolscienceteacher.jpeg",
      subject: "Science"
    },
    {
      name: "Academic Coordinator",
      designation: "Academic Coordinator",
      image: "/academicco-ordinator.jpeg",
      subject: "Curriculum & Academics"
    },
    {
      name: "Math Teacher",
      designation: "Head of Mathematics",
      image: "/teacher-2.jpg",
      subject: "Mathematics"
    },
    {
      name: "Chandrabhan Bhagat",
      designation: "Computer Teacher",
      image: "/teacher-3.jpg",
      subject: ""
    },
    {
      name: "Mr.T.P Chaubey",
      designation: "Front Desk Representative",
      image: "/teacher-4.jpg",
      subject: ""
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16 sm:pb-24">
      {/* Header Banner */}
      <div className="bg-deepblue py-12 sm:py-20 relative overflow-hidden">
        {/* Subtle grid pattern background trick in tailwind */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#FFF 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-lightblue/70 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Our Faculty</span>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-sm">
            Know Your Teachers
          </h1>
          <p className="text-lightblue/90 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed px-2">
            Meet the dedicated, highly proficient subject experts shaping the future of Little Kingdom Senior Secondary School every single day.
          </p>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-4 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs sm:text-sm font-medium text-gray-400 flex items-center space-x-2">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-500">Academics</span>
          <span>/</span>
          <span className="text-primary font-bold">Know Your Teachers</span>
        </div>
      </div>

      {/* Teacher Layout Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-10">
          
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-40 sm:h-72 w-full overflow-hidden bg-gray-100">
                {/* Fallback image handler injected via onError on the img tag */}
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepblue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-8 text-center relative bg-white">
                {/* Floating Icon overlapping image */}
                <div className="absolute -top-5 sm:-top-7 left-1/2 -translate-x-1/2 bg-primary text-white p-2 sm:p-3 rounded-full shadow-lg border-4 border-white transform group-hover:rotate-12 transition-transform duration-300">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                
                <h2 className="text-sm sm:text-2xl font-extrabold text-deepblue mt-2 mb-1 truncate">{teacher.name}</h2>
                <h3 className="text-primary font-bold uppercase tracking-wider text-[9px] sm:text-xs mb-2 sm:mb-4 truncate">{teacher.designation}</h3>
                
                {teacher.subject && (
                  <div className="hidden sm:inline-block bg-lightblue/40 text-deepblue px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[8px] sm:text-[10px] font-extrabold uppercase tracking-widest mb-2 border border-primary/10">
                    {teacher.subject}
                  </div>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
      
    </div>
  );
};

export default TeachersPage;
