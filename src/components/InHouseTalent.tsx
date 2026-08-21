import React, { useRef, useState } from 'react';
import { Pause, Play, Users, X } from 'lucide-react';

export function InHouseTalent() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const iframeRefs = useRef<Record<string, HTMLIFrameElement | null>>({});

  const team = [
    { name: 'Fariha', shortName: 'Fariha', videoId: 'teiArYf7WQc' },
    { name: 'Saadat', shortName: 'Saadat', videoId: 'YXF9mSFs3Jg' },
    { name: 'Misbah', shortName: 'Misbah', videoId: 'xpgVL1CqJkE' },
    { name: 'Abid', shortName: 'Abid', videoId: '-dIFLFOmJjs' },
    { name: 'Fareed', shortName: 'Fareed', videoId: '5CQT5WF_8Dc' },
    { name: 'Sheryar', shortName: 'Sheryar', videoId: 'NwLd1Lvk_GU' },
    { name: 'Kulsoom', shortName: 'Kulsoom', videoId: '3Q9oOWYAk74' },
  ];

  const hiringPartners = [
    { name: 'Calibreon', logo: '/Hiring/calibreon.png', url: 'https://www.calibreon.com/' },
    { name: 'Gilgit App', logo: '/Hiring/gilgit app.png', url: 'https://gilgit.app/' },
    { name: 'Pine', logo: '/Hiring/pine.jpg', url: 'https://www.pine-technologies.com/' },
    { name: 'Rupeeba', logo: '/Hiring/Rupeeba logo.png', url: 'https://www.facebook.com/p/Rupeeba-61584667567036/' },
    { name: 'SheDev', logo: '/Hiring/shedev.webp', url: 'https://shedev.pk/' },
    { name: 'uConnect', logo: '/Hiring/uconnect.jpg', url: 'https://uconnect.pk/' },
    { name: 'COLOGIXS', logo: '/Hiring/COLOGIXS.jpg' },
    { name: 'IMN', logo: '/Hiring/IMN.jpg' },
    { name: 'Macam Services', logo: '/Hiring/Macam Services.jpg' },
    { name: 'SASI', logo: '/Hiring/SASI.png' },
    { name: 'SDA Tech Hub', logo: '/Hiring/SDA Tech Hub.jpg' },
    { name: 'uExcel', logo: '/Hiring/uExcel.jpg' }
  ];

  const sendYoutubeCommand = (videoId: string, func: string, args: unknown[] = []) => {
    iframeRefs.current[videoId]?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args }),
      '*'
    );
  };

  const startVideo = (videoId: string) => {
    setPlayingVideo(videoId);
    setIsVideoPlaying(true);
  };

  const closeVideo = (event: React.MouseEvent, videoId: string) => {
    event.stopPropagation();
    sendYoutubeCommand(videoId, 'stopVideo');
    setPlayingVideo(null);
    setIsVideoPlaying(false);
  };

  return (
    <section className="py-6 bg-white overflow-hidden relative border-t border-gray-100">
      
      {/* Background Dots Pattern */}
      <div className="absolute top-0 left-0 w-full h-[400px] pointer-events-none z-0" style={{
        backgroundImage: 'radial-gradient(#cda24b 2px, transparent 2px)',
        backgroundSize: '24px 24px',
        opacity: 0.1
      }}></div>

      {/* Header (Constrained Width) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4">
            <Users className="w-3.5 h-3.5" /> Our Team & In-House Talent
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-4 uppercase">
            Hired directly from USDP to <span className="text-brand">uConnect</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
            Hear directly from the top graduates who turned their USDP training into full-time engineering, design, and marketing careers inside uConnect.
          </p>
        </div>
      </div>

      {/* Full-Width Accordion Carousel */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row h-[560px] md:h-[460px] xl:h-[510px] w-full gap-2 md:gap-3">
          {team.map((member, index) => (
            <div 
              key={index} 
              onClick={() => startVideo(member.videoId)}
              className="group/card relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex-1 hover:[flex:4_4_0%] min-h-[80px] md:min-h-0 md:min-w-[80px] shadow-sm hover:shadow-2xl"
            >
              {playingVideo === member.videoId ? (
                <>
                  <iframe
                    ref={(element) => { iframeRefs.current[member.videoId] = element; }}
                    src={`https://www.youtube.com/embed/${member.videoId}?autoplay=1&controls=0&enablejsapi=1&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1`}
                    title={`${member.name} testimonial`}
                    className="pointer-events-none absolute inset-0 h-full w-full border-0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                  />
                  <button
                    type="button"
                    onClick={(event) => closeVideo(event, member.videoId)}
                    className="absolute right-3 top-3 z-40 flex h-9 w-9 items-center justify-center rounded-full bg-black/65 text-white transition-colors hover:bg-brand"
                    aria-label={`Close ${member.name} video`}
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-16 left-3 right-3 z-40 flex items-center gap-3 rounded-full bg-black/65 px-3 py-2 text-white backdrop-blur-sm">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        const nextPlaying = !isVideoPlaying;
                        sendYoutubeCommand(member.videoId, nextPlaying ? 'playVideo' : 'pauseVideo');
                        setIsVideoPlaying(nextPlaying);
                      }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full hover:bg-white/20"
                      aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
                    >
                      {isVideoPlaying ? <Pause className="h-4 w-4" fill="currentColor" /> : <Play className="h-4 w-4" fill="currentColor" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onClick={(event) => event.stopPropagation()}
                      onChange={(event) => {
                        const nextVolume = Number(event.target.value);
                        setVolume(nextVolume);
                        sendYoutubeCommand(member.videoId, 'setVolume', [nextVolume]);
                      }}
                      className="h-1 w-full accent-brand"
                      aria-label="Video volume"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Custom thumbnail for the collapsed card state */}
                  <img
                    src={`/thumb/${index + 1}.png`}
                    alt={`${member.name} custom video thumbnail`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-500 group-hover/card:opacity-0"
                  />
                  {/* High-resolution YouTube frame with fallback handling */}
                  <img
                    src={`https://img.youtube.com/vi/${member.videoId}/hqdefault.jpg`}
                    onLoad={(event) => {
                      if (event.currentTarget.naturalWidth === 120) {
                        event.currentTarget.src = `https://img.youtube.com/vi/${member.videoId}/0.jpg`;
                      }
                    }}
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = `https://img.youtube.com/vi/${member.videoId}/0.jpg`;
                    }}
                    alt={`${member.name} video thumbnail`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover bg-black/10 opacity-0 transition-all duration-500 ease-out group-hover/card:scale-105 group-hover/card:opacity-100"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 transition-colors group-hover/card:bg-black/20">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand/90 backdrop-blur-sm flex items-center justify-center text-white shadow-[0_0_30px_rgba(205,162,75,0.6)]">
                      <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </>
              )}
              
              {/* Name Tag (Organic Brush Shape) */}
              <div className="absolute bottom-4 md:bottom-6 left-0 w-full flex justify-center z-30 px-2">
                <div className="relative px-4 py-2 md:px-8 md:py-3 flex items-center justify-center transition-all duration-700 transform translate-y-4 group-hover/card:translate-y-0 opacity-95 group-hover/card:opacity-100">
                  
                  {/* Custom Organic SVG Background */}
                  <svg className="absolute inset-0 w-full h-full text-brand drop-shadow-lg transition-transform duration-500 group-hover/card:scale-110" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path fill="currentColor" d="M4,10 Q45,2 96,10 Q99,50 96,90 Q45,98 4,90 Q1,50 4,10 Z" />
                  </svg>
                  
                  <div className="relative z-10 text-white font-black text-xs md:text-base uppercase tracking-wider whitespace-nowrap">
                    {/* Show short name when collapsed */}
                    <span className="block group-hover/card:hidden">{member.shortName}</span>
                    {/* Show full name when expanded */}
                    <span className="hidden group-hover/card:block">{member.name}</span>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Hiring Partners Logo Slots */}
        <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50/70 p-5 sm:p-7">
          <h3 className="mb-5 text-center text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
            Partners Actively Hiring from USDP
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {hiringPartners.map((partner) => {
              const logo = <img src={partner.logo} alt={`${partner.name} logo`} className="max-h-12 w-full object-contain" />;
              const className = "flex h-20 items-center justify-center rounded-xl border border-gray-200 bg-white p-3 transition-shadow hover:shadow-md";
              return partner.url ? (
                <a key={partner.name} href={partner.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${partner.name} website`} className={className}>{logo}</a>
              ) : (
                <div key={partner.name} className={className}>{logo}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
