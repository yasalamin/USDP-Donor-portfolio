export function Collaborations() {
  const programs = [
    {
      title: 'uConnect x AP: Mountain Tech Pathways',
      description: 'Through our partnership with Accelerate Prosperity, uConnect drives youth digital empowerment across Gilgit-Baltistan and Upper and Lower Chitral. By hosting targeted community tech bootcamps and digital literacy training, we equip underserved youth with in-demand IT skills, building direct pathways into freelancing, remote work, and sustainable tech careers.',
      secondLogo: '/partners/AP.png',
    },
    {
      title: 'uConnect x NAVTTC: Scaling Technical Workforce Development',
      description: 'In collaboration with NAVTTC and public-sector initiatives since 2021, uConnect expands inclusive technical education and youth employment opportunities across Gilgit-Baltistan. Through industry-aligned digital training and specialized workforce development programs, we equip regional talent with market-ready IT skills to drive sustainable career growth in the digital economy.',
      secondLogo: '/partners/navttc.png',
    },
    {
      title: 'uConnect x AKRSP: Mentoring Future Tech Leaders',
      description: 'Partnering with AKRSP Chitral, uConnect Technologies delivered an intensive Training of Trainers (TOT) program to cultivate regional tech leaders in Digital Marketing, UX/UI Design, Graphic Design, and Digital Literacy. Through immersive hands-on IT training, leadership mentorship, and specialized department rotations, we prepared top candidates to serve as future trainers and anchor local enterprise development, driving long-term youth economic empowerment across Chitral.',
      secondLogo: '/partners/AKRSP.jpg',
    },
    {
      title: 'uConnect x KADO: Building Sustainable Tech Villages',
      description: 'Partnering with KADO, uConnect supports the establishment of e-earning centers and connected technology villages across remote valleys in Hunza (Passu, Ghulkin, Aliabad, Karimabad) and Nagar (Nagar Khas, Khanabad). By providing high-speed internet hubs, localized workspaces, and advanced digital skills training in freelancing and digital marketing, we drive digital inclusion and create sustainable, location-independent remote work opportunities for mountain youth and women.',
      secondLogo: '/partners/KADO.png',
    },
    {
      title: 'uConnect x KIU: Nurturing Campus Tech Talent',
      description: 'Through our strategic partnership with Karakoram International University (KIU), uConnect Technologies empowers the next generation of software innovators by funding the merit-based uConnect Talent Hunt Scholarship. By covering semester tuition for standout Computer Science and IT students based on practical tech competence—complemented by hands-on industry internships at uConnect—we bridge academia with the market to fast-track youth IT careers in Gilgit-Baltistan.',
      secondLogo: '/partners/KIU.jpg',
    }
  ];

  return (
    <section id="collaborations" className="pt-10 pb-16 bg-gray-50 border-t border-gray-100 overflow-hidden relative isolate">
      {/* UNIQUE BACKGROUND BLOBS & DOTS for About Page */}
      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
           {/* Top Left Swooping Blob */}
           <path d="M 0,0 L 400,0 C 600,200 300,500 0,400 Z" fill="#E8DFF5" />
           {/* Bottom Right Sweeping Blob */}
           <path d="M 1440,900 L 900,900 C 1100,700 1300,500 1440,600 Z" fill="#E8DFF5" />
        </svg>

        {/* Top Left Dots */}
        <svg className="absolute top-[5%] left-[5%] w-32 h-32 lg:w-40 lg:h-40 opacity-50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="aboutDotsTop" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#B7A8D6" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#aboutDotsTop)" />
        </svg>

        {/* Bottom Right Dots */}
        <svg className="absolute bottom-[5%] right-[5%] w-24 h-32 lg:w-32 lg:h-40 opacity-50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="aboutDotsBot" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#B7A8D6" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#aboutDotsBot)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tight mb-4 uppercase">
            Social-Development Tech <span className="text-brand">Programs</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Partnering with industry leaders to drive meaningful change through innovative technology solutions and skill-building initiatives.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col gap-6 md:gap-8">
            {programs.map((program, index) => (
              <div key={program.title} className="w-full">
                <article className={`relative overflow-hidden rounded-3xl border p-6 sm:p-7 md:p-8 text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 ${
                  index % 2 === 0 
                    ? 'border-[#b7a8d6] bg-gradient-to-br from-[#63549a] via-[#574687] to-[#40336c]' 
                    : 'border-[#d0c6eb] bg-gradient-to-br from-[#50417f] via-[#46366f] to-[#342957]'
                }`}>
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border-[18px] border-white/10" />
                  <div className="pointer-events-none absolute -bottom-16 left-1/3 h-32 w-32 rounded-full bg-white/5" />
                  
                  {/* Card Header: Title + Badge + Logos */}
                  <div className="relative z-10 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/20 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="shrink-0 rounded-full border border-white/30 bg-white/10 px-2.5 py-0.5 text-xs font-bold tracking-widest text-white/90">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black uppercase leading-snug tracking-wide text-white">
                        {program.title}
                      </h3>
                    </div>

                    {/* Partner Logos side-by-side */}
                    <div className="flex items-center gap-2 shrink-0 bg-white/10 p-1.5 rounded-2xl border border-white/20 backdrop-blur-sm self-start sm:self-auto">
                      <div className="flex h-9 w-20 sm:h-10 sm:w-24 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
                        <img src="/partners/UC.png" alt="uConnect logo" className="max-h-full w-full object-contain" />
                      </div>
                      <span className="text-white/60 font-bold text-xs">+</span>
                      <div className="flex h-9 w-20 sm:h-10 sm:w-24 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
                        <img src={program.secondLogo} alt={`${program.title} partner logo`} className="max-h-full w-full object-contain" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10">
                    <p className="text-sm sm:text-base font-normal leading-relaxed text-white/90">
                      {program.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
