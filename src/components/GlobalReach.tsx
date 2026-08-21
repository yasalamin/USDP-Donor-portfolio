import React from 'react';
import { Globe, Linkedin, Code, Megaphone, Palette, Smartphone } from 'lucide-react';

import waheedImage from '../assets/Card.people/waheed.iqbal.jpg';
import tanveerImage from '../assets/Card.people/tanveer.salman.jpg';
import moinImage from '../assets/Card.people/moin.khan.jpg';
import maroofImage from '../assets/Card.people/maroof.karim.jpg';
import kamranImage from '../assets/Card.people/kamran.jan.jpg';

export function GlobalReach() {
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
    <section id="global-reach" className="py-10 lg:py-14 bg-gray-50 border-t border-gray-100 relative isolate overflow-hidden">
      {/* BACKGROUND BLOBS & DOTS */}
      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="1100" cy="450" r="400" fill="#E8DFF5" opacity="0.8" />
           <path d="M 0,800 C 300,750 500,900 600,900 L 0,900 Z" fill="#E8DFF5" opacity="0.6" />
        </svg>

        <svg className="absolute top-[40%] left-[5%] w-32 h-48 opacity-50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="impactDotsLeft" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#B7A8D6" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#impactDotsLeft)" />
        </svg>

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
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-brand text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 mb-3">
            <Globe className="w-3.5 h-3.5" /> Global Reach & Impact
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black tracking-tight mb-3 uppercase">
            Graduates Connecting to the <span className="text-brand">World</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
            Bridging Gilgit-Baltistan to the global tech economy. Our alumni leverage market-aligned skills to land remote developer roles, manage international marketing campaigns, and serve clients across North America, Europe, and the Middle East.
          </p>
        </div>

        {/* Responsive Un-Congested 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-4 pb-4">
          {alumni.map((item, index) => (
            <div 
              key={index} 
              className="relative rounded-3xl bg-white border border-gray-200/80 p-6 shadow-sm hover:shadow-xl hover:border-brand/40 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              {/* Overlapping top badge icon */}
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shadow-md border-2 border-white group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-5 h-5" />
              </div>

              <div className="pt-2 text-center flex flex-col items-center">
                {/* Company logo + flag */}
                <div className="flex items-center justify-center gap-2 mb-3 h-8 w-full">
                  <img src={item.companyLogo} alt={`${item.company} logo`} className="max-w-[120px] max-h-7 w-auto object-contain" />
                  <img src={item.countryFlag} alt={`${item.company} country flag`} className="w-7 h-4 rounded-sm object-cover shadow-sm" />
                </div>

                {/* Role title */}
                <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug mb-1 min-h-[44px] flex items-center justify-center">
                  {item.role}
                </h3>

                {/* Photo avatar */}
                <div className="w-24 h-24 rounded-full overflow-hidden my-3 border-4 border-brand/10 group-hover:border-brand/30 shadow-inner flex items-center justify-center bg-gray-50 transition-colors duration-300">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Name */}
                <span className="text-base sm:text-lg font-black text-gray-900 mb-4">
                  {item.name}
                </span>
              </div>

              {/* LinkedIn Button */}
              {item.linkedin && (
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 w-full py-2.5 px-4 bg-brand/10 hover:bg-brand text-brand hover:text-white font-bold rounded-full transition-colors duration-200 uppercase tracking-widest text-xs shadow-none hover:shadow-md"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
