import { Globe2 } from 'lucide-react';

export function SDGs() {
  const sdgs = [
    {
      id: 4,
      title: "Quality Education",
      image: "/sdgs/sdg4.jpg",
      desc: "Ensuring inclusive and equitable quality education and promoting lifelong learning."
    },
    {
      id: 8,
      title: "Decent Work",
      image: "/sdgs/sdg8.png",
      desc: "Promoting sustained, inclusive economic growth and productive employment."
    },
    {
      id: 9,
      title: "Innovation",
      image: "/sdgs/sdg9.png",
      desc: "Building resilient infrastructure and fostering sustainable innovation."
    },
    {
      id: 10,
      title: "Reduced Inequalities",
      image: "/sdgs/sdg10.webp",
      desc: "Reducing inequality within and among countries through skill empowerment."
    },
    {
      id: 17,
      title: "Partnerships",
      image: "/sdgs/sdg17.png",
      desc: "Strengthening the means of implementation for sustainable development."
    }
  ];

  return (
    <section className="relative pt-6 pb-12 bg-white font-sans overflow-hidden isolate">
      {/* Background blobs recreated from Hero section */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-60" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M 850,0 C 700,200 800,600 1440,450 L 1440,0 Z" fill="#E8DFF5" />
           <path d="M 0,580 C 250,550 450,900 1000,900 L 0,900 Z" fill="#E8DFF5" />
        </svg>
        <svg className="absolute top-[8%] right-0 lg:right-[5%] w-32 h-32 lg:w-40 lg:h-40 opacity-40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotsTopRefSdg" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#B7A8D6" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dotsTopRefSdg)" />
        </svg>
        <svg className="absolute bottom-[5%] left-[2%] w-20 h-24 lg:w-24 lg:h-32 opacity-40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotsBotRefSdg" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#B7A8D6" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dotsBotRefSdg)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-brand text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-1 mb-3">
            <Globe2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Our Commitment
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-3 uppercase leading-[1.1]">
            UN Sustainable Development <span className="text-brand">Goals</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
            Our program is directly aligned with the United Nations SDGs, fostering sustainable economic growth, reducing inequalities, and building strong global partnerships.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {sdgs.map((sdg) => (
            <div key={sdg.id} className="flex flex-col items-center text-center max-w-[140px] group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-sm mb-4 border border-gray-200 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 bg-white p-2">
                <img src={sdg.image} alt={sdg.title} className="w-full h-full object-contain" />
              </div>
              <h4 className="text-[10px] sm:text-xs font-bold text-black mb-1.5 leading-tight px-1">
                {sdg.title}
              </h4>
              <p className="text-[9px] sm:text-[10px] text-gray-500 leading-relaxed hidden sm:block">
                {sdg.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
