import React from 'react';
import { Quote } from 'lucide-react';

export function FoundersMessage() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content - Left Side */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-brand text-white text-sm font-bold uppercase tracking-widest px-4 py-1.5 mb-8 w-max">
              Founder's Message
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-8 leading-[1.1]">
              A Vision for the <span className="text-brand">Future</span>
            </h2>
            
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-brand/20" />
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-6 relative z-10 pl-6">
                "Our goal with uConnect was never just to teach skills. It was to build a bridge between local talent and global opportunities. We saw immense potential in our communities that was being overlooked simply due to geography. By bringing industry practitioners directly into the classroom and focusing on real-world agency workflows, we are not just training students—we are launching careers and transforming the local tech ecosystem."
              </p>
            </div>
            
            <div className="mt-8 pl-6 border-l-4 border-brand">
              <h4 className="text-2xl font-black text-black tracking-tight">Ejaz Karim</h4>
              <p className="text-brand font-bold uppercase tracking-widest text-sm mt-1">Founder & CEO, uConnect</p>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="lg:w-1/2 relative w-full">
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="/Founder.Ejaz.jpg" 
                alt="Ejaz Karim, Founder and CEO of uConnect" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
