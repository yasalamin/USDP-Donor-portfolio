import { Linkedin } from 'lucide-react';

export function Spotlight() {
  const entrepreneurs = [
    {
      name: 'Sarah Jenkins',
      role: 'Founder, TechFlow',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
      desc: 'Launched a B2B SaaS platform now used by 500+ clinics worldwide.',
    },
    {
      name: 'Marcus Chen',
      role: 'CTO, DataSync',
      image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=600&auto=format&fit=crop',
      desc: 'Built a real-time analytics engine after graduating from the Web Dev program.',
    },
    {
      name: 'Amira Hassan',
      role: 'Lead Designer, StudioX',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
      desc: 'Award-winning UX designer redefining accessible interfaces.',
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
            Alumni Spotlight
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Meet the visionaries who used uConnect as a launchpad to build their own successful ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {entrepreneurs.map((person, index) => (
            <div key={index} className="bg-white border border-gray-200 hover:border-brand transition-colors p-6 group">
              <div className="aspect-[4/3] w-full mb-6 overflow-hidden bg-gray-100">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black text-black">{person.name}</h3>
                  <p className="text-brand font-bold uppercase tracking-wider text-sm mt-1">{person.role}</p>
                </div>
                <a href="#linkedin" className="text-gray-400 hover:text-brand transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {person.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}