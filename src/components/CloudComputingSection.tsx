import { User } from 'lucide-react';
import { useEffect, useRef } from 'react';

import imgSadaf from '../assets/Microsoftc/sadaf.khan.jpg';
import imgSajid from '../assets/Microsoftc/sajid.ali.jpg';
import imgKamil from '../assets/Microsoftc/kamil.jan.jpg';
import imgAsif from '../assets/Microsoftc/asif.ali.jpg';
import imgSheryar from '../assets/Microsoftc/sheryar.sher.jpg';

export function CloudComputingSection() {
  const students = [
    { name: 'Sadaf Khan', image: imgSadaf },
    { name: 'Sajid Ali', image: imgSajid },
    { name: 'Kamil Jan', image: imgKamil },
    { name: 'Asif Ali', image: imgAsif },
    { name: 'Sheryar Sher', image: imgSheryar },
  ];

  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isPaused = useRef(false);
  const accumulatedTime = useRef(0);
  const lastTime = useRef<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;
    const radiusX = 35; // Horizontal radius in percentage
    const radiusY = 35; // Vertical radius in percentage
    const speed = 0.0001; // Orbit speed (slower)

    const animate = (time: number) => {
      if (lastTime.current === null) {
        lastTime.current = time;
      }
      let deltaTime = time - lastTime.current;
      // Cap delta time to avoid huge jumps if tab was inactive overnight
      if (deltaTime > 100) deltaTime = 16;
      lastTime.current = time;

      if (!isPaused.current) {
        accumulatedTime.current += deltaTime;
      }
      
      students.forEach((_, i) => {
        // Calculate angle for each node, evenly spaced + accumulated time offset
        const angle = (i * (Math.PI * 2) / students.length) + (accumulatedTime.current * speed);
        
        // Calculate position based on center (50, 50) and radius
        const x = 50 + radiusX * Math.cos(angle);
        const y = 50 + radiusY * Math.sin(angle);
        
        if (nodeRefs.current[i]) {
          nodeRefs.current[i]!.style.left = `${x}%`;
          nodeRefs.current[i]!.style.top = `${y}%`;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [students.length]);

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand rounded-3xl overflow-hidden shadow-xl p-5 lg:p-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 relative">
          
          {/* Left Side */}
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3 leading-tight">
              A First for <br className="hidden md:block" />
              <span className="text-white/90">Gilgit-Baltistan</span>
            </h2>
            <p className="text-base text-white/90 leading-relaxed mb-5">
              Launching the region's inaugural <span className="font-bold text-white">Cloud Computing</span> course and <span className="font-bold text-white">Microsoft Azure AI</span> Certification track. We are pioneering advanced tech education in the mountains.
            </p>
          </div>

          {/* Right Side - Huge Card */}
          <div className="lg:w-1/2 w-full flex flex-col relative z-10">
            <div className="bg-white border border-gray-100 rounded-3xl relative overflow-hidden shadow-sm h-[260px] lg:h-[300px] w-full">
              
              {/* Purple Dots Background Pattern */}
              <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="purpleDotsCard" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="2" fill="#B7A8D6" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#purpleDotsCard)" />
                </svg>
              </div>

              {/* Center USDP Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-xl ring-8 ring-brand/10 p-2 lg:p-3">
                  <img src="/micro.svg" alt="Microsoft" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Surrounding Nodes */}
              {students.map((student, index) => (
                <div 
                  key={index} 
                  ref={el => { nodeRefs.current[index] = el; }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 w-24 group cursor-pointer hover:z-30" 
                  style={{ top: '50%', left: '50%' }}
                  onMouseEnter={() => { isPaused.current = true; }}
                  onMouseLeave={() => { isPaused.current = false; }}
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-50 rounded-full border-[3px] border-brand shadow-md mb-1.5 overflow-hidden flex items-center justify-center text-brand/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:border-brand-hover">
                    {student.image ? (
                      <img src={student.image} alt={student.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <User className="w-5 h-5 lg:w-6 lg:h-6" />
                    )}
                  </div>
                  <div className="text-[9px] lg:text-[10px] font-bold text-black text-center whitespace-nowrap bg-white/90 px-1.5 py-0.5 rounded shadow-sm transition-transform duration-300 group-hover:-translate-y-1">{student.name}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}