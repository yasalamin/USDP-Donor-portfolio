import React from 'react';
import { Route } from 'lucide-react';

export function ProcessJourney() {
  const steps = [
    {
      num: '01',
      title: 'Outreach',
      desc: 'Universities, communities & youth orgs identify motivated participants.'
    },
    {
      num: '02',
      title: 'Selection',
      desc: 'Assessed on background, digital literacy & career aspiration.'
    },
    {
      num: '03',
      title: 'Training',
      desc: 'Technical + professional skills via project-based learning.'
    },
    {
      num: '04',
      title: 'Practical Exp.',
      desc: 'Capstones & real assignments build a working portfolio.'
    },
    {
      num: '05',
      title: 'Career Support',
      desc: 'Resumes, interviews, freelancing & startup fundamentals.'
    },
    {
      num: '06',
      title: 'Employment',
      desc: 'Job, freelance income, or a founded business — then alumni engagement.'
    }
  ];

  return (
    <section className="pt-6 pb-8 lg:pt-6 lg:pb-10 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-brand text-white text-xs font-bold uppercase tracking-widest px-3 py-1 mb-3">
            <Route className="w-3.5 h-3.5" /> The Pathway
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-[1.05] tracking-tight mb-3 uppercase">
            Our Transformation <span className="text-brand">Process</span>
          </h2>
          <p className="text-xs lg:text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            A structured, step-by-step journey from initial outreach to successful global employment. We guide our participants through rigorous training and hands-on experience.
          </p>
        </div>

        {/* Desktop Container */}
        <div className="hidden md:flex flex-col w-full">
           {/* SVG and Dots Container */}
           <div className="relative w-full h-[140px] mb-8">
             
             {/* The slanted line */}
             <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none text-brand" preserveAspectRatio="none">
                {/* 
                  Line goes from bottom-left of 1st col to top-left of 6th col.
                  Using 84% as an approximation for the 6th column's start point. 
                */}
                <line x1="6px" y1="100%" x2="84%" y2="0%" stroke="currentColor" strokeWidth="2" />
             </svg>
             
             {/* The dots */}
             <div className="absolute inset-0 flex gap-6">
                {steps.map((_, i) => (
                  <div key={i} className="flex-1 relative">
                     <div 
                       className="absolute w-3.5 h-3.5 bg-black rounded-full shadow-[0_0_0_4px_white] z-10" 
                       style={{ top: `calc(${100 - (i * 20)}% - 7px)`, left: '0' }}
                     />
                  </div>
                ))}
             </div>
           </div>

           {/* Text Container */}
           <div className="flex w-full gap-6">
              {steps.map((step, index) => (
                 <div key={index} className="flex-1">
                    <div className="text-brand font-black text-xs mb-1 font-mono">
                      {step.num}
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2 tracking-tight leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed pr-2">
                      {step.desc}
                    </p>
                 </div>
              ))}
           </div>
        </div>

        {/* Mobile Container */}
        <div className="md:hidden flex flex-col gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col relative z-10">
              
              {/* Mobile Timeline Graphic */}
              <div className="flex flex-col mb-3 relative h-6">
                <div className="w-3 h-3 rounded-full bg-black absolute top-1 left-0 z-10 shadow-[0_0_0_3px_white]" />
                {index < steps.length - 1 && (
                  <div className="absolute top-3 left-[5px] w-[2px] h-[100px] bg-brand -z-0" />
                )}
              </div>
              
              <div className="text-brand font-black text-xs mb-1 font-mono pl-6">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-black mb-1 tracking-tight pl-6">
                {step.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed pl-6">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}