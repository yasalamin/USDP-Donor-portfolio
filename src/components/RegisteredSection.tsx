const registeredAuthorities = [
  { name: 'Gilgit-Baltistan Securities and Exchange Authority', logo: '/Registered/GBSHA.png' },
  { name: 'Pakistan Software Houses Association', logo: '/Registered/PASHA.png' },
  { name: 'Pakistan Software Export Board', logo: '/Registered/PSEB.png' },
  { name: 'Securities and Exchange Commission of Pakistan', logo: '/Registered/SECP.png' }
];

export function RegisteredSection() {
  return (
    <section className="border-t border-gray-100 bg-gray-50 py-10 sm:py-12" aria-labelledby="registered-with-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 id="registered-with-title" className="text-center text-xs font-bold uppercase tracking-[0.24em] text-gray-500 sm:text-sm">
            Registered With
          </h2>
          <div className="mt-6 grid grid-cols-2 items-center gap-5 sm:grid-cols-4 sm:gap-8">
            {registeredAuthorities.map((authority, index) => (
              <div key={authority.name} className="flex h-16 items-center justify-center rounded-xl border border-gray-100 bg-gray-50/60 p-3 sm:h-20">
                <img
                  src={authority.logo}
                  alt={authority.name}
                  className={`w-full object-contain ${index >= 2 ? 'max-h-16 sm:max-h-20' : 'max-h-12 sm:max-h-14'}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
