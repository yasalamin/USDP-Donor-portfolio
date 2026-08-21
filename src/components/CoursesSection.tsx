import { BookOpen, Users, Code, LineChart, Calculator, PieChart, ShoppingCart, PenTool, Bot, DollarSign, Cloud } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export function CoursesSection() {
  const stats = [
    { label: 'Total courses', value: 30, suffix: '+' },
    { label: 'Locations', value: 5, suffix: '+' },
    { label: 'Mentors', value: 20, suffix: '+' },
  ];

  const courses = [
    { title: 'Web Development', icon: Code },
    { title: 'Digital Marketing & Search Engine Optimization (SEO)', icon: LineChart },
    { title: 'Accounting & Bookkeeping', icon: Calculator },
    { title: 'AI Financial Analyst with Power BI', icon: PieChart },
    { title: 'AI Powered eCommerce', icon: ShoppingCart },
    { title: 'Graphic Design & Video Editing', icon: PenTool },
    { title: 'AI for Everyone', icon: Bot },
    { title: 'Earning Money Through Freelancing', icon: DollarSign },
    { title: 'Cloud Solutions Architecture', icon: Cloud },
  ];

  return (
    <section className="pt-12 pb-24 bg-gray-50 border-t border-gray-200 relative isolate overflow-hidden" id="courses">
      {/* UNIQUE BACKGROUND BLOBS & DOTS for Programs Page */}
      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
           {/* Center-spanning wavy blob across the middle-top */}
           <path d="M -200,300 C 200,100 600,400 1000,200 C 1400,0 1600,300 1600,300 L 1600,-200 L -200,-200 Z" fill="#E8DFF5" opacity="0.6" />
        </svg>

        {/* Scattered Dots left */}
        <svg className="absolute top-[20%] left-[2%] lg:left-[10%] w-40 h-40 opacity-40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="coursesDotsLeft" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2.5" fill="#B7A8D6" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#coursesDotsLeft)" />
        </svg>
        
        {/* Scattered Dots right */}
        <svg className="absolute bottom-[10%] right-[2%] lg:right-[8%] w-32 h-32 opacity-40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="coursesDotsRight" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2.5" fill="#B7A8D6" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#coursesDotsRight)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Numeric Stats Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="text-6xl md:text-7xl font-black text-brand mb-4 tracking-tighter">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-lg font-bold text-black uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Remote Locations Map */}
        <div
          className="group relative max-w-7xl mx-auto mb-12 overflow-hidden bg-transparent transition-transform duration-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-brand/30"
          tabIndex={0}
          aria-label="Interactive map of USDP remote locations"
        >
          <img
            src="/GBMAPP-transparent.png"
            alt="Map showing USDP remote locations across Gilgit-Baltistan"
            className="block h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Courses Cards Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-brand text-white text-sm font-bold uppercase tracking-widest px-4 py-1.5 mb-6">
            Our Programs
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight uppercase">
            Courses <span className="text-brand">Offered</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-white p-6 border border-gray-200 hover:border-brand transition-colors duration-300 rounded-sm shadow-sm hover:shadow-md group flex items-start gap-5 cursor-pointer"
            >
              <div className="shrink-0 bg-gray-50 p-3 rounded-full group-hover:bg-brand transition-colors duration-300">
                <course.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-black pt-2 leading-tight group-hover:text-brand transition-colors duration-300">
                {course.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
