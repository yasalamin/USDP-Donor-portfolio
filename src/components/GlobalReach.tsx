import React, { useState } from 'react';
import { Globe, Linkedin, Code, Megaphone, Palette, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

import waheedImage from '../assets/Card.people/waheed.iqbal.jpg';
import tanveerImage from '../assets/Card.people/tanveer.salman.jpg';
import moinImage from '../assets/Card.people/moin.khan.jpg';
import maroofImage from '../assets/Card.people/maroof.karim.jpg';
import kamranImage from '../assets/Card.people/kamran.jan.jpg';

export function GlobalReach() {
  const [activeIndex, setActiveIndex] = useState(1);

  const alumni = [
    {
      role: 'Digital Marketing Executive',
      company: 'Global Hotel Alliance',
      companyLogo: '/international/Global Hotel Allience.png',
      countryFlag: '/international/Global Hotel Allience Flag.webp',
      name: 'Wahid Iqbal',
      image: waheedImage,
      icon: Megaphone,
      linkedin: 'https://www.linkedin.com/in/waheed-iqbal1/'
    },
    {
      role: 'Senior Consultant Mobile App Development',
      company: 'Saudi Investment Bank',
      companyLogo: '/international/Saudi Investment Bank.png',
      countryFlag: '/international/Saudi Investment Bank Flag.webp',
      name: 'Tanveer Salman',
      image: tanveerImage,
      icon: Smartphone,
      linkedin: 'https://www.linkedin.com/in/tanveersalman/'
    },
    {
      role: 'Product Designer',
      company: 'StratAgile',
      companyLogo: '/international/stratagile.png',
      countryFlag: '/international/stratagile flag.webp',
      name: 'Moin Khan',
      image: moinImage,
      icon: Palette,
      linkedin: 'https://www.linkedin.com/in/moinhaikal/'
    },
    {
      role: 'Mobile App Developer',
      company: 'US Startup',
      companyLogo: '/international/gilgit app.png',
      countryFlag: '/international/gilgit app flag.webp',
      name: 'Maroof Karim',
      image: maroofImage,
      icon: Smartphone,
      linkedin: 'https://www.linkedin.com/in/maroof-karim-918788228/'
    },
    {
      role: 'Full Stack Engineer',
      company: 'Plugit Finland',
      companyLogo: '/international/plugit.png',
      countryFlag: '/international/plugit flag.webp',
      name: 'Kamran Jan',
      image: kamranImage,
      icon: Code,
      linkedin: 'https://www.linkedin.com/in/kamran-jan-khalilz/'
    },
    {
      role: 'Full Stack Developer',
      company: 'Ansar Gallery',
      companyLogo: '/international/waseemcompany.png',
      countryFlag: '/international/waseemflag.webp',
      name: 'Waseem Kashif',
      image: '/international/waseem.jpg',
      icon: Code,
      linkedin: 'https://www.linkedin.com/in/waseem-kashif/'
    }
  ];

  return (
    <section id="global-reach" className="py-4 lg:py-6 bg-gray-50 border-t border-gray-100 relative isolate overflow-hidden">
      {/* UNIQUE BACKGROUND BLOBS & DOTS for Impact Page */}
      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
           {/* Center-Right Large Circular Blob */}
           <circle cx="1100" cy="450" r="400" fill="#E8DFF5" opacity="0.8" />
           {/* Bottom-Left subtle curve */}
           <path d="M 0,800 C 300,750 500,900 600,900 L 0,900 Z" fill="#E8DFF5" opacity="0.6" />
        </svg>

        {/* Center Left Dots */}
        <svg className="absolute top-[40%] left-[5%] w-32 h-48 opacity-50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="impactDotsLeft" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#B7A8D6" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#impactDotsLeft)" />
        </svg>

        {/* Top Right Dots */}
        <svg className="absolute top-[10%] right-[15%] w-48 h-32 opacity-50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="impactDotsRight" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#B7A8D6" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#impactDotsRight)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 bg-brand text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 mb-2">
            <Globe className="w-3.5 h-3.5" /> Global Reach & Impact
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-black tracking-tight mb-2 uppercase">
            Graduates Connecting to the <span className="text-brand">World</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
            Bridging Gilgit-Baltistan to the global tech economy. Our alumni leverage market-aligned skills to land remote developer roles, manage international marketing campaigns, and serve clients across North America, Europe, and the Middle East.
          </p>
        </div>

        {/* Carousel Grid */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-3 pt-6 mb-6 min-h-[300px]">
          {alumni.map((item, index) => {
            const isActive = index === activeIndex;
            const title = item.role;
            const name = item.name;

            return (
              <div 
                key={index} 
                className={`relative rounded-3xl cursor-pointer flex-shrink-0 w-full transform-gpu transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
                  isActive 
                    ? 'bg-brand text-white shadow-2xl scale-100 z-20 pt-10 pb-5 px-5 max-w-[300px] md:w-[300px] lg:w-[320px] xl:w-[340px]' 
                    : 'bg-brand/10 text-gray-800 shadow-sm scale-95 z-10 pt-8 pb-3 px-4 max-w-[260px] md:w-[240px] lg:w-[260px] xl:w-[280px] hover:bg-brand/20'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {/* Overlapping Icon */}
                <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 transition-all duration-500 ease-out ${
                  isActive ? 'bg-white border-brand text-brand' : 'bg-white border-gray-100 text-brand/60'
                }`}>
                  <item.icon className="w-5 h-5" />
                </div>

                <div className="mt-2 text-center flex flex-col h-full">
                  <h3 className={`text-sm sm:text-base font-black leading-tight mb-0.5 transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                    {title}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-3 h-8">
                    <img src={item.companyLogo} alt={`${item.company} logo`} className="max-w-[110px] max-h-7 w-auto object-contain" />
                    <img src={item.countryFlag} alt={`${item.company} country flag`} className="w-8 h-5 rounded-sm object-cover shadow-sm" />
                  </div>

                  <div className="flex flex-col items-center justify-center py-2 sm:py-4 mb-2">
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-3 border-4 transition-all duration-500 ease-out ${isActive ? 'border-white/20 bg-white/10' : 'border-brand/10 bg-brand/5'} flex items-center justify-center`}>
                       {item.image ? (
                         <img src={item.image} alt={name} className="w-full h-full object-cover" />
                       ) : (
                         <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors duration-500 ${isActive ? 'text-white/50' : 'text-brand/40'}`}>
                           Photo
                         </span>
                       )}
                    </div>
                    <span className={`text-base sm:text-lg font-black transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                      {name}
                    </span>
                  </div>

                  <div className="mt-auto transition-all duration-500 ease-out h-8 flex items-center justify-center">
                    {isActive && item.linkedin ? (
                      <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-1.5 w-full py-2 px-4 bg-white text-brand font-black rounded-full hover:bg-gray-50 transition-colors uppercase tracking-widest text-[10px] shadow-md animate-fade-in">
                        <Linkedin className="w-3.5 h-3.5" />
                        LinkedIn
                      </a>
                    ) : (
                      <div className="w-full h-8 hidden lg:block"></div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
