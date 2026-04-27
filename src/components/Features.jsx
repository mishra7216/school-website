import React from 'react';
import { BookOpen, Palette, Building2, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-7 w-7 text-white" />,
      title: 'Quality Education',
      description: 'A comprehensive curriculum designed to build strong fundamentals and critical thinking skills.'
    },
    {
      icon: <Palette className="h-7 w-7 text-white" />,
      title: 'Co-curricular Activities',
      description: 'Extensive programs in sports, arts, and music for well-rounded personality growth.'
    },
    {
      icon: <Building2 className="h-7 w-7 text-white" />,
      title: 'Modern Infrastructure',
      description: 'Well-equipped labs, spacious digital classrooms, and extensive rich library resources.'
    },
    {
      icon: <TrendingUp className="h-7 w-7 text-white" />,
      title: 'Student Development',
      description: 'Focusing intensely on leadership qualities, soft skills, and deep ethical values.'
    }
  ];

  return (
    <section className="bg-gray-50/50 py-16 sm:py-20 lg:py-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20 flex flex-col items-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Core Offerings</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deepblue mb-4 sm:mb-6 tracking-tight">
            Why Choose Little Kingdom?
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
            We offer a dynamic and supportive learning ecosystem designed to bring out the absolute best in every child.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 lg:gap-10">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-center sm:items-start text-center sm:text-left bg-white rounded-3xl p-8 hover:bg-lightblue/50 transition-colors duration-500 shadow-sm border border-gray-100 hover:border-primary/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-deepblue mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
