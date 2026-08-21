export function Timeline() {
  const milestones = [
    { year: '2018', title: 'Program Inception', desc: 'Launched with 50 students in Web Development.' },
    { year: '2020', title: 'Corporate Partners', desc: 'Partnered with 10 tech giants for curriculum design.' },
    { year: '2022', title: 'National Expansion', desc: 'Expanded to 5 major cities across the region.' },
    { year: '2024', title: '10,000 Milestone', desc: 'Crossed 10,000 trained professionals globally.' },
  ];

  return (
    <section id="partners" className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-16 text-center">
          Our Journey
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-brand -translate-y-1/2 z-0"></div>
          
          {/* Vertical Line (Mobile) */}
          <div className="block md:hidden absolute top-0 left-8 w-1 h-full bg-brand z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-row md:flex-col items-start md:items-center relative group">
                {/* Node */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand border-4 border-white shadow-sm md:mx-auto md:mb-6 mt-1 md:mt-0 relative z-10 transition-transform group-hover:scale-125"></div>
                
                {/* Content */}
                <div className="ml-8 md:ml-0 md:text-center">
                  <span className="block text-brand font-black text-2xl mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}