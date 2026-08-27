import { Menu, Search, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Impact', path: '/impact' },
    { name: 'Programs', path: '/programs' },
    { name: 'Collaborations', path: '/collaborations' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const searchablePages = [
    { name: 'Home', path: '/', keywords: 'home training skills' },
    { name: 'Impact', path: '/impact', keywords: 'impact ventures alumni careers global reach videos upwork freelancers top rated independent talent' },
    { name: 'Programs', path: '/programs', keywords: 'programs courses learning training' },
    { name: 'Collaborations', path: '/collaborations', keywords: 'collaborations social development technology partners' },
    { name: 'About', path: '/about', keywords: 'about framework founder sustainable impact' },
    { name: 'Contact', path: '/contact', keywords: 'contact form partnership support get in touch' }
  ];

  const searchResults = searchQuery.trim()
    ? searchablePages.filter((page) => `${page.name} ${page.keywords}`.toLowerCase().includes(searchQuery.trim().toLowerCase()))
    : [];

  const submitSearch = (path?: string) => {
    const destination = path ?? searchResults[0]?.path;
    if (!destination) return;
    navigate(destination);
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center cursor-pointer">
          <Link to="/" className="flex items-center h-full py-2">
            <img 
              src="/uc.skill.png" 
              alt="UCO Skill Development Program" 
              className="h-8 md:h-12 w-auto object-contain scale-[1.2] md:scale-[1.3] origin-left mix-blend-multiply" 
            />
          </Link>
        </div>

        {/* Links */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold relative group transition-colors ${
                location.pathname === link.path ? 'text-brand' : 'text-gray-900 hover:text-brand'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-brand transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="relative flex items-center space-x-3">
          {isSearchOpen && (
            <div className="relative">
              <form onSubmit={(event) => { event.preventDefault(); submitSearch(); }}>
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search pages..."
                  aria-label="Search pages"
                  className="w-44 sm:w-56 border-b-2 border-brand bg-transparent px-1 py-1 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />
              </form>
              {searchQuery && (
                <div className="absolute right-0 top-9 z-50 w-56 rounded-md border border-gray-200 bg-white py-1 text-left shadow-lg">
                  {searchResults.length > 0 ? searchResults.map((result) => (
                    <button
                      key={result.path}
                      type="button"
                      onClick={() => submitSearch(result.path)}
                      className="block w-full px-3 py-2 text-left text-sm font-normal text-gray-700 hover:bg-brand/10 hover:text-brand"
                    >
                      {result.name}
                    </button>
                  )) : (
                    <p className="px-3 py-2 text-sm text-gray-500">No matching page</p>
                  )}
                </div>
              )}
            </div>
          )}
          <button
            type="button"
            onClick={() => { setIsSearchOpen((open) => !open); setSearchQuery(''); }}
            className="text-gray-900 hover:text-brand transition-colors"
            aria-label={isSearchOpen ? 'Close search' : 'Open search'}
          >
            {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
          </button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="text-gray-900 transition-colors hover:text-brand md:hidden"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 border-2 border-brand text-brand font-bold text-sm tracking-wide uppercase hover:bg-brand hover:text-white transition-colors duration-200 rounded-full"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 py-4 shadow-md md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-bold transition-colors ${
                  location.pathname === link.path ? 'bg-brand/10 text-brand' : 'text-gray-900 hover:bg-brand/5 hover:text-brand'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full border-2 border-brand px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
