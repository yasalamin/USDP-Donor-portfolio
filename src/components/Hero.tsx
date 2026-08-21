import { Link } from "react-router-dom";
import { ArrowRight, Users, Briefcase, Award, BookOpen } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

function AnimatedNumber({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          let animationFrameId: number;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOut * end));
            
            if (progress < 1) {
              animationFrameId = window.requestAnimationFrame(step);
            }
          };
          
          animationFrameId = window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [end, duration, hasAnimated]);

  return <span ref={elementRef}>{count.toLocaleString()}{suffix}</span>;
}

export function Hero() {
  return (
    <section id="home" className="relative bg-white w-full lg:h-[calc(100vh-80px)] min-h-[550px] overflow-hidden font-sans flex flex-col isolate">
      
      {/* PERFECT BACKGROUND RECREATION */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* The main SVG covering the entire section to guarantee perfect proportions */}
        <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
           {/* Top Right Swooping Blob - Pulled back to the right to avoid the center text area */}
           <path d="M 850,0 C 700,200 800,600 1440,450 L 1440,0 Z" fill="#E8DFF5" />
           
           {/* Bottom Left Sweeping Wave - Restored size to be visible but still balanced */}
           <path d="M 0,580 C 250,550 450,900 1000,900 L 0,900 Z" fill="#E8DFF5" />
        </svg>

        {/* Top Right Dots */}
        <svg className="absolute top-[8%] right-0 lg:right-[5%] w-32 h-32 lg:w-40 lg:h-40 opacity-60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotsTopRef" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#B7A8D6" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dotsTopRef)" />
        </svg>

        {/* Bottom Left Dots */}
        <svg className="absolute bottom-[5%] left-[2%] w-20 h-24 lg:w-24 lg:h-32 opacity-60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotsBotRef" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#B7A8D6" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dotsBotRef)" />
        </svg>
      </div>

      <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center lg:justify-between h-full pt-4 pb-2 lg:pt-6 lg:pb-4">
        
        {/* Top Content Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 flex-1 w-full my-auto">
          
          {/* Left Content */}
          <div className="w-full lg:w-[50%] xl:w-[45%] z-20 mt-2 lg:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.5rem] font-black text-gray-900 leading-[1.05] tracking-tight mb-4">
              <span className="block sm:inline-block whitespace-nowrap">Bridging Talent</span> <br className="hidden md:block" />
              to Tech <br className="hidden md:block" />
              <span className="text-[#F36B22]">Leadership.</span>
            </h1>

            {/* Exact small orange horizontal line from reference */}
            <div className="w-10 h-1 bg-[#F36B22] mb-4 rounded-full"></div>

            <p className="text-sm lg:text-base text-gray-600 mb-6 max-w-lg leading-relaxed">
              Equipping ambitious talent with high-impact technical skills to accelerate career growth and drive the regional digital economy.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 lg:px-6 lg:py-3.5 bg-[#F36B22] text-white font-bold text-sm rounded-[6px] hover:bg-[#d95c1a] transition-colors shadow-lg shadow-orange-500/20"
              >
                Partner with us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-2 py-3 lg:py-3.5 text-gray-500 font-semibold text-sm hover:text-[#F36B22] transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 text-[#C2B5DE]" />
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full lg:w-[50%] xl:w-[55%] relative flex justify-center lg:justify-start lg:pl-8 xl:pl-12 mt-6 lg:mt-0">
            <div
              className="relative z-10 w-full max-w-[360px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[550px] aspect-[4/3] bg-gray-200 overflow-hidden shadow-2xl"
              style={{
                borderRadius: '45% 55% 40% 60% / 55% 45% 60% 40%',
                backgroundImage: 'url("/hero11.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
            </div>
          </div>

        </div>

        {/* Bottom Stats Bar - Styled exactly like reference */}
        <div className="w-full relative z-20 mt-4 lg:mt-2 mb-2 flex justify-center">
          <div className="bg-white rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.12)] py-4 px-6 md:px-8 lg:py-5 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 lg:gap-16 relative z-10 border border-gray-50">

            {/* Stat 1 */}
            <div className="flex items-center gap-3 lg:gap-4 w-full md:w-auto">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#FFF3E0] flex items-center justify-center text-[#F36B22] flex-shrink-0">
                <Users className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-black text-gray-900 text-xl lg:text-2xl leading-none mb-1"><AnimatedNumber end={10000} suffix="+" /></h3>
                <p className="text-gray-900 font-bold text-[12px] lg:text-[13px]">Trained</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-10 lg:h-12 bg-gray-100"></div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3 lg:gap-4 w-full md:w-auto">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#FFF3E0] flex items-center justify-center text-[#F36B22] flex-shrink-0">
                <Briefcase className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-black text-gray-900 text-xl lg:text-2xl leading-none mb-1"><AnimatedNumber end={80} suffix="%" /></h3>
                <p className="text-gray-900 font-bold text-[12px] lg:text-[13px]">Placement</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-10 lg:h-12 bg-gray-100"></div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3 lg:gap-4 w-full md:w-auto">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#FFF3E0] flex items-center justify-center text-[#F36B22] flex-shrink-0">
                <Award className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-black text-gray-900 text-xl lg:text-2xl leading-none mb-1"><AnimatedNumber end={20} suffix="+" /></h3>
                <p className="text-gray-900 font-bold text-[12px] lg:text-[13px]">Partners</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-10 lg:h-12 bg-gray-100"></div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3 lg:gap-4 w-full md:w-auto">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#FFF3E0] flex items-center justify-center text-[#F36B22] flex-shrink-0">
                <BookOpen className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-black text-gray-900 text-xl lg:text-2xl leading-none mb-1"><AnimatedNumber end={30} suffix="+" /></h3>
                <p className="text-gray-900 font-bold text-[12px] lg:text-[13px]">Courses</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
