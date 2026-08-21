import React from 'react';
import { Users, MonitorPlay, Briefcase, Network, Code, TrendingUp, BarChart3, Palette, Quote } from 'lucide-react';

export function PractitionerMentors() {
  const pillars = [
    {
      title: 'Live Workflows, Zero Textbooks',
      desc: 'Master the exact tech stacks and production frameworks used in modern agencies today.',
      icon: MonitorPlay
    },
    {
      title: 'Real Client Work, Real Impact',
      desc: 'Assignments are modeled on live client briefs. Students solve actual engineering challenges.',
      icon: Briefcase
    },
    {
      title: 'Direct Pipeline to Industry Hiring',
      desc: 'Top-performing trainees get access to freelance projects, internships, and remote job placements.',
      icon: Network
    }
  ];

  const instructors = [
    {
      track: 'Full-Stack Web Development',
      name: 'Yasal Amin',
      role: 'Senior Full-Stack Engineer & Product Architect',
      competencies: 'React.js, Node.js, Cloud Architectures, Git & Version Control',
      quote: "We don't study syntax on whiteboards. From day one, my students deploy production code to live cloud servers, manage Git repositories, and debug real-world web applications.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    {
      track: 'Digital Marketing & Growth Performance',
      name: 'Ali Khan',
      role: 'Head of Growth & Performance Marketing',
      competencies: 'Technical SEO, GA4 Analytics, Google Search Console, Paid Acquisition',
      quote: "Digital marketing is about moving real numbers. My trainees optimize live web assets, manage search strategies, and analyze user behavior to deliver measurable commercial growth.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      track: 'AI Financial Analytics & Power BI',
      name: 'Tariq Hussain',
      role: 'Business Intelligence & Data Solutions Consultant',
      competencies: 'Power BI Dashboards, Python Data Cleaning, Financial Modeling',
      quote: "We build automated financial models and interactive dashboards for regional enterprises so every graduate leaves with a high-value portfolio ready for global remote clients.",
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
    },
    {
      track: 'UI/UX & Digital Product Design',
      name: 'Amina Khan',
      role: 'Lead Product Designer',
      competencies: 'Figma Design Systems, Wireframing, Usability Testing, Product Architecture',
      quote: "Students design and critique real product interfaces in class. You learn how to solve user experience problems and defend design decisions using international agency standards.",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section className="pt-8 pb-6 bg-white border-t border-gray-100 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Orange Tag */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-brand text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-1">
            <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Our Practitioner Mentors
          </div>
        </div>

        {/* Header & Value Pillars */}
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Header - Left Side */}
          <div className="max-w-2xl order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight mb-3 sm:mb-4 uppercase leading-[1.1]">
              Taught by Industry <span className="text-brand">Professionals</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
              Skip theoretical lectures. The uConnect Skill Development Program (USDP) hands over classrooms exclusively to active tech practitioners—senior software engineers, performance marketers, and data consultants who run live client operations every single day.
            </p>
          </div>

          {/* Core Values - Connecting Circular Bullets - Right Side */}
          <div className="relative w-full max-w-lg lg:ml-auto order-1 lg:order-2 pt-2 lg:pt-0">
            {/* Connecting Line */}
            <div className="absolute top-[22px] left-[16%] right-[16%] h-[1px] sm:h-[1.5px] bg-brand/20 z-0 hidden sm:block"></div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {pillars.map((pillar, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-brand/20 text-brand flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-300 mb-2 shadow-sm relative z-10">
                    <pillar.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <h4 className="text-[10px] sm:text-xs font-bold text-black mb-1 leading-tight px-1">
                    {pillar.title}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 leading-relaxed max-w-[130px] mx-auto hidden sm:block">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Featured Instructors */}
        <div>
          {/* Infinite Marquee */}
          <div className="relative flex overflow-hidden py-4 bg-white border-y border-gray-100 group">
            <div className="flex animate-marquee gap-12 items-center shrink-0 w-max group-hover:[animation-play-state:paused]">
              {[...instructors, ...instructors, ...instructors, ...instructors].map((instructor, i) => (
                <div key={i} className="flex items-center gap-4 shrink-0 px-4 cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand/20 shadow-sm">
                    <img src={instructor.image} alt={instructor.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">{instructor.name}</h5>
                    <p className="text-brand font-bold text-[10px] uppercase tracking-wider">{instructor.track}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Repeat for seamless loop */}
            <div className="flex animate-marquee gap-12 items-center shrink-0 w-max group-hover:[animation-play-state:paused]" aria-hidden="true">
              {[...instructors, ...instructors, ...instructors, ...instructors].map((instructor, i) => (
                <div key={`dup-${i}`} className="flex items-center gap-4 shrink-0 px-4 cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand/20 shadow-sm">
                    <img src={instructor.image} alt={instructor.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">{instructor.name}</h5>
                    <p className="text-brand font-bold text-[10px] uppercase tracking-wider">{instructor.track}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gradient faded edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          </div>


        </div>

      </div>
    </section>
  );
}