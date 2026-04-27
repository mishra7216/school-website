import React, { useEffect } from 'react';
import { Quote } from 'lucide-react';

const AboutPage = () => {
  // Ensure the page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header Section */}
      <div className="bg-lightblue/50 py-24 relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Journey & Philosophy</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-deepblue mb-8 tracking-tight drop-shadow-sm leading-tight">
            About Us
          </h1>
          <div className="w-24 h-1.5 bg-primary rounded-full"></div>
        </div>
      </div>

      {/* History & Director Block */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 mt-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Main Text Body */}
          <div className="lg:w-2/3 prose prose-lg prose-blue text-gray-700 max-w-none">
            <h2 className="text-3xl font-extrabold text-deepblue mb-8">The LKPS Foundation</h2>
            
            <p className="mb-6 leading-relaxed text-justify">
              Founded in 2009, Little Kingdom Public School began its journey under the visionary leadership of Pravin Kumar Mishra, who started the institution with just five rooms and a handful of students. What began as a humble initiative, driven by dedication and belief in quality education, steadily grew with the trust and support of parents and the consistent standard of learning we delivered.
            </p>
            
            <p className="mb-6 leading-relaxed text-justify">
              Today, LKPS stands proudly as the largest educational institute in Baihar and one of the leading schools in the district—a transformation built not overnight, but through years of commitment, discipline, and academic excellence.
            </p>
            
            <p className="mb-6 leading-relaxed text-justify">
              Over the past five years, our students have consistently achieved outstanding results across all board classes. A remarkable highlight of our journey has been producing the District Topper in Class 10th in consecutive academic years—2023–24 and 2025–26, a testament to our focused approach and strong academic foundation.
            </p>
            
            <p className="mb-6 leading-relaxed text-justify">
              Despite being located in a town, LKPS is distinguished by its exceptional teaching faculty. Our teachers are fluent in English and highly proficient in their respective subjects, ensuring clarity, confidence, and strong conceptual understanding among students. We have also appointed experienced educators from outside the state—subject experts who bring advanced teaching methodologies and a broader academic perspective. Their expertise directly reflects in the results we consistently produce.
            </p>
            
            <p className="mb-6 leading-relaxed text-justify">
              Our infrastructure is designed to support both academic and practical excellence. The school features a fully functional library that promotes reading and independent learning, along with well-equipped Chemistry and Physics laboratories that provide hands-on experience beyond textbooks. Our computer lab ensures that students stay technologically aware and prepared for the modern world.
            </p>
            
            <p className="mb-6 leading-relaxed text-justify">
              LKPS is also known for hosting the largest annual fest in the district, where students participate with immense enthusiasm and confidence. This grand event serves as a vibrant platform for creativity, expression, and talent, making learning a celebration beyond the classroom.
            </p>
            
            <p className="mb-6 leading-relaxed text-justify">
              We place equal importance on physical development. Our sports facilities include an Olympic-standard table tennis setup, a spacious green field for cricket and outdoor activities, and an indoor kabaddi hall equipped with interlock foam mats. These mats enhance safety by minimizing the risk of injuries, allowing students to play and train with both confidence and professional standards.
            </p>

            <blockquote className="mt-8 italic font-semibold text-deepblue text-xl border-l-4 border-primary pl-6 bg-lightblue/20 py-4 rounded-r-lg shadow-sm">
              From a small beginning in 2009 to becoming a leading institution today, Little Kingdom Public School continues to move forward with a clear vision—to provide quality education, nurture talent, and shape confident individuals ready to succeed in every aspect of life.
            </blockquote>
          </div>

          {/* Director Photo Sticky Sidebar */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 relative w-full sm:mx-auto max-w-sm lg:mx-0">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white mb-6 relative group">
              <img 
                src="/director-photo.jpg" 
                alt="Pravin Kumar Mishra, Director" 
                className="w-full h-96 object-cover bg-gray-100 transform group-hover:scale-105 transition-transform duration-500" 
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepblue/50 to-transparent"></div>
            </div>
            
            {/* Hovering Name Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-primary/10 border border-gray-100 text-center transform -translate-y-16 w-10/12 mx-auto relative z-10">
              <h3 className="text-xl font-extrabold text-deepblue">Pravin Kumar Mishra</h3>
              <p className="text-primary font-bold tracking-widest text-xs mt-1 uppercase">Founder & Director</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Principal's Desk Section using a Crushed White Paper texture */}
      <div className="mt-8 max-w-6xl mx-auto px-6 sm:px-8">
        <div 
          className="relative rounded-[2.5rem] p-10 sm:p-14 lg:p-20 shadow-xl overflow-hidden border border-gray-200"
          style={{
            // High quality crumpled white paper texture from Unsplash
            backgroundImage: "url('https://images.unsplash.com/photo-1603484477859-abe6a73f9366?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Subtle white fog to ensure the text remains super crisp against the texture */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center lg:justify-start">
              <Quote className="w-16 h-16 text-primary mb-8 drop-shadow-md" />
            </div>
            
            <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
              
              {/* Text Focus */}
              <div className="text-center lg:text-left flex-1">
                <span className="text-primary font-extrabold tracking-widest uppercase text-sm mb-3 block">Principal's Desk</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mb-8 drop-shadow-sm">A Message from the Principal</h2>
                <div className="prose prose-lg text-gray-800 italic font-serif leading-relaxed">
                  <p>
                    "At Little Kingdom Public School, we have been nurturing and empowering young minds since 2009. Our consistent academic results reflect the high standards of education we uphold. Beyond academics, we are deeply committed to instilling strong values, ensuring that every student grows with a sense of discipline, संस्कार , and moral integrity."
                  </p>
                </div>
                <div className="mt-8 border-l-4 border-primary pl-4">
                  <h3 className="font-extrabold text-xl text-deepblue">Varsha Mishra</h3>
                  <p className="text-primary font-bold tracking-widest text-xs mt-1 uppercase">Principal</p>
                </div>
              </div>
              
              {/* Principal Photo Block */}
              <div className="flex-shrink-0 relative w-56 h-56 lg:w-72 lg:h-72 mt-8 lg:mt-0 lg:ml-auto group">
                 <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl transform translate-x-4 translate-y-4"></div>
                 <img 
                    src="/principal-photo.jpg" 
                    alt="Principal" 
                    className="relative w-full h-full object-cover rounded-full border-[6px] sm:border-[8px] border-white shadow-2xl bg-gray-100 transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop' }} 
                 />
              </div>

            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AboutPage;
