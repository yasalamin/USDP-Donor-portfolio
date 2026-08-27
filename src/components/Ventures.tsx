import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import ali_muhammad from '../assets/founders/ali_muhammad.jpg';
import ehsaam_baig from '../assets/founders/ehsaam_baig.jpg';
import hadi_hussain from '../assets/founders/hadi_hussain.jpg';
import irfan from '../assets/founders/irfan.jpg';
import jamila from '../assets/founders/jamila.jpg';
import masroor_ali_khan from '../assets/founders/masroor_ali_ khan.jpg';
import naveed from '../assets/founders/naveed.jpg';
import shoaib from '../assets/founders/shoaib.jpg';
import waseem from '../assets/founders/waseem.jpg';
import zubair from '../assets/founders/zubair.jpg';

import alphalogix from '../assets/startups/alphalogix.png';
import artilect from '../assets/startups/artilect.png';
import asiandevs from '../assets/startups/asiandevs.webp';
import cloudlem from '../assets/startups/cloudlem.jpg';
import dlight from '../assets/startups/DLIGHT.jpg';
import kohminds from '../assets/startups/kohminds.png';
import macam_services from '../assets/startups/Macam Services.jpg';
import marketix_international from '../assets/startups/marketix international.jpg';
import northnine from '../assets/startups/northnine.jpg';

const row1 = [ali_muhammad, ehsaam_baig, hadi_hussain, irfan, jamila];
const row2 = [masroor_ali_khan, naveed, shoaib, waseem, zubair];

const startupLogos = [
  { name: 'AlphaLogix', src: alphalogix, url: 'https://techalphalogix.com/' },
  { name: 'Artilect', src: artilect, url: 'https://artilectsolutions.com/' },
  { name: 'AsianDevs', src: asiandevs, url: 'https://asiandevs.com/' },
  { name: 'Cloudlem', src: cloudlem, url: 'https://www.cloudlem.com/' },
  { name: 'DLIGHT', src: dlight },
  { name: 'Kohminds', src: kohminds, url: 'https://kohminds.com/' },
  { name: 'Macam Services', src: macam_services },
  { name: 'Marketix Int.', src: marketix_international, url: 'https://marketixinternational.com/' },
  { name: 'Northnine', src: northnine, url: 'https://www.linkedin.com/company/the-north-nine/?originalSubdomain=pk' },
];

export function Ventures() {
  return (
    <section className="relative pt-10 sm:pt-12 lg:pt-16 pb-2 bg-white border-t border-gray-100 overflow-hidden isolate">
      {/* Background blobs recreated from Hero section */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-60" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M 850,0 C 700,200 800,600 1440,450 L 1440,0 Z" fill="#E8DFF5" />
           <path d="M 0,580 C 250,550 450,900 1000,900 L 0,900 Z" fill="#E8DFF5" />
        </svg>
        <svg className="absolute top-[8%] right-0 lg:right-[5%] w-32 h-32 lg:w-40 lg:h-40 opacity-40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotsTopRefVen" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#B7A8D6" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dotsTopRefVen)" />
        </svg>
        <svg className="absolute bottom-[5%] left-[2%] w-20 h-24 lg:w-24 lg:h-32 opacity-40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotsBotRefVen" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#B7A8D6" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dotsBotRefVen)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block bg-brand text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4">
              Entrepreneurship & Ventures
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-4 uppercase">
              Fostering the Next Wave of <span className="text-brand">Founders</span>
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
              We don't just prepare youth for jobs—we empower them to create them. Discover the startups launched by USDP alumni who are driving economic growth and creating jobs in Gilgit-Baltistan and beyond.
            </p>
          </div>
          
          {/* Right Side: Startup Circles */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="relative inline-block mb-8 self-start lg:self-center">
              <div className="absolute inset-0 bg-brand/10 translate-x-2 translate-y-2 -z-10"></div>
              <div className="bg-white border-2 border-brand px-6 py-4 relative z-10 shadow-sm">
                <h3 className="text-xl md:text-2xl font-black text-black tracking-tight uppercase">
                  <span className="text-brand">30+</span> Founders
                </h3>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 lg:items-center">
            <div className="flex items-center -space-x-3">
              {row1.map((imgSrc, i) => (
                <div 
                  key={`row1-${i}`} 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white bg-gray-200 shadow-sm flex-shrink-0 relative z-10 hover:z-20 transition-transform hover:scale-110 cursor-pointer overflow-hidden"
                >
                  <img src={imgSrc} alt={`Founder ${i+1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex items-center -space-x-3 ml-4">
              {row2.map((imgSrc, i) => (
                <div 
                  key={`row2-${i}`} 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white bg-gray-200 shadow-sm flex-shrink-0 relative z-10 hover:z-20 transition-transform hover:scale-110 cursor-pointer overflow-hidden"
                >
                  <img src={imgSrc} alt={`Founder ${i+6}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      
      {/* Static startup logo card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-10">
        <div className="rounded-2xl border border-brand/20 bg-white p-5 sm:p-7 shadow-sm">
          <div className="text-center mb-5">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand">USDP Alumni Ventures</p>
            <h3 className="mt-1 text-lg sm:text-xl font-black uppercase tracking-tight text-black">Startups building what’s next</h3>
          </div>
          <div className="flex w-full items-center gap-4 overflow-x-auto pb-2 sm:gap-5 lg:gap-6">
            {startupLogos.map((startup) => {
              const logo = (
                <img
                  src={startup.src}
                  alt={startup.name}
                  className="max-h-11 w-full object-contain"
                />
              );
              const className = "flex h-16 min-w-[110px] flex-1 items-center justify-center rounded-xl border border-gray-100 bg-gray-50/60 px-3 transition-colors hover:border-brand/40 hover:bg-brand/5 sm:min-w-0";
              return startup.url ? (
                <a key={startup.name} href={startup.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${startup.name}`} className={className}>{logo}</a>
              ) : (
                <div key={startup.name} className={className}>{logo}</div>
              );
            })}
          </div>

          {/* Learn More About Startups Button */}
          <div className="mt-6 text-center pt-2">
            <Link
              to="/startups"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand text-white font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-brand-hover transition-all duration-200 shadow-sm hover:shadow-md rounded-full group"
            >
              Learn more about startups
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Global Impact Stats Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8 relative z-10">
        <div className="bg-brand rounded-2xl p-4 lg:p-6 text-center text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row justify-around items-center gap-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="flex flex-col items-center w-full">
              <span className="text-xl md:text-2xl font-black mb-0.5 tracking-tighter">
                <AnimatedCounter value={30} suffix="+" />
              </span>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/80">Countries Reached</span>
            </div>
            <div className="flex flex-col items-center w-full pt-3 md:pt-0">
              <span className="text-xl md:text-2xl font-black mb-0.5 tracking-tighter">
                <AnimatedCounter value={20} prefix="$" suffix="M+" />
              </span>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/80">Remote Foreign Earnings Generated</span>
            </div>
            <div className="flex flex-col items-center w-full pt-3 md:pt-0">
              <span className="text-xl md:text-2xl font-black mb-0.5 tracking-tighter">
                <AnimatedCounter value={200} suffix="+" />
              </span>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/80">Of International Clients Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
