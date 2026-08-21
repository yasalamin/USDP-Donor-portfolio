import { Link, useLocation } from "react-router-dom";
import { Facebook, Globe2, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const { pathname } = useLocation();
  const footerQuestions: Record<string, string> = {
    '/': 'Ready to change a life?',
    '/impact': 'Ready to create a lasting impact?',
    '/programs': 'Ready to turn potential into progress?',
    '/collaborations': 'Ready to be someone’s turning point?',
    '/about': 'Ready to open the door to a brighter future?',
    '/contact': 'Explore more of our work?'
  };

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Call to Action */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-normal italic text-black tracking-tight mb-6">
            {footerQuestions[pathname] ?? footerQuestions['/']}
          </h2>
          <Link
            to={pathname === '/contact' ? '/' : '/contact'}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-brand text-white font-bold text-sm uppercase tracking-widest hover:bg-brand-hover transition-colors duration-200 shadow-sm rounded-full"
          >
            {pathname === '/contact' ? 'Back to Home' : 'Contact Us'}
          </Link>
        </div>

        {/* Minimal Footer */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center h-full">
              <img 
                src="/uc.skill.png" 
                alt="UCO Skill Development Program" 
                className="h-10 md:h-14 w-auto object-contain scale-[1.2] md:scale-[1.4] origin-center md:origin-left mix-blend-multiply" 
              />
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://www.facebook.com/uConnectSDP/" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:opacity-80 transition-opacity" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/uconnectsdp/" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:opacity-80 transition-opacity" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/uconnectsdp/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:opacity-80 transition-opacity" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://uconnect.pk/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-700 hover:text-brand transition-colors" aria-label="uConnect website" title="uConnect website">
              <Globe2 className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm text-gray-400 font-medium">
            &copy; {new Date().getFullYear()} uConnect. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
