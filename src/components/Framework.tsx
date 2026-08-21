import { Handshake, TrendingUp, Globe2, BarChart3, Briefcase, Award } from 'lucide-react';

export function Framework() {
  const pillars = [
    {
      title: 'Community-Anchored',
      icon: Handshake,
      description: 'Our initiatives are built with and for the local community. Local partners, community leaders, and regional networks anchor every program, ensuring complete cultural alignment, strong accessibility, and deep-rooted trust.',
    },
    {
      title: 'Market-Aligned',
      icon: TrendingUp,
      description: 'Skills without market demand lead nowhere. We continuously align our curriculum—from Web Development to Digital Marketing—with real-time industry needs, ensuring our trainees learn what global clients and top employers are actively hiring for.',
    },
    {
      title: 'Ecosystem-Driven',
      icon: Globe2,
      description: 'We go beyond classroom education. By connecting trainees with active alumni networks, local incubators, and global remote marketplaces, we build an interconnected web of ongoing mentorship and peer support.',
    },
    {
      title: 'Impact-Tracked',
      icon: BarChart3,
      description: 'We measure what matters. Through continuous data collection and analytics, we track graduate employment rates, remote revenue, and startup launches to give partners and donors transparent, verifiable proof of impact.',
    },
    {
      title: 'Opportunity-Linked',
      icon: Briefcase,
      description: 'Learning is only step one; earning is the ultimate goal. We actively build direct pathways to freelancing, remote job placements, and local tech ventures, ensuring every graduate turns skills into sustainable income.',
    },
    {
      title: 'Scalable & Sustainable',
      icon: Award,
      description: 'Designed for exponential regional growth. Every cohort, training module, and partnership framework is built to replicate efficiently across new valleys and communities without inflating operational costs.',
    },
  ];

  return (
    <section id="framework" className="py-8 lg:py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block bg-brand text-white text-sm font-bold uppercase tracking-widest px-4 py-1.5 mb-4">
            Our Framework
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-4 uppercase">
            Our Core <span className="text-brand">Pillars</span>
          </h2>
          <p className="text-base text-gray-600">
            USDP's initiative is built on six core pillars that transform regional potential into global digital impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className={`p-6 lg:p-8 border transition-all duration-300 rounded-sm shadow-md hover:shadow-lg group hover:-translate-y-1 ${
                index === 0
                  ? 'bg-brand border-brand text-white hover:bg-brand-hover hover:border-brand-hover'
                  : 'bg-white border-gray-200 text-black hover:bg-brand hover:border-brand hover:text-white'
              }`}
            >
              <div className="mb-4 lg:mb-5">
                <pillar.icon className={`w-8 h-8 lg:w-10 lg:h-10 stroke-[1.5] transition-colors duration-300 ${
                  index === 0 ? 'text-white' : 'text-brand group-hover:text-white'
                }`} />
              </div>
              <h3 className={`text-xl font-bold mb-2 lg:mb-3 transition-colors duration-300 ${
                index === 0 ? 'text-white' : 'text-black group-hover:text-white'
              }`}>
                {pillar.title}
              </h3>
              <p className={`leading-relaxed text-sm lg:text-base transition-colors duration-300 ${
                index === 0 ? 'text-white/90' : 'text-gray-600 group-hover:text-white/90'
              }`}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}