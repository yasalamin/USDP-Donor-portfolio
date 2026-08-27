import React from 'react';
import { Award, CheckCircle2, ExternalLink, Star, Briefcase, Sparkles } from 'lucide-react';

export function TopFreelancers() {
  const freelancers = [
    {
      name: 'Salim Ullah',
      title: 'Senior Full-Stack Developer',
      track: 'Web Development & Cloud',
      badge: 'Top Rated Plus',
      jobSuccess: '100%',
      hoursBilled: '2,500+ hrs',
      skills: ['React.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'AWS'],
      upworkUrl: 'https://www.upwork.com/',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Khadija Bibi',
      title: 'UI/UX Product Designer',
      track: 'Product & Design Systems',
      badge: 'Top Rated',
      jobSuccess: '100%',
      hoursBilled: '1,800+ hrs',
      skills: ['Figma', 'UI/UX', 'Design Systems', 'Wireframing', 'Prototyping'],
      upworkUrl: 'https://www.upwork.com/',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Sheryar Sher',
      title: 'Cloud & Azure Solutions Specialist',
      track: 'Cloud Architecture & DevOps',
      badge: 'Top Rated',
      jobSuccess: '99%',
      hoursBilled: '1,200+ hrs',
      skills: ['Microsoft Azure', 'Cloud Architecture', 'Docker', 'Linux', 'Security'],
      upworkUrl: 'https://www.upwork.com/',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Alia Hassan',
      title: 'AI Financial & Business Intelligence Analyst',
      track: 'Data & Power BI Analytics',
      badge: 'Top Rated',
      jobSuccess: '100%',
      hoursBilled: '1,500+ hrs',
      skills: ['Power BI', 'Financial Modeling', 'Python', 'SQL', 'Data Cleaning'],
      upworkUrl: 'https://www.upwork.com/',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Asif Ali',
      title: 'Growth Performance & Technical SEO Lead',
      track: 'Digital Marketing & Growth',
      badge: 'Top Rated',
      jobSuccess: '100%',
      hoursBilled: '2,000+ hrs',
      skills: ['Technical SEO', 'GA4 Analytics', 'Google Ads', 'Content Strategy', 'CRO'],
      upworkUrl: 'https://www.upwork.com/',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Misbah Fatima',
      title: 'Mobile Application Engineer',
      track: 'iOS & Android Engineering',
      badge: 'Top Rated',
      jobSuccess: '100%',
      hoursBilled: '1,600+ hrs',
      skills: ['Flutter', 'React Native', 'REST APIs', 'Firebase', 'Mobile UX'],
      upworkUrl: 'https://www.upwork.com/',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300'
    }
  ];

  return (
    <section id="top-freelancers" className="py-10 lg:py-14 bg-white border-t border-gray-100 relative isolate overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
          <circle cx="200" cy="300" r="350" fill="#E8DFF5" opacity="0.6" />
          <path d="M 900,100 C 1200,200 1440,500 1440,800 L 1440,0 Z" fill="#E8DFF5" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#14a800] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 mb-3 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Upwork Top-Rated Talent
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black tracking-tight mb-3 uppercase">
            Top-Rated Freelancers & <span className="text-brand">Independent Pioneers</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
            Equipping trainees to thrive on global marketplaces. USDP graduates build high-reputation freelance businesses, maintaining 100% Job Success Scores and delivering high-value contracts for clients worldwide.
          </p>
        </div>

        {/* Freelancers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-2 pb-4">
          {freelancers.map((freelancer, index) => (
            <div 
              key={index} 
              className="relative rounded-3xl bg-gray-50/80 border border-gray-200/80 p-6 shadow-sm hover:shadow-xl hover:border-[#14a800]/50 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 bg-[#14a800]/10 text-[#14a800] border border-[#14a800]/30 text-[11px] font-bold px-2.5 py-1 rounded-full">
                    <Award className="w-3.5 h-3.5" />
                    {freelancer.badge}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white border border-gray-200 text-gray-700 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#14a800]" />
                    {freelancer.jobSuccess} Job Success
                  </span>
                </div>

                {/* Profile Avatar & Info */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border-2 border-white shadow-md shrink-0 bg-white">
                    <img 
                      src={freelancer.image} 
                      alt={freelancer.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-black text-gray-900 leading-snug group-hover:text-[#14a800] transition-colors">
                      {freelancer.name}
                    </h3>
                    <p className="text-xs font-bold text-brand mb-1">
                      {freelancer.title}
                    </p>
                    <p className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                      <Briefcase className="w-3 h-3 text-gray-400" />
                      {freelancer.hoursBilled}
                    </p>
                  </div>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {freelancer.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="bg-white text-gray-700 border border-gray-200/90 text-[10px] font-semibold px-2.5 py-0.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Upwork Profile Link Button */}
              <a
                href={freelancer.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 w-full py-2.5 px-4 bg-white hover:bg-[#14a800] text-[#14a800] hover:text-white border border-[#14a800]/40 font-bold rounded-xl transition-all duration-200 uppercase tracking-wider text-xs shadow-xs hover:shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-4.162 0-5.927 3.303-6.529 5.372-1.272-1.92-2.217-4.249-2.529-6.39h-3.03v7.355c0 1.956-1.586 3.542-3.542 3.542s-3.542-1.586-3.542-3.542v-7.355h-3.03v7.355c0 3.629 2.943 6.572 6.572 6.572 3.628 0 6.571-2.943 6.571-6.572v-1.745c.441 1.637 1.341 3.593 2.651 5.093l-1.634 7.742h3.117l1.094-5.188c.957.514 1.979.789 3.033.789 4.162 0 7.734-3.572 7.734-7.734s-3.572-7.734-7.734-7.734z" />
                </svg>
                View Upwork Profile
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
