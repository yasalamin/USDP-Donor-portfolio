export function Model() {
  return (
    <section id="model" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight mb-8 leading-[1.1]">
              How We Drive <br />
              <span className="text-brand">Sustainable Impact</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-[1.1rem] leading-relaxed">
              <p>
                USDP bridges the gap between raw local talent and the global digital
                economy. We go beyond basic training to build a complete pipeline of
                mentorship, market-aligned skills, and direct career access.
              </p>
              <p>
                By meeting youth at the intersection of ambition and market demand,
                we transform local potential into remote careers, tech exports, and
                thriving startups—building a self-sustaining digital ecosystem.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2">
            <div className="border border-brand p-1.5 bg-white shadow-sm">
              <img 
                src="/about.png"
                alt="uConnect social development program" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
