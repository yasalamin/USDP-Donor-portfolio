import React from 'react';
import akfImage from '../assets/partnerss/AKF.png';
import akrspImage from '../assets/partnerss/AKRSP.jpg';
import apImage from '../assets/partnerss/AP.png';
import hrdImage from '../assets/partnerss/HRD.png';
import kadoImage from '../assets/partnerss/KADO.png';
import kiuImage from '../assets/partnerss/KIU.jpg';
import navttcImage from '../assets/partnerss/navttc.png';
import pmypImage from '../assets/partnerss/PMYP.png';
import ucImage from '../assets/partnerss/UC.png';

const partners = [
  { name: 'AKF', src: akfImage },
  { name: 'AKRSP', src: akrspImage },
  { name: 'AP', src: apImage },
  { name: 'HRD', src: hrdImage },
  { name: 'KADO', src: kadoImage },
  { name: 'KIU', src: kiuImage },
  { name: 'NAVTTC', src: navttcImage },
  { name: 'PMYP', src: pmypImage },
  { name: 'UC', src: ucImage },
];

export function PartnersMarquee() {
  return (
    <section className="pt-14 pb-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:pr-8 mb-4 md:mb-0 md:border-r border-gray-200 shrink-0">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">
              20+ Partners
            </h3>
          </div>
          
          <div className="flex overflow-hidden group flex-1 w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex shrink-0 animate-marquee items-center gap-12 md:gap-16 px-8 group-hover:[animation-play-state:paused] min-w-max">
              {[...partners, ...partners].map((partner, index) => (
                <img
                  key={index}
                  src={partner.src}
                  alt={partner.name}
                  className="h-10 md:h-12 w-[100px] md:w-[120px] object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}